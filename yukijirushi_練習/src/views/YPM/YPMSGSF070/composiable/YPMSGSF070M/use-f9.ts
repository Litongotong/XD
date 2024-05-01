import type { Button } from '@/types/components'
import { useButtonConfig } from '@/stores/button-config'
import { MSGPositions, MSGTypes } from '@/enums'
import { handlerMessage } from '@/utils'
import { useDialog } from '@/stores/dialog'
import { useYPMSGSF070MStore } from '../../YPMSGSF070M-store'
import { useMessage } from '@/stores/message'

export function useF9() {
  const layoutButtons = useButtonConfig()

  const handleF9 = (): void => {
    const F9_TITLE = '(F9)'
    const buttons: Button.Config[] = layoutButtons.footerButtonConfigs
    const target = buttons.find((item) => item.title.includes(F9_TITLE))
    const { setShowDialog } = useDialog()
    const viewStore = useYPMSGSF070MStore()
    const message = useMessage()

    if (target && target.disabled) {
      return
    }

    const register = () => {
      message.clearFooterMessage()

      handlerMessage(MSGPositions.POPUP, MSGTypes.WARNNING, '登録処理を実行します。よろしですか？', [
        {
          title: 'はい',
          disabled: false,
          width: '80',
          height: '15',
          onClick: () => {
            viewStore.updateStoreInProcesssItems()
            setShowDialog(false)
          },
        },
        {
          title: 'いいえ',
          disabled: false,
          width: '80',
          height: '15',
          onClick: () => setShowDialog(false),
        },
      ])
    }

    target!.onClick = register
  }

  return { handleF9 }
}
