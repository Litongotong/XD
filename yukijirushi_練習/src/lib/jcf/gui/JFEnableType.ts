export enum EJFEnableType {
  /**
   * 入力可能文字種の<strong>数字</strong>を表す識別子です。
   * '0'～'9'。
   */
  TYPE_DIGIT = 1,
  /**
   * 入力可能文字種の<strong>英字</strong>を表す識別子です。
   * 'a'～'z'および'A'～'Z'。
   * <a href="#TYPE_LOWERCASE">TYPE_LOWERCASE</a>|<a href="#TYPE_UPPERCASE">TYPE_UPPERCASE</a>と同じです。
   */
  TYPE_LETTER = 6,
  /**
   * 入力可能文字種の<strong>英小文字</strong>を表す識別子です。
   * 'a'～'z'。
   */
  TYPE_LOWERCASE = 2,
  /**
   * 入力可能文字種の<strong>英大文字</strong>を表す識別子です。
   * 'A'～'Z'。
   */
  TYPE_UPPERCASE = 4,
  /**
   * 入力可能文字種の<strong>特殊文字</strong>を表す識別子です。
   * 以下の文字が該当します。
   * <ul>
   * <li>java.lang.Character.SPACE_SEPARATOR
   * <li>java.lang.Character.DASH_PUNCTUATION
   * <li>java.lang.Character.START_PUNCTUATION
   * <li>java.lang.Character.END_PUNCTUATION
   * <li>java.lang.Character.CONNECTOR_PUNCTUATION
   * <li>java.lang.Character.OTHER_PUNCTUATION
   * <li>java.lang.Character.MATH_SYMBOL
   * <li>java.lang.Character.CURRENCY_SYMBOL
   * <li>java.lang.Character.MODIFIER_SYMBOL
   * </ul>
   */
  TYPE_SPECIAL = 8,
  /**
   * 入力可能文字種の<strong>２バイト文字</strong>を表す識別子です。
   * 以下の文字が該当します。
   * <ul>
   * <li>java.lang.Character.CONTROL以外でかつ、0x0～0xffのUnicodeコード値に含まれない文字
   * </ul>
   */
  TYPE_MULTIBYTE = 16,
  /**
   * 入力可能文字種の<strong>すべて</strong>を表す識別子です。
   * <a href="#TYPE_DIGIT">TYPE_DIGIT</a>|<a href="#TYPE_LOWERCASE">TYPE_LOWERCASE</a>|<a href="#TYPE_UPPERCASE">TYPE_UPPERCASE</a>|<a href="#TYPE_SPECIAL">TYPE_SPECIAL</a>|<a href="#TYPE_MULTIBYTE">TYPE_MULTIBYTE</a>と同じです。
   * 入力可能文字種のデフォルトです。
   */
  TYPE_ALL = 31,
}

export class JFEnableType {
  static TYPE_DIGIT = EJFEnableType.TYPE_DIGIT
  static TYPE_LETTER = EJFEnableType.TYPE_LETTER
  static TYPE_LOWERCASE = EJFEnableType.TYPE_LOWERCASE
  static TYPE_UPPERCASE = EJFEnableType.TYPE_UPPERCASE
  static TYPE_SPECIAL = EJFEnableType.TYPE_SPECIAL
  static TYPE_MULTIBYTE = EJFEnableType.TYPE_MULTIBYTE
  static TYPE_ALL = EJFEnableType.TYPE_ALL

  _getName(): string {
    return 'JFEnableType'
  }

  static _getName(): string {
    return 'JFEnableType'
  }

  _getType() {
    return JFEnableType as any
  }

  _getFullName(): string {
    return 'jcf.gui.JFEnableType'
  }

  static _getFullName(): string {
    return 'jcf.gui.JFEnableType'
  }
}
