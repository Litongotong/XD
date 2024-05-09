import { Exception } from '@/lib/native/lang/Exception'
import type { Throwable } from '@/lib/native/lang/Throwable'
import { SMSMessageMgr } from './SMSMessageMgr'

/**
 * <PRE>
 * 異常例外を通知する上位クラスです。<br>
 * </PRE>
 * @author  販売管理WG
 */
export class SMSException extends Exception {
  /** メッセージ **/
  message: string

  // 例外保持領域
  private messageCode: string
  private messageDetail: string[]

  /** 原因例外 **/
  private rootCause: Throwable

  /**
   * コンストラクタです。<br>
   * @param String messageCode
   * @param String[] detail
   */
  constructor(messageCodeOrEx?: string | Throwable, detail?: string[]) {
    if (typeof messageCodeOrEx === 'string') {
      const messageCode = messageCodeOrEx
      super(messageCode)
      if (messageCode) {
        this.messageCode = messageCode
      }
      if (detail) {
        this.messageDetail = detail
      }
    } else {
      const ex = messageCodeOrEx as Throwable
      super(ex.message, ex)
      this.rootCause = ex
    }
  }

  /**
   * メッセージコードを取得します。<br>
   * @return String メッセージコード
   */
  getMessageCode(): string {
    return this.messageCode
  }

  /**
   * メッセージ補足（置換パラメタ）を取得します。<br>
   * @return String メッセージ補足
   */
  getMessageDetail(): string[] {
    return this.messageDetail
  }

  // 2007/05/29 Add start
  /**
   * メッセージを取得します。
   * ・メッセージコードがセット
   *  ・メッセージ置換文字列がセット：SMSMessageMgr#getMessage(String, String[])を実行
   *  ・メッセージ置換文字列がnull　：SMSMessageMgr#getMessage(String)を実行
   * ・メッセージコードがnull
   *  ・super#getMessageを実行
   *
   * @return String メッセージ
   */
  getMessage(): string {
    //メッセージコード存在チェック
    if (this.messageCode != null && this.messageCode.length > 0) {
      //メッセージ補足(置換パラメタ)存在チェック
      if (this.messageDetail != null && this.messageDetail.length > 0) {
        //メッセージコード、メッセージ補足(置換パラメタ)を使って、メッセージ文字列を取得
        return SMSMessageMgr.getMessage(this.messageCode, this.messageDetail)
      } else {
        //メッセージコードを使ってメッセージ文字列を取得
        return SMSMessageMgr.getMessage(this.messageCode)
      }

      //メッセージコードがセットされていない
    } else {
      return super.getMessage()
    }
  }
  // 2007/05/29 Add end

  _getName(): string {
    return 'SMSException'
  }

  static _getName(): string {
    return 'SMSException'
  }

  _getType() {
    return SMSException as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSException'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSException'
  }
}
