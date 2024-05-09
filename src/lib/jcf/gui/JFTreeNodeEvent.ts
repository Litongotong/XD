import { AWTEvent } from '@/lib/native/awt/AWTEvent'
import type { JFTreeNode } from './JFTreeNode'
import { EventObject } from '@/lib/native/util/EventObject'

export enum EJFTreeNodeEvent {
  NODE_REFRESHED = 'NODE_REFRESHED',
  NODE_ADDED = 'NODE_ADDED',
  NODE_INSERTED = 'NODE_INSERTED',
  NODE_REMOVED = 'NODE_REMOVED',
  NODE_OBJECT_UPDATED = 'NODE_OBJECT_UPDATED',
  NODE_IMAGE_CHANGED = 'NODE_IMAGE_CHANGED',
  NODE_OFFSET_CHANGED = 'NODE_OFFSET_CHANGED',
}

export class JFTreeNodeEvent extends EventObject {
  /**
   * 使用するイベントの最初のIDです。
   */
  static JFTREENODE_FIRST: number = AWTEvent.RESERVED_ID_MAX + 1101

  /**
   * ソートなどにより、ノード構造が更新されました。
   */
  static NODE_REFRESHED: number = this.JFTREENODE_FIRST

  /**
   * ノードが追加されました。
   */
  static NODE_ADDED: number = this.JFTREENODE_FIRST + 1

  /**
   * ノードが挿入されました。
   */
  static NODE_INSERTED: number = this.JFTREENODE_FIRST + 2

  /**
   * ノードが削除されました。
   */
  static NODE_REMOVED: number = this.JFTREENODE_FIRST + 3

  /**
   * ノード内のオブジェクトが更新されました。
   */
  static NODE_OBJECT_UPDATED: number = this.JFTREENODE_FIRST + 4

  /**
   * アイコンイメージが更新されました。
   */
  static NODE_IMAGE_CHANGED: number = this.JFTREENODE_FIRST + 5

  /**
   * オフセットが更新されました。
   */
  static NODE_OFFSET_CHANGED: number = this.JFTREENODE_FIRST + 6

  /**
   * 使用するイベントの最後のIDです。
   */
  static JFTREENODE_LAST: number = this.NODE_OFFSET_CHANGED

  id: number
  index: number
  treeNode: JFTreeNode

  constructor(source: any, id: number)
  constructor(source: any, id: number, index: number)
  constructor(source: any, id: number, node: JFTreeNode)
  constructor(source: any, id: number, index: number, node: JFTreeNode)
  constructor(...params: any[]) {
    const init = (source: any, id: number, index: number, node: JFTreeNode) => {
      this.id = id
      this.index = index
      this.treeNode = node
    }
    if (params.length === 2) {
      // イベントソースとIDを指定してJFTreeNodeEventクラスを構築します。
      const source = params[0] // イベントが起こったTreeNode
      const id = params[1] // イベントの種類
      super(source)
      init(source, id, -1, null!)
    } else if (params.length === 3) {
      const isThridArgAsNumber = typeof params[2] === 'number'
      if (isThridArgAsNumber) {
        // イベントソースとIDと変更ノードのインデックスを指定してJFTreeNodeEventクラスを構築します。
        const source = params[0] // イベントが起こったTreeNode
        const id = params[1] // イベントの種類
        const index = params[2] // 変更されたノードのインデックス
        super(source)
        init(source, id, index, null!)
      } else {
        // イベントソースとIDと変更ノードを指定してJFTreeNodeEventクラスを構築します。
        const source = params[0] // イベントが起こったJFTreeNode
        const id = params[1] // イベントの種類
        const node = params[2] // 変更されたノードオブジェクト
        super(source)
        init(source, id, -1, node)
      }
    } else if (params.length === 4) {
      // イベントソースとIDと変更ノードを指定してJFTreeNodeEventクラスを構築します。
      const source = params[0] // イベントが起こったJFTreeNode
      const id = params[1] // イベントの種類
      const index = params[2] // 変更されたノードの位置
      const node = params[3] // 変更されたノード
      super(source)
      init(source, id, index, node)
    } else {
      throw new Error('Invalid arguments')
    }
  }

  /**
   * 変更されたデータの位置を返します。
   * @return 変更されたデータの位置
   */
  getIndex(): number {
    return this.index
  }

  /**
   * 変更されたノードオブジェクトを返します。
   * @return 変更されたノード
   */
  getTreeNode(): JFTreeNode {
    return this.treeNode
  }

  /**
   * イベントタイプを返します。
   */
  getID(): number {
    return this.id
  }

  /**
   * パラメータ文字列を返します。
   * @return イベントの種類
   */
  paramString(): string {
    let typeStr: string
    switch (this.id) {
      case JFTreeNodeEvent.NODE_REFRESHED:
        typeStr = EJFTreeNodeEvent.NODE_REFRESHED
        break
      case JFTreeNodeEvent.NODE_ADDED:
        typeStr = EJFTreeNodeEvent.NODE_ADDED
        break
      case JFTreeNodeEvent.NODE_INSERTED:
        typeStr = EJFTreeNodeEvent.NODE_INSERTED
        break
      case JFTreeNodeEvent.NODE_REMOVED:
        typeStr = EJFTreeNodeEvent.NODE_REMOVED
        break
      case JFTreeNodeEvent.NODE_OBJECT_UPDATED:
        typeStr = EJFTreeNodeEvent.NODE_OBJECT_UPDATED
        break
      case JFTreeNodeEvent.NODE_IMAGE_CHANGED:
        typeStr = EJFTreeNodeEvent.NODE_IMAGE_CHANGED
        break
      case JFTreeNodeEvent.NODE_OFFSET_CHANGED:
        typeStr = EJFTreeNodeEvent.NODE_OFFSET_CHANGED
        break
      default:
        typeStr = 'unknown type'
    }
    return typeStr
  }
}
