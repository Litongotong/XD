export enum ECJSpread {
  SCRL_NONE = 0,
  SCRL_VERTICALAUTO = 1,
  SCRL_HORIZONTALAUTO = 2,
  SCRL_BOTHAUTO = 3,
  SCRL_VERTICALALWAYS = 9,
  SCRL_HORIZONTALALWAYS = 6,
  SCRL_BOTHALWAYS = 15,
  SCRL_VERTICALMASK = 9,
  SCRL_HORIZONTALMASK = 6,

  UP_CURSOR = 1,
  DOWN_CURSOR = 2,
  LEFT_CURSOR = 3,
  RIGHT_CURSOR = 4,
  NO_EFFECT = 5,
}

export class CJSpread {
  // e.g. CJSpread.SCRL_NONE
  static SCRL_NONE = ECJSpread.SCRL_NONE
  static SCRL_VERTICALAUTO = ECJSpread.SCRL_VERTICALAUTO
  static SCRL_HORIZONTALAUTO = ECJSpread.SCRL_HORIZONTALAUTO
  static SCRL_BOTHAUTO = ECJSpread.SCRL_BOTHAUTO
  static SCRL_VERTICALALWAYS = ECJSpread.SCRL_VERTICALALWAYS
  static SCRL_HORIZONTALALWAYS = ECJSpread.SCRL_HORIZONTALALWAYS
  static SCRL_BOTHALWAYS = ECJSpread.SCRL_BOTHALWAYS
  static SCRL_VERTICALMASK = ECJSpread.SCRL_VERTICALMASK
  static SCRL_HORIZONTALMASK = ECJSpread.SCRL_HORIZONTALMASK

  // e.g. CJSpread.DOWN_CURSOR
  static UP_CURSOR = ECJSpread.UP_CURSOR
  static DOWN_CURSOR = ECJSpread.DOWN_CURSOR
  static LEFT_CURSOR = ECJSpread.LEFT_CURSOR
  static RIGHT_CURSOR = ECJSpread.RIGHT_CURSOR
  static NO_EFFECT = ECJSpread.NO_EFFECT

  _getName(): string {
    return 'CJSpread'
  }

  static _getName(): string {
    return 'CJSpread'
  }

  _getType() {
    return CJSpread as any
  }

  _getFullName(): string {
    return 'jcf.gui.CJSpread'
  }

  static _getFullName(): string {
    return 'jcf.gui.CJSpread'
  }
}
