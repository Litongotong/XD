import type { Serializable } from '@/lib/native/io/Serializable'
import type { SMSJFTreeNode } from './SMSJFTreeNode'
import { StringBuilder } from '@/lib/native/lang/StringBuilder'

/**
 * ツリー部品のイベント付加情報クラス
 * ツリー部品のイベントの付加情報を保持します。
 */
export class SMSJFTreeAdditionalInfo implements Serializable {
  /**
   *	変数
   */
  //	2014/01/24 システム統合開発プロジェクト Add Start
  //	イベント発生時に保持するSMSJFTreeNode内にSerializeしていない
  //	クラス変数(JFActionCode)が含まれるためtransient指定する。

  private eventNode: SMSJFTreeNode = null! // イベント発生時のノード
  private saveNode: SMSJFTreeNode = null! // 保存ノード（コピー、切り取り操作時）

  //	2014/01/24 システム統合開発プロジェクト Add End
  private lastSelectedMenu: string = '' // 前回操作時の選択メニュー

  /**
   * イベント発生時のノードを取得します。
   *
   * @return	イベント発生時のノード
   */
  getEventNode(): SMSJFTreeNode {
    return this.eventNode
  }

  /**
   * イベント発生時のノードを設定します。
   *
   * @param	eventNode	イベント発生時のノード
   */
  protected setEventNode(eventNode: SMSJFTreeNode) {
    this.eventNode = eventNode
  }

  /**
   * 保存ノード（コピー、切り取り操作時）を取得します。
   *
   * @return	保存ノード（コピー、切り取り操作時）
   */
  getSaveNode(): SMSJFTreeNode {
    return this.saveNode
  }

  /**
   * 保存ノード（コピー、切り取り操作時）を設定します。
   *
   * @param	saveNode	保存ノード（コピー、切り取り操作時）
   */
  protected setSaveNode(saveNode: SMSJFTreeNode) {
    this.saveNode = saveNode
  }

  /**
   * 前回操作時の選択メニューを取得します。
   * メニュー「貼り付け」、またはドラッグ＆ドロップ時のイベントのみ有効です。
   *
   * @return	前回操作時の選択メニュー
   */
  getLastSelectedMenu(): string {
    return this.lastSelectedMenu
  }

  /**
   * 前回操作時の選択メニューを設定します。
   *
   * @param	lastSelectedMenu	前回操作時の選択メニュー
   */
  protected setLastSelectedMenu(lastSelectedMenu: string) {
    this.lastSelectedMenu = lastSelectedMenu
  }

  toString(): string {
    const buf: StringBuilder = new StringBuilder()
    buf.append('SMSJFTreeAdditionalInfo')
    buf.append('[')
    buf.append('eventNode=')
    buf.append(this.eventNode)
    buf.append(',saveNode=')
    buf.append(this.saveNode)
    buf.append(',lastSelectedMenu=')
    buf.append(this.lastSelectedMenu)
    buf.append(']')
    return buf.toString()
  }

  _getName(): string {
    return 'SMSJFTreeAdditionalInfo'
  }

  static _getName(): string {
    return 'SMSJFTreeAdditionalInfo'
  }

  _getType() {
    return SMSJFTreeAdditionalInfo as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSJFTreeAdditionalInfo'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSJFTreeAdditionalInfo'
  }
}
