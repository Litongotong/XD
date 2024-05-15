<template>
  <JCFPanelLayout
    :background="jcfLayoutProps.background"
    :foreground="jcfLayoutProps.foreground"
    :font="jcfLayoutProps.font"
    :borderType="jcfLayoutProps.borderType"
    :dimension="jcfLayoutProps.dimension"
  >
    <JCFFieldString
      :id="jcfFieldString_1.id"
      :borderType="jcfFieldString_1.borderType"
      :text="jcfFieldString_1.text"
      :font="jcfFieldString_1.font"
      :bounds="jcfFieldString_1.bounds"
      :enabled="jcfFieldString_1.enabled"
      :foreground="jcfFieldString_1.foreground"
      :background="jcfFieldString_1.background"
      :inactiveForeground="jcfFieldString_1.inactiveForeground"
      :logic="jcfFieldString_1_logic"
    />
    <JCFFieldString
      :id="jcfFieldString_2.id"
      :bounds="jcfFieldString_2.bounds"
      :borderType="jcfFieldString_2.borderType"
      :editable="jcfFieldString_2.editable"
      :enabled="jcfFieldString_2.enabled"
      :foreground="jcfFieldString_2.foreground"
      :background="jcfFieldString_2.background"
      :inactiveForeground="jcfFieldString_2.inactiveForeground"
      :logic="jcfFieldString_2_logic"
    />
    <JCFFieldString
      :id="jcfFieldString_3.id"
      :bounds="jcfFieldString_3.bounds"
      :enabled="jcfFieldString_3.enabled"
      :logic="jcfFieldString_3_logic"
    />
    <JCFFieldString
      :id="jcfFieldString_4.id"
      :font="jcfFieldString_4.font"
      :bounds="jcfFieldString_4.bounds"
      :enabled="jcfFieldString_4.enabled"
      :logic="jcfFieldString_4_logic"
    />
    <JCFPushButton
      :id="jcfPushButton_5.id"
      :label="jcfPushButton_5.label"
      :font="jcfPushButton_5.font"
      :pushedActionCode="jcfPushButton_5.pushedActionCode"
      :bounds="jcfPushButton_5.bounds"
      :logic="jcfPushButton_5_logic"
    />
    <JCFPushButton
      :id="jcfPushButton_6.id"
      :label="jcfPushButton_6.label"
      :font="jcfPushButton_6.font"
      :pushedActionCode="jcfPushButton_6.pushedActionCode"
      :bounds="jcfPushButton_6.bounds"
      :logic="jcfPushButton_6_logic"
    />
    <JCFPushButton
      :id="jcfPushButton_7.id"
      :label="jcfPushButton_7.label"
      :font="jcfPushButton_7.font"
      :pushedActionCode="jcfPushButton_7.pushedActionCode"
      :bounds="jcfPushButton_7.bounds"
      :logic="jcfPushButton_7_logic"
    />
    <JCFFieldString
      :id="jcfFieldString_8.id"
      :bounds="jcfFieldString_8.bounds"
      :background="jcfFieldString_8.background"
      :foreground="jcfFieldString_8.foreground"
      :font="jcfFieldString_8.font"
      :enabled="jcfFieldString_8.enabled"
      :editable="jcfFieldString_8.editable"
      :logic="jcfFieldString_8_logic"
    />
    <JCFFieldString
      :id="jcfFieldString_9.id"
      :bounds="jcfFieldString_9.bounds"
      :background="jcfFieldString_9.background"
      :foreground="jcfFieldString_9.foreground"
      :font="jcfFieldString_9.font"
      :enabled="jcfFieldString_9.enabled"
      :logic="jcfFieldString_9_logic"
    />
    <JCFFieldString
      :id="jcfFieldString_10.id"
      :bounds="jcfFieldString_10.bounds"
      :background="jcfFieldString_10.background"
      :foreground="jcfFieldString_10.foreground"
      :inactiveForeground="jcfFieldString_10.inactiveForeground"
      :font="jcfFieldString_10.font"
      :enabled="jcfFieldString_10.enabled"
      :logic="jcfFieldString_10_logic"
    />
  </JCFPanelLayout>
</template>

<script setup lang="ts">
import {
  JCFFieldString,
  JCFPushButton,
  JFLineType,
  Color,
  Font,
  JCFPanelLayout,
  Dimension,
  EComponentName,
} from '@/components/jcf/entry'
import { onMounted } from 'vue'
import { SMSPanelInitDataHolder } from '../logic/SMSPanelInitDataHolder'
import type { JCFFieldStringData } from '@/lib/jcf/gui/JCFFieldStringData'
import { SMSClientInfo } from '../../SMSClientInfo'
import { Integer } from '@/lib/native/lang/Integer'
import { SMSCLLog } from '../SMSCLLog'
import type { JCFPushButtonData } from '@/lib/jcf/gui/JCFPushButtonData'
import { System } from '@/lib/native/lang/System'
import { Adapter } from '@/lib/adapter/adapter'
import { installInstance } from '@/components/jcf/utils/instance'

const jcfLayoutProps = {
  background: Color.white,
  foreground: Color.black,
  font: new Font('ＭＳ ゴシック', Font.PLAIN, 14),
  borderType: JFLineType.CONCAVE,
  dimension: new Dimension(1000, 80),
}

const jcfFieldString_1 = {
  id: `title`,
  borderType: JFLineType.NOTHING,
  text: ``,
  font: new Font('Monospaced', Font.PLAIN, 24),
  bounds: [16, 8, 506, 40],
  enabled: false,
  foreground: Color.white,
  background: new Color(53, 105, 237),
  inactiveForeground: Color.white,
}
const jcfFieldString_1_logic = installInstance(EComponentName.JCFFieldString, jcfFieldString_1)

const jcfFieldString_2 = {
  id: `login_time`,
  bounds: [832, 0, 152, 24],
  borderType: JFLineType.NOTHING,
  editable: false,
  enabled: false,
  foreground: Color.black,
  background: Color.white,
  inactiveForeground: Color.black,
}
const jcfFieldString_2_logic = installInstance(EComponentName.JCFFieldString, jcfFieldString_2)

const jcfFieldString_3 = {
  id: `cdScreen`,
  bounds: [16, 48, 504, 24],
  enabled: false,
}
const jcfFieldString_3_logic = installInstance(EComponentName.JCFFieldString, jcfFieldString_3)

const jcfFieldString_4 = {
  id: `login_name`,
  font: new Font('Monospaced', Font.PLAIN, 14),
  bounds: [832, 24, 152, 24],
  enabled: false,
}
const jcfFieldString_4_logic = installInstance(EComponentName.JCFFieldString, jcfFieldString_4)

const jcfPushButton_5 = {
  id: `returnButton`,
  label: `戻る(F10)`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  pushedActionCode: `header_button10`,
  bounds: [664, 48, 96, 24],
}
const jcfPushButton_5_logic = installInstance(EComponentName.JCFPushButton, jcfPushButton_5)

const jcfPushButton_6 = {
  id: `mainMenuButton`,
  label: `メニュー(F11) `,
  font: new Font('Monospaced', Font.PLAIN, 12),
  pushedActionCode: `header_button11`,
  bounds: [768, 48, 96, 24],
}
const jcfPushButton_6_logic = installInstance(EComponentName.JCFPushButton, jcfPushButton_6)

const jcfPushButton_7 = {
  id: `exitButton`,
  label: `業務終了(F12)`,
  font: new Font('Monospaced', Font.PLAIN, 12),
  pushedActionCode: `header_button12`,
  bounds: [872, 48, 96, 24],
}
const jcfPushButton_7_logic = installInstance(EComponentName.JCFPushButton, jcfPushButton_7)

const jcfFieldString_8 = {
  id: `kaisha_name`,
  bounds: [528, 0, 280, 24],
  background: Color.white,
  foreground: Color.black,
  font: new Font('Monospaced', Font.PLAIN, 14),
  enabled: false,
  editable: false,
}
const jcfFieldString_8_logic = installInstance(EComponentName.JCFFieldString, jcfFieldString_8)

const jcfFieldString_9 = {
  id: `busho_name`,
  bounds: [528, 24, 280, 24],
  background: Color.white,
  foreground: Color.black,
  font: new Font('Monospaced', Font.PLAIN, 14),
  enabled: false,
}
const jcfFieldString_9_logic = installInstance(EComponentName.JCFFieldString, jcfFieldString_9)

const jcfFieldString_10 = {
  id: `unyo_dt`,
  bounds: [528, 48, 136, 24],
  background: Color.white,
  foreground: Color.gray,
  inactiveForeground: Color.gray,
  font: new Font('ＭＳ ゴシック', Font.PLAIN, 12),
  enabled: false,
}
const jcfFieldString_10_logic = installInstance(EComponentName.JCFFieldString, jcfFieldString_10)

const logic = Adapter.create()

/*
 * ユーザ定義初期化処理。
 */
const initUser = () => {
  // この位置にユーザ定義初期化処理を記述します。
  try {
    let titleItem = logic.extra.get('title') as JCFFieldStringData

    //パネル初期化情報保持クラスより画面タイトルを取得して設定する。
    let dataHolder: SMSPanelInitDataHolder =
      SMSPanelInitDataHolder.getInstance()
    let title: string = dataHolder.getData('TITLE') as string

    if (title != null) {
      titleItem.setValue(title)
    }

    //2014/01/24 システム統合開発プロジェクト Add Start

    try {
      //プロパティファイルからタイトル色を取得
      let title_Color: string[] = SMSClientInfo.getTitleColor().split(',')
      let title_Color_RGB: Color = new Color(
        Integer.parseInt(title_Color[0]),
        Integer.parseInt(title_Color[1]),
        Integer.parseInt(title_Color[2]),
      )

      //プロパティファイルからタイトル文字色を取得
      let title_Character_Color: string[] =
        SMSClientInfo.getTitleCharacterColor().split(',')
      let title_Character_Color_RGB: Color = new Color(
        Integer.parseInt(title_Character_Color[0]),
        Integer.parseInt(title_Character_Color[1]),
        Integer.parseInt(title_Character_Color[2]),
      )

      //タイトル色、タイトル文字色をセット
      titleItem.setBackground(title_Color_RGB)
      titleItem.setForeground(title_Character_Color_RGB)
    } catch (e: any) {
      SMSCLLog.debug('SMSCommonHeaderPanel:ヘッダ色の変更失敗')
    }

    //2014/01/24 システム統合開発プロジェクト Add End

    let mainMenuButton = logic.extra.get('mainMenuButton') as JCFPushButtonData
    //メインメニューボタンは，最初はinvisible
    mainMenuButton.setVisible(true)
  } catch (e: any) {
    e.printStackTrace(System.out)
  }
}

onMounted(() => {
  initUser()
})
</script>
