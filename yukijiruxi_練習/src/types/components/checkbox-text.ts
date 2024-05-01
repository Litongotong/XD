/** チェックボックス_テキスト関連タイプ */
export namespace CheckboxTextConfig {
  /** @description チェックボックス_テキスト関連データ */
  export interface Option {
    /** @description 選択状態 */
    modelValue?: boolean
    /** @description 実際の値 */
    value?: string
    /** @description テキスト値 */
    checkedLabel?: string
    /** @description 禁止するか */
    disabled?: boolean
  }
}
