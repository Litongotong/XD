import type { JCFFieldLongProps } from '../JCFFieldLong/types'
import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
} from '../utils/types'

export interface YUKIFieldLongProps
  extends JCFFieldLongProps,
    YUKIFieldLongStaticProps {}

export interface YUKIFieldLongStaticProps extends JCFCommonStaticProps {}
