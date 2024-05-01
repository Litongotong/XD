/******************************************************************************
 * java.util.ArrayList
 *
 * プログラム名     : java.util.ArrayList
 * 担当者           : itac）郭禕明
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/03/26 | itac）郭禕明      | ArrayList サンプルを新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { LanguageNativeType } from '@/lib/native/config/enums'

export class ArrayList<ElementType> implements Iterable<ElementType> {
  private elements: ElementType[]

  /**
   * getter / setter にはアロー関数は非合法である
   * @see https://stackoverflow.com/questions/33827519/es6-getter-setter-with-arrow-function
   */
  get length() {
    return this.elements.length
  }

  set length(payload: number) {
    this.elements.length = payload
  }

  /**
   * ArrayList インスタンスを作成する。
   * @param payload 長さの数字、配列、ArrayList インスタンスの何れ。
   *   - 長さの場合、指定された長さの配列を作成する。
   *   - 配列の場合、その内容のままで配列を新規作成する。
   *   - ArrayList インスタンスの場合、その内容のままで配列を新規作成する。
   */
  constructor(payload: number | ElementType[] | ArrayList<ElementType>) {
    const numberPayload = typeof payload === LanguageNativeType.NUMBER
    const arrayPayload = Array.isArray(payload)
    const arrayListPayload = payload instanceof ArrayList

    if (numberPayload) {
      this.elements = new Array(payload as number)
    } else if (arrayPayload || arrayListPayload) {
      this.elements = [...(payload as ArrayList<ElementType>)]
    } else {
      this.elements = []
    }
  }

  /**
   * インターフェイス `Iterable` のイテレーターを実現する。
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
   * @see https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
   */
  [Symbol.iterator] = (): Iterator<ElementType> => {
    let index = 0

    // ここの処理は this をインスタンス対象に指させたいためである
    const elements = this.elements

    return {
      next: (): IteratorResult<ElementType> => {
        if (index < elements.length) {
          return { done: false, value: elements[index++] }
        }

        return { done: true, value: undefined as ElementType }
      },
    }
  }

  /**
   * java.util.ArrayList::toArray
   * @see https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html#toArray--
   * @returns Array
   */
  toArray = (): Array<ElementType> => {
    return this.elements
  }

  // [[add]]
  /**
   * java.util.ArrayList::add(E e)
   * @param element Element for appends
   * @see https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html#add-E-
   * @returns boolean
   */
  add(element: ElementType): boolean

  /**
   * java.util.ArrayList::add(int index, E element)
   * @param index Position for appends
   * @param element Element for appends
   * @see https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html#add-int-E-
   */
  add(index: number, element?: ElementType): void

  add(indexOrElement: number | ElementType, element?: ElementType): any {
    const multipleArguments = element !== undefined

    if (multipleArguments) {
      this._addOneAtPosition(indexOrElement as number, element)
      return
    }

    return this._addOneAtEnd(indexOrElement as ElementType)
  }

  private _addOneAtEnd(element: ElementType): boolean {
    const oldLength = this.elements.length
    this.elements.push(element as ElementType)
    return this.elements.length === oldLength + 1
  }

  private _addOneAtPosition(index: number, element: ElementType): void {
    this.elements.splice(index as number, 0, element)
  }
}
