export enum EJFAlignment {
  /** 左 */
  LEFT = 1,
  /** 中央 */
  CENTER = 2,
  /** 右 */
  RIGHT = 4,
  /** 上 */
  TOP = 8,
  /** 下 */
  BOTTOM = 16,
  /** 左上 */
  TOP_LEFT = EJFAlignment.LEFT | EJFAlignment.TOP,
  /** 中央左 */
  CENTER_LEFT = EJFAlignment.CENTER | EJFAlignment.LEFT,
  /** 左下 */
  BOTTOM_LEFT = EJFAlignment.BOTTOM | EJFAlignment.LEFT,
  /** 中央上 */
  TOP_CENTER = EJFAlignment.TOP | EJFAlignment.CENTER,
  /** 中央下 */
  BOTTOM_CENTER = EJFAlignment.BOTTOM | EJFAlignment.CENTER,
  /** 右上 */
  TOP_RIGHT = EJFAlignment.TOP | EJFAlignment.RIGHT,
  /** 中央右 */
  CENTER_RIGHT = EJFAlignment.CENTER | EJFAlignment.RIGHT,
  /** 右下 */
  BOTTOM_RIGHT = EJFAlignment.BOTTOM | EJFAlignment.RIGHT,
  /**
   * 全体を表します。
   * JFCellクラスで、イメージをセル全体に表示する場合に使用します。
   */
  FULL = 32,
  /**
   * アイコン状を表します。
   * JFCellクラスで、イメージをセルの左端に正方形で表示する場合に使用します。
   */
  ICONIC = 64,
  /**
   * 右詰め入力を表します。
   * JFFieldStringクラスで、右詰め入力を行う場合に使用します。
   */
  RIGHT_JUSTIFY = 1024,
}

export class JFAlignment {
  /** 左 */
  static readonly LEFT = EJFAlignment.LEFT
  /** 中央 */
  static readonly CENTER = EJFAlignment.CENTER
  /** 右 */
  static readonly RIGHT = EJFAlignment.RIGHT
  /** 上 */
  static readonly TOP = EJFAlignment.TOP
  /** 下 */
  static readonly BOTTOM = EJFAlignment.BOTTOM
  /** 左上 */
  static readonly TOP_LEFT = EJFAlignment.TOP_LEFT
  /** 中央左 */
  static readonly CENTER_LEFT = EJFAlignment.CENTER_LEFT
  /** 左下 */
  static readonly BOTTOM_LEFT = EJFAlignment.BOTTOM_LEFT
  /** 中央上 */
  static readonly TOP_CENTER = EJFAlignment.TOP_CENTER
  /** 中央下 */
  static readonly BOTTOM_CENTER = EJFAlignment.BOTTOM_CENTER
  /** 右上 */
  static readonly TOP_RIGHT = EJFAlignment.TOP_RIGHT
  /** 中央右 */
  static readonly CENTER_RIGHT = EJFAlignment.CENTER_RIGHT
  /** 右下 */
  static readonly BOTTOM_RIGHT = EJFAlignment.BOTTOM_RIGHT
  /**
   * 全体を表します。
   * JFCellクラスで、イメージをセル全体に表示する場合に使用します。
   */
  static readonly FULL = EJFAlignment.FULL
  /**
   * アイコン状を表します。
   * JFCellクラスで、イメージをセルの左端に正方形で表示する場合に使用します。
   */
  static readonly ICONIC = EJFAlignment.ICONIC
  /**
   * 右詰め入力を表します。
   * JFFieldStringクラスで、右詰め入力を行う場合に使用します。
   */
  static readonly RIGHT_JUSTIFY = EJFAlignment.RIGHT_JUSTIFY

  _getName(): string {
    return 'JFAlignment'
  }

  static _getName(): string {
    return 'JFAlignment'
  }

  _getType() {
    return JFAlignment as any
  }

  _getFullName(): string {
    return 'jcf.gui.JFAlignment'
  }

  static _getFullName(): string {
    return 'jcf.gui.JFAlignment'
  }
}
