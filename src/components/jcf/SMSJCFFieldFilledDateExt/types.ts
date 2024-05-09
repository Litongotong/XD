import type {
  JCFCommonStaticProps,
  JCFCommonProps,
  DynamicProp,
} from '../utils/types'

export interface SMSJCFFieldFilledDateExtProps
  extends JCFCommonProps,
    SMSJCFFieldFilledDateExtStaticProps {
  // TODO
  name?: DynamicProp<string>
}

export interface SMSJCFFieldFilledDateExtStaticProps
  extends JCFCommonStaticProps {
  // TODO
}
