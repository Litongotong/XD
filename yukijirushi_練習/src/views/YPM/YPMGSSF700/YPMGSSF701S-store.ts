import { defineStore } from 'pinia'
import { ref } from 'vue'

// 画面YPMGSSF701Sのstoreを定義する。画面の状態をstoreに保存する。
export const useYPMGSSF701SStore = defineStore('YPMGSSF701S', () => {
  // 画面項目「工場」の表示値1を保存する変数。状態はref使用して定義する。
  const cdKojoZaikoBasho = ref('')
  // 上記変数の値を設定する方法。
  function setCdKojoZaikoBasho(text: string) {
    cdKojoZaikoBasho.value = text
  }

  // 画面項目「工場」の表示値2を保存する変数。
  const nmKojoZaikoBasho = ref('')
  // 上記変数の値を設定する方法。
  function setNmKojoZaikoBasho(text: string) {
    nmKojoZaikoBasho.value = text
  }

  const stNyuka = ref('')
  function setStNyuka(text: string) {
    stNyuka.value = text
  }

  const nmNyuka = ref('')
  function setNmNyuka(text: string) {
    nmNyuka.value = text
  }

  const stData = ref('')
  function setStData(text: string) {
    stData.value = text
  }

  const nmData = ref('')
  function setNmData(text: string) {
    nmData.value = text
  }

  const fgJisseki = ref('')
  function setFgJisseki(text: string) {
    fgJisseki.value = text
  }

  const nmJisseki = ref('')
  function setNmJisseki(text: string) {
    nmJisseki.value = text
  }

  const page = ref('')
  function setPage(text: string) {
    page.value = text
  }

  const noRecSeq = ref('')
  function setNoRecSeq(text: string) {
    noRecSeq.value = text
  }

  const noMesKanri = ref('')
  function setNoMesKanri(text: string) {
    noMesKanri.value = text
  }

  const stTeisei = ref('')
  function setStTeisei(text: string) {
    stTeisei.value = text
  }

  const nmTeisei = ref('')
  function setNmTeisei(text: string) {
    nmTeisei.value = text
  }

  const nmTenkai = ref('')
  function setNmTenkai(text: string) {
    nmTenkai.value = text
  }

  const ifJyoutai = ref('')
  function setIfJyoutai(text: string) {
    ifJyoutai.value = text
  }

  const cdJushinkey = ref('')
  function setCdJushinkey(text: string) {
    cdJushinkey.value = text
  }

  const tmJushin = ref('')
  function setTmJushin(text: string) {
    tmJushin.value = text
  }

  const noBunkatsuData = ref('')
  function setNoBunkatsuData(text: string) {
    noBunkatsuData.value = text
  }

  const nmItemCdShikibetsu = ref('')
  function setNmItemCdShikibetsu(text: string) {
    nmItemCdShikibetsu.value = text
  }

  const cdItem = ref('')
  function setCdItem(text: string) {
    cdItem.value = text
  }

  const nmHinmpkuRyakushiki = ref('')
  function setNmHinmpkuRyakushiki(text: string) {
    nmHinmpkuRyakushiki.value = text
  }

  const cdTorihikisaki2 = ref('')
  function setCdTorihikisaki2(text: string) {
    cdTorihikisaki2.value = text
  }

  const nmTorihikisaki2 = ref('')
  function setNmTorihikisaki2(text: string) {
    nmTorihikisaki2.value = text
  }

  const cdTorihikisaki = ref('')
  function setCdTorihikisaki(text: string) {
    cdTorihikisaki.value = text
  }

  const nmTorihikisaki = ref('')
  function setNmTorihikisaki(text: string) {
    nmTorihikisaki.value = text
  }

  const cdSeisanKojo = ref('')
  function setCdSeisanKojo(text: string) {
    cdSeisanKojo.value = text
  }

  const nmSeisanKojo = ref('')
  function setNmSeisanKojo(text: string) {
    nmSeisanKojo.value = text
  }

  const cdSyukasoko = ref('')
  function setCdSyukasoko(text: string) {
    cdSyukasoko.value = text
  }

  const nmSyukasoko = ref('')
  function setNmSyukasoko(text: string) {
    nmSyukasoko.value = text
  }

  const cdNyukasoko = ref('')
  function setCdNyukasoko(text: string) {
    cdNyukasoko.value = text
  }

  const nmNyukasoko = ref('')
  function setNmNyukasoko(text: string) {
    nmNyukasoko.value = text
  }

  const qtSuryo = ref('')
  function setQtSuryo(text: string) {
    qtSuryo.value = text
  }

  const ifSuryotani = ref('')
  function setIfSuryotani(text: string) {
    ifSuryotani.value = text
  }

  const qtJuryo = ref('')
  function setQtJuryo(text: string) {
    qtJuryo.value = text
  }

  const ifJuryotani = ref('')
  function setIfJuryotani(text: string) {
    ifJuryotani.value = text
  }

  const dtUkeireyotei = ref('')
  function setDtUkeireyotei(text: string) {
    dtUkeireyotei.value = text
  }

  const dtShomikigen = ref('')
  function setDtShomikigen(text: string) {
    dtShomikigen.value = text
  }

  const ifTokyu = ref('')
  function setIfTokyu(text: string) {
    ifTokyu.value = text
  }

  const ifLot = ref('')
  function setIfLot(text: string) {
    ifLot.value = text
  }

  const ifSublot = ref('')
  function setIfSublot(text: string) {
    ifSublot.value = text
  }

  const dtHaraidashiDenpyo = ref('')
  function setDtHaraidashiDenpyo(text: string) {
    dtHaraidashiDenpyo.value = text
  }

  const noHaraidashiDenpyo = ref('')
  function setNoHaraidashiDenpyo(text: string) {
    noHaraidashiDenpyo.value = text
  }

  const dtHiteiseiDenpyo = ref('')
  function setDtHiteiseiDenpyo(text: string) {
    dtHiteiseiDenpyo.value = text
  }

  const noHteiseiDenpyo = ref('')
  function setNoHteiseiDenpyo(text: string) {
    noHteiseiDenpyo.value = text
  }

  const noSyukaDenpyo = ref('')
  function setNoSyukaDenpyo(text: string) {
    noSyukaDenpyo.value = text
  }

  const noNyukaDenpyo = ref('')
  function setNoNyukaDenpyo(text: string) {
    noNyukaDenpyo.value = text
  }

  const cdSyukaSokoHikiate = ref('')
  function setCdSyukaSokoHikiate(text: string) {
    cdSyukaSokoHikiate.value = text
  }

  const nmSyukaSokoHikiate = ref('')
  function setNmSyukaSokoHikiate(text: string) {
    nmSyukaSokoHikiate.value = text
  }

  const qtSuryoHikiate = ref('')
  function setQtSuryoHikiate(text: string) {
    qtSuryoHikiate.value = text
  }

  const qtJuryoHikiate = ref('')
  function setQtJuryoHikiate(text: string) {
    qtJuryoHikiate.value = text
  }

  const dtshomikigenHikiate = ref('')
  function setDtshomikigenHikiate(text: string) {
    dtshomikigenHikiate.value = text
  }

  const ifTokyuHikiate = ref('')
  function setIfTokyuHikiate(text: string) {
    ifTokyuHikiate.value = text
  }

  const ifLotHikiate = ref('')
  function setIfLotHikiate(text: string) {
    ifLotHikiate.value = text
  }

  const ifSublotHikiate = ref('')
  function setIfSublotHikiate(text: string) {
    ifSublotHikiate.value = text
  }

  const cdTorihikisakiHikiate = ref('')
  function setCdTorihikisakiHikiate(text: string) {
    cdTorihikisakiHikiate.value = text
  }

  const nmTorihikisakiHikiate = ref('')
  function setNmTorihikisakiHikiate(text: string) {
    nmTorihikisakiHikiate.value = text
  }

  const cdSeisanKojoHikiate = ref('')
  function setCdSeisanKojoHikiate(text: string) {
    cdSeisanKojoHikiate.value = text
  }

  const nmSeisanKojoHikiate = ref('')
  function setNmSeisanKojoHikiate(text: string) {
    nmSeisanKojoHikiate.value = text
  }

  return {
    cdKojoZaikoBasho,
    setCdKojoZaikoBasho,
    nmKojoZaikoBasho,
    setNmKojoZaikoBasho,
    stNyuka,
    setStNyuka,
    nmNyuka,
    setNmNyuka,
    stData,
    setStData,
    nmData,
    setNmData,
    fgJisseki,
    setFgJisseki,
    nmJisseki,
    setNmJisseki,
    page,
    setPage,
    noRecSeq,
    setNoRecSeq,
    noMesKanri,
    setNoMesKanri,
    stTeisei,
    setStTeisei,
    nmTeisei,
    setNmTeisei,
    nmTenkai,
    setNmTenkai,
    ifJyoutai,
    setIfJyoutai,
    cdJushinkey,
    setCdJushinkey,
    tmJushin,
    setTmJushin,
    noBunkatsuData,
    setNoBunkatsuData,
    nmItemCdShikibetsu,
    setNmItemCdShikibetsu,
    cdItem,
    setCdItem,
    nmHinmpkuRyakushiki,
    setNmHinmpkuRyakushiki,
    cdTorihikisaki2,
    setCdTorihikisaki2,
    nmTorihikisaki2,
    setNmTorihikisaki2,
    cdTorihikisaki,
    setCdTorihikisaki,
    nmTorihikisaki,
    setNmTorihikisaki,
    cdSeisanKojo,
    setCdSeisanKojo,
    nmSeisanKojo,
    setNmSeisanKojo,
    cdSyukasoko,
    setCdSyukasoko,
    nmSyukasoko,
    setNmSyukasoko,
    cdNyukasoko,
    setCdNyukasoko,
    nmNyukasoko,
    setNmNyukasoko,
    qtSuryo,
    setQtSuryo,
    ifSuryotani,
    setIfSuryotani,
    qtJuryo,
    setQtJuryo,
    ifJuryotani,
    setIfJuryotani,
    dtUkeireyotei,
    setDtUkeireyotei,
    dtShomikigen,
    setDtShomikigen,
    ifTokyu,
    setIfTokyu,
    ifLot,
    setIfLot,
    ifSublot,
    setIfSublot,
    dtHaraidashiDenpyo,
    setDtHaraidashiDenpyo,
    noHaraidashiDenpyo,
    setNoHaraidashiDenpyo,
    dtHiteiseiDenpyo,
    setDtHiteiseiDenpyo,
    noHteiseiDenpyo,
    setNoHteiseiDenpyo,
    noSyukaDenpyo,
    setNoSyukaDenpyo,
    noNyukaDenpyo,
    setNoNyukaDenpyo,
    cdSyukaSokoHikiate,
    setCdSyukaSokoHikiate,
    nmSyukaSokoHikiate,
    setNmSyukaSokoHikiate,
    qtSuryoHikiate,
    setQtSuryoHikiate,
    qtJuryoHikiate,
    setQtJuryoHikiate,
    dtshomikigenHikiate,
    setDtshomikigenHikiate,
    ifTokyuHikiate,
    setIfTokyuHikiate,
    ifLotHikiate,
    setIfLotHikiate,
    ifSublotHikiate,
    setIfSublotHikiate,
    cdTorihikisakiHikiate,
    setCdTorihikisakiHikiate,
    nmTorihikisakiHikiate,
    setNmTorihikisakiHikiate,
    cdSeisanKojoHikiate,
    setCdSeisanKojoHikiate,
    nmSeisanKojoHikiate,
    setNmSeisanKojoHikiate,
  }
})
