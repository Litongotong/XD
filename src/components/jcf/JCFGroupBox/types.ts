import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
} from '../utils/types'
import type { FlowLayout } from '@/lib/native/awt/FlowLayout'

export interface JCFGroupBoxProps extends JCFItemProps, JCFGroupBoxStaticProps {
  enabledInner?: DynamicProp<boolean>
}

export interface JCFGroupBoxStaticProps extends JCFCommonStaticProps {
  // 枠線ラベル
  label?: StaticProp<string>
  // レイアウト FlowLayout?
  // TODO
  layout?: StaticProp<FlowLayout>
}
