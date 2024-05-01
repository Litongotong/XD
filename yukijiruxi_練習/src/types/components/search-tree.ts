/** ツリーノード関連タイプ */
export namespace SearchTree {
  /** @description ツリーノード属性 */
  export interface Node {
    /** @description ノードの値  */
    value?: string | number
    /** @description ノード ID */
    id: number
    /** @description ノードの名前 */
    name: string
    /** @description 子ノードデータ */
    children?: Node[]
  }
}
