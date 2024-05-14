<template>

  <global 
    :foreground="Color.black" 
    :font="new Font('Monospaced', Font.PLAIN, 12)"
    :dimension="new Dimension(1000, 510)" />
  <JCFPushButton 
    :bounds="[224, 80, 40, 24]" 
    :id="`GeneralSearch021`" 
    :label="`検索`" />
  <JCFLabel 
    :bounds="[16, 16, 128, 24]" 
    :font="new Font('Monospaced', Font.PLAIN, 14)" 
    :text="`従業員コード`" />
  <JCFLabel 
    :bounds="[152, 16, 16, 24]" 
    :font="new Font('Monospaced', Font.PLAIN, 14)" 
    :text="`:`" />
  <JCFLabel 
    :bounds="[16, 48, 136, 24]" 
    :font="new Font('Monospaced', Font.PLAIN, 14)" 
    :text="`従業員名称（苗字）`" />
  <JCFLabel 
    :bounds="[152, 48, 16, 24]" 
    :font="new Font('Monospaced', Font.PLAIN, 14)" 
    :text="`:`" />
  <JCFLabel 
    :bounds="[328, 48, 80, 24]" 
    :font="new Font('Monospaced', Font.PLAIN, 14)" 
    :text="`（名前）：`" />
  <JCFLabel 
    :bounds="[16, 80, 136, 24]" 
    :font="new Font('Monospaced', Font.PLAIN, 14)" 
    :text="`損益管理組織コード`" />
  <JCFLabel 
    :bounds="[152, 80, 16, 24]" 
    :font="new Font('Monospaced', Font.PLAIN, 14)" 
    :text="`:`" />
  <JCFLabel 
    :bounds="[760, 80, 24, 24]" 
    :font="new Font('Monospaced', Font.PLAIN, 14)" 
    :text="`全`" />
  <JCFLabel 
    :bounds="[824, 80, 24, 24]" 
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :alignmentHorizontal="JFAlignment.RIGHT" 
    :text="`件`" />
  <YUKIFieldLong 
    :bounds="[784, 80, 40, 24]" 
    :borderType="JFLineType.NOTHING" 
    :id="`qtKensaku`" 
    :enabled="false"
    :editable="false" />
 
  <JCFPushButton :bounds="[936, 48, 40, 24]" 
    :id="`body_button01`" 
    :label="`表示`" 
    :pushedActionCode="`SHOW`" />
  <JCFFieldString 
    :bounds="[450, 45, 48, 24]" 
    :id="`searchCdKojoZaikoBasho`"
    :font="new Font('Monospaced', Font.PLAIN, 14)" 
    :inputMode="JFField.MODE_NATIVE" 
    :maxLength="6.0"
    :maxByteLength="6.0" 
    :enableType="JFEnableType.TYPE_DIGIT" />
  <JCFFieldString
    :bounds="[162, 15, 48, 24]" 
    :id="`searchCdKojoZaikoBasho`"
    :font="new Font('Monospaced', Font.PLAIN, 14)" 
    :inputMode="JFField.MODE_NATIVE"
    :maxLength="6.0"
    :maxByteLength="6.0" 
    :enableType="JFEnableType.TYPE_DIGIT" />
  <JCFFieldString
    :bounds="[162, 45, 48, 24]"
    :id="`searchCdKojoZaikoBasho`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFField.MODE_NATIVE" 
    :maxLength="6.0"
    :maxByteLength="6.0" 
    :enableType="JFEnableType.TYPE_DIGIT" />
  <JCFFieldString
    :bounds="[162, 75, 48, 24]" 
    :id="`searchCdKojoZaikoBasho`"
    :font="new Font('Monospaced', Font.PLAIN, 14)" 
    :inputMode="JFField.MODE_NATIVE" 
    :maxLength="6.0"
    :maxByteLength="6.0" 
    :enableType="JFEnableType.TYPE_DIGIT" />
  <JCFToggleButton 
    :bounds="[550, 80, 24, 24]" 
    :id="`searchFgRonrisakujo`" 
    :label="`削除済データを含める`"
    :font="new Font('Monospaced', Font.PLAIN, 14)" />
  <JCFPushButton 
    :bounds="[888, 456, 48, 24]" 
    :label="`新規追加`"
    :font="new Font('Monospaced', Font.PLAIN, 12)"
     pushedActionCode="body_button03" />
  <JCFPushButton 
    :bounds="[788, 456, 48, 24]" 
    :label="`詳細テスト`"
    :font="new Font('Monospaced', Font.PLAIN, 12)"
     pushedActionCode="body_button02" />
  <SMSJCFSpread 
    :id="`spread`" 
    :item-source="itemSource" 
    :scroll-mask="CJSpread.SCRL_VERTICALAUTO"
    :default-cell-height="24" 
    :key-open-mode="true"
    :double-color="true" 
    :close-move-mode="4"
    :headerAndColumnProperty="spreadData" 
    :bounds="[24, 136, 928, 301]" />
</template>

<script lang="ts" setup>

const spreadData = {
  columns: 
    {
    headerColumns: 0,
    columnCount: 6,
    headerColumnInfo: null,
    columnInfo: [
      {
         baseColumnInfo: { 
          width: 32, 
          background: SystemColor.window, 
          foreground: SystemColor.windowText, 
          borderColor: SystemColor.window, 
          borderWidth: 0, 
          font:  new Font('Monospaced', Font.PLAIN, 14), 
          borderType: JCFSpread.FLAT, 
          alignmentHorizontal: JCFSpread.CENTER, 
          alignmentVertical: JCFSpread.CENTER 
        }, 
          name: null, 
          editType: JCFSpread.PUSHBUTTON, 
          pattern: '', 
          label: '詳細', 
          selectableElements: [], 
          maxByteLength: -1, 
          minimumWidth: 32, 
          sortStart: 0, 
          sortEnd: -1, 
          buttonActionCode: 'body_button02', 
          itemActionCode: '', 
          textActionCode: '' 
        },
      { 
        baseColumnInfo: { 
          width: 100,
          background: SystemColor.window, 
          foreground: SystemColor.windowText, 
          borderColor: SystemColor.window, 
          borderWidth: 0, 
          font:  new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT, 
          alignmentHorizontal: JCFSpread.LEFT, 
          alignmentVertical: JCFSpread.CENTER 
        }, 
        name: null, 
        editType: JCFSpread.STRING, 
        pattern: '', 
        label: '2', 
        selectableElements: [], 
        maxByteLength: -1, 
        minimumWidth: 100, 
        sortStart: 0, 
        sortEnd: -1, 
        buttonActionCode: '', 
        itemActionCode: '', 
        textActionCode: 'cdJugyoin' 
      },
      { baseColumnInfo: { width: 260,background: SystemColor.window, foreground: SystemColor.windowText, borderColor: SystemColor.window, borderWidth: 0, font:  new Font('Monospaced', Font.PLAIN, 14), borderType: JCFSpread.FLAT, alignmentHorizontal: JCFSpread.LEFT, alignmentVertical: JCFSpread.CENTER }, name: null, editType: JCFSpread.STRING, pattern: '', label: '3', selectableElements: [], maxByteLength: -1, minimumWidth: 260, sortStart: 0, sortEnd: -1, buttonActionCode: '', itemActionCode: '', textActionCode: 'nmJugyoin' },
      { baseColumnInfo: { width: 220,background: SystemColor.window, foreground: SystemColor.windowText, borderColor: SystemColor.window, borderWidth: 0, font:  new Font('Monospaced', Font.PLAIN, 14), borderType: JCFSpread.FLAT, alignmentHorizontal: JCFSpread.LEFT, alignmentVertical: JCFSpread.CENTER }, name: null, editType: JCFSpread.STRING, pattern: '', label: '4', selectableElements: [], maxByteLength: -1, minimumWidth: false, sortStart:  '' ,itemActionCode: ''},
      {baseColumnInfo: { width: 0, background: SystemColor.window, foreground: SystemColor.windowText, borderColor: SystemColor.window, borderWidth: 0, font:  new Font('Monospaced', Font.PLAIN, 14), borderType: JCFSpread.FLAT, alignmentHorizontal: JCFSpread.LEFT, alignmentVertical: JCFSpread.CENTER }, name: null, editType: JCFSpread.STRING, pattern: '', label: '5', selectableElements: [], maxByteLength: -1, minimumWidth: 0, sortStart: 0, sortEnd: -1, buttonActionCode: '', itemActionCode: 'stShain', textActionCode: 'nmShain' },
      { 
        baseColumnInfo: {
        width: 32, 
        background: SystemColor.window, 
        foreground: SystemColor.windowText, 
        borderColor: SystemColor.window, 
        borderWidth: 0, 
        font:  new Font('Monospaced', Font.PLAIN, 14), 
        borderType: JCFSpread.FLAT, 
        alignmentHorizontal: JCFSpread.CENTER, 
        alignmentVertical: JCFSpread.CENTER 
      }, 
      name: null, 
      editType: JCFSpread.CHECKBOX, 
      pattern: '', 
      label: '', 
      selectableElements: [], 
      maxByteLength: -1, 
      minimumWidth: 32, 
      sortStart: 0, 
      sortEnd: -1, 
      buttonActionCode: '', 
      itemActionCode: 'fgRonrisakujo', 
      textActionCode: '' },
    ]
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
          title: '従業員コード',
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
          title: '従業員名称',
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
          title: '損益管理組織名称',
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
          title: '削除',
          sortColumn: null,
        },
      ],
    ],
    height: [24],
  },
}

// 共通部品を導入する。
import {
  JCFPushButton,
  YUKIFieldLong,
  SMSJCFSpread,
  // global,
  JCFLabel,
  SystemColor,
  Color,
  JFAlignment,
  CJSpread,
  JFField,
  JFEnableType,
  JFLineType,
  Font,
  JCFFieldString,
  Dimension,
  JCFToggleButton
} from '@/components/jcf/entry'

// ロジックを導入する。
import Logic from '../logic/YCMKMSFB30MLogic'
import { spreadColumnInfo } from '@/components/jcf/JCFSpread/data'
import type { ItemSource } from '@/components/jcf/JCFSpread/types'
import { JCFSpread } from '@/components/jcf/JCFSpread/static'
const logic = new Logic()

// [[Spread Dummy Data Panel Type]]
const itemSource: ItemSource = Array.from({ length: 5 }, () => ({
  __COL_0: false,
  __COL_1: '1',
  __COL_2: null,
  __COL_3: '1',
  __COL_4: 1,
  __COL_5: ''
}))
</script>
