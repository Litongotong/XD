/******************************************************************************
 * jcf.gui.JCFListViewCellProperties
 *
 * プログラム名     : jcf.gui.JCFListViewCellProperties
 * 担当者           : itac）岩澤武
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）岩澤武  | JCFListViewCellProperties を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ref } from 'vue'
import { Color } from '@/lib/native/awt/Color'

// 🟡 要修正

interface Image {
  //Imageが実装されたら要修正
}

export class JCFListViewCellProperties {
  private string = ref<string>('')
  private alignment = ref<number>(1)
  private background = ref<Color | null>()
  private foreground = ref<Color | null>()
  private image = ref<Image | null>()

  /**
   * JCFListViewCellProperties インスタンスを作成する。
   */
  constructor() {
    this.string.value = ''
    this.alignment.value = 1
    this.background.value = null
    this.foreground.value = null
    this.image.value = null
  }

  /**
   * jcf.gui.JCFListViewRowProperties::isSelected()
   */
  getString(): string {
    return this.string.value
  }

  /**
   * jcf.gui.JCFListViewRowProperties::isSelected(string string)
   * @param string
   */
  setString(string: string): void {
    this.string.value = string
  }

  /**
   * jcf.gui.JCFListViewRowProperties::isSelected()
   */
  getAlignment(): number {
    return this.alignment.value
  }

  /**
   * jcf.gui.JCFListViewRowProperties::isSelected(number alignment)
   * @param alignment
   */
  setAlignment(alignment: number): void {
    this.alignment.value = alignment
  }

  /**
   * jcf.gui.JCFListViewRowProperties::isSelected()
   */
  getBackground(): Color | null {
    return this.background.value ?? null
  }

  /**
   * jcf.gui.JCFListViewRowProperties::isSelected(Color background)
   * @param background
   */
  setBackground(background: Color | null): void {
    this.background.value = background
  }

  /**
   * jcf.gui.JCFListViewRowProperties::isSelected()
   */
  getForeground(): Color | null {
    return this.foreground.value ?? null
  }

  /**
   * jcf.gui.JCFListViewRowProperties::isSelected(Color foreground)
   * @param foreground
   */
  setForeground(foreground: Color | null): void {
    this.foreground.value = foreground
  }

  getImage(): Image | null {
    return this.image.value ?? null
  }

  setImage(image: Image | null): void {
    this.image.value = image
  }

  _getName(): string {
    return 'JCFListViewCellProperties'
  }

  static _getName(): string {
    return 'JCFListViewCellProperties'
  }

  _getType() {
    return JCFListViewCellProperties as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFListViewCellProperties'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFListViewCellProperties'
  }
}
