import { JCCMessageUtil } from '@/lib/jcc/util/JCCMessageUtil'
import { SMSProperties } from './SMSProperties'
import { IllegalArgumentException } from '@/lib/native/lang/IllegalArgumentException'

/**
 * <PRE>
 * メッセージ管理クラスです。<br>
 * SMSMessage.propertiesを使用してメッセージIDからメッセージを取得します。<br>
 * </PRE>
 * @author  販売管理WG
 */
export class SMSMessageMgr extends SMSProperties {
  /** 読込むプロパティファイル名です。 */
  private static FILE_NAME = 'SMSMessage.properties'

  /** メッセージを管理クラスのインスタンス保持領域です。 */
  private msgUtil: JCCMessageUtil = null!

  /**
   * コンストラクタです。<br>
   * 外部へは公開しません。
   */
  private constructor() {
    super()
    // プロパティファイルを読込みます
    this.load()
    this.msgUtil = new JCCMessageUtil(this.getProperty().getMap())
    this.msgUtil.setCheckMode(false)
  }

  /**
   * ファイル名を通知します。
   * @return String ファイル名
   */
  getFileName(): string {
    return SMSMessageMgr.FILE_NAME
  }

  /** このクラスのインスタンス保持領域です。 */
  private static ins: SMSMessageMgr = new SMSMessageMgr()

  static getMessage(msgID: string): string
  static getMessage(msgID: string, detail: string): string
  static getMessage(msgID: string, detail: string[]): string
  static getMessage(...params: any[]): string {
    if (params.length === 1) {
      return this.__getMessage(params[0])
    } else if (params.length === 2) {
      if (typeof params[1] === 'string') {
        return this.__getMessageWithDetail(params[0], params[1])
      } else {
        return this.__getMessageWithDetails(params[0], params[1])
      }
    } else {
      throw new IllegalArgumentException('Illegal arguments')
    }
  }

  /**
   * メッセージ取得メソッドです。<BR>
   *
   * <B>処理概要:</B><BR>
   * <PRE>
   * msgID値に該当するメッセージ文を返します。
   * 該当するmsgIDがない場合、msgIDを返します。
   * </PRE>
   *
   * @param msgID メッセージID
   * @return メッセージ文
   */
  private static __getMessage(msgID: string): string {
    return this.getMessage(msgID, null!)
  }

  /**
   * メッセージ取得メソッドです。<BR>
   *
   * <B>処理概要:</B><BR>
   * <PRE>
   * msgID値に該当するメッセージ文を返します。
   * 該当するmsgIDがない場合、msgIDを返します。
   * </PRE>
   *
   * @param msgID String メッセージID
   * @param msgID String 詳細−変換文字列
   * @return メッセージ文
   */
  private static __getMessageWithDetail(msgID: string, detail: string): string {
    return this.getMessage(msgID, [detail])
  }

  /**
   * メッセージ取得メソッドです。<BR>
   *
   * <B>処理概要:</B><BR>
   * <PRE>
   * msgID値に該当するメッセージ文を返します。
   * 該当するmsgIDがない場合、msgIDを返します。
   * </PRE>
   *
   * @param msgID String メッセージID
   * @param msgID String 詳細−変換文字列
   * @return メッセージ文
   * @exception IllegalArgumentException パラメタエラー（msgIDパラメタがnull）
   */
  private static __getMessageWithDetails(
    msgID: string,
    detail: string[],
  ): string {
    let msg: string

    // メッセージIDにnullが設定されている場合、パラメタエラー
    if (msgID == null) {
      throw new IllegalArgumentException('msgID is null')
    }

    //メッセージを取得し,文字変換を行います
    if (detail == null || detail.length == 0) {
      msg = this.getInstance().msgUtil.getMessage(msgID)
    } else {
      msg = this.getInstance().msgUtil.getMessage(msgID, detail)
    }

    //メッセージがプロパティファイルに存在していなかった場合、メッセージIDをそのまま返却
    if (msg == null || msg.equals(msgID)) {
      msg = msgID
    }

    //メッセージIDとメッセージを返します
    return msg
  }

  /**
   * メッセージ番号からメッセージレベルを取得します。<br>
   * メッセージ番号文字列の８文字目がメッセージレベルとなります。<br>
   * @return String メッセージレベル
   */
  static getMessageLevel(msgID: string): string {
    if (msgID == null || msgID.length < 12) {
      return ''
    }

    return msgID.substring(8, 9)
  }

  /**
   * インスタンス取得メソッドです。<br>
   * (singletonパターン仕様)
   */
  private static getInstance(): SMSMessageMgr {
    return this.ins
  }

  _getName(): string {
    return 'SMSMessageMgr'
  }

  static _getName(): string {
    return 'SMSMessageMgr'
  }

  _getType() {
    return SMSMessageMgr as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSMessageMgr'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSMessageMgr'
  }
}
