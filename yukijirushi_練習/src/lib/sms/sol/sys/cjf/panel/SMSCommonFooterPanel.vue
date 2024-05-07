<template>
  <JCFPanelLayout
    :background="Color.white"
    :foreground="Color.black"
    :font="new Font('ＭＳ ゴシック', Font.PLAIN, 14)"
    :dimension="new Dimension(1000, 64)"
  >
    <JCFFieldString
      :id="`footer_message`"
      :inactiveForeground="Color.red"
      :font="new Font('ＭＳ ゴシック', Font.BOLD, 14)"
      :bounds="[16, 8, 944, 24]"
      :enabled="false"
      :editable="false"
    />
    <JCFPushButton
      :id="`button1`"
      :label="`機能１`"
      :pushedActionCode="`footer_button01`"
      :font="new Font('ＭＳ ゴシック', Font.PLAIN, 12)"
      :bounds="[16, 32, 96, 24]"
    />
    <JCFPushButton
      :id="`button2`"
      :label="`機能２`"
      :pushedActionCode="`footer_button02`"
      :font="new Font('ＭＳ ゴシック', Font.PLAIN, 12)"
      :bounds="[120, 32, 96, 24]"
    />
    <JCFPushButton
      :id="`button3`"
      :label="`機能３`"
      :pushedActionCode="`footer_button03`"
      :font="new Font('ＭＳ ゴシック', Font.PLAIN, 12)"
      :bounds="[224, 32, 96, 24]"
    />
    <JCFPushButton
      :id="`button4`"
      :label="`機能４`"
      :pushedActionCode="`footer_button04`"
      :font="new Font('ＭＳ ゴシック', Font.PLAIN, 12)"
      :bounds="[328, 32, 96, 24]"
    />
    <JCFPushButton
      :id="`button5`"
      :label="`機能５`"
      :pushedActionCode="`footer_button05`"
      :font="new Font('ＭＳ ゴシック', Font.PLAIN, 12)"
      :bounds="[432, 32, 96, 24]"
    />
    <JCFPushButton
      :id="`button6`"
      :label="`機能６`"
      :pushedActionCode="`footer_button06`"
      :font="new Font('ＭＳ ゴシック', Font.PLAIN, 12)"
      :bounds="[536, 32, 96, 24]"
    />
    <JCFPushButton
      :id="`button7`"
      :label="`機能７`"
      :pushedActionCode="`footer_button07`"
      :font="new Font('ＭＳ ゴシック', Font.PLAIN, 12)"
      :bounds="[640, 32, 96, 24]"
    />
    <JCFPushButton
      :id="`button8`"
      :label="`機能８`"
      :pushedActionCode="`footer_button08`"
      :font="new Font('ＭＳ ゴシック', Font.PLAIN, 12)"
      :bounds="[744, 32, 96, 24]"
    />
    <JCFPushButton
      :id="`button9`"
      :label="`機能９`"
      :pushedActionCode="`footer_button09`"
      :font="new Font('ＭＳ ゴシック', Font.PLAIN, 12)"
      :bounds="[848, 32, 96, 24]"
    />
    <JCFPushButton
      :id="`beforeBtn`"
      :label="`前へ`"
      :pushedActionCode="`beforePage`"
      :bounds="[848, 6, 46, 24]"
      :visible="false"
    />
    <JCFPushButton
      :id="`nextBtn`"
      :label="`次へ`"
      :pushedActionCode="`nextPage`"
      :bounds="[896, 6, 46, 24]"
      :visible="false"
    />
  </JCFPanelLayout>
</template>

<script setup lang="ts">
import {
  JCFFieldString,
  JCFPushButton,
  Color,
  Font,
  JCFPanelLayout,
  Dimension,
} from '@/components/jcf/entry'
</script>
