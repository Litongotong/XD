<template>
  <div
    :data-item-id="id"
    :data-component-name="EComponentName.SMSJCFFieldFilledDateExt"
    :style="commonStyle"
    class="box"
  >
    <input class="file-input" :value="fileName" readonly="true" />
    <button class="base-button" @click="handleClick">
      {{ title }}
    </button>
    <input
      type="file"
      class="input-file-tag"
      ref="uploader"
      :accept="filetype"
      @change="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import type { SMSFileDialogProps } from './types'
import type { SMSFileDialogData } from '@/lib/sms/sol/sys/cjf/SMSFileDialogData'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { computed, ref } from 'vue'
import { getInstance } from '../utils/instance'
import { calculateCommonStyle } from '../utils/transform'

defineOptions({
  name: EComponentName.SMSJCFFieldFilledDateExt,
})

// 部品 props
const props = defineProps<SMSFileDialogProps>()
const id = props.id

// 部品データを用意する
const instance = getInstance<SMSFileDialogData>(props)

const uploader = ref<HTMLInputElement | undefined>()
const fileName = ref<string>('')

const title = computed(() => {
  let result = ''

  const fallback = props.title || '選択'
  result = fallback

  const insTitle = instance?.title.value
  if (insTitle && insTitle.length > 0) {
    result = insTitle
  }

  return result
})

const filetype = computed(() => {
  let result = ''

  const fallback = props.filetype || '.csv'
  result = fallback

  const insFiletype = instance?.filetype.value
  if (insFiletype && insFiletype.length > 0) {
    result = insFiletype
  }

  return result
})

// 算出スタイル
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })
  // 文字選択不可にする
  style.userSelect = 'none'
  return style
})

const handleChange = () => {
  const file = uploader.value?.files?.[0] ?? ({} as File)
  fileName.value = file?.name ?? ''

  instance?.setData(file)
}

const handleClick = () => {
  uploader.value?.click()
}
</script>

<style scoped>
.file-input {
  height: 100%;
  flex: 0.8;
  margin-right: 1px;
  outline: none;
  font-size: var(--font-size-default);
  font-family: var(--font-family-default);
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

.base-button-disabled {
  color: var(--jcf-button-disabled-color);
}

.input-file-tag {
  display: none;
}

.box {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>
