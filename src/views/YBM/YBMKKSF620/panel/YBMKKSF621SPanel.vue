<!--
  /************************************************************************************          
     * クラス名        YBMKKSF621SPanel                                                      
     *                                                                                       
     * システム名    : 経営情報                                                              
     * サブシステム名: 管理会計                                                              
     * プログラム名  : 配賦マスタ（複写）                                                    
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
    :foreground="jcfLayoutProps.foreground"
    :layout="jcfLayoutProps.layout"
    :font="jcfLayoutProps.font"
    :dimension="jcfLayoutProps.dimension"
  >

  <JCFButtonGroup
    :bounds="jcfButtonGroup_1.bounds"
    :label="jcfButtonGroup_1.label"
    :layout="jcfButtonGroup_1.layout"
    :logic="jcfButtonGroup_1_logic"
  >
  </JCFButtonGroup>
  <JCFLabel
    :bounds="jcfLabel_2.bounds"
    :text="jcfLabel_2.text"
    :logic="jcfLabel_2_logic"
  />

  <JCFButtonGroup
    :bounds="jcfButtonGroup_3.bounds"
    :enabled="jcfButtonGroup_3.enabled"
    :borderWidth="jcfButtonGroup_3.borderWidth"
    :borderType="jcfButtonGroup_3.borderType"
    :layout="jcfButtonGroup_3.layout"
    :logic="jcfButtonGroup_3_logic"
  >
  <JCFToggleButton
    :bounds="jcfToggleButton_4.bounds"
    :name="jcfToggleButton_4.name"
    :id="jcfToggleButton_4.id"
    :enabled="jcfToggleButton_4.enabled"
    :label="jcfToggleButton_4.label"
    :logic="jcfToggleButton_4_logic"
  />
  <JCFToggleButton
    :bounds="jcfToggleButton_5.bounds"
    :name="jcfToggleButton_5.name"
    :id="jcfToggleButton_5.id"
    :enabled="jcfToggleButton_5.enabled"
    :label="jcfToggleButton_5.label"
    :pushedActionCode="jcfToggleButton_5.pushedActionCode"
    :logic="jcfToggleButton_5_logic"
  />
  </JCFButtonGroup>
  <JCFLabel
    :bounds="jcfLabel_6.bounds"
    :text="jcfLabel_6.text"
    :logic="jcfLabel_6_logic"
  />
  <JCFComboBox
    :bounds="jcfComboBox_7.bounds"
    :id="jcfComboBox_7.id"
    :enabled="jcfComboBox_7.enabled"
    :selectableElements="jcfComboBox_7.selectableElements"
    :font="jcfComboBox_7.font"
    :logic="jcfComboBox_7_logic"
  />
  <JCFLabel
    :bounds="jcfLabel_8.bounds"
    :background="jcfLabel_8.background"
    :text="jcfLabel_8.text"
    :logic="jcfLabel_8_logic"
  />
  <JCFLabel
    :bounds="jcfLabel_9.bounds"
    :text="jcfLabel_9.text"
    :logic="jcfLabel_9_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_10.bounds"
    :id="jcfFieldString_10.id"
    :enabled="jcfFieldString_10.enabled"
    :inputMode="jcfFieldString_10.inputMode"
    :maxLength="jcfFieldString_10.maxLength"
    :maxByteLength="jcfFieldString_10.maxByteLength"
    :enableType="jcfFieldString_10.enableType"
    :logic="jcfFieldString_10_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_11.bounds"
    :id="jcfFieldString_11.id"
    :enabled="jcfFieldString_11.enabled"
    :editable="jcfFieldString_11.editable"
    :borderType="jcfFieldString_11.borderType"
    :inactiveForeground="jcfFieldString_11.inactiveForeground"
    :enableType="jcfFieldString_11.enableType"
    :logic="jcfFieldString_11_logic"
  />
  <JCFLabel
    :bounds="jcfLabel_12.bounds"
    :text="jcfLabel_12.text"
    :logic="jcfLabel_12_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_13.bounds"
    :id="jcfFieldString_13.id"
    :enabled="jcfFieldString_13.enabled"
    :editable="jcfFieldString_13.editable"
    :inputMode="jcfFieldString_13.inputMode"
    :maxLength="jcfFieldString_13.maxLength"
    :maxByteLength="jcfFieldString_13.maxByteLength"
    :enableType="jcfFieldString_13.enableType"
    :logic="jcfFieldString_13_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_14.bounds"
    :enabled="jcfFieldString_14.enabled"
    :editable="jcfFieldString_14.editable"
    :borderType="jcfFieldString_14.borderType"
    :inactiveForeground="jcfFieldString_14.inactiveForeground"
    :text="jcfFieldString_14.text"
    :logic="jcfFieldString_14_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_15.bounds"
    :id="jcfFieldString_15.id"
    :enabled="jcfFieldString_15.enabled"
    :editable="jcfFieldString_15.editable"
    :inputMode="jcfFieldString_15.inputMode"
    :maxLength="jcfFieldString_15.maxLength"
    :maxByteLength="jcfFieldString_15.maxByteLength"
    :enableType="jcfFieldString_15.enableType"
    :logic="jcfFieldString_15_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_16.bounds"
    :id="jcfFieldString_16.id"
    :enabled="jcfFieldString_16.enabled"
    :editable="jcfFieldString_16.editable"
    :borderType="jcfFieldString_16.borderType"
    :inactiveForeground="jcfFieldString_16.inactiveForeground"
    :logic="jcfFieldString_16_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_17.bounds"
    :enabled="jcfFieldString_17.enabled"
    :editable="jcfFieldString_17.editable"
    :borderType="jcfFieldString_17.borderType"
    :inactiveForeground="jcfFieldString_17.inactiveForeground"
    :text="jcfFieldString_17.text"
    :logic="jcfFieldString_17_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_18.bounds"
    :id="jcfFieldString_18.id"
    :enabled="jcfFieldString_18.enabled"
    :editable="jcfFieldString_18.editable"
    :borderType="jcfFieldString_18.borderType"
    :inactiveForeground="jcfFieldString_18.inactiveForeground"
    :logic="jcfFieldString_18_logic"
  />

  <JCFButtonGroup
    :bounds="jcfButtonGroup_19.bounds"
    :label="jcfButtonGroup_19.label"
    :layout="jcfButtonGroup_19.layout"
    :logic="jcfButtonGroup_19_logic"
  >
  </JCFButtonGroup>
  <JCFLabel
    :bounds="jcfLabel_20.bounds"
    :text="jcfLabel_20.text"
    :logic="jcfLabel_20_logic"
  />
  <JCFComboBox
    :bounds="jcfComboBox_21.bounds"
    :id="jcfComboBox_21.id"
    :selectableElements="jcfComboBox_21.selectableElements"
    :font="jcfComboBox_21.font"
    :logic="jcfComboBox_21_logic"
  />
  <JCFLabel
    :bounds="jcfLabel_22.bounds"
    :background="jcfLabel_22.background"
    :text="jcfLabel_22.text"
    :logic="jcfLabel_22_logic"
  />
  <JCFLabel
    :bounds="jcfLabel_23.bounds"
    :text="jcfLabel_23.text"
    :logic="jcfLabel_23_logic"
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
  <JCFPushButton
    :bounds="jcfPushButton_25.bounds"
    :id="jcfPushButton_25.id"
    :label="jcfPushButton_25.label"
    :font="jcfPushButton_25.font"
    :pushedActionCode="jcfPushButton_25.pushedActionCode"
    :logic="jcfPushButton_25_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_26.bounds"
    :id="jcfFieldString_26.id"
    :enabled="jcfFieldString_26.enabled"
    :editable="jcfFieldString_26.editable"
    :borderType="jcfFieldString_26.borderType"
    :inactiveForeground="jcfFieldString_26.inactiveForeground"
    :enableType="jcfFieldString_26.enableType"
    :logic="jcfFieldString_26_logic"
  />
  <JCFLabel
    :bounds="jcfLabel_27.bounds"
    :text="jcfLabel_27.text"
    :logic="jcfLabel_27_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_28.bounds"
    :id="jcfFieldString_28.id"
    :inputMode="jcfFieldString_28.inputMode"
    :maxLength="jcfFieldString_28.maxLength"
    :maxByteLength="jcfFieldString_28.maxByteLength"
    :enableType="jcfFieldString_28.enableType"
    :logic="jcfFieldString_28_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_29.bounds"
    :enabled="jcfFieldString_29.enabled"
    :editable="jcfFieldString_29.editable"
    :borderType="jcfFieldString_29.borderType"
    :inactiveForeground="jcfFieldString_29.inactiveForeground"
    :text="jcfFieldString_29.text"
    :logic="jcfFieldString_29_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_30.bounds"
    :id="jcfFieldString_30.id"
    :inputMode="jcfFieldString_30.inputMode"
    :maxLength="jcfFieldString_30.maxLength"
    :maxByteLength="jcfFieldString_30.maxByteLength"
    :enableType="jcfFieldString_30.enableType"
    :logic="jcfFieldString_30_logic"
  />
  <JCFPushButton
    :bounds="jcfPushButton_31.bounds"
    :id="jcfPushButton_31.id"
    :label="jcfPushButton_31.label"
    :font="jcfPushButton_31.font"
    :pushedActionCode="jcfPushButton_31.pushedActionCode"
    :logic="jcfPushButton_31_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_32.bounds"
    :id="jcfFieldString_32.id"
    :enabled="jcfFieldString_32.enabled"
    :editable="jcfFieldString_32.editable"
    :borderType="jcfFieldString_32.borderType"
    :inactiveForeground="jcfFieldString_32.inactiveForeground"
    :logic="jcfFieldString_32_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_33.bounds"
    :enabled="jcfFieldString_33.enabled"
    :editable="jcfFieldString_33.editable"
    :borderType="jcfFieldString_33.borderType"
    :inactiveForeground="jcfFieldString_33.inactiveForeground"
    :text="jcfFieldString_33.text"
    :logic="jcfFieldString_33_logic"
  />
  <JCFFieldString
    :bounds="jcfFieldString_34.bounds"
    :id="jcfFieldString_34.id"
    :enabled="jcfFieldString_34.enabled"
    :editable="jcfFieldString_34.editable"
    :borderType="jcfFieldString_34.borderType"
    :inactiveForeground="jcfFieldString_34.inactiveForeground"
    :logic="jcfFieldString_34_logic"
  />
</JCFPanelLayout>
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import {
  JCFButtonGroup,
  JCFLabel,
  JCFPanelLayout,
  JCFFieldString,
  SMSJCFSpread,
  JCFToggleButton,
  JCFComboBox,
  JCFPushButton,
  SystemColor,
  Color,
  JFAlignment,
  CJSpread,
  JFField,
  JFEnableType,
  JFLineType,
  Font,
  EComponentName,
  Dimension,
  JCFSelectableElement
} from '@/components/jcf/entry'

import { installInstance } from '@/components/jcf/utils/instance'
import type { JCFSpreadHeaderAndColumnProperty } from '@/components/jcf/JCFSpread/types'
import { JCFSpread } from '@/components/jcf/JCFSpread/static'
import { JCFSpreadColumnInfoProperty } from '@/lib/jcf/gui/JCFSpreadColumnInfoProperty'
import {spreadColumnInfo} from '@/components/jcf/JCFSpread/data'

// ロジックを導入する。
import Logic from '../logic/YBMKKSF621SLogic'

// User custom logic flag: True,True

const jcfLayoutProps = {
    foreground:Color.black,
    layout:null,
    font:new Font('Monospaced', Font.PLAIN, 14),
    dimension:new Dimension(1000, 510),
  }
const jcfButtonGroup_1 = {
    bounds:[64, 16, 576, 160],
    label:`複写元`,
    name:`JCFButtonGroup9`,
    layout:null,
  }
  const jcfButtonGroup_1_logic = installInstance(
    EComponentName.JCFButtonGroup,
    jcfButtonGroup_1,
)

const jcfLabel_2 = {
    bounds:[80, 40, 144, 24],
    text:`*&nbsp;配賦区分　　　　：`,
  }
  const jcfLabel_2_logic = installInstance(
    EComponentName.JCFLabel,
    jcfLabel_2,
)
const jcfButtonGroup_3 = {
    bounds:[224, 40, 232, 24],
    enabled:false,
    borderWidth:0,
    borderType:JFLineType.NOTHING,
    name:`JCFButtonGroup1`,
    layout:null,
  }
  const jcfButtonGroup_3_logic = installInstance(
    EComponentName.JCFButtonGroup,
    jcfButtonGroup_3,
)
const jcfToggleButton_4 = {
    bounds:[0, 0, 120, 24],
    name:`jcfToggleButton_4`,
    id:`jigyouTourokuHiritsu`,
    enabled:false,
    label:`事業登録比率`,
  }
  const jcfToggleButton_4_logic = installInstance(
    EComponentName.JCFToggleButton,
    jcfToggleButton_4,
)
const jcfToggleButton_5 = {
    bounds:[120, 0, 104, 24],
    name:`jcfToggleButton_5`,
    id:`lineHiritsu`,
    enabled:false,
    label:`ライン比率`,
    pushedActionCode:`stHaifuSelected4`,
  }
  const jcfToggleButton_5_logic = installInstance(
    EComponentName.JCFToggleButton,
    jcfToggleButton_5,
)

const jcfLabel_6 = {
    bounds:[80, 72, 144, 24],
    text:`*&nbsp;年度　　　　　　：`,
  }
  const jcfLabel_6_logic = installInstance(
    EComponentName.JCFLabel,
    jcfLabel_6,
)

const jcfComboBox_7 = {
    bounds:[224, 72, 64, 24],
    id:`dtNendo`,
    enabled:false,
    selectableElements:[],
    font:new Font('Monospaced', Font.PLAIN, 12),
  }
  const jcfComboBox_7_logic = installInstance(
    EComponentName.JCFComboBox,
    jcfComboBox_7,
)

const jcfLabel_8 = {
    bounds:[296, 72, 24, 24],
    background:Color.white,
    text:`年`,
  }
  const jcfLabel_8_logic = installInstance(
    EComponentName.JCFLabel,
    jcfLabel_8,
)

const jcfLabel_9 = {
    bounds:[80, 104, 144, 24],
    text:`*&nbsp;組織　　　　　　：`,
  }
  const jcfLabel_9_logic = installInstance(
    EComponentName.JCFLabel,
    jcfLabel_9,
)

const jcfFieldString_10 = {
    bounds:[224, 104, 48, 24],
    id:`cdSoshiki`,
    enabled:false,
    inputMode:JFField.MODE_NATIVE,
    maxLength:6,
    maxByteLength:6,
    enableType:JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
  }
  const jcfFieldString_10_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_10,
)

const jcfFieldString_11 = {
    bounds:[280, 104, 112, 24],
    id:`nmSoshiki`,
    enabled:false,
    editable:false,
    borderType:JFLineType.NOTHING,
    inactiveForeground:SystemColor.windowText,
    enableType:JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
  }
  const jcfFieldString_11_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_11,
)

const jcfLabel_12 = {
    bounds:[80, 136, 144, 24],
    text:`&nbsp;&nbsp;科目－補助科目　：`,
  }
  const jcfLabel_12_logic = installInstance(
    EComponentName.JCFLabel,
    jcfLabel_12,
)

const jcfFieldString_13 = {
    bounds:[224, 136, 40, 24],
    id:`cdKanjokamoku`,
    enabled:false,
    editable:false,
    inputMode:JFField.MODE_NATIVE,
    maxLength:5,
    maxByteLength:5,
    enableType:JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
  }
  const jcfFieldString_13_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_13,
)

const jcfFieldString_14 = {
    bounds:[272, 136, 24, 24],
    enabled:false,
    editable:false,
    borderType:JFLineType.NOTHING,
    inactiveForeground:SystemColor.windowText,
    text:`－`,
  }
  const jcfFieldString_14_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_14,
)

const jcfFieldString_15 = {
    bounds:[296, 136, 48, 24],
    id:`cdHojokamoku`,
    enabled:false,
    editable:false,
    inputMode:JFField.MODE_NATIVE,
    maxLength:6,
    maxByteLength:6,
    enableType:JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
  }
  const jcfFieldString_15_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_15,
)

const jcfFieldString_16 = {
    bounds:[352, 136, 112, 24],
    id:`nmKanjokamoku`,
    enabled:false,
    editable:false,
    borderType:JFLineType.NOTHING,
    inactiveForeground:SystemColor.windowText,
  }
  const jcfFieldString_16_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_16,
)

const jcfFieldString_17 = {
    bounds:[472, 136, 24, 24],
    enabled:false,
    editable:false,
    borderType:JFLineType.NOTHING,
    inactiveForeground:SystemColor.windowText,
    text:`－`,
  }
  const jcfFieldString_17_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_17,
)

const jcfFieldString_18 = {
    bounds:[488, 136, 112, 24],
    id:`nmHojokamoku`,
    enabled:false,
    editable:false,
    borderType:JFLineType.NOTHING,
    inactiveForeground:SystemColor.windowText,
  }
  const jcfFieldString_18_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_18,
)
const jcfButtonGroup_19 = {
    bounds:[64, 216, 576, 144],
    label:`複写先`,
    name:`JCFButtonGroup10`,
    layout:null,
  }
  const jcfButtonGroup_19_logic = installInstance(
    EComponentName.JCFButtonGroup,
    jcfButtonGroup_19,
)

const jcfLabel_20 = {
    bounds:[80, 248, 144, 24],
    text:`*&nbsp;年度　　　　　　：`,
  }
  const jcfLabel_20_logic = installInstance(
    EComponentName.JCFLabel,
    jcfLabel_20,
)

const jcfComboBox_21 = {
    bounds:[224, 248, 64, 24],
    id:`dtNendoDown`,
    selectableElements:[],
    font:new Font('Monospaced', Font.PLAIN, 12),
  }
  const jcfComboBox_21_logic = installInstance(
    EComponentName.JCFComboBox,
    jcfComboBox_21,
)

const jcfLabel_22 = {
    bounds:[296, 248, 24, 24],
    background:Color.white,
    text:`年`,
  }
  const jcfLabel_22_logic = installInstance(
    EComponentName.JCFLabel,
    jcfLabel_22,
)

const jcfLabel_23 = {
    bounds:[80, 280, 144, 24],
    text:`*&nbsp;組織　　　　　　：`,
  }
  const jcfLabel_23_logic = installInstance(
    EComponentName.JCFLabel,
    jcfLabel_23,
)

const jcfFieldString_24 = {
    bounds:[224, 280, 48, 24],
    id:`cdSoshikiDown`,
    inputMode:JFField.MODE_NATIVE,
    maxLength:6,
    maxByteLength:6,
    enableType:JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
  }
  const jcfFieldString_24_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_24,
)

const jcfPushButton_25 = {
    bounds:[272, 280, 32, 24],
    id:`body_button17`,
    label:`検索`,
    font:new Font('Monospaced', Font.PLAIN, 12),
    pushedActionCode:`body_button17`,
  }
  const jcfPushButton_25_logic = installInstance(
    EComponentName.JCFPushButton,
    jcfPushButton_25,
)

const jcfFieldString_26 = {
    bounds:[304, 280, 112, 24],
    id:`nmSoshikiRyakuDown`,
    enabled:false,
    editable:false,
    borderType:JFLineType.NOTHING,
    inactiveForeground:SystemColor.windowText,
    enableType:JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
  }
  const jcfFieldString_26_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_26,
)

const jcfLabel_27 = {
    bounds:[80, 312, 144, 24],
    text:`&nbsp;&nbsp;科目－補助科目　：`,
  }
  const jcfLabel_27_logic = installInstance(
    EComponentName.JCFLabel,
    jcfLabel_27,
)

const jcfFieldString_28 = {
    bounds:[224, 312, 40, 24],
    id:`cdKamokuDown`,
    inputMode:JFField.MODE_NATIVE,
    maxLength:5,
    maxByteLength:5,
    enableType:JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
  }
  const jcfFieldString_28_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_28,
)

const jcfFieldString_29 = {
    bounds:[272, 312, 24, 24],
    enabled:false,
    editable:false,
    borderType:JFLineType.NOTHING,
    inactiveForeground:SystemColor.windowText,
    text:`－`,
  }
  const jcfFieldString_29_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_29,
)

const jcfFieldString_30 = {
    bounds:[296, 312, 48, 24],
    id:`cdHojyoKamokuDown`,
    inputMode:JFField.MODE_NATIVE,
    maxLength:6,
    maxByteLength:6,
    enableType:JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
  }
  const jcfFieldString_30_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_30,
)

const jcfPushButton_31 = {
    bounds:[344, 312, 32, 24],
    id:`body_button18`,
    label:`検索`,
    font:new Font('Monospaced', Font.PLAIN, 12),
    pushedActionCode:`body_button18`,
  }
  const jcfPushButton_31_logic = installInstance(
    EComponentName.JCFPushButton,
    jcfPushButton_31,
)

const jcfFieldString_32 = {
    bounds:[376, 312, 112, 24],
    id:`nmKamokuRyakuDown`,
    enabled:false,
    editable:false,
    borderType:JFLineType.NOTHING,
    inactiveForeground:SystemColor.windowText,
  }
  const jcfFieldString_32_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_32,
)

const jcfFieldString_33 = {
    bounds:[496, 312, 24, 24],
    enabled:false,
    editable:false,
    borderType:JFLineType.NOTHING,
    inactiveForeground:SystemColor.windowText,
    text:`－`,
  }
  const jcfFieldString_33_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_33,
)

const jcfFieldString_34 = {
    bounds:[512, 312, 112, 24],
    id:`nmHojyoKamokuRyakuDown`,
    enabled:false,
    editable:false,
    borderType:JFLineType.NOTHING,
    inactiveForeground:SystemColor.windowText,
  }
  const jcfFieldString_34_logic = installInstance(
    EComponentName.JCFFieldString,
    jcfFieldString_34,
)
const logic = new Logic()
</script>

