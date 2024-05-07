import { Vector } from '@/lib/native/util/Vector'
import type { JFTreeNode } from './JFTreeNode'
import type { Image } from '@/lib/native/awt/Image'
import { IllegalArgumentException } from '@/lib/native/lang/IllegalArgumentException'
import { createArrayByInstance } from '@/utils/array/1D'
import type { Enumeration } from '@/lib/native/lang/Enumeration'
import { isNil } from '@/utils/useful'
import { System } from '@/lib/native/lang/System'
import { JFTreeNodeEvent } from './JFTreeNodeEvent'
import type { JFIndexObjectProperty } from './JFIndexObjectProperty'
import type { JFTreeNodeListener } from './JFTreeNodeListener'
import { hashCode } from '@/utils/hash'

export class JFSimpleTreeNode implements JFTreeNode {
  private parent: JFTreeNode // 親ノード
  private children: Vector // 子ノード配列
  private aColumn: any[] // データ
  private openedImage: Image // 開いているときのアイコン
  private closedImage: Image // 閉じているときのアイコン
  private listener: Vector // JFTreeNodeListener管理
  synchronizedMode: boolean = true

  /**
   * 使用不可かどうかを格納します。
   */
  private enabled: boolean = true
  //   private serializedDataVersion: number // リソース

  //##コンストラクタ
  /**
   * 空のJFSimpleTreeNodeを構築します。
   */
  constructor()
  constructor(columnCount: number)
  constructor(obj: any)
  constructor(obj: any[])
  constructor(obj: Vector)
  constructor(...params: any[]) {
    const init = (columnCount: number) => {
      // カラム数
      if (columnCount < 0) {
        throw new IllegalArgumentException()
      }
      this.listener = new Vector() // JFTreeNodeListener管理
      this.parent = undefined! // 親ノード
      this.children = new Vector() // 子ノード配列
      this.openedImage = undefined! // 開いているときのアイコン
      this.closedImage = undefined! // 閉じているときのアイコン
      this.aColumn = createArrayByInstance(undefined, columnCount)
    }
    if (params.length === 0) {
      init(0)
    } else if (params.length === 1) {
      // カラム数を指定してJFSimpleTreeNodeを構築します。
      if (typeof params[0] === 'number') {
        init(params[0])
      } else if (Array.isArray(params[0])) {
        // ノードのカラム値を配列で指定してJFSimpleTreeNodeを構築します。
        // カラム値の配列
        const objects = params[0]
        init(0)
        if (objects === undefined || objects === null) {
          throw new IllegalArgumentException()
        }
        this.setColumnObjects(objects)
      } else if (params[0] instanceof Vector) {
        // ノードにVectorを指定してJFSimpleTreeNodeを構築します。
        // 指定されたVectorの要素は、子ノードとして追加されます。
        // ノード
        const node = params[0]
        init(1)
        if (node === undefined || node === null) {
          throw new IllegalArgumentException()
        }
        let e: Enumeration = node.elements()
        while (e.hasMoreElements()) {
          let stn: JFSimpleTreeNode = new JFSimpleTreeNode(1)
          stn.setColumnObject(0, e.nextElement())
          this.add(stn as any)
        }
      } else {
        // カラム数１で、ノードのカラム値を指定してJFSimpleTreeNodeを構築します。
        init(1)
        this.setColumnObject(0, params[0])
      }
    }
  }

  //***　状態　***

  /**
   * ノードの変更をビューに通知するときのイベント処理（同期／非同期）を返します。
   * @return true:同期（省略時）、false:非同期
   */
  isSynchronized(): boolean {
    return this.synchronizedMode
  }

  /**
   * ノードの変更をビューに通知するときのイベント処理（同期／非同期）を設定します。
   * 初期状態では、イベントはメソッド呼出しと同期で発行されます。
   * イベント処理を非同期に設定するか親階層に非同期のノードがあると、本ノードも非同期にイベントが発行されます。
   * 非同期から同期に変更したときは、reflectメソッドが呼ばれます。
   * デフォルトはtrueが設定されています。
   * @param synchronizedMode  true:同期（省略時）、false:非同期
   */
  setSynchronized(synchronizedMode: boolean) {
    if (this.synchronizedMode === false && synchronizedMode === true) {
      this.reflect()
    }
    this.synchronizedMode = synchronizedMode
  }

  /**
   * ノードの変更をビューに通知します。
   * ノードの変更を通知するイベント処理が同期／非同期の状態にかかわらず、ビューにNODE_REFRESHEDイベントを発行します。
   * 親階層に非同期のノードが存在すると、そのノードの変更からビューに通知します。
   */
  reflect() {
    let temp: JFSimpleTreeNode
    let refNode: JFSimpleTreeNode
    for (
      temp = this, refNode = this;
      temp !== null && temp !== undefined;
      temp = temp.getParent() as JFSimpleTreeNode
    ) {
      if (temp.isSynchronized() === false) {
        refNode = temp
      }
    }
    refNode.internalReflect()
  }

  /**
   * 親階層を含め、同期モードをチェックします
   */
  isInternalSynchronized(): boolean {
    let temp: JFSimpleTreeNode
    for (
      temp = this;
      temp !== null && temp !== undefined;
      temp = temp.getParent() as JFSimpleTreeNode
    ) {
      if (temp.isSynchronized() === false) {
        return false
      }
    }
    return true
  }

  /**
   * NODE_REFRESHEDイベントを発行します。
   */
  internalReflect() {
    let tnEvent: JFTreeNodeEvent = new JFTreeNodeEvent(
      this,
      JFTreeNodeEvent.NODE_REFRESHED,
    )
    this.fireTreeNodeChanged(tnEvent)
  }

  /**
   * カラム数を設定します。
   * デフォルトは0が設定されています。
   * @param columnCount カラム数
   * @exception IllegalArgumentException columnCountが0より小さいとき
   */
  setColumnCount(columnCount: number) {
    if (columnCount < 0) {
      throw new IllegalArgumentException()
    }

    // 現状のカラム数と同じ
    if (!isNil(this.aColumn) && this.aColumn.length === columnCount) {
      return
    }

    let aObj: any[] = createArrayByInstance(undefined, columnCount)

    // 既存オブジェクトのコピー
    if (!isNil(this.aColumn) && this.aColumn.length !== 0) {
      System.arraycopy(
        this.aColumn,
        0,
        aObj,
        0,
        this.aColumn.length < columnCount ? this.aColumn.length : columnCount,
      )
    }

    this.aColumn = aObj

    // イベント発行
    if (this.isInternalSynchronized() === false) {
      return
    }
    let tnEvent: JFTreeNodeEvent = new JFTreeNodeEvent(
      this,
      JFTreeNodeEvent.NODE_OBJECT_UPDATED,
    )
    this.fireTreeNodeChanged(tnEvent)
  }

  /**
   * カラム数を返します。
   * @return  カラム数
   * @see	#setColumnCount
   */
  getColumnCount(): number {
    if (this.aColumn === null || this.aColumn === undefined) {
      return 0
    }
    return this.aColumn.length
  }

  //***　ノードの取り出し　***
  /**
   * 子ノードのリストを返します。
   * @return 子ノードのリスト
   */
  elements(): Enumeration {
    return this.children.elements()
  }

  /**
   * 子ノードの配列を返します。
   * @return 子ノードの配列。子ノードが存在しない場合はnullを返します。
   * @see	#getChild
   */
  getChildren(): JFTreeNode[] {
    if (this.hasChildren() === false) {
      return null!
    }

    let node: JFSimpleTreeNode[] = createArrayByInstance(
      JFSimpleTreeNode,
      this.getChildCount(),
    )
    for (let i = 0; i < this.getChildCount(); i++) {
      node[i] = this.children.elementAt(i) as JFSimpleTreeNode
    }
    return node as any[] as JFTreeNode[]
  }

  /**
   * 指定したインデックスの子ノードを返します。
   * @param index インデックス
   * @return 子ノード。子ノードが存在しない場合はnullを返します。
   * @exception IllegalArgumentException indexが存在しないとき
   * @see	#getChildren
   */
  getChild(index: number): JFTreeNode {
    if (this.hasChildren() === false) {
      return null!
    }

    // index チェック
    if (index < 0) {
      throw new IllegalArgumentException()
    }
    if (index >= this.children.size()) {
      throw new IllegalArgumentException()
    }

    return this.children.elementAt(index) as JFTreeNode
  }

  /**
   * 指定した子ノードの前のノードを返します。
   * @param node ノード
   * @return ノード。前のノードが存在しない場合はnullを返します。
   * @exception IllegalArgumentException nodeがnullのとき
   */
  getPreviousChild(node: JFTreeNode): JFTreeNode {
    let index: number

    // 引数チェック
    if (node === null || node === undefined) {
      throw new IllegalArgumentException()
    }

    // 子がいるか
    if (this.hasChildren() === false) {
      return null!
    }

    // 引数のノードが子供にいるか
    index = this.children.indexOf(node)

    // 存在しないあるいは先頭のノードか
    if (index <= 0) {
      return null!
    }

    return this.children.elementAt(index - 1) as JFTreeNode
  }

  /**
   * 指定した子ノードの次のノードを返します。
   * @param node ノード
   * @return ノード。次のノードが存在しない場合はnullを返します。
   * @exception IllegalArgumentException nodeがnullのとき
   */
  getNextChild(node: JFTreeNode): JFTreeNode {
    let index: number

    // 引数チェック
    if (node === null || node === undefined) {
      throw new IllegalArgumentException()
    }

    // 子がいるか
    if (this.hasChildren() === false) {
      return null!
    }
    // 引数のノードが子供にいるか
    index = this.children.indexOf(node)

    // 存在しないあるいは最後尾のノードか
    if (index === -1 || index >= this.children.size() - 1) {
      return null!
    }

    return this.children.elementAt(index + 1) as JFTreeNode
  }

  /**
   * 最初の子ノードを返します。
   * @return ノード。子ノードが存在しない場合はnullを返します。
   */
  getFirstChild(): JFTreeNode {
    if (this.hasChildren() === false) {
      return null!
    }
    return this.children.firstElement() as JFTreeNode
  }

  /**
   * 最後の子ノードを返します。
   * @return ノード。子ノードが存在しない場合はnullを返します。
   */
  getLastChild(): JFTreeNode {
    if (this.hasChildren() === false) {
      return null!
    }
    return this.children.lastElement() as JFTreeNode
  }

  //***　階層　***
  /**
   * 親ノードを返します。
   * @return  親ノード。親ノードが存在しない場合はnullを返します。
   */
  getParent(): JFTreeNode {
    return this.parent as JFTreeNode
  }

  /**
   * 親ノードを設定します。
   * このメソッドで親を設定すると、親の子に関する情報も変更されます。
   * nullを設定すると親ノードから本ノードが削除されます。
   * デフォルトはnullが設定されています。
   * @param node 親ノード
   */
  setParent(node: JFTreeNode) {
    if (this.parent === node) {
      return
    }

    // 現親ノードに自分が設定されていたら削除する
    if (
      !isNil(this.parent) &&
      (this.parent as JFSimpleTreeNode).searchTreeNode(this) !== -1
    ) {
      ;(this.parent as JFSimpleTreeNode).remove(this)
    }

    // 親ノードに自分を追加する
    if (node !== null && node !== undefined) {
      ;(node as JFSimpleTreeNode).add(this)
    } else {
      this.parent = node
    }
  }

  /**
   * 親ノードを設定するための内部メソッドです。
   * プロパティを変更するだけで、ノードの編集は行いません。
   * add(), insert(), remove(), removeAll(), copy()から利用されます。
   * @param node 親ノード
   */
  internalSetParent(node: JFTreeNode) {
    this.parent = node
  }

  /**
   * ノードの階層数を返します。
   * ルートノードの場合は０が返ります。子ノード以下の階層数は１ずつ増加された値になります。
   * @return 階層数。
   */
  getDepth(): number {
    let depth: number
    let node: JFTreeNode

    depth = 0
    node = this.getParent()
    while (node !== null && node !== undefined) {
      depth++
      node = node.getParent()
    }
    return depth
  }

  /**
   * ルートノードを返します。
   * @return ルートノード
   */
  getRoot(): JFTreeNode {
    let root: JFTreeNode

    root = this as JFTreeNode
    while (!isNil(root.getParent())) {
      root = root.getParent()
    }
    return root
  }

  /**
   * 子ノードの数を返します。
   * @return 子ノード数
   * @see	#getNodeCount
   */
  getChildCount(): number {
    if (this.children === null || this.children === undefined) {
      return 0
    }
    return this.children.size()
  }

  /**
   * 子ノード以下の全ノードの数を返します。
   * @return ノード数
   * @see	#getChildCount
   */
  getNodeCount(): number {
    let nodeCount: number
    let i: number
    let node: JFTreeNode

    nodeCount = 0
    for (i = 0; i < this.getChildCount(); i++) {
      node = this.getChild(i)
      if (node.hasChildren() == true) {
        nodeCount += (node as JFSimpleTreeNode).getNodeCount()
      }
      nodeCount++
    }
    return nodeCount
  }

  /**
   * 子ノードの有無を返します。
   * @return true:子ノード有り、false:子ノード無し
   */
  hasChildren(): boolean {
    if (this.getChildCount() === 0) {
      return false
    }
    return true
  }

  /**
   * 指定したノードが親階層以上(親ノードからルートノードまで）に存在するかどうかを返します。
   * @param node 調べるノード
   * @return true:存在する、 false:存在しない
   * @exception IllegalArgumentException nodeがnullのとき
   */
  isAncestor(node: JFTreeNode): boolean {
    let work: JFTreeNode

    // 引数チェック
    if (node === null || node === undefined) {
      throw new IllegalArgumentException()
    }

    // 指定されたノードの親に自分自身がいるかチェック
    work = this.getParent()
    while (!isNil(work)) {
      if (work === node) {
        return true
      }
      work = work.getParent()
    }
    return false
  }

  /**
   * 指定したノードが子階層以下に存在するかどうかを返します。
   * @param node 調べるノード
   * @return true:存在する、false:存在しない
   * @exception IllegalArgumentException nodeがnullのとき
   */
  isDescendant(node: JFTreeNode): boolean {
    let w_parent: JFTreeNode

    // 引数チェック
    if (isNil(node)) {
      throw new IllegalArgumentException()
    }

    // 指定されたノードの親に自分自身がいるかチェック
    w_parent = node.getParent()
    while (!isNil(w_parent)) {
      if ((w_parent as any) === this) {
        return true
      }
      w_parent = w_parent.getParent()
    }

    return false
  }

  //***　編集　***
  /**
   * 子ノードを追加します。
   * @param node 追加するノード
   * @exception IllegalArgumentException 以下のときに発生
   * <UL>
   *     <LI>nodeがnullのとき</LI>
   *     <LI>追加するnodeと本ノードのルートが同じとき</LI>
   * </UL>
   */
  add(node: JFTreeNode) {
    // 引数チェック
    if (isNil(node)) {
      throw new IllegalArgumentException()
    }

    // ルートチェック
    if (node instanceof JFSimpleTreeNode) {
      if ((node as JFSimpleTreeNode).getRoot() === this.getRoot()) {
        throw new IllegalArgumentException()
      }
    }

    if ((node.getParent() as any) === this) {
      return
    }

    // 親を設定する
    ;(node as JFSimpleTreeNode).internalSetParent(this)
    this.children.addElement(node)

    // イベント発行
    if (this.isInternalSynchronized() === false) {
      return
    }
    let tnEvent: JFTreeNodeEvent = new JFTreeNodeEvent(
      this,
      JFTreeNodeEvent.NODE_ADDED,
    )
    this.fireTreeNodeChanged(tnEvent)
  }

  insert(insNode: JFTreeNode, node: JFTreeNode): void
  insert(index: number, node: JFTreeNode): void
  insert(...params: any[]) {
    if (params.length === 2) {
      if (typeof params[0] === 'number') {
        this.__insertWithIndex(params[0], params[1])
      } else {
        this.__insertWithNode(params[0], params[1])
      }
    } else {
      throw new Error('Invalid number of arguments')
    }
  }

  /**
   * 子ノードを挿入します。
   * @param insNode 挿入先のノード
   * @param node 挿入するノード
   * @exception IllegalArgumentException 以下のときに発生
   * <UL>
   *     <LI>nodeあるいはinsNodeがnullのとき</LI>
   *     <LI>insNodeが子ノードでないとき</LI>
   * </UL>
   */
  private __insertWithNode(insNode: JFTreeNode, node: JFTreeNode) {
    let index: number

    // 引数チェック
    if (isNil(node)) {
      throw new IllegalArgumentException()
    }
    if (isNil(insNode)) {
      throw new IllegalArgumentException()
    }

    // 挿入先のノードが子に存在するか
    index = this.children.indexOf(insNode)
    if (index === -1) {
      throw new IllegalArgumentException()
    }

    this.insert(index, node)
  }

  /**
   * 子ノードを挿入します。
   * @param index 挿入先のインデックス
   * @param node 挿入するノード
   * @exception IllegalArgumentException 以下のときに発生
   * <UL>
   *     <LI>indexのノードが存在しないとき</LI>
   *     <LI>nodeがnullのとき</LI>
   *     <LI>追加するnodeと本ノードのルートが同じとき</LI>
   * </UL>
   */
  private __insertWithIndex(index: number, node: JFTreeNode) {
    let size: number

    // 引数チェック
    if (isNil(node)) {
      throw new IllegalArgumentException()
    }

    // すでに同じノードが兄弟として存在している。
    if ((node.getParent() as any) === this) {
      throw new IllegalArgumentException()
    }

    // ルートチェック
    if (node instanceof JFSimpleTreeNode) {
      if ((node as JFSimpleTreeNode).getRoot() === this.getRoot()) {
        throw new IllegalArgumentException()
      }
    }

    if (index < 0 || index >= this.children.size()) {
      throw new IllegalArgumentException()
    }

    this.children.insertElementAt(node, index)

    // 親を設定する
    ;(node as JFSimpleTreeNode).internalSetParent(this)

    // イベント発行
    if (this.isInternalSynchronized() === false) {
      return
    }
    let tnEvent: JFTreeNodeEvent = new JFTreeNodeEvent(
      this,
      JFTreeNodeEvent.NODE_INSERTED,
      index,
    )
    this.fireTreeNodeChanged(tnEvent)
  }

  remove(node: JFTreeNode): void
  remove(index: number): void
  remove(...params: any[]) {
    if (params.length === 1) {
      if (typeof params[0] === 'number') {
        this.__removeWithIndex(params[0])
      } else {
        this.__removeWithNode(params[0])
      }
    } else {
      throw new Error('Invalid number of arguments')
    }
  }

  /**
   * 指定した子ノードを削除します。
   * @param node 削除するノード
   * @exception IllegalArgumentException 以下のときに発生
   * <UL>
   *     <LI>nodeがnullのとき</LI>
   *     <LI>nodeが子ノードに存在しないとき</LI>
   * </UL>
   */
  private __removeWithNode(node: JFTreeNode) {
    // 引数チェック
    if (isNil(node)) {
      throw new IllegalArgumentException()
    }

    // 子に存在するか
    if (this.children.indexOf(node) === -1) {
      throw new IllegalArgumentException()
    }

    // 削除
    this.children.removeElement(node)

    // 削除する子の親をnullにする
    ;(node as JFSimpleTreeNode).internalSetParent(null!)

    // イベント発行
    if (this.isInternalSynchronized() === false) {
      return
    }
    let tnEvent: JFTreeNodeEvent = new JFTreeNodeEvent(
      this,
      JFTreeNodeEvent.NODE_REMOVED,
      node,
    )
    this.fireTreeNodeChanged(tnEvent)
  }

  /**
   * 指定したインデックスのノードを削除します。
   * @param index 削除する子ノードのインデックス
   * @exception IllegalArgumentException indexのノードが存在しないとき
   */
  private __removeWithIndex(index: number) {
    // indexチェック
    if (index < 0) {
      throw new IllegalArgumentException()
    }

    if (index >= this.children.size()) {
      throw new IllegalArgumentException()
    }

    this.remove(this.children.elementAt(index) as JFTreeNode)
  }

  /**
   * 子ノードをすべて削除します。
   */
  removeAllChildren() {
    let i: number

    // 削除する子の親をnullにする
    for (i = 0; i < this.getChildCount(); i++) {
      ;(this.getChild(i) as JFSimpleTreeNode).internalSetParent(null!)
    }
    this.children.removeAllElements()

    // イベント発行
    if (this.isInternalSynchronized() === false) {
      return
    }
    let tnEvent: JFTreeNodeEvent = new JFTreeNodeEvent(
      this,
      JFTreeNodeEvent.NODE_REMOVED,
    )
    this.fireTreeNodeChanged(tnEvent)
  }

  //***　カラム値の編集　***
  /**
   * ノードのカラム値を配列で返します。
   * @return カラム値の配列
   */
  getColumnObjects(): any[] {
    return this.aColumn
  }

  /**
   * 指定された列のカラム値を返します。
   * @param column 列
   * @return カラム値
   * @exception IllegalArgumentException 以下のときに発生
   * <UL>
   *     <LI>指定したcolumnの列が存在しないとき</LI>
   *     <LI>本ノードのcolumnCountが設定されていないとき</LI>
   * </UL>
   */
  getColumnObject(column: number): any {
    if (column < 0) {
      throw new IllegalArgumentException()
    }

    // データが無い
    if (isNil(this.aColumn) || this.aColumn.length === 0) {
      throw new IllegalArgumentException()
    }

    // 指定した列があるか
    if (this.aColumn.length <= column) {
      throw new IllegalArgumentException()
    }

    return this.aColumn[column]
  }

  /**
   * ノードのカラム値を配列で設定します。
   * @param objects カラム値の配列
   * @exception IllegalArgumentException objectsがnullのとき
   */
  setColumnObjects(objects: any[]) {
    if (isNil(objects)) {
      throw new IllegalArgumentException()
    }

    this.aColumn = objects

    // イベント発行
    if (this.isInternalSynchronized() === false) {
      return
    }
    let tnEvent: JFTreeNodeEvent = new JFTreeNodeEvent(
      this,
      JFTreeNodeEvent.NODE_OBJECT_UPDATED,
    )
    this.fireTreeNodeChanged(tnEvent)
  }

  setColumnObject(column: number, object: any): void
  setColumnObject(value: JFIndexObjectProperty): void
  setColumnObject(...params: any[]) {
    if (params.length === 1) {
      this.__setColumnObjectWithValue(params[0])
    } else if (params.length === 2) {
      this.__setColumnObjectWithColumnAndObj(params[0], params[1])
    } else {
      throw new Error('Invalid number of arguments')
    }
  }

  /**
   * 指定された列のカラム値を設定します。
   * デフォルトはnullが設定されています。
   * @param column 列
   * @param object カラム値
   * @exception IllegalArgumentException 以下のときに発生
   * <UL>
   *     <LI>指定したcolumnの列が存在しないとき</LI>
   *     <LI>本ノードのcolumnCountが設定されていないとき</LI>
   * </UL>
   */
  private __setColumnObjectWithColumnAndObj(column: number, object: any) {
    if (column < 0) {
      throw new IllegalArgumentException()
    }

    // データが無い
    if (isNil(this.aColumn) || this.aColumn.length === 0) {
      throw new IllegalArgumentException()
    }

    // 指定した列があるか
    if (this.aColumn.length <= column) {
      throw new IllegalArgumentException()
    }

    this.aColumn[column] = object

    // イベント発行
    if (this.isInternalSynchronized() === false) {
      return
    }
    let tnEvent: JFTreeNodeEvent = new JFTreeNodeEvent(
      this,
      JFTreeNodeEvent.NODE_OBJECT_UPDATED,
    )
    this.fireTreeNodeChanged(tnEvent)
  }

  /**
   * 指定されたカラム値を設定します。
   * デフォルトはnullが設定されています。
   * @param value  列とカラム値の情報
   * @exception IllegalArgumentException 以下のときに発生
   * <UL>
   *     <LI>指定したcolumnの列が存在しないとき</LI>
   *     <LI>本ノードのcolumnCountが設定されていないとき</LI>
   * </UL>
   */
  private __setColumnObjectWithValue(value: JFIndexObjectProperty) {
    this.setColumnObject(value.getIndex(), value.getObjectValue())
  }

  //***　アイコンイメージ　***
  /**
   * アイコンイメージを設定します。ノードが開いているときと閉じているときのアイコンイメージは同じものになります。
   * nullを設定すると、設定されている情報がクリアされます。
   * デフォルトはnullが設定されています。
   * @param image アイコンイメージ
   */
  setImage(image: Image): any {
    this.openedImage = image
    this.closedImage = image

    // イベント発行
    if (this.isInternalSynchronized() === false) {
      return
    }
    let tnEvent: JFTreeNodeEvent = new JFTreeNodeEvent(
      this,
      JFTreeNodeEvent.NODE_IMAGE_CHANGED,
    )
    this.fireTreeNodeChanged(tnEvent)
  }

  /**
   * ノードが開いているときと閉じているときのアイコンイメージをそれぞれ設定します。
   * nullを設定すると、設定されている情報がクリアされます。
   * @param openedImage ノードが開いているときのアイコンイメージ
   * @param closedImage ノードが閉じているときのアイコンイメージ
   */
  setImages(openedImage: Image, closedImage: Image) {
    this.openedImage = openedImage
    this.closedImage = closedImage

    // イベント発行
    if (this.isInternalSynchronized() === false) {
      return
    }
    let tnEvent: JFTreeNodeEvent = new JFTreeNodeEvent(
      this,
      JFTreeNodeEvent.NODE_IMAGE_CHANGED,
    )
    this.fireTreeNodeChanged(tnEvent)
  }

  /**
   * 開いているときのアイコンイメージを返します。
   * @return アイコンイメージ
   */
  getOpenedImage(): Image {
    return this.openedImage
  }

  /**
   * 閉じているときのアイコンイメージを返します。
   * @return アイコンイメージ
   */
  getClosedImage(): Image {
    return this.closedImage
  }

  private hashCode(): number {
    const str = this._toString()
    const hash = hashCode(str)
    return hash
  }

  //***　検索　***
  /**
   * このノードのIDを返します。
   * @return ノードID
   */
  getTreeNodeID(): number {
    return this.hashCode()
  }

  /**
   * 全ノードの中から、指定されたIDを持つノードを探します。
   * @param treeNodeID 検索するID
   * @return ノード
   * <ul>
   * <li>null以外：指定されたIDを持つノード
   * <li>null:指定されたIDを持つノードは存在しない
   * </ul>
   **/
  searchTreeNodeID(treeNodeID: number): JFTreeNode {
    let e: Enumeration = this.children.elements()
    let stn: JFSimpleTreeNode
    while (e.hasMoreElements()) {
      stn = e.nextElement() as JFSimpleTreeNode
      if (stn.getTreeNodeID() === treeNodeID) {
        return stn
      }
      if (stn.hasChildren() === true) {
        let tn: JFTreeNode
        tn = stn.searchTreeNodeID(treeNodeID)
        if (!isNil(tn)) {
          return tn
        }
      }
    }
    return null!
  }

  /**
   * 子ノードの中から、指定されたノードを探し、インデックスを返します。
   * @param  treeNode 検索するノード
   * @return インデックス
   * <ul>
   * <li>0以上：子ノードのインデックス
   * <li>-1:子ノードに存在しない
   * </ul>
   * @exception IllegalArgumentException treeNodeがnullのとき
   **/
  searchTreeNode(treeNode: JFTreeNode): number {
    if (isNil(treeNode)) {
      throw new IllegalArgumentException()
    }

    return this.children.indexOf(treeNode)
  }

  //***　ソート関連　***
  /**
   * 指定された列でノードをソートします。
   * @param column ソートする列
   * @param ascend true:昇順、false:降順
   * @exception IllegalArgumentException columnが0より小さいとき
   */
  sort(column: number, origin_ascend: any) {
    let ascend: boolean = origin_ascend
    if (column < 0) {
      throw new IllegalArgumentException()
    }

    if (this.hasChildren() === false) {
      return
    }

    this.internalSort(column, ascend)

    // イベント発行
    if (this.isInternalSynchronized() === false) {
      return
    }
    let tnEvent: JFTreeNodeEvent = new JFTreeNodeEvent(
      this,
      JFTreeNodeEvent.NODE_REFRESHED,
    )
    this.fireTreeNodeChanged(tnEvent)
  }

  /**
   * 内部メソッド：指定された列をソートします。イベントを発行しません。
   * @param column ソートする列
   * @param ascend true:昇順、false:降順
   */
  internalSort(column: number, ascend: boolean) {
    if (this.hasChildren() === false) {
      return
    }

    let nodei: JFSimpleTreeNode
    let nodej: JFSimpleTreeNode
    let i: number, j: number
    let obji: any = null
    let objj: any = null
    let e: Enumeration = this.children.elements()
    for (i = 0; e.hasMoreElements(); i++, obji = null) {
      nodei = e.nextElement() as JFSimpleTreeNode
      if (nodei.getColumnCount() - 1 >= column) {
        obji = nodei.getColumnObject(column)
      }

      // 子ノードのソート
      nodei.internalSort(column, ascend)

      for (j = i - 1; j >= 0; j--, objj = null) {
        nodej = this.getChild(j) as JFSimpleTreeNode

        if (nodej.getColumnCount() - 1 >= column) {
          objj = nodej.getColumnObject(column)
        }

        if (this.sortCompare(obji, objj, ascend)) {
          break
        }
      }
      if (j !== i - 1) {
        this.children.removeElementAt(i)
        this.children.insertElementAt(nodei, j + 1)
      }
    }
  }

  /**
   * 指定した要素の大小関係（文字列として）を比較します。
   * @param obj1   オブジェクト１。nullのときは、空文字列が指定されたものとみなします。
   * @param obj2   オブジェクト２。nullのときは、空文字列が指定されたものとみなします。
   * @return obj1とobj2の大小関係の比較結果
   * <ul>
   * <li>obj1 &gt; obj2 : 正の数
   * <li>obj1 = obj2 : 0
   * <li>obj1 &lt; obj2 : 負の数
   * </ul>
   **/
  protected compareElement(obj1: any, obj2: any): number {
    let str1: string, str2: string
    if (isNil(obj1)) {
      str1 = ''
    } else {
      str1 = obj1.toString()
    }
    if (isNil(obj2)) {
      str2 = ''
    } else {
      str2 = obj2.toString()
    }

    return str1.compareTo(str2)
  }

  /**
   * ascendにしたがって、指定した要素の大小関係（文字列として）を比較します。
   * @param obj1   オブジェクト１。
   * @param obj2   オブジェクト２。
   * @param ascend true:昇順、false:降順
   * @return obj1とobj2の大小関係の比較結果
   **/
  sortCompare(obj1: any, obj2: any, ascend: boolean): boolean {
    if (ascend === true) {
      if (this.compareElement(obj1, obj2) >= 0) {
        return true
      }
    } else {
      if (this.compareElement(obj1, obj2) <= 0) {
        return true
      }
    }
    return false
  }

  //*** ユーティリティ　***
  /**
   * ノードをコピーします。子ノードを持つときは、子ノードもコピーされます。
   * @return コピーされたノード
   */
  copy(): JFTreeNode {
    let toNode: JFSimpleTreeNode = new JFSimpleTreeNode(this.getColumnCount())

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
    toNode.setImages(this.getOpenedImage(), this.getClosedImage())
    toNode.internalSetParent(null!)

    // 子ノードのコピー
    let e: Enumeration = this.elements()
    while (e.hasMoreElements()) {
      let stn: JFSimpleTreeNode = e.nextElement() as JFSimpleTreeNode
      toNode.add(stn.copy())
    }
    return toNode
  }

  /**
   * オブジェクトの文字列表現を返します。
   */
  toString(): string {
    return (
      'JFSimpleTreeNode' +
      ', ID=' +
      this.getTreeNodeID() +
      ', ChildCount=' +
      this.children.size()
    )
  }

  /**
   * 使用不可かどうかを返します。
   * @return true:使用可、false:使用不可
   */
  isEnabled(): boolean {
    return this.enabled
  }

  /**
   * ノードの使用可／不可を設定します。
   * 使用不可の場合には、選択操作、文字列の編集の操作を行うことは出来ません。
   * 使用不可の場合には、JFTreeの使用不可時の色でノードの描画を行います。
   * なお、使用可／不可の変更を行っても、子ノードの使用可／不可の状態は変更しません。
   * @param enabled true:使用可、false:使用不可
   */
  setEnabled(enabled: boolean) {
    if (this.enabled !== enabled) {
      this.enabled = enabled
      // イベント発行
      if (this.isInternalSynchronized() === false) {
        return
      }
      let tnEvent: JFTreeNodeEvent = new JFTreeNodeEvent(
        this,
        JFTreeNodeEvent.NODE_OBJECT_UPDATED,
      )
      this.fireTreeNodeChanged(tnEvent)
    }
  }

  //***　イベント関連　***
  /**
   * JFTreeNodeListenerを登録します。
   * @param tnListener リスナ
   * @exception IllegalArgumentException tnListenerがnullのとき
   */
  addTreeNodeListener(tnListener: JFTreeNodeListener) {
    if (isNil(tnListener)) {
      throw new IllegalArgumentException()
    }

    this.listener.addElement(tnListener)
  }

  /**
   * JFTreeNodeListenerを削除します。
   * @param tnListener リスナ
   * @exception IllegalArgumentException tnListenerがnullのとき
   * @see #addTreeNodeListener
   * @see #getTreeNodeListeners()
   */
  removeTreeNodeListener(tnListener: JFTreeNodeListener) {
    if (isNil(tnListener)) {
      throw new IllegalArgumentException()
    }

    this.listener.removeElement(tnListener)
  }

  /**
   * このコンポーネントに登録されているすべてのJFTreeNodeListenerの配列を返します。
   * @return このコンポーネントのすべてのJFTreeNodeListener。JFTreeNodeListenerが現在登録されていない場合は空の配列を返します
   */
  getTreeNodeListeners(): JFTreeNodeListener[] {
    let size: number = 0
    if (!isNil(this.listener)) {
      size = this.listener.size()
    }

    let array: JFTreeNodeListener[] = createArrayByInstance(undefined!, size)

    if (size > 0) {
      this.listener.toArray(array)
    }

    return array
  }

  /**
   * JFTreeNodeの変更を通知します。
   * @param tnEvent オブジェクトの変更イベント
   * @exception IllegalArgumentException tnEventがnullのとき
   */
  protected fireTreeNodeChanged(tnEvent: JFTreeNodeEvent) {
    if (isNil(tnEvent)) {
      throw new IllegalArgumentException()
    }

    switch (tnEvent.getID()) {
      // ノードのカラム数が変更あるいはノードが全削除されました。
      case JFTreeNodeEvent.NODE_REFRESHED:
        for (let i = 0; i < this.listener.size(); i++) {
          ;(this.listener.elementAt(i) as JFTreeNodeListener).nodeRefreshed(
            tnEvent,
          )
        }
        break
      // ノードが追加されました。
      case JFTreeNodeEvent.NODE_ADDED:
        for (let i = 0; i < this.listener.size(); i++) {
          ;(this.listener.elementAt(i) as JFTreeNodeListener).nodeAdded(tnEvent)
        }
        break
      // ノードが挿入されました。
      case JFTreeNodeEvent.NODE_INSERTED:
        for (let i = 0; i < this.listener.size(); i++) {
          ;(this.listener.elementAt(i) as JFTreeNodeListener).nodeInserted(
            tnEvent,
          )
        }
        break
      // ノードが削除されました。
      case JFTreeNodeEvent.NODE_REMOVED:
        for (let i = 0; i < this.listener.size(); i++) {
          ;(this.listener.elementAt(i) as JFTreeNodeListener).nodeRemoved(
            tnEvent,
          )
        }
        break
      // ノード内のオブジェクトが更新されました。
      case JFTreeNodeEvent.NODE_OBJECT_UPDATED:
        for (let i = 0; i < this.listener.size(); i++) {
          ;(this.listener.elementAt(i) as JFTreeNodeListener).nodeObjectUpdated(
            tnEvent,
          )
        }
        break
      // アイコンイメージが更新されました。
      case JFTreeNodeEvent.NODE_IMAGE_CHANGED:
        for (let i = 0; i < this.listener.size(); i++) {
          ;(this.listener.elementAt(i) as JFTreeNodeListener).nodeImageChanged(
            tnEvent,
          )
        }
        break
      default:
        throw new IllegalArgumentException()
    }
  }

  // ストリーム固有識別子
  private static listenerKey: string = 'listener'

  private writeObject(s: any /* ObjectOutputStream */) {
    throw new Error('Method not implemented.')
    // this.serializedDataVersion = JFSerializeID.currentDataVersion;

    // // 各リスナを初期化した状態でシリアライズする
    // Vector sv_listener = this.listener;
    // this.listener = new Vector();

    // s.defaultWriteObject();

    // // シリアライズ可能なリスナのみをシリアライズする
    // this.listener = sv_listener;

    // JFSerializeController.saveVector(s, listenerKey, this.listener);
    // s.writeObject(null);
  }

  private readObject(s: any /* ObjectInputStream */) {
    throw new Error('Method not implemented.')
    // s.defaultReadObject();

    // if ((this.serializedDataVersion >=JFSerializeID.JavaBusinessKitV31L10)||
    // 	(JFSerializeController.isListenersSerialized(this))){
    // 	// リスナをデシリアライズする
    // 	Object keyOrNull;
    // 	while(null != (keyOrNull = s.readObject())) {
    // 		String key = ((String)keyOrNull).intern();

    // 		if(key.equals(listenerKey)) {
    // 			addTreeNodeListener((JFTreeNodeListener)(s.readObject()));
    // 		}
    // 		else {
    // 			s.readObject();
    // 		}
    // 	}
    // }
  }

  private _toString(): string {
    const parentString = this.parent?.toString ? this.parent.toString() : ''
    const childrenString = this.children?.toString
      ? this.children.toString()
      : ''
    const aColumnString = this.aColumn?.length
      ? this.aColumn
          .map((c) => {
            if (c.toString) {
              return c.toString()
            } else {
              return `${c}`
            }
          })
          .join(', ')
      : ''
    const synchronizedModeString = this.synchronizedMode ? 'true' : 'false'
    const enabledString = this.enabled ? 'true' : 'false'
    const listenerString = this.listener?.toString
      ? this.listener.toString()
      : ''
    return (
      'JFSimpleTreeNode' +
      `${parentString}` + // parent
      `${childrenString}` + // children
      `${aColumnString}` + // aColumn
      `${synchronizedModeString}` + // synchronizedMode
      `${enabledString}` + // enabled
      `${listenerString}`
    ) // listener
  }
}
