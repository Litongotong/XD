import { SimpleDateFormat } from '@/lib/native/text/SimpleDateFormat'
import { SMSUnSupportedFormatException } from './SMSUnSupportedFormatException'
import { StringBuffer } from '@/lib/native/lang/StringBuffer'
import { JCCDateUtil } from '@/lib/jcc/util/JCCDateUtil'
import { NativeDate } from '@/lib/native/util/Date'
import { Calendar } from '@/lib/native/util/Calendar'
import { Long } from '@/lib/native/lang/Long'
import { SMSCheckException } from './SMSCheckException'
import { JCCWestCalendar } from '@/lib/jcc/util/JCCWestCalendar'

/**
 * 日時文字列編集クラスです。
 * @author  販売管理WG
 */
export class SMSDateStringUtil {
  /**
   * フォーマット種別（YYYYMMDD)
   */
  static YYYYMMDD = 0
  /**
   * フォーマット種別（YYMMDD)
   */
  static YYMMDD = 1

  /**
   * フォーマット種別（YYYYMM)
   */
  static YYYYMM = 2
  /**
   * フォーマット種別（MMDD)
   */
  static MMDD = 3

  /**
   * フォーマット種別（YYYYMMDDHH)
   */
  static YYYYMMDDHH = 4

  /**
   * フォーマット種別（YYYYMMDDHHmm)
   */
  static YYYYMMDDHHmm = 5

  /**
   * フォーマット種別（YYYYMMDDHHmmss)
   */
  static YYYYMMDDHHmmss = 6

  /**
   * フォーマット種別（YYYYMMDDHHmmssSSS)
   */
  static YYYYMMDDHHmmssSSS = 7

  private static CURRENT_MONTH = 'yyyyMM'

  private static CURRENT_DATE = 'yyyyMMdd'

  private static TIMESTAMP = 'yyyyMMddHHmmssSSS'

  private static CURRENT_DATE_SEC = 'yyyyMMddHHmmss'

  private static dateFormat = new SimpleDateFormat(this.CURRENT_DATE)
  private static timeStampFormat = new SimpleDateFormat(this.TIMESTAMP)
  private static dateSecFormat = new SimpleDateFormat(this.CURRENT_DATE_SEC)
  private static monthFormat = new SimpleDateFormat(this.CURRENT_MONTH)

  /**
   * 日時文字列にスラッシュ、コロン、ドットを追加し、返却する
   * 指定したフォーマット種別をもとに編集する
   * @param value 区切り文字無し日付文字列
   * @param flag  フォーマット種別
   * @return String 区切り文字付き日付文字列
   * @throws SMSUnSupportedFormatException フォーマットエラー
   */
  static conversion(value: string, flag: number): string {
    switch (flag) {
      case SMSDateStringUtil.YYYYMMDD:
        return this.addSlashForYYYYMMDD(value)

      case SMSDateStringUtil.YYMMDD:
        return this.addSlashForYYMMDD(value)

      case SMSDateStringUtil.YYYYMM:
        return this.addSlashForYYYYMM(value)

      case SMSDateStringUtil.MMDD:
        return this.addSlashForMMDD(value)

      case SMSDateStringUtil.YYYYMMDDHH:
        return this.addSlashForYYYYMMDDHH(value)

      case SMSDateStringUtil.YYYYMMDDHHmm:
        return this.addSlashForYYYYMMDDHHmm(value)

      case SMSDateStringUtil.YYYYMMDDHHmmss:
        return this.addSlashForYYYYMMDDHHmmss(value)

      case SMSDateStringUtil.YYYYMMDDHHmmssSSS:
        return this.addSlashForYYYYMMDDHHmmssSSS(value)

      default:
        throw new SMSUnSupportedFormatException(
          'フォーマット種別が間違っています',
        )
    }
  }

  /**
   * 入力文字列(YYYYMMDD)にスラッシュを追加し、返却する
   * @param value スラッシュ無し日付文字列
   * @return String スラッシュ付き日付文字列
   * @throws SMSUnSupportedFormatException フォーマットエラー
   */
  private static addSlashForYYYYMMDD(value: string): string {
    if (value.length != 8) {
      throw new SMSUnSupportedFormatException('日付型文字列ではありません')
    }
    let sb: StringBuffer = new StringBuffer(value)

    sb.insert(4, '/')
    sb.insert(7, '/')

    return sb.toString()
  }

  /**
   * 入力文字列(YYMMDD)にスラッシュを追加し、返却する
   * @param value スラッシュ無し日付文字列
   * @return String スラッシュ付き日付文字列
   * @throws SMSUnSupportedFormatException フォーマットエラー
   */
  private static addSlashForYYMMDD(value: string): string {
    if (value.length != 6) {
      throw new SMSUnSupportedFormatException('日付型文字列ではありません')
    }
    let sb: StringBuffer = new StringBuffer(value)

    sb.insert(2, '/')
    sb.insert(5, '/')

    return sb.toString()
  }

  /**
   * 入力文字列(YYYYMM)にスラッシュを追加し、返却する
   * @param value スラッシュ無し日付文字列
   * @return String スラッシュ付き日付文字列
   * @throws SMSUnSupportedFormatException フォーマットエラー
   */
  private static addSlashForYYYYMM(value: string): string {
    if (value.length != 6) {
      throw new SMSUnSupportedFormatException('日付型文字列ではありません')
    }
    let sb: StringBuffer = new StringBuffer(value)

    sb.insert(4, '/')

    return sb.toString()
  }

  /**
   * 入力文字列(YYMMDD)にスラッシュを追加し、返却する
   * @param value スラッシュ無し日付文字列
   * @return String スラッシュ付き日付文字列
   * @throws SMSUnSupportedFormatException フォーマットエラー
   */
  private static addSlashForMMDD(value: string): string {
    if (value.length != 4) {
      throw new SMSUnSupportedFormatException('日付型文字列ではありません')
    }
    let sb: StringBuffer = new StringBuffer(value)

    sb.insert(2, '/')

    return sb.toString()
  }

  /**
   * 入力文字列(YYYYMMDDHH)にスラッシュ、スペースを追加し、返却する
   * @param value スラッシュ無し日付文字列
   * @return String スラッシュ付き日付文字列
   * @throws SMSUnSupportedFormatException フォーマットエラー
   */
  private static addSlashForYYYYMMDDHH(value: string): string {
    if (value.length != 10) {
      throw new SMSUnSupportedFormatException('日時型文字列ではありません')
    }
    let sb: StringBuffer = new StringBuffer(value)

    sb.insert(4, '/')
    sb.insert(7, '/')
    sb.insert(10, ' ')
    return sb.toString()
  }
  /**
   *
   * 入力文字列(YYYYMMDDHHmm)にスラッシュ、スペース、コロンを追加し、返却する
   *
   * @param value スラッシュ無し日付文字列
   * @return String スラッシュ付き日付文字列
   * @throws SMSUnSupportedFormatException フォーマットエラー
   */
  private static addSlashForYYYYMMDDHHmm(value: string): string {
    if (value.length != 12) {
      throw new SMSUnSupportedFormatException('日時型文字列ではありません')
    }
    let sb: StringBuffer = new StringBuffer(value)

    sb.insert(4, '/')
    sb.insert(7, '/')
    sb.insert(10, ' ')
    sb.insert(13, ':')
    return sb.toString()
  }
  /**
   *
   * 入力文字列(YYYYMMDDHHmmss)にスラッシュ、スペース、コロンを追加し、返却する
   *
   * @param value スラッシュ無し日付文字列
   * @return String スラッシュ付き日付文字列
   * @throws SMSUnSupportedFormatException フォーマットエラー
   */
  private static addSlashForYYYYMMDDHHmmss(value: string): string {
    if (value.length != 14) {
      throw new SMSUnSupportedFormatException('日時型文字列ではありません')
    }
    let sb: StringBuffer = new StringBuffer(value)

    sb.insert(4, '/')
    sb.insert(7, '/')
    sb.insert(10, ' ')
    sb.insert(13, ':')
    sb.insert(16, ':')
    return sb.toString()
  }

  /**
   *
   * 入力文字列(YYYYMMDDHHmmssSSS)にスラッシュ、スペース、コロンを追加し、返却する
   *
   * @param value スラッシュ無し日付文字列
   * @return String スラッシュ付き日付文字列
   * @throws SMSUnSupportedFormatException フォーマットエラー
   */
  private static addSlashForYYYYMMDDHHmmssSSS(value: string): string {
    if (value.length != 17) {
      throw new SMSUnSupportedFormatException('日時型文字列ではありません')
    }
    let sb: StringBuffer = new StringBuffer(value)

    sb.insert(4, '/')
    sb.insert(7, '/')
    sb.insert(10, ' ')
    sb.insert(13, ':')
    sb.insert(16, ':')
    sb.insert(19, '.')
    return sb.toString()
  }

  /**
   * 日時文字列から区切り文字を削除し、返却する
   * @param value 区切り文字付き日付文字列
   * @return String 区切り文字無し日付文字列
   * @throws SMSUnSupportedFormatException フォーマットエラー
   */
  static reverse(value: string): string {
    let sb: StringBuffer = new StringBuffer(value)
    let length: number = sb.length()

    let ret: StringBuffer = new StringBuffer(length)

    for (let i = 0; length > i; i++) {
      if (
        sb.charAt(i) == '/' ||
        sb.charAt(i) == ':' ||
        sb.charAt(i) == '.' ||
        sb.charAt(i) == ' '
      ) {
      } else {
        ret.append(sb.charAt(i))
      }
    }
    return ret.toString()
  }

  /**
   * 日付に対し、日数の加減算を行い、結果の日付を返します。
   * 第２引数が負数ならば、過去の日付を返却する。
   * ８桁：20050101
   * １４桁：20050101999999
   * １７桁：20050101999999999
   * に対応しています。
   *
   * @param date 加減算する日付 （８桁、１４桁、１７桁）
   * @param day 加算する日数 （負値は減算）
   * @return String 加減算された日付
   */
  static add(date: string, day: number): string {
    return JCCDateUtil.addDay(date, day)
  }

  /**
   * 日付を比較し、差分の日数を返します。（時刻は切り捨て）
   * ８桁：20050101
   * １４桁：200501019999
   * １７桁：200501019999999
   * に対応しています。
   *
   * @param date1 年月日文字列（８桁、１４桁、１７桁）
   * @param date2 年月日文字列（８桁、１４桁、１７桁）
   * @return String 差日数(date1 - date2)
   */
  static diff(date1: string, date2: string): number {
    return JCCDateUtil.subtractDay(date1, date2)
  }

  /**
   * システムからタイムスタンプ(YYYYMMDDHHmmssSSS)を取得する
   *
   * @return String タイムスタンプ(YYYYMMDDHHmmssSSS)
   */
  static getTimeStamp(): string {
    return this.timeStampFormat.format(new NativeDate())
  }

  /**
   * システムから現在日時(YYYYMMDDHHmmss)を取得する
   *
   * @return String 日時(YYYYMMDDHHmmss)
   */
  static getCurrentTime(): string {
    return this.dateSecFormat.format(new NativeDate())
  }

  /**
   * システムから現在日付(YYYYMMDD)を取得する
   *
   * @return String 日付(YYYYMMDD)
   */
  static getCurrentDate(): string {
    return this.dateFormat.format(new NativeDate())
  }

  /**
   * システムから年月(YYYYMM)を取得する
   *
   * @return String 日付(YYYYMMDD)
   */
  static getCurrentMonth(): string {
    return this.monthFormat.format(new NativeDate())
  }

  /**
   * 数値型の第１引数（年）、第２引数（月）、第３引数（日）から日付文字列(YYYYMMDD)を取得する
   *
   * @param year 年（４桁）
   * @param month 月（０〜１１）
   * @param date 日（１〜３１）
   * @return String 日付(YYYYMMDD)
   */
  static getDateString(year: number, month: number, date: number): string {
    let cal: Calendar = Calendar.getInstance()
    cal.set(Calendar.YEAR, year)
    cal.set(Calendar.MONTH, month - 1)
    cal.set(Calendar.DATE, date)
    return this.dateFormat.format(cal.getTime())
  }

  /**
   * サーバ時刻ずれ対策として、
   * 更新日時とタイムスタンプの差分チェックを行います。
   *
   * @param updateDate 更新日時(１４桁)
   * @param timeStamp タイムスタンプ（１４桁）
   * @return 更新日時＞タイムスタンプならば真(true)/更新日時＜＝タイムスタンプならば偽(false)
   */
  static checkKoshinNichiji(updateDate: string, timeStamp: string): boolean {
    let updateDateNum: number = Long.parseLong(updateDate)

    let timeStampNum: number = Long.parseLong(timeStamp)

    //更新日時>タイムスタンプならば真
    if (updateDateNum - timeStampNum > 0) return true

    //その他は偽
    return false
  }

  /**
   * 日付の存在チェックを行います
   *
   * @param param 日付（８桁）
   * @param messageCodeInError エラー発生時のエラーコード
   * @param messageDetailInError エラー発生時のエラーメッセージへのパラメータ
   * @throws SMSCheckException チェック例外が発生した場合
   */
  static checkExistDay(
    param: string,
    messageCodeInError: string,
    messageDetailInError: string[],
  ): void {
    if (param == null || param.length != 8) {
      throw new SMSCheckException(messageCodeInError, messageDetailInError)
    }

    let wc: JCCWestCalendar = new JCCWestCalendar()
    try {
      wc.set(param)
      //指定日付が存在しない場合
      if (!wc.isExistDay()) {
        throw new SMSCheckException(messageCodeInError, messageDetailInError)
      }
    } catch (e) {
      throw new SMSCheckException(messageCodeInError, messageDetailInError)
    }
  }

  /**
   * ミリ秒を８桁の日付(yyyyMMdd)に変換します。
   * @param        msec  変換するミリ秒
   * @return       ８桁の日付(yyyyMMdd)文字列
   */
  static toyyyyMMdd(msec: number): string {
    return JCCDateUtil.toyyyyMMdd(msec)
  }

  /**
   * ミリ秒を１４桁の日付(yyyyMMddHHmmss)に変換します。
   * @param        msec  変換するミリ秒
   * @return       １４桁の日付(yyyyMMddHHmmss)文字列
   */
  static toyyyyMMddHHmmss(msec: number): string {
    return JCCDateUtil.toyyyyMMddHHmmss(msec)
  }

  /**
   * ミリ秒を１７桁の日付(yyyyMMddHHmmssSSS)に変換します。
   * @param        msec  変換するミリ秒
   * @return       １７桁の日付(yyyyMMddHHmmssSSS)文字列
   */
  static toyyyyMMddHHmmssSSS(msec: number): string {
    return JCCDateUtil.toyyyyMMddHHmmssSSS(msec)
  }

  /**
   * 日付をミリ秒に変換します。
   * @param       date  変換する日付 （８桁、１４桁、１７桁）
   * @return      変換されたミリ秒
   */
  static toTimeMinute(date: string): number {
    return JCCDateUtil.toTimeMinute(date)
  }

  /**
   * 日付に対し、時間の加減算を行い、結果の日付を返します。
   * @param      date  加減算する日付 （８桁、１４桁、１７桁）
   * @param      time  加減算する時間 （６桁、９桁）
   * @param      flag  加算、減算の選択 （true：加算　false：減算）
   * @return           加減算された日付
   */
  static addTime(date: string, time: string, flag: boolean): string {
    return JCCDateUtil.addTime(date, time, flag)
  }

  /**
   * 日付の妥当性をチェックします。
   * @param        date  チェックする日付 （８桁、１４桁、１７桁）または時刻（６桁、９桁）
   * @return       判定結果 （true：妥当　false：妥当ではない）
   */
  static check(date: string): boolean {
    return JCCDateUtil.check(date)
  }

  _getName(): string {
    return 'SMSDateStringUtil'
  }

  static _getName(): string {
    return 'SMSDateStringUtil'
  }

  _getType() {
    return SMSDateStringUtil as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSDateStringUtil'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSDateStringUtil'
  }
}
