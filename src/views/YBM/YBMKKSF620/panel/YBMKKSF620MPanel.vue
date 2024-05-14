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
      :text="jcfLabel_1.text"
      :logic="jcfLabel_1_logic"
    />

    <JCFButtonGroup
      :bounds="jcfButtonGroup_2.bounds"
      :borderWidth="jcfButtonGroup_2.borderWidth"
      :borderType="jcfButtonGroup_2.borderType"
      :layout="jcfButtonGroup_2.layout"
      :logic="jcfButtonGroup_2_logic"
    >
      <JCFToggleButton
        :bounds="jcfToggleButton_3.bounds"
        :name="jcfToggleButton_3.name"
        :id="jcfToggleButton_3.id"
        :label="jcfToggleButton_3.label"
        :logic="jcfToggleButton_3_logic"
      />
      <JCFToggleButton
        :bounds="jcfToggleButton_4.bounds"
        :name="jcfToggleButton_4.name"
        :id="jcfToggleButton_4.id"
        :label="jcfToggleButton_4.label"
        :pushedActionCode="jcfToggleButton_4.pushedActionCode"
        :logic="jcfToggleButton_4_logic"
      />
    </JCFButtonGroup>
    <JCFLabel
      :bounds="jcfLabel_5.bounds"
      :text="jcfLabel_5.text"
      :logic="jcfLabel_5_logic"
    />
    <JCFComboBox
      :bounds="jcfComboBox_6.bounds"
      :id="jcfComboBox_6.id"
      :selectableElements="jcfComboBox_6.selectableElements"
      :font="jcfComboBox_6.font"
      :logic="jcfComboBox_6_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_7.bounds"
      :background="jcfLabel_7.background"
      :text="jcfLabel_7.text"
      :logic="jcfLabel_7_logic"
    />
    <JCFPushButton
      :bounds="jcfPushButton_8.bounds"
      :id="jcfPushButton_8.id"
      :label="jcfPushButton_8.label"
      :font="jcfPushButton_8.font"
      :pushedActionCode="jcfPushButton_8.pushedActionCode"
      :logic="jcfPushButton_8_logic"
    />
    <JCFPushButton
      :bounds="jcfPushButton_9.bounds"
      :id="jcfPushButton_9.id"
      :label="jcfPushButton_9.label"
      :font="jcfPushButton_9.font"
      :pushedActionCode="jcfPushButton_9.pushedActionCode"
      :logic="jcfPushButton_9_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_10.bounds"
      :text="jcfLabel_10.text"
      :logic="jcfLabel_10_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_11.bounds"
      :id="jcfFieldString_11.id"
      :inputMode="jcfFieldString_11.inputMode"
      :maxLength="jcfFieldString_11.maxLength"
      :maxByteLength="jcfFieldString_11.maxByteLength"
      :enableType="jcfFieldString_11.enableType"
      :logic="jcfFieldString_11_logic"
    />
    <JCFPushButton
      :bounds="jcfPushButton_12.bounds"
      :id="jcfPushButton_12.id"
      :label="jcfPushButton_12.label"
      :font="jcfPushButton_12.font"
      :pushedActionCode="jcfPushButton_12.pushedActionCode"
      :logic="jcfPushButton_12_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_13.bounds"
      :id="jcfFieldString_13.id"
      :enabled="jcfFieldString_13.enabled"
      :editable="jcfFieldString_13.editable"
      :borderType="jcfFieldString_13.borderType"
      :inactiveForeground="jcfFieldString_13.inactiveForeground"
      :logic="jcfFieldString_13_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_14.bounds"
      :text="jcfLabel_14.text"
      :logic="jcfLabel_14_logic"
    />
    <YUKIFieldLong
      :bounds="yukiFieldLong_15.bounds"
      :borderType="yukiFieldLong_15.borderType"
      :id="yukiFieldLong_15.id"
      :enabled="yukiFieldLong_15.enabled"
      :inactiveForeground="yukiFieldLong_15.inactiveForeground"
      :value="yukiFieldLong_15.value"
      :logic="yukiFieldLong_15_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_16.bounds"
      :text="jcfLabel_16.text"
      :logic="jcfLabel_16_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_17.bounds"
      :text="jcfLabel_17.text"
      :logic="jcfLabel_17_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_18.bounds"
      :id="jcfFieldString_18.id"
      :inputMode="jcfFieldString_18.inputMode"
      :maxLength="jcfFieldString_18.maxLength"
      :maxByteLength="jcfFieldString_18.maxByteLength"
      :enableType="jcfFieldString_18.enableType"
      :logic="jcfFieldString_18_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_19.bounds"
      :text="jcfLabel_19.text"
      :logic="jcfLabel_19_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_20.bounds"
      :id="jcfFieldString_20.id"
      :inputMode="jcfFieldString_20.inputMode"
      :maxLength="jcfFieldString_20.maxLength"
      :maxByteLength="jcfFieldString_20.maxByteLength"
      :enableType="jcfFieldString_20.enableType"
      :logic="jcfFieldString_20_logic"
    />
    <JCFPushButton
      :bounds="jcfPushButton_21.bounds"
      :id="jcfPushButton_21.id"
      :label="jcfPushButton_21.label"
      :font="jcfPushButton_21.font"
      :pushedActionCode="jcfPushButton_21.pushedActionCode"
      :logic="jcfPushButton_21_logic"
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
    <JCFLabel
      :bounds="jcfLabel_23.bounds"
      :text="jcfLabel_23.text"
      :logic="jcfLabel_23_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_24.bounds"
      :id="jcfFieldString_24.id"
      :enabled="jcfFieldString_24.enabled"
      :editable="jcfFieldString_24.editable"
      :borderType="jcfFieldString_24.borderType"
      :inactiveForeground="jcfFieldString_24.inactiveForeground"
      :logic="jcfFieldString_24_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_25.bounds"
      :text="jcfLabel_25.text"
      :logic="jcfLabel_25_logic"
    />
    <SMSJCFSpread
      :headerAndColumnProperty="smsJCFSpread_26.headerAndColumnProperty"
      :id="smsJCFSpread_26.id"
      :scrollMask="smsJCFSpread_26.scrollMask"
      :defaultCellHeight="smsJCFSpread_26.defaultCellHeight"
      :keyOpenMode="smsJCFSpread_26.keyOpenMode"
      :doubleColor="smsJCFSpread_26.doubleColor"
      :closeMoveMode="smsJCFSpread_26.closeMoveMode"
      :bounds="smsJCFSpread_26.bounds"
      :logic="smsJCFSpread_26_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_27.bounds"
      :background="jcfLabel_27.background"
      :alignmentHorizontal="jcfLabel_27.alignmentHorizontal"
      :alignmentVertical="jcfLabel_27.alignmentVertical"
      :text="jcfLabel_27.text"
      :logic="jcfLabel_27_logic"
    />
    <YUKIFieldDouble
      :bounds="yukiFieldDouble_28.bounds"
      :id="yukiFieldDouble_28.id"
      :enabled="yukiFieldDouble_28.enabled"
      :borderWidth="yukiFieldDouble_28.borderWidth"
      :borderType="yukiFieldDouble_28.borderType"
      :borderColor="yukiFieldDouble_28.borderColor"
      :inactiveForeground="yukiFieldDouble_28.inactiveForeground"
      :alignmentHorizontal="yukiFieldDouble_28.alignmentHorizontal"
      :equalBackground="yukiFieldDouble_28.equalBackground"
      :greaterBackground="yukiFieldDouble_28.greaterBackground"
      :initialValueDisplay="yukiFieldDouble_28.initialValueDisplay"
      :lessBackground="yukiFieldDouble_28.lessBackground"
      :logic="yukiFieldDouble_28_logic"
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
    <JCFPushButton
      :bounds="jcfPushButton_32.bounds"
      :id="jcfPushButton_32.id"
      :label="jcfPushButton_32.label"
      :font="jcfPushButton_32.font"
      :pushedActionCode="jcfPushButton_32.pushedActionCode"
      :logic="jcfPushButton_32_logic"
    />
  </JCFPanelLayout>
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import {
  YUKIFieldDouble,
  YUKIFieldLong,
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
  JCFSelectableElement,
} from '@/components/jcf/entry'

import { installInstance } from '@/components/jcf/utils/instance'
import type { JCFSpreadHeaderAndColumnProperty } from '@/components/jcf/JCFSpread/types'
import { JCFSpread } from '@/components/jcf/JCFSpread/static'
import { JCFSpreadColumnInfoProperty } from '@/lib/jcf/gui/JCFSpreadColumnInfoProperty'
import { spreadColumnInfo } from '@/components/jcf/JCFSpread/data'

// ロジックを導入する。
import Logic from '../logic/YBMKKSF620MLogic'

// User custom logic flag: True,False

const spreadData = {
  columns: {
    headerColumns: 0,
    columnCount: 11,
    headerColumnInfo: null,
    columnInfo: [
      {
        baseColumnInfo: {
          width: 32,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.CENTER,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.CHECKBOX,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_EDITABLE |
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
        minimumWidth: 32,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 80,
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
          JCFSpreadColumnInfoProperty.COL_EDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE |
          JCFSpreadColumnInfoProperty.COL_AUTOIME |
          JCFSpreadColumnInfoProperty.COL_IMEONCURSOR |
          JCFSpreadColumnInfoProperty.COL_IMEMODE_NATIVE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: 6,
        minimumWidth: 80,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 32,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 12),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.CENTER,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.PUSHBUTTON,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_EDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '検索',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 32,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: 'body_button07',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 176,
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
        minimumWidth: 176,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 64,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.CENTER,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.NUMBER,
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
        minimumWidth: 32,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 64,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.CENTER,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.NUMBER,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_EDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_AUTOIME |
          JCFSpreadColumnInfoProperty.COL_IMEONCURSOR |
          JCFSpreadColumnInfoProperty.COL_IMEMODE_NATIVE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 64,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 64,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.CENTER,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.NUMBER,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_EDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_AUTOIME |
          JCFSpreadColumnInfoProperty.COL_IMEONCURSOR |
          JCFSpreadColumnInfoProperty.COL_IMEMODE_NATIVE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 64,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 64,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.CENTER,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.NUMBER,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_UNEDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 64,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 64,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.CENTER,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.NUMBER,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_UNEDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 64,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 144,
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
        pattern: 'yyyy/MM/dd H:mm:ss',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 144,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 144,
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
        minimumWidth: 144,
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
    columnCount: 11,
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
          title: '削除',
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
          title: '事業コード',
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
          title: '',
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
          title: '事業名',
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
          title: '階層',
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
          title: '予算比率',
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
          title: '実績比率',
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
          title: '前回予算',
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
          title: '前回実績',
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
          title: '更新日時',
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
          title: '更新者',
          sortColumn: null,
        },
      ],
    ],
    height: [24],
  },
  recordInfo: {
    layout: [
      [
        '__COL_0',
        '__COL_1',
        '__COL_2',
        '__COL_3',
        '__COL_4',
        '__COL_5',
        '__COL_6',
        '__COL_7',
        '__COL_8',
        '__COL_9',
        '__COL_10',
      ],
    ],
    colWidth: [64, 39, 80, 41, 80, 80, 80, 80, 80, 80, 80],
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
  bounds: [24, 8, 144, 24],
  text: `*&nbsp;配賦区分　　　　：`,
}
const jcfLabel_1_logic = installInstance(EComponentName.JCFLabel, jcfLabel_1)
const jcfButtonGroup_2 = {
  bounds: [168, 8, 408, 24],
  borderWidth: 0,
  borderType: JFLineType.NOTHING,
  name: `JCFButtonGroup1`,
  layout: null,
}
const jcfButtonGroup_2_logic = installInstance(
  EComponentName.JCFButtonGroup,
  jcfButtonGroup_2,
)
const jcfToggleButton_3 = {
  bounds: [0, 0, 112, 24],
  name: `jcfToggleButton_3`,
  id: `jigyoTorokuHiritsu`,
  label: `事業登録比率`,
}
const jcfToggleButton_3_logic = installInstance(
  EComponentName.JCFToggleButton,
  jcfToggleButton_3,
)
const jcfToggleButton_4 = {
  bounds: [120, 0, 264, 24],
  name: `jcfToggleButton_4`,
  id: `lineHiritsu`,
  label: `ライン比率（共通職場→ライン職場）`,
  pushedActionCode: `stHaifuSelected1`,
}
const jcfToggleButton_4_logic = installInstance(
  EComponentName.JCFToggleButton,
  jcfToggleButton_4,
)

const jcfLabel_5 = {
  bounds: [24, 40, 144, 24],
  text: `*&nbsp;年度　　　　　　：`,
}
const jcfLabel_5_logic = installInstance(EComponentName.JCFLabel, jcfLabel_5)

const jcfComboBox_6 = {
  bounds: [168, 40, 64, 24],
  id: `dtNendo`,
  selectableElements: [],
  font: new Font('Monospaced', Font.PLAIN, 12),
}
const jcfComboBox_6_logic = installInstance(
  EComponentName.JCFComboBox,
  jcfComboBox_6,
)

const jcfLabel_7 = {
  bounds: [240, 40, 24, 24],
  background: Color.white,
  text: `年`,
}
const jcfLabel_7_logic = installInstance(EComponentName.JCFLabel, jcfLabel_7)

const jcfPushButton_8 = {
  bounds: [848, 48, 32, 24],
  id: `fukusya`,
  label: `複写`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  pushedActionCode: `body_button02`,
}
const jcfPushButton_8_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_8,
)

const jcfPushButton_9 = {
  bounds: [896, 48, 32, 24],
  id: `body_button03`,
  label: `表示`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  pushedActionCode: `body_button03`,
}
const jcfPushButton_9_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_9,
)

const jcfLabel_10 = {
  bounds: [24, 72, 144, 24],
  text: `*&nbsp;組織　　　　　　：`,
}
const jcfLabel_10_logic = installInstance(EComponentName.JCFLabel, jcfLabel_10)

const jcfFieldString_11 = {
  bounds: [168, 72, 48, 24],
  id: `cdSoshiki`,
  inputMode: JFField.MODE_NATIVE,
  maxLength: 6,
  maxByteLength: 6,
  enableType: JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
}
const jcfFieldString_11_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_11,
)

const jcfPushButton_12 = {
  bounds: [216, 72, 32, 24],
  id: `body_button05`,
  label: `検索`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  pushedActionCode: `body_button05`,
}
const jcfPushButton_12_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_12,
)

const jcfFieldString_13 = {
  bounds: [248, 72, 112, 24],
  id: `nmSoshiki`,
  enabled: false,
  editable: false,
  borderType: JFLineType.NOTHING,
  inactiveForeground: SystemColor.textText,
}
const jcfFieldString_13_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_13,
)

const jcfLabel_14 = {
  bounds: [848, 80, 24, 24],
  text: `全`,
}
const jcfLabel_14_logic = installInstance(EComponentName.JCFLabel, jcfLabel_14)

const yukiFieldLong_15 = {
  bounds: [872, 80, 40, 24],
  borderType: JFLineType.NOTHING,
  id: `count`,
  enabled: false,
  inactiveForeground: SystemColor.textText,
  value: 0,
}
const yukiFieldLong_15_logic = installInstance(
  EComponentName.YUKIFieldLong,
  yukiFieldLong_15,
)

const jcfLabel_16 = {
  bounds: [920, 80, 24, 24],
  text: `件`,
}
const jcfLabel_16_logic = installInstance(EComponentName.JCFLabel, jcfLabel_16)

const jcfLabel_17 = {
  bounds: [24, 104, 144, 24],
  text: `　科目－補助科目&nbsp;&nbsp;：`,
}
const jcfLabel_17_logic = installInstance(EComponentName.JCFLabel, jcfLabel_17)

const jcfFieldString_18 = {
  bounds: [168, 104, 40, 24],
  id: `cdKanjokamoku`,
  inputMode: JFField.MODE_NATIVE,
  maxLength: 5,
  maxByteLength: 5,
  enableType: JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
}
const jcfFieldString_18_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_18,
)

const jcfLabel_19 = {
  bounds: [216, 104, 24, 24],
  text: `―`,
}
const jcfLabel_19_logic = installInstance(EComponentName.JCFLabel, jcfLabel_19)

const jcfFieldString_20 = {
  bounds: [240, 104, 48, 24],
  id: `cdHojokamoku`,
  inputMode: JFField.MODE_NATIVE,
  maxLength: 6,
  maxByteLength: 6,
  enableType: JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
}
const jcfFieldString_20_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_20,
)

const jcfPushButton_21 = {
  bounds: [288, 104, 32, 24],
  id: `body_button06`,
  label: `検索`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  pushedActionCode: `body_button06`,
}
const jcfPushButton_21_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_21,
)

const jcfFieldString_22 = {
  bounds: [328, 104, 112, 24],
  id: `nmKanjokamoku`,
  enabled: false,
  editable: false,
  borderType: JFLineType.NOTHING,
  inactiveForeground: SystemColor.textText,
}
const jcfFieldString_22_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_22,
)

const jcfLabel_23 = {
  bounds: [440, 104, 24, 24],
  text: `―`,
}
const jcfLabel_23_logic = installInstance(EComponentName.JCFLabel, jcfLabel_23)

const jcfFieldString_24 = {
  bounds: [464, 104, 112, 24],
  id: `nmHojokamoku`,
  enabled: false,
  editable: false,
  borderType: JFLineType.NOTHING,
  inactiveForeground: SystemColor.textText,
}
const jcfFieldString_24_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_24,
)

const jcfLabel_25 = {
  bounds: [856, 104, 88, 24],
  text: `（単位：％）`,
}
const jcfLabel_25_logic = installInstance(EComponentName.JCFLabel, jcfLabel_25)

const smsJCFSpread_26 = {
  headerAndColumnProperty: spreadData,
  id: `spread`,
  scrollMask: CJSpread.SCRL_VERTICALAUTO,
  defaultCellHeight: 24,
  keyOpenMode: true,
  doubleColor: true,
  closeMoveMode: 4,
  bounds: [24, 136, 928, 301],
}
const smsJCFSpread_26_logic = installInstance(
  EComponentName.SMSJCFSpread,
  smsJCFSpread_26,
)

const jcfLabel_27 = {
  bounds: [296, 456, 88, 24],
  background: new Color(182, 198, 250),
  alignmentHorizontal: JFAlignment.CENTER,
  alignmentVertical: JFAlignment.CENTER,
  text: `合　計`,
}
const jcfLabel_27_logic = installInstance(EComponentName.JCFLabel, jcfLabel_27)

const yukiFieldDouble_28 = {
  bounds: [384, 456, 64, 24],
  id: `sumYosanHiritsu`,
  enabled: false,
  borderWidth: 1,
  borderType: JFLineType.FLAT,
  borderColor: new Color(216, 228, 248),
  inactiveForeground: SystemColor.textText,
  alignmentHorizontal: JFAlignment.CENTER,
  equalBackground: new Color(237, 237, 237),
  greaterBackground: new Color(237, 237, 237),
  initialValueDisplay: false,
  lessBackground: new Color(237, 237, 237),
}
const yukiFieldDouble_28_logic = installInstance(
  EComponentName.YUKIFieldDouble,
  yukiFieldDouble_28,
)

const yukiFieldDouble_29 = {
  bounds: [448, 456, 64, 24],
  id: `sumJissekiHiritsu`,
  enabled: false,
  borderWidth: 1,
  borderType: JFLineType.FLAT,
  borderColor: new Color(216, 228, 248),
  inactiveForeground: SystemColor.textText,
  alignmentHorizontal: JFAlignment.CENTER,
  equalBackground: new Color(237, 237, 237),
  greaterBackground: new Color(237, 237, 237),
  initialValueDisplay: false,
  lessBackground: new Color(237, 237, 237),
}
const yukiFieldDouble_29_logic = installInstance(
  EComponentName.YUKIFieldDouble,
  yukiFieldDouble_29,
)

const yukiFieldDouble_30 = {
  bounds: [512, 456, 64, 24],
  id: `sumZenkaiYosan`,
  enabled: false,
  borderWidth: 1,
  borderType: JFLineType.FLAT,
  borderColor: new Color(216, 228, 248),
  inactiveForeground: SystemColor.textText,
  alignmentHorizontal: JFAlignment.CENTER,
  equalBackground: new Color(237, 237, 237),
  greaterBackground: new Color(237, 237, 237),
  initialValueDisplay: false,
  lessBackground: new Color(237, 237, 237),
}
const yukiFieldDouble_30_logic = installInstance(
  EComponentName.YUKIFieldDouble,
  yukiFieldDouble_30,
)

const yukiFieldDouble_31 = {
  bounds: [576, 456, 64, 24],
  id: `sumZenkaiJisseki`,
  enabled: false,
  borderWidth: 1,
  borderType: JFLineType.FLAT,
  borderColor: new Color(216, 228, 248),
  inactiveForeground: SystemColor.textText,
  alignmentHorizontal: JFAlignment.CENTER,
  equalBackground: new Color(237, 237, 237),
  greaterBackground: new Color(237, 237, 237),
  initialValueDisplay: false,
  lessBackground: new Color(237, 237, 237),
}
const yukiFieldDouble_31_logic = installInstance(
  EComponentName.YUKIFieldDouble,
  yukiFieldDouble_31,
)

const jcfPushButton_32 = {
  bounds: [888, 456, 48, 24],
  id: `addRow`,
  label: `行追加`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  pushedActionCode: `body_button04`,
}
const jcfPushButton_32_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_32,
)
const logic = new Logic()
</script>
