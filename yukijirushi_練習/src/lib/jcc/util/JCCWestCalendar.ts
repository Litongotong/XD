import { Calendar } from '@/lib/native/util/Calendar'
import { JCCCalendarCommon } from './JCCCalendarCommon'
import { Integer } from '@/lib/native/lang/Integer'
import { JCCCalendarException } from './JCCCalendarException'
import { GregorianCalendar } from '@/lib/native/util/GregorianCalendar'
import { TimeZone } from '@/lib/native/util/TimeZone'
import { Locale } from '@/lib/native/util/Locale'

/**
 * クラス名：西暦クラス.
 * クラス説明：西暦に関するさまざまな機能を提供するクラスです。
 *           ただし、明治元年以前の西暦年は、和暦変換できません。
 * @version V1.0L11 2000/08/26
 */
export class JCCWestCalendar extends JCCCalendarCommon {
  /**
   * コンストラクタ説明：今日の西暦年月日で、インスタンスを生成します。
   */
  constructor()
  constructor(year: number, month: number, day: number)
  constructor(stdstr: string)
  constructor(...params: any[]) {
    super()
    if (!params.length) {
      this.__constructorWithoutParams()
    } else if (params.length === 1) {
      this.__constructor(params[0])
    } else if (params.length === 3) {
      this.__constructorWithYearMonthDay(params[0], params[1], params[2])
    } else {
      throw new Error('Invalid arguments')
    }
  }

  private __constructorWithoutParams() {
    let cal: Calendar = Calendar.getInstance(
      TimeZone.getTimeZone('JST'),
      Locale.JAPAN,
    )
    this.set(
      cal.get(Calendar.YEAR),
      cal.get(Calendar.MONTH) + 1,
      cal.get(Calendar.DATE),
    )
  }

  /**
   * コンストラクタ説明：西暦年月日より、インスタンスを生成します。
   * @param	year	西暦年（4桁整数）
   * @param	month	月（1〜12）
   * @param	day		日（1〜31）
   */
  private __constructorWithYearMonthDay(
    year: number,
    month: number,
    day: number,
  ) {
    this.set(year, month, day)
  }

  /**
   * コンストラクタ説明：西暦年月日の標準文字列より、インスタンスを生成します。
   * @param	stdstr		西暦年月日の標準文字列（"YYYYMMDD")
   * @exception	JCCCalendarException	入力された西暦Formatが違うとき
   */
  private __constructor(stdstr: string) {
    this.set(stdstr)
  }

  set(year: number, month: number, day: number): void
  set(stdstr: string): void
  set(...params: any[]): void {
    if (!params.length) {
      throw new Error('Invalid arguments')
    } else if (params.length === 1) {
      this.__set(params[0])
    } else if (params.length === 3) {
      this.__setWithYearMonthDay(params[0], params[1], params[2])
    } else {
      throw new Error('Invalid arguments')
    }
  }

  /**
   * メソッド名：	日付設定処理.
   * メソッド説明：西暦年月日の各パラメータより、インスタンス変数を設定します。
   * 備考：
   * @param	year	西暦年（4桁整数）
   * @param	month	月（1〜12）
   * @param	day		日（1から31）
   */
  private __setWithYearMonthDay(year: number, month: number, day: number) {
    this.setYear(year)
    this.setMonth(month)
    this.setDay(day)
    this.setStdString(
      this.addZero(year) + this.addZero(month) + this.addZero(day),
    ) //西暦年の標準文字列の設定
  }

  /**
   * メソッド名：	日付設定処理.
   * メソッド説明：西暦年月日の標準文字列より、インスタンス変数を設定します。
   * 備考：
   * @param	stdstr		西暦年月日の標準文字列
   * @exception	JCCCalendarException	入力された西暦Formatが違うとき
   */
  private __set(stdstr: string) {
    try {
      //	西暦年月日の標準文字列より、西暦年月日パラメータを算出する
      let year: number = new Integer(stdstr.substring(0, 4)).intValue()
      let month: number = new Integer(stdstr.substring(4, 6)).intValue()
      let day: number = new Integer(stdstr.substring(6, 8)).intValue()
      this.set(year, month, day) //インスタンス変数に設定
    } catch (e) {
      throw new JCCCalendarException('西暦のFormatが違います:' + stdstr)
    }
  }

  toJapaneseCalendar(): string {
    return this.__toJapaneseCalendar()
  }

  /**
   * メソッド名：	和暦変換処理.
   * メソッド説明：インスタンス変数で設定されている西暦年月日を、和暦年月日に変換します。
   *                結果は、和暦年月日の標準文字列で返されます。<BR>
   * 備考：
   * @return String　和暦年月日の標準文字列（"SYYMMDD"）
   * @exception	JCCCalendarException	存在しない西暦年月日を変換しようとしたとき発生します
   */
  private __toJapaneseCalendar(): string {
    return this.__toJapaneseCalendarWithYearMonthDay(
      this.getYear(),
      this.getMonth(),
      this.getDay(),
      this.getStdString(),
    )
  }

  /**
   * メソッド名：	和暦変換処理.
   * メソッド説明：西暦年月日を、和暦年月日に変換します。
   *                結果は、和暦年月日の標準文字列で返されます。<BR>
   * 備考：
   * @year	year	西暦年
   * @param	month	月
   * @param	day		日
   * @param	stdstr	西暦年月日の標準文字列（"YYYYMMDD"）
   * @return String　和暦年月日の標準文字列（"SYYMMDD"）
   * @exception	JCCCalendarException	存在しない西暦年月日を変換しようとしたとき発生します。
   */
  private __toJapaneseCalendarWithYearMonthDay(
    year: number,
    month: number,
    day: number,
    stdstr: string,
  ): string {
    let jaSymbol: string
    let jaYear: string | null = null
    let jaMonth: string | null = null
    let jaDay: string | null = null
    let it: number
    let i: number, jaYearInt: number

    // 西暦year年month月day日が存在しているか調べる
    if (this.isExistDay(year, month, day) == false) {
      throw new JCCCalendarException(
        '存在しない西暦を変換しようとしました :' +
          year +
          '/' +
          month +
          '/' +
          day,
      )
    }

    // 和暦基準日と比較して、どの年代かを調べる。
    // 明治元年以前 の西暦が入力されていたら、例外を投げる
    for (i = 0; i < JCCCalendarCommon.JA_CAL_SYMBOL.length; i++) {
      if (JCCCalendarCommon.WE_CAL_STANDARD_DATE[i].compareTo(stdstr) > 0) {
        if (i == 0) {
          throw new JCCCalendarException(
            '明治以前の西暦は変換できません :' + year + '/' + month + '/' + day,
          )
        }
        break
      }
    }
    // 年号の略記号を取得
    jaSymbol = JCCCalendarCommon.JA_CAL_SYMBOL[i - 1]

    // 和暦年の取得  <西暦年 - 和暦基準年(各年代の初年にあたる西暦年） + 1>
    jaYearInt =
      year -
      new Integer(
        JCCCalendarCommon.WE_CAL_STANDARD_DATE[i - 1].substring(0, 4),
      ).intValue() +
      1
    jaYear = this.addZero(jaYearInt)

    // 月の取得
    jaMonth = this.addZero(month) //月が1桁なら、前に0をつける

    // 日の取得
    jaDay = this.addZero(day) //月が1桁なら、前に0をつける

    // 和暦の標準文字列（"SYYMMDD"） を生成し、その値を返す
    return jaSymbol + jaYear + jaMonth + jaDay
  }

  /**
   * メソッド名：	西暦文字列取得処理.
   * メソッド説明：設定されている西暦年月日の標準文字列に、区切り文字をつけた文字列を返します。
   * 備考：
   * @param	sy	年の後に付加する区切り文字
   * @param	sm	月の後に付加する区切り文字
   * @param	sd	日の後に付加する区切り文字
   * @return	String	西暦文字列
   */
  toString(sy: string, sm: string, sd: string): string {
    return this.getYear() + sy + this.getMonth() + sm + this.getDay() + sd
  }

  isExistDay(year: number, month: number, day: number): boolean
  isExistDay(): boolean
  isExistDay(...params: any[]): boolean {
    if (!params.length) {
      return this.__isExistDay()
    } else if (params.length === 3) {
      return this.__isExistDayWithYearMonthDay(params[0], params[1], params[2])
    } else {
      throw new Error('Invalid arguments')
    }
  }

  /**
   * メソッド名：	日付存在チェック処理.
   * メソッド説明：設定されている西暦年月日が存在する日かどうか調べます。
   * 備考：
   * @return	boolean		true:存在する日　　false:存在しない日
   */
  private __isExistDay(): boolean {
    return this.isExistDay(this.getYear(), this.getMonth(), this.getDay())
  }

  /**
   * メソッド名：	日付存在チェック処理.
   * メソッド説明：引数で与えられる西暦年月日が存在する日かを調べます。
   * 備考：
   * @param	year	西暦年（4桁整数）
   * @param	month	月（1〜12）
   * @param	day		日（1から31）
   * @return	boolean	true:存在する日　　false:存在しない日
   */
  private __isExistDayWithYearMonthDay(
    year: number,
    month: number,
    day: number,
  ): boolean {
    let cl: Calendar = new GregorianCalendar(year, month - 1, day)
    //実在日チェック
    if (
      cl.get(Calendar.YEAR) != year ||
      cl.get(Calendar.MONTH) != month - 1 ||
      cl.get(Calendar.DATE) != day
    ) {
      return false
    } else {
      return true
    }
  }

  /**
   * メソッド名：	前ゼロ付加処理.
   * メソッド説明：数字が1桁の場合、2桁目に0をつけた文字型にして返します。
   * 備考：
   * @param	num		数字
   * @return	String	2桁の数字の文字列
   */
  private addZero(num: number): string {
    let str: string | null = null
    let it: number = num
    if (num < 10) {
      //もし１〜９だったら、0を付加するex) 01,02,,,09
      str = '0' + it.toString()
    } else {
      str = it.toString()
    }
    return str
  }

  _getName(): string {
    return 'JCCWestCalendar'
  }

  static _getName(): string {
    return 'JCCWestCalendar'
  }

  _getType() {
    return JCCWestCalendar as any
  }

  _getFullName(): string {
    return 'jcc.util.JCCWestCalendar'
  }

  static _getFullName(): string {
    return 'jcc.util.JCCWestCalendar'
  }
}
