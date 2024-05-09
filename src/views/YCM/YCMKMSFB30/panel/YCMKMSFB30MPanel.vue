<template>
  <SMSJCFSpread
    :headerAndColumnProperty="spreadData"
  />
  <global
    :foreground="Color.black"
    :font="new Font('Monospaced', Font.PLAIN, 12)"
    :dimension="new Dimension(1000, 510)"
  />
  <JCFPushButton
    :bounds="[224, 80, 40, 24]"
    :id="`GeneralSearch021`"
    :label="`検索`"
  />
  <JCFLabel
    :bounds="[16, 16, 128, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`従業員コード`"
  />
  <JCFLabel
    :bounds="[152, 16, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFLabel
    :bounds="[16, 48, 136, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`従業員名称（苗字）`"
  />
  <JCFLabel
    :bounds="[152, 48, 16, 24]"
    :font="new Font('Monospaced',  Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFLabel
    :bounds="[328, 48, 80, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`（名前）：`"
  />
  <JCFLabel
    :bounds="[16, 80, 136, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`損益管理組織コード`"
  />
  <JCFLabel
    :bounds="[152, 80, 16, 24]"
    :font="new Font('Monospaced',  Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFLabel
    :bounds="[760, 80, 24, 24]"
    :font="new Font('Monospaced',  Font.PLAIN, 14)"
    :text="`全`"
  />
  <JCFLabel
    :bounds="[824, 80, 24, 24]"
    :font="new Font('Monospaced',  Font.PLAIN, 14)"
    :alignmentHorizontal="JFAlignment.RIGHT"
    :text="`件`"
  />
  <YUKIFieldLong
    :bounds="[784, 80, 40, 24]"
    :borderType="JFLineType.NOTHING"
    :id="`qtKensaku`"
    :enabled="false"
    :editable="false"
  />
</template>

<script lang="ts" setup>
 const spreadData = {
'columns': {
  'headerColumns': 0,
  'columnCount': 6,
  'headerColumnInfo': null,
  'columnInfo': [
{'baseColumnInfo': {'width':32,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': '','borderType': SMSJCFSpread.FLAT,'alignmentHorizontal': SMSJCFSpread.CENTER,'alignmentVertical': SMSJCFSpread.CENTER},'name': null,'editType': SMSJCFSpread.PUSHBUTTON,'pattern': '','label': '詳細','selectableElements': [],'maxByteLength': -1,'minimumWidth': 32,'sortStart': 0,'sortEnd': -1,'buttonActionCode': 'body_button02','itemActionCode': '','textActionCode': ''},
{'baseColumnInfo': {'width':100,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': '','borderType': SMSJCFSpread.FLAT,'alignmentHorizontal': SMSJCFSpread.LEFT,'alignmentVertical': SMSJCFSpread.CENTER},'name': null,'editType': SMSJCFSpread.STRING,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 100,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': 'cdJugyoin'},
{'baseColumnInfo': {'width':260,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': '','borderType': SMSJCFSpread.FLAT,'alignmentHorizontal': SMSJCFSpread.LEFT,'alignmentVertical': SMSJCFSpread.CENTER},'name': null,'editType': SMSJCFSpread.STRING,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 260,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': 'nmJugyoin'},
{'baseColumnInfo': {'width':220,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': '','borderType': SMSJCFSpread.FLAT,'alignmentHorizontal': SMSJCFSpread.LEFT,'alignmentVertical': SMSJCFSpread.CENTER},'name': null,'editType': SMSJCFSpread.STRING,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': false,'sortStart':0,'sortEnd': 1,'buttonActionCode': 'false)','itemActionCode': 'new com.fujitsu.jcf.gui.JCFSelectableElement(半製品','textActionCode': '02'},
{'baseColumnInfo': {'width':0,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': '','borderType': SMSJCFSpread.FLAT,'alignmentHorizontal': SMSJCFSpread.LEFT,'alignmentVertical': SMSJCFSpread.CENTER},'name': null,'editType': SMSJCFSpread.STRING,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 0,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': 'stShain','textActionCode': 'nmShain'},
{'baseColumnInfo': {'width':32,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': '','borderType': SMSJCFSpread.FLAT,'alignmentHorizontal': SMSJCFSpread.CENTER,'alignmentVertical': SMSJCFSpread.CENTER},'name': null,'editType': SMSJCFSpread.CHECKBOX,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 32,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': 'fgRonrisakujo','textActionCode': ''}
 ]
}
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
  JCFPanelLayout,
  Dimension,
} from '@/components/jcf/entry'

// ロジックを導入する。
import Logic from '../logic/YCMKMSFB30MLogic'
const logic = new Logic()
// User custom logic flag: True,True
</script>

