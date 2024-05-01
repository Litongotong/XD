import type { Label } from '.'

export type { Table } from './table'
export type { Dropdown } from './dropdown'
export type { Label } from './label'
export type { Button } from './button'
export type { Radio } from './radio'
export type { Dialog } from './dialog'
export type { SearchTree } from './search-tree'

/** @description 部品共通属性 */
export interface ComponentCommonProperty {
  fontSize?: number | string
  height?: number | string
  width?: number | string
  invisible?: boolean
  x?: number | string
  y?: number | string
  /** @description 右側項目の外枠表示かどうか */
  isShowBorderLine?: boolean
  /** @description 右側項目の外枠の幅 */
  borderLineWidth?: number | string
  /** @description 右側項目の外枠の高さ*/
  borderLineHeight?: number | string
  /** @description 項目の間の隙間*/
  itemGap?: number | string
}

/** @description ItemWrapper 用属性型 */
export type ItemWrapperProperty = ComponentCommonProperty & Label.Property
