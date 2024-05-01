import type { Button } from '@/types/components'

import { useButtonConfig } from '@/stores/button-config'
import { useYPMSGSF070MStore } from '../../YPMSGSF070M-store'
import { MSGPositions, MSGTypes, Message } from '@/enums'
import { handlerMessage } from '@/utils'
import { useDialog } from '@/stores/dialog'
import { YPMSGSF070 } from '@/views/YPM/YPMSGSF070_translate/YPMSGSF070M-logic'

export function useF1() {
  const layoutButtons = useButtonConfig()
  const viewStore = useYPMSGSF070MStore()
  const { setShowDialog } = useDialog()

  const handleF1 = (): void => {
    const F1_TITLE = '(F1)'
    const buttons: Button.Config[] = layoutButtons.footerButtonConfigs
    const target = buttons.find((item) => item.title.includes(F1_TITLE))

    if (target && target.disabled) {
      return
    }

    const initialize = () => {
      handlerMessage(
        MSGPositions.POPUP,
        MSGTypes.WARNNING,
        Message.YPMSGSMCC009,
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

    const okClick = () => {
      ///
      // NOTE: 翻訳された class で手書きの f1 アクションを代わる
      // const logic = new YPMSGSF070.YPMSGSF070MLogic()
      // logic.f1()

      if (!viewStore.isChkJokenData) {
        viewStore.jokenDataChange()
      }

      // TODO: saveData 実装待ち
      // HashMap []saveData = this.getSaveData();
      //KK-00363-000 2011.06.07 KASHIMURA -START（初期化ボタン押下時の不具合修正）
      // String[] saveJuryo = this.getSaveJuryo();
      //KK-00363-000 2011.06.07 KASHIMURA -END
      //
      //	gyomuMap.put(SHIKAKARIHIN_MEISAI_CBMMSG_LIST, saveData);
      //KK-00363-000 2011.06.07 KASHIMURA -START（初期化ボタン押下時の不具合修正）
      // gyomuMap.put(QT_SHIKAKARI_JURYO, saveJuryo[0])
      // gyomuMap.put(IF_TANI, saveJuryo[1])
      //KK-00363-000 2011.06.07 KASHIMURA -END
      ///

      // FIXME: 仕掛品重量ダミー初期化処理
      viewStore.setQtJuryo('')

      viewStore.setBusinessData(viewStore.businessDataBackup!)

      viewStore.createSpreadData(
        viewStore.businessData?.shikakarihinMeisaiCBMMsgList ?? [],
      )

      setShowDialog(false)

      setTimeout(() => {
        alert(`
          TODO: 検索条件部データ保持処理が未完成
          NOTE: 仕掛品重量項目は初期化用の値が存在しない場合入力欄が隠される
        `)
      }, 500)
    }

    target!.onClick = initialize
  }

  return { handleF1 }
}
