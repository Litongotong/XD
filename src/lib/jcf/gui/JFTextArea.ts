enum EJFTextArea {
  /**
   * 水平方向と垂直方向のスクロールバーを作成して表示します。
   */
  SCROLLBARS_BOTH = 0,
  /**
   * 垂直方向のスクロールバーだけを作成して表示します。
   */
  SCROLLBARS_VERTICAL_ONLY = 1,
  /**
   * 水平方向のスクロールバーだけを作成して表示します。
   */
  SCROLLBARS_HORIZONTAL_ONLY = 2,
  /**
   * 水平方向と垂直方向のスクロールバーを作成も表示もしません。
   */
  SCROLLBARS_NONE = 3,
}

export class JFTextArea {
  static SCROLLBARS_BOTH = EJFTextArea.SCROLLBARS_BOTH
  static SCROLLBARS_VERTICAL_ONLY = EJFTextArea.SCROLLBARS_VERTICAL_ONLY
  static SCROLLBARS_HORIZONTAL_ONLY = EJFTextArea.SCROLLBARS_HORIZONTAL_ONLY
  static SCROLLBARS_NONE = EJFTextArea.SCROLLBARS_NONE

  _getName(): string {
    return 'JFTextArea'
  }

  static _getName(): string {
    return 'JFTextArea'
  }

  _getType() {
    return JFTextArea as any
  }

  _getFullName(): string {
    return 'jcf.gui.JFTextArea'
  }

  static _getFullName(): string {
    return 'jcf.gui.JFTextArea'
  }
}
