import type { Color } from '@/lib/native/awt/Color'
import type { CSSProperties } from 'vue'
import type { JCFCommonStaticProps } from './types'
import type { Rectangle } from '@/lib/native/awt/Rectangle'
import type { Point } from '@/lib/native/awt/Point'
import type { Dimension } from '@/lib/native/awt/Dimension'
import type { Font } from '../entry'

import { EJFLineType } from '@/lib/jcf/gui/JFLineType'
import { EJFAlignment } from '@/lib/jcf/gui/JFAlignment'
import { isNil } from '@/utils/useful'

/**
 * 数字に px を付けてサイズに変換する。
 * @param value 数字
 * @returns サイズ
 */
export function toPX(value?: number) {
  if (isNil(value)) {
    return undefined
  }
  return `${value}px`
}

/**
 * Color 実例を CSS 色属性に変換する。
 * @param Color 実例
 * @returns CSS 色属性
 */
export function toRGB(color?: Color | null) {
  if (color) {
    return color._toRGBString()
  }
}

/**
 * Font 実例を CSS 文字属性に変換する。
 * @param Font 実例
 * @returns CSS 文字属性
 */
export function toCSSFont(font?: Font | null) {
  if (font) {
    return font._getFontCSS()
  }
}

/**
 * ボーダータイプを CSS ボーダーオブジェクトに変換する。
 * @param style ボーダータイプ
 * @returns CSS ボーダーオブジェクト
 */
export const toBorderStyle = (
  style?: EJFLineType,
): CSSProperties['border-style'] | undefined => {
  if (style === undefined) {
    return undefined
  }

  switch (style) {
    case EJFLineType.NOTHING:
      return undefined
    case EJFLineType.SINGLE:
      return 'solid'
    case EJFLineType.DOUBLE:
      return 'double'
    case EJFLineType.RAISED:
      return 'outset'
    case EJFLineType.SUNKEN:
      return 'inset'
    case EJFLineType.CONVEX:
      return 'outset'
    case EJFLineType.FLAT:
      return 'solid'
    case EJFLineType.CONCAVE:
      return 'inset'
    default:
      return undefined
  }
}

export type IJCFAlignProps = Pick<
  JCFCommonStaticProps,
  'alignmentHorizontal' | 'alignmentVertical'
>

/**
 * AlignProps で CSS Align 関連オブジェクトを作成する。
 * @param alignmentProps 水平位置か垂直位置
 * @returns CSS Align 関連オブジェクト
 */
export const toAlignment = (alignmentProps: IJCFAlignProps) => {
  const { alignmentHorizontal, alignmentVertical } = alignmentProps
  const css: CSSProperties = {}

  if (alignmentHorizontal || alignmentVertical) {
    css.display = 'flex'
  }

  // NOTE: 水平、垂直各自のみで右上等の位置にすることはできないので、
  // 右上等の列挙が使われていない。
  switch (alignmentHorizontal) {
    case EJFAlignment.LEFT:
      css.justifyContent = 'flex-start'
      break
    case EJFAlignment.CENTER:
      css.justifyContent = 'center'
      break
    case EJFAlignment.RIGHT:
      css.justifyContent = 'flex-end'
      break
    default:
      break
  }

  switch (alignmentVertical) {
    case EJFAlignment.TOP:
      css.alignItems = 'flex-start'
      break
    case EJFAlignment.CENTER:
      css.alignItems = 'center'
      break
    case EJFAlignment.BOTTOM:
      css.alignItems = 'flex-end'
      break
    default:
      break
  }

  return css
}

/**
 * @description 数値、金額などを右から3位毎に「,」を付ける
 * @param value 数値。例：12345.1　=>  "12,345.1"
 * @returns
 */
export function addThousandsSeparator(value: string | number): string {
  const oldValueArray = value.toString().split('.')
  let left = oldValueArray[0] ?? ''
  let right = oldValueArray[1] ?? ''

  if (right.length > 0) {
    return left.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.' + right
  } else {
    return left.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  }
}

export function toRectangle(rect: Rectangle) {
  if (!rect) {
    return {}
  }
  const imageCss: CSSProperties = {}
  if (rect.x || rect.y) {
    imageCss.position = 'absolute'
  }
  if (rect.x) {
    imageCss.left = toPX(rect.x)
  }
  if (rect.y) {
    imageCss.top = toPX(rect.y)
  }
  if (rect.width) {
    imageCss.width = toPX(rect.width)
  }
  if (rect.height) {
    imageCss.height = toPX(rect.height)
  }
  return imageCss
}

export function toPoint(point: Point) {
  if (!point) {
    return {}
  }
  const css: CSSProperties = {}
  if (point.x || point.y) {
    css.position = 'absolute'
  }
  if (point.x) {
    css.left = toPX(point.x)
  }
  if (point.y) {
    css.top = toPX(point.y)
  }
  return css
}

export function toDimension(dimension?: Dimension) {
  if (!dimension) {
    return {}
  }
  const css: CSSProperties = {}
  if (dimension.getWidth()) {
    css.width = toPX(dimension.getWidth())
  }
  if (dimension.getHeight()) {
    css.height = toPX(dimension.getHeight())
  }
  return css
}
