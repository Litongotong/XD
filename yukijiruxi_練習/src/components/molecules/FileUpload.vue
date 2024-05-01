<template>
  <ItemWrapper v-bind="props">
    <input :style="computedInputStyle" :value="fileName" :readonly="true" />
    <ButtonExtend
      :button-title="buttonTitle"
      :button-width="buttonWidth"
      @on-click="handleClick"
    />
    <input
      type="file"
      class="input-file-tag"
      ref="uploader"
      accept=".csv"
      @change="handleChange"
    />
  </ItemWrapper>
</template>

<script lang="ts" setup>
import type { ItemWrapperProperty } from '@/types/components'

import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import { ensureUnit } from '@/utils'
import { computed, type CSSProperties } from 'vue'
import { HTMLEvents } from '@/enums/html-events'
import { ref } from 'vue'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description ファイル選択用のボタン幅の属性 */
      buttonWidth?: string
      /** @description ファイル選択用のボタンタイトルの属性 */
      buttonTitle: string
    } & {
      /** @description 実際のファイル選択の属性 */
      inputWidth?: string
    }
  >(),

  {
    buttonWidth: '96',
    buttonTitle: '選択',
  },
)

const uploader = ref<HTMLInputElement | undefined>()
const fileName = ref<string>('')

// [[動的スタイル]]
const computedInputStyle = computed<CSSProperties>(() => ({
  width: ensureUnit(props.inputWidth),
  height: '24px',
  boxSizing: 'border-box',
}))

const EVENT = {
  ON_CHANGE: HTMLEvents.CHANGE,
}

const emit = defineEmits<{
  (event: typeof EVENT.ON_CHANGE, file: File): void
}>()

// ボタンがクリックされた時の処理
function handleClick() {
  uploader.value?.click()
}

// ファイル選択 input でファイルが選択された時の処理
function handleChange() {
  const file = uploader.value?.files?.[0] ?? ({} as File)
  fileName.value = file?.name ?? ''
  emit(EVENT.ON_CHANGE, file)
}
</script>

<style scoped>
.input-file-tag {
  display: none;
}
</style>
