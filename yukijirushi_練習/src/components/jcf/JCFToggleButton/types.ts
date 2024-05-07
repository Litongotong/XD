import type { EJFAlignment } from '@/lib/jcf/gui/JFAlignment'
import type { Color } from '@/lib/native/awt/Color'
import type { SystemColor } from '@/lib/native/awt/SystemColor'
import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
} from '../utils/types'

export interface JCFToggleButtonProps
  extends JCFItemProps,
    JCFToggleButtonStaticProps {
  value?: DynamicProp<boolean>
}

export interface JCFToggleButtonStaticProps extends JCFCommonStaticProps {
  // ボタンラベル
  label?: StaticProp<string>
  // ボタン名前
  name?: StaticProp<string>
  // フォーカス可否
  focusable?: StaticProp<boolean>
  // 環境背景の使用可否
  envBackgroundEnabled?: StaticProp<boolean>
  // ボタン配置の設定 JFAlignment
  buttonAlignment?: StaticProp<EJFAlignment>
  // ボタン背景色
  buttonBackground?: StaticProp<Color>
  // ボタン前景色
  buttonForeground?: StaticProp<SystemColor>
  // TODO
  buttonGroup?: StaticProp<any>
  // カスタム色の表示
  preferredColorDisplay?: StaticProp<boolean>
  // プッシュされたアクションコード
  pushedActionCode?: StaticProp<string>
  // setStateによるアイテムイベントの送信
  sendItemEventBySetState?: StaticProp<boolean>
  // 状態
  state?: StaticProp<boolean>
}
