import type { JCFFieldDoubleProps } from '../JCFFieldDouble/types'
import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
} from '../utils/types'

export interface YUKIFieldDoubleProps
  extends JCFFieldDoubleProps,
    YUKIFieldDoubleStaticProps {}

export interface YUKIFieldDoubleStaticProps extends JCFCommonStaticProps {}
