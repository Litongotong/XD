<template>
  <TextLabelValue
    label="工場"
    labelWidth="96"
    :textValue1="logic.cdKojoZaikoBasho"
    :textValue2="logic.nmKojoZaikoBasho"
    x="16"
    y="16"
  />

  <TextLabelValue
    label="入荷区分"
    labelWidth="88"
    :textValue1="logic.stNyuka"
    :textValue2="logic.nmNyuka"
    x="312"
    y="16"
  />

  <TextLabelValue
    label="データ区分"
    labelWidth="80"
    :textValue1="logic.stData"
    :textValue2="logic.nmData"
    x="552"
    y="16"
  />

  <TextLabelValue
    label="実績フラグ"
    labelWidth="88"
    :textValue1="logic.fgJisseki"
    :textValue2="logic.nmJisseki"
    :textValue3="logic.page"
    x="728"
    y="16"
  />

  <TextLabelValue
    label="レコードSEQ№"
    labelWidth="96"
    :textValue1="logic.noRecSeq"
    x="16"
    y="48"
  />

  <TextLabelValue
    label="MES管理番号"
    labelWidth="88"
    :textValue1="logic.noMesKanri"
    x="312"
    y="48"
  />

  <TextLabelValue
    label="訂正区分"
    labelWidth="80"
    :textValue1="logic.stTeisei"
    :textValue2="logic.nmTeisei"
    x="552"
    y="48"
  />

  <TextLabelValue
    label="展開状態"
    labelWidth="96"
    :textValue1="logic.nmTenkai"
    x="16"
    y="80"
  />

  <TextLabelValue
    label="状態"
    labelWidth="88"
    :textValue1="logic.ifJyoutai"
    x="312"
    y="80"
  />

  <TextLabelValue
    label="受信キー"
    labelWidth="96"
    :textValue1="logic.cdJushinkey"
    x="16"
    y="112"
  />

  <TextLabelValue
    label="受信日時"
    labelWidth="88"
    :textValue1="logic.tmJushin"
    x="312"
    y="112"
  />

  <TextLabelValue
    label="分割データ№"
    labelWidth="88"
    :textValue1="logic.noBunkatsuData"
    x="728"
    y="112"
  />

  <TextLabelValue
    label="品目"
    labelWidth="96"
    :textValue1="logic.nmItemCdShikibetsu"
    :textValue2="logic.cdItem"
    :textValue3="logic.nmHinmpkuRyakushiki"
    x="16"
    y="160"
  />

  <TextLabelValue
    label="取引先（原材料）"
    labelWidth="104"
    :textValue1="logic.cdTorihikisaki2"
    :textValue2="logic.nmTorihikisaki2"
    x="504"
    y="160"
  />

  <TextLabelValue
    label="取引先"
    labelWidth="96"
    :textValue1="logic.cdTorihikisaki"
    :textValue2="logic.nmTorihikisaki"
    x="16"
    y="192"
  />

  <TextLabelValue
    label="生産工場"
    labelWidth="104"
    :textValue1="logic.cdSeisanKojo"
    :textValue2="logic.nmSeisanKojo"
    x="504"
    y="192"
  />

  <TextLabelValue
    label="出荷場所"
    labelWidth="96"
    :textValue1="logic.cdSyukasoko"
    :textValue2="logic.nmSyukasoko"
    x="16"
    y="224"
  />

  <TextLabelValue
    label="入荷場所"
    labelWidth="104"
    :textValue1="logic.cdNyukasoko"
    :textValue2="logic.nmNyukasoko"
    x="504"
    y="224"
  />

  <TextLabelValue
    label="数量"
    labelWidth="96"
    :textValue1="logic.qtSuryo"
    :textValue2="logic.ifSuryotani"
    x="16"
    y="256"
  />

  <TextLabelValue
    label="重量"
    labelWidth="104"
    :textValue1="logic.qtJuryo"
    :textValue2="logic.ifJuryotani"
    x="504"
    y="256"
  />

  <TextLabelValue
    label="入荷予定日"
    labelWidth="80"
    :textValue1="logic.dtUkeireyotei"
    x="808"
    y="256"
  />

  <TextLabelValue
    label="賞味期限"
    labelWidth="96"
    :textValue1="logic.dtShomikigen"
    x="16"
    y="288"
  />

  <TextLabelValue
    label="等級"
    labelWidth="80"
    :textValue1="logic.ifTokyu"
    x="240"
    y="288"
  />

  <TextLabelValue
    label="ロット"
    labelWidth="104"
    :textValue1="logic.ifLot"
    x="504"
    y="288"
  />

  <TextLabelValue
    label="サブロット"
    labelWidth="80"
    :textValue1="logic.ifSublot"
    x="808"
    y="288"
  />

  <TextLabelValue
    label="払出伝票年月日"
    labelWidth="96"
    :textValue1="logic.dtHaraidashiDenpyo"
    x="16"
    y="320"
  />

  <TextLabelValue
    label="払出伝票番号"
    labelWidth="80"
    :textValue1="logic.noHaraidashiDenpyo"
    x="240"
    y="320"
  />

  <TextLabelValue
    label="被訂正伝票年月日"
    labelWidth="104"
    :textValue1="logic.dtHiteiseiDenpyo"
    x="504"
    y="320"
  />

  <TextLabelValue
    label="被訂正伝票年番号"
    labelWidth="104"
    :textValue1="logic.noHteiseiDenpyo"
    x="784"
    y="320"
  />

  <TextLabelValue
    label="出荷伝票番号"
    labelWidth="96"
    :textValue1="logic.noSyukaDenpyo"
    x="16"
    y="360"
  />

  <TextLabelValue
    label="入荷伝票番号"
    labelWidth="104"
    :textValue1="logic.noNyukaDenpyo"
    x="504"
    y="360"
  />

  <TextLabelValue
    label="出荷場所"
    labelWidth="96"
    :textValue1="logic.cdSyukaSokoHikiate"
    :textValue2="logic.nmSyukaSokoHikiate"
    x="16"
    y="424"
  />

  <TextLabelValue
    label="数量"
    labelWidth="104"
    :textValue1="logic.qtSuryoHikiate"
    x="504"
    y="424"
  />

  <TextLabelValue
    label="重量"
    labelWidth="80"
    :textValue1="logic.qtJuryoHikiate"
    x="808"
    y="424"
  />

  <TextLabelValue
    label="賞味期限"
    labelWidth="96"
    :textValue1="logic.dtshomikigenHikiate"
    x="16"
    y="456"
  />

  <TextLabelValue
    label="等級"
    labelWidth="80"
    :textValue1="logic.ifTokyuHikiate"
    x="240"
    y="456"
  />

  <TextLabelValue
    label="ロット"
    labelWidth="104"
    :textValue1="logic.ifLotHikiate"
    x="504"
    y="456"
  />

  <TextLabelValue
    label="サブロット"
    labelWidth="80"
    :textValue1="logic.ifSublotHikiate"
    x="808"
    y="456"
  />

  <TextLabelValue
    label="取引先"
    labelWidth="96"
    :textValue1="logic.cdTorihikisakiHikiate"
    :textValue2="logic.nmTorihikisakiHikiate"
    x="16"
    y="488"
  />

  <TextLabelValue
    label="生産工場"
    labelWidth="104"
    :textValue1="logic.cdSeisanKojoHikiate"
    :textValue2="logic.nmSeisanKojoHikiate"
    x="504"
    y="488"
  />

  <BaseText label="引当変更後情報" height="24" x="16" y="392" />
  <BaseDivider x="8" y="144" />
  <BaseDivider x="8" y="352" />
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import BaseDivider from '@/components/atoms/BaseDivider.vue'
import TextLabelValue from '@/components/atoms/TextLabelValue.vue'
import BaseText from '@/components/atoms/BaseText.vue'

// ロジックを導入する。
import useYPMGSSF701SLogic from './YPMGSSF701S-logic'

// ロジックのインスタンス取得。リアクティビティを保つため、reactiveを使用する。
import { reactive } from 'vue'
const logic = reactive(useYPMGSSF701SLogic())
</script>
