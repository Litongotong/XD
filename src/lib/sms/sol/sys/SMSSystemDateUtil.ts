import type { DateFormat } from '@/lib/native/text/DateFormat'
import { SimpleDateFormat } from '@/lib/native/text/SimpleDateFormat'
import { NativeDate } from '@/lib/native/util/Date'

/**
 * システム日付Utilityクラスです。
 * @author 販売管理WG
 *
 */
export class SMSSystemDateUtil {
  private static CURRENT_DATE = 'yyyyMMdd'

  //	private static final String TIMESTAMP = "yyyyMMssHHmmss";
  //	private static final String TIMESTAMP = "yyyyMMddHHmmss";
  //雪印向けミリセコンドつきに修正
  private static TIMESTAMP = 'yyyyMMddHHmmssSSS'

  private static dateFormat: DateFormat = new SimpleDateFormat(
    SMSSystemDateUtil.CURRENT_DATE,
  )
  private static timeStampFormat: DateFormat = new SimpleDateFormat(
    SMSSystemDateUtil.TIMESTAMP,
  )

  static getTimeStamp(): string {
    return this.timeStampFormat.format(new NativeDate())
  }

  static getCurrentDate(): string {
    return this.dateFormat.format(new NativeDate())
  }

  _getName(): string {
    return 'SMSSystemDateUtil'
  }

  static _getName(): string {
    return 'SMSSystemDateUtil'
  }

  _getType() {
    return SMSSystemDateUtil as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSSystemDateUtil'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSSystemDateUtil'
  }
}
