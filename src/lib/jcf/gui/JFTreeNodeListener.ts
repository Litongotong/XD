import type { JFTreeNodeEvent } from './JFTreeNodeEvent'

export interface JFTreeNodeListener {
  /**
   * ソートなどのノード構造全般にかかわる変更が発生したときに呼び出されます。
   * @param e データイベント
   */
  nodeRefreshed(e: JFTreeNodeEvent): void

  /**
   * ノードが追加されたときに呼び出されます。
   * @param e データイベント
   */
  nodeAdded(e: JFTreeNodeEvent): void

  /**
   * ノードが挿入されたときに呼び出されます。
   * @param e データイベント
   */
  nodeInserted(e: JFTreeNodeEvent): void

  /**
   * ノードが削除されたときに呼び出されます。
   * @param e データイベント
   */
  nodeRemoved(e: JFTreeNodeEvent): void

  /**
   * ノード内のオブジェクトが更新されたときに呼び出されます。
   * @param e データイベント
   */
  nodeObjectUpdated(e: JFTreeNodeEvent): void

  /**
   * アイコンイメージが更新されたときに呼び出されます。
   * @param e データイベント
   */
  nodeImageChanged(e: JFTreeNodeEvent): void
}
