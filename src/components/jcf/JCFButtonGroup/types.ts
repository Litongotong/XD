import type { EJFAlignment } from '@/lib/jcf/gui/JFAlignment'
import type { FlowLayout } from '@/lib/native/awt/FlowLayout'
import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
} from '../utils/types'
import type { Ref } from 'vue'

export interface JCFButtonGroupProps
  extends JCFItemProps,
    JCFButtonGroupStaticProps {
  // TODO
}

export interface JCFButtonGroupStaticProps extends JCFCommonStaticProps {
  // 枠線ラベル
  label?: StaticProp<string>
  // グループの名前
  name?: StaticProp<string>
  // フォーカス可否
  focusable?: StaticProp<boolean>
  // 環境背景の使用可否
  envBackgroundEnabled?: StaticProp<boolean>
  // 配置の設定 JFAlignment
  alignment?: StaticProp<EJFAlignment>
  // コントロールの有効化
  controlEnabled?: StaticProp<boolean>
  // 再描画の無視
  ignoreRepaint?: StaticProp<boolean>
  // レイアウト FlowLayout? GridLayout?
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
