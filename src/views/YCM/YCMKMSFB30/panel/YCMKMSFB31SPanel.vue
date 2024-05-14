
 <template>
  <SMSJCFSpread
    :headerAndColumnProperty="spreadData"
  />
  <JCFPanelLayout
    :foreground="Color.black"
    :font="new Font('Monospaced', Font.PLAIN, 12)"
    :width="1000"
    :height="1000"
  />
  <!-- :dimension="1000, 544" -->
  <JCFPushButton
    :bounds="[248, 80, 40, 24]"
    :id="`GeneralSearch021`"
    :label="`検索`"
    :name="`JCFPushButton5`"
  />
  <JCFLabel
    :bounds="[920, 8, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :alignmentHorizontal="JFAlignment.CENTER"
    :text="`/\r\n`"
  />
  <JCFLabel
    :bounds="[40, 48, 136, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`1.従業員コード`"
  />
  <JCFLabel
    :bounds="[184, 48, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFFieldString
    :bounds="[200, 48, 88, 24]"
    :id="`nmRonrisakujo`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFEnableType.TYPE_DIGIT"
    :enableType="JFLineType.NOTHING"

  />
  <JCFLabel
    :bounds="[40, 80, 144, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`2.損益管理組織コード`"
  />
  <JCFLabel
    :bounds="[184, 80, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFFieldString
    :bounds="[200, 80, 40, 24]"
    :id="`nmRonrisakujo`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFEnableType.TYPE_DIGIT"
    :enableType="JFLineType.NOTHING"

  />
  <JCFLabel
    :bounds="[40, 112, 128, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`3.管理フラグ`"
  />
  <JCFLabel
    :bounds="[184, 112, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFFieldString
    :bounds="[200, 112, 88, 24]"
    :id="`nmRonrisakujo`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFEnableType.TYPE_DIGIT"
    :enableType="JFLineType.NOTHING"
  />
  <JCFLabel
    :bounds="[40, 144, 104, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`4.社員区分`"
  />
  <JCFLabel
    :bounds="[184, 144, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFComboBox
      :bounds="[192, 144, 104, 24]"
      :id="`stShain`"
      :selectableElements="[]"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
    />

  <JCFLabel
    :bounds="[40, 176, 96, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`5.従業員名称`"
  />
  <JCFLabel
    :bounds="[184, 176, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />

  <JCFLabel
    :bounds="[200, 176, 48, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`(苗字)`"
  />
  <JCFLabel
    :bounds="[360, 176, 48, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`(名前)`"
  />
  <JCFLabel
    :bounds="[184, 208, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFFieldString
    :bounds="[200, 208, 120, 24]"
    :id="`nmRonrisakujo`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFEnableType.TYPE_DIGIT"
    :enableType="JFLineType.NOTHING"
  />
  <JCFFieldString
    :bounds="[360, 208, 120, 24]"
    :id="`nmRonrisakujo`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFEnableType.TYPE_DIGIT"
    :enableType="JFLineType.NOTHING"
  />
  
  <JCFLabel
    :bounds="[40, 240, 128, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`6.従業員カナ名称`"
  />
  <JCFLabel
    :bounds="[184, 240, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFLabel
    :bounds="[200, 240, 48, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`(苗字)`"
  />
  <JCFLabel
    :bounds="[360, 240, 48, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`(名前)`"
  />

  <JCFLabel
    :bounds="[184, 272, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFFieldString
    :bounds="[200, 272, 120, 24]"
    :id="`nmRonrisakujo`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFEnableType.TYPE_DIGIT"
    :enableType="JFLineType.NOTHING"
  />
  <JCFFieldString
    :bounds="[360, 272, 120, 24]"
    :id="`nmRonrisakujo`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFEnableType.TYPE_DIGIT"
    :enableType="JFLineType.NOTHING"
  />
  <JCFLabel
    :bounds="[40, 304, 128, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`7.メールアドレス`"
  />
  <JCFLabel
    :bounds="[184, 304, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFFieldString
    :bounds="[200, 304, 280, 24]"
    :id="`nmRonrisakujo`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFEnableType.TYPE_DIGIT"
    :enableType="JFLineType.NOTHING"
  />

  <JCFLabel
    :bounds="[40, 336, 128, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`7.在籍区分`"
  />
  <JCFLabel
    :bounds="[184, 336, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFComboBox
      :bounds="[200, 336, 120, 24]"
      :id="`stShain`"
      :selectableElements="[]"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
    />
  <JCFLabel
    :bounds="[528, 336, 80, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`12.入社日`"
  />
  <JCFLabel
    :bounds="[624, 336, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFFieldString
    :bounds="[640, 336, 120, 24]"
    :id="`nmRonrisakujo`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFEnableType.TYPE_DIGIT"
    :enableType="JFLineType.NOTHING"
  />
  <JCFLabel
    :bounds="[40, 368, 128, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`8.休職判定フラグ`"
  />
  <JCFLabel
    :bounds="[184, 368, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFLabel
    :bounds="[528, 368, 96, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`13.SS終了日`"
  />
  <JCFLabel
    :bounds="[624, 368, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFFieldString
    :bounds="[640, 368, 120, 24]"
    :id="`nmRonrisakujo`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFEnableType.TYPE_DIGIT"
    :enableType="JFLineType.NOTHING"
  />
  <JCFLabel
    :bounds="[40, 400, 128, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`9.退職判定フラグ`"
  />
  <JCFLabel
    :bounds="[184, 400, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFLabel
    :bounds="[528, 400, 96, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`14.作成日時`"
  />
  <JCFLabel
    :bounds="[624, 400, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFFieldString
    :bounds="[640, 400, 120, 24]"
    :id="`nmRonrisakujo`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFEnableType.TYPE_DIGIT"
    :enableType="JFLineType.NOTHING"
  />
  <JCFLabel
    :bounds="[32, 432, 128, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`10.休職開始年月日`"
  />
  <JCFLabel
    :bounds="[184, 432, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFLabel
    :bounds="[528, 432, 96, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`15.作成者`"
  />
  <JCFLabel
    :bounds="[624, 432, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFFieldString
    :bounds="[640, 432, 120, 24]"
    :id="`nmRonrisakujo`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFEnableType.TYPE_DIGIT"
    :enableType="JFLineType.NOTHING"
  />
  <JCFFieldString
    :bounds="[360, 272, 120, 24]"
    :id="`nmRonrisakujo`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFEnableType.TYPE_DIGIT"
    :enableType="JFLineType.NOTHING"
  />
  <JCFLabel
    :bounds="[32, 464, 112, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`11.退職年月日`"
  />
  <JCFLabel
    :bounds="[184, 464, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFLabel
    :bounds="[528, 464, 96, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`16.更新日時`"
  />
  <JCFLabel
    :bounds="[624, 464, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />
  <JCFFieldString
    :bounds="[640, 464, 120, 24]"
    :id="`nmRonrisakujo`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :inputMode="JFEnableType.TYPE_DIGIT"
    :enableType="JFLineType.NOTHING"
  />
  <JCFLabel
    :bounds="[528, 496, 96, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`17.更新者`"
  />
  <JCFLabel
    :bounds="[624, 496, 16, 24]"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :text="`:`"
  />


  <JCFToggleButton
    :bounds="[56, 16, 56, 24]"
    :name="`JCFToggleButton9`"
    :id="`body_delete`"
    :label="`削除`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :pushedActionCode="`body_delete`"
  />
  <JCFToggleButton
    :bounds="[120, 16, 56, 24]"
    :name="`JCFToggleButton10`"
    :id="`body_copy`"
    :label="`複写`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :pushedActionCode="`body_copy`"
  />
  <JCFToggleButton
    :bounds="[184, 16, 88, 24]"
    :name="`JCFToggleButton11`"
    :id="`body_cancel`"
    :label="`削除解除`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :pushedActionCode="`body_cancel`"
  />
  <YUKIFieldLong
    :bounds="[880, 8, 40, 24]"
    :borderType="JFLineType.NOTHING"
    :id="`qtRow`"
    :enabled="false"
    :editable="false"
  />
  <YUKIFieldLong
    :bounds="[936, 8, 40, 24]"
    :borderType="JFLineType.NOTHING"
    :id="`qtKensaku`"
    :enabled="false"
    :editable="false"
  />

</template>

<script lang="ts" setup>
 const spreadData = {

 }
// 共通部品を導入する。
import {
  // global,
  JCFComboBox,
  JCFFieldString,
  JCFPushButton,
  JCFToggleButton,
  SMSJCFSpread,
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
  JCFPanelLayout,
  Dimension,
} from '@/components/jcf/entry'

// ロジックを導入する。
import Logic from '../logic/YCMKMSFB31SLogic'
const logic = new Logic()
// User custom logic flag: True,True
</script>

