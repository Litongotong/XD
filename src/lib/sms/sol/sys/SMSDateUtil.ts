import { IllegalArgumentException } from '@/lib/native/lang/IllegalArgumentException'
import type { DateFormat } from '@/lib/native/text/DateFormat'
import { SimpleDateFormat } from '@/lib/native/text/SimpleDateFormat'
import { NativeDate } from '@/lib/native/util/Date'

/**
 * 日付操作を行うユーティリティクラスです。
 * @author 販売管理WG
 */
export class SMSDateUtil {
  /** 日付フォーマット【yyyy/MM/dd/ HH:mm:ss:SSS】 */
  static DATETYPE_WITH_SLUSH: number = 0
  //static  DATE_TYPE1: number = 0;

  /** 日付フォーマット【yyyy/MM/dd】 */
  static DATETYPE_OF_DATE: number = 1
  //static  DATE_TYPE2: number = 1;

  /** 日付フォーマット【yyyyMMddHHmmssSSS】 */
  static DATETYPE_OF_MILI_SEC: number = 2
  //static  DATE_TYPE3: number = 2;

  /** 日付フォーマット【yyyyMMddHHmmss】 */
  static DATETYPE_OF_SEC: number = 3

  /** 日付フォーマット【yyyyMMddHHmmssSSS】 */
  static DATETYPE_OF_MINUTE: number = 4

  /** 日付フォーマット【yyyy/MM/dd/ HH:mm:ss】 */
  static DATETYPE_OF_SEC_WITH_SLUSH: number = 5

  /** 日付フォーマット【yyyyMMdd】*/
  static DATETYPE_OF_DATE_LENGTH_8: number = 6

  /** 日付フォーマット【yyyy年MM月dd日】 */
  static DATETYPE_OF_NENGAPPI: number = 7

  /** 日付フォーマット【yyyyMM】*/
  static DATETYPE_OF_DATE_LENGTH_6: number = 8

  /** 日付フォーマット【yyyy年MM月】*/
  static DATETYPE_OF_NENGETSU: number = 9

  /** 日付フォーマット【yyyy】*/
  static DATETYPE_OF_DATE_LENGTH_4: number = 10

  /** 日付フォーマット【yyyy年度】*/
  static DATETYPE_OF_NENDO: number = 11

  /** 日付フォーマット【yyyy年MM月dd日HH時mm分ss秒】*/
  static DATETYPE_OF_NENGAPPITIME: number = 12

  /** 日付のフォーマット指定に用いる配列です */
  private static dateFormat: string[] = [
    'yyyy/MM/dd/ HH:mm:ss:SSS',
    'yyyy/MM/dd',
    'yyyyMMddHHmmssSSS',
    'yyyyMMddHHmmss',
    'yyyyMMddHHmm',
    'yyyy/MM/dd HH:mm:ss',
    'yyyyMMdd',
    'yyyy年MM月dd日',
    'yyyyMM',
    'yyyy年MM月',
    'yyyy',
    'yyyy年度',
    'yyyy年MM月dd日HH時mm分ss秒',
  ]

  /**
   * デフォルトコンストラクタです。（公開しません）
   */
  private constructor() {}

  /**
   * 日付処理メソッド。
   * 作成：雷康  2004/08/28
   * 更新：雷康  2004/08/28
   *
   *
   * <B>処理概要:</B>
   * <PRE>
   *
   * 指定されたフォーマットで現在の日付を返します。
   *
   * </PRE>
   * @param type   フォーマットタイプ
   * @param String 日付
   */
  static format(type: number): string {
    return this.formatDate(new NativeDate(), type)
  }

  /**
   * 日付処理メソッド。
   * 作成：雷康  2004/08/28
   * 更新：雷康  2004/08/28
   *
   *
   * <B>処理概要:</B>
   * <PRE>
   *
   * Dateオブジェクトを指定されたフォーマットでStringに変換します。
   *
   * </PRE>
   * @param long   lDate 1970 年 1 月 1 日 00:00:00 GMT からのミリ秒数
   * @param type   フォーマットタイプ
   * @param String 日付
   */
  static getSystemDate(lDate: number, type: number): string {
    return this.formatDate(new NativeDate(lDate), type)
  }

  /**
   * 日付処理メソッド。
   * 作成：雷康  2004/08/28
   * 更新：雷康  2004/08/28
   *
   *
   * <B>処理概要:</B>
   * <PRE>
   *
   * Dateオブジェクトを指定されたフォーマットでStringに変換します。
   *
   * </PRE>
   * @param Date   Date
   * @param type   フォーマットタイプ
   * @param String 日付
   */
  static formatDate(date: NativeDate, type: number): string {
    try {
      // 指定したタイプでフォーマットします
      let data_format: DateFormat = new SimpleDateFormat(this.dateFormat[type])

      // フォーマットした日付を返します
      //修正20050116
      return data_format.format(date)
    } catch (aex: any) {
      throw new IllegalArgumentException('Date format type-error:' + type)
    }
  }

  _getName(): string {
    return 'SMSDateUtil'
  }

  static _getName(): string {
    return 'SMSDateUtil'
  }

  _getType() {
    return SMSDateUtil as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSDateUtil'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSDateUtil'
  }
}
