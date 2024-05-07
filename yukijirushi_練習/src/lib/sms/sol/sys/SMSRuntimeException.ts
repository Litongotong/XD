import { PrintStream } from '@/lib/native/io/PrintStream'
import { PrintWriter } from '@/lib/native/io/PrintWriter'
import { RuntimeException } from '@/lib/native/lang/RuntimeException'
import { System } from '@/lib/native/lang/System'
import type { Throwable } from '@/lib/native/lang/Throwable'

/**
 * 実行時例外クラスです。
 * @author  販売管理WG
 */
export class SMSRuntimeException extends RuntimeException {
  // 例外保持領域
  private th: Throwable = null!

  // エラーID
  private cdError: string = ''

  /**
   * コンストラクタです。
   * @param String message
   */
  constructor(...params: any[]) {
    if (params.length === 1) {
      const asString = typeof params[0] === 'string'
      if (asString) {
        super(params[0])
      } else {
        const th = params[0]
        // 2013/12/04 コンストラクタ引数の例外情報をSMSRuntimeExceptionに転記 開始
        super(th != null ? th.getMessage() : '')

        if (th instanceof SMSRuntimeException) {
          let cause: Throwable = (th as SMSRuntimeException).getException()

          if (cause == null) {
            this.th = th
            // SMS例外は、そのままルート原因としてメンバーに保持
          } else if (cause.getClass().getName().startsWith('SMS')) {
            this.th = cause
            // SMS例外以外は、メッセージとスタックとレースをSMSRuntimeExceptionに転記
          } else {
            this.th = new SMSRuntimeException(cause.getMessage())
            this.th.setStackTrace(cause.getStackTrace())
          }
          // SMS例外以外は、メッセージとスタックとレースをSMSRuntimeExceptionに転記
        } else if (th != null) {
          this.th = new SMSRuntimeException(th.getMessage())
          this.th.setStackTrace(th.getStackTrace())
        }
        // 2013/12/04 コンストラクタ引数の例外情報をSMSRuntimeExceptionに転記 終了
      }
    } else if (params.length === 2) {
      const message = params[0]
      const th = params[1]

      // 2013/12/04 コンストラクタ引数の例外情報をSMSRuntimeExceptionに転記 開始
      super(th != null ? th.getMessage() : '')

      if (th instanceof SMSRuntimeException) {
        let cause: Throwable = (th as SMSRuntimeException).getException()

        if (cause == null) {
          this.th = th
          // SMS例外は、そのままルート原因としてメンバーに保持
        } else if (cause.getClass().getName().startsWith('SMS')) {
          this.th = cause
          // SMS例外以外は、メッセージとスタックとレースをSMSRuntimeExceptionに転記
        } else {
          this.th = new SMSRuntimeException(cause.getMessage())
          this.th.setStackTrace(cause.getStackTrace())
        }
        // SMS例外以外は、メッセージとスタックとレースをSMSRuntimeExceptionに転記
      } else if (th != null) {
        this.th = new SMSRuntimeException(th.getMessage())
        this.th.setStackTrace(th.getStackTrace())
      }
      // 2013/12/04 コンストラクタ引数の例外情報をSMSRuntimeExceptionに転記 終了
    } else {
      throw new Error('Invalid number of arguments')
    }
  }

  /**
   * Exceptionを取得します。
   * @return Throwable
   */
  getException(): Throwable {
    return this.th
  }

  printStackTrace(): void
  printStackTrace(ps: PrintStream): void
  printStackTrace(pw: PrintWriter): void
  printStackTrace(arg0?: PrintStream | PrintWriter): void {
    if (!arg0) {
      return this.__printStackTrace()
    }
    if (arg0?._getType?.() === PrintStream) {
      this.__printStackTraceWithPrintStream(arg0 as PrintStream)
    } else if (arg0?._getType?.() === PrintWriter) {
      this.__printStackTraceWithPrintWriter(arg0)
    } else {
      throw new Error('Invalid arguments')
    }
  }

  /**
   * スタックトレースを出力します。
   */
  private __printStackTrace() {
    super.printStackTrace()
    System.err.println('root cause')
    if (this.th != null) {
      this.th.printStackTrace()
    }
  }

  /**
   * スタックトレースを出力します。
   * @param PrintStream ps
   */
  private __printStackTraceWithPrintStream(ps: PrintStream) {
    super.printStackTrace(ps)
    ps.println('root cause')
    if (this.th != null) {
      this.th.printStackTrace(ps)
    }
  }

  /**
   * スタックトレースを出力します。
   */
  private __printStackTraceWithPrintWriter(pw: PrintWriter) {
    super.printStackTrace(pw)
    pw.println('root cause')
    if (this.th != null) {
      this.th.printStackTrace(pw)
    }
  }

  /**
   * エラーIDを返します。
   * @return String
   */
  getCdError(): string {
    return this.cdError
  }

  /**
   * エラーIDをセットします。.
   * @param cdError エラーID
   */
  setCdError(cdError: string) {
    this.cdError = cdError
  }

  _getName(): string {
    return 'SMSRuntimeException'
  }

  static _getName(): string {
    return 'SMSRuntimeException'
  }

  _getType() {
    return SMSRuntimeException as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSRuntimeException'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSRuntimeException'
  }
}
