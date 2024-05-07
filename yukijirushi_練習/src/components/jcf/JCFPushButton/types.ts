import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
} from '../utils/types'
import type { Point } from '@/lib/native/awt/Point'
import type { Rectangle } from '@/lib/native/awt/Rectangle'

export interface JCFPushButtonProps
  extends JCFItemProps,
    JCFPushButtonStaticProps {
  value?: DynamicProp<string>
}

export interface JCFPushButtonStaticProps extends JCFCommonStaticProps {
  label?: StaticProp<string>
  pushedActionCode?: StaticProp<string>
  /** background */
  image?: StaticProp<string>
  name?: StaticProp<string>
  focusable?: StaticProp<boolean>
  autoTurn?: StaticProp<boolean>
  imageRegion?: StaticProp<Rectangle>
  labelPosition?: StaticProp<Point>
}
