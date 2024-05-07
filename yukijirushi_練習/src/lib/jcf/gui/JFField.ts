export enum EJFField {
  MODE_ALPHANUMERIC = 1,
  MODE_HIRAGANA = 2,
  MODE_KATAKANA = 4,
  MODE_HANKAKU = 16,
  MODE_ZENKAKU = 32,
  MODE_NATIVE = 64,
  MODE_SENTENCE_NONE = 0x10000,
  MODE_SENTENCE_CONVERT = 0x20000,
}

export class JFField {
  /** 英数字 */
  static readonly MODE_ALPHANUMERIC = EJFField.MODE_ALPHANUMERIC
  /** 平仮名 */
  static readonly MODE_HIRAGANA = EJFField.MODE_HIRAGANA
  /** カタカナ */
  static readonly MODE_KATAKANA = EJFField.MODE_KATAKANA
  /** 半角文字 */
  static readonly MODE_HANKAKU = EJFField.MODE_HANKAKU
  /** 全角文字 */
  static readonly MODE_ZENKAKU = EJFField.MODE_ZENKAKU
  /** 入力モードの直接入力を表す識別子です。 */
  static readonly MODE_NATIVE = EJFField.MODE_NATIVE
  /** 入力モードの無変換入力を表す識別子です。
   * 入力した文字をそのまま確定することができます。
   */
  static readonly MODE_SENTENCE_NONE = EJFField.MODE_SENTENCE_NONE
  /**
   * 入力モードの変換入力を表す識別子です。
   * 入力した文字を変換してから確定することができます。
   */
  static readonly MODE_SENTENCE_CONVERT = EJFField.MODE_SENTENCE_CONVERT

  _getName(): string {
    return 'JFField'
  }

  static _getName(): string {
    return 'JFField'
  }

  _getType() {
    return JFField as any
  }

  _getFullName(): string {
    return 'jcf.gui.JFField'
  }

  static _getFullName(): string {
    return 'jcf.gui.JFField'
  }
}
