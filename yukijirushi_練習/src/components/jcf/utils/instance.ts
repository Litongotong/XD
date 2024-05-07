import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { useSetup } from '@/lib/adapter/hooks'
import { MsisDebug } from '@/utils/debug/log'
import { transformToColor } from './transform'

import { JCFFieldStringData } from '@/lib/jcf/gui/JCFFieldStringData'
import { JCFComboBoxData } from '@/lib/jcf/gui/JCFComboBoxData'
import { JCFFieldDoubleData } from '@/lib/jcf/gui/JCFFieldDoubleData'
import { JCFPushButtonData } from '@/lib/jcf/gui/JCFPushButtonData'
import { JCFFieldLongData } from '@/lib/jcf/gui/JCFFieldLongData'
import { JCFLabelData } from '@/lib/jcf/gui/JCFLabelData'
import { JCFSpreadData } from '@/lib/jcf/gui/JCFSpreadData'
import { JCFToggleButtonData } from '@/lib/jcf/gui/JCFToggleButtonData'
import { JCFGroupBoxData } from '@/lib/jcf/gui/JCFGroupBoxData'
import { JCFFieldFilledDateData } from '@/lib/jcf/gui/JCFFieldFilledDateData'
import { JCFListBoxData } from '@/lib/jcf/gui/JCFListBoxData'
import { JCFListViewData } from '@/lib/jcf/gui/JCFListViewData'
import { JCFTextAreaData } from '@/lib/jcf/gui/JCFTextAreaData'
import { SMSFileDialogData } from '@/lib/sms/sol/sys/cjf/SMSFileDialogData'

import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import type { Install, JCFItemProps } from './types'
import type { JCFFieldStringProps } from '../JCFFieldString/types'
import type { SMSJCFSpreadProps } from '../SMSJCFSpread/types'
import type { YUKIFieldDoubleProps } from '../YUKIFieldDouble/types'
import type { JCFFieldLongProps } from '../JCFFieldLong/types'
import type { JCFToggleButtonProps } from '../JCFToggleButton/types'
import type { JCFSPreadInstallationPayload } from '../JCFSpread/types'
import type { JCFLabelProps } from '../JCFLabel/types'
import type { JCFPushButtonProps } from '../JCFPushButton/types'
import type { JCFFieldDoubleProps } from '../JCFFieldDouble/types'
import type { JCFComboBoxProps } from '../JCFComboBox/types'
import type { JCFButtonGroupProps } from '../JCFButtonGroup/types'
import type { JCFGroupBoxProps } from '../JCFGroupBox/types'
import type { JCFFieldFilledDateProps } from '../JCFFieldFilledDate/types'
import type { JCFListBoxProps } from '../JCFListBox/types'
import type { JCFListViewProps } from '../JCFListView/types'
import type { JCFSwitchButtonProps } from '../JCFSwitchButton/types'
import type { JCFTextAreaProps } from '../JCFTextArea/types'
import type { JCFImageProps } from '../JCFImage/types'
import type { JCFLinesProps } from '../JCFLines/types'
import { SMSJCFSpreadData } from '@/lib/sms/sol/sys/cjf/SMSJCFSpreadData'
import type { YUKIFieldFilledDateProps } from '../YUKIFieldFilledDate/types'
import type { SMSJCFFieldFilledDateExtProps } from '../SMSJCFFieldFilledDateExt/types'
import { SMSJCFFieldFilledDateExtData } from '@/lib/sms/sol/sys/cjf/SMSJCFFieldFilledDateExtData'
import { JCFImageData } from '@/lib/jcf/gui/JCFImageData'
import type { SMSFileDialogProps } from '../SMSFileDialog/types'

/** JCFItemData の動的属性値を設定する */
const installInstanceForJCFItemData = (
  ins: JCFItemData,
  props: JCFItemProps,
) => {
  const {
    // jcf item data 4 props
    visible,

    // reverse,
    modified,

    // jcf bean 4 props
    foreground,
    background,
    enabled,
    tag,
  } = props

  // jcf item data
  if (visible !== undefined) {
    ins.setVisible(visible)
  }

  // NOTE: 使っていない属性
  // if (reverse !== undefined) {
  //   ins.setReverse(reverse)
  // }

  if (modified !== undefined) {
    ins.setModified(modified)
  }

  // jcf bean
  if (foreground !== undefined) {
    ins.setForeground(transformToColor(foreground))
  }
  if (background !== undefined) {
    ins.setBackground(transformToColor(background))
  }
  if (enabled !== undefined) {
    ins.setEnabled(enabled)
  }
  if (tag !== undefined) {
    ins.setTag(tag)
  }
}

/** JCFFieldString 動的属性値を設定する */
const installInstanceForJCFFieldString: Install<
  JCFFieldStringProps,
  JCFFieldStringData
> = (props) => {
  const { id, text, value } = props
  const ins = new JCFFieldStringData(id!)

  // install common props
  installInstanceForJCFItemData(ins, props)
  // install self props
  const useValue = value?.length ? value : text

  if (useValue !== undefined) {
    ins.setValue(useValue)
  }

  return ins
}

/** JCFComboBox 動的属性値を設定する */
const installInstanceForJCFComboBox: Install<
  JCFComboBoxProps,
  JCFComboBoxData
> = (props) => {
  const instance = new JCFComboBoxData(props.id!)

  // TODO: complete set property

  return instance
}

/** JCFFieldDouble 動的属性値を設定する */
const installInstanceForJCFFieldDouble: Install<
  JCFFieldDoubleProps,
  JCFFieldDoubleData
> = (props) => {
  const { id, value } = props
  const instance = new JCFFieldDoubleData(id!)

  // install common props
  installInstanceForJCFItemData(instance, props)
  // install self props
  const useValue = value?.length ? Number(value) : 0

  if (useValue !== undefined) {
    instance.setValue(useValue)
  }

  return instance
}

/** JCFPushButton 動的属性値を設定する */
const installInstanceForJCFPushButton: Install<
  JCFPushButtonProps,
  JCFPushButtonData
> = (props) => {
  const instance = new JCFPushButtonData(props.id!)
  // install common props
  installInstanceForJCFItemData(instance, props)
  // install self props
  const fallbackValue = props?.label || ''
  const value = props.value || fallbackValue
  if (value !== undefined) {
    instance.setValue(value)
  }
  return instance
}

/** JCFFieldLong 動的属性値を設定する */
const installInstanceForJCFFieldLong: Install<
  JCFFieldLongProps,
  JCFFieldLongData
> = (props) => {
  const { id, value } = props
  const instance = new JCFFieldLongData(id!)

  // install common props
  installInstanceForJCFItemData(instance, props)
  // install self props
  const useValue = value?.length ? Number(value) : 0

  if (useValue !== undefined) {
    instance.setValue(useValue)
  }

  return instance
}

/** JCFLabel 動的属性値を設定する */
const installInstanceForJCFLabel: Install<JCFLabelProps, JCFLabelData> = (
  props,
) => {
  const instance = new JCFLabelData(props.id!)

  // TODO: complete set property
  if (props?.text !== undefined) {
    instance.setValue(props.text)
  }

  return instance
}

/** JCFSpread 動的属性値を設定する */
const installInstanceForJCFSpread: Install<
  JCFSPreadInstallationPayload,
  JCFSpreadData
> = (props) => {
  const instance = new JCFSpreadData(props.id!, props.flexGrid)

  // TODO: complete set property

  return instance
}

/** JCFToggleButton 動的属性値を設定する */
const installInstanceForJCFToggleButton: Install<
  JCFToggleButtonProps,
  JCFToggleButtonData
> = (props) => {
  const instance = new JCFToggleButtonData(props.id!)

  // TODO: complete set property

  return instance
}

/** JCFToggleButton 動的属性値を設定する */
const installInstanceForJCFButtonGroup: Install<
  JCFButtonGroupProps,
  JCFToggleButtonData
> = (props) => {
  const instance = new JCFToggleButtonData(props.id!)

  // TODO: complete set property

  return instance
}

/** JCFGroupBox 動的属性値を設定する */
const installInstanceForJCFGroupBox: Install<
  JCFGroupBoxProps,
  JCFGroupBoxData
> = (props) => {
  const instance = new JCFGroupBoxData(props.id!)

  // TODO: complete set property

  return instance
}

/** JCFFieldFilledDate 動的属性値を設定する */
const installInstanceForJCFFieldFilledDate: Install<
  JCFFieldFilledDateProps,
  JCFFieldFilledDateData
> = (props) => {
  const instance = new JCFFieldFilledDateData(props.id!)

  // TODO: complete set property

  return instance
}

/** JCFListBox 動的属性値を設定する */
const installInstanceForJCFListBox: Install<JCFListBoxProps, JCFListBoxData> = (
  props,
) => {
  const instance = new JCFListBoxData(props.id!)

  // TODO: complete set property

  return instance
}

/** JCFListView 動的属性値を設定する */
const installInstanceForJCFListView: Install<
  JCFListViewProps,
  JCFListViewData
> = (props) => {
  const instance = new JCFListViewData(props.id!)

  // TODO: complete set property

  return instance
}

// TODO: complete component data and method
/** JCFSwitchButton 動的属性値を設定する */
const installInstanceForJCFSwitchButton: Install<JCFSwitchButtonProps> = (
  props,
) => {
  return {}
}

/** JCFTextArea 動的属性値を設定する */
const installInstanceForJCFTextArea: Install<
  JCFTextAreaProps,
  JCFTextAreaData
> = (props) => {
  const { id } = props
  const instance = new JCFTextAreaData(id!)
  installInstanceForJCFItemData(instance, props)

  if (props.text !== undefined) {
    instance.setValue(props.text)
  }

  return instance
}

// TODO: complete component data and method
/** JCFImage 動的属性値を設定する */
const installInstanceForJCFImage: Install<JCFImageProps> = (props) => {
  const { id, imageURL } = props

  const instance = new JCFImageData(id!)
  installInstanceForJCFItemData(instance, props)

  if (imageURL !== undefined) {
    instance.setValue(imageURL)
  }

  return instance
}

// TODO: complete component data and method
/** JCFLines 動的属性値を設定する */
const installInstanceForJCFLines: Install<JCFLinesProps> = (props) => {
  return {}
}

// SMSJCFSpread
export const installInstanceForSMSJCFSpread: Install<SMSJCFSpreadProps> = (
  props,
) => {
  const instance = new SMSJCFSpreadData(props.id!)
  return instance
}

// YUKIFieldDouble
export const installInstanceForYUKIFieldDouble: Install<
  YUKIFieldDoubleProps
> = (props) => {
  return installInstanceForJCFFieldDouble(props)
}

// YUKIFieldLong
export const installInstanceForYUKIFieldLong: Install<JCFFieldLongProps> = (
  props,
) => {
  return installInstanceForJCFFieldLong(props)
}

// YUKIFieldFilledDate
export const installInstanceForYUKIFieldFilledDate: Install<
  YUKIFieldFilledDateProps
> = (props) => {
  return installInstanceForJCFFieldFilledDate(props)
}

// SMSJCFFieldFilledDateExt
export const installInstanceForSMSJCFFieldFilledDateExt: Install<
  SMSJCFFieldFilledDateExtProps
> = (props) => {
  const ins = new SMSJCFFieldFilledDateExtData(props.id!)

  // set common props
  installInstanceForJCFItemData(ins, props)

  // TODO: set JCFFieldFilledDateData fields
  return ins
}

// SMSFileDialog
export const installInstanceForSMSFileDialog: Install<
  SMSFileDialogProps,
  SMSFileDialogData
> = (props) => {
  const { id, value } = props
  const ins = new SMSFileDialogData(id!)

  // install common props
  installInstanceForJCFItemData(ins, props)
  // install self props
  const useValue = value?.length ? value : ''

  if (useValue !== undefined) {
    ins.setValue(useValue)
  }

  return ins
}

// empty install
const installInstanceWithEmpty: Install = () => {
  throw new Error('Not implemented, you should not call this function')
}

/** 各部品のデータ実例化関数のマップ */
const installMap: Record<EComponentName, Install | undefined> = {
  [EComponentName.JCFFieldString]: installInstanceForJCFFieldString,
  [EComponentName.JCFComboBox]: installInstanceForJCFComboBox,
  [EComponentName.JCFFieldDouble]: installInstanceForJCFFieldDouble,
  [EComponentName.JCFPushButton]: installInstanceForJCFPushButton,
  [EComponentName.JCFFieldLong]: installInstanceForJCFFieldLong,
  [EComponentName.JCFLabel]: installInstanceForJCFLabel,
  [EComponentName.JCFSpread]: installInstanceForJCFSpread,
  [EComponentName.JCFToggleButton]: installInstanceForJCFToggleButton,
  [EComponentName.SMSJCFSpread]: undefined,
  [EComponentName.JCFButtonGroup]: installInstanceForJCFButtonGroup,
  [EComponentName.JCFGroupBox]: installInstanceForJCFGroupBox,
  [EComponentName.JCFFieldFilledDate]: installInstanceForJCFFieldFilledDate,
  [EComponentName.JCFListBox]: installInstanceForJCFListBox,
  [EComponentName.JCFListView]: installInstanceForJCFListView,
  [EComponentName.JCFSwitchButton]: installInstanceForJCFSwitchButton,
  [EComponentName.JCFTextArea]: installInstanceForJCFTextArea,
  [EComponentName.JCFImage]: installInstanceForJCFImage,
  [EComponentName.JCFLines]: installInstanceForJCFLines,
  [EComponentName.YUKIFieldDouble]: undefined,
  [EComponentName.YUKIFieldLong]: undefined,
  [EComponentName.YUKIFieldFilledDate]: undefined,
  [EComponentName.SMSJCFFieldFilledDateExt]:
    installInstanceForSMSJCFFieldFilledDateExt,
  [EComponentName.SMSFileDialog]: installInstanceForSMSFileDialog,
}

/**
 * 部品データ実例を `context` にマウントする。
 * @param component 部品名
 * @param props 部品 props
 */
export const installInstance = <
  Instance extends JCFItemData = JCFItemData,
  Props extends JCFItemProps = JCFItemProps,
>(
  component: EComponentName,
  props: Props,
) => {
  const baseProps = props as JCFItemProps
  if (!baseProps?.id?.length) {
    // skip
    return
  }

  const install = installMap[component] || props.install

  if (!install) {
    throw new Error(`Component not found: ${component}`)
  }

  const ins = install(props)

  if (!MsisDebug.isDevPage()) {
    const { setupItem } = useSetup()
    setupItem(baseProps.id, ins)
  }

  return ins as Instance
}
