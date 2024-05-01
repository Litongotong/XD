import type { CSS } from '..'

/** @description ラベル */
export namespace Label {
  /** @description ラベル属性 */
  export interface Property {
    /** @description ラベル */
    label?: string
    /** @description ラベル水平位置 */
    labelAlign?: CSS.TextAlign
    /** @description ラベル背景 */
    labelBackground?: string
    /** @description ラベルボックス背景 */
    labelWrapperBackground?: string
    /** @description ラベル文字色 */
    labelColor?: string
    /** @description ラベル文字の太さ */
    labelFontWeight?: string | number
    /** @description ラベル幅 */
    labelWidth?: string | number
    /** @description コロンを使うか */
    noKoron?: boolean
  }
}
