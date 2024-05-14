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
    <JCFLabel
      :bounds="jcfLabel_1.bounds"
      :name="jcfLabel_1.name"
      :text="jcfLabel_1.text"
      :logic="jcfLabel_1_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_2.bounds"
      :id="jcfFieldString_2.id"
      :editable="jcfFieldString_2.editable"
      :borderType="jcfFieldString_2.borderType"
      :name="jcfFieldString_2.name"
      :focusable="jcfFieldString_2.focusable"
      :caretVisible="jcfFieldString_2.caretVisible"
      :logic="jcfFieldString_2_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_3.bounds"
      :name="jcfLabel_3.name"
      :text="jcfLabel_3.text"
      :logic="jcfLabel_3_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_4.bounds"
      :id="jcfFieldString_4.id"
      :editable="jcfFieldString_4.editable"
      :borderType="jcfFieldString_4.borderType"
      :name="jcfFieldString_4.name"
      :focusable="jcfFieldString_4.focusable"
      :caretVisible="jcfFieldString_4.caretVisible"
      :logic="jcfFieldString_4_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_5.bounds"
      :text="jcfLabel_5.text"
      :logic="jcfLabel_5_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_6.bounds"
      :name="jcfLabel_6.name"
      :text="jcfLabel_6.text"
      :logic="jcfLabel_6_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_7.bounds"
      :id="jcfFieldString_7.id"
      :editable="jcfFieldString_7.editable"
      :borderType="jcfFieldString_7.borderType"
      :name="jcfFieldString_7.name"
      :focusable="jcfFieldString_7.focusable"
      :caretVisible="jcfFieldString_7.caretVisible"
      :logic="jcfFieldString_7_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_8.bounds"
      :name="jcfLabel_8.name"
      :text="jcfLabel_8.text"
      :logic="jcfLabel_8_logic"
    />
    <JCFComboBox
      :bounds="jcfComboBox_9.bounds"
      :id="jcfComboBox_9.id"
      :selectableElements="jcfComboBox_9.selectableElements"
      :font="jcfComboBox_9.font"
      :logic="jcfComboBox_9_logic"
    />
    <JCFPushButton
      :bounds="jcfPushButton_10.bounds"
      :id="jcfPushButton_10.id"
      :label="jcfPushButton_10.label"
      :font="jcfPushButton_10.font"
      :name="jcfPushButton_10.name"
      :logic="jcfPushButton_10_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_11.bounds"
      :name="jcfLabel_11.name"
      :text="jcfLabel_11.text"
      :logic="jcfLabel_11_logic"
    />
    <YUKIFieldLong
      :bounds="yukiFieldLong_12.bounds"
      :borderType="yukiFieldLong_12.borderType"
      :id="yukiFieldLong_12.id"
      :enabled="yukiFieldLong_12.enabled"
      :inactiveForeground="yukiFieldLong_12.inactiveForeground"
      :value="yukiFieldLong_12.value"
      :caretVisible="yukiFieldLong_12.caretVisible"
      :editable="yukiFieldLong_12.editable"
      :logic="yukiFieldLong_12_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_13.bounds"
      :name="jcfLabel_13.name"
      :text="jcfLabel_13.text"
      :logic="jcfLabel_13_logic"
    />
    <SMSJCFSpread
      :headerAndColumnProperty="smsJCFSpread_14.headerAndColumnProperty"
      :id="smsJCFSpread_14.id"
      :doubleColor="smsJCFSpread_14.doubleColor"
      :bounds="smsJCFSpread_14.bounds"
      :editable="smsJCFSpread_14.editable"
      :envFontEnabled="smsJCFSpread_14.envFontEnabled"
      :logic="smsJCFSpread_14_logic"
    />
  </JCFPanelLayout>
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import {
  YUKIFieldLong,
  JCFLabel,
  JCFPanelLayout,
  JCFFieldString,
  SMSJCFSpread,
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
  JCFSelectableElement,
} from '@/components/jcf/entry'

import { installInstance } from '@/components/jcf/utils/instance'
import type { JCFSpreadHeaderAndColumnProperty } from '@/components/jcf/JCFSpread/types'
import { JCFSpread } from '@/components/jcf/JCFSpread/static'
import { JCFSpreadColumnInfoProperty } from '@/lib/jcf/gui/JCFSpreadColumnInfoProperty'
import { spreadColumnInfo } from '@/components/jcf/JCFSpread/data'

// ロジックを導入する。
import Logic from '../logic/YBMKKSF627SLogic'

// User custom logic flag: True,True

const spreadData = {
  columns: {
    headerColumns: 1,
    columnCount: 2,
    headerColumnInfo: null,
    columnInfo: [
      {
        baseColumnInfo: {
          width: 60,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.LEFT,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.STRING,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_UNEDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 60,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 416,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.LEFT,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.STRING,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_UNEDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 416,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
    ],
  },
  header: {
    rowCount: 1,
    columnCount: 3,
    headerCell: [
      [
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(182, 198, 250),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(182, 198, 250),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: 'No',
          sortColumn: null,
        },
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(182, 198, 250),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(182, 198, 250),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: '行No',
          sortColumn: null,
        },
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(182, 198, 250),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(182, 198, 250),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: 'エラー種別',
          sortColumn: null,
        },
      ],
    ],
    height: [24],
  },
  recordInfo: {
    layout: [['__COL_0', '__COL_1']],
    colWidth: [40, 36],
    rowHeight: [24],
    fixedColumns: 0,
  },
}

const jcfLayoutProps = {
  foreground: Color.black,
  layout: null,
  font: new Font('Monospaced', Font.PLAIN, 14),
  dimension: new Dimension(1000, 510),
}

const jcfLabel_1 = {
  bounds: [16, 8, 128, 24],
  name: `JCFLabel1`,
  text: `処理依頼番号　：`,
}
const jcfLabel_1_logic = installInstance(EComponentName.JCFLabel, jcfLabel_1)

const jcfFieldString_2 = {
  bounds: [144, 8, 48, 24],
  id: `noShori`,
  editable: false,
  borderType: JFLineType.NOTHING,
  name: `JCFFieldString1`,
  focusable: false,
  caretVisible: false,
}
const jcfFieldString_2_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_2,
)

const jcfLabel_3 = {
  bounds: [504, 8, 128, 24],
  name: `JCFLabel2`,
  text: `年度　　　　　：`,
}
const jcfLabel_3_logic = installInstance(EComponentName.JCFLabel, jcfLabel_3)

const jcfFieldString_4 = {
  bounds: [632, 8, 32, 24],
  id: `dtNendo`,
  editable: false,
  borderType: JFLineType.NOTHING,
  name: `JCFFieldString2`,
  focusable: false,
  caretVisible: false,
}
const jcfFieldString_4_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_4,
)

const jcfLabel_5 = {
  bounds: [664, 8, 24, 24],
  text: `年`,
}
const jcfLabel_5_logic = installInstance(EComponentName.JCFLabel, jcfLabel_5)

const jcfLabel_6 = {
  bounds: [16, 40, 128, 24],
  name: `JCFLabel5`,
  text: `配賦区分　　　：`,
}
const jcfLabel_6_logic = installInstance(EComponentName.JCFLabel, jcfLabel_6)

const jcfFieldString_7 = {
  bounds: [144, 40, 256, 24],
  id: `kbnHaifu`,
  editable: false,
  borderType: JFLineType.NOTHING,
  name: `JCFFieldString5`,
  focusable: false,
  caretVisible: false,
}
const jcfFieldString_7_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_7,
)

const jcfLabel_8 = {
  bounds: [504, 40, 128, 24],
  name: `JCFLabel6`,
  text: `エラー種別　　：`,
}
const jcfLabel_8_logic = installInstance(EComponentName.JCFLabel, jcfLabel_8)

const jcfComboBox_9 = {
  bounds: [632, 40, 248, 24],
  id: `stError`,
  selectableElements: [new JCFSelectableElement('全て', '00', true)],
  font: new Font('Monospaced', Font.PLAIN, 12),
}
const jcfComboBox_9_logic = installInstance(
  EComponentName.JCFComboBox,
  jcfComboBox_9,
)

const jcfPushButton_10 = {
  bounds: [496, 72, 32, 24],
  id: `button1`,
  label: `表示`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  name: `JCFPushButton１`,
}
const jcfPushButton_10_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_10,
)

const jcfLabel_11 = {
  bounds: [440, 104, 32, 24],
  name: `JCFLabel17`,
  text: `全`,
}
const jcfLabel_11_logic = installInstance(EComponentName.JCFLabel, jcfLabel_11)

const yukiFieldLong_12 = {
  bounds: [472, 104, 40, 24],
  borderType: JFLineType.NOTHING,
  id: `kensu`,
  enabled: false,
  inactiveForeground: SystemColor.controlText,
  value: 0,
  caretVisible: false,
  editable: false,
}
const yukiFieldLong_12_logic = installInstance(
  EComponentName.YUKIFieldLong,
  yukiFieldLong_12,
)

const jcfLabel_13 = {
  bounds: [512, 104, 32, 24],
  name: `JCFLabel8`,
  text: `件`,
}
const jcfLabel_13_logic = installInstance(EComponentName.JCFLabel, jcfLabel_13)

const smsJCFSpread_14 = {
  headerAndColumnProperty: spreadData,
  id: `spread`,
  doubleColor: true,
  bounds: [16, 136, 528, 352],
  editable: true,
  envFontEnabled: true,
}
const smsJCFSpread_14_logic = installInstance(
  EComponentName.SMSJCFSpread,
  smsJCFSpread_14,
)
const logic = new Logic()
</script>
