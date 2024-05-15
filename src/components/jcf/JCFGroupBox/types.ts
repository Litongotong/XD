import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
} from '../utils/types'
import type { FlowLayout } from '@/lib/native/awt/FlowLayout'

export interface JCFGroupBoxProps extends JCFItemProps, JCFGroupBoxStaticProps {
  value?: DynamicProp<string>
  enabledInner?: DynamicProp<boolean>
}

export interface JCFGroupBoxStaticProps extends JCFCommonStaticProps {
  // 枠線ラベル
  label?: StaticProp<string>
  // レイアウト
  layout?: StaticProp<FlowLayout>
}
