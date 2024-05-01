/** ドロップダウン関連タイプ */
export namespace Dropdown {
  /** @description ドロップダウンの選択肢 */
  export interface Option {
    /** @description 表示用文字列 */
    display: string
    /** @description 選択肢を禁止するか */
    disabled?: boolean
    /** @description 実際の値（省略した場合は display が value になる） */
    value?: string | null
  }
}
