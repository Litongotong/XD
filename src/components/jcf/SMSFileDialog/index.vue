<template>
  <div
    :data-item-id="id"
    :data-component-name="EComponentName.SMSJCFFieldFilledDateExt"
    :style="commonStyle"
    class="box"
  >
    <input class="file-input" :value="title" readonly />
    <button class="base-button" @click="handleClick" :disabled="isDisabled">
      {{ buttonText }}
    </button>
    <input
      type="file"
      class="input-file-tag"
      ref="uploader"
      v-bind:[acceptTag]="filetype"
      @change="handleChange"
      v-bind:[fileTypeAttr]="true"
    />
  </div>
</template>

<script setup lang="ts">
import type { SMSFileDialogProps } from './types'
import { SMSFileDialogData } from '@/lib/sms/sol/sys/cjf/SMSFileDialogData'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { computed, ref } from 'vue'
import { getInstance } from '../utils/instance'
import { calculateCommonStyle } from '../utils/transform'
import { Adapter } from '@/lib/adapter/adapter'
import { NativeFile } from '@/lib/native/io/File'

defineOptions({
  name: EComponentName.SMSJCFFieldFilledDateExt,
})

enum ESelectFileType {
  file = SMSFileDialogData.MODE_FILE,
  dir = SMSFileDialogData.MODE_FOLDER,
}

// 部品 props
const props = defineProps<SMSFileDialogProps>()
const id = props.id

// 部品データを用意する
const instance = getInstance<SMSFileDialogData>(props)

const isDisabled = computed(() => {
  const usingEnabled = instance ? instance.enabled.value : props.enabled
  return usingEnabled === false
})

const uploader = ref<HTMLInputElement>(null!)
const title = instance ? instance.title : ref('')

const allowSelectFileType = computed(() => {
  if (instance) {
    const type = instance.chooseMode.value
    if (typeof type === 'number') {
      return type as ESelectFileType
    }
  }
  return ESelectFileType.file
})

const allowSelectFileOnly = computed(() => {
  return allowSelectFileType.value === ESelectFileType.file
})
const allowSelectDirOnly = computed(() => {
  return allowSelectFileType.value === ESelectFileType.dir
})

const fileTypeAttr = computed(() => {
  return allowSelectFileOnly.value ? '' : 'webkitdirectory'
})

const buttonText = computed(() => {
  const fallback = props.title || '選択'

  if (instance) {
    const insTitle = instance?.title.value
    return insTitle || fallback
  }

  return fallback
})

const transformFileType = (type?: string) => {
  if (!type?.length) {
    return ''
  }
  const allowFileType = type
    .split(',')
    .map((t) => {
      t = t.replace('*', '')
      return t.trim()
    })
    .filter(Boolean)

  const result = allowFileType.join(',')
  return result
}

const acceptTag = computed(() => {
  if (allowSelectFileOnly.value) {
    return 'accept'
  }
  return ''
})

const filetype = computed(() => {
  let result: string | undefined

  const fallback = props.fileType

  if (instance) {
    const insFiletype = instance?.filetype.value
    result = insFiletype || fallback
  } else {
    result = fallback
  }

  return transformFileType(result)
})

// 算出スタイル
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })
  // 文字選択不可にする
  style.userSelect = 'none'
  return style
})

const adapter = Adapter.create()

const dispatchAction = () => {
  if (props.id?.length && props.selectFileActionCode?.length) {
    adapter.extra.wrap({
      actionCode: props.selectFileActionCode,
      itemId: props.id!,
    })
  }
}

const handleChange = () => {
  // single file
  if (allowSelectFileOnly.value) {
    const file = uploader.value?.files?.[0] as File | undefined
    if (!file) {
      title.value = ''
    } else {
      const fileName = file.name || ''
      title.value = fileName
      if (instance) {
        const nativeFile = new NativeFile(fileName)
        // set property
        nativeFile._file = file
        // set to instance
        instance.fullPath.value = fileName
        instance.file.value = nativeFile
      }
      dispatchAction()
    }
  } else if (allowSelectDirOnly.value) {
    // dir
    const files = [...(uploader.value?.files || [])] as File[]
    if (!files.length) {
      title.value = ''
      return
    }
    const dirName = files[0].webkitRelativePath.split('/')?.[0] || ''
    title.value = dirName
    if (instance) {
      const nativeFile = new NativeFile(dirName)
      // set property
      nativeFile._dirName = dirName
      nativeFile._listFile = files
      // set to instance
      instance.fullPath.value = dirName
      instance.file.value = nativeFile
    }
    dispatchAction()
  }
}

const handleClick = () => {
  uploader.value?.click()
}

// TODO: how impl the default path ?
</script>

<style scoped>
.file-input {
  height: 100%;
  flex: 1;
  margin-right: 1px;
  outline: none;
  font-size: inherit;
  font-family: inherit;
}
.base-button {
  align-items: center;
  box-shadow: var(--jcf-button-shadow);
  display: flex;
  justify-content: center;
  margin-left: 1px;
  height: 100%;
  flex: 0.2;
}

.base-button[disabled] {
  color: var(--jcf-button-disabled-color);
}

.input-file-tag {
  display: none;
}

.box {
  display: flex;
  align-items: center;
}
</style>
