import { RuntimeException } from '@/lib/native/lang/RuntimeException'

/**
 * チェックで異常例外を通知するクラスです。
 * @author  販売管理WG
 */
export class SMSCheckException extends RuntimeException {
  // 例外保持領域
  private messageCode: string | null = null
  private messageDetail: string[] | null = null

  /**
   * コンストラクタです。
   * @param String messageCode
   * @param String[] detail
   */
  constructor(messageCode: string, detail?: string[]) {
    super(messageCode)
    this.messageCode = messageCode
    if (detail) {
      this.messageDetail = detail
    }
  }

  /**
   * メッセージコードを取得します。
   * @return String メッセージコード
   */
  getMessageCode(): string {
    return this.messageCode!
  }

  /**
   * メッセージ補足（置換パラメタ）を取得します。
   * @return String メッセージ補足
   */
  getMessageDetail(): string[] {
    return this.messageDetail!
  }

  _getName(): string {
    return 'SMSCheckException'
  }

  static _getName(): string {
    return 'SMSCheckException'
  }

  _getType() {
    return SMSCheckException as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSCheckException'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSCheckException'
  }
}
