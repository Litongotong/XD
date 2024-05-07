import type { EJFField } from '@/lib/jcf/gui/JFField'
import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
  CSSColor,
} from '../utils/types'

export interface JCFFieldLongProps
  extends JCFItemProps,
    JCFFieldLongStaticProps {
  value?: DynamicProp<string>
}

export interface JCFFieldLongStaticProps extends JCFCommonStaticProps {
  autoEscape?: StaticProp<boolean>
  autoEscapeByEnter?: StaticProp<boolean>
  alwaysFormat?: StaticProp<boolean>

  caretVisible?: StaticProp<boolean>
  caretPosition?: StaticProp<number>
  columns?: StaticProp<any>
  columnBaseChar?:StaticProp<string>

  editable?: StaticProp<boolean>
  enableInputNegativeValue?: StaticProp<boolean>
  equalBackground?: StaticProp<CSSColor>
  equalForeground?: StaticProp<CSSColor>

  focusable?: StaticProp<boolean>
  formatTiming?: StaticProp<number>

  isYuki?: StaticProp<boolean>
  inputMode?: StaticProp<EJFField>
  inputAssist?: StaticProp<any>
  insertMode?: StaticProp<any>
  initialValueDisplay?: StaticProp<any>

  longValue?: StaticProp<number>

  maxLength?: StaticProp<number>
  maxByteLength?: StaticProp<number>
  maximumValue?: StaticProp<number>
  maxIntegerDigit?: StaticProp<number>
  minimumValue?: StaticProp<number>

  name?: StaticProp<string>

  outputFormatPattern?: StaticProp<any>

  retryOnError?: StaticProp<boolean>

  selectedInFocus?: StaticProp<boolean>
  selectionStart?: StaticProp<number>
  selectionEnd?: StaticProp<number>
}
