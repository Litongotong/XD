import { ArrayList } from '@/lib/native/util/ArrayList'
import { GregorianCalendar } from '@/lib/native/util/GregorianCalendar'
import { HashMap } from '@/lib/native/util/HashMap'
import { create2DNumberArray } from '@/utils/array/2D'
import { SMSCalenderInfo } from './SMSCalenderInfo'

/**
 * <PRE>
 * カレンダー部品です。
 * </PRE>
 * <br>
 * カレンダーの取得は"getCalender(year:int,month:int):ArrayList"メソッドを使用します。<br>
 * <br>
 * [getCalenderメソッド処理概要]<br>
 * <br>
 * 指定された年月のカレンダーをArrayList型として返却します。<br>
 * 返却されるArrayListは、以下のような構造となっています。<br>
 * <br>
 * 【例：2005年1月のカレンダー取得時】<br>
 * <br>
 * ArrayList[0] = [ { 0,0} ,{ 0,0} , {0,0} , {0,0} , {0,0} , {0,0} , {1,1} ]<br>
 * ArrayList[1] = [ { 2,0} ,{ 3,0} , {4,0} , {5,0} , {6,0} , {7,0} , {8,0} ]<br>
 * ArrayList[2] = [ { 9,0} ,{10,1} ,{11,0} ,{12,0} ,{13,0} ,{14,0} ,{15,0} ]<br>
 * ArrayList[3] = [ {16,0} ,{17,0} ,{18,0} ,{19,0} ,{20,0} ,{21,0} ,{22,0} ]<br>
 * ArrayList[4] = [ {23,0} ,{24,0} ,{25,0} ,{26,0} ,{27,0} ,{28,0} ,{29,0} ]<br>
 * ArrayList[5] = [ {30,0} ,{31,0} , {0,0} , {0,0} , {0,0} , {0,0} , {0,0} ]<br>
 * <br>
 * <br>
 * @：ArrayListは第一要素から順に「日、月、火、水、木、金、土」となります。<br>
 * <br>
 * A：ArrayList内の要素は、int型の多次元配列(int[7][2])となります。<br>
 * 　　int[*][0]には日付、int[*][1]には休日フラグ(0・・false、1・・true)が格納されています。<br>
 * 　　※休日フラグは、プロパティファイル(SMSCalender.properties)に設定されている休日に沿って判定されます。<br>
 * <br>
 *
 * @author  販売管理WG
 */
export class SMSCalender {
  /** GregorianCalendarインスタンス */
  private static cal: GregorianCalendar = null!

  /** カレンダマップ */
  private static calenderMap: HashMap = new HashMap()

  /**
   * <PRE>
   * デフォルトコンストラクタ
   * </PRE>
   */
  constructor() {
    if (SMSCalender.cal == null) {
      SMSCalender.cal = new GregorianCalendar()
    }
  }

  /**
   * <PRE>
   * 指定された年、月のカレンダーを取得します。
   * </PRE>
   * @param year 年
   * @param month 月
   * @return ArrayList カレンダー
   */
  getCalender(year: number, month: number): ArrayList {
    let key: string = year + '/' + month

    if (SMSCalender.calenderMap.containsKey(key)) {
      return SMSCalender.calenderMap.get(key) as ArrayList
    } else {
      let calender: ArrayList = this.create(year, month)
      SMSCalender.calenderMap.put(key, calender)
      return calender
    }
  }

  /**
   * <PRE>
   * 現在年を取得します。
   * </PRE>
   * @return int 現在年
   */
  getCurrentYear(): number {
    SMSCalender.cal = new GregorianCalendar()
    return SMSCalender.cal.get(GregorianCalendar.YEAR)
  }

  /**
   * <PRE>
   * 現在月を取得します。
   * </PRE>
   * @return int 現在月
   */
  getCurrentMonth(): number {
    SMSCalender.cal = new GregorianCalendar()
    return SMSCalender.cal.get(GregorianCalendar.MONTH) + 1
  }

  /**
   * <PRE>
   * 指定された月の次月を取得します。
   * </PRE>
   * @param month 月
   * @return 次月
   */
  getNextMonth(month: number): number {
    if (month == 12) {
      month = 1
    } else {
      month++
    }
    return month
  }

  /**
   * <PRE>
   * 指定された月の前月を取得します。
   * </PRE>
   * @param month 月
   * @return 前月
   */
  getPrevMonth(month: number): number {
    if (month == 1) {
      month = 12
    } else {
      month--
    }
    return month
  }

  /**
   * <PRE>
   * 指定された年の次年を取得します。
   * </PRE>
   * @param year	年
   * @return 次年
   */
  getNextYear(year: number, month: number): number {
    if (month == 12) {
      year++
    }
    return year
  }

  /**
   * <PRE>
   * 指定された年の前年を取得します。
   * </PRE>
   * @param year	年
   * @return 前年
   */
  getPrevYear(year: number, month: number): number {
    if (month == 1) {
      year--
    }
    return year
  }

  /**
   * <PRE>
   * 指定された年、月のカレンダーを作成します。
   * </PRE>
   * @param year 年
   * @param month 月
   * @return カレンダー
   */
  private create(year: number, month: number): ArrayList {
    let calender: ArrayList = new ArrayList(6)

    // 月の日数を取得
    let days: number = this.getDays(year, month)

    // 月のはじめの日の曜日を取得
    let firstDay: number = this.getFirstDay(year, month)

    let DAY: number = 1
    //boolean createFlag = true;
    let firstWeekFlag: boolean = true

    // カレンダの作成開始
    //while(createFlag){
    for (let k = 0; k < 6; k++) {
      let week: number[][] = create2DNumberArray(7, 2)
      // 一週間づつ作成する
      for (let i = 0; i < week.length; i++) {
        // 一週間目
        if (firstWeekFlag) {
          if (i == firstDay) {
            week[i][0] = DAY
            if (SMSCalenderInfo.isHoliday(year, month, DAY)) {
              week[i][1] = 1
            } else {
              week[i][1] = 0
            }
            DAY += 1
            if (week.length == 7) {
              firstWeekFlag = false
            }
          } else {
            week[i][0] = 0
          }
          // 二週間目以降
        } else {
          if (DAY <= days) {
            week[i][0] = DAY
            if (SMSCalenderInfo.isHoliday(year, month, DAY)) {
              week[i][1] = 1
            } else {
              week[i][1] = 0
            }
            DAY += 1
          } else {
            week[i][0] = 0
          }
        }
      }
      calender.add(week)
    }

    return calender
  }

  /**
   * <PRE>
   * 月の日数を取得します。
   * </PRE>
   * @param year 年
   * @param month 月
   * @return 日数
   */
  private getDays(year: number, month: number): number {
    // 4月、6月、9月、11月であった場合
    if (month == 4 || month == 6 || month == 9 || month == 11) {
      return 30
      // 2月であった場合
    } else if (month == 2) {
      if (SMSCalender.cal.isLeapYear(year)) {
        return 29
      } else {
        return 28
      }
      // 1月、3月、5月、7月、8月、10月、12月であった場合
    } else {
      return 31
    }
  }

  /**
   * <PRE>
   * 月の初めの日の曜日を返却します。
   * </PRE>
   * 0・・・日曜日<br>
   * 1・・・月曜日<br>
   * 2・・・火曜日<br>
   * 3・・・水曜日<br>
   * 4・・・木曜日<br>
   * 5・・・金曜日<br>
   * 6・・・土曜日<br>
   * @param year 年
   * @param month 月
   * @return 曜日
   */
  private getFirstDay(year: number, month: number): number {
    SMSCalender.cal.set(year, month - 1, 1)
    return SMSCalender.cal.get(GregorianCalendar.DAY_OF_WEEK) - 1
  }
}
