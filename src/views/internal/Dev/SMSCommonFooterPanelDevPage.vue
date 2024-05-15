<!-- Dev Page専用 -->
<template>
  <JCFPanelLayout
    :background="jcfLayoutProps.background"
    :foreground="jcfLayoutProps.foreground"
    :font="jcfLayoutProps.font"
    :dimension="jcfLayoutProps.dimension"
  >
    <JCFFieldString
      :id="jcfFieldString_1.id"
      :inactiveForeground="jcfFieldString_1.inactiveForeground"
      :font="jcfFieldString_1.font"
      :bounds="jcfFieldString_1.bounds"
      :enabled="jcfFieldString_1.enabled"
      :editable="jcfFieldString_1.editable"
      :logic="jcfFieldString_1_logic"
    />
    <JCFPushButton
      :id="jcfPushButton_2.id"
      :label="jcfPushButton_2.label"
      :pushedActionCode="jcfPushButton_2.pushedActionCode"
      :font="jcfPushButton_2.font"
      :bounds="jcfPushButton_2.bounds"
      :logic="jcfPushButton_2_logic"
    />
    <JCFPushButton
      :id="jcfPushButton_3.id"
      :label="jcfPushButton_3.label"
      :pushedActionCode="jcfPushButton_3.pushedActionCode"
      :font="jcfPushButton_3.font"
      :bounds="jcfPushButton_3.bounds"
      :logic="jcfPushButton_3_logic"
    />
    <JCFPushButton
      :id="jcfPushButton_4.id"
      :label="jcfPushButton_4.label"
      :pushedActionCode="jcfPushButton_4.pushedActionCode"
      :font="jcfPushButton_4.font"
      :bounds="jcfPushButton_4.bounds"
      :logic="jcfPushButton_4_logic"
    />
    <JCFPushButton
      :id="jcfPushButton_5.id"
      :label="jcfPushButton_5.label"
      :pushedActionCode="jcfPushButton_5.pushedActionCode"
      :font="jcfPushButton_5.font"
      :bounds="jcfPushButton_5.bounds"
      :logic="jcfPushButton_5_logic"
    />
    <JCFPushButton
      :id="jcfPushButton_6.id"
      :label="jcfPushButton_6.label"
      :pushedActionCode="jcfPushButton_6.pushedActionCode"
      :font="jcfPushButton_6.font"
      :bounds="jcfPushButton_6.bounds"
      :logic="jcfPushButton_6_logic"
    />
    <JCFPushButton
      :id="jcfPushButton_7.id"
      :label="jcfPushButton_7.label"
      :pushedActionCode="jcfPushButton_7.pushedActionCode"
      :font="jcfPushButton_7.font"
      :bounds="jcfPushButton_7.bounds"
      :logic="jcfPushButton_7_logic"
    />
    <JCFPushButton
      :id="jcfPushButton_8.id"
      :label="jcfPushButton_8.label"
      :pushedActionCode="jcfPushButton_8.pushedActionCode"
      :font="jcfPushButton_8.font"
      :bounds="jcfPushButton_8.bounds"
      :logic="jcfPushButton_8_logic"
    />
    <JCFPushButton
      :id="jcfPushButton_9.id"
      :label="jcfPushButton_9.label"
      :pushedActionCode="jcfPushButton_9.pushedActionCode"
      :font="jcfPushButton_9.font"
      :bounds="jcfPushButton_9.bounds"
      :logic="jcfPushButton_9_logic"
    />
    <JCFPushButton
      :id="jcfPushButton_10.id"
      :label="jcfPushButton_10.label"
      :pushedActionCode="jcfPushButton_10.pushedActionCode"
      :font="jcfPushButton_10.font"
      :bounds="jcfPushButton_10.bounds"
      :logic="jcfPushButton_10_logic"
    />
    <JCFPushButton
      :id="jcfPushButton_11.id"
      :label="jcfPushButton_11.label"
      :pushedActionCode="jcfPushButton_11.pushedActionCode"
      :bounds="jcfPushButton_11.bounds"
      :visible="jcfPushButton_11.visible"
      :logic="jcfPushButton_11_logic"
    />
    <JCFPushButton
      :id="jcfPushButton_12.id"
      :label="jcfPushButton_12.label"
      :pushedActionCode="jcfPushButton_12.pushedActionCode"
      :bounds="jcfPushButton_12.bounds"
      :visible="jcfPushButton_12.visible"
      :logic="jcfPushButton_12_logic"
    />
  </JCFPanelLayout>
</template>

<script setup lang="ts">
import {
  JCFFieldString,
  JCFPushButton,
  Color,
  Font,
  JCFPanelLayout,
  Dimension,
  EComponentName,
} from '@/components/jcf/entry'
import { installInstance } from '@/components/jcf/utils/instance'

const jcfLayoutProps = {
  background: Color.white,
  foreground: Color.black,
  font: new Font('ＭＳ ゴシック', Font.PLAIN, 14),
  dimension: new Dimension(1000, 64),
}

const jcfFieldString_1 = {
  id: `footer_message`,
  inactiveForeground: Color.red,
  font: new Font('ＭＳ ゴシック', Font.BOLD, 14),
  bounds: [16, 8, 944, 24],
  enabled: false,
  editable: false,
}
const jcfFieldString_1_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_1,
)

const jcfPushButton_2 = {
  id: `button1`,
  label: `(F1)`,
  pushedActionCode: `footer_button01`,
  font: new Font('ＭＳ ゴシック', Font.PLAIN, 12),
  bounds: [16, 32, 96, 24],
}
const jcfPushButton_2_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_2,
)

const jcfPushButton_3 = {
  id: `button2`,
  label: `(F2)`,
  pushedActionCode: `footer_button02`,
  font: new Font('ＭＳ ゴシック', Font.PLAIN, 12),
  bounds: [120, 32, 96, 24],
}
const jcfPushButton_3_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_3,
)

const jcfPushButton_4 = {
  id: `button3`,
  label: `(F3)`,
  pushedActionCode: `footer_button03`,
  font: new Font('ＭＳ ゴシック', Font.PLAIN, 12),
  bounds: [224, 32, 96, 24],
}
const jcfPushButton_4_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_4,
)

const jcfPushButton_5 = {
  id: `button4`,
  label: `(F4)`,
  pushedActionCode: `footer_button04`,
  font: new Font('ＭＳ ゴシック', Font.PLAIN, 12),
  bounds: [328, 32, 96, 24],
}
const jcfPushButton_5_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_5,
)

const jcfPushButton_6 = {
  id: `button5`,
  label: `(F5)`,
  pushedActionCode: `footer_button05`,
  font: new Font('ＭＳ ゴシック', Font.PLAIN, 12),
  bounds: [432, 32, 96, 24],
}
const jcfPushButton_6_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_6,
)

const jcfPushButton_7 = {
  id: `button6`,
  label: `(F6)`,
  pushedActionCode: `footer_button06`,
  font: new Font('ＭＳ ゴシック', Font.PLAIN, 12),
  bounds: [536, 32, 96, 24],
}
const jcfPushButton_7_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_7,
)

const jcfPushButton_8 = {
  id: `button7`,
  label: `(F7)`,
  pushedActionCode: `footer_button07`,
  font: new Font('ＭＳ ゴシック', Font.PLAIN, 12),
  bounds: [640, 32, 96, 24],
}
const jcfPushButton_8_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_8,
)

const jcfPushButton_9 = {
  id: `button8`,
  label: `(F8)`,
  pushedActionCode: `footer_button08`,
  font: new Font('ＭＳ ゴシック', Font.PLAIN, 12),
  bounds: [744, 32, 96, 24],
}
const jcfPushButton_9_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_9,
)

const jcfPushButton_10 = {
  id: `button9`,
  label: `(F9)`,
  pushedActionCode: `footer_button09`,
  font: new Font('ＭＳ ゴシック', Font.PLAIN, 12),
  bounds: [848, 32, 96, 24],
}
const jcfPushButton_10_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_10,
)

const jcfPushButton_11 = {
  id: `beforeBtn`,
  label: `前へ`,
  pushedActionCode: `beforePage`,
  bounds: [848, 6, 46, 24],
  visible: false,
}
const jcfPushButton_11_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_11,
)

const jcfPushButton_12 = {
  id: `nextBtn`,
  label: `次へ`,
  pushedActionCode: `nextPage`,
  bounds: [896, 6, 46, 24],
  visible: false,
}
const jcfPushButton_12_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_12,
)
</script>
