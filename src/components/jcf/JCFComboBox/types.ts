import type { EJFField } from '@/lib/jcf/gui/JFField'
import type {
  DynamicProp,
  StaticProp,
  JCFCommonStaticProps,
  JCFItemProps,
} from '../utils/types'
import { JCFSelectableElement } from '@/lib/jcf/gui/JCFSelectableElement'

export interface JCFComboBoxProps extends JCFItemProps, JCFComboBoxStaticProps {
  value?: DynamicProp<string>
  editable?: DynamicProp<boolean>
  selectableElements?: DynamicProp<JCFSelectableElement[]>
}

export interface JCFComboBoxStaticProps extends JCFCommonStaticProps {
  name?: StaticProp<any>
  focusable?: StaticProp<boolean>
  /** 入力モード*/
  inputMode?: StaticProp<EJFField>
  /** 最大長さ */
  maxLength?: StaticProp<number>
  maxByteLength?: StaticProp<number>
  text?: StaticProp<string>
  popupVariableWidthMode?: StaticProp<boolean>
  searchable?: StaticProp<boolean>
  selectByAction?: StaticProp<boolean>
  selectedActionCode?: StaticProp<string>
  selectviewMode?: StaticProp<boolean>
}
