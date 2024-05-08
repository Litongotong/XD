import { SMSCheckException } from "./SMSCheckException"

/**
 * 文字列変換で例外を通知するクラスです。
 * @author  販売管理WG
 */
export class SMSUnSupportedFormatException extends SMSCheckException {
  /**
   * Constructor for SMSUnSupportedFormatException.
   * @param messageCode
   */
  constructor(messageCode: string, detail?: string[]) {
    super(messageCode, detail)
  }

  getMessageCode(): string {
    return super.getMessageCode()
  }

  getMessageDetail(): string[] {
    return super.getMessageDetail()
  }

  _getName(): string {
    return 'SMSUnSupportedFormatException'
  }

  static _getName(): string {
    return 'SMSUnSupportedFormatException'
  }

  _getType() {
    return SMSUnSupportedFormatException as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSUnSupportedFormatException'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSUnSupportedFormatException'
  }
}
