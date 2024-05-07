import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import type { EJFAlignment } from '@/lib/jcf/gui/JFAlignment'
import type { EJFLineType } from '@/lib/jcf/gui/JFLineType'
import type { Color } from '@/lib/native/awt/Color'
import type { Font } from '@/lib/native/awt/Font'
import type { CSSProperties } from 'vue'

/** ロジックで操作することのある属性  */
export type DynamicProp<T> = T
/** ロジックで操作することのない属性  */
export type StaticProp<T> = T

// [[Bounds]]
export type X = number
export type Y = number
export type Width = number
export type Height = number

/**
 * 部品表示範囲
 * @description [x, y, width, height]
 */
export type JCFComponentBounds = [X, Y, Width, Height]

// [[CSS Property]]
type CompatColor<T> = T | Color
export type CSSColor = CompatColor<CSSProperties['color']>

// TODO: add more types
export interface JCFCommonStaticProps {
  /** 表示範囲 */
  bounds?: StaticProp<JCFComponentBounds>

  // Alignment
  /** 水平位置 */
  alignmentHorizontal?: StaticProp<EJFAlignment>
  /** 垂直位置 */
  alignmentVertical?: StaticProp<EJFAlignment>

  // Font
  /** フォント */
  font?: StaticProp<Font>

  // Border
  /** ボーダー長さ */
  borderWidth?: StaticProp<number>
  /** ボーダー形 */
  borderType?: StaticProp<EJFLineType>
  /** ボーダー色 */
  borderColor?: StaticProp<Color>

  // Color
  /** 非アクティブ状態の前景色 */
  inactiveForeground?: StaticProp<Color>
  /** 非アクティブ状態の背景色 */
  inactiveBackground?: StaticProp<Color>

  // underline
  underlineColor?: StaticProp<Color>
}

/**
 * 部品共通の動的属性及び静的属性。
 * @description 主に部品スタイルの作成時に使う。
 */
export interface JCFItemPropsWithStaticProps
  extends JCFCommonStaticProps,
    JCFItemProps {}

/** 部品一般共通属性 */
export interface JCFCommonProps extends JCFCommonPropsWithCustom {
  /** Item ID */
  id?: DynamicProp<string>
}

/** 部品一般共通カスタム属性 */
export interface JCFCommonPropsWithCustom {
  install?: Install
}

/** 共通部品型 */
export interface JCFItemProps extends JCFCommonProps, JCFDataBeanProps {
  /** エラーコード */
  errorCode?: DynamicProp<string>
  /** TODO: 要確認 */
  modified?: DynamicProp<boolean>
  /** TODO: 要確認 */
  visible?: DynamicProp<boolean>

  // NOTE: 現行でも使っていない
  // reverse?: never
}

/** 共通 Bean 型 */
export interface JCFDataBeanProps {
  /** 前景 */
  foreground?: DynamicProp<CSSColor>
  /** 背景 */
  background?: DynamicProp<CSSColor>
  /** TODO: 要確認 */
  enabled?: DynamicProp<boolean>
  /** TODO: 要確認 */
  tag?: DynamicProp<string>
}

/** 部品 props を部品データに設定する方法 */
export type Install<
  Props extends JCFItemProps = JCFItemProps,
  Instance extends JCFItemData = JCFItemData,
> = (props: Props) => Instance
