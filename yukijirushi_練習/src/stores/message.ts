import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMessage = defineStore('message', () => {
  const pageErrorMessage = ref('')
  function setPageErrorMessage(message: string): void {
    pageErrorMessage.value = message
  }

  const pageSuccessMessage = ref('')
  function setPageSuccessMessage(message: string): void {
    pageSuccessMessage.value = message
  }

  function clearPageMessages() {
    setPageErrorMessage('')
    setPageSuccessMessage('')
  }

  /** フッターメッセージをクリア */
  const clearFooterMessage = () => {
    setPageErrorMessage('')
    setPageSuccessMessage('')
  }

  return {
    pageErrorMessage,
    setPageErrorMessage,
    pageSuccessMessage,
    setPageSuccessMessage,
    clearPageMessages,
    clearFooterMessage,
  }
})
