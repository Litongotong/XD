export namespace CSS {
  /** @description css global value */
  export type Global = 'inherit' | 'initial' | 'revert' | 'unset'

  /**
   * @description css text-align value
   * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align
   */
  export type TextAlign =
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent'

  /**
   * @description css position value
   * @see https://developer.mozilla.org/ja/docs/Web/CSS/position
   */
  export type Position = Global &
    ('static' | 'relative' | 'absolute' | 'fixed' | 'sticky')
}
