/*
 * システム名（ＪＣＣＣ共通）	業務区分（コンポーネント）
 * クラス一覧：
 *	JCCCalendarException		暦変換例外クラス
 */
import { Exception } from '@/lib/native/lang/Exception'

/**
 * クラス名：暦変換例外クラス.
 * クラス説明：暦変換を行う際に発生する例外クラスです。
 * @version V1.0L11 2000/08/26
 * @author 富士通)JCCC
 */
export class JCCCalendarException extends Exception {
  /**
   * コンストラクタ説明：和暦年月日より、インスタンスを生成します。
   * @param	message 	エラーメッセージ
   */
  constructor(message: string) {
    super(message)
  }

  _getName(): string {
    return 'JCCCalendarException'
  }

  static _getName(): string {
    return 'JCCCalendarException'
  }

  _getType() {
    return JCCCalendarException as any
  }

  _getFullName(): string {
    return 'jcc.util.JCCCalendarException'
  }

  static _getFullName(): string {
    return 'jcc.util.JCCCalendarException'
  }
}
