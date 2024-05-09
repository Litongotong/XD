import type { Image } from '@/lib/native/awt/Image'
import type { JFTreeNodeListener } from './JFTreeNodeListener'

export interface JFTreeNode {
  /**
   * 親ノードを返します。
   * @return  親ノード
   */
  getParent(): JFTreeNode

  /**
   * 子ノードの配列を返します。
   * @return 子ノードの配列。子ノードが存在しない場合null。
   */
  getChildren(): JFTreeNode[]

  /**
   * 指定したインデックスの子ノードを返します。
   * @param index インデックス
   * @return 子ノード。nullの場合は子ノードが存在しない場合
   */
  getChild(index: number): JFTreeNode

  /**
   * 子ノードの数を返します。
   * @return 子ノード数
   */
  getChildCount(): number

  /**
   * 子ノードの有無を返します。
   * @return true:子ノード有り false:子ノード無し
   */
  hasChildren(): boolean

  /**
   * ノードのカラム値を配列で設定します。
   * @param object カラム値の配列
   */
  setColumnObjects(objects: any[]): void

  /**
   * ノードのカラム値を配列で返します。
   * @return カラム値の配列
   */
  getColumnObjects(): any[]

  /**
   * 開いているときのアイコンイメージを返します。
   * @return アイコン
   */
  getOpenedImage(): Image

  /**
   * 閉じているときのアイコンイメージを返します。
   * @return アイコン
   */
  getClosedImage(): Image

  /**
   * JFTreeNodeListenerを登録します。
   * @param listener リスナ
   * @see #removeTreeNodeListener
   */
  addTreeNodeListener(listener: JFTreeNodeListener): void

  /**
   * JFTreeNodeListenerを削除します。
   * @param listener リスナ
   * @see #addTreeNodeListener
   */
  removeTreeNodeListener(listener: JFTreeNodeListener): void

  /**
   * 指定された列でノードをソートします。
   * @param column ソートする列
   * @param ascend true:昇順 false:降順
   */
  sort(column: number, ascend: number): void
}
