import type { EJFField } from '@/lib/jcf/gui/JFField'
import type {
  CSSColor,
  DynamicProp,
  JCFCommonStaticProps,
  JCFItemProps,
  StaticProp,
} from '../utils/types'
import type { EJFEnableType } from '@/lib/jcf/gui/JFEnableType'

export interface JCFFieldStringProps
  extends JCFItemProps,
    JCFFieldStringStaticProps {
  value?: DynamicProp<string>
}

export interface JCFFieldStringStaticProps extends JCFCommonStaticProps {
  /** 編集可否 */
  editable?: StaticProp<boolean>
  name?: StaticProp<any>
  focusable?: StaticProp<any>
  /** 入力モード*/
  inputMode?: StaticProp<EJFField>
  /** 最大長さ */
  maxLength?: StaticProp<number>
  maxByteLength?: StaticProp<any>
  text?: StaticProp<string>
  autoEscape?: StaticProp<boolean>
  autoEscapeByEnter?: StaticProp<boolean>
  envBackgroundEnabled?: StaticProp<boolean>
  inputAssist?: StaticProp<any>
  selectedInFocus?: StaticProp<boolean>
  caretVisible?: StaticProp<boolean>
  columnBaseChar?: StaticProp<string>
  formatTiming?: StaticProp<number>
  insertMode?: StaticProp<number>
  retryOnError?: StaticProp<boolean>
  autoEscapeActionCode?: StaticProp<string>
  characterCodeMapped?: StaticProp<boolean>
  columns?: StaticProp<any>
  echoChar?: StaticProp<string>
  enableChars?: StaticProp<string[]>
  enableMenu?: StaticProp<boolean>
  enableType?: StaticProp<EJFEnableType>
  fullField?: StaticProp<any>
  indispensableField?: StaticProp<any>
  inputLimitation?: StaticProp<any>
  inputStyle?: StaticProp<any>
  plainTextEditing?: StaticProp<any>
  sendTextEventBySetText?: StaticProp<any>
  strikeColor?: StaticProp<CSSColor>
  toolTipText?: StaticProp<string>
  trimmingTheEnd?: StaticProp<any>
  underlineColor?: StaticProp<any>
}
