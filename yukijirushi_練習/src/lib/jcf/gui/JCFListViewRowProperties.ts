/******************************************************************************
 * jcf.gui.JCFListViewRowProperties
 *
 * プログラム名     : jcf.gui.JCFListViewRowProperties
 * 担当者           : itac）岩澤武
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）岩澤武  | JCFListViewRowProperties を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ref } from 'vue'

// 🟡 要修正

interface Image {
  //Imageが実装されたら要修正
}

export class JCFListViewRowProperties {
  private selected = ref<boolean>(false)
  private rowID = ref<string | null>('')
  private image = ref<Image | null>(null)

  /**
   * JCFListViewRowProperties インスタンスを作成する。
   */
  constructor() {
    this.selected.value = false
    this.rowID.value = null
    this.image.value = null
  }

  /**
   * jcf.gui.JCFListViewRowProperties::isSelected()
   */
  isSelected(): boolean {
    return this.selected.value
  }

  /**
   * jcf.gui.JCFListViewRowProperties::setSelected(boolean selected)
   * @param selected
   */
  setSelected(selected: boolean): void {
    this.selected.value = selected
  }

  /**
   * jcf.gui.JCFListViewRowProperties::getRowID()
   */
  getRowID(): string | null {
    return this.rowID.value
  }

  /**
   * jcf.gui.JCFListViewRowProperties::setRowID(string rowID)
   * @param rowID
   */
  setRowID(rowID: string | null): void {
    this.rowID.value = rowID
  }

  getImage(): Image | null {
    return this.image.value
  }

  setImage(image: Image | null): void {
    this.image.value = image
  }

  _getName(): string {
    return 'JCFListViewRowProperties'
  }

  static _getName(): string {
    return 'JCFListViewRowProperties'
  }

  _getType() {
    return JCFListViewRowProperties as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFListViewRowProperties'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFListViewRowProperties'
  }
}
