import { Color } from '@/lib/native/awt/Color'
import type { CSSColor, JCFItemPropsWithStaticProps } from './types'
import type { CSSProperties } from 'vue'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { toAlignment, toBorderStyle, toPX, toRGB } from './common'
import { isNil } from '@/utils/useful'

/**
 * 色の型を整形する。
 * @param color 色
 * @returns Color クラスの色実例
 */
export function transformToColor(color?: CSSColor) {
  if (!color) {
    return undefined
  }

  if (typeof color === 'string') {
    throw new Error('Not implemented')
  }

  // NOTE: 必要が発生する際に引数の型毎に対応する
  return color as Color
}

/** calculateCommonStyle の引数  */
interface ICalculateCommonStyleOpts<T extends JCFItemData> {
  /** 部品データ実例 */
  instance?: T
  /** 部品共通属性 */
  props: JCFItemPropsWithStaticProps
}

/**
 * 部品位置のスタイルを整形する。
 * @param props 部品共通属性
 * @returns 位置スタイル
 */
export function calculatePositionStyle(props: JCFItemPropsWithStaticProps) {
  const { bounds } = props
  const x = bounds?.[0] || 0
  const y = bounds?.[1] || 0
  const width = bounds?.[2] || 0
  const height = bounds?.[3] || 0

  const positionStyle: CSSProperties = {
    position: 'absolute',
    left: toPX(x),
    top: toPX(y),
    height: toPX(height),
    width: toPX(width),
  }

  return positionStyle
}

/**
 * 部品のスタイルを整形する。
 * @template T JCFItemData の属性を継承したもの
 * @param opts 部品データの実例及び共通属性を提供する
 * @returns 部品スタイル
 */
export function calculateCommonStyle<T extends JCFItemData>(
  opts: ICalculateCommonStyleOpts<T>,
) {
  const { instance: ins, props } = opts

  // dynamic value
  const visible = ins ? ins.visible.value : props.visible

  const getBackground = () => {
    const fallbackBackground = props.background || props.inactiveBackground
    if (ins) {
      const background = ins.background.value
      return background || fallbackBackground
    }
    return fallbackBackground
  }

  const backgroundColor = transformToColor(getBackground())

  const getForeground = () => {
    const fallbackForeground = props.foreground || props.inactiveForeground
    if (ins) {
      const foreground = ins.foreground.value
      return foreground || fallbackForeground
    }
    return fallbackForeground
  }

  const color = transformToColor(getForeground())

  // static value
  const {
    // Border
    borderColor,
    borderWidth,
    borderType,

    // Font
    font,

    // Alignment
    alignmentHorizontal,
    alignmentVertical,

    // underline
    underlineColor,
  } = props

  const positionStyle: CSSProperties = calculatePositionStyle(props)

  const borderCssStyle: CSSProperties = {
    borderColor: toRGB(borderColor),
    borderWidth: toPX(borderWidth),
    borderStyle: toBorderStyle(borderType),
  }

  const alignStyle: CSSProperties = toAlignment({
    alignmentHorizontal,
    alignmentVertical,
  })

  const fontCssStyle: CSSProperties = font?._getFontCSS() || {}

  const colorStyle: CSSProperties = {
    color: toRGB(color),
    backgroundColor: toRGB(backgroundColor),
  }

  const underlineStyle: CSSProperties = {
    textDecorationColor: toRGB(underlineColor),
  }

  const isHide = visible === false
  const visibleStyle: CSSProperties = isHide
    ? { display: 'none', visibility: 'hidden' }
    : {}

  const style: CSSProperties = {
    ...positionStyle,
    ...fontCssStyle,
    ...colorStyle,
    ...visibleStyle,
    ...borderCssStyle,
    ...alignStyle,
    ...underlineStyle,
  }

  return style
}
