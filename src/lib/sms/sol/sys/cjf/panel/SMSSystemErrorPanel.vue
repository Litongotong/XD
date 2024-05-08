<template>
  <JCFPanelLayout
    :foreground="Color.black"
    :font="new Font('Dialog', Font.PLAIN, 12)"
    :layout="null"
    :dimension="new Dimension(1000, 510)"
  >
    <JCFLabel
      :text="`メッセージコード`"
      :foreground="Color.black"
      :background="Color.pink"
      :font="new Font('Monospaced', Font.BOLD, 12)"
      :bounds="[184, 136, 152, 24]"
    />
    <JCFFieldString
      :background="Color.white"
      :foreground="Color.red"
      :font="new Font('Monospaced', Font.BOLD, 12)"
      :borderType="JFLineType.FLAT"
      :borderWidth="1"
      :editable="false"
      :caretVisible="false"
      :id="`messageCode`"
      :text="`XXXXXXXXXX`"
      :bounds="[360, 136, 472, 24]"
    />
    <JCFLabel
      :text="`詳細`"
      :foreground="Color.black"
      :background="Color.pink"
      :font="new Font('Monospaced', Font.BOLD, 12)"
      :bounds="[184, 176, 152, 24]"
    />
    <JCFLabel
      :text="`発生日時`"
      :foreground="Color.black"
      :background="Color.pink"
      :font="new Font('Monospaced', Font.BOLD, 12)"
      :bounds="[184, 232, 152, 24]"
    />
    <JCFFieldString
      :caretVisible="false"
      :borderType="JFLineType.FLAT"
      :borderWidth="1"
      :editable="false"
      :background="Color.white"
      :foreground="Color.red"
      :font="new Font('Monospaced', Font.BOLD, 12)"
      :id="`errorDate`"
      :bounds="[360, 232, 472, 24]"
    />
    <JCFLabel :text="`：`" :bounds="[336, 136, 16, 24]" />
    <JCFLabel
      :text="`対処方法`"
      :foreground="Color.black"
      :background="Color.pink"
      :font="new Font('Monospaced', Font.BOLD, 12)"
      :visible="false"
      :bounds="[184, 272, 152, 24]"
    />
    <JCFFieldString
      :text="`システム管理者にお問い合わせください。`"
      :editable="false"
      :caretVisible="false"
      :borderType="JFLineType.FLAT"
      :borderWidth="1"
      :background="Color.white"
      :foreground="Color.red"
      :font="new Font('Monospaced', Font.BOLD, 12)"
      :id="`errorSolution`"
      :visible="false"
      :bounds="[360, 272, 472, 24]"
    />
    <JCFLabel :text="`：`" :bounds="[336, 176, 16, 24]" />
    <JCFLabel :text="`：`" :bounds="[336, 232, 16, 24]" />
    <JCFLabel :text="`：`" :visible="false" :bounds="[336, 272, 16, 24]" />
    <JCFTextArea
      :enabled="false"
      :foreground="Color.red"
      :underlineColor="Color.red"
      :font="new Font('Monospaced', Font.BOLD, 12)"
      :editable="false"
      :scrollbarVisibility="JFTextArea.SCROLLBARS_NONE"
      :borderType="JFLineType.FLAT"
      :borderWidth="1"
      :id="`errorDetail`"
      :inactiveForeground="Color.red"
      :text="`あああああ\r\nあああああ`"
      :bounds="[360, 176, 472, 40]"
    />
  </JCFPanelLayout>
</template>

<script setup lang="ts">
import {
  JCFLabel,
  JCFFieldString,
  JCFTextArea,
  Color,
  Font,
  JFLineType,
  JFTextArea,
  JCFPanelLayout,
  Dimension,
} from '@/components/jcf/entry'
import Logic from '@/views/YIN/YCSCMNF010/logic/YCSCMNF070MLogic'

const logic = new Logic()
</script>
