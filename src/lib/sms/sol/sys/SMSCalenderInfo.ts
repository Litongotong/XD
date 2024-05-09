import { HashMap } from '@/lib/native/util/HashMap'
import { SMSProperties } from './SMSProperties'
import { Integer } from '@/lib/native/lang/Integer'

/**
 * カレンダー情報クラスです。
 * SMSCalender.propertiesに定義されている情報を提供します。
 */
export class SMSCalenderInfo extends SMSProperties {
  /** 読込むプロパティファイル名 */
  private static FILE_NAME: string = 'SMSCalender.properties'

  /** このクラスのインスタンス */
  private static ins: SMSCalenderInfo = new SMSCalenderInfo()

  /** カレンダー部品名を取得するためのキー */
  private static CALENDER_CLASS: string = 'CALENDER_CLASS'

  /** 休日設定フラグを取得するためのキー */
  private static HOLIDAY_FLAG: string = 'HOLIDAY_FLAG'

  /** 日曜日のカラーを取得するためのキー */
  static SUNDAY_COLOR: string = 'SUNDAY_COLOR'

  /** 月曜日のカラーを取得するためのキー */
  static MONDAY_COLOR: string = 'MONDAY_COLOR'

  /** 火曜日のカラーを取得するためのキー */
  static TUESDAY_COLOR: string = 'TUESDAY_COLOR'

  /** 水曜日のカラーを取得するためのキー */
  static WEDNESDAY_COLOR: string = 'WEDNESDAY_COLOR'

  /** 木曜日のカラーを取得するためのキー */
  static THURSDAY_COLOR: string = 'THURSDAY_COLOR'

  /** 金曜日のカラーを取得するためのキー */
  static FRIDAY_COLOR: string = 'FRIDAY_COLOR'

  /** 土曜日のカラーを取得するためのキー */
  static SATURDAY_COLOR: string = 'SATURDAY_COLOR'

  /** 日曜日のカラーを取得するためのキー */
  static HOLIDAY_COLOR: string = 'HOLIDAY_COLOR'

  /** デフォルトカラー */
  private static DEFAULT_COLOR: string = '#000000'

  /** セパレータ */
  private static SEPARATOR: string = '/'

  /** プロパティファイルに設定された休日を保持します。 */
  private static holidayMap: HashMap = new HashMap()

  /**
   * コンストラクタです。<br>
   * 外部へは公開しません。
   */
  private constructor() {
    super()
    // プロパティファイルを読込みます
    super.load()
  }

  /**
   * インスタンス取得メソッドです。<br>
   * (singletonパターン仕様)
   */
  private static getInstance(): SMSCalenderInfo {
    return SMSCalenderInfo.ins
  }

  /**
   * ファイル名を通知します。
   * @return String ファイル名
   */
  getFileName(): string {
    return SMSCalenderInfo.FILE_NAME
  }

  /**
   * <PRE>
   * カレンダー部品名を取得します。
   * </PRE>
   * @return String カレンダー部品
   */
  static getCalenderClass(): string {
    return this.getInstance()
      .getProperty()
      .getString(SMSCalenderInfo.CALENDER_CLASS)
  }

  /**
   * <PRE>
   * 日付カラーを取得します。
   * </PRE>
   * @param key キー
   * @return boolean カラー
   */
  static getColor(key: string): string {
    let color: string = this.getInstance().getProperty().getString(key)
    if (color == null || color.equals('')) {
      return SMSCalenderInfo.DEFAULT_COLOR
    } else {
      return SMSCalenderInfo.getInstance().getProperty().getString(key)
    }
  }

  static isHoliday(year: number, month: number, date: number): boolean
  static isHoliday(year: number): boolean
  static isHoliday(...params: any[]): boolean {
    if (params.length === 1) {
      return this.__isHolidayWithYear(params[0])
    } else if (params.length === 3) {
      return this.__isHolidayWithYearMonthDate(params[0], params[1], params[2])
    } else {
      throw new Error('Invalid number of arguments')
    }
  }

  /**
   * <PRE>
   * 指定された年月日が休日かどうかをチェックします。
   * </PRE>
   * プロパティファイルに設定された休日をチェックします。
   * @param year 年
   * @param month 月
   * @param date 日
   * @return boolean 休日(true),平日(false)
   */
  private static __isHolidayWithYearMonthDate(
    year: number,
    month: number,
    date: number,
  ): boolean {
    let holiday: string = this.getInstance()
      .getProperty()
      .getString(
        year +
          SMSCalenderInfo.SEPARATOR +
          month +
          SMSCalenderInfo.SEPARATOR +
          date,
      )
    if (holiday == null || holiday.equals('')) {
      return false
    } else {
      return true
    }
  }

  /**
   * <PRE>
   * 指定された年の休日情報があるかどうかをチェックします。
   * </PRE>
   * @param year 年
   * @return boolean 作成済み・・true,未作成・・false
   */
  private static __isHolidayWithYear(year: number): boolean {
    if (SMSCalenderInfo.holidayMap.containsKey(new Integer(year).toString())) {
      return true
    } else {
      return false
    }
  }

  /**
   * <PRE>
   * 指定された年月の休日情報を取得します。
   * </PRE>
   * 休日情報はHashMapとして返却されます。<br>
   * 構造は以下の通りです。<br>
   * <br>
   * [休日情報の構造]<br>
   * <br>
   * (キー)　　 ｜　　(値)　<br>
   * 2005/1/1   |   元日<br>
   * 2005/1/10  |   成人の日<br>
   * 2005/2/11  |   建国記念の日<br>
   * 2005/3/20  |   春分の日<br>
   * 2005/3/21  |   振替休日<br>
   * ・・・　　　|　 ・・・<br>
   * <br>
   * @param year 年
   * @param month 月
   * @return HashMap 休日情報
   */
  static getHoliday(year: number): HashMap {
    if (SMSCalenderInfo.isHoliday(year)) {
      return this.holidayMap.get(new Integer(year).toString()) as HashMap
    } else {
      return this.createHoliday(year)
    }
  }

  /**
   * <PRE>
   * 指定された年の休日情報を作成します。
   * </PRE>
   * プロパティファイルに設定された休日を取得し休日情報を作成します。<br>
   * @param year 年
   * @return HashMap 休日情報
   */
  private static createHoliday(year: number): HashMap {
    let map: HashMap = null!
    // 指定された年の休日情報が無い場合
    if (SMSCalenderInfo.isHoliday(year)) {
      map = this.holidayMap.get(new Integer(year).toString()) as HashMap
    } else {
      map = new HashMap()
      // プロパティファイルに設定されている休日のキャッシュ
      for (let i = 1; i <= 12; i++) {
        for (let j = 1; j <= 31; j++) {
          let holiday: string = this.getInstance()
            .getProperty()
            .getString(
              year +
                SMSCalenderInfo.SEPARATOR +
                i +
                SMSCalenderInfo.SEPARATOR +
                j,
            )
          if (holiday != null) {
            map.put(
              year +
                SMSCalenderInfo.SEPARATOR +
                i +
                SMSCalenderInfo.SEPARATOR +
                j,
              holiday,
            )
          }
        }
      }
      SMSCalenderInfo.holidayMap.put(new Integer(year).toString(), map)
    }
    return map
  }
}
