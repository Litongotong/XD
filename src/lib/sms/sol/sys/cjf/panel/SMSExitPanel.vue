<template>
  <JCFPanelLayout>
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
} from '@/components/jcf/entry'
</script>
