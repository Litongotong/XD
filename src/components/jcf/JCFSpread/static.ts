import { EJFAlignment } from '@/lib/jcf/gui/JFAlignment'
import { EJFLineType } from '@/lib/jcf/gui/JFLineType'

export enum EJCFSpread {
  STRING = 1,
  NUMBER = 2,
  DATE = 3,
  CUSTOM = 4,
  COMBOBOX = 5,
  LISTBOX = 6,
  INTERNAL_CHECKBOX = 7,
  CHECKBOX = 7,
  INTERNAL_PUSHBUTTON = 8,
  PUSHBUTTON = 8,
  INTERNAL_TEXTAREA = 9,
  TEXTAREA = 9,
  INTERNAL_TOGGLEBUTTON = 10,
  TOGGLEBUTTON = 10,
  INTERNAL_COMBOBOX2 = 11,
  COMBOBOX2 = 11,
  SPINBUTTON = 12,
  TEXTAREA2 = 13,
  INTERNAL_FORINIT = 65534,
  INTERNAL_FORCOPY = 65535,
}

/** JCFSpread 静的属性 */
export class JCFSpread {
  // [[JFLineType]]
  static readonly NOTHING = EJFLineType.NOTHING
  static readonly SINGLE = EJFLineType.SINGLE
  static readonly DOUBLE = EJFLineType.DOUBLE
  static readonly RAISED = EJFLineType.RAISED
  static readonly SUNKEN = EJFLineType.SUNKEN
  static readonly CONVEX = EJFLineType.CONVEX
  static readonly FLAT = EJFLineType.FLAT
  static readonly CONCAVE = EJFLineType.CONCAVE

  // [JFAlignment]
  /** 左 */
  static readonly LEFT = EJFAlignment.LEFT
  /** 中央 */
  static readonly CENTER = EJFAlignment.CENTER
  /** 右 */
  static readonly RIGHT = EJFAlignment.RIGHT
  /** 上 */
  static readonly TOP = EJFAlignment.TOP
  /** 下 */
  static readonly BOTTOM = EJFAlignment.BOTTOM
  /** 左上 */
  static readonly TOP_LEFT = EJFAlignment.TOP_LEFT
  /** 中央左 */
  static readonly CENTER_LEFT = EJFAlignment.CENTER_LEFT
  /** 左下 */
  static readonly BOTTOM_LEFT = EJFAlignment.BOTTOM_LEFT
  /** 中央上 */
  static readonly TOP_CENTER = EJFAlignment.TOP_CENTER
  /** 中央下 */
  static readonly BOTTOM_CENTER = EJFAlignment.BOTTOM_CENTER
  /** 右上 */
  static readonly TOP_RIGHT = EJFAlignment.TOP_RIGHT
  /** 中央右 */
  static readonly CENTER_RIGHT = EJFAlignment.CENTER_RIGHT
  /** 右下 */
  static readonly BOTTOM_RIGHT = EJFAlignment.BOTTOM_RIGHT
  /** TODO: 要確認 */
  static readonly FULL = EJFAlignment.FULL
  /** TODO: 要確認 */
  static readonly ICONIC = EJFAlignment.ICONIC

  // [[不明。編集タイプ。]]
  static readonly STRING = EJCFSpread.STRING
  static readonly NUMBER = EJCFSpread.NUMBER
  static readonly DATE = EJCFSpread.DATE
  static readonly CUSTOM = EJCFSpread.CUSTOM
  static readonly COMBOBOX = EJCFSpread.COMBOBOX
  static readonly LISTBOX = EJCFSpread.LISTBOX
  static readonly INTERNAL_CHECKBOX = EJCFSpread.INTERNAL_CHECKBOX
  static readonly CHECKBOX = EJCFSpread.CHECKBOX
  static readonly INTERNAL_PUSHBUTTON = EJCFSpread.INTERNAL_PUSHBUTTON
  static readonly PUSHBUTTON = EJCFSpread.PUSHBUTTON
  static readonly INTERNAL_TEXTAREA = EJCFSpread.INTERNAL_TEXTAREA
  static readonly TEXTAREA = EJCFSpread.TEXTAREA
  static readonly INTERNAL_TOGGLEBUTTON = EJCFSpread.INTERNAL_TOGGLEBUTTON
  static readonly TOGGLEBUTTON = EJCFSpread.TOGGLEBUTTON
  static readonly INTERNAL_COMBOBOX2 = EJCFSpread.INTERNAL_COMBOBOX2
  static readonly COMBOBOX2 = EJCFSpread.COMBOBOX2
  static readonly SPINBUTTON = EJCFSpread.SPINBUTTON
  static readonly TEXTAREA2 = EJCFSpread.TEXTAREA2
  static readonly INTERNAL_FORINIT = EJCFSpread.INTERNAL_FORINIT
  static readonly INTERNAL_FORCOPY = EJCFSpread.INTERNAL_FORCOPY
}

/** 列のデフォルト幅、`*` は比例サイズ */
export const DEFAULT_COLUMN_WIDTH = '*'

/**
 * 行ヘッダーと列ヘッダーの表示を定義する定数
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_grid.flexgrid.html#headersvisibility
 * @see https://demo.mescius.jp/wijmo/api/enums/wijmo_grid.headersvisibility.html
 */
export enum HeadersVisibility {
  /** 列ヘッダセルと行ヘッダセルの両方が表示されます。 */
  All = 3,
  /** ヘッダセルは表示されません。 */
  None = 0,
  /** 列ヘッダセルのみが表示されます。 */
  Column = 1,
  /** 行ヘッダセルのみが表示されます。 */
  Row = 2,
}
