import type { JCFSpreadProps } from '../JCFSpread/types'
import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
} from '../utils/types'

export interface SMSJCFSpreadProps
  extends JCFSpreadProps,
    SMSJCFSpreadStaticProps {
  // TODO
}

export interface SMSJCFSpreadStaticProps extends JCFCommonStaticProps {
  /** 行に違う色を付ける */
  doubleColor?: StaticProp<boolean>
}
