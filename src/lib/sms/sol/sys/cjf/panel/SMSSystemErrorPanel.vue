<template>
  <JCFPanelLayout
    :foreground="jcfLayoutProps.foreground"
    :font="jcfLayoutProps.font"
    :layout="jcfLayoutProps.layout"
    :dimension="jcfLayoutProps.dimension"
  >
    <JCFLabel
      :text="jcfLabel_1.text"
      :foreground="jcfLabel_1.foreground"
      :background="jcfLabel_1.background"
      :font="jcfLabel_1.font"
      :bounds="jcfLabel_1.bounds"
      :logic="jcfLabel_1_logic"
    />
    <JCFFieldString
      :background="jcfFieldString_2.background"
      :foreground="jcfFieldString_2.foreground"
      :font="jcfFieldString_2.font"
      :borderType="jcfFieldString_2.borderType"
      :borderWidth="jcfFieldString_2.borderWidth"
      :editable="jcfFieldString_2.editable"
      :caretVisible="jcfFieldString_2.caretVisible"
      :id="jcfFieldString_2.id"
      :text="jcfFieldString_2.text"
      :bounds="jcfFieldString_2.bounds"
      :logic="jcfFieldString_2_logic"
    />
    <JCFLabel
      :text="jcfLabel_3.text"
      :foreground="jcfLabel_3.foreground"
      :background="jcfLabel_3.background"
      :font="jcfLabel_3.font"
      :bounds="jcfLabel_3.bounds"
      :logic="jcfLabel_3_logic"
    />
    <JCFLabel
      :text="jcfLabel_4.text"
      :foreground="jcfLabel_4.foreground"
      :background="jcfLabel_4.background"
      :font="jcfLabel_4.font"
      :bounds="jcfLabel_4.bounds"
      :logic="jcfLabel_4_logic"
    />
    <JCFFieldString
      :caretVisible="jcfFieldString_5.caretVisible"
      :borderType="jcfFieldString_5.borderType"
      :borderWidth="jcfFieldString_5.borderWidth"
      :editable="jcfFieldString_5.editable"
      :background="jcfFieldString_5.background"
      :foreground="jcfFieldString_5.foreground"
      :font="jcfFieldString_5.font"
      :id="jcfFieldString_5.id"
      :bounds="jcfFieldString_5.bounds"
      :logic="jcfFieldString_5_logic"
    />
    <JCFLabel 
      :text="jcfLabel_6.text"
      :bounds="jcfLabel_6.bounds"
      :logic="jcfLabel_6_logic"
    />
    <JCFLabel
      :text="jcfLabel_7.text"
      :foreground="jcfLabel_7.foreground"
      :background="jcfLabel_7.background"
      :font="jcfLabel_7.font"
      :visible="jcfLabel_7.visible"
      :bounds="jcfLabel_7.bounds"
      :logic="jcfLabel_7_logic"
    />
    <JCFFieldString
      :text="jcfFieldString_8.text"
      :editable="jcfFieldString_8.editable"
      :caretVisible="jcfFieldString_8.caretVisible"
      :borderType="jcfFieldString_8.borderType"
      :borderWidth="jcfFieldString_8.borderWidth"
      :background="jcfFieldString_8.background"
      :foreground="jcfFieldString_8.foreground"
      :font="jcfFieldString_8.font"
      :id="jcfFieldString_8.id"
      :visible="jcfFieldString_8.visible"
      :bounds="jcfFieldString_8.bounds"
      :logic="jcfFieldString_8_logic"
    />
    <JCFLabel 
      :text="jcfLabel_9.text"
      :bounds="jcfLabel_9.bounds"
      :logic="jcfLabel_9_logic"
    />
    <JCFLabel
      :text="jcfLabel_10.text"
      :bounds="jcfLabel_10.bounds"
      :logic="jcfLabel_10_logic"
    />
    <JCFLabel
      :text="jcfLabel_11.text"
      :visible="jcfLabel_11.visible"
      :bounds="jcfLabel_11.bounds"
      :logic="jcfLabel_11_logic"
    />
    <JCFTextArea
      :enabled="jcfTextArea_12.enabled"
      :foreground="jcfTextArea_12.foreground"
      :underlineColor="jcfTextArea_12.underlineColor"
      :font="jcfTextArea_12.font"
      :editable="jcfTextArea_12.editable"
      :scrollbarVisibility="jcfTextArea_12.scrollbarVisibility"
      :borderType="jcfTextArea_12.borderType"
      :borderWidth="jcfTextArea_12.borderWidth"
      :id="jcfTextArea_12.id"
      :inactiveForeground="jcfTextArea_12.inactiveForeground"
      :text="jcfTextArea_12.text"
      :bounds="jcfTextArea_12.bounds"
      :logic="jcfTextArea_12_logic"
    />
  </JCFPanelLayout>
</template>

<script setup lang="ts">
import {
  JCFLabel,
  JCFFieldString,
  JCFTextArea,
  Color,
  Font,
  JFLineType,
  JFTextArea,
  JCFPanelLayout,
  Dimension,
  EComponentName,
} from '@/components/jcf/entry'
import { installInstance } from '@/components/jcf/utils/instance';
import Logic from '@/views/YIN/YCSCMNF010/logic/YCSCMNF070MLogic'

const jcfLayoutProps = {
  foreground: Color.black,
  font: new Font('Dialog', Font.PLAIN, 12),
  layout: null,
  dimension: new Dimension(1000, 510),
}

const jcfLabel_1 = {
  text: `メッセージコード`,
  foreground: Color.black,
  background: Color.pink,
  font: new Font('Monospaced', Font.BOLD, 12),
  bounds: [184, 136, 152, 24],
}
const jcfLabel_1_logic = installInstance(EComponentName.JCFLabel, jcfLabel_1)

const jcfFieldString_2 = {
  background: Color.white,
  foreground: Color.red,
  font: new Font('Monospaced', Font.BOLD, 12),
  borderType: JFLineType.FLAT,
  borderWidth: 1,
  editable: false,
  caretVisible: false,
  id: `messageCode`,
  text: `XXXXXXXXXX`,
  bounds: [360, 136, 472, 24],
}
const jcfFieldString_2_logic = installInstance(EComponentName.JCFFieldString, jcfFieldString_2)

const jcfLabel_3 = {
  text: `詳細`,
  foreground: Color.black,
  background: Color.pink,
  font: new Font('Monospaced', Font.BOLD, 12),
  bounds: [184, 176, 152, 24],
}
const jcfLabel_3_logic = installInstance(EComponentName.JCFLabel, jcfLabel_3)

const jcfLabel_4 = {
  text: `発生日時`,
  foreground: Color.black,
  background: Color.pink,
  font: new Font('Monospaced', Font.BOLD, 12),
  bounds: [184, 232, 152, 24],
}
const jcfLabel_4_logic = installInstance(EComponentName.JCFLabel, jcfLabel_4)

const jcfFieldString_5 = {
  caretVisible: false,
  borderType: JFLineType.FLAT,
  borderWidth: 1,
  editable: false,
  background: Color.white,
  foreground: Color.red,
  font: new Font('Monospaced', Font.BOLD, 12),
  id: `errorDate`,
  bounds: [360, 232, 472, 24],
}
const jcfFieldString_5_logic = installInstance(EComponentName.JCFFieldString, jcfFieldString_5)

const jcfLabel_6 = {
  text: `：`,
  bounds: [336, 136, 16, 24],
}
const jcfLabel_6_logic = installInstance(EComponentName.JCFLabel, jcfLabel_6)

const jcfLabel_7 = {
  text: `対処方法`,
  foreground: Color.black,
  background: Color.pink,
  font: new Font('Monospaced', Font.BOLD, 12),
  visible: false,
  bounds: [184, 272, 152, 24],
}
const jcfLabel_7_logic = installInstance(EComponentName.JCFLabel, jcfLabel_7)

const jcfFieldString_8 = {
  text: `システム管理者にお問い合わせください。`,
  editable: false,
  caretVisible: false,
  borderType: JFLineType.FLAT,
  borderWidth: 1,
  background: Color.white,
  foreground: Color.red,
  font: new Font('Monospaced', Font.BOLD, 12),
  id: `errorSolution`,
  visible: false,
  bounds: [360, 272, 472, 24],
}
const jcfFieldString_8_logic = installInstance(EComponentName.JCFFieldString, jcfFieldString_8)

const jcfLabel_9 = {
  text: `：`,
  bounds: [336, 176, 16, 24],
}
const jcfLabel_9_logic = installInstance(EComponentName.JCFLabel, jcfLabel_9)

const jcfLabel_10 = {
  text: `：`,
  bounds: [336, 232, 16, 24],
}
const jcfLabel_10_logic = installInstance(EComponentName.JCFLabel, jcfLabel_10)

const jcfLabel_11 = {
  text: `：`,
  visible: false,
  bounds: [336, 272, 16, 24],
}
const jcfLabel_11_logic = installInstance(EComponentName.JCFLabel, jcfLabel_11)

const jcfTextArea_12 = {
  enabled: false,
  foreground: Color.red,
  underlineColor: Color.red,
  font: new Font('Monospaced', Font.BOLD, 12),
  editable: false,
  scrollbarVisibility: JFTextArea.SCROLLBARS_NONE,
  borderType: JFLineType.FLAT,
  borderWidth: 1,
  id: `errorDetail`,
  inactiveForeground: Color.red,
  text: `あああああ\r\nあああああ`,
  bounds: [360, 176, 472, 40],
}
const jcfTextArea_12_logic = installInstance(EComponentName.JCFTextArea, jcfTextArea_12)

const logic = new Logic()
</script>
