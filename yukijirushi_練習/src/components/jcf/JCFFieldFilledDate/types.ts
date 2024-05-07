import { EJFField } from '@/lib/jcf/gui/JFField'
import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
} from '../utils/types'

export interface JCFFieldFilledDateProps
  extends JCFItemProps,
    JCFFieldFilledDateStaticProps {
  value?: DynamicProp<number[]>
  valueError?: DynamicProp<boolean>
  isSMS?: boolean
}

export interface JCFFieldFilledDateStaticProps extends JCFCommonStaticProps {
  autoEscape?: StaticProp<boolean>
  autoEscapeByEnter?: StaticProp<boolean>

  columnBaseChar?: StaticProp<string>
  combinedText?: StaticProp<string>

  fieldCount?: StaticProp<number>
  full?: StaticProp<boolean>
  focusField?: StaticProp<number>

  isYuki?: StaticProp<boolean>
  inputMode?: StaticProp<EJFField>
  intArrayValue?: StaticProp<number[]>
  inputAssist?: StaticProp<any>
  insertMode?: StaticProp<number>

  maxLengths?: StaticProp<number[]>

  pattern?: StaticProp<any>

  retryOnError?: StaticProp<boolean>

  selectedInFocus?: StaticProp<boolean>

  text?: StaticProp<string>
}
