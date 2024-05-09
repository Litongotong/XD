import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
} from '../utils/types'

export interface JCFImageProps extends JCFItemProps, JCFImageStaticProps {
  // TODO
}

export interface JCFImageStaticProps extends JCFCommonStaticProps {
  imageURL?: StaticProp<string>
}
