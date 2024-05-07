/******************************************************************************
 * jcf.gui.JCFSelectableElement
 *
 * プログラム名     : jcf.gui.JCFSelectableElement
 * 担当者           : itac）岩澤武
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）岩澤武  | JCFSelectableElement を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ref } from 'vue'
import { createArrayByInstance } from '@/utils/array/1D'
import { JCFDataIllegalArgumentException } from './JCFDataIllegalArgumentException'

// 🟢 完成

export class JCFSelectableElement {
  text = ref('')
  id = ref('')
  selected = ref(false)

  constructor()
  constructor(newText: string, newId: string, newSelected: boolean)
  constructor(se: JCFSelectableElement)
  constructor(...args: any[]) {
    if (args.length === 0) {
      // pass
    } else if (args.length === 1) {
      let se = args[0] as JCFSelectableElement
      if (se == null) {
        return
      } else {
        this.text.value = se.getText()
        this.id.value = se.getID()
        this.selected.value = se.isSelected()
        return
      }
    } else if (args.length === 3) {
      const [newText, newId, newSelected] = args
      this.setText(newText)
      this.setID(newId)
      this.setSelected(newSelected)
      return
    } else {
      throw new Error('Invalid arguments')
    }
  }

  static copy(seSource: JCFSelectableElement[]): JCFSelectableElement[] {
    if (!seSource?.length) {
      return []
    }
    let length: number = seSource.length
    let seTarget: JCFSelectableElement[] = createArrayByInstance(
      JCFSelectableElement,
      length,
    )
    for (let i = 0; i < length; i++) {
      seTarget[i] = new JCFSelectableElement(seSource[i])
    }
    return seTarget
  }

  getText(): string {
    return this.text.value
  }

  setText(newText: string): void {
    this.text.value = newText || ''
  }

  getID(): string {
    return this.id.value
  }

  setID(newID: string): void {
    this.id.value = newID || ''
  }

  isSelected(): boolean {
    return this.selected.value
  }

  setSelected(newSelected: boolean): void {
    this.selected.value = newSelected
  }

  static addElement(
    elements: JCFSelectableElement[],
    newElement: JCFSelectableElement,
  ): JCFSelectableElement[] {
    if (elements === null || elements === undefined) {
      throw new JCFDataIllegalArgumentException(
        'パラメタ:elementsにnullが指定されました',
      )
    }

    if (!newElement) {
      throw new JCFDataIllegalArgumentException(
        'パラメタ:elementsにnullが指定されました',
      )
    } else {
      const newList = [...elements, newElement]
      return newList
    }
  }

  static addElements(
    elements: JCFSelectableElement[],
    newElements: JCFSelectableElement[],
  ): JCFSelectableElement[] {
    if (elements === undefined || elements === null) {
      throw new JCFDataIllegalArgumentException(
        'パラメタ:elementsにnullが指定されました',
      )
    }

    if (newElements === undefined || newElements === null) {
      throw new JCFDataIllegalArgumentException(
        'パラメタ:elementsにnullが指定されました',
      )
    } else {
      const newList = [...elements, ...newElements]
      return newList
    }
  }

  static addElementAt(
    elements: JCFSelectableElement[],
    index: number,
    newElement: JCFSelectableElement,
  ): JCFSelectableElement[] {
    if (elements === undefined || elements === null) {
      throw new JCFDataIllegalArgumentException(
        'パラメタ:elementsにnullが指定されました',
      )
    }

    if (!newElement) {
      throw new JCFDataIllegalArgumentException(
        'パラメタ:newElementsにnullが指定されました',
      )
    }

    if (index < 0 || elements.length <= index + 1) {
      throw new JCFDataIllegalArgumentException(
        'パラメタ:indexに範囲外が指定されました。',
      )
    } else {
      const newList = [...elements]
      newList.splice(index, 0, newElement)
      return newList
    }
  }

  static removeElementAt(
    elements: JCFSelectableElement[],
    index: number,
  ): JCFSelectableElement[] {
    if (elements === null || elements === undefined) {
      throw new JCFDataIllegalArgumentException(
        'パラメタ:elementsにnullが指定されました',
      )
    }
    if (index < 0 || elements.length <= index + 1) {
      throw new JCFDataIllegalArgumentException(
        'パラメタ:indexに範囲外が指定されました。',
      )
    } else {
      const newList = [...elements]
      newList.splice(index, 1)
      return newList
    }
  }

  static removeElements(
    elements: JCFSelectableElement[],
    text?: string,
    id?: string,
  ): JCFSelectableElement[] {
    if (elements === null || elements === undefined) {
      throw new JCFDataIllegalArgumentException(
        'パラメタ:elementsにnullが指定されました',
      )
    }
    if (
      (text === undefined || text === null) &&
      (id === undefined || id === null)
    ) {
      throw new JCFDataIllegalArgumentException(
        'パラメタ:text,idにnullが指定されました',
      )
    }
    let textFlg: boolean = text !== null && text !== undefined
    let idFlg: boolean = id !== null && id !== undefined
    const newList = elements.filter((ele) => {
      if (textFlg && idFlg) {
        const matched = ele.getText() === text && ele.getID() === id
        return !matched
      }
      if (textFlg && !idFlg) {
        const matched = ele.getText() === text
        return !matched
      }
      if (idFlg && !textFlg) {
        const matched = ele.getID() === id
        return !matched
      }
    })
    return newList
  }

  static getSelectedElements(
    elements: JCFSelectableElement[],
  ): JCFSelectableElement[] {
    if (elements === null || elements === undefined) {
      throw new JCFDataIllegalArgumentException(
        'パラメタ:elementsにnullが指定されました',
      )
    }

    const selectedList = elements.filter((ele) => ele.isSelected())
    return selectedList
  }

  _getName(): string {
    return 'JCFSelectableElement'
  }

  static _getName(): string {
    return 'JCFSelectableElement'
  }

  _getType() {
    return JCFSelectableElement as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFSelectableElement'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFSelectableElement'
  }
}
