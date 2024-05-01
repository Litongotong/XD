import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Dropdown } from '@/types/components'

export const useYCMKMSFB31SStore = defineStore('YCMKMSFB31S', () => {
  const mode = ref()
  function setMode(value: any) {
    mode.value = value
  }

  const nmRonrisakujo = ref()
  function setNmRonrisakujo(value: any) {
    nmRonrisakujo.value = value
  }

  const body_delete = ref()
  function setBody_delete(value: any) {
    body_delete.value = value
  }

  const body_copy = ref()
  function setBody_copy(value: any) {
    body_copy.value = value
  }

  const body_cancel = ref()
  function setBody_cancel(value: any) {
    body_cancel.value = value
  }

  /**
   * @description 社員区分option
   * @param list
   */
  const syainKubunOpt = ref<Dropdown.Option[]>([])
  function setSyainKubunOpt(list: Dropdown.Option[]) {
    syainKubunOpt.value = list
  }
  /**
   * @description 社員区分text表示
   * @param text
   */
  const syainKubun = ref<string>('')
  function setSyainKubun(text: string) {
    syainKubun.value = text
  }
  /**
   * @description 社員区分option表示
   * @param list
   */
  const zaisekiKubunOpt = ref<Dropdown.Option[]>([])
  function setZaisekiKubunOpt(list: Dropdown.Option[]) {
    zaisekiKubunOpt.value = list
  }
  /**
   * @description 在籍区分text表示
   * @param text
   */
  const zaisekiKubun = ref<string>('')
  function setZaisekiKubun(text: string) {
    zaisekiKubun.value = text
  }
  /**
   * @description 休職判定
   * @param text
   */
  const kyuusyokuhanteiFlag = ref<string>('')
  function setKyuusyokuhanteiFlag(text: string) {
    kyuusyokuhanteiFlag.value = text
  }
  /**
   * @description 退職判定
   * @param text
   */
  const taisyokuhanteiFlag = ref<string>('')
  function setTaisyokuhanteiFlag(text: string) {
    taisyokuhanteiFlag.value = text
  }
  /**
   * @description 従業員コード
   * @param text
   */
  const cdJyuugyouin = ref<string>('')
  function setCdJyuugyouin(value: string) {
    cdJyuugyouin.value = value
  }

    /**
   * @description 従業員名称
   * @param text
   */
    const jyuugyouinMj = ref<string>('')
    function setJyuugyouinMj(text: string) {
      jyuugyouinMj.value = text
    }

    const jyuugyouinNm = ref<string>('')
    function setJyuugyouinNm(text: string) {
      jyuugyouinNm.value = text
    }

    const jyuugyouinKanaNm = ref<string>('')
    function setJyuugyouinKanaNm(text: string) {
      jyuugyouinKanaNm.value = text
    }

    const jyuugyouinKanaMj = ref<string>('')
    function setJyuugyouinKanaMj(text: string) {
      jyuugyouinKanaMj.value = text
    }

    const mail = ref<string>('')
    function setMail(text: string) {
      mail.value = text
    }

    const sakuseiNj = ref<string>('')
    function setSakuseiNj(text: string) {
      sakuseiNj.value = text
    }

    const sakuseiSya = ref<string>('')
    function setSakuseiSya(text: string) {
      sakuseiSya.value = text
    }

    const koushinNj = ref<string>('')
    function setKoushinNj(text: string) {
      koushinNj.value = text
    }

    const koushinSya = ref<string>('')
    function setKoushinSya(text: string) {
      koushinSya.value = text
    }

    const kyuusyokuKaishi = ref<string>('')
    function setKyuusyokuKaishi(text: string) {
      kyuusyokuKaishi.value = text
    }

    
    const Search021Result = ref<string>('')
    function SetSearch021Result(text: string) {
      Search021Result.value = text
    }
    const message = ref<string>('')
    function setMessage(text: string) {
      message.value = text
    }
    const kanriFlag = ref<string>('')
    function setKanriFlag(text: string) {
      kanriFlag.value = text
    }
    const currenPage = ref<number>(1)
    function setCurrenPage(text: number) {
      currenPage.value = text
    }
    const totalPage = ref<number>(1)
    function setTotalPage(text: number) {
      totalPage.value = text
    }
  return {
    message,
    setMessage,
    totalPage,
    setTotalPage,
    currenPage,
    setCurrenPage,
    kanriFlag,
    setKanriFlag,
    Search021Result,
    SetSearch021Result,
    kyuusyokuKaishi,
    setKyuusyokuKaishi,
    koushinNj,
    setKoushinNj,
    koushinSya,
    setKoushinSya,
    sakuseiSya,
    setSakuseiSya,
    sakuseiNj,
    setSakuseiNj,
    setMail,
    mail,
    jyuugyouinKanaNm,
    setJyuugyouinKanaNm,
    jyuugyouinKanaMj,
    setJyuugyouinKanaMj,
    jyuugyouinNm,
    setJyuugyouinNm,
    jyuugyouinMj,
    setJyuugyouinMj,
    setCdJyuugyouin,
    cdJyuugyouin,
    taisyokuhanteiFlag,
    setTaisyokuhanteiFlag,
    kyuusyokuhanteiFlag,
    setKyuusyokuhanteiFlag,
    syainKubunOpt,
    setSyainKubunOpt,
    syainKubun,
    setSyainKubun,
    zaisekiKubunOpt,
    setZaisekiKubunOpt,
    zaisekiKubun,
    setZaisekiKubun,
    mode,
    setMode,
    nmRonrisakujo,
    setNmRonrisakujo,
    body_delete,
    setBody_delete,
    body_copy,
    setBody_copy,
    body_cancel,
    setBody_cancel,
  }
})
