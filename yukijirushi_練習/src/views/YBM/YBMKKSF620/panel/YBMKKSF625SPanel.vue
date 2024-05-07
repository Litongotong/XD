<template>

  <JCFButtonGroup
    :bounds="[64, 16, 576, 160]"
    :label="`複写元`"
  >
  </JCFButtonGroup>
  <JCFButtonGroup
    :bounds="[64, 216, 576, 144]"
    :label="`複写先`"
  >
  </JCFButtonGroup>
  <JCFButtonGroup
    :bounds="[224, 40, 232, 24]"
    :borderWidth="0.0"
    :borderType="JFLineType.NOTHING"
    :name="`JCFButtonGroup1`"
  >
  <JCFToggleButton
    :bounds="[0, 0, 120, 24]"
    :id="`jigyouTourokuHiritsu`"
    :enabled="false"
    :label="`事業登録比率`"
    :container="`JCFButtonGroup1`"
    :pushedActionCode="`stHaifuSelected3`"
  />
  <JCFToggleButton
    :bounds="[120, 0, 104, 24]"
    :id="`lineHiritsu`"
    :enabled="false"
    :label="`ライン比率`"
    :container="`JCFButtonGroup1`"
  />
  </JCFButtonGroup>
  <JCFPushButton
    :bounds="[272, 280, 32, 24]"
    :id="`body_button21`"
    :label="`検索`"
    :font="new Font('Monospaced', Font.PLAIN, 12)"
    :pushedActionCode="`body_button21`"
  />
  <JCFPushButton
    :bounds="[344, 312, 32, 24]"
    :id="`body_button22`"
    :label="`検索`"
    :font="new Font('Monospaced', Font.PLAIN, 12)"
    :pushedActionCode="`body_button22`"
  />
  <JCFLabel
    :bounds="[80, 40, 144, 24]"
    :text="`*&nbsp;配賦区分　　　　：`"
  />
  <JCFLabel
    :bounds="[80, 72, 144, 24]"
    :text="`*&nbsp;年度　　　　　　：`"
  />
  <JCFLabel
    :bounds="[296, 72, 24, 24]"
    :background="Color.white"
    :text="`年`"
  />
  <JCFLabel
    :bounds="[80, 104, 144, 24]"
    :text="`*&nbsp;職場　　　　　　：`"
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
    :text="`*&nbsp;職場　　　　　　：`"
  />
  <JCFLabel
    :bounds="[80, 312, 144, 24]"
    :text="`&nbsp;&nbsp;科目－補助科目　：`"
  />
  <JCFFieldString
    :bounds="[224, 104, 48, 24]"
    :id="`cdSoshiki`"
    :enabled="false"
    :editable="false"
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
    :bounds="[464, 136, 24, 24]"
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
    :bounds="[488, 312, 24, 24]"
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
  <!-- <WijmoGrid
    :headerAndColumnProperty="0"
  /> -->
</template>

<script lang="ts" setup>
// 共通部品を導入する。
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
import Logic from '../logic/YBMKKSF625SLogic'
// const logic = new Logic()
</script>