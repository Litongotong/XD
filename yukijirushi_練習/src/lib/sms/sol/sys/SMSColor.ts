import { Color } from '@/lib/native/awt/Color'

/**
 * 色定数クラスです。
 * @author 販売管理WG
 * @version V0.1
 */
export class SMSColor {
  /**
   * エラー色
   */
  static ERROR = Color.PINK

  /**
   * 警告色
   */
  //	static WARNING = Color.YELLOW;
  //雪印乳業prj向け修正
  static WARNING = new Color(0xff, 0xd0, 0xd0)

  /**
   * デフォルト色
   */
  static DEFAULT = Color.WHITE

  /**
   * 更新色
   */
  static UPDATE = Color.CYAN

  _getName(): string {
    return 'SMSColor'
  }

  static _getName(): string {
    return 'SMSColor'
  }

  _getType() {
    return SMSColor as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSColor'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSColor'
  }
}
