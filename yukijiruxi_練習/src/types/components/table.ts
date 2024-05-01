import type { CSS } from '..'
import type { Dropdown } from '@/types/components/dropdown'

/** スプレッドシート関連タイプ */
export namespace Table {
  /**
   * @description th scope
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
   */
  export type THScope = 'row' | 'col' | 'rowgroup' | 'colgroup' | 'auto'

  /** @description ヘッダのタイプ */
  export type HeadType = 'normal' | 'marked'

  /** @description データ内容のタイプ */
  export type DatumType =
    | 'text'
    | 'dropdown'
    | 'checkbox'
    | 'button'
    | 'input-number'
    | 'input-text'
    | 'input-date'
    | 'input-time'

  /** @description ヘッダ文字 */
  export type HeadText = string

  /** @description `<th>` の汎用属性 */
  export interface HeadCommonProperty extends DatumCommonProperty {
    /** @description 列のタイトルか行のタイトルか */
    scope?: Table.THScope
  }

  /** @description `<td>` の汎用属性 */
  export interface DatumCommonProperty {
    /** @description head group id */
    headers?: string
    /** @description 合併する列の数 */
    colspan?: number | string
    /** @description 活性化・非活性化 */
    disabled?: boolean
    /** @description 合併する行の数 */
    rowspan?: number | string
    /** @description 隠すかどうか */
    hidden?: boolean
  }

  /** @description ヘッダセル */
  export interface Head extends HeadCommonProperty {
    // ヘッダ属性
    /** @description ヘッダ ID（識別用）*/
    id?: string
    /** @description ヘッダの内容 */
    head?: HeadText
    /** @description ヘッダの背景 */
    headBackground?: string
    /** @description ヘッダのタイプ */
    headType?: HeadType
    /** @description ヘッダ文字の水平位置 */
    headTextAlign?: CSS.TextAlign
    /** @description 列幅（設定しない場合は文字数によって自動で決まる） */
    width?: string | number
    /** @description ヘッダの高さ（設定しない場合は文字数によって自動で決まります） */
    height?: string | number
    /** @description ヘッダをスキップして表示しないか */
    skipTableHeadMix?: boolean

    // Datum 属性
    /** @description カンマで数字を分割するか */
    commaNumber?: boolean
    /** @description データ内容のタイプ */
    datumType?: DatumType
    /** @description 小数部に使用する最大桁数 */
    maximumFractionDigits?: number
    /** @description 小数部に使用する最小桁数 */
    minimumFractionDigits?: number
    /** @description データ文字の水平位置 */
    textAlign?: CSS.TextAlign
    /** @description ボタンタイトル */
    buttonTitle?: string
  }

  /** @description データムセル */
  export interface Datum extends DatumCommonProperty {
    /** @description ヘッダ ID（識別用）*/
    id?: string
    /** @description データム */
    datum?: string | number | boolean | object
    /** @description データムの背景 */
    datumBackground?: string
    /** @description ボタンタイトル */
    buttonTitle?: string
    /** @description 選択肢 */
    options?: Dropdown.Option[]
    /** @description クリックイベント */
    onClick?: Function
    /** @description チェックボックスのラベル */
    checkedLabel?: string
    /** @description データムの列幅（設定しない場合は文字数によって自動で決まる） */
    datumWidth?: string | number
    /** @description 内容水平位置 */
    textAlign?: CSS.TextAlign
  }

  /** @description ヘッダ一行 */
  export type HeadRow = Head[]

  /** @description データ一行 */
  export type DatumRow = Datum[]

  /** @description スプレッドシート */
  export interface Record {
    /** @description ヘッダ行配列 */
    heads: HeadRow[]
    /** @description データ行配列 */
    data: DatumRow[]
  }

  /** Wijmo スプレッド 列アイテム */
  export interface WijmoColumn {
    /** 列がバインドするプロパティ名 */
    binding: string
    /** 列タイトル */
    header: string

    /** 列タイトル水平方向配置
     * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_angular2_grid.wjflexgridcolumn.html#align
     */
    align?: 'left' | 'right' | 'center' | 'justify'

    /** 列タイトル背景色 */
    backgroundColor?: string
    /** 列幅 */
    width?: number | string

    /** 列型
     * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_angular2_grid.wjflexgridcolumn.html#format
     */
    format?: string

    /** セル値を変更できるか */
    isReadOnly?: boolean
    /** ソートできるかどうか */
    allowSorting?: boolean
  }
}
