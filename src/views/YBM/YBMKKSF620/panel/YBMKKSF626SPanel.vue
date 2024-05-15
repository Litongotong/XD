<template>
  <JCFPanelLayout
    :foreground="jcfLayoutProps.foreground"
    :layout="jcfLayoutProps.layout"
    :font="jcfLayoutProps.font"
    :dimension="jcfLayoutProps.dimension"
  >
    <JCFLines :bounds="jcfLines_1.bounds" :logic="jcfLines_1_logic" />
    <JCFLabel
      :bounds="jcfLabel_2.bounds"
      :text="jcfLabel_2.text"
      :logic="jcfLabel_2_logic"
    />

    <JCFButtonGroup
      :bounds="jcfButtonGroup_3.bounds"
      :borderType="jcfButtonGroup_3.borderType"
      :layout="jcfButtonGroup_3.layout"
      :logic="jcfButtonGroup_3_logic"
    >
      <JCFToggleButton
        :bounds="jcfToggleButton_4.bounds"
        :name="jcfToggleButton_4.name"
        :id="jcfToggleButton_4.id"
        :label="jcfToggleButton_4.label"
        :logic="jcfToggleButton_4_logic"
      />
      <JCFToggleButton
        :bounds="jcfToggleButton_5.bounds"
        :name="jcfToggleButton_5.name"
        :id="jcfToggleButton_5.id"
        :label="jcfToggleButton_5.label"
        :pushedActionCode="jcfToggleButton_5.pushedActionCode"
        :logic="jcfToggleButton_5_logic"
      />
    </JCFButtonGroup>

    <JCFGroupBox
      :bounds="jcfGroupBox_6.bounds"
      :layout="jcfGroupBox_6.layout"
      :logic="jcfGroupBox_6_logic"
    >
    </JCFGroupBox>
    <JCFLabel
      :bounds="jcfLabel_7.bounds"
      :name="jcfLabel_7.name"
      :text="jcfLabel_7.text"
      :logic="jcfLabel_7_logic"
    />
    <SMSFileDialog
      :bounds="smsFileDialog_8.bounds"
      :id="smsFileDialog_8.id"
      :fileType="smsFileDialog_8.fileType"
      :logic="smsFileDialog_8_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_9.bounds"
      :text="jcfLabel_9.text"
      :logic="jcfLabel_9_logic"
    />
    <JCFLines
      :bounds="jcfLines_10.bounds"
      :font="jcfLines_10.font"
      :logic="jcfLines_10_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_11.bounds"
      :name="jcfLabel_11.name"
      :text="jcfLabel_11.text"
      :logic="jcfLabel_11_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_12.bounds"
      :id="jcfFieldString_12.id"
      :inputMode="jcfFieldString_12.inputMode"
      :maxLength="jcfFieldString_12.maxLength"
      :enableType="jcfFieldString_12.enableType"
      :logic="jcfFieldString_12_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_13.bounds"
      :name="jcfLabel_13.name"
      :text="jcfLabel_13.text"
      :logic="jcfLabel_13_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_14.bounds"
      :id="jcfFieldString_14.id"
      :inputMode="jcfFieldString_14.inputMode"
      :maxLength="jcfFieldString_14.maxLength"
      :enableType="jcfFieldString_14.enableType"
      :logic="jcfFieldString_14_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_15.bounds"
      :name="jcfLabel_15.name"
      :text="jcfLabel_15.text"
      :logic="jcfLabel_15_logic"
    />

    <JCFButtonGroup
      :bounds="jcfButtonGroup_16.bounds"
      :borderType="jcfButtonGroup_16.borderType"
      :layout="jcfButtonGroup_16.layout"
      :logic="jcfButtonGroup_16_logic"
    >
      <JCFToggleButton
        :bounds="jcfToggleButton_17.bounds"
        :name="jcfToggleButton_17.name"
        :id="jcfToggleButton_17.id"
        :label="jcfToggleButton_17.label"
        :logic="jcfToggleButton_17_logic"
      />
      <JCFToggleButton
        :bounds="jcfToggleButton_18.bounds"
        :name="jcfToggleButton_18.name"
        :id="jcfToggleButton_18.id"
        :label="jcfToggleButton_18.label"
        :logic="jcfToggleButton_18_logic"
      />
    </JCFButtonGroup>
    <JCFLabel
      :bounds="jcfLabel_19.bounds"
      :text="jcfLabel_19.text"
      :logic="jcfLabel_19_logic"
    />
    <YUKIFieldFilledDate
      :bounds="yukiFieldFilledDate_20.bounds"
      :id="yukiFieldFilledDate_20.id"
      :logic="yukiFieldFilledDate_20_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_21.bounds"
      :alignmentHorizontal="jcfLabel_21.alignmentHorizontal"
      :text="jcfLabel_21.text"
      :logic="jcfLabel_21_logic"
    />
    <YUKIFieldFilledDate
      :bounds="yukiFieldFilledDate_22.bounds"
      :id="yukiFieldFilledDate_22.id"
      :logic="yukiFieldFilledDate_22_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_23.bounds"
      :name="jcfLabel_23.name"
      :text="jcfLabel_23.text"
      :logic="jcfLabel_23_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_24.bounds"
      :id="jcfFieldString_24.id"
      :inputMode="jcfFieldString_24.inputMode"
      :maxLength="jcfFieldString_24.maxLength"
      :enableType="jcfFieldString_24.enableType"
      :logic="jcfFieldString_24_logic"
    />
    <JCFPushButton
      :bounds="jcfPushButton_25.bounds"
      :id="jcfPushButton_25.id"
      :label="jcfPushButton_25.label"
      :font="jcfPushButton_25.font"
      :name="jcfPushButton_25.name"
      :logic="jcfPushButton_25_logic"
    />
    <JCFFieldString
      :bounds="jcfFieldString_26.bounds"
      :id="jcfFieldString_26.id"
      :editable="jcfFieldString_26.editable"
      :borderType="jcfFieldString_26.borderType"
      :name="jcfFieldString_26.name"
      :focusable="jcfFieldString_26.focusable"
      :caretVisible="jcfFieldString_26.caretVisible"
      :logic="jcfFieldString_26_logic"
    />
    <JCFPushButton
      :bounds="jcfPushButton_27.bounds"
      :id="jcfPushButton_27.id"
      :label="jcfPushButton_27.label"
      :font="jcfPushButton_27.font"
      :name="jcfPushButton_27.name"
      :logic="jcfPushButton_27_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_28.bounds"
      :name="jcfLabel_28.name"
      :text="jcfLabel_28.text"
      :logic="jcfLabel_28_logic"
    />

    <JCFButtonGroup
      :bounds="jcfButtonGroup_29.bounds"
      :borderType="jcfButtonGroup_29.borderType"
      :layout="jcfButtonGroup_29.layout"
      :logic="jcfButtonGroup_29_logic"
    >
      <JCFToggleButton
        :bounds="jcfToggleButton_30.bounds"
        :name="jcfToggleButton_30.name"
        :id="jcfToggleButton_30.id"
        :label="jcfToggleButton_30.label"
        :state="jcfToggleButton_30.state"
        :logic="jcfToggleButton_30_logic"
      />
      <JCFToggleButton
        :bounds="jcfToggleButton_31.bounds"
        :name="jcfToggleButton_31.name"
        :id="jcfToggleButton_31.id"
        :label="jcfToggleButton_31.label"
        :logic="jcfToggleButton_31_logic"
      />
      <JCFToggleButton
        :bounds="jcfToggleButton_32.bounds"
        :name="jcfToggleButton_32.name"
        :label="jcfToggleButton_32.label"
        :logic="jcfToggleButton_32_logic"
      />
    </JCFButtonGroup>
    <JCFLabel
      :bounds="jcfLabel_33.bounds"
      :text="jcfLabel_33.text"
      :logic="jcfLabel_33_logic"
    />
    <YUKIFieldLong
      :bounds="yukiFieldLong_34.bounds"
      :borderType="yukiFieldLong_34.borderType"
      :id="yukiFieldLong_34.id"
      :enabled="yukiFieldLong_34.enabled"
      :inactiveForeground="yukiFieldLong_34.inactiveForeground"
      :value="yukiFieldLong_34.value"
      :editable="yukiFieldLong_34.editable"
      :logic="yukiFieldLong_34_logic"
    />
    <JCFLabel
      :bounds="jcfLabel_35.bounds"
      :text="jcfLabel_35.text"
      :logic="jcfLabel_35_logic"
    />
    <SMSJCFSpread
      :headerAndColumnProperty="smsJCFSpread_36.headerAndColumnProperty"
      :id="smsJCFSpread_36.id"
      :doubleColor="smsJCFSpread_36.doubleColor"
      :bounds="smsJCFSpread_36.bounds"
      :editable="smsJCFSpread_36.editable"
      :envFontEnabled="smsJCFSpread_36.envFontEnabled"
      :logic="smsJCFSpread_36_logic"
    />
  </JCFPanelLayout>
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import {
  YUKIFieldLong,
  JCFButtonGroup,
  JCFLabel,
  SMSFileDialog,
  JCFPanelLayout,
  JCFFieldString,
  SMSJCFSpread,
  JCFLines,
  JCFToggleButton,
  YUKIFieldFilledDate,
  JCFGroupBox,
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
} from '@/components/jcf/entry'

import { installInstance } from '@/components/jcf/utils/instance'
import type { JCFSpreadHeaderAndColumnProperty } from '@/components/jcf/JCFSpread/types'
import { JCFSpread } from '@/components/jcf/JCFSpread/static'
import { JCFSpreadColumnInfoProperty } from '@/lib/jcf/gui/JCFSpreadColumnInfoProperty'
import { spreadColumnInfo } from '@/components/jcf/JCFSpread/data'

// ロジックを導入する。
import Logic from '../logic/YBMKKSF626SLogic'

// User custom logic flag: True,True

const spreadData = {
  columns: {
    headerColumns: 1,
    columnCount: 9,
    headerColumnInfo: null,
    columnInfo: [
      {
        baseColumnInfo: {
          width: 96,
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
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 96,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 40,
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
      {
        baseColumnInfo: {
          width: 128,
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
        minimumWidth: 128,
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
          alignmentHorizontal: JCFSpread.CENTER,
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
        minimumWidth: 80,
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
          alignmentHorizontal: JCFSpread.RIGHT,
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
          alignmentHorizontal: JCFSpread.RIGHT,
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
        minimumWidth: 64,
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
        label: '詳細',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 32,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: 'detail',
        itemActionCode: '',
        textActionCode: '',
      },
    ],
  },
  header: {
    rowCount: 1,
    columnCount: 10,
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
          title: '処理依頼番号',
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
          title: '年度',
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
          title: 'ファイル名',
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
          title: '取込日',
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
          title: '取込者',
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
          title: 'エラー有無',
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
          title: '正常件数',
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
          title: '異常件数',
          sortColumn: null,
        },
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(123, 149, 251),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(123, 149, 251),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: '',
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
      ],
    ],
    colWidth: [37, 36, 32, 37, 38, 36, 35, 36, 36],
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
const jcfLines_1 = {
  bounds: [16, 8, 968, 72],
}
const jcfLines_1_logic = installInstance(EComponentName.JCFLines, jcfLines_1)

const jcfLabel_2 = {
  bounds: [24, 16, 128, 24],
  text: `*&nbsp;配賦区分　　：`,
}
const jcfLabel_2_logic = installInstance(EComponentName.JCFLabel, jcfLabel_2)
const jcfButtonGroup_3 = {
  bounds: [152, 16, 408, 24],
  borderType: JFLineType.NOTHING,
  name: `JCFButtonGroup1`,
  layout: null,
}
const jcfButtonGroup_3_logic = installInstance(
  EComponentName.JCFButtonGroup,
  jcfButtonGroup_3,
)
const jcfToggleButton_4 = {
  bounds: [8, 0, 112, 24],
  name: `jcfToggleButton_4`,
  id: `jigyoTourokuHiritsu1`,
  label: `\t事業登録比率`,
}
const jcfToggleButton_4_logic = installInstance(
  EComponentName.JCFToggleButton,
  jcfToggleButton_4,
)
const jcfToggleButton_5 = {
  bounds: [120, 0, 264, 24],
  name: `jcfToggleButton_5`,
  id: `\tlineHiritsu1`,
  label: `\tライン比率（共通職場→ライン職場）`,
  pushedActionCode: `\tstHaifuSelected1`,
}
const jcfToggleButton_5_logic = installInstance(
  EComponentName.JCFToggleButton,
  jcfToggleButton_5,
)
const jcfGroupBox_6 = {
  bounds: [672, 24, 185, 56],
  layout: null,
}
const jcfGroupBox_6_logic = installInstance(
  EComponentName.JCFGroupBox,
  jcfGroupBox_6,
)

const jcfLabel_7 = {
  bounds: [24, 48, 128, 24],
  name: `JCFLabel2`,
  text: `*&nbsp;ファイル名　：`,
}
const jcfLabel_7_logic = installInstance(EComponentName.JCFLabel, jcfLabel_7)

const smsFileDialog_8 = {
  bounds: [152, 48, 512, 24],
  id: `smsFileDialog`,
  fileType: `*.csv`,
}
const smsFileDialog_8_logic = installInstance(
  EComponentName.SMSFileDialog,
  smsFileDialog_8,
)

const jcfLabel_9 = {
  bounds: [696, 40, 144, 24],
  text: `取込方式　：　上書き`,
}
const jcfLabel_9_logic = installInstance(EComponentName.JCFLabel, jcfLabel_9)
const jcfLines_10 = {
  bounds: [16, 88, 968, 414],
  font: new Font('Monospaced', Font.PLAIN, 14),
}
const jcfLines_10_logic = installInstance(EComponentName.JCFLines, jcfLines_10)

const jcfLabel_11 = {
  bounds: [24, 96, 128, 24],
  name: `JCFLabel3`,
  text: `　処理依頼番号：`,
}
const jcfLabel_11_logic = installInstance(EComponentName.JCFLabel, jcfLabel_11)

const jcfFieldString_12 = {
  bounds: [152, 96, 48, 24],
  id: `noShoriFrom`,
  inputMode: JFField.MODE_NATIVE,
  maxLength: 6,
  enableType: JFEnableType.TYPE_DIGIT,
}
const jcfFieldString_12_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_12,
)

const jcfLabel_13 = {
  bounds: [200, 96, 24, 24],
  name: `JCFLabel8`,
  text: `～`,
}
const jcfLabel_13_logic = installInstance(EComponentName.JCFLabel, jcfLabel_13)

const jcfFieldString_14 = {
  bounds: [224, 96, 48, 24],
  id: `noShoriTo`,
  inputMode: JFField.MODE_NATIVE,
  maxLength: 6,
  enableType: JFEnableType.TYPE_DIGIT,
}
const jcfFieldString_14_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_14,
)

const jcfLabel_15 = {
  bounds: [426, 96, 128, 24],
  name: `JCFLabel4`,
  text: `*&nbsp;配賦区分　　：`,
}
const jcfLabel_15_logic = installInstance(EComponentName.JCFLabel, jcfLabel_15)
const jcfButtonGroup_16 = {
  bounds: [552, 96, 408, 24],
  borderType: JFLineType.NOTHING,
  name: `JCFButtonGroup2`,
  layout: null,
}
const jcfButtonGroup_16_logic = installInstance(
  EComponentName.JCFButtonGroup,
  jcfButtonGroup_16,
)
const jcfToggleButton_17 = {
  bounds: [8, 0, 112, 24],
  name: `jcfToggleButton_17`,
  id: `jigyoTourokuHiritsu2`,
  label: `事業登録比率`,
}
const jcfToggleButton_17_logic = installInstance(
  EComponentName.JCFToggleButton,
  jcfToggleButton_17,
)
const jcfToggleButton_18 = {
  bounds: [120, 0, 264, 24],
  name: `jcfToggleButton_18`,
  id: `lineHiritsu2`,
  label: `ライン比率（共通職場→ライン職場）`,
}
const jcfToggleButton_18_logic = installInstance(
  EComponentName.JCFToggleButton,
  jcfToggleButton_18,
)

const jcfLabel_19 = {
  bounds: [24, 136, 128, 24],
  text: `　取込日　　　：`,
}
const jcfLabel_19_logic = installInstance(EComponentName.JCFLabel, jcfLabel_19)

const yukiFieldFilledDate_20 = {
  bounds: [152, 136, 80, 24],
  id: `tmTorikomiFrom`,
}
const yukiFieldFilledDate_20_logic = installInstance(
  EComponentName.YUKIFieldFilledDate,
  yukiFieldFilledDate_20,
)

const jcfLabel_21 = {
  bounds: [232, 136, 24, 24],
  alignmentHorizontal: JFAlignment.CENTER,
  text: `～`,
}
const jcfLabel_21_logic = installInstance(EComponentName.JCFLabel, jcfLabel_21)

const yukiFieldFilledDate_22 = {
  bounds: [256, 136, 80, 24],
  id: `tmTorikomiTo`,
}
const yukiFieldFilledDate_22_logic = installInstance(
  EComponentName.YUKIFieldFilledDate,
  yukiFieldFilledDate_22,
)

const jcfLabel_23 = {
  bounds: [440, 128, 112, 24],
  name: `JCFLabel6`,
  text: `取込者ID　　：`,
}
const jcfLabel_23_logic = installInstance(EComponentName.JCFLabel, jcfLabel_23)

const jcfFieldString_24 = {
  bounds: [552, 128, 64, 24],
  id: `cdTorikomisha`,
  inputMode: JFField.MODE_NATIVE,
  maxLength: 8,
  enableType: JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER,
}
const jcfFieldString_24_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_24,
)

const jcfPushButton_25 = {
  bounds: [616, 128, 32, 24],
  id: `GeneralSearch054`,
  label: `検索`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  name: `JCFPushButton2`,
}
const jcfPushButton_25_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_25,
)

const jcfFieldString_26 = {
  bounds: [656, 128, 184, 24],
  id: `nmTorikomisha`,
  editable: false,
  borderType: JFLineType.NOTHING,
  name: `JCFFieldString8`,
  focusable: false,
  caretVisible: false,
}
const jcfFieldString_26_logic = installInstance(
  EComponentName.JCFFieldString,
  jcfFieldString_26,
)

const jcfPushButton_27 = {
  bounds: [852, 128, 32, 24],
  id: `buttonHyoji`,
  label: `表示`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  name: `JCFPushButton4`,
}
const jcfPushButton_27_logic = installInstance(
  EComponentName.JCFPushButton,
  jcfPushButton_27,
)

const jcfLabel_28 = {
  bounds: [24, 168, 128, 24],
  name: `JCFLabel3`,
  text: `　エラー有無　：`,
}
const jcfLabel_28_logic = installInstance(EComponentName.JCFLabel, jcfLabel_28)
const jcfButtonGroup_29 = {
  bounds: [152, 168, 280, 24],
  borderType: JFLineType.NOTHING,
  name: `JCFButtonGroup3`,
  layout: null,
}
const jcfButtonGroup_29_logic = installInstance(
  EComponentName.JCFButtonGroup,
  jcfButtonGroup_29,
)
const jcfToggleButton_30 = {
  bounds: [0, 0, 56, 24],
  name: `jcfToggleButton_30`,
  id: `subete`,
  label: `全て`,
  state: true,
}
const jcfToggleButton_30_logic = installInstance(
  EComponentName.JCFToggleButton,
  jcfToggleButton_30,
)
const jcfToggleButton_31 = {
  bounds: [80, 0, 56, 24],
  name: `jcfToggleButton_31`,
  id: `ari`,
  label: `有り`,
}
const jcfToggleButton_31_logic = installInstance(
  EComponentName.JCFToggleButton,
  jcfToggleButton_31,
)
const jcfToggleButton_32 = {
  bounds: [160, 0, 56, 24],
  name: `jcfToggleButton_32`,
  label: `無し`,
}
const jcfToggleButton_32_logic = installInstance(
  EComponentName.JCFToggleButton,
  jcfToggleButton_32,
)

const jcfLabel_33 = {
  bounds: [800, 168, 24, 24],
  text: `全`,
}
const jcfLabel_33_logic = installInstance(EComponentName.JCFLabel, jcfLabel_33)

const yukiFieldLong_34 = {
  bounds: [824, 168, 44, 24],
  borderType: JFLineType.NOTHING,
  id: `kensu`,
  enabled: false,
  inactiveForeground: SystemColor.controlText,
  value: 0,
  editable: false,
}
const yukiFieldLong_34_logic = installInstance(
  EComponentName.YUKIFieldLong,
  yukiFieldLong_34,
)

const jcfLabel_35 = {
  bounds: [868, 168, 24, 24],
  text: `件`,
}
const jcfLabel_35_logic = installInstance(EComponentName.JCFLabel, jcfLabel_35)

const smsJCFSpread_36 = {
  headerAndColumnProperty: spreadData,
  id: `spread`,
  doubleColor: true,
  bounds: [24, 200, 876, 276],
  editable: true,
  envFontEnabled: true,
}
const smsJCFSpread_36_logic = installInstance(
  EComponentName.SMSJCFSpread,
  smsJCFSpread_36,
)
const logic = new Logic()
</script>
