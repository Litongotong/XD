<template>
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
    :font="new Font('Monospaced', Font.PLAIN, 14)"
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
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFLabel
    :bounds="[760, 80, 24, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`全`"
  />
  <JCFLabel
    :bounds="[824, 80, 24, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
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
  <!-- <WijmoGrid
    :headerAndColumnProperty="{'baseColumnInfo': {'width':_x000D_
"Monospaced",'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.PUSHBUTTON,{'baseColumnInfo': {'width':_x000D_
"Monospaced",'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,{'baseColumnInfo': {'width':_x000D_
"Monospaced",'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,{'baseColumnInfo': {'width':_x000D_
220,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,{'baseColumnInfo': {'width':_x000D_
"Monospaced",'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,{'baseColumnInfo': {'width':_x000D_
"Monospaced",'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.CHECKBOX,"
  /> -->

</template>

<script lang="ts" setup>
 const spreadData = {

 }
// 共通部品を導入する。
import {
  JCFPushButton,
  // WijmoGrid,
  YUKIFieldLong,
  JCFLabel,
  SystemColor,
  Color,
  JFAlignment,
  CJSpread,
  JFField,
  JFEnableType,
  JFLineType,
  Font,
} from '@/components/jcf/entry'

// ロジックを導入する。
import Logic from '../logic/YCMKMSFB30MLogic'

const logic = new Logic()
</script>

