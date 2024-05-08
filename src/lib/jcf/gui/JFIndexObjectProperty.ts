export class JFIndexObjectProperty {
  private i_index: number = 0
  private o_object: any = null

  /**
   * 空のJFIndexObjectPropertyクラスを構築します。
   * インデックスは0、オブジェクトはnullが設定されます。
   **/
  constructor()
  constructor(index: number, object: any)
  constructor(...params: any[]) {
    const init = (index: number, object: any) => {
      this.i_index = index
      this.o_object = object
    }
    if (params.length === 0) {
      init(0, null)
    } else if (params.length === 2) {
      // インデックスとオブジェクトを指定してJFIndexObjectPropertyクラスを構築します。
      init(params[0], params[1])
    } else {
      throw new Error('Invalid arguments')
    }
  }

  /**
   * インデックスを設定します。
   * デフォルトは0が設定されています。
   * @param index インデックス
   **/
  setIndex(index: number) {
    this.i_index = index
  }

  /**
   * インデックスを返します。
   * @return インデックス
   **/
  getIndex(): number {
    return this.i_index
  }

  /**
   * オブジェクトを設定します。
   * デフォルトはnullが設定されています。
   * @param object オブジェクト
   **/
  setObjectValue(object: any) {
    this.o_object = object
  }

  /**
   * オブジェクトを返します。
   * @return オブジェクト
   **/
  getObjectValue(): any {
    return this.o_object
  }
}
