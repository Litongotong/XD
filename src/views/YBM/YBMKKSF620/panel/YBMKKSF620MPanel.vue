<template>
  <JCFPanelLayout
    :layout="null"
    :foreground="Color.black"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :dimension="new Dimension(1000, 510)"
  >
    <JCFButtonGroup
      :bounds="[168, 8, 408, 24]"
      :borderWidth="0"
      :borderType="JFLineType.NOTHING"
      :name="`JCFButtonGroup1`"
    >
      <JCFToggleButton
        :bounds="[0, 0, 112, 24]"
        :id="`jigyoTorokuHiritsu`"
        :label="`事業登録比率`"
        :container="`JCFButtonGroup1`"
      />
      <JCFToggleButton
        :bounds="[120, 0, 264, 24]"
        :id="`lineHiritsu`"
        :label="`ライン比率（共通職場→ライン職場）`"
        :container="`JCFButtonGroup1`"
        :pushedActionCode="`stHaifuSelected1`"
      />
    </JCFButtonGroup>
    <JCFPushButton
      :bounds="[848, 48, 32, 24]"
      :id="`fukusya`"
      :label="`複写`"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
      :pushedActionCode="`body_button02`"
    />
    <JCFPushButton
      :bounds="[896, 48, 32, 24]"
      :id="`body_button03`"
      :label="`表示`"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
      :pushedActionCode="`body_button03`"
    />
    <JCFPushButton
      :bounds="[216, 72, 32, 24]"
      :id="`body_button05`"
      :label="`検索`"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
      :pushedActionCode="`body_button05`"
    />
    <JCFPushButton
      :bounds="[288, 104, 32, 24]"
      :id="`body_button06`"
      :label="`検索`"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
      :pushedActionCode="`body_button06`"
    />
    <JCFPushButton
      :bounds="[888, 456, 48, 24]"
      :id="`addRow`"
      :label="`行追加`"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
      :pushedActionCode="`body_button04`"
    />
    <JCFLabel :bounds="[24, 8, 144, 24]" :text="`*&nbsp;配賦区分　　　　：`" />
    <JCFLabel :bounds="[24, 40, 144, 24]" :text="`*&nbsp;年度　　　　　　：`" />
    <JCFLabel
      :bounds="[240, 40, 24, 24]"
      :background="Color.white"
      :text="`年`"
    />
    <JCFLabel :bounds="[24, 72, 144, 24]" :text="`*&nbsp;組織　　　　　　：`" />
    <JCFLabel :bounds="[848, 80, 24, 24]" :text="`全`" />
    <JCFLabel :bounds="[920, 80, 24, 24]" :text="`件`" />
    <JCFLabel
      :bounds="[24, 104, 144, 24]"
      :text="`　科目－補助科目&nbsp;&nbsp;：`"
    />
    <JCFLabel :bounds="[216, 104, 24, 24]" :text="`―`" />
    <JCFLabel :bounds="[440, 104, 24, 24]" :text="`―`" />
    <JCFLabel :bounds="[856, 104, 88, 24]" :text="`（単位：％）`" />
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

    <SMSJCFSpread
      :id="`spread`"
      :item-source="itemSource"
      :scroll-mask="CJSpread.SCRL_VERTICALAUTO"
      :default-cell-height="24"
      :key-open-mode="true"
      :double-color="true"
      :close-move-mode="4"
      :headerAndColumnProperty="spreadColumnInfo"
      :bounds="[24, 136, 928, 301]"
    />
  </JCFPanelLayout>
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import {
  JCFPanelLayout,
  Dimension,
  YUKIFieldLong,
  YUKIFieldDouble,
  JCFFieldString,
  JCFComboBox,
  JCFLabel,
  JCFToggleButton,
  JCFPushButton,
  JCFButtonGroup,
  SMSJCFSpread,
  SystemColor,
  Color,
  JFAlignment,
  CJSpread,
  JFField,
  JFEnableType,
  JFLineType,
  Font,
} from '@/components/jcf/entry'
/** NOTE: 一時導入。スプレッド列情報の変換が正常に終了後に削除。 */
import { spreadColumnInfo } from '@/components/jcf/JCFSpread/data'
import type { ItemSource } from '@/components/jcf/JCFSpread/types'
import { getGlobalContext } from '@/lib/adapter/hooks/context'
import { toHashMap } from '@/lib/call/utils/class'

// ロジックを導入する。
import Logic from '../logic/YBMKKSF620MLogic'
const logic = new Logic()

// [[Spread Dummy Data Panel Type]]
const itemSource: ItemSource = Array.from({ length: 5 }, () => ({
  __COL_0: false,
  __COL_1: '123456',
  __COL_2: null,
  __COL_3: '１２３４５６７８９０１',
  __COL_4: 1,
  __COL_5: 1237.45,
  __COL_6: 1237.45,
  __COL_7: 1237.45,
  __COL_8: 1237.45,
  __COL_9: '20240421110909128',
  __COL_10: '１２３４５６７８９',
}))

// [[Spread Dummy Data Logic Type]]
// const context = getGlobalContext().context
// const hashMapData = [
//   toHashMap({
//     nuJiskHaifuritsu: '22.02',
//     nmHaifu: 'セイ2',
//     noKaisoLevel: '1',
//     nmKoshinsha: '雪次郎',
//     nuYsnZenHaifuritsu: '22.03',
//     tmKoshin: '20240421110909128',
//     nuYsnHaifuritsu: 2222.01,
//     nuJiskZenHaifuritsu: 2222.04,
//     cdHaifu: '103386',
//   }),
// ]
// setTimeout(() => {
//   console.log('start set data to spread')
//   logic.setDataToSpread(context, hashMapData)
//   console.log('end set data to spread')
// }, 3000)
</script>
