/******************************************************************************
 * jcf.gui.JCFListViewColumnProperties
 *
 * プログラム名     : jcf.gui.JCFListViewColumnProperties
 * 担当者           : itac）岩澤武
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）岩澤武  | JCFListViewColumnProperties を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ref } from 'vue'
import { Color } from '@/lib/native/awt/Color'
import { JCFListViewCellProperties } from './JCFListViewCellProperties'

// 🟡 要修正

export class JCFListViewColumnProperties {
  private columnAlignment = ref<number>(0)
  private columnBackground = ref<Color | null>()
  private columnForeground = ref<Color | null>()
  private headerCellProperties = ref<JCFListViewCellProperties>()
  private width = ref<number>(80)
  private enableSort = ref<boolean>(false)
  private enableChangeWidth = ref<boolean>(false)
  public static readonly SORT_ASCEND = 1
  public static readonly SORT_DESCEND = 2
  protected static readonly TOP_INDEX_INITIAL_VALUE = -1
  protected static readonly CURSOR_INDEX_INITIAL_VALUE = -1
  protected static readonly SORT_COLUMN_INITIAL_VALUE = -1

  /**
   * JCFListViewColumnProperties インスタンスを作成する。
   */
  constructor() {
    this.columnAlignment.value = 1
    this.columnBackground.value = null
    this.columnForeground.value = null
    this.headerCellProperties.value = new JCFListViewCellProperties()
    this.width.value = 80
    this.enableSort.value = false
    this.enableChangeWidth.value = false
  }

  /**
   * jcf.gui.JCFListViewColumnProperties::getColumnAlignment()
   */
  getColumnAlignment = (): number => {
    return this.columnAlignment.value
  }

  /**
   * jcf.gui.JCFListViewColumnProperties::setColumnAlignment(number columnAlignment)
   */
  setColumnAlignment = (columnAlignment: number): void => {
    this.columnAlignment.value = columnAlignment
  }

  /**
   * jcf.gui.JCFListViewColumnProperties::setWidth(number width)
   */
  setWidth = (width: number): void => {
    this.width.value = width
  }

  /**
   * jcf.gui.JCFListViewColumnProperties::getColumnBackground()
   */
  getColumnBackground = (): Color | null => {
    return this.columnBackground.value ?? null
  }

  /**
   * jcf.gui.JCFListViewColumnProperties::getColumnForeground()
   */
  getColumnForeground = (): Color | null => {
    return this.columnForeground.value ?? null
  }

  getHeaderCellProperties = (): JCFListViewCellProperties | undefined => {
    return this.headerCellProperties.value
  }

  _getName(): string {
    return 'JCFListViewColumnProperties'
  }

  static _getName(): string {
    return 'JCFListViewColumnProperties'
  }

  _getType() {
    return JCFListViewColumnProperties as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFListViewColumnProperties'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFListViewColumnProperties'
  }
}
