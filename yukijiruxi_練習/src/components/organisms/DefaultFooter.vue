<template>
  <div class="footer">
    <div class="footer-message">
      <ErrorMessageText
        v-if="message.pageErrorMessage.length > 0"
        :message="message.pageErrorMessage"
      />
      <SuccessMessageText
        v-if="
          message.pageErrorMessage.length === 0 &&
          message.pageSuccessMessage.length > 0
        "
        :message="message.pageSuccessMessage"
      />
    </div>
    <div class="footer-buttons">
      <FooterButtonGroup />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ErrorMessageText from '@/components/atoms/ErrorMessageText.vue'
import SuccessMessageText from '@/components/atoms/SuccessMessageText.vue'
import FooterButtonGroup from '@/components/molecules/FooterButtonGroup.vue'

import { useMessage } from '@/stores/message'

//画面に表示する 成功 or 失敗 メッセージ
const message = useMessage()
</script>

<style scoped>
.footer {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.footer-message {
  width: 944px;
  height: 24px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 16px;
  top: 8px;
}

.footer-buttons {
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 16px;
  top: 32px;
}
</style>
