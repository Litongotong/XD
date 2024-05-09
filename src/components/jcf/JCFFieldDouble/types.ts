import type { EJFField } from '@/lib/jcf/gui/JFField'
import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
  CSSColor,
} from '../utils/types'

export interface JCFFieldDoubleProps
  extends JCFItemProps,
    JCFFieldDoubleStaticProps,
    JCFFieldDoubleMode {
  value?: DynamicProp<number>
}

export interface JCFFieldDoubleStaticProps extends JCFCommonStaticProps {
  autoEscapeByEnter?: StaticProp<boolean>
  alwaysFormat?: StaticProp<boolean>
  autoEscapeActionCode?: StaticProp<string>

  caretVisible?: StaticProp<boolean>
  caretOverLimitOverwriteMode?: StaticProp<number>
  caretPosition?: StaticProp<number>

  doubleValue?: StaticProp<number>

  editable?: StaticProp<boolean>
  enableInputNegativeValue?: StaticProp<boolean>
  equalBackground?: StaticProp<CSSColor>
  equalForeground?: StaticProp<CSSColor>

  focusable?: StaticProp<boolean>
  formatTiming?: StaticProp<number>
  fullField?: StaticProp<boolean>

  greaterBackground?: StaticProp<CSSColor>
  greaterForeground?: StaticProp<CSSColor>

  inputMode?: StaticProp<EJFField>
  inputAssist?: StaticProp<any>
  initialValueDisplay?: StaticProp<boolean>

  lessBackground?: StaticProp<CSSColor>
  lessForeground?: StaticProp<CSSColor>

  maxLength?: StaticProp<number>
  maxByteLength?: StaticProp<number>
  maxDecimalDigit?: StaticProp<number>
  maximumValue?: StaticProp<number>
  maxIntegerDigit?: StaticProp<number>
  minimumValu?: StaticProp<number>

  name?: StaticProp<string>

  outputFormatPattern?: StaticProp<any>

  plainTextEditing?: StaticProp<any>

  selectedInFocus?: StaticProp<boolean>
  selectionStart?: StaticProp<number>
  selectionEnd?: StaticProp<number>
}

export interface JCFFieldDoubleMode {
  isYuki?: boolean
}
