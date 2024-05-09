import type { Color } from '@/lib/native/awt/Color'
import type { CSSProperties } from 'vue'
import type { JCFCommonStaticProps } from './types'
import type { Rectangle } from '@/lib/native/awt/Rectangle'
import type { Point } from '@/lib/native/awt/Point'
import type { Dimension } from '@/lib/native/awt/Dimension'
import type { FlowLayout, Font } from '../entry'

import { EJFLineType } from '@/lib/jcf/gui/JFLineType'
import { EJFAlignment } from '@/lib/jcf/gui/JFAlignment'
import { isNil } from '@/utils/useful'
import { EFlowLayout } from '@/lib/native/awt/FlowLayout'
import type { Insets } from '@/lib/native/awt/Insets'

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

// The `inset` / `outset` style is not obvious on origin PC
const BORDER_STYLE_OUTSET = 'solid'
const BORDER_STYLE_INSET = 'solid'
/**
 * ボーダータイプを CSS ボーダーオブジェクトに変換する。
 * @param style ボーダータイプ
 * @returns CSS ボーダーオブジェクト
 */
export function toBorderStyle(
  style?: EJFLineType,
): CSSProperties['border-style'] | undefined {
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
      return BORDER_STYLE_OUTSET
    case EJFLineType.SUNKEN:
      return BORDER_STYLE_INSET
    case EJFLineType.CONVEX:
      return BORDER_STYLE_OUTSET
    case EJFLineType.FLAT:
      return 'solid'
    case EJFLineType.CONCAVE:
      return BORDER_STYLE_INSET
    default:
      return undefined
  }
}

export function toFlowLayout(layout?: FlowLayout) {
  const css: CSSProperties = {}

  if (isNil(layout)) {
    return css
  } else {
    css.display = 'flex'
    css.position = 'relative'
  }

  const align = layout.getAlignment()
  const hGap = layout.getHgap()
  const vGap = layout.getVgap()

  if (!isNil(align)) {
    switch (align) {
      case EFlowLayout.LEFT:
        css.justifyContent = 'flex-start'
        break
      case EFlowLayout.CENTER:
        css.justifyContent = 'center'
        break
      case EFlowLayout.RIGHT:
        css.justifyContent = 'flex-end'
        break
      case EFlowLayout.LEADING:
        css.justifyContent = 'flex-start'
        break
      case EFlowLayout.TRAILING:
        css.justifyContent = 'flex-end'
        break
    }
  }

  // only working on chrome >= 84 (2020.07)
  if (!isNil(hGap)) {
    css.columnGap = toPX(hGap)
  }
  if (!isNil(vGap)) {
    css.rowGap = toPX(vGap)
  }

  return css
}

export function toInsets(insets?: Insets) {
  const css: CSSProperties = {}
  if (!insets) {
    return css
  }

  const top = insets.getTop()
  const left = insets.getLeft()
  const bottom = insets.getBottom()
  const right = insets.getRight()

  if (!isNil(top)) {
    css.paddingTop = toPX(top)
  }
  if (!isNil(left)) {
    css.paddingLeft = toPX(left)
  }
  if (!isNil(bottom)) {
    css.paddingBottom = toPX(bottom)
  }
  if (!isNil(right)) {
    css.paddingRight = toPX(right)
  }

  return css
}

type JCFAlignProps = Pick<
  JCFCommonStaticProps,
  'alignmentHorizontal' | 'alignmentVertical' | 'alignment'
>

/**
 * AlignProps で CSS Align 関連オブジェクトを作成する。
 * @param alignmentProps 水平位置か垂直位置
 * @returns CSS Align 関連オブジェクト
 */
export const toAlignment = (alignmentProps: JCFAlignProps) => {
  const { alignmentHorizontal, alignmentVertical, alignment } = alignmentProps
  const css: CSSProperties = {}

  if (
    !isNil(alignmentHorizontal) ||
    !isNil(alignmentVertical) ||
    !isNil(alignment)
  ) {
    css.display = 'flex'
  }

  if (!isNil(alignment)) {
    switch (alignment) {
      case EJFAlignment.TOP_LEFT:
        css.justifyContent = 'flex-start'
        css.alignItems = 'flex-start'
        break
      case EJFAlignment.CENTER_LEFT:
        css.justifyContent = 'flex-start'
        css.alignItems = 'center'
        break
      case EJFAlignment.BOTTOM_LEFT:
        css.justifyContent = 'flex-start'
        css.alignItems = 'flex-end'
        break
      case EJFAlignment.TOP_CENTER:
        css.justifyContent = 'center'
        css.alignItems = 'flex-start'
        break
      case EJFAlignment.BOTTOM_CENTER:
        css.justifyContent = 'center'
        css.alignItems = 'flex-end'
        break
      case EJFAlignment.TOP_RIGHT:
        css.justifyContent = 'flex-end'
        css.alignItems = 'flex-start'
        break
      case EJFAlignment.CENTER_RIGHT:
        css.justifyContent = 'flex-end'
        css.alignItems = 'center'
        break
      case EJFAlignment.BOTTOM_RIGHT:
        css.justifyContent = 'flex-end'
        css.alignItems = 'flex-end'
        break
    }
    return css
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
