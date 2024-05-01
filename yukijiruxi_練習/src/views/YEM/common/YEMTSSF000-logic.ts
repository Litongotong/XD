/** 業務情報 */
export const PARAM_KEY_DATA = 'sys_data'
/** 共通情報 */
export const PARAM_KEY_COMMON = 'sys_common'
/** エラー情報 */
export const PARAM_KEY_ERROR_FLG = 'sys_error_flg'
export const PARAM_KEY_COMPLETED = 'completed'
/** エラー情報の成功であることを示す値 */
export const IS_SUCCESS = '0'
/** エラー情報のエラーであることを示す値 */
export const IS_ERROR = '1'
/** エラー情報の警告であることを示す値 */
export const IS_WARNING = '2'

/** 空文字 */
export const STR_BLANK = ''

/**
 * 計算方法です。
 * データはStringで保持します。
 */
export const FG_KEISANHOUHOU = 'fgTokubaiKeisan'

export const FG_ST_JITSUHAN_JIGYO = 'fgStJitsuhanJigyo'

/** チェーン区分取得フラグ */
export const FG_CHAIN = 'fgChain'

/**
 * コンボボックスMsgキー です。
 * データはStringで保持します。
 */
export const CD_HANYO = 'cdHanyo'

/**
 * コンボボックスMsg名称 です。
 * データはStringで保持します。
 */
export const NM_NAIYO1 = 'nmNaiyo1'

/**
 * 汎用コード です。
 * データはStringで保持します。
 */
export const CD_CMB_HANYO = 'cdHanyo'

/**
 * コンボボックスMsg名称 です。
 * データはStringで保持します。
 */
export const NM_CMB_NAIYO1 = 'nmNaiyo1'

/**
 * コンボボックスMsg名称2 です。
 * データはStringで保持します。
 */
export const NM_CMB_NAIYO2 = 'nmNaiyo2'

/**
 * 計算方法CBMMsg です。
 * データはcom.megsnow.ycm.kms.cbm.mast.YCMHanyoBunruiCBMMsg[]で保持します。
 */
export const KEY_KEISANHOUHOU_CBMMSG = 'TokubaiKeisanCBMMsgList'

/**
 * 帳合先コード です。
 * データはStringで保持します。
 */
export const CD_CHOAISAKI = 'cdChoaisaki'
/** 帳合先名称  */
export const NM_TYOAISAKI_RYAKU = 'nmTenRyaku'

/**
 * チェーンコード です。
 * データはStringで保持します。
 */
export const CD_CHAIN = 'cdChain'
/**
 * チェーン略式名称 です。
 * データはStringで保持します。
 */
export const NM_CHAIN_RYAKUSAKI = 'nmChainRyakusiki'
export const NM_CHAIN_RYAKU = 'nmChainRyaku'

/**
 * 損益管理組織コード です。
 * データはStringで保持します。
 */
export const CD_SONEKIKANRI_SOSHIKI = 'cdSonekikanriSoshiki'
export const CD_SHOKUBA2 = 'cdSonekikanriSoshiki'

//職場コード
export const CD_SONEKI_KANRI_SOSHIKI = 'cdSonekiKanriSoshiki'
export const CD_SHOKUBA_SEISAN = 'cdShokuba'

/** 支店・職場名称  */
export const NM_SYOKUBA_RYAKU = 'nmSonekiSoshikiRyaku'
export const NM_SONEKI_KANRISOSHIKI_RYAKU = 'nmSonekikanriSoshikiRyaku'

export const NM_TANTOSHA_MYOJI = 'nmTantoshaMyoji'
export const NM_TANTOSHA_NAMAE = 'nmTantoshaNamae'

/** 確認日 */
export const DT_KAKUNIN = 'dtKakunin'
/** 確認者コード */
export const NM_KAKUNINSHA_MYOJI = 'nmKakuninshaMyoji'
export const NM_KAKUNINSHA_NAMAE = 'nmKakuninshaNamae'

/**
 * 従業員名称 です。
 * データはStringで保持します。
 */
export const NM_JUGYOIN = 'nmJugyoin'
export const NM_JUGYOIN_MIYOJI = 'nmJugyoinMyoji'
export const NM_JUGYOIN_NAMAE = 'nmJugyoinNamae'

/**
 * 担当者コード です。
 * データはStringで保持します。
 */
export const CD_TANTOSHA = 'cdTantosha'

/** 更新日時 */
export const TM_KOSHIN = 'tmKoshin'

/** チェーン区分 */
export const ST_CHAIN = 'stChain'

//計算方法区分検索結果
export const ST_TOKUBAI_KEISAN = 'stTokubaiKeisan'
/**
 * rowIndexです。
 * データはStringで保持します。
 */
export const ROW_INDEX = 'rowIndex'
/** 旧価使用フラグ */
export const FG_KYU_KA_MODE = 'fgKyuKaMode'
/** チェーン区分名称 */
export const NM_CHAIN_KUBUN = 'nmChainKubun'

/**
 * チェーン区分CBMMsg です。
 * データはcom.megsnow.ycm.kms.cbm.mast.YCMHanyoBunruiCBMMsg[]で保持します。
 */
export const KEY_CHAIN_CBMMSG = 'ChainCBMMsgList'

/** 年月 */
export const DT_NENGETU = 'dtNengetsu'

/** 計算方法 */
export const DT_KEISAN_HOUHO = 'stTokubaiKeisanHoho'

export const TOKUBAI_SETTEI_JOKEN_CBMMSG = 'TokubaiSetteiJokenCBMMsg'

export const KEY_TOKUBAI_SETTEI_CBMMSG_LIST = 'TokubaiSetteiCBMMsgList'

export const CD_CHOHYO_ID = 'cdChohyoId'

export const ST_HIKIATE_HOHO = 'stHikiateHoho'
export const NU_HIKIATE_HIYORITSU = 'nuHikiateHiyoritsu'

/**
 * 登録フラグです。
 * データはStringで保持します。
 */
export const FG_TOROKU = 'fgToroku'

/**
 * 共通Msg です。
 * データはStringで保持します。
 */
export const COMMON_MSG = 'commonMsg'

export type CmbDate = { [key: string]: string }

/**
 * -n月の年月計算。
 * @param  unyobi  運用日 YYYYMMDD
 * @param before　何ヶ月前 例:  -12
 * @return mapList[]  before 月間のHashMap[]
 */
export function getBeforeMonth(unyobi: string, before: number): {}[] {
  const ret: {}[] = []
  const year = unyobi.substring(0, 4)
  const month = unyobi.substring(4, 6)
  const dateUnyobi = new Date(year + '-' + month + '-1')
  const start = new Date(
    dateUnyobi.setMonth(dateUnyobi.getMonth() + before - 1)
  )

  for (let i = before; i <= 0; i++) {
    const date = new Date(start.setMonth(start.getMonth() + 1))
    const obj: CmbDate = {}
    const year = date.getFullYear()
    const month =
      date.getMonth() + 1 > 9
        ? String(date.getMonth() + 1)
        : '0' + (date.getMonth() + 1)
    obj[CD_HANYO] = year + '' + month
    obj[NM_NAIYO1] = year + '/' + month

    ret.push(obj)
  }

  return ret
}

/**
 * +n月の年月計算。
 * @param  unyobi  運用日
 * @param after 何ヶ月後 例:  12
 * @return mapList[]  after 月間のHashMap[]
 */
export function getMonth(unyobi: string, after: number): {}[] {
  const ret: {}[] = []
  const year = unyobi.substring(0, 4)
  const month = unyobi.substring(4, 6)
  const dateUnyobi = new Date(year + '-' + month + '-1')

  for (let i = 0; i < after; i++) {
    const date = new Date(dateUnyobi.setMonth(dateUnyobi.getMonth() + 1))
    const obj: CmbDate = {}
    const year = date.getFullYear()
    const month =
      date.getMonth() + 1 > 9
        ? String(date.getMonth() + 1)
        : '0' + (date.getMonth() + 1)
    obj[CD_HANYO] = year + '' + month
    obj[NM_NAIYO1] = year + '/' + month

    ret.push(obj)
  }

  return ret
}

export function isBlank(value: string) {
  return value == undefined || value.length == 0
}

export function blankToNull(value: string) {
  return value == undefined || value.length == 0 ? null : value
}

/**
 * 数値チェックメソッド。
 * <p>
 * 引数で渡されるチェックを行います。
 * <p>
 * @param data 値 String
 * @return true:正常 false:チェックエラー boolean
 */
export function numck(data: string) {
  if (data == null || '' == data) {
    return false
  }

  /** 正規表現：半角数字パターン */
  if (!/^[0-9]+$/.test(data)) {
    return false
  }
  return true
}

/** フリーチェック */
export const FIELD_F = 'FIELD_F'
/** 全角チェック */
export const FIELD_Z = 'FIELD_Z'
/** 禁則文字（指定文字以外：true　指定文字：false） */
export const FIELD_DISABLE = 'FIELD_DISABLE'
/** 英数字チェック */
export const FIELD_H = 'FIELD_H'
/**
 * TODO:正規表現を利用して文字列のチェックを行います。
 * @param fieldType
 * @param inStr
 * @param boolean チェック結果 true:正常、false：異常
 */
export function checkField(fieldType: string, inStr: string) {
  return true
}
