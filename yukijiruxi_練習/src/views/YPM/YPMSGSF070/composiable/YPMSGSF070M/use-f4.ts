import type { Button } from '@/types/components'
import type { APIYPMCommon } from '@/services/modules/YPM/types'

import { useButtonConfig } from '@/stores/button-config'
import { useYPMSGSF070MStore } from '../../YPMSGSF070M-store'
import { MSGPositions, MSGTypes, Message } from '@/enums'
import { handlerMessage, interpolateMessage } from '@/utils'
import { useDialog } from '@/stores/dialog'

/** 「削除」ボタン処理 */
export function useF4() {
  const layoutButtons = useButtonConfig()
  const viewStore = useYPMSGSF070MStore()
  const { setShowDialog } = useDialog()

  /** 「削除」ボタン押下 */
  const handleF4 = (): void => {
    const F4_TITLE = '(F4)'
    /** モード（削除）*/
    const MODE_D = '4'
    /** ゼロ */
    const ZERO_VALUE = '0'

    const buttons: Button.Config[] = layoutButtons.footerButtonConfigs
    const target = buttons.find((item) => item.title.includes(F4_TITLE))

    if (target && target.disabled) {
      return
    }

    const handleDelete = () => {
      // TODO: 入力エリアに変更入力があった場合、破棄される旨のメッセージを出力し、確認する。

      // TODO: 変更データの取得

      viewStore.preAction()

      if (!viewStore.isChkJokenData) {
        viewStore.jokenDataChange()
      }

      // TODO: メッセージクリア

      // 削除処理（API コール含め）
      handlerMessage(
        MSGPositions.POPUP,
        MSGTypes.WARNNING,
        Message.YCSCMNMSC003,
        [
          {
            title: 'はい',
            disabled: false,
            width: '80',
            height: '15',
            onClick: okClick,
          },
          {
            title: 'いいえ',
            disabled: false,
            width: '80',
            height: '15',
            onClick: () => setShowDialog(false),
          },
        ],
      )
    }

    const okClick = async () => {
      // 実行直後にダイアログを閉じることでダイアログ表示中でエラーダイアログが開けない問題を防ぐ
      setShowDialog(false)

      // 検索条件
      const condition: APIYPMCommon.InProcessItemAccountingListMessage = {
        /** 仕掛品明細一覧 */
        shikakarihinMeisaiCBMMsgList:
          // TODO: changeData の実装が必要
          // FIXME: DummyData
          viewStore.businessData?.shikakarihinMeisaiCBMMsgList,
        // FIXME: ユーザー情報から工場コードを取得
        cdKojoZaikoBasho: '1001',
        // FIXME: ユーザー情報から上位損益管理組織を取得
        cdJoisonekikanriSoshiki: undefined,
        // FIXME: ユーザー情報から対応組織コード
        cdTaiousoshiki: undefined,
        cdKanrikotei: viewStore.kanriCmb,
        cdSeihin: viewStore.cdHinmoku,
        stNyuryokuHinmoku: viewStore.hinmokuCmb,
        nuShikakariJuryo: viewStore.qtJuryo,
        mode: MODE_D,
        // FIXME: ユーザー情報から乳市区分を取得
        stNyushi: undefined,
        fgCheck: 'true',
      }

      // チェック
      const response = await viewStore.DeleteStoreInProcesssItems(condition)

      if (response?.sys_error_flg === '0') {
        let err: boolean = false

        if (response.fgCheckETakanjo && response.fgCheckETakanjo === 'true') {
          handlerMessage(
            MSGPositions.FOOTER,
            MSGTypes.ERROR,
            interpolateMessage(Message.YCSCMNMCW208, [
              '口座替又は、他勘定入力されている為、削除',
            ]),
          )

          err = true
        }

        if (response.fgCheckEKoza && response.fgCheckEKoza === 'true') {
          handlerMessage(
            MSGPositions.FOOTER,
            MSGTypes.ERROR,
            interpolateMessage(Message.YCSCMNMCW208, [
              '口座替又は、他勘定入力されている為、削除',
            ]),
          )

          err = true
        }

        if (err) {
          // TODO: どんなシステムか調査が必要
          // this.getReturnInfo().cancelScreenTransition()
          return
        }

        condition.fgCheck = ''

        // 削除
        const response2 = await viewStore.DeleteStoreInProcesssItems(condition)

        if (response2?.sys_error_flg === '0') {
          // スプレッドのクリア
          viewStore.clearSpreadData()

          // TODO: 表示のフッターボタンのバインドが一度きりになる問題を解決する必要がある
          // 	//各ファンクションボタンを無効化する。
          // 	SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN1, false);
          // 	SMSHeaderFooterManager.setEnabledFooterButton(getContext(), SMSHeaderFooterManager.ITEM_FUNCBTN4, false);
          // 	SMSHeaderFooterManager.setEnabledFooterButton(getContext(), SMSHeaderFooterManager.ITEM_FUNCBTN5, false);
          // 	SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);

          // 正常終了のメッセージ
          handlerMessage(
            MSGPositions.FOOTER,
            MSGTypes.SUCCESS,
            interpolateMessage(Message.YCSCMNMSI096, ['削除']),
          )

          // 重量のクリア
          viewStore.setQtJuryo(ZERO_VALUE)

          // フォーカス設定
          const inputs = document.querySelectorAll<HTMLElement>(
            'input[type="text" i]',
          )

          inputs[1].focus()
        }
      }
    }

    target!.onClick = handleDelete
  }

  return { handleF4 }
}
