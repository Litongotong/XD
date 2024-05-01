export namespace Button {
  /** @description ButtonExtend 属性 */
  export interface Property {
    /** @description ボタン表示属性 */
    buttonTitle?: string
    /** @description 使用不可 */
    disabled?: boolean
    /** @description ボタン高さ */
    buttonHeight?: string | number
    /** @description ボタン幅 */
    buttonWidth?: string | number
  }

  /** ボタン関連タイプ */
  export interface Config {
    /** @description ボタン名 */
    title: string
    /** @description クリック禁止状態 */
    disabled?: boolean
    /** @description ボタン高さ */
    height?: string | number
    /** @description ボタン横幅 */
    width?: string | number
    /** @description クリックイベント */
    onClick?: Function
  }
}
