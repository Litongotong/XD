import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
} from '../utils/types'

export interface JCFTextAreaProps extends JCFItemProps, JCFTextAreaStaticProps {
  // TODO
}

export interface JCFTextAreaStaticProps extends JCFCommonStaticProps {
  text?: StaticProp<string>
  editable?: StaticProp<boolean>
}
