<!--
  /************************************************************************************       
     * クラス名        YBMKKSF620MPanel                                                   
     *                                                                                    
     * システム名    : 経営情報                                                           
     * サブシステム名: 管理会計                                                           
     * プログラム名  : 配賦マスタ                                                         
     * 担当者        : 富士通）ツール                                                     
     * ツールバージョン：1.0.0                                                            
    //******************** 変更可能領域 開始 ********************, 修正履歴               
     * 【修正履歴】                                                                       
     * +---------+--------------+-------------------+---------------------------------   
     * | 版数       |   修正日   | 担当者            | 修正概要                           
     * +----------+------------+-------------------+----------------------------------    
     * | NM初版 | 2025/06/01 | 富士通）ツール    | NEXT-MSISにて新規作成                  
     * +----------+------------+-------------------+----------------------------------    
    //******************* 変更可能領域 終了 ********************                          
     *                                                                                    
     * All Rights Reserved, Copyright (C) Fujitsu Limited && MEGMILK SNOW BRAND Co.,Ltd   
  ************************************************************************************/      
-->
<template>
  <JCFPanelLayout
    :layout="jcfLayoutProps.layout"
    :foreground="jcfLayoutProps.foreground"
    :font="jcfLayoutProps.font"
    :dimension="jcfLayoutProps.dimension"
  >
    <JCFButtonGroup
      :bounds="jcfButtonGroup_1.bounds"
      :borderWidth="jcfButtonGroup_1.borderWidth"
      :borderType="jcfButtonGroup_1.borderType"
      :name="jcfButtonGroup_1.name"
      :logic="jcfButtonGroup_1_logic"
    >
      <JCFToggleButton
        :bounds="jcfToggleButton_2.bounds"
        :id="jcfToggleButton_2.id"
        :label="jcfToggleButton_2.label"
        :container="jcfToggleButton_2.container"
        :logic="jcfToggleButton_2_logic"
      />
      <JCFToggleButton
        :bounds="jcfToggleButton_3.bounds"
        :id="jcfToggleButton_3.id"
        :label="jcfToggleButton_3.label"
        :container="jcfToggleButton_3.container"
        :pushedActionCode="jcfToggleButton_3.pushedActionCode"
        :logic="jcfToggleButton_3_logic"
      />
    </JCFButtonGroup>
    <JCFPushButton
      :bounds="jcfPushButton_4.bounds"
      :id="jcfPushButton_4.id"
      :label="jcfPushButton_4.label"
      :font="jcfPushButton_4.font"
      :pushedActionCode="jcfPushButton_4.pushedActionCode"
      :logic="jcfPushButton_4_logic"
    />
    <JCFPushButton
      :bounds="jcfPushButton_5.bounds"
      :id="jcfPushButton_5.id"
      :label="jcfPushButton_5.label"
      :font="jcfPushButton_5.font"
      :pushedActionCode="jcfPushButton_5.pushedActionCode"
      :logic="jcfPushButton_5_logic"
    />
    <JCFPushButton
      :bounds="jcfPushButton_6.bounds"
      :id="jcfPushButton_6.id"
      :label="jcfPushButton_6.label"
      :font="jcfPushButton_6.font"
      :pushedActionCode="jcfPushButton_6.pushedActionCode"
      :logic="jcfPushButton_6_logic"
    />
    <JCFPushButton
      :bounds="jcfPushButton_7.bounds"
      :id="jcfPushButton_7.id"
      :label="jcfPushButton_7.label"
      :font="jcfPushButton_7.font"
      :pushedActionCode="jcfPushButton_7.pushedActionCode"
      :logic="jcfPushButton_7_logic"
    />
    <JCFPushButton
      :bounds="jcfPushButton_8.bounds"
      :id="jcfPushButton_8.id"
      :label="jcfPushButton_8.label"
      :font="jcfPushButton_8.font"
      :pushedActionCode="jcfPushButton_8.pushedActionCode"
      :logic="jcfPushButton_8_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_9.bounds"
      :text="jcfLabel_9.text"
      :logic="jcfLabel_9_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_10.bounds"
      :text="jcfLabel_10.text"
      :logic="jcfLabel_10_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_11.bounds"
      :background="jcfLabel_11.background"
      :text="jcfLabel_11.text"
      :logic="jcfLabel_11_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_12.bounds"
      :text="jcfLabel_12.text"
      :logic="jcfLabel_12_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_13.bounds"
      :text="jcfLabel_13.text"
      :logic="jcfLabel_13_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_14.bounds"
      :text="jcfLabel_14.text"
      :logic="jcfLabel_14_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_15.bounds"
      :text="jcfLabel_15.text"
      :logic="jcfLabel_15_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_17.bounds"
      :text="jcfLabel_17.text"
      :logic="jcfLabel_17_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_18.bounds"
      :text="jcfLabel_18.text"
      :logic="jcfLabel_18_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_19.bounds"
      :text="jcfLabel_19.text"
      :logic="jcfLabel_19_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_20.bounds"
      :background="jcfLabel_20.background"
      :alignmentHorizontal="jcfLabel_20.alignmentHorizontal"
      :alignmentVertical="jcfLabel_20.alignmentVertical"
      :text="jcfLabel_20.text"
      :logic="jcfLabel_20_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_21.bounds"
      :id="jcfFieldString_21.id"
      :inputMode="jcfFieldString_21.inputMode"
      :maxLength="jcfFieldString_21.maxLength"
      :maxByteLength="jcfFieldString_21.maxByteLength"
      :enableType="jcfFieldString_21.enableType"
      :logic="jcfFieldString_21_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_22.bounds"
      :id="jcfFieldString_22.id"
      :enabled="jcfFieldString_22.enabled"
      :editable="jcfFieldString_22.editable"
      :borderType="jcfFieldString_22.borderType"
      :inactiveForeground="jcfFieldString_22.inactiveForeground"
      :logic="jcfFieldString_22_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_23.bounds"
      :id="jcfFieldString_23.id"
      :inputMode="jcfFieldString_23.inputMode"
      :maxLength="jcfFieldString_23.maxLength"
      :maxByteLength="jcfFieldString_23.maxByteLength"
      :enableType="jcfFieldString_23.enableType"
      :logic="jcfFieldString_23_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_24.bounds"
      :id="jcfFieldString_24.id"
      :inputMode="jcfFieldString_24.inputMode"
      :maxLength="jcfFieldString_24.maxLength"
      :maxByteLength="jcfFieldString_24.maxByteLength"
      :enableType="jcfFieldString_24.enableType"
      :logic="jcfFieldString_24_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_25.bounds"
      :id="jcfFieldString_25.id"
      :enabled="jcfFieldString_25.enabled"
      :editable="jcfFieldString_25.editable"
      :borderType="jcfFieldString_25.borderType"
      :inactiveForeground="jcfFieldString_25.inactiveForeground"
      :logic="jcfFieldString_25_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_26.bounds"
      :id="jcfFieldString_26.id"
      :enabled="jcfFieldString_26.enabled"
      :editable="jcfFieldString_26.editable"
      :borderType="jcfFieldString_26.borderType"
      :inactiveForeground="jcfFieldString_26.inactiveForeground"
      :logic="jcfFieldString_26_logic"
    />
    <JCFComboBox
      :bounds="jcfComboBox_27.bounds"
      :id="jcfComboBox_27.id"
      :selectableElements="jcfComboBox_27.selectableElements"
      :font="jcfComboBox_27.font"
      :logic="jcfComboBox_27_logic"
    />
    <YUKIFieldLong
      :bounds="yukiFieldLong_28.bounds"
      :borderType="yukiFieldLong_28.borderType"
      :id="yukiFieldLong_28.id"
      :enabled="yukiFieldLong_28.enabled"
      :inactiveForeground="yukiFieldLong_28.inactiveForeground"
      :value="yukiFieldLong_28.value"
      :logic="yukiFieldLong_28_logic"
    />
    <YUKIFieldDouble
      :bounds="yukiFieldDouble_29.bounds"
      :id="yukiFieldDouble_29.id"
      :enabled="yukiFieldDouble_29.enabled"
      :borderWidth="yukiFieldDouble_29.borderWidth"
      :borderType="yukiFieldDouble_29.borderType"
      :borderColor="yukiFieldDouble_29.borderColor"
      :inactiveForeground="yukiFieldDouble_29.inactiveForeground"
      :alignmentHorizontal="yukiFieldDouble_29.alignmentHorizontal"
      :equalBackground="yukiFieldDouble_29.equalBackground"
      :greaterBackground="yukiFieldDouble_29.greaterBackground"
      :initialValueDisplay="yukiFieldDouble_29.initialValueDisplay"
      :lessBackground="yukiFieldDouble_29.lessBackground"
      :logic="yukiFieldDouble_29_logic"
    />
    <YUKIFieldDouble
      :bounds="yukiFieldDouble_30.bounds"
      :id="yukiFieldDouble_30.id"
      :enabled="yukiFieldDouble_30.enabled"
      :borderWidth="yukiFieldDouble_30.borderWidth"
      :borderType="yukiFieldDouble_30.borderType"
      :borderColor="yukiFieldDouble_30.borderColor"
      :inactiveForeground="yukiFieldDouble_30.inactiveForeground"
      :alignmentHorizontal="yukiFieldDouble_30.alignmentHorizontal"
      :equalBackground="yukiFieldDouble_30.equalBackground"
      :greaterBackground="yukiFieldDouble_30.greaterBackground"
      :initialValueDisplay="yukiFieldDouble_30.initialValueDisplay"
      :lessBackground="yukiFieldDouble_30.lessBackground"
      :logic="yukiFieldDouble_30_logic"
    />
    <YUKIFieldDouble
      :bounds="yukiFieldDouble_31.bounds"
      :id="yukiFieldDouble_31.id"
      :enabled="yukiFieldDouble_31.enabled"
      :borderWidth="yukiFieldDouble_31.borderWidth"
      :borderType="yukiFieldDouble_31.borderType"
      :borderColor="yukiFieldDouble_31.borderColor"
      :inactiveForeground="yukiFieldDouble_31.inactiveForeground"
      :alignmentHorizontal="yukiFieldDouble_31.alignmentHorizontal"
      :equalBackground="yukiFieldDouble_31.equalBackground"
      :greaterBackground="yukiFieldDouble_31.greaterBackground"
      :initialValueDisplay="yukiFieldDouble_31.initialValueDisplay"
      :lessBackground="yukiFieldDouble_31.lessBackground"
      :logic="yukiFieldDouble_31_logic"
    />
    <YUKIFieldDouble
      :bounds="yukiFieldDouble_32.bounds"
      :id="yukiFieldDouble_32.id"
      :enabled="yukiFieldDouble_32.enabled"
      :borderWidth="yukiFieldDouble_32.borderWidth"
      :borderType="yukiFieldDouble_32.borderType"
      :borderColor="yukiFieldDouble_32.borderColor"
      :inactiveForeground="yukiFieldDouble_32.inactiveForeground"
      :alignmentHorizontal="yukiFieldDouble_32.alignmentHorizontal"
      :equalBackground="yukiFieldDouble_32.equalBackground"
      :greaterBackground="yukiFieldDouble_32.greaterBackground"
      :initialValueDisplay="yukiFieldDouble_32.initialValueDisplay"
      :lessBackground="yukiFieldDouble_32.lessBackground"
      :logic="yukiFieldDouble_32_logic"
    />
    <SMSJCFSpread
      :id="smsJcfSpread_33.id"
      :itemSource="smsJcfSpread_33.itemSource"
      :scrollMask="smsJcfSpread_33.scrollMask"
      :defaultCellHeight="smsJcfSpread_33.defaultCellHeight"
      :keyOpenMode="smsJcfSpread_33.keyOpenMode"
      :doubleColor="smsJcfSpread_33.doubleColor"
      :closeMoveMode="smsJcfSpread_33.closeMoveMode"
      :headerAndColumnProperty="smsJcfSpread_33.headerAndColumnProperty"
      :bounds="smsJcfSpread_33.bounds"
      :logic="smsJcfSpread_33_logic"
    />
  </JCFPanelLayout>
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import {
  JCFPanelLayout,
  Dimension,
  YUKIFieldLong,
  YUKIFieldDouble,
  JCFFieldString,
  JCFComboBox,
  JCFLabel,
  JCFToggleButton,
  JCFPushButton,
  JCFButtonGroup,
  SMSJCFSpread,
  SystemColor,
  Color,
  JFAlignment,
  CJSpread,
  JFField,
  JFEnableType,
  JFLineType,
  Font,
  EComponentName,
} from '@/components/jcf/entry'
/** NOTE: 一時導入。スプレッド列情報の変換が正常に終了後に削除。 */
import { spreadColumnInfo } from '@/components/jcf/JCFSpread/data'
import type { ItemSource } from '@/components/jcf/JCFSpread/types'
import Logic from '../logic/YBMKKSF620MLogic'
import { installInstance } from '@/components/jcf/utils/instance'

// [[Spread Dummy Data Panel Type]]
const itemSource: ItemSource = Array.from({ length: 5 }, () => ({
  __COL_0: false,
  __COL_1: '123456',
  __COL_2: null,
  __COL_3: '１２３４５６７８９０１',
  __COL_4: 1,
  __COL_5: 1237.45,
  __COL_6: 1237.45,
  __COL_7: 1237.45,
  __COL_8: 1237.45,
  __COL_9: '20240421110909128',
  __COL_10: '１２３４５６７８９',
}))

const jcfLayoutProps = {
  layout: null,
  foreground: Color.black,
  font: new Font('Monospaced', Font.PLAIN, 14),
  dimension: new Dimension(1000, 510),
}

const jcfButtonGroup_1 = {
  bounds: [168, 8, 408, 24],
  borderWidth: 0,
  borderType: JFLineType.NOTHING,
  name: `JCFButtonGroup1`,
}
const jcfButtonGroup_1_logic = installInstance(
  EComponentName.JCFButtonGroup,
  jcfButtonGroup_1,
)

const jcfToggleButton_2 = {
  bounds: [0, 0, 112, 24],
  id: `jigyoTorokuHiritsu`,
  label: `事業登録比率`,
  container: `JCFButtonGroup1`,
}
const jcfToggleButton_2_logic = installInstance(
  EComponentName.JCFToggleButton,
  jcfToggleButton_2,
)

const jcfToggleButton_3 = {
  bounds: [120, 0, 264, 24],
  id: `lineHiritsu`,
  label: `ライン比率（共通職場→ライン職場）`,
  container: `JCFButtonGroup1`,
  pushedActionCode: `stHaifuSelected1`,
}
const jcfToggleButton_3_logic = installInstance(
  EComponentName.JCFToggleButton,
  jcfToggleButton_3,
)

const jcfPushButton_4 = {
  bounds: [848, 48, 32, 24],
  id: `fukusya`,
  label: `複写`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  pushedActionCode: `body_button02`,
}
const jcfPushButton_4_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_4,
)

const jcfPushButton_5 = {
  bounds: [896, 48, 32, 24],
  id: `body_button03`,
  label: `表示`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  pushedActionCode: `body_button03`,
}
const jcfPushButton_5_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_5,
)

const jcfPushButton_6 = {
  bounds: [216, 72, 32, 24],
  id: `body_button05`,
  label: `検索`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  pushedActionCode: `body_button05`,
}
const jcfPushButton_6_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_6,
)

const jcfPushButton_7 = {
  bounds: [288, 104, 32, 24],
  id: `body_button06`,
  label: `検索`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  pushedActionCode: `body_button06`,
}
const jcfPushButton_7_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_7,
)

const jcfPushButton_8 = {
  bounds: [888, 456, 48, 24],
  id: `addRow`,
  label: `行追加`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  pushedActionCode: `body_button04`,
}
const jcfPushButton_8_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_8,
)

const jcfLabel_9 = {
  bounds: [24, 8, 144, 24],
  text: `* 配賦区分　　　　：`,
}
const jcfLabel_9_logic = installInstance(EComponentName.JCFLabel, jcfLabel_9)

const jcfLabel_10 = {
  bounds: [24, 40, 144, 24],
  text: `* 年度　　　　　　：`,
}
const jcfLabel_10_logic = installInstance(EComponentName.JCFLabel, jcfLabel_10)

const jcfLabel_11 = {
  bounds: [240, 40, 24, 24],
  background: Color.white,
  text: `年`,
}
const jcfLabel_11_logic = installInstance(EComponentName.JCFLabel, jcfLabel_11)

const jcfLabel_12 = {
  bounds: [24, 72, 144, 24],
  text: `* 組織　　　　　　：`,
}
const jcfLabel_12_logic = installInstance(EComponentName.JCFLabel, jcfLabel_12)

const jcfLabel_13 = {
  bounds: [848, 80, 24, 24],
  text: `全`,
}
const jcfLabel_13_logic = installInstance(EComponentName.JCFLabel, jcfLabel_13)

const jcfLabel_14 = {
  bounds: [920, 80, 24, 24],
  text: `件`,
}
const jcfLabel_14_logic = installInstance(EComponentName.JCFLabel, jcfLabel_14)

const jcfLabel_15 = {
  bounds: [24, 104, 144, 24],
  text: `　科目－補助科目  ：`,
}
const jcfLabel_15_logic = installInstance(EComponentName.JCFLabel, jcfLabel_15)

const jcfLabel_17 = {
  bounds: [216, 104, 24, 24],
  text: `―`,
}
const jcfLabel_17_logic = installInstance(EComponentName.JCFLabel, jcfLabel_17)

const jcfLabel_18 = {
  bounds: [440, 104, 24, 24],
  text: `―`,
}
const jcfLabel_18_logic = installInstance(EComponentName.JCFLabel, jcfLabel_18)

const jcfLabel_19 = {
  bounds: [856, 104, 88, 24],
  text: `（単位：％）`,
}
const jcfLabel_19_logic = installInstance(EComponentName.JCFLabel, jcfLabel_19)

const jcfLabel_20 = {
  bounds: [296, 456, 88, 24],
  background: new Color(182, 198, 250),
  alignmentHorizontal: JFAlignment.CENTER,
  alignmentVertical: JFAlignment.CENTER,
  text: `合　計`,
}
const jcfLabel_20_logic = installInstance(EComponentName.JCFLabel, jcfLabel_20)

const jcfFieldString_21 = {
  bounds: [168, 72, 48, 24],
  id: `cdSoshiki`,
  inputMode: JFField.MODE_NATIVE,
  maxLength: 6.0,
  maxByteLength: 6.0,
  enableType: JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
}
const jcfFieldString_21_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_21,
)

const jcfFieldString_22 = {
  bounds: [248, 72, 112, 24],
  id: `nmSoshiki`,
  enabled: false,
  editable: false,
  borderType: JFLineType.NOTHING,
  inactiveForeground: SystemColor.textText,
}
const jcfFieldString_22_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_22,
)

const jcfFieldString_23 = {
  bounds: [168, 104, 40, 24],
  id: `cdKanjokamoku`,
  inputMode: JFField.MODE_NATIVE,
  maxLength: 5.0,
  maxByteLength: 5.0,
  enableType: JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
}
const jcfFieldString_23_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_23,
)

const jcfFieldString_24 = {
  bounds: [240, 104, 48, 24],
  id: `cdHojokamoku`,
  inputMode: JFField.MODE_NATIVE,
  maxLength: 6.0,
  maxByteLength: 6.0,
  enableType: JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
}
const jcfFieldString_24_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_24,
)

const jcfFieldString_25 = {
  bounds: [328, 104, 112, 24],
  id: `nmKanjokamoku`,
  enabled: false,
  editable: false,
  borderType: JFLineType.NOTHING,
  inactiveForeground: SystemColor.textText,
}
const jcfFieldString_25_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_25,
)

const jcfFieldString_26 = {
  bounds: [464, 104, 112, 24],
  id: `nmHojokamoku`,
  enabled: false,
  editable: false,
  borderType: JFLineType.NOTHING,
  inactiveForeground: SystemColor.textText,
}
const jcfFieldString_26_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_26,
)

const jcfComboBox_27 = {
  bounds: [168, 40, 64, 24],
  id: `dtNendo`,
  selectableElements: [],
  font: new Font('Monospaced', Font.PLAIN, 12),
}
const jcfComboBox_27_logic = installInstance(
  EComponentName.JCFComboBox,
  jcfComboBox_27,
)

const yukiFieldLong_28 = {
  bounds: [872, 80, 40, 24],
  borderType: JFLineType.NOTHING,
  id: `count`,
  enabled: false,
  inactiveForeground: SystemColor.textText,
  value: `0`,
}
const yukiFieldLong_28_logic = installInstance(
  EComponentName.YUKIFieldLong,
  yukiFieldLong_28,
)

const yukiFieldDouble_29 = {
  bounds: [384, 456, 64, 24],
  id: `sumYosanHiritsu`,
  enabled: false,
  borderWidth: 1,
  borderType: JFLineType.FLAT,
  borderColor: new Color(216, 228, 248),
  inactiveForeground: SystemColor.textText,
  alignmentHorizontal: JFAlignment.CENTER,
  equalBackground: SystemColor.control,
  greaterBackground: SystemColor.control,
  initialValueDisplay: false,
  lessBackground: SystemColor.control,
}
const yukiFieldDouble_29_logic = installInstance(
  EComponentName.YUKIFieldDouble,
  yukiFieldDouble_29,
)

const yukiFieldDouble_30 = {
  bounds: [448, 456, 64, 24],
  id: `sumJissekiHiritsu`,
  enabled: false,
  borderWidth: 1,
  borderType: JFLineType.FLAT,
  borderColor: new Color(216, 228, 248),
  inactiveForeground: SystemColor.textText,
  alignmentHorizontal: JFAlignment.CENTER,
  equalBackground: SystemColor.control,
  greaterBackground: SystemColor.control,
  initialValueDisplay: false,
  lessBackground: SystemColor.control,
}
const yukiFieldDouble_30_logic = installInstance(
  EComponentName.YUKIFieldDouble,
  yukiFieldDouble_30,
)

const yukiFieldDouble_31 = {
  bounds: [512, 456, 64, 24],
  id: `sumZenkaiYosan`,
  enabled: false,
  borderWidth: 1,
  borderType: JFLineType.FLAT,
  borderColor: new Color(216, 228, 248),
  inactiveForeground: SystemColor.textText,
  alignmentHorizontal: JFAlignment.CENTER,
  equalBackground: SystemColor.control,
  greaterBackground: SystemColor.control,
  initialValueDisplay: false,
  lessBackground: SystemColor.control,
}
const yukiFieldDouble_31_logic = installInstance(
  EComponentName.YUKIFieldDouble,
  yukiFieldDouble_31,
)

const yukiFieldDouble_32 = {
  bounds: [576, 456, 64, 24],
  id: `sumZenkaiJisseki`,
  enabled: false,
  borderWidth: 1,
  borderType: JFLineType.FLAT,
  borderColor: new Color(216, 228, 248),
  inactiveForeground: SystemColor.textText,
  alignmentHorizontal: JFAlignment.CENTER,
  equalBackground: SystemColor.control,
  greaterBackground: SystemColor.control,
  initialValueDisplay: false,
  lessBackground: SystemColor.control,
}
const yukiFieldDouble_32_logic = installInstance(
  EComponentName.YUKIFieldDouble,
  yukiFieldDouble_32,
)

const smsJcfSpread_33 = {
  id: `spread`,
  itemSource: itemSource,
  scrollMask: CJSpread.SCRL_VERTICALAUTO,
  defaultCellHeight: 24,
  keyOpenMode: true,
  doubleColor: true,
  closeMoveMode: 4,
  headerAndColumnProperty: spreadColumnInfo,
  bounds: [24, 136, 928, 301],
}
const smsJcfSpread_33_logic = installInstance(
  EComponentName.SMSJCFSpread,
  smsJcfSpread_33,
)

// [[Spread Dummy Data Logic Type]]
// const context = getGlobalContext().context
// const hashMapData = [
//   toHashMap({
//     nuJiskHaifuritsu: '22.02',
//     nmHaifu: 'セイ2',
//     noKaisoLevel: '1',
//     nmKoshinsha: '雪次郎',
//     nuYsnZenHaifuritsu: '22.03',
//     tmKoshin: '20240421110909128',
//     nuYsnHaifuritsu: 2222.01,
//     nuJiskZenHaifuritsu: 2222.04,
//     cdHaifu: '103386',
//   }),
// ]
// setTimeout(() => {
//   console.log('start set data to spread')
//   logic.setDataToSpread(context, hashMapData)
//   console.log('end set data to spread')
// }, 3000)

const logic = new Logic()
</script>
