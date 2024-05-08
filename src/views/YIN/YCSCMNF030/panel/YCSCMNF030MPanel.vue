<template>
  <JCFPushButton
    :name="`JCFPushButton21`"
    :label="`BUTTON01`"
    :borderType="JFLineType.NOTHING"
    :imageRegion="new Rectangle(0, 0, 280, 48)"
    :labelPosition="new Point(20, 15)"
    :background="SystemColor.menu"
    :font="new Font('Dialog', Font.PLAIN, 14)"
    :pushedActionCode="`infraSystem`"
    :id="`MSS00000000`"
    :bounds="[48, 32, 280, 4]"
    :image="buttonImgUrl"
  />
  <JCFPushButton
    :label="`BUTTON02`"
    :background="SystemColor.menu"
    :borderType="JFLineType.NOTHING"
    :imageRegion="new Rectangle(0, 0, 280, 48)"
    :labelPosition="new Point(20, 15)"
    :font="new Font('Dialog', Font.PLAIN, 14)"
    :pushedActionCode="`dwh`"
    :id="`DWH00000000`"
    :bounds="[48, 112, 280, 48]"
  />
  <JCFPushButton
    :name="`JCFPushButton21`"
    :label="`BUTTON03`"
    :background="SystemColor.menu"
    :borderType="JFLineType.NOTHING"
    :imageRegion="new Rectangle(0, 0, 280, 48)"
    :labelPosition="new Point(20, 15)"
    :font="new Font('Dialog', Font.PLAIN, 14)"
    :pushedActionCode="`listworks`"
    :id="`LWS00000000`"
    :bounds="[48, 192, 280, 48]"
  />
  <JCFPushButton
    :name="`JCFPushButton21`"
    :label="`BUTTON04`"
    :background="SystemColor.menu"
    :borderType="JFLineType.NOTHING"
    :imageRegion="new Rectangle(0, 0, 280, 48)"
    :labelPosition="new Point(20, 15)"
    :font="new Font('Dialog', Font.PLAIN, 14)"
    :pushedActionCode="`mainMenuSelect`"
    :id="`button04`"
    :bounds="[48, 272, 280, 48]"
  />
  <JCFPushButton
    :name="`JCFPushButton21`"
    :label="`BUTTON05`"
    :background="SystemColor.menu"
    :borderType="JFLineType.NOTHING"
    :imageRegion="new Rectangle(0, 0, 280, 48)"
    :labelPosition="new Point(20, 15)"
    :font="new Font('Dialog', Font.PLAIN, 14)"
    :pushedActionCode="`mainMenuSelect`"
    :id="`button05`"
    :bounds="[48, 352, 280, 48]"
  />
  <JCFPushButton
    :name="`JCFPushButton21`"
    :label="`BUTTON06`"
    :background="SystemColor.menu"
    :borderType="JFLineType.NOTHING"
    :imageRegion="new Rectangle(0, 0, 280, 48)"
    :labelPosition="new Point(20, 15)"
    :font="new Font('Dialog', Font.PLAIN, 14)"
    :pushedActionCode="`mainMenuSelect`"
    :id="`button06`"
    :bounds="[48, 424, 280, 48]"
  />
  <JCFGroupBox
    :label="`トピック`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :layout="null"
    :bounds="[472, 16, 488, 472]"
  >
    <YUKIFieldFilledDate
      :id="`topicDate`"
      :borderType="JFLineType.NOTHING"
      :editable="false"
      :bounds="[48, 24, 76, 26]"
    />
    <JCFFieldString
      :id="`topicLabel`"
      :borderType="JFLineType.NOTHING"
      :editable="false"
      :bounds="[48, 56, 408, 24]"
    />
    <JCFTextArea 
      :id="`topicContents`"
      :borderType="JFLineType.NOTHING"
      :inactiveForeground="SystemColor.windowText"
      :editable="false"
      :bounds="[48, 88, 408, 344]"
    />
  </JCFGroupBox>
  <JCFFieldString 
    :borderType="JFLineType.NOTHING"
    :editable="false"
    :enabled="false"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :id="`zenkaiLogin`"
    :inactiveForeground="SystemColor.windowText"
    :bounds="[192, 480, 136, 24]"
  />
  <JCFLabel
    :text="`前回ログイン日時：`"
    :font="new Font('Monospaced', Font.PLAIN, 14)"
    :bounds="[48, 480, 136, 24]"
  />
</template>

<script setup lang="ts">
import {
  JCFPushButton,
  JCFGroupBox,
  JCFLabel,
  JCFFieldString,
  JCFTextArea,
  YUKIFieldFilledDate,
  JFLineType,
  SystemColor,
  Font,
  Rectangle,
  Point,
} from '@/components/jcf/entry'
import buttonImgUrl from '@/views/YIN/YCSWEB/img/menu_button01.png'
import Logic from '../logic/YCSCMNF030MLogic'

const logic = new Logic()
</script>
