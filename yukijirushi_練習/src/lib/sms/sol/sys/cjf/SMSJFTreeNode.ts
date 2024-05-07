import { JFSimpleTreeNode } from '@/lib/jcf/gui/JFSimpleTreeNode'
import type { Enumeration } from '@/lib/native/lang/Enumeration'
import { System } from '@/lib/native/lang/System'
import { Vector } from '@/lib/native/util/Vector'
import { createArrayByInstance } from '@/utils/array/1D'
import { isNil } from '@/utils/useful'

export class SMSJFTreeNode extends JFSimpleTreeNode {
  dummy = false // ダミークラス判定フラグ

  /**
   * 空のYJTreeNodeを構築します。
   */
  constructor()
  constructor(columnCount: number)
  constructor(obj: any)
  constructor(obj: any[])
  constructor(vec: Vector)
  constructor(...params: any[]) {
    if (params.length === 0) {
      super()
    } else if (params.length === 1) {
      if (typeof params[0] === 'number') {
        // カラム数
        const columnCount = params[0]
        // カラム数を指定してYJTreeNodeを構築します。
        super(columnCount)
      } else if (Array.isArray(params[0])) {
        // カラム値の配列
        // ノードのカラム値を配列で指定してYJTreeNodeを構築します。
        super(params[0])
      } else if (params[0] instanceof Vector) {
        // ノード
        // ノードにVectorを指定してYJTreeNodeを構築します。
        super(params[0])
      } else {
        // カラム値
        // カラム数１で、ノードのカラム値を指定してYJTreeNodeを構築します。
        super(params[0])
      }
    }
  }

  /**
   * ダミークラスかどうかを取得します。
   * @return true：ダミークラス
   */
  isDummy(): boolean {
    return this.dummy
  }

  /**
   * ダミークラスかどうかを設定します。
   * @param dummy true：ダミークラス
   */
  setDummy(dummy: boolean) {
    this.dummy = dummy

    // アイコンイメージの変更
    // TODO
    // if(dummy) {
    // 	this.setImage(SMSJFTree.getDummyImg());
    // } else {
    // 	this.setImages(SMSJFTree.getCloseImg(), SMSJFTree.getOpenImg());
    // }
  }

  /**
   * ノードをコピーします。子ノードを持つときは、子ノードもコピーされます。
   * @return コピーされたノード
   */
  copyYJTreeNode(): SMSJFTreeNode {
    let toNode: SMSJFTreeNode = new SMSJFTreeNode(this.getColumnCount())

    // カラム値のコピー
    let fromObjects: any[] = this.getColumnObjects()
    if (!isNil(fromObjects)) {
      let toObjects: any[] = createArrayByInstance(
        undefined,
        fromObjects.length,
      )
      System.arraycopy(fromObjects, 0, toObjects, 0, fromObjects.length)
      toNode.setColumnObjects(toObjects)
    }

    // その他の属性
    toNode.setDummy(this.isDummy())
    toNode.setImages(this.getOpenedImage(), this.getClosedImage())

    // 子ノードのコピー
    let e: Enumeration = this.elements()
    while (e.hasMoreElements()) {
      let stn: SMSJFTreeNode = e.nextElement() as SMSJFTreeNode
      toNode.add((stn as any).copyYJTreeNode())
    }
    return toNode
  }

  _getName(): string {
    return 'SMSJFTreeNode'
  }

  static _getName(): string {
    return 'SMSJFTreeNode'
  }

  _getType() {
    return SMSJFTreeNode as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSJFTreeNode'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSJFTreeNode'
  }
}
