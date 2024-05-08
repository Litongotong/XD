export enum EJFLineType {
  /**
   * 枠が無いことを表します。
   */
  NOTHING = 0,
  /**
   * 単一の線を表します。
   */
  SINGLE = 1,
  /**
   * 二重の線を表します。
   */
  DOUBLE = 2,
  /**
   * 凸型の線を表します。
   */
  RAISED = 3,
  /**
   * 凹型の線を表します。
   */
  SUNKEN = 4,
  /**
   * 凸型の枠を表します。
   */
  CONVEX = 11,
  /**
   * 平面の枠を表します。
   */
  FLAT = 12,
  /**
   * 凹型の枠を表します。
   */
  CONCAVE = 13,
}

// e.g. setBorderType(JFLineType.NOTHING)
export class JFLineType {
  static NOTHING = EJFLineType.NOTHING
  static SINGLE = EJFLineType.SINGLE
  static DOUBLE = EJFLineType.DOUBLE
  static RAISED = EJFLineType.RAISED
  static SUNKEN = EJFLineType.SUNKEN
  static CONVEX = EJFLineType.CONVEX
  static FLAT = EJFLineType.FLAT
  static CONCAVE = EJFLineType.CONCAVE

  _getName(): string {
    return 'JFLineType'
  }

  static _getName(): string {
    return 'JFLineType'
  }

  _getType() {
    return JFLineType as any
  }

  _getFullName(): string {
    return 'jcf.gui.JFLineType'
  }

  static _getFullName(): string {
    return 'jcf.gui.JFLineType'
  }
}
