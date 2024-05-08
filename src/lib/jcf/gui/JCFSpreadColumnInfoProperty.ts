export enum EJCFSpreadColumnInfoProperty {
  /** 編集可 */
  COL_EDITABLE = 1,
  /** 編集不可 */
  COL_UNEDITABLE = 0,
  /** カンマ入力可 */
  COL_COMMAEDITALLOWED = 2,
  /** 小数点入力可 */
  COL_DECIMALPOINTALLOWED = 4,
  /** マイナス値入力可 */
  COL_ENABLEINPUTNEGATIVEVALUE = 8,
  /** ソート可 */
  COL_SORTABLE = 16,
  /** 自動 IME 可 */
  COL_AUTOIME = 32,
  /** IME がカーソルの位置により変化 */
  COL_IMEONCURSOR = 64,
  /** IME が英数字モードになる */
  COL_IMEMODE_ALPHANUMERIC = 128,
  /** IME が平仮名モード */
  COL_IMEMODE_HIRAGANA = 256,
  /** IME がカタカタもーど */
  COL_IMEMODE_KATAKANA = 512,
  /** IME が半角モード */
  COL_IMEMODE_HANKAKU = 1024,
  /** IME が全角モード */
  COL_IMEMODE_ZENKAKU = 2048,
  /** システムデフォルトの IME を使う */
  COL_IMEMODE_NATIVE = 4096,
  /** IME が句の識別を行わない */
  COL_IMEMODE_SENTENCE_NONE = 8192,
  /** IME が句の転換を行う */
  COL_IMEMODE_SENTENCE_CONVERT = 16384,
  /** IME 補助なし */
  COL_IMEASSIST_NONE = 0,
  /** 一般的な IME 補助 */
  COL_IMEASSIST_TYPICAL = 32768,
  /** IME がカーソル位置をカバーする */
  COL_IMESTYLE_OVER_THE_SPOT = 0x10000,
  /** IME がデフォルト位置にある */
  COL_IMESTYLE_DEFAULT_POSITION = 0x20000,
  /** クリップボードにコピー可 */
  COL_CLIPBOARD_CANCOPY = 0x40000,
  /** クリップボードからペースト可 */
  COL_CLIPBOARD_CANPASTE = 0x80000,
}

/** 列属性静的属性 */
export class JCFSpreadColumnInfoProperty {
  // [[EditFlag]]
  /** 編集可 */
  static readonly COL_EDITABLE = EJCFSpreadColumnInfoProperty.COL_EDITABLE
  /** 編集不可 */
  static readonly COL_UNEDITABLE = EJCFSpreadColumnInfoProperty.COL_UNEDITABLE
  /** カンマ入力可 */
  static readonly COL_COMMAEDITALLOWED =
    EJCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED
  /** 小数点入力可 */
  static readonly COL_DECIMALPOINTALLOWED =
    EJCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED
  /** マイナス値入力可 */
  static readonly COL_ENABLEINPUTNEGATIVEVALUE =
    EJCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE
  /** ソート可 */
  static readonly COL_SORTABLE = EJCFSpreadColumnInfoProperty.COL_SORTABLE
  /** 自動 IME 可 */
  static readonly COL_AUTOIME = EJCFSpreadColumnInfoProperty.COL_AUTOIME
  /** IME がカーソルの位置により変化 */
  static readonly COL_IMEONCURSOR = EJCFSpreadColumnInfoProperty.COL_IMEONCURSOR
  /** IME が英数字モードになる */
  static readonly COL_IMEMODE_ALPHANUMERIC =
    EJCFSpreadColumnInfoProperty.COL_IMEMODE_ALPHANUMERIC
  /** IME が平仮名モード */
  static readonly COL_IMEMODE_HIRAGANA =
    EJCFSpreadColumnInfoProperty.COL_IMEMODE_HIRAGANA
  /** IME がカタカタもーど */
  static readonly COL_IMEMODE_KATAKANA =
    EJCFSpreadColumnInfoProperty.COL_IMEMODE_KATAKANA
  /** IME が半角モード */
  static readonly COL_IMEMODE_HANKAKU =
    EJCFSpreadColumnInfoProperty.COL_IMEMODE_HANKAKU
  /** IME が全角モード */
  static readonly COL_IMEMODE_ZENKAKU =
    EJCFSpreadColumnInfoProperty.COL_IMEMODE_ZENKAKU
  /** システムデフォルトの IME を使う */
  static readonly COL_IMEMODE_NATIVE =
    EJCFSpreadColumnInfoProperty.COL_IMEMODE_NATIVE
  /** IME が句の識別を行わない */
  static readonly COL_IMEMODE_SENTENCE_NONE =
    EJCFSpreadColumnInfoProperty.COL_IMEMODE_SENTENCE_NONE
  /** IME が句の転換を行う */
  static readonly COL_IMEMODE_SENTENCE_CONVERT =
    EJCFSpreadColumnInfoProperty.COL_IMEMODE_SENTENCE_CONVERT
  /** IME 補助なし */
  static readonly COL_IMEASSIST_NONE =
    EJCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE
  /** 一般的な IME 補助 */
  static readonly COL_IMEASSIST_TYPICAL =
    EJCFSpreadColumnInfoProperty.COL_IMEASSIST_TYPICAL
  /** IME がカーソル位置をカバーする */
  static readonly COL_IMESTYLE_OVER_THE_SPOT =
    EJCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT
  /** IME がデフォルト位置にある */
  static readonly COL_IMESTYLE_DEFAULT_POSITION =
    EJCFSpreadColumnInfoProperty.COL_IMESTYLE_DEFAULT_POSITION
  /** クリップボードにコピー可 */
  static readonly COL_CLIPBOARD_CANCOPY =
    EJCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY
  /** クリップボードからペースト可 */
  static readonly COL_CLIPBOARD_CANPASTE =
    EJCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE

  _getName(): string {
    return 'JCFSpreadColumnInfoProperty'
  }

  static _getName(): string {
    return 'JCFSpreadColumnInfoProperty'
  }

  _getType() {
    return JCFSpreadColumnInfoProperty as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFSpreadColumnInfoProperty'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFSpreadColumnInfoProperty'
  }
}
