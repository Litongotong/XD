<!--
  /************************************************************************************          
     * クラス名        YBMKKSF626SPanel                                                      
     *                                                                                       
     * システム名    : 経営情報                                                              
     * サブシステム名: 管理会計                                                              
     * プログラム名  : 配賦マスタ取込                                                        
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
    <JCFLines :bounds="[16, 8, 968, 72]" />
    <JCFLines
      :bounds="[16, 88, 968, 414]"
      :font="new Font('Monospaced', Font.PLAIN, 14)"
    />
    <JCFGroupBox :bounds="[672, 24, 185, 56]"> </JCFGroupBox>
    <JCFButtonGroup
      :bounds="[152, 16, 408, 24]"
      :borderType="JFLineType.NOTHING"
      :name="`JCFButtonGroup1`"
    >
      <JCFToggleButton
        :bounds="[8, 0, 112, 24]"
        :name="`JCFToggleButton1`"
        :id="`jigyoTourokuHiritsu1`"
        :label="`\t事業登録比率`"
        :container="`JCFButtonGroup1`"
      />
      <JCFToggleButton
        :bounds="[120, 0, 264, 24]"
        :name="`JCFToggleButton2`"
        :id="`\tlineHiritsu1`"
        :label="`\tライン比率（共通職場→ライン職場）`"
        :container="`JCFButtonGroup1`"
        :pushedActionCode="`\tstHaifuSelected1`"
      />
    </JCFButtonGroup>

    <JCFButtonGroup
      :bounds="[552, 96, 408, 24]"
      :borderType="JFLineType.NOTHING"
      :name="`JCFButtonGroup2`"
    >
      <JCFToggleButton
        :bounds="[8, 0, 112, 24]"
        :name="`JCFToggleButton3`"
        :id="`jigyoTourokuHiritsu2`"
        :label="`事業登録比率`"
        :container="`JCFButtonGroup2`"
      />
      <JCFToggleButton
        :bounds="[120, 0, 264, 24]"
        :name="`JCFToggleButton4`"
        :id="`lineHiritsu2`"
        :label="`ライン比率（共通職場→ライン職場）`"
        :container="`JCFButtonGroup2`"
      />
    </JCFButtonGroup>

    <JCFButtonGroup
      :bounds="[152, 168, 280, 24]"
      :borderType="JFLineType.NOTHING"
      :name="`JCFButtonGroup3`"
    >
      <JCFToggleButton
        :bounds="[0, 0, 56, 24]"
        :id="`subete`"
        :label="`全て`"
        :container="`JCFButtonGroup3`"
        :state="true"
      />
      <JCFToggleButton
        :bounds="[80, 0, 56, 24]"
        :id="`ari`"
        :label="`有り`"
        :container="`JCFButtonGroup3`"
      />
      <JCFToggleButton
        :bounds="[160, 0, 56, 24]"
        :id="`没有ID`"
        :label="`無し`"
        :container="`JCFButtonGroup3`"
      />
    </JCFButtonGroup>
    <SMSFileDialog
      :bounds="[152, 48, 512, 24]"
      :id="`smsFileDialog`"
      :fileType="`*.csv`"
    />
    <JCFPushButton
      :bounds="[616, 128, 32, 24]"
      :id="`GeneralSearch054`"
      :label="`検索`"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
      :name="`JCFPushButton2`"
    />
    <JCFPushButton
      :bounds="[852, 128, 32, 24]"
      :id="`buttonHyoji`"
      :label="`表示`"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
      :name="`JCFPushButton4`"
    />
    <JCFLabel :bounds="[24, 16, 128, 24]" :text="`*&nbsp;配賦区分　　：`" />
    <JCFLabel :bounds="[696, 40, 144, 24]" :text="`取込方式　：　上書き`" />
    <JCFLabel
      :bounds="[24, 48, 128, 24]"
      :name="`JCFLabel2`"
      :text="`*&nbsp;ファイル名　：`"
    />
    <JCFLabel
      :bounds="[24, 96, 128, 24]"
      :name="`JCFLabel3`"
      :text="`　処理依頼番号：`"
    />
    <JCFLabel :bounds="[200, 96, 24, 24]" :name="`JCFLabel8`" :text="`～`" />
    <JCFLabel
      :bounds="[426, 96, 128, 24]"
      :name="`JCFLabel4`"
      :text="`*&nbsp;配賦区分　　：`"
    />
    <JCFLabel
      :bounds="[440, 128, 112, 24]"
      :name="`JCFLabel6`"
      :text="`取込者ID　　：`"
    />
    <JCFLabel :bounds="[24, 136, 128, 24]" :text="`　取込日　　　：`" />
    <JCFLabel
      :bounds="[232, 136, 24, 24]"
      :alignmentHorizontal="JFAlignment.CENTER"
      :text="`～`"
    />
    <JCFLabel
      :bounds="[24, 168, 128, 24]"
      :name="`JCFLabel3`"
      :text="`　エラー有無　：`"
    />
    <JCFLabel :bounds="[800, 168, 24, 24]" :text="`全`" />
    <JCFLabel :bounds="[868, 168, 24, 24]" :text="`件`" />
    <JCFFieldString
      :bounds="[152, 96, 48, 24]"
      :id="`noShoriFrom`"
      :inputMode="JFField.MODE_NATIVE"
      :maxLength="6.0"
      :enableType="JFEnableType.TYPE_DIGIT"
    />
    <JCFFieldString
      :bounds="[224, 96, 48, 24]"
      :id="`noShoriTo`"
      :inputMode="JFField.MODE_NATIVE"
      :maxLength="6.0"
      :enableType="JFEnableType.TYPE_DIGIT"
    />
    <JCFFieldString
      :bounds="[552, 128, 64, 24]"
      :id="`cdTorikomisha`"
      :inputMode="JFField.MODE_NATIVE"
      :maxLength="8.0"
      :enableType="JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER"
    />
    <JCFFieldString
      :bounds="[656, 128, 184, 24]"
      :id="`nmTorikomisha`"
      :editable="false"
      :borderType="JFLineType.NOTHING"
      :name="`JCFFieldString8`"
      :focusable="false"
      :caretVisible="false"
    />
    <YUKIFieldLong
      :bounds="[824, 168, 44, 24]"
      :borderType="JFLineType.NOTHING"
      :id="`kensu`"
      :enabled="false"
      :inactiveForeground="SystemColor.controlText"
      :value="`0`"
      :editable="false"
    />
    <YUKIFieldFilledDate :bounds="[152, 136, 80, 24]" :id="`tmTorikomiFrom`" />
    <YUKIFieldFilledDate :bounds="[256, 136, 80, 24]" :id="`tmTorikomiTo`" />
  </JCFPanelLayout>
  <!-- <WijmoGrid
    :headerAndColumnProperty="{'columns': {'headerColumns': 1,'columnCount':  9,'headerColumnInfo': null,'columnInfo': [{'baseColumnInfo': {'width':96,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': new Font(Monospaced,'borderWidth': SystemColor.window,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CAN,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 96,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':32,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': new Font(Monospaced,'borderWidth': SystemColor.window,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CAN,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 32,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':176,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': new Font(Monospaced,'borderWidth': SystemColor.window,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CAN,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 176,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':144,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': new Font(Monospaced,'borderWidth': SystemColor.window,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 144,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':128,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': new Font(Monospaced,'borderWidth': SystemColor.window,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 128,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':80,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': new Font(Monospaced,'borderWidth': SystemColor.window,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 80,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':64,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': new Font(Monospaced,'borderWidth': SystemColor.window,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.RIGHT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.NUMBER,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 64,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':64,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': new Font(Monospaced,'borderWidth': SystemColor.window,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.RIGHT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.NUMBER,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 64,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':32,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': new Font(Monospaced,'borderWidth': SystemColor.window,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.PUSHBUTTON,'editflag': JCFSpreadColumnInfoProperty.COL_EDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_,'pattern': '','label': 詳細,'selectableElements': [],'maxByteLength': -1,'minimumWidth': 32,'sortStart': 0,'sortEnd': -1,'buttonActionCode': 'detail','itemActionCode': '','textActionCode': ''},'header': {'rowCount': 1,'columnCount': 10,'headerCell': [[ {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  No,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  処理依頼番号,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  年度,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  ファイル名,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  取込日,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  取込者,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  エラー有無,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  正常件数,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  異常件数,'sortColumn':  null)}, {'width': 80,'background': new Color(123, 149, 251) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(123, 149, 251),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  ,'sortColumn':  null)}]],'height':[24]},'recordInfo': {'layout': [['__COL_1','__COL_2','__COL_3','__COL_4','__COL_5','__COL_6','__COL_7','__COL_8]], 'colWidth': [  37, 36, 32, 37, 38, 36, 35, 36, 36   ], 'rowHeight': [24],'fixedColumns': 0}}"
  /> -->
</template>

<script lang="ts" setup>
import {
  JCFGroupBox,
  YUKIFieldLong,
  JCFFieldString,
  JCFLines,
  JCFLabel,
  JCFToggleButton,
  JCFPushButton,
  YUKIFieldFilledDate,
  JCFButtonGroup,
  SystemColor,
  Color,
  JFAlignment,
  JFField,
  JFEnableType,
  JFLineType,
  Font,
  JCFPanelLayout,
  Dimension,
  SMSFileDialog,
} from '@/components/jcf/entry'

import Logic from '../logic/YBMKKSF626SLogic'
// const logic = new Logic()
</script>
