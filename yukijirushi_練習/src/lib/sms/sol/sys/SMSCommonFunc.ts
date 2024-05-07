import { Double } from '@/lib/native/lang/Double'
import { Integer } from '@/lib/native/lang/Integer'
import { NativeString } from '@/lib/native/lang/String'
import { BigDecimal } from '@/lib/native/math/BigDecimal'
import { DecimalFormat } from '@/lib/native/text/DecimalFormat'
import { Calendar } from '@/lib/native/util/Calendar'

/**
 * フィールドチェッククラスです。
 * @author  販売管理WG
 */
export class SMSCommonFunc {
  /**
   * 日時表示格式変更です
   * 作成：富士通  2004/11/17
   * 更新：
   * <B>処理概要:</B>
   * <PRE>
   * 日時表示格式変更
   *
   * </PRE>
   * @param  String　変更前データ
   * @return String  変更後データ
   * @modelguid {199F87A0-DFD9-4A05-8F8F-2A867580C1DA}
   */
  static changeStr(str1: string): string {
    let str: string = ''

    let idx: number = 0
    // フォーマットした日付表示格式を返します
    if (str1 != null && !str1.equals('') && str1.length > 8) {
      idx = str1.lastIndexOf('.')
      if (idx != -1) {
        str = str1.substring(0, idx)
      }
      return str.replaceAll('-', '/')
    } else {
      return str
    }
  }

  /**
   * 日付を増えると降りるの処理<p>
   * @param　 String 変換前の日付(YYYYMMDD)
   * @param   String 増減の天数/月数
   * @return  String 変換後の日付(YYYYMMDD)
   * @exception なし
   */
  static dT_UNYOSyuToku(strOldDate: string, strN: string): string {
    let strReturn: string = ''

    if (strOldDate == null || strOldDate.equals('') || strOldDate.length < 8) {
      return strOldDate
    }

    let iNumber: number = -Integer.parseInt(strN)

    //カレンダ作成
    let cal: Calendar = Calendar.getInstance()
    cal.set(
      Integer.parseInt(strOldDate.substring(0, 4)),
      Integer.parseInt(strOldDate.substring(4, 6)) - 1,
      Integer.parseInt(strOldDate.substring(6, 8)),
    )

    cal.add(Calendar.DATE, iNumber)

    let YYYY: string = NativeString.valueOf(cal.get(Calendar.YEAR))

    let MMStr: string = NativeString.valueOf(cal.get(Calendar.MONTH) + 1)
    let MM: string = ''
    if (MMStr.length < 2) {
      MM = '0' + MMStr
    } else {
      MM = MMStr
    }

    let DDStr: string = NativeString.valueOf(cal.get(Calendar.DATE))
    let DD: string = ''

    if (DDStr.length < 2) {
      DD = '0' + DDStr
    } else {
      DD = DDStr
    }

    strReturn = YYYY + MM + DD + '000000'

    return strReturn
  }

  /**
   * 数値にカンマを追加する。
   *
   * <B>処理概要:</B>
   * <PRE>
   *
   * 		数値にカンマを追加する。
   *
   * </PRE>
   * @param context コンテキスト
   * @return String
   */
  static formatt(kibo: string): string {
    if (kibo == null) {
      return '0'
    }
    if (kibo.equals('0')) {
      return '0'
    } else {
      let yoKiBo: number = Double.parseDouble(kibo)

      let f1: DecimalFormat = new DecimalFormat('#,###,###,###.0')

      let str1: string = f1.format(yoKiBo)

      let idx: number

      idx = str1.lastIndexOf('.')

      let str: string = ''

      if (idx != -1) {
        str = str1.substring(0, idx)
      }

      return str
    }
  }

  /**
   * 文字列端末の空文字列を削除することです。
   *
   * <B>処理概要:</B>
   * <PRE>
   *
   * 		空文字列を削除することです。
   *
   * </PRE>
   * @param String 文字列
   * @return String
   */
  static trimStr(str: string): string {
    if (str == null || str.equals('')) {
      return ''
    } else {
      return str.trim()
    }
  }

  /**
   * 引数の情報にスラッシュを付加して返する。
   * 引数の情報がない場合【空文字】を返する。
   * </PRE>
   * @param str    日付
   * @param String スラッシュを付加した日付
   * @return String
   */
  static dateFormatSlashOn(str: string): string {
    // 引数の情報がなかった場合
    if (str == null || str.length < 8) {
      return ''
    }

    // 引数にスラッシュを付加して返する
    return (
      str.substring(0, 4) +
      '/' +
      str.substring(4, 6) +
      '/' +
      str.substring(6, 8)
    )
  }

  /**
   * 引数の情報にスラッシュを削除して返する。
   * 引数の情報がなかった場合【空文字】を返する。
   * </PRE>
   * @param str    時分
   * @param String スラッシュを付加した時分
   * @return String
   */
  static timeFormatSlashOn(str: string): string {
    // 引数の情報がなかった場合
    if (str == null || str.length < 6) {
      return ''
    }

    // 引数にスラッシュを付加して返する
    return (
      str.substring(0, 2) +
      ':' +
      str.substring(2, 4) +
      ':' +
      str.substring(4, 6)
    )
  }

  /**
   * 引数の情報にスラッシュを削除して返する。
   * 引数の情報がなかった場合【空文字】を返する。
   * </PRE>
   * @param str    時分
   * @param String スラッシュを削除した時分
   * @return String
   */
  static timeCutSlash(str: string): string {
    // 引数の情報がなかった場合
    if (str == null || str.length == 0) {
      return ''
    }

    // 引数にスラッシュを削除して返する
    return str.replaceAll(':', '')
  }

  /**
   * 引数の情報にスラッシュを追加して返する。
   * 引数の情報がなかった場合【空文字】を返する。
   * </PRE>
   * @param str    数字
   * @param String スラッシュを追加した時分
   * @return String
   */
  static numberAddSlash(str: string): string {
    let tenset: number = str.indexOf('.')
    let tenStr: string = ''
    if (tenset < 0) {
      tenStr = str
    } else {
      tenStr = str.substring(0, tenset)
    }

    //カンマ追加
    let offset: number = tenStr.length % 3
    let result: string = tenStr.substring(0, offset)
    for (let i = offset; i < tenStr.length; i += 3) {
      if (tenStr.length != 0 && result.length != 0) {
        result += ','
      }
      result += tenStr.substring(i, i + 3)
    }
    if (tenset > -1) {
      result += str.substring(tenset, str.length)
    }
    return result
  }

  /**
   * 引数の情報にスラッシュを削除して返する。
   * 引数の情報がなかった場合【空文字】を返する。
   * </PRE>
   * @param str    数字
   * @param String スラッシュを削除した時分
   * @return String
   */
  static numberCutSlash(str: string): string {
    // 引数の情報がなかった場合
    if (str == null || str.length == 0) {
      return ''
    }

    // 引数にスラッシュを削除して返します
    return str.replaceAll(',', '')
  }

  /**
   * 引数の句点を削除して返する。
   * 引数の句点なかった場合引数を返する。
   * </PRE>
   * @param str    引数
   * @param String 引数を削除した時分
   * @return String
   */
  static kutenCut(str: string): string {
    // 引数の情報がなかった場合
    if (str == null || str.length <= 1) {
      return str
    }

    // 引数にスラッシュを削除して返する
    if (str.substring(str.length - 1, str.length).equals('。')) {
      str = str.substring(0, str.length - 1)
      return str
    }

    return str
  }

  /**
   * 文字列型値、NULLである場合に、ディフォルトの値を返却する。<p>
   *
   * <B>処理概要:</B>
   * <PRE>
   *
   * 		文字列型値、NULLである場合に、ディフォルトの値を返却する。
   *
   * </PRE>
   * @param String  文字列
   * @return NULLである場合、""を返却する
   *          NULLでない場合、該当値
   */
  static getStringNotNull(str: string): string {
    if (str == null) {
      return ''
    } else {
      return str.trim()
    }
  }

  /**
   * BigDecimal型値、NULLである場合に、ディフォルトの値を返却する。<p>
   *
   * <B>処理概要:</B>
   * <PRE>
   *
   * 		BigDecimal型値、NULLである場合に、ディフォルトの値を返却する。
   *
   * </PRE>
   * @param BigDecimal
   * @return NULLである場合、0を返却する
   *          NULLでない場合、該当値
   */
  static getBigDecimalNotNull(bd: BigDecimal): BigDecimal {
    if (bd == null) {
      return new BigDecimal(0)
    } else {
      return bd
    }
  }

  /**
   * 文字列から"yyyy/mm/dd HH:MI:SS"に変更です
   * 作成：富士通  2004/11/17
   * 更新：
   * <B>処理概要:</B>
   * <PRE>
   * 日時表示格式変更
   *
   * </PRE>
   * @param  String　変更前文字列
   * @return String  変更後文字列
   * @modelguid {199F87A0-DFD9-4A05-8F8F-2A867580C1DA}
   */
  static getSpecialStr(str1: string): string {
    let str: string = ''

    if (str1 == null || str1.equals('') || str1.equals('00000000000000')) {
      return str
    }

    // フォーマットした日付表示格式を返します
    if (str1.length == 14) {
      str =
        str1.substring(0, 4) +
        '/' +
        str1.substring(4, 6) +
        '/' +
        str1.substring(6, 8) +
        ' ' +
        str1.substring(8, 10) +
        ':' +
        str1.substring(10, 12) +
        ':' +
        str1.substring(12, 14)

      return str
    } else {
      return str
    }
  }

  /**
   * 文字列から","を削除する
   * 作成：富士通  2004/12/23
   * 更新：
   * <B>処理概要:</B>
   * <PRE>
   * 日時表示格式変更
   *
   * </PRE>
   * @param  String　変更前文字列
   * @return String  変更後文字列
   * @modelguid {199F87A0-DFD9-4A05-8F8F-2A867580C1DA}
   */
  static getNoKomaStr(komaStr: string): string {
    let noKomastr: string = ''

    if (komaStr == null || komaStr.equals('')) {
      return noKomastr
    }

    let idx: number = komaStr.lastIndexOf(',')

    if (idx != -1) {
      return komaStr.replaceAll(',', '')
    } else {
      return komaStr
    }
  }

  /**
   * 数値(少数点を含む)にカンマを追加する。
   *
   * <B>処理概要:</B>
   * <PRE>
   *
   * 		数値(少数点を含む)にカンマを追加する。
   *
   * </PRE>
   * @param context コンテキスト
   * @return String
   */
  static formatSyosu(kibo: string): string {
    if (kibo == null || kibo.equals('')) {
      return '0'
    }
    if (kibo.equals('0')) {
      return '0'
    } else {
      let yoKiBo: number = Double.parseDouble(kibo)

      let f1: DecimalFormat = new DecimalFormat('#,###,###,###.0')

      let str1: string = f1.format(yoKiBo)

      let idx: number

      idx = str1.lastIndexOf('.')

      let str: string = ''

      if (idx == -1) {
        str = str1 + '.00'
      }
      if (idx != -1) {
        if (str1.substring(idx + 1).length == 1) {
          str = str1 + '0'
        }
        if (str1.substring(idx + 1).length == 2) {
          str = str1
        }
      }
      return str
    }
  }
}
