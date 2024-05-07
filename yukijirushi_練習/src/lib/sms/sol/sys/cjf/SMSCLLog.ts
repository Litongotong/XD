import { JCFLog } from '@/lib/jcf/ctrl/JCFLog'

/**
 * cjfクライアント側のログを出力します。
 * @author 富士通)young-joon.AHN
 * @version
 */
export class SMSCLLog {
  private static ins: SMSCLLog = new SMSCLLog()

  /** 運用ログ出力メソッド */
  private static LEVEL_SYSTEM = 1
  /** トレースログ出力メソッド */
  private static LEVEL_TRACE = 2
  /** エラーログ出力メソッド */
  private static LEVEL_ERROR = 3
  /** 情報ログ出力メソッド */
  private static LEVEL_INFO = 4
  /** デバッグログ出力メソッド */
  private static LEVEL_DEBUG = 5

  /**
   * コンストラクト。
   */
  private constructor() {}

  /**
   * 運用ログを出力します。
   * @param String str 運用ログ内容
   */
  static system(str: string) {
    JCFLog.write('- system: ' + str, this.LEVEL_SYSTEM)
  }

  /**
   * トレースログを出力します。
   * @param String str トレースログ内容
   */
  static trace(str: string) {
    JCFLog.write('- trace : ' + str, this.LEVEL_DEBUG)
  }

  /**
   * 部品用トレースログを出力します。
   * @param String str トレースログ内容
   */
  static traceForParts(str: string) {
    JCFLog.write('- trace : ' + str, this.LEVEL_TRACE)
  }

  /**
   * エラーログを出力します。
   * @param String str エラーログ内容
   */
  static error(str: string) {
    JCFLog.write('- error : ' + str, this.LEVEL_ERROR)
  }

  /**
   * 情報ログを出力します。
   * @param String str 情報ログ内容
   */
  static info(str: string) {
    JCFLog.write('- info  : ' + str, this.LEVEL_INFO)
  }

  /**
   * デバッグログを出力します。
   * @param String str デバッグログ内容
   */
  static debug(str: string) {
    JCFLog.write('- debug : ' + str, this.LEVEL_DEBUG)
  }

  /**
   * Method SMSCLLogクラスのインスタンスを生成します。
   * @return SMSCLLog
   */
  private static getInstance(): SMSCLLog {
    return this.ins
  }

  _getName(): string {
    return 'SMSCLLog'
  }

  static _getName(): string {
    return 'SMSCLLog'
  }

  _getType() {
    return SMSCLLog as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSCLLog'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSCLLog'
  }
}
