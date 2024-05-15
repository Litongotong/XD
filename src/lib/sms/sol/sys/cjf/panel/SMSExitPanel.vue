<template>
  <JCFPanelLayout
    :background="jcfLayoutProps.background"
    :foreground="jcfLayoutProps.foreground"
    :font="jcfLayoutProps.font"
    :dimension="jcfLayoutProps.dimension"
  >
    <JCFLabel
      :alignmentHorizontal="jcfLabel_1.alignmentHorizontal"
      :alignmentVertical="jcfLabel_1.alignmentVertical"
      :font="jcfLabel_1.font"
      :foreground="jcfLabel_1.foreground"
      :text="jcfLabel_1.text"
      :bounds="jcfLabel_1.bounds"
      :logic="jcfLabel_1_logic"
    />
  </JCFPanelLayout>
</template>

<script setup lang="ts">
import {
  JCFLabel,
  JFAlignment,
  Font,
  Color,
  JCFPanelLayout,
  Dimension,
  EComponentName,
} from '@/components/jcf/entry'
import { installInstance } from '@/components/jcf/utils/instance';

const jcfLayoutProps = {
  background: Color.white,
  foreground: Color.black,
  font: new Font('Monospaced', Font.PLAIN, 14),
  dimension: new Dimension(1016, 536),
}

const jcfLabel_1 = {
  alignmentHorizontal: JFAlignment.CENTER,
  alignmentVertical: JFAlignment.CENTER,
  font: new Font('ＭＳ ゴシック', Font.PLAIN, 36),
  foreground: Color.red,
  text: `ブラウザの[×]ボタンを押下してクローズしてください。`,
  bounds: [312, 64, 504, 168],
}
const jcfLabel_1_logic = installInstance(EComponentName.JCFLabel, jcfLabel_1)
</script>
