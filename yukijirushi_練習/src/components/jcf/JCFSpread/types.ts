import type { CJSpread } from '@/lib/jcf/gui/CJSpread'
import type { EJCFSpreadColumnInfoProperty } from '@/lib/jcf/gui/JCFSpreadColumnInfoProperty'
import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
} from '../utils/types'
import type { SMSJCFSpreadStaticProps } from '../SMSJCFSpread/types'
import type { Color } from '@/lib/native/awt/Color'
import type { Font } from '@/lib/native/awt/Font'
import type { EJCFSpread } from './static'
import type { EJFLineType } from '@/lib/jcf/gui/JFLineType'
import type { EJFAlignment } from '@/lib/jcf/gui/JFAlignment'
import type { Column, FlexGrid } from '@grapecity/wijmo.grid'
import type { Ref } from 'vue'

/** プロパティ名 */
export type Binding = string
/** 列幅、`*` は比例サイズ */
export type ColumnWidth = number | string | `${number}*`

/** グリッドに表示される項目を含む配列 */
export type ItemSource = Record<Binding, any>[]

// ドロップダウン オプション
export interface JCFSelectableElement {
  // TODO
}

// ヘッダ属性
export interface JCFSpreadHeaderColumnInfoProperty {
  /** 列幅 */
  width?: number | null
  /** 背景色 */
  background?: Color | null
  /** 前景色 */
  foreground?: Color | null
  /** フォント */
  font?: Font | null
  /** ボーダー色 */
  borderColor?: Color | null
  /** ボーダー幅 */
  borderWidth?: number | null
  /** ボーダータイプ */
  borderType?: EJFLineType | null
  /** 水平位置 */
  alignmentHorizontal?: EJFAlignment | null
  /** 垂直位置 */
  alignmentVertical?: EJFAlignment | null
}

/** 列制御情報 */
export interface JCFSpreadColumnInfoProperty {
  /** 中の属性がこの列の属性になる */
  baseColumnInfo?: JCFSpreadHeaderColumnInfoProperty | null
  /** 列名 */
  name?: string | null
  /** 編集タイプ */
  editType?: EJCFSpread | null
  /** 編集フラグ（ビット演算） */
  editFlag?: EJCFSpreadColumnInfoProperty | null
  /** 文字列をフォーマットするパターン */
  pattern?: string | null
  /** FIXME: 不明確。 ラベル */
  label?: string | null
  /** ドロップダウン リスト オプション */
  selectableElements?: JCFSelectableElement[] | null
  /** 最大バイト数 */
  maxByteLength?: number | null
  /** 最小幅 */
  minimumWidth?: number | null
  /** FIXME: 不明確。ソート始点 */
  sortStart?: number | null
  /** FIXME: 不明確。ソート終点 */
  sortEnd?: number | null
  /** ボタン押下時のアクションのコード */
  buttonActionCode?: string | null
  /** FIXME: 不明確。推測：該当項目が触発される際のアクションのコード */
  itemActionCode?: string | null
  /** FIXME: 不明確。推測：該当文字が触発される際のアクションのコード */
  textActionCode?: string | null
  /** 整数部の最大桁数 */
  maxIntegerDigit?: number | null
  /** 小数部の最大桁数 */
  maxDecimalDigit?: number | null
}

/** スプレッド列属性 */
export interface JCFSpreadColumnsProperty {
  /** ヘッダ列列数 */
  headerColumns?: number | null
  /** 列数 */
  columnCount?: number | null
  // TODO: 型補完
  /** ヘッダ列制御情報 */
  headerColumnInfo?: any | null
  /** 列制御情報 */
  columnInfo?: JCFSpreadColumnInfoProperty[] | null
}

/** ヘッダセル詳細情報 */
export interface JCFSpreadHeaderCellProperty {
  /** 基本的なヘッダセル属性 */
  baseHeaderCell?: JCFSpreadHeaderColumnInfoProperty | null
  /** ヘッダ テキスト */
  title?: string | null
  /** FIXME: 不明確。 ソート列 */
  sortColumn?: any | null
}

/** ヘッダセル情報 */
export interface JCFSpreadHeaderProperty {
  /** ヘッダ行数 */
  rowCount?: number | null
  /** ヘッダ列数 */
  columnCount?: number | null
  /** FIXME: 不明確。二次元配列 推測：ヘッダセルの単独内容。 */
  headerCell?: JCFSpreadHeaderCellProperty[][] | null
  /** ヘッダ行高さ */
  height?: number[] | null
}

/** スプレッドの記録情報 */
export interface JCFSpreadRecordInfo {
  /** ヘッダセル レイアウト */
  layout?: string[][] | null
  /** 列幅（判定の優先度が低そう） */
  colWidth?: number[] | null
  /** 行高さ */
  rowHeight?: number[] | null
  /** 固定列 */
  fixedColumns?: number | null
}

/** スプレッド本体初期化情報 */
export interface JCFSpreadHeaderAndColumnProperty {
  /** 列情報 */
  columns?: JCFSpreadColumnsProperty | null
  /** ヘッダ情報 */
  header?: JCFSpreadHeaderProperty | null
  /** スプレッドのその他の記録情報 */
  recordInfo?: JCFSpreadRecordInfo | null
}

/** JCFSpread の props */
export interface JCFSpreadProps
  extends JCFItemProps,
    JCFSpreadStaticProps,
    JCFSpreadCustomProps {
  // NOTE: 以下二件は開発時の便利（直接部品にデータを渡す）に使われる
  /** グリッドに表示される項目を含む配列 */
  itemSource?: DynamicProp<ItemSource>
  /** グリットの列配列 */
  columns?: DynamicProp<Column[]>
}

/** JCFSpread の 静的 props のみ */
export interface JCFSpreadStaticProps
  extends JCFCommonStaticProps,
    SMSJCFSpreadStaticProps {
  /** FIXME: 不明確。推測：スクロールバー表示関連。 */
  scrollMask?: StaticProp<CJSpread>
  /** デフォルトセル高さ */
  defaultCellHeight?: StaticProp<number>
  /** FIXME: 不明確。推測：キーボード使用許可。 */
  keyOpenMode?: StaticProp<boolean>
  /** FIXME: 不明確。推測：移動モードを閉じる。 */
  closeMoveMode?: StaticProp<number>
  /** スプレッド初期化情報 */
  headerAndColumnProperty?: StaticProp<JCFSpreadHeaderAndColumnProperty>
}

/** JCFSpread 新規カスタム属性 */
export interface JCFSpreadCustomProps {
  /** SMSJCFSpread であるかどうか */
  isSMS?: boolean
}

/** 部品データのマウント時の渡すパラメータ */
export interface JCFSPreadInstallationPayload extends JCFSpreadProps {
  /** Wijmo FlexGrid 実例 */
  flexGrid: Ref<FlexGrid | undefined>
}
