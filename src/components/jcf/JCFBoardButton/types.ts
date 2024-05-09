import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
} from '../utils/types'

export interface JCFBoardButtonProps extends JCFBoardButtonStaticProps {
  // TODO
}

export interface JCFBoardButtonStaticProps extends JCFCommonStaticProps {
  // TODO
  label?: StaticProp<string>
}
