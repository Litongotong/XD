<template>

  <JCFButtonGroup
    :bounds="[168, 8, 408, 24]"
    :id="`stJigyo`"
    :borderWidth="0"
    :borderType="JFLineType.NOTHING"
    :name="`JCFButtonGroup1`"
  >
  <JCFToggleButton
    :bounds="[0, 0, 112, 24]"
    :id="`jigyoTorokuHiritsu`"
    :label="`事業登録比率`"
    :container="`JCFButtonGroup1`"
    :pushedActionCode="`stHaifuSelected2`"
  />
  <JCFToggleButton
    :bounds="[120, 0, 264, 24]"
    :id="`lineHiritsu`"
    :label="`ライン比率（共通職場→ライン職場）`"
    :container="`JCFButtonGroup1`"
  />
  </JCFButtonGroup>
  <JCFPushButton
    :bounds="[848, 48, 32, 24]"
    :id="`fukusya`"
    :label="`複写`"
    :font="new Font('Monospaced', Font.PLAIN, 12)"
    :pushedActionCode="`body_button09`"
  />
  <JCFPushButton
    :bounds="[896, 48, 32, 24]"
    :id="`body_button10`"
    :label="`表示`"
    :font="new Font('Monospaced', Font.PLAIN, 12)"
    :pushedActionCode="`body_button10`"
  />
  <JCFPushButton
    :bounds="[216, 72, 32, 24]"
    :id="`body_button12`"
    :label="`検索`"
    :font="new Font('Monospaced', Font.PLAIN, 12)"
    :pushedActionCode="`body_button12`"
  />
  <JCFPushButton
    :bounds="[288, 104, 32, 24]"
    :id="`body_button13`"
    :label="`検索`"
    :font="new Font('Monospaced', Font.PLAIN, 12)"
    :pushedActionCode="`body_button13`"
  />
  <JCFPushButton
    :bounds="[888, 456, 48, 24]"
    :id="`addRow`"
    :label="`行追加`"
    :font="new Font('Monospaced', Font.PLAIN, 12)"
    :pushedActionCode="`body_button11`"
  />
  <JCFLabel
    :bounds="[24, 8, 144, 24]"
    :text="`*&nbsp;配賦区分　　　　：`"
  />
  <JCFLabel
    :bounds="[24, 40, 144, 24]"
    :text="`*&nbsp;年度　　　　　　：`"
  />
  <JCFLabel
    :bounds="[240, 40, 24, 24]"
    :background="Color.white"
    :text="`年`"
  />
  <JCFLabel
    :bounds="[24, 72, 144, 24]"
    :text="`*&nbsp;職場　　　　　　：`"
  />
  <JCFLabel
    :bounds="[848, 80, 24, 24]"
    :text="`全`"
  />
  <JCFLabel
    :bounds="[920, 80, 24, 24]"
    :text="`件`"
  />
  <JCFLabel
    :bounds="[24, 104, 144, 24]"
    :text="`　科目－補助科目&nbsp;&nbsp;：`"
  />
  <JCFLabel
    :bounds="[216, 104, 24, 24]"
    :text="`―`"
  />
  <JCFLabel
    :bounds="[440, 104, 24, 24]"
    :text="`―`"
  />
  <JCFLabel
    :bounds="[856, 104, 88, 24]"
    :text="`（単位：％）`"
  />
  <JCFLabel
    :bounds="[296, 456, 88, 24]"
    :background="new Color(182, 198, 250)"
    :alignmentHorizontal="JFAlignment.CENTER"
    :alignmentVertical="JFAlignment.CENTER"
    :text="`合　計`"
  />
  <JCFFieldString
    :bounds="[168, 72, 48, 24]"
    :id="`cdSoshiki`"
    :inputMode="JFField.MODE_NATIVE"
    :maxLength="6.0"
    :maxByteLength="6.0"
    :enableType="JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER"
  />
  <JCFFieldString
    :bounds="[248, 72, 112, 24]"
    :id="`nmSoshiki`"
    :enabled="false"
    :editable="false"
    :borderType="JFLineType.NOTHING"
    :inactiveForeground="SystemColor.textText"
  />
  <JCFFieldString
    :bounds="[168, 104, 40, 24]"
    :id="`cdKanjokamoku`"
    :inputMode="JFField.MODE_NATIVE"
    :maxLength="5.0"
    :maxByteLength="5.0"
    :enableType="JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER"
  />
  <JCFFieldString
    :bounds="[240, 104, 48, 24]"
    :id="`cdHojokamoku`"
    :inputMode="JFField.MODE_NATIVE"
    :maxLength="6.0"
    :maxByteLength="6.0"
    :enableType="JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER"
  />
  <JCFFieldString
    :bounds="[328, 104, 112, 24]"
    :id="`nmKanjokamoku`"
    :enabled="false"
    :editable="false"
    :borderType="JFLineType.NOTHING"
    :inactiveForeground="SystemColor.textText"
  />
  <JCFFieldString
    :bounds="[464, 104, 112, 24]"
    :id="`nmHojokamoku`"
    :enabled="false"
    :editable="false"
    :borderType="JFLineType.NOTHING"
    :inactiveForeground="SystemColor.textText"
  />
  <JCFComboBox
    :bounds="[168, 40, 64, 24]"
    :id="`dtNendo`"
    :selectableElements="[]"
    :font="new Font('Monospaced', Font.PLAIN, 12)"
  />
  <YUKIFieldLong
    :bounds="[872, 80, 40, 24]"
    :borderType="JFLineType.NOTHING"
    :id="`count`"
    :enabled="false"
    :inactiveForeground="SystemColor.textText"
    :value="`0`"
  />
  <YUKIFieldDouble
    :bounds="[384, 456, 64, 24]"
    :id="`sumYosanHiritsu`"
    :enabled="false"
    :borderWidth="1"
    :borderType="JFLineType.FLAT"
    :borderColor="new Color(216, 228, 248)"
    :inactiveForeground="SystemColor.textText"
    :alignmentHorizontal="JFAlignment.CENTER"
    :equalBackground="SystemColor.control"
    :greaterBackground="SystemColor.control"
    :initialValueDisplay="false"
    :lessBackground="SystemColor.control"
  />
  <YUKIFieldDouble
    :bounds="[448, 456, 64, 24]"
    :id="`sumJissekiHiritsu`"
    :enabled="false"
    :borderWidth="1"
    :borderType="JFLineType.FLAT"
    :borderColor="new Color(216, 228, 248)"
    :inactiveForeground="SystemColor.textText"
    :alignmentHorizontal="JFAlignment.CENTER"
    :equalBackground="SystemColor.control"
    :greaterBackground="SystemColor.control"
    :initialValueDisplay="false"
    :lessBackground="SystemColor.control"
  />
  <YUKIFieldDouble
    :bounds="[512, 456, 64, 24]"
    :id="`sumZenkaiYosan`"
    :enabled="false"
    :borderWidth="1"
    :borderType="JFLineType.FLAT"
    :borderColor="new Color(216, 228, 248)"
    :inactiveForeground="SystemColor.textText"
    :alignmentHorizontal="JFAlignment.CENTER"
    :equalBackground="SystemColor.control"
    :greaterBackground="SystemColor.control"
    :initialValueDisplay="false"
    :lessBackground="SystemColor.control"
  />
  <YUKIFieldDouble
    :bounds="[576, 456, 64, 24]"
    :id="`sumZenkaiJisseki`"
    :enabled="false"
    :borderWidth="1"
    :borderType="JFLineType.FLAT"
    :borderColor="new Color(216, 228, 248)"
    :inactiveForeground="SystemColor.textText"
    :alignmentHorizontal="JFAlignment.CENTER"
    :equalBackground="SystemColor.control"
    :greaterBackground="SystemColor.control"
    :initialValueDisplay="false"
    :lessBackground="SystemColor.control"
  />
  <!-- <WijmoGrid
    :headerAndColumnProperty="{'columns': {'headerColumns': 0,'columnCount':  11,'headerColumnInfo': null,'columnInfo': [{'baseColumnInfo': {'width':32,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': new Font('Monospaced', Font.PLAIN, 14),'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.CHECKBOX,'editflag': JCFSpreadColumnInfoProperty.COL_EDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 32,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':80,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': new Font('Monospaced', Font.PLAIN, 14),'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,'editflag': JCFSpreadColumnInfoProperty.COL_EDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_AUTOIME|JCFSpreadColumnInfoProperty.COL_IMEONCURSOR|JCFSpreadColumnInfoProperty.COL_IMEMODE_NATIVE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOA,'pattern': '','label': '','selectableElements': [],'maxByteLength': 6,'minimumWidth': 80,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':32,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': new Font('Monospaced', Font.PLAIN, 12),'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.PUSHBUTTON,'editflag': JCFSpreadColumnInfoProperty.COL_EDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_,'pattern': '','label': 検索,'selectableElements': [],'maxByteLength': -1,'minimumWidth': 32,'sortStart': 0,'sortEnd': -1,'buttonActionCode': 'body_button14','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':176,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': new Font('Monospaced', Font.PLAIN, 14),'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 176,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':32,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': new Font('Monospaced', Font.PLAIN, 14),'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.NUMBER,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 32,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':64,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': new Font('Monospaced', Font.PLAIN, 14),'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.NUMBER,'editflag': JCFSpreadColumnInfoProperty.COL_EDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_AUTOIME|JCFSpreadColumnInfoProperty.COL_IMEONCURSOR|JCFSpreadColumnInfoProperty.COL_IMEMODE_NATIVE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOAR,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 64,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':64,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': new Font('Monospaced', Font.PLAIN, 14),'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.NUMBER,'editflag': JCFSpreadColumnInfoProperty.COL_EDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_AUTOIME|JCFSpreadColumnInfoProperty.COL_IMEONCURSOR|JCFSpreadColumnInfoProperty.COL_IMEMODE_NATIVE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOAR,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 64,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':64,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': new Font('Monospaced', Font.PLAIN, 14),'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.NUMBER,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_AUTOIME|JCFSpreadColumnInfoProperty.COL_IMEONCURSOR|JCFSpreadColumnInfoProperty.COL_IMEMODE_NATIVE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOAR,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 64,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':64,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': new Font('Monospaced', Font.PLAIN, 14),'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.NUMBER,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_AUTOIME|JCFSpreadColumnInfoProperty.COL_IMEONCURSOR|JCFSpreadColumnInfoProperty.COL_IMEMODE_NATIVE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOAR,'pattern': '','label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 64,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':144,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': new Font('Monospaced', Font.PLAIN, 14),'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.DATE,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_,'pattern': yyyy/MM/dd H:mm:ss,'label': '','selectableElements': [],'maxByteLength': -1,'minimumWidth': 144,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},{'baseColumnInfo': {'width':144,'background': SystemColor.window,'foreground': SystemColor.windowText,'borderColor': SystemColor.window,'borderWidth': 0,'font': new Font('Monospaced', Font.PLAIN, 14),'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.LEFT,'alignmentVertical': JCFSpread.CENTER},'name': null,'editType': JCFSpread.STRING,'editflag': JCFSpreadColumnInfoProperty.COL_UNEDITABLE|JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED|JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED|JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE|JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE|JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY|JCFSpreadColumnInfoProperty.COL_CLIPBOARD_,'pattern': '','label': ,'selectableElements': [],'maxByteLength': -1,'minimumWidth': 144,'sortStart': 0,'sortEnd': -1,'buttonActionCode': '','itemActionCode': '','textActionCode': ''},'header': {'rowCount': 1,'columnCount': 11,'headerCell': [[ {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  削除,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  職場コード,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  ,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  職場名,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  階層,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  予算比率,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  実績比率,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  前回予算,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  前回実績,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  更新日時,'sortColumn':  null)}, {'width': 80,'background': new Color(182, 198, 250) ,'foreground': Color.black, ,'font': new Font('Monospaced', Font.PLAIN, 14),,'borderColor': new Color(182, 198, 250),'borderWidth':  1 ,'borderType': JCFSpread.FLAT,'alignmentHorizontal': JCFSpread.CENTER,'alignmentVertical': JCFSpread.CENTER)},'title':  更新者,'sortColumn':  null)}]],'height':[24]},'recordInfo': {'layout': [['__COL_1','__COL_2','__COL_3','__COL_4','__COL_5','__COL_6','__COL_7','__COL_8','__COL_9','__COL_10]], 'colWidth': [  64, 39, 80, 41, 80, 80, 80, 80, 80, 80, 80  ], 'rowHeight': [24],'fixedColumns': 0}}"
  /> -->
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import YUKIFieldLong from '@/components/jcf/YUKIFieldLong/index.vue'
import YUKIFieldDouble from '@/components/jcf/YUKIFieldDouble/index.vue'
import JCFFieldString from '@/components/jcf/JCFFieldString/index.vue'
import JCFComboBox from '@/components/jcf/JCFComboBox/index.vue'
// import WijmoGrid from '@/components/jcf/WijmoGrid/index.vue'
import JCFLabel from '@/components/jcf/JCFLabel/index.vue'
import JCFToggleButton from '@/components/jcf/JCFToggleButton/index.vue'
import JCFPushButton from '@/components/jcf/JCFPushButton/index.vue'
import JCFButtonGroup from '@/components/jcf/JCFButtonGroup/index.vue'
import { SystemColor } from '@/lib/native/awt/SystemColor'
import { Color } from '@/lib/native/awt/Color'
import { JFAlignment } from '@/lib/jcf/gui/JFAlignment'
import { CJSpread } from '@/lib/jcf/gui/CJSpread'
import { JFField } from '@/lib/jcf/gui/JFField'
import { JFEnableType } from '@/lib/jcf/gui/JFEnableType'
import { JFLineType } from '@/lib/jcf/gui/JFLineType'
import { Font } from '@/lib/native/awt/Font'

// ロジックを導入する。
import Logic from '../logic/YBMKKSF624SLogic'
// const logic = new Logic()
</script>