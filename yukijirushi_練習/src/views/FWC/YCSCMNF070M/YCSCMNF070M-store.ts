import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useYCSCMNF070MStore = defineStore('YCSCMNF070M', () => {
  /** @description メッセージコード */
  const messageCode = ref<string>('')

  /**
   * @description メッセージコードを設定
   * @param value
   */
  function setMessageCode(value: string) {
    messageCode.value = value
  }

  /** @description 詳細 */
  const errorDetail = ref<string>('')

  /**
   * @description 詳細を設定
   * @param value
   */
  function setErrorDetail(value: string) {
    errorDetail.value = value
  }

  /** @description 発生日時 */
  const errorDate = ref<string>('')

  /**
   * @description 発生日時を設定
   * @param value
   */
  function setErrorDate(value: string) {
    errorDate.value = value
  }

  return {
    messageCode,
    setMessageCode,
    errorDetail,
    setErrorDetail,
    errorDate,
    setErrorDate,
  }
})
