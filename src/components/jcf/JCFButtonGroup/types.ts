import type { FlowLayout } from '@/lib/native/awt/FlowLayout'
import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
} from '../utils/types'
import type { Ref } from 'vue'
import type { JCFGroupBoxProps } from '../JCFGroupBox/types'

export interface JCFButtonGroupProps
  extends JCFGroupBoxProps,
    JCFButtonGroupStaticProps {}

export interface JCFButtonGroupStaticProps extends JCFCommonStaticProps {
  // 枠線ラベル
  label?: StaticProp<string>
  // グループの名前
  name?: StaticProp<string>
  // フォーカス可否
  focusable?: StaticProp<boolean>
  // 環境背景の使用可否
  envBackgroundEnabled?: StaticProp<boolean>
  // コントロールの有効化
  controlEnabled?: StaticProp<boolean>
  // 再描画の無視
  ignoreRepaint?: StaticProp<boolean>
  // レイアウト
  layout?: StaticProp<FlowLayout>
}

export interface JCFButtonGroupContainer {
  isSelected: Ref<boolean>

  containerIndex: Ref<number>
}

export interface JCFButtonGroupContainerProvide {
  onChange: (newValue: boolean, currentIndex: number) => void

  container: Ref<JCFButtonGroupContainer[]>
}

export const JCF_BUTTON_GROUP_PROVIDE_KEY = 'JCFButtonGroupContainer'
