<template>
  <JCFLabel
    :alignment-vertical="JFAlignment.CENTER"
    :text="`ユーザID　　　　：`"
    :foreground="Color.black"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :bounds="[288, 96, 160, 25]"
  />
  <JCFFieldString
    :enable-type="JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER"
    :id="`cdUserId`"
    :maxByteLength="8"
    :maxLength="8"
    :bounds="[456, 96, 260, 25]"
  />
  <JCFLabel
    :alignmentVertical="JFAlignment.CENTER"
    :text="`パスワード　　　：`"
    :foreground="Color.black"
    :font="new Font(`Monospaced`, Font.PLAIN, 14)"
    :bounds="[288, 144, 160, 25]"
  />
  <JCFFieldString
    :echoChar="`*`"
    :id="`ifPassword`"
    :maxByteLength="8"
    :maxLength="8"
    :enableType="
      JFEnableType.TYPE_DIGIT
        | JFEnableType.TYPE_LETTER
        | JFEnableType.TYPE_SPECIAL
    "
    :bounds="[456, 144, 260, 25]"
  />
  <JCFFieldString
    :text="`運用日付        ：`"
    :borderType="JFLineType.NOTHING"
    :editable="false"
    :id="`dtUnyoHidukeTitle`"
    :focusable="false"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :bounds="[288, 190, 128, 24]"
  />
  <SMSJCFFieldFilledDateExt
    :id="`dtUnyoHiduke`"
    :bounds="[456, 192, 260, 25]"
  />
  <JCFPushButton
    :label="`ログイン`"
    :pushedActionCode="`login`"
    :bounds="[392, 232, 136, 24]"
  />
  <JCFImage
    :background="Color.white"
    :bounds="[100, 280, 800, 200]"
    :alignmentHorizontal="JFAlignment.CENTER"
    :alignmentVertical="JFAlignment.CENTER"
    :imageURL="logoUrl"
  />
</template>

<script setup lang="ts">
import {
  JCFFieldString,
  JCFLabel,
  JCFPushButton,
  JFAlignment,
  Color,
  Font,
  JFEnableType,
  JFLineType,
  SMSJCFFieldFilledDateExt,
  JCFImage,
} from '@/components/jcf/entry'
import Logic from '../logic/YCSCMNF010MLogic'
import logoUrl from '@/views/YIN/YCSWEB/img/logo.jpg'

const logic = new Logic()
</script>
