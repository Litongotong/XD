import type { APIYPMCommon } from '@/services/modules/YPM/types'

export namespace YPMSGSF070M {
  export type BusinessData = APIYPMCommon.InProcessItemAccountingListMessage

  /** Applet source selector option */
  export interface AppletSelectorOption {
    /** 選択肢 ID */
    id: string
    /** 選択肢文 */
    text: string
    /** 選択状態 */
    selected?: boolean
  }

  /** ログイン情報 */
  export interface SMSLoginInfoImpl {}
}

export namespace YPMSGSF071S {}
