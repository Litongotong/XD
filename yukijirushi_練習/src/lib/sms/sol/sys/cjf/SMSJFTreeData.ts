/******************************************************************************
 * sms.sol.sys.cjf.SMSJFTreeData
 *
 * プログラム名     : sms.sol.sys.cjf.SMSJFTreeData
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | SMSJFTreeData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/

import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { ArrayList } from '@/lib/native/util/ArrayList'
import { Vector } from '@/lib/native/util/Vector'
import { ref } from 'vue'
import type { SMSJFTreeNode } from './SMSJFTreeNode'
import { bindThis } from '@/utils/class/bind'
import { isNil } from '@/utils/useful'
import { JCFDataIllegalArgumentException } from '@/lib/jcf/gui/JCFDataIllegalArgumentException'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

export class SMSJFTreeData extends JCFItemData {
  value = ref<string>('') // 文字列データ
  root = ref<SMSJFTreeNode>() // ルートノード
  cursorNode = ref<SMSJFTreeNode>() // カーソルがあるノード
  columnInfoVec = ref(new Vector()) // 列情報
  rootChangeFlg = ref(false) // ルートノード変更フラグ
  columnInfoChangeFlg = ref(false) // 列情報変更フラグ
  list = ref(new ArrayList()) // 検索結果返却用リスト（内部用）

  /**
   * アイテムIDを指定してJCFFieldStringDataクラスを構築します。
   */
  constructor(itemID: string) {
    super(itemID)

    bindThis(this)
  }

  /**
   * 文字列データを取得します。
   * このクラスでは、常にnullを取得します。
   *
   * @return	文字列データ
   */
  getValue(): string {
    return this.value.value
  }

  /**
   * 文字列データを設定します。
   * このクラスでは、ＮＯＰです。
   *
   * @param	value	文字列データ
   */
  setValue(value: string) {
    // NOP
  }

  /**
   * ルートノードを取得します。
   *
   * @return	ルートノード
   */
  getRoot(): SMSJFTreeNode {
    return this.root.value!
  }

  /**
   * ルートノードを設定します。
   * 本メソッド呼び出しにより、選択中のノードは解除されます。
   *
   * @param	root	ルートノード
   */
  setRoot(root: SMSJFTreeNode) {
    this.root.value = root
    this.cursorNode.value = null!

    // ルートノード変更フラグをtrueに設定
    this.rootChangeFlg.value = true
  }

  /**
   * カーソルがあるノードを取得します。
   *
   * @return	カーソルがあるノード
   */
  getCursorNode(): SMSJFTreeNode {
    return this.cursorNode.value!
  }

  /**
   * カーソルがあるノードを設定します。
   *
   * @param	cursorNode	ノード
   */
  setCursorNode(cursorNode: SMSJFTreeNode) {
    this.cursorNode.value = cursorNode
  }

  /**
   * 列情報を取得します。
   *
   * @return 列情報
   */
  getColumnInfoVec(): Vector {
    return this.columnInfoVec.value
  }

  /**
   * 列情報を設定します。
   *
   * @param columnInfoVec  列情報
   */
  setColumnInfoVec(columnInfoVec: Vector) {
    if (isNil(columnInfoVec)) {
      return
    }

    this.columnInfoVec.value = columnInfoVec

    // 列情報変更フラグをtrueに設定
    this.columnInfoChangeFlg.value = true
  }

  /**
   * ルートノード変更フラグを取得します。
   *
   * @return ルートノード変更フラグ
   */
  isRootChangeFlg(): boolean {
    return this.rootChangeFlg.value
  }

  /**
   * ルートノード変更フラグを設定します。
   *
   * @param	rootChangeFlg	ルートノード変更フラグ
   */
  setRootChangeFlg(rootChangeFlg: boolean) {
    this.rootChangeFlg.value = rootChangeFlg
  }

  /**
   * 列情報変更フラグを取得します。
   *
   * @return 列情報変更フラグ
   */
  isColumnInfoChangeFlg(): boolean {
    return this.columnInfoChangeFlg.value
  }

  /**
   * 列情報変更フラグを設定します。
   *
   * @param	columnInfoChangeFlg	列情報変更フラグ
   */
  setColumnInfoChangeFlg(columnInfoChangeFlg: boolean) {
    this.columnInfoChangeFlg.value = columnInfoChangeFlg
  }

  /**
   * 別の項目データBeanからデータと属性をコピーします。
   *
   * @param	itemlData	項目データBean
   */
  setDataAndAttributes(itemData: JCFItemData) {
    if (isNil(itemData)) {
      return
    }
    if (!(itemData instanceof SMSJFTreeData)) {
      return
    }

    super.setDataAndAttributes(itemData as any)

    let data: SMSJFTreeData = itemData as SMSJFTreeData

    this.setData(data as any)
  }

  /**
   * 別の項目データBeanからデータをコピーします。
   *
   * @param	itemlData	項目データBean
   */
  setData(itemData: JCFItemData) {
    if (isNil(itemData)) {
      return
    }
    if (!(itemData instanceof SMSJFTreeData)) {
      return
    }

    let data: SMSJFTreeData = itemData as SMSJFTreeData

    this.setRoot(data.getRoot())
    this.setCursorNode(data.getCursorNode())
    this.setColumnInfoVec(data.getColumnInfoVec())
  }

  /**
   * 通信データを取得します。
   * このクラスでは、常にnullを取得します。
   *
   * @return	通信データ
   */
  getCommunicationData(): any {
    return null
  }

  /**
   * 通信データを設定します。
   * このクラスでは、ＮＯＰです。
   *
   * @param	newValue	通信データ
   */
  setCommunicationData(newValue: any) {
    // NOP
  }

  /**
   * 指定された文字列を含むノードを検索します。
   *
   * @param	colNo	カラムデータ列番号
   * @param	key  	検索キー
   * @param	type  	検索タイプ（true:完全一致  false:部分一致）
   * @return YJTreeNode[] 検索にヒットしたノード
   */
  search(colNo: number, key: string, type: boolean): SMSJFTreeNode[] {
    if (isNil(this.root.value)) {
      return null!
    }

    // カラムデータ列番号が、カラム数以上の場合は何もしない
    if (colNo >= this.root.value.getColumnCount() || colNo <= -1) {
      throw new JCFDataIllegalArgumentException('ERROR_RANGE_COLUMN')
    }

    // keyがnullの時は、空文字に置き換えて処理する
    if (isNil(key)) {
      key = ''
    }

    // 返却用リストのクリア
    this.list.value.clear()

    // 検索タイプの判別
    if (type) {
      // 完全一致
      this.searchFull(this.root.value, colNo, key)
    } else {
      // 部分一致
      this.searchPartial(this.root.value, colNo, key)
    }

    // 返却用リストをYJTreeNode[]型にキャスト
    let rtn: SMSJFTreeNode[] = this.list.value.toArray() as SMSJFTreeNode[]

    return rtn
  }

  /**
   * 指定された文字列を含むノードを検索します。（完全一致）
   *
   * @param	node	ノード
   * @param	colNo	カラムデータ列番号
   * @param	key  	検索キー
   */
  private searchFull(node: SMSJFTreeNode, colNo: number, key: string) {
    let tmp: any
    let tmpNode: SMSJFTreeNode

    tmp = node.getColumnObject(colNo)

    // 完全一致検索
    if (!isNil(tmp) && tmp.toString().equals(key)) {
      // 一致した場合、返却用リストに追加
      this.list.value.add(node)
    }

    //-----------------------------------------
    //子の数だけループ
    //-----------------------------------------
    for (let i = 0; i < node.getChildCount(); i++) {
      tmpNode = node.getChild(i) as any as SMSJFTreeNode

      //-----------------------------------------
      //子を持っていれば先に処理する
      //-----------------------------------------
      if (tmpNode.getChildCount() > 0) {
        this.searchFull(tmpNode, colNo, key)
      } else {
        tmp = tmpNode.getColumnObject(colNo)
        // 完全一致検索
        if (!isNil(tmp) && tmp.toString().equals(key)) {
          // 一致した場合、返却用リストに追加
          this.list.value.add(tmpNode)
        }
      }
    }
  }

  /**
   * 指定された文字列を含むノードを検索します。（部分一致）
   *
   * @param	node	ノード
   * @param	colNo	カラムデータ列番号
   * @param	key  	検索キー
   */
  private searchPartial(node: SMSJFTreeNode, colNo: number, key: string) {
    let tmp: any
    let tmpNode: SMSJFTreeNode

    tmp = node.getColumnObject(colNo)

    // 部分一致検索
    if (!isNil(tmp) && tmp.toString().indexOf(key) >= 0) {
      // 一致した場合、返却用リストに追加
      this.list.value.add(node)
    }

    //-----------------------------------------
    //子の数だけループ
    //-----------------------------------------
    for (let i = 0; i < node.getChildCount(); i++) {
      tmpNode = node.getChild(i) as any as SMSJFTreeNode

      //-----------------------------------------
      //子を持っていれば先に処理する
      //-----------------------------------------
      if (tmpNode.getChildCount() > 0) {
        this.searchPartial(tmpNode, colNo, key)
      } else {
        tmp = tmpNode.getColumnObject(colNo)
        // 部分一致検索
        if (!isNil(tmp) && tmp.toString().indexOf(key) >= 0) {
          // 一致した場合、返却用リストに追加
          this.list.value.add(tmpNode)
        }
      }
    }
  }

  _getName(): string {
    return 'SMSJFTreeData'
  }

  static _getName(): string {
    return 'SMSJFTreeData'
  }

  _getType() {
    return SMSJFTreeData as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSJFTreeData'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSJFTreeData'
  }

  _getComponentName() {
    return EComponentName.SMSJFTree
  }
}
