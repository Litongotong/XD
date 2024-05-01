<template>
  <div class="confirmation-center" v-if="computedShowDialog">
    <div class="confirmation-box">
      <div class="confirmation-box-border">
        <!-- 上部分の枠と”×”ボタン -->
        <div class="confirmation-header">
          <div class="confirmation-header-close-button">
            <ButtonExtend
              class="close-button"
              button-title="✖"
              :disabled="computedCloseButtonDisabled"
              :button-width="computedCloseButtonWidth"
              :button-height="computedCloseButtonHeight"
              @on-click="closeModel"
            />
          </div>
        </div>
        <!-- 中部分の記述 -->
        <div class="confirmation-describe">
          <div class="confirmation-describe-img">
            <img
              src="@/assets/dialogHelpIcon.svg"
              alt="dialogHelpIcon"
              width="30"
              height="30"
            />
          </div>
          <div class="confirmation-describe-text">
            <BaseText :label="computedDescribeText" />
          </div>
        </div>
        <!-- 下部分のボタングループ -->
        <div class="confirmation-button-group">
          <ButtonGroup :buttons="computedDialogButtonConfigs" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Button } from '@/types/components'

import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import ButtonGroup from './ButtonGroup.vue'
import BaseText from '../atoms/BaseText.vue'
import { useDialog } from '@/stores/dialog'
import { computed } from 'vue'

const dialogStore = useDialog()

const props = defineProps<{
  /** @description ダイアログを表示属性 */
  showDialog?: boolean
  /** @description ダイアログのボタン設定属性 */
  dialogButtonConfigs?: Button.Config[]
  /** @description ダイアログの幅属性 */
  dialogWidth?: string
  /** @description ダイアログの高さ属性 */
  dialogHeight?: string
  /** @description 説明テキスト属性 */
  describeText?: string
  /** @description 説明の高さ属性 */
  describeHeight?: string
  /** @description 閉じるボタンが無効化属性 */
  closeButtonDisabled?: boolean
  /** @description 閉じるボタンの幅属性 */
  closeButtonWidth?: string | number
  /** @description 閉じるボタンの高さ属性 */
  closeButtonHeight?: string | number
}>()

// 計算プロパティ：ダイアログを表示するかどうかを確定する
const computedShowDialog = computed(() => {
  return dialogStore.showDialog ?? props.showDialog
})

// 計算プロパティ：ダイアログのボタン設定を確定する
const computedDialogButtonConfigs = computed(() => {
  return (
    dialogStore.dialogConfig.dialogButtonConfigs ?? props.dialogButtonConfigs
  )
})

const computedDescribeText = computed(() => {
  return dialogStore.dialogConfig.describeText ?? props.describeText
})

const computedDialogWidth = computed(() => {
  return dialogStore.dialogConfig.dialogWidth ?? props.dialogWidth
})

const computedDialogHeight = computed(() => {
  return dialogStore.dialogConfig.dialogHeight ?? props.dialogHeight
})

const computedCloseButtonWidth = computed(() => {
  return dialogStore.dialogConfig.closeButtonWidth ?? props.closeButtonWidth
})

const computedCloseButtonHeight = computed(() => {
  return dialogStore.dialogConfig.closeButtonHeight ?? props.closeButtonHeight
})

const computedCloseButtonDisabled = computed(() => {
  return (
    dialogStore.dialogConfig.closeButtonDisabled ?? props.closeButtonDisabled
  )
})

function closeModel() {
  dialogStore.setShowDialog(false)
}
</script>

<style scoped>
.confirmation-center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
}
.confirmation-box {
  display: flex;
  background-color: var(--color-white);
  width: v-bind('computedDialogWidth');
  height: v-bind('computedDialogHeight');
  border: 1px solid var(--color-black);
}
.confirmation-box-border {
  position: relative;
  border: 1px solid var(--color-light-gray);
  flex-grow: 1;
}
.close-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.2rem;
}
.confirmation-header {
  background-color: var(--color-deep-bule);
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: flex-end;
}
.confirmation-describe {
  display: flex;
  margin-top: 1rem;
  justify-content: center;
}

.confirmation-describe-text {
  align-items: center;
  display: flex;
  margin-left: 1rem;
}

.confirmation-button-group {
  display: flex;
  position: absolute;
  bottom: 0;
  margin-bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
