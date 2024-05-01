/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export namespace lib.com.fujitsu.sms.sol.sys.cjf {
  /**
   * <PRE>
   * cjfクライアント側のログを出力します。
   * </PRE>
   * @author 富士通)young-joon.AHN
   * @version
   * @class
   */
  export class SMSCLLog {
    static ins: SMSCLLog
    public static ins_$LI$(): SMSCLLog {
      if (SMSCLLog.ins == null) {
        SMSCLLog.ins = new SMSCLLog()
      }
      return SMSCLLog.ins
    }

    /**
     * 運用ログ出力メソッド
     */
    static LEVEL_SYSTEM: number = 1

    /**
     * トレースログ出力メソッド
     */
    static LEVEL_TRACE: number = 2

    /**
     * エラーログ出力メソッド
     */
    static LEVEL_ERROR: number = 3

    /**
     * 情報ログ出力メソッド
     */
    static LEVEL_INFO: number = 4

    /**
     * デバッグログ出力メソッド
     */
    static LEVEL_DEBUG: number = 5

    constructor() {}

    /**
     * 運用ログを出力します。<BR>
     * @param String str 運用ログ内容
     * @param {string} str
     */
    public static system(str: string) {
      lib.com.fujitsu.jcf.ctrl.JCFLog.write(
        '- system: ' + str,
        SMSCLLog.LEVEL_SYSTEM,
      )
    }

    /**
     * トレースログを出力します。<BR>
     * @param String str トレースログ内容
     * @param {string} str
     */
    public static trace(str: string) {
      lib.com.fujitsu.jcf.ctrl.JCFLog.write(
        '- trace : ' + str,
        SMSCLLog.LEVEL_DEBUG,
      )
    }

    /**
     * 部品用トレースログを出力します。<BR>
     * @param String str トレースログ内容
     * @param {string} str
     */
    static traceForParts(str: string) {
      lib.com.fujitsu.jcf.ctrl.JCFLog.write(
        '- trace : ' + str,
        SMSCLLog.LEVEL_TRACE,
      )
    }

    /**
     * エラーログを出力します。<BR>
     * @param String str エラーログ内容
     * @param {string} str
     */
    public static error(str: string) {
      lib.com.fujitsu.jcf.ctrl.JCFLog.write(
        '- error : ' + str,
        SMSCLLog.LEVEL_ERROR,
      )
    }

    /**
     * 情報ログを出力します。<BR>
     * @param String str 情報ログ内容
     * @param {string} str
     */
    public static info(str: string) {
      lib.com.fujitsu.jcf.ctrl.JCFLog.write(
        '- info  : ' + str,
        SMSCLLog.LEVEL_INFO,
      )
    }

    /**
     * デバッグログを出力します。<BR>
     * @param String str デバッグログ内容
     * @param {string} str
     */
    public static debug(str: string) {
      lib.com.fujitsu.jcf.ctrl.JCFLog.write(
        '- debug : ' + str,
        SMSCLLog.LEVEL_DEBUG,
      )
    }

    /**
     * Method SMSCLLogクラスのインスタンスを生成します。<BR>
     * @return {lib.com.fujitsu.sms.sol.sys.cjf.SMSCLLog} SMSCLLog
     * @private
     */
    /*private*/ static getInstance(): SMSCLLog {
      return SMSCLLog.ins_$LI$()
    }
  }
  SMSCLLog['__class'] = 'lib.com.fujitsu.sms.sol.sys.cjf.SMSCLLog'
}
