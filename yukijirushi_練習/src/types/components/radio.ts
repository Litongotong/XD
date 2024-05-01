export namespace Radio {
  /** ラジオボタン関連タイプ */
  export interface Config {
    /** @description ラジオ名 */
    name?: string
    /** @description ラジオ値 */
    value?: string
    /** @description 選択禁止状態 */
    disabled?: boolean
    /** @description ラジオ表示用値 */
    display?: string
  }

  /** @description ラジオボタン アイテム */
  export type Item = Config
}
