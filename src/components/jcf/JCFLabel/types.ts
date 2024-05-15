import type { Insets } from '@/lib/native/awt/Insets'
import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
} from '../utils/types'
import type { Color } from '@/lib/native/awt/Color'

export interface JCFLabelProps extends JCFItemProps, JCFLabelStaticProps {
  value?: DynamicProp<string>
}

export interface JCFLabelStaticProps extends JCFCommonStaticProps {
  name?: StaticProp<string>
  text?: StaticProp<string>
  envBackgroundEnabled?: StaticProp<boolean>
  autoTurn?: StaticProp<boolean>
  enableMenu?: StaticProp<boolean>
  enableToolTip?: StaticProp<boolean>
  equality?: StaticProp<boolean>
  insets?: StaticProp<Insets>
  toolTipText?: StaticProp<string>
  underlineColor?: StaticProp<Color>
}
