<template>
  <JCFPanelLayout
    :foreground="jcfLayoutProps.foreground"
    :layout="jcfLayoutProps.layout"
    :envBackgroundEnabled="jcfLayoutProps.envBackgroundEnabled"
    :borderType="jcfLayoutProps.borderType"
    :font="jcfLayoutProps.font"
  >
    <JCFLabel
      :alignmentVertical="jcfLabel_1.alignmentVertical"
      :text="jcfLabel_1.text"
      :foreground="jcfLabel_1.foreground"
      :font="jcfLabel_1.font"
      :bounds="jcfLabel_1.bounds"
      :logic="jcfLabel_1_logic"
    />
    <JCFFieldString
      :enableType="jcfFieldString_2.enableType"
      :id="jcfFieldString_2.id"
      :maxByteLength="jcfFieldString_2.maxByteLength"
      :maxLength="jcfFieldString_2.maxLength"
      :bounds="jcfFieldString_2.bounds"
      :logic="jcfFieldString_2_logic"
    />
    <JCFLabel
      :alignmentVertical="jcfLabel_3.alignmentVertical"
      :text="jcfLabel_3.text"
      :foreground="jcfLabel_3.foreground"
      :font="jcfLabel_3.font"
      :bounds="jcfLabel_3.bounds"
      :logic="jcfLabel_3_logic"
    />
    <JCFFieldString
      :echoChar="jcfFieldString_4.echoChar"
      :id="jcfFieldString_4.id"
      :maxByteLength="jcfFieldString_4.maxByteLength"
      :maxLength="jcfFieldString_4.maxLength"
      :enableType="jcfFieldString_4.enableType"
      :bounds="jcfFieldString_4.bounds"
      :logic="jcfFieldString_4_logic"
    />
    <JCFFieldString
      :text="jcfFieldString_5.text"
      :borderType="jcfFieldString_5.borderType"
      :editable="jcfFieldString_5.editable"
      :id="jcfFieldString_5.id"
      :focusable="jcfFieldString_5.focusable"
      :font="jcfFieldString_5.font"
      :bounds="jcfFieldString_5.bounds"
      :logic="jcfFieldString_5_logic"
    />
    <SMSJCFFieldFilledDateExt
      :id="smsJcfFieldFilledDateExt_6.id"
      :bounds="smsJcfFieldFilledDateExt_6.bounds"
      :logic="smsJcfFieldFilledDateExt_6_logic"
    />
    <JCFPushButton
      :label="jcfPushButton_7.label"
      :pushedActionCode="jcfPushButton_7.pushedActionCode"
      :bounds="jcfPushButton_7.bounds"
      :logic="jcfPushButton_7_logic"
    />
    <JCFImage
      :background="jcfImage_8.background"
      :bounds="jcfImage_8.bounds"
      :alignmentHorizontal="jcfImage_8.alignmentHorizontal"
      :alignmentVertical="jcfImage_8.alignmentVertical"
      :imageURL="jcfImage_8.imageURL"
      :logic="jcfImage_8_logic"
    />
  </JCFPanelLayout>
</template>

<script setup lang="ts">
import {
  JCFFieldString,
  JCFLabel,
  JCFPushButton,
  JFAlignment,
  Color,
  Font,
  JFEnableType,
  JFLineType,
  SMSJCFFieldFilledDateExt,
  JCFImage,
  JCFPanelLayout,
  EComponentName,
} from '@/components/jcf/entry'
import Logic from '../logic/YCSCMNF010MLogic'
import logoUrl from '@/views/YIN/YCSWEB/img/logo.jpg'
import { installInstance } from '@/components/jcf/utils/instance';

const jcfLayoutProps = {
  foreground: Color.black,
  layout: null,
  envBackgroundEnabled: true,
  borderType: JFLineType.CONVEX,
  font: new Font('Dialog', Font.PLAIN, 12),
}

const jcfLabel_1 = {
  alignmentVertical: JFAlignment.CENTER,
  text: `ユーザID　　　　：`,
  foreground: Color.black,
  font: new Font('Monospaced', Font.PLAIN, 14),
  bounds: [288, 96, 160, 25],
}
const jcfLabel_1_logic = installInstance(EComponentName.JCFLabel, jcfLabel_1)

const jcfFieldString_2 = {
  enableType: JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
  id: `cdUserId`,
  maxByteLength: 8,
  maxLength: 8,
  bounds: [456, 96, 260, 25],
}
const jcfFieldString_2_logic = installInstance(EComponentName.JCFFieldString, jcfFieldString_2)

const jcfLabel_3 = {
  alignmentVertical: JFAlignment.CENTER,
  text: `パスワード　　　：`,
  foreground: Color.black,
  font: new Font(`Monospaced`, Font.PLAIN, 14),
  bounds: [288, 144, 160, 25],
}
const jcfLabel_3_logic = installInstance(EComponentName.JCFLabel, jcfLabel_3)

const jcfFieldString_4 = {
  echoChar: `*`,
  id: `ifPassword`,
  maxByteLength: 8,
  maxLength: 8,
  bounds: [456, 144, 260, 25],
  enableType:
    JFEnableType.TYPE_DIGIT |
    JFEnableType.TYPE_LETTER |
    JFEnableType.TYPE_SPECIAL,
}
const jcfFieldString_4_logic = installInstance(EComponentName.JCFFieldString, jcfFieldString_4)

const jcfFieldString_5 = {
  text: `運用日付        ：`,
  borderType: JFLineType.NOTHING,
  editable: false,
  id: `dtUnyoHidukeTitle`,
  focusable: false,
  font: new Font('Monospaced', Font.PLAIN, 14),
  bounds: [288, 190, 128, 24],
}
const jcfFieldString_5_logic = installInstance(EComponentName.JCFFieldString, jcfFieldString_5)

const smsJcfFieldFilledDateExt_6 = {
  id: `dtUnyoHiduke`,
  bounds: [456, 192, 260, 25],
}
const smsJcfFieldFilledDateExt_6_logic = installInstance(EComponentName.SMSJCFFieldFilledDateExt, smsJcfFieldFilledDateExt_6)

const jcfPushButton_7 = {
  label: `ログイン`,
  pushedActionCode: `login`,
  bounds: [392, 232, 136, 24],
}
const jcfPushButton_7_logic = installInstance(EComponentName.JCFPushButton, jcfPushButton_7)

const jcfImage_8 = {
  background: Color.white,
  bounds: [100, 280, 800, 200],
  alignmentHorizontal: JFAlignment.CENTER,
  alignmentVertical: JFAlignment.CENTER,
  imageURL: logoUrl,
}
const jcfImage_8_logic = installInstance(EComponentName.JCFImage, jcfImage_8)

const logic = new Logic()
</script>
