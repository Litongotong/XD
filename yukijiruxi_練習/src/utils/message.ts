import type { Button, Dialog } from '@/types/components'

import { MSGPositions, MSGTypes } from '@/enums'
import { useMessage } from '@/stores/message'
import { useDialog } from '@/stores/dialog'

export const handlerMessage = (
  position: MSGPositions,
  type: MSGTypes,
  msg: string,
  buttonConfigs?: Button.Config[],
) => {
  if (MSGPositions.POPUP == position) {
    const { setShowDialog, setDialogConfig } = useDialog()

    const dialogConfig: Dialog.Property = {
      dialogButtonConfigs: buttonConfigs,
      dialogWidth: '30rem',
      dialogHeight: '10rem',
      describeText: msg,
      closeButtonWidth: '1.5rem',
      closeButtonHeight: '1.5rem',
      closeButtonDisabled: false,
    }
    setDialogConfig(dialogConfig)
    setShowDialog(true)
  } else if (MSGPositions.FOOTER == position) {
    const { setPageErrorMessage, setPageSuccessMessage } = useMessage()
    setPageSuccessMessage('')
    setPageErrorMessage('')
    if (MSGTypes.SUCCESS == type) {
      setPageSuccessMessage(msg)
    } else {
      setPageErrorMessage(msg)
    }
  }
}

/**
 * @description メッセージ取得メソッド
 * @param code メッセージコード
 * @returns メッセージ
 */
export const getMessage = (code: string): string => {
  const messageItem: Message | undefined = messages.find(
    (item: Message): boolean => item.code === code.toUpperCase(),
  )

  if (!messageItem) {
    console.warn('メッセージの取得に失敗しました。')
    return ''
  }

  let message: string = messageItem.message

  return message
}

export interface Message {
  code: string
  message: string
}

export const messages: Message[] = [
  { code: 'SMSCMNMCE002', message: 'システム異常が発生しました。' },
]

/*
 * 可変文字列でメッセージを生成する
 * @param template 可変文字列テンプレート
 * @param data 挿入する文字の配列
 */
export const interpolateMessage = (
  template: string,
  data: string[],
): string => {
  return template.replace(
    /&(\d+)/g,
    (match: string, count: number) => data[count - 1] ?? match,
  )
}
