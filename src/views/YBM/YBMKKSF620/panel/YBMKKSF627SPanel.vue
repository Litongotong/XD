<!--
  /************************************************************************************          
     * クラス名        YBMKKSF627SPanel                                                      
     *                                                                                       
     * システム名    : 経営情報                                                              
     * サブシステム名: 管理会計                                                              
     * プログラム名  : 配賦マスタ取込エラー確認                                              
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
    :dimension="new Dimension(1000, 510)"
    :foreground="Color.black"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :layout="null"
  >
    <JCFPushButton
      :bounds="[496, 72, 32, 24]"
      :id="`button1`"
      :label="`表示`"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
      :name="`JCFPushButton１`"
    />
    <JCFLabel
      :bounds="[16, 8, 128, 24]"
      :name="`JCFLabel1`"
      :text="`処理依頼番号　：`"
    />
    <JCFLabel
      :bounds="[504, 8, 128, 24]"
      :name="`JCFLabel2`"
      :text="`年度　　　　　：`"
    />
    <JCFLabel :bounds="[664, 8, 24, 24]" :text="`年`" />
    <JCFLabel
      :bounds="[16, 40, 128, 24]"
      :name="`JCFLabel5`"
      :text="`配賦区分　　　：`"
    />
    <JCFLabel
      :bounds="[504, 40, 128, 24]"
      :name="`JCFLabel6`"
      :text="`エラー種別　　：`"
    />
    <JCFLabel :bounds="[440, 104, 32, 24]" :name="`JCFLabel17`" :text="`全`" />
    <JCFLabel :bounds="[512, 104, 32, 24]" :name="`JCFLabel8`" :text="`件`" />
    <JCFFieldString
      :bounds="[144, 8, 48, 24]"
      :id="`noShori`"
      :editable="false"
      :borderType="JFLineType.NOTHING"
      :name="`JCFFieldString1`"
      :focusable="false"
      :caretVisible="false"
    />
    <JCFFieldString
      :bounds="[632, 8, 32, 24]"
      :id="`dtNendo`"
      :editable="false"
      :borderType="JFLineType.NOTHING"
      :name="`JCFFieldString2`"
      :focusable="false"
      :caretVisible="false"
    />
    <JCFFieldString
      :bounds="[144, 40, 256, 24]"
      :id="`kbnHaifu`"
      :editable="false"
      :borderType="JFLineType.NOTHING"
      :name="`JCFFieldString5`"
      :focusable="false"
      :caretVisible="false"
    />
    <JCFComboBox
      :bounds="[632, 40, 248, 24]"
      :id="`stError`"
      :selectableElements="[new JCFSelectableElement('全て', '00', true)]"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
    />
    <YUKIFieldLong
      :bounds="[472, 104, 40, 24]"
      :borderType="JFLineType.NOTHING"
      :id="`kensu`"
      :enabled="false"
      :inactiveForeground="SystemColor.controlText"
      :value="`0`"
      :caretVisible="false"
      :editable="false"
    />
  </JCFPanelLayout>
  <!-- <WijmoGrid
    :headerAndColumnProperty="{'columns': {'headerColumns': 1,'columnCount':  2,'headerColumnInfo': null,'columnInfo': [{'baseColumnInfo': {'width':60,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': new Font(Monospaced,'borderWidth': SystemColor.window,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 60,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':416,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': new Font(Monospaced,'borderWidth': SystemColor.window,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 416,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},'header': {'rowCount': 1,'columnCount': 3,'headerCell': [[ {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  No,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  行No,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  エラー種別,'sortColumn':  null)}]],'height':[24]},'recordInfo': {'layout': [['__COL_1]], 'colWidth': [  40, 36   ], 'rowHeight': [24],'fixedColumns': 0}}"
  /> -->
</template>

<script lang="ts" setup>
import {
  YUKIFieldLong,
  JCFFieldString,
  JCFComboBox,
  JCFLabel,
  JCFPushButton,
  SystemColor,
  Color,
  JFLineType,
  Font,
  JCFSelectableElement,
  Dimension,
  JCFPanelLayout,
} from '@/components/jcf/entry'

// ロジックを導入する。
import Logic from '../logic/YBMKKSF627SLogic'
// const logic = new Logic()
</script>
