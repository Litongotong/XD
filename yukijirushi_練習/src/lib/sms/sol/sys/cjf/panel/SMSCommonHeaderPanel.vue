<template>
  <JCFPanelLayout
    :background="Color.white"
    :foreground="Color.black"
    :font="new Font('ＭＳ ゴシック', Font.PLAIN, 14)"
    :border-type="JFLineType.CONCAVE"
    :dimension="new Dimension(1000, 80)"
  >
    <JCFFieldString
      :id="`title`"
      :border-type="JFLineType.NOTHING"
      :text="``"
      :font="new Font('Monospaced', Font.PLAIN, 24)"
      :bounds="[16, 8, 506, 40]"
      :enabled="false"
      :foreground="Color.white"
      :background="new Color(53, 105, 237)"
      :inactive-foreground="Color.white"
    />
    <JCFFieldString
      :id="`login_time`"
      :bounds="[832, 0, 152, 24]"
      :border-type="JFLineType.NOTHING"
      :editable="false"
      :enabled="false"
      :foreground="Color.black"
      :background="Color.white"
      :inactiveForeground="Color.black"
    />
    <JCFFieldString
      :id="`cdScreen`"
      :bounds="[16, 48, 504, 24]"
      :enabled="false"
    />
    <JCFFieldString
      :id="`login_name`"
      :font="new Font('Monospaced', Font.PLAIN, 14)"
      :bounds="[832, 24, 152, 24]"
      :enabled="false"
    />
    <JCFPushButton
      :id="`returnButton`"
      :label="`戻る(F10)`"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
      :pushedActionCode="`header_button10`"
      :bounds="[664, 48, 96, 24]"
    />
    <JCFPushButton
      :id="`mainMenuButton`"
      :label="`メニュー(F11) `"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
      :pushedActionCode="`header_button11`"
      :bounds="[768, 48, 96, 24]"
    />
    <JCFPushButton
      :id="`exitButton`"
      :label="`業務終了(F12)`"
      :font="new Font('Monospaced', Font.PLAIN, 12)"
      :pushedActionCode="`header_button12`"
      :bounds="[872, 48, 96, 24]"
    />
    <JCFFieldString
      :id="`kaisha_name`"
      :bounds="[528, 0, 280, 24]"
      :background="Color.white"
      :foreground="Color.black"
      :font="new Font('Monospaced', Font.PLAIN, 14)"
      :enabled="false"
      :editable="false"
    />
    <JCFFieldString
      :id="`busho_name`"
      :bounds="[528, 24, 280, 24]"
      :background="Color.white"
      :foreground="Color.black"
      :font="new Font('Monospaced', Font.PLAIN, 14)"
      :enabled="false"
    />
    <JCFFieldString
      :id="`unyo_dt`"
      :bounds="[528, 48, 136, 24]"
      :background="Color.white"
      :foreground="Color.gray"
      :inactiveForeground="Color.gray"
      :font="new Font('ＭＳ ゴシック', Font.PLAIN, 12)"
      :enabled="false"
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

onMounted(async () => {
  initUser()
})
</script>
