import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useYCMKMSFB30MStore = defineStore('YCMKMSFB30M', () => {

  const SMSJCFSpread1 = ref()
  function setSMSJCFSpread1(value: any) {
    SMSJCFSpread1.value = value
  }
  const body_spread = ref()
  function setBody_spread(value: any) {
    body_spread.value = value
  }
  //wijimo
  const spreadColumns = ref()
  function setSpreadColumns(value: any) {
    spreadColumns.value = value
  }
  const kensu = ref<number>(0)
  function setKensu(text: number) {
    kensu.value = text
  }
  const CdJugyoin = ref<string>('')
  function setCdJugyoin(value: string) {
    CdJugyoin.value = value
  }
  const NmJugyoinMyoji = ref<string>('')
  function setNmJugyoinMyoji(value: string) {
    NmJugyoinMyoji.value = value
  }
  const NmJugyoinNamae = ref<string>('')
  function setNmJugyoinNamae(value: string) {
    NmJugyoinNamae.value = value
  }
  const Search021Result = ref<string>('')
  function SetSearch021Result(text: string) {
    Search021Result.value = text
  }

  return {
    Search021Result,
    SetSearch021Result,
    NmJugyoinNamae,
    setNmJugyoinNamae,
    NmJugyoinMyoji,
    setNmJugyoinMyoji,
    CdJugyoin,
    setCdJugyoin,
    kensu,
    setKensu,
    spreadColumns,
    setSpreadColumns,
    SMSJCFSpread1,
    setSMSJCFSpread1,
    setBody_spread,
    body_spread
  }
})