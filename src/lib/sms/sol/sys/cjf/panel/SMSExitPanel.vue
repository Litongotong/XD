<template>
  <JCFPanelLayout
    :background="Color.white"
    :foreground="Color.black"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :dimension="new Dimension(1016, 536)"
  >
    <JCFLabel
      :alignmentHorizontal="JFAlignment.CENTER"
      :alignmentVertical="JFAlignment.CENTER"
      :font="new Font('ＭＳ ゴシック', Font.PLAIN, 36)"
      :foreground="Color.red"
      :text="`ブラウザの[×]ボタンを押下してクローズしてください。`"
      :bounds="[312, 64, 504, 168]"
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
} from '@/components/jcf/entry'
</script>
