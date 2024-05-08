import type { Color } from '@/lib/native/awt/Color'
import type {
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
} from '../utils/types'

export interface JCFLinesProps extends JCFItemProps, JCFLinesStaticProps {}

export interface JCFLinesStaticProps extends JCFCommonStaticProps {
  fillColor?: StaticProp<Color>
  lineColor?: StaticProp<Color>
  lineStyle?: StaticProp<number>
  lineType?: StaticProp<number>
  lineWidth?: StaticProp<number>
}
