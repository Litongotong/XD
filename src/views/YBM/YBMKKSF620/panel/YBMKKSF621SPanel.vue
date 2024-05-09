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
    :dimension="new Dimension(1000, 510)"
    :foreground="Color.black"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :layout="null"
  >
    <JCFButtonGroup :bounds="[64, 16, 576, 160]" :label="`複写元`">
    </JCFButtonGroup>
    <JCFButtonGroup :bounds="[64, 216, 576, 144]" :label="`複写先`">
    </JCFButtonGroup>
    <JCFButtonGroup
      :bounds="[224, 40, 232, 24]"
      :enabled="false"
      :borderWidth="0"
      :borderType="JFLineType.NOTHING"
      :name="`JCFButtonGroup1`"
    >
      <JCFToggleButton
        :bounds="[0, 0, 120, 24]"
        :id="`jigyouTourokuHiritsu`"
        :enabled="false"
        :label="`事業登録比率`"
        :container="`JCFButtonGroup1`"
      />
      <JCFToggleButton
        :bounds="[120, 0, 104, 24]"
        :id="`lineHiritsu`"
        :enabled="false"
        :label="`ライン比率`"
        :container="`JCFButtonGroup1`"
        :pushedActionCode="`stHaifuSelected4`"
      />
    </JCFButtonGroup>
    <JCFPushButton
      :bounds="[272, 280, 32, 24]"
      :id="`body_button17`"
      :label="`検索`"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
      :pushedActionCode="`body_button17`"
    />
    <JCFPushButton
      :bounds="[344, 312, 32, 24]"
      :id="`body_button18`"
      :label="`検索`"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
      :pushedActionCode="`body_button18`"
    />
    <JCFLabel :bounds="[80, 40, 144, 24]" :text="`*&nbsp;配賦区分　　　　：`" />
    <JCFLabel :bounds="[80, 72, 144, 24]" :text="`*&nbsp;年度　　　　　　：`" />
    <JCFLabel
      :bounds="[296, 72, 24, 24]"
      :background="Color.white"
      :text="`年`"
    />
    <JCFLabel
      :bounds="[80, 104, 144, 24]"
      :text="`*&nbsp;組織　　　　　　：`"
    />
    <JCFLabel
      :bounds="[80, 136, 144, 24]"
      :text="`&nbsp;&nbsp;科目－補助科目　：`"
    />
    <JCFLabel
      :bounds="[80, 248, 144, 24]"
      :text="`*&nbsp;年度　　　　　　：`"
    />
    <JCFLabel
      :bounds="[296, 248, 24, 24]"
      :background="Color.white"
      :text="`年`"
    />
    <JCFLabel
      :bounds="[80, 280, 144, 24]"
      :text="`*&nbsp;組織　　　　　　：`"
    />
    <JCFLabel
      :bounds="[80, 312, 144, 24]"
      :text="`&nbsp;&nbsp;科目－補助科目　：`"
    />
    <JCFFieldString
      :bounds="[224, 104, 48, 24]"
      :id="`cdSoshiki`"
      :enabled="false"
      :inputMode="JFField.MODE_NATIVE"
      :maxLength="6.0"
      :maxByteLength="6.0"
      :enableType="JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER"
    />
    <JCFFieldString
      :bounds="[280, 104, 112, 24]"
      :id="`nmSoshiki`"
      :enabled="false"
      :editable="false"
      :borderType="JFLineType.NOTHING"
      :inactiveForeground="SystemColor.windowText"
      :enableType="JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER"
    />
    <JCFFieldString
      :bounds="[224, 136, 40, 24]"
      :id="`cdKanjokamoku`"
      :enabled="false"
      :editable="false"
      :inputMode="JFField.MODE_NATIVE"
      :maxLength="5.0"
      :maxByteLength="5.0"
      :enableType="JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER"
    />
    <JCFFieldString
      :bounds="[272, 136, 24, 24]"
      :enabled="false"
      :editable="false"
      :borderType="JFLineType.NOTHING"
      :inactiveForeground="SystemColor.windowText"
      :text="`－`"
    />
    <JCFFieldString
      :bounds="[296, 136, 48, 24]"
      :id="`cdHojokamoku`"
      :enabled="false"
      :editable="false"
      :inputMode="JFField.MODE_NATIVE"
      :maxLength="6.0"
      :maxByteLength="6.0"
      :enableType="JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER"
    />
    <JCFFieldString
      :bounds="[352, 136, 112, 24]"
      :id="`nmKanjokamoku`"
      :enabled="false"
      :editable="false"
      :borderType="JFLineType.NOTHING"
      :inactiveForeground="SystemColor.windowText"
    />
    <JCFFieldString
      :bounds="[472, 136, 24, 24]"
      :enabled="false"
      :editable="false"
      :borderType="JFLineType.NOTHING"
      :inactiveForeground="SystemColor.windowText"
      :text="`－`"
    />
    <JCFFieldString
      :bounds="[488, 136, 112, 24]"
      :id="`nmHojokamoku`"
      :enabled="false"
      :editable="false"
      :borderType="JFLineType.NOTHING"
      :inactiveForeground="SystemColor.windowText"
    />
    <JCFFieldString
      :bounds="[224, 280, 48, 24]"
      :id="`cdSoshikiDown`"
      :inputMode="JFField.MODE_NATIVE"
      :maxLength="6.0"
      :maxByteLength="6.0"
      :enableType="JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER"
    />
    <JCFFieldString
      :bounds="[304, 280, 112, 24]"
      :id="`nmSoshikiRyakuDown`"
      :enabled="false"
      :editable="false"
      :borderType="JFLineType.NOTHING"
      :inactiveForeground="SystemColor.windowText"
      :enableType="JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER"
    />
    <JCFFieldString
      :bounds="[224, 312, 40, 24]"
      :id="`cdKamokuDown`"
      :inputMode="JFField.MODE_NATIVE"
      :maxLength="5.0"
      :maxByteLength="5.0"
      :enableType="JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER"
    />
    <JCFFieldString
      :bounds="[272, 312, 24, 24]"
      :enabled="false"
      :editable="false"
      :borderType="JFLineType.NOTHING"
      :inactiveForeground="SystemColor.windowText"
      :text="`－`"
    />
    <JCFFieldString
      :bounds="[296, 312, 48, 24]"
      :id="`cdHojyoKamokuDown`"
      :inputMode="JFField.MODE_NATIVE"
      :maxLength="6.0"
      :maxByteLength="6.0"
      :enableType="JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER"
    />
    <JCFFieldString
      :bounds="[376, 312, 112, 24]"
      :id="`nmKamokuRyakuDown`"
      :enabled="false"
      :editable="false"
      :borderType="JFLineType.NOTHING"
      :inactiveForeground="SystemColor.windowText"
    />
    <JCFFieldString
      :bounds="[496, 312, 24, 24]"
      :enabled="false"
      :editable="false"
      :borderType="JFLineType.NOTHING"
      :inactiveForeground="SystemColor.windowText"
      :text="`－`"
    />
    <JCFFieldString
      :bounds="[512, 312, 112, 24]"
      :id="`nmHojyoKamokuRyakuDown`"
      :enabled="false"
      :editable="false"
      :borderType="JFLineType.NOTHING"
      :inactiveForeground="SystemColor.windowText"
    />
    <JCFComboBox
      :bounds="[224, 72, 64, 24]"
      :id="`dtNendo`"
      :enabled="false"
      :selectableElements="[]"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
    />
    <JCFComboBox
      :bounds="[224, 248, 64, 24]"
      :id="`dtNendoDown`"
      :selectableElements="[]"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
    />
  </JCFPanelLayout>
</template>

<script lang="ts" setup>
import {
  JCFFieldString,
  JCFComboBox,
  JCFLabel,
  JCFToggleButton,
  JCFPushButton,
  JCFButtonGroup,
  SystemColor,
  Color,
  JFField,
  JFEnableType,
  JFLineType,
  Font,
  JCFPanelLayout,
  Dimension,
} from '@/components/jcf/entry'

import Logic from '../logic/YBMKKSF621SLogic'
// const logic = new Logic()
</script>
