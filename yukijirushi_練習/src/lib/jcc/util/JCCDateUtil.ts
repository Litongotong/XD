import { IllegalArgumentException } from '@/lib/native/lang/IllegalArgumentException'
import { Integer } from '@/lib/native/lang/Integer'
import { SimpleDateFormat } from '@/lib/native/text/SimpleDateFormat'
import { Calendar } from '@/lib/native/util/Calendar'
import { NativeDate } from '@/lib/native/util/Date'

/**
  日付演算を行うユーティリティクラスです。
  ８桁の日付(yyyyMMdd)と６桁/９桁の時刻(HHmmss)/(HHmmssSSS)を文字列で保有する場合の演算に使用できます。
  HHは0〜23で使用します。
*/
export class JCCDateUtil {
  private static errMsg1: string = 'incompatible digits'
  private static errMsg2: string = 'incorrect characters'
  private static errMsg3: string = 'result < 0'
  private static errMsg4: string = 'date = 0'

  constructor() {}

  /**
	  日付に対し、日数の加減算を行い、結果の日付を返します。
	  @param date　加減算する日付 （８桁、１４桁、１７桁）
	  @param day　 加算する日数 （負値は減算）
	  @return 加減算された日付
	*/
  static addDay(date: string, day: number): string {
    if (Integer.parseInt(date.substring(0, 8)) == 0)
      throw new IllegalArgumentException(this.errMsg4)
    if (date.indexOf('-') != -1 || date.indexOf('.') != -1)
      throw new IllegalArgumentException(this.errMsg2)
    let date_length: number = date.length
    if (date_length == 8 || date_length == 14 || date_length == 17) {
    } else {
      throw new IllegalArgumentException(this.errMsg1)
    }
    const calendar: Calendar = this.transCalendar(date, date_length)
    const form: SimpleDateFormat = this.transFormat(date_length)
    if (this.toTimeMinute(date) + day * 86400000 < 0)
      throw new IllegalArgumentException(this.errMsg3)
    calendar.add(Calendar.DATE, day)
    /*86400000*/
    return form.format(calendar.getTime())
  }

  /**
	  日付に対し、時間の加減算を行い、結果の日付を返します。
	  @param      date  加減算する日付 （８桁、１４桁、１７桁）
	  @param      time  加減算する時間 （６桁、９桁）
	  @param      flag  加算、減算の選択 （true：加算　false：減算）
	  @return           加減算された日付
	*/
  static addTime(date: string, time: string, flag: boolean): string {
    if (Integer.parseInt(date.substring(0, 8)) == 0)
      throw new IllegalArgumentException(this.errMsg4)
    if (
      date.indexOf('-') != -1 ||
      time.indexOf('-') != -1 ||
      date.indexOf('.') != -1 ||
      time.indexOf('.') != -1
    )
      throw new IllegalArgumentException(this.errMsg2)
    let date_length: number = date.length
    let time_length: number = time.length
    if (date_length == 8 || date_length == 14 || date_length == 17) {
    } else throw new IllegalArgumentException(this.errMsg1)

    if (time_length == 6 || time_length == 9) {
    } else throw new IllegalArgumentException(this.errMsg1)

    let date_msec: number = this.toTimeMinute(date)
    let time_msec: number =
      Integer.parseInt(time.substring(0, 2)) * 3600000 +
      Integer.parseInt(time.substring(2, 4)) * 60000 +
      Integer.parseInt(time.substring(4, 6)) * 1000
    if (time_length == 9) time_msec += Integer.parseInt(time.substring(6, 9))

    if (flag) {
      if (date_length == 8) return this.toyyyyMMdd(date_msec + time_msec)
      else if (date_length == 14)
        return this.toyyyyMMddHHmmss(date_msec + time_msec)
      else return this.toyyyyMMddHHmmssSSS(date_msec + time_msec)
    } else {
      if (date_msec - time_msec < 0)
        throw new IllegalArgumentException(this.errMsg3)
      if (date_length == 8) return this.toyyyyMMdd(date_msec - time_msec)
      else if (date_length == 14)
        return this.toyyyyMMddHHmmss(date_msec - time_msec)
      else return this.toyyyyMMddHHmmssSSS(date_msec - time_msec)
    }
  }

  /**
	  日付を比較し、差分の日数を返します。（時刻は切り捨て）
	  @param        date1　比較する日付 （８桁、１４桁、１７桁）
	  @param	      date2  比較する日付 （８桁、１４桁、１７桁）
	  @return       date1 - date2 の結果日数
	*/
  static subtractDay(date1: string, date2: string): number {
    if (
      Integer.parseInt(date1.substring(0, 8)) == 0 ||
      Integer.parseInt(date2.substring(0, 8)) == 0
    )
      throw new IllegalArgumentException(this.errMsg4)
    if (
      date1.indexOf('-') != -1 ||
      date2.indexOf('-') != -1 ||
      date1.indexOf('.') != -1 ||
      date2.indexOf('.') != -1
    )
      throw new IllegalArgumentException(this.errMsg2)
    let date1_length: number = date1.length
    let date2_length: number = date2.length
    if (date1_length == 8 || date1_length == 14 || date1_length == 17) {
    } else throw new IllegalArgumentException(this.errMsg1)

    if (date2_length == 8 || date2_length == 14 || date2_length == 17) {
    } else throw new IllegalArgumentException(this.errMsg1)

    date1 = date1.substring(0, 8)
    date2 = date2.substring(0, 8)
    let carender1: Calendar = this.transCalendar(date1, 8)
    let carender2: Calendar = this.transCalendar(date2, 8)
    let d: number =
      carender1.getTime().getTime() - carender2.getTime().getTime()
    return Number(d / (1000 * 60 * 60 * 24))
  }

  /**
	  ミリ秒を８桁の日付(yyyyMMdd)に変換します。
	  @param        msec  変換するミリ秒
	  @return       ８桁の日付(yyyyMMdd)文字列
	*/
  static toyyyyMMdd(msec: number): string {
    let form: SimpleDateFormat = this.transFormat(8)
    let date: NativeDate = new NativeDate(msec)
    return form.format(date)
  }

  /**
	  ミリ秒を１４桁の日付(yyyyMMddHHmmss)に変換します。
	  @param        msec  変換するミリ秒
	  @return       １４桁の日付(yyyyMMddHHmmss)文字列
	*/
  static toyyyyMMddHHmmss(msec: number): string {
    let form: SimpleDateFormat = this.transFormat(14)
    let date: NativeDate = new NativeDate(msec)
    return form.format(date)
  }

  /**
	  ミリ秒を１７桁の日付(yyyyMMddHHmmssSSS)に変換します。
	  @param        msec  変換するミリ秒
	  @return       １７桁の日付(yyyyMMddHHmmssSSS)文字列
	*/
  static toyyyyMMddHHmmssSSS(msec: number): string {
    let form: SimpleDateFormat = this.transFormat(17)
    let date: NativeDate = new NativeDate(msec)
    return form.format(date)
  }

  /**
	  日付をミリ秒に変換します。
	  @param       date  変換する日付 （８桁、１４桁、１７桁）
	  @return      変換されたミリ秒
	*/
  static toTimeMinute(date: string): number {
    if (Integer.parseInt(date.substring(0, 8)) == 0)
      throw new IllegalArgumentException(this.errMsg4)
    if (date.indexOf('-') != -1 || date.indexOf('.') != -1)
      throw new IllegalArgumentException(this.errMsg2)
    let date_length: number = date.length
    if (date_length == 8 || date_length == 14 || date_length == 17) {
    } else throw new IllegalArgumentException(this.errMsg1)

    let calendar: Calendar = this.transCalendar(date, date_length)
    let msec: number = calendar.getTime().getTime()
    return msec
  }

  /**
	  日付の妥当性をチェックします。
	  @param        date  チェックする日付 （８桁、１４桁、１７桁）または時刻（６桁、９桁）
	  @return       判定結果 （true：妥当　false：妥当ではない）
	*/
  static check(date: string): boolean {
    if (date.indexOf('-') != -1 || date.indexOf('.') != -1) return false

    let date_length: number = date.length
    if (
      date_length == 8 ||
      date_length == 14 ||
      date_length == 17 ||
      date_length == 6 ||
      date_length == 9
    ) {
    } else {
      return false
    }
    try {
      if (date_length == 6 || date_length == 9) {
        if (date_length == 9 && Integer.parseInt(date.substring(6, 9)) < 0) {
          return false
        }
        if (
          Integer.parseInt(date.substring(4, 6)) > 59 ||
          Integer.parseInt(date.substring(4, 6)) < 0
        ) {
          return false
        } else if (
          Integer.parseInt(date.substring(2, 4)) > 59 ||
          Integer.parseInt(date.substring(2, 4)) < 0
        ) {
          return false
        } else if (
          Integer.parseInt(date.substring(0, 2)) > 23 ||
          Integer.parseInt(date.substring(0, 2)) < 0
        ) {
          return false
        } else return true
      } else if (date_length == 8 || date_length == 14 || date_length == 17) {
        let y: number = Integer.parseInt(date.substring(0, 4))
        let m: number = Integer.parseInt(date.substring(4, 6))
        let d: number = Integer.parseInt(date.substring(6, 8))

        if (y < 0) {
          return false
        } else if (m > 12 || m < 1) {
          return false
        } else if (d > 31 || d < 1) {
          return false
        } else if (m == 4 && d == 31) {
          return false
        } else if (m == 6 && d == 31) {
          return false
        } else if (m == 9 && d == 31) {
          return false
        } else if (m == 11 && d == 31) {
          return false
        } else if (m == 2 && d > 29) {
          return false
        } else if (m == 2 && d == 29 && y % 4 != 0) {
          return false
        } else if (m == 2 && d == 29 && y % 100 == 0 && y % 400 != 0) {
          return false
        } else if (date.length != 8) {
          let flag: boolean = this.check(date.substring(8, 14))
          if (flag == false) {
            return false
          } else return true
        } else return true
      } else return false
    } catch (nfe) {
      return false
    }
  }

  /*
	  String型で渡された日付をCalendar型に変換します。
	*/
  private static transCalendar(date: string, length: number): Calendar {
    const form: SimpleDateFormat = this.transFormat(length)

    const carender: Calendar = Calendar.getInstance()
    try {
      carender.setTime(form.parse(date))
    } catch (ex) {
      throw new IllegalArgumentException(this.errMsg2)
    }
    return carender
  }
  /*
	  int型で渡された桁数からSimpleDateFormat型を返します。
	*/
  private static transFormat(length: number): SimpleDateFormat {
    let form: SimpleDateFormat
    if (length == 8) {
      form = new SimpleDateFormat('yyyyMMdd')
    } else if (length == 14) {
      form = new SimpleDateFormat('yyyyMMddHHmmss')
    } else {
      form = new SimpleDateFormat('yyyyMMddHHmmssSSS')
    }
    return form
  }

  _getName(): string {
    return 'JCCDateUtil'
  }

  static _getName(): string {
    return 'JCCDateUtil'
  }

  _getType() {
    return JCCDateUtil as any
  }

  _getFullName(): string {
    return 'jcc.util.JCCDateUtil'
  }

  static _getFullName(): string {
    return 'jcc.util.JCCDateUtil'
  }
}
