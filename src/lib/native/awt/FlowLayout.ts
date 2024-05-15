export enum EFlowLayout {
  LEFT = 0,
  CENTER = 1,
  RIGHT = 2,
  LEADING = 3,
  TRAILING = 4,
}

export class FlowLayout {
  static LEFT = EFlowLayout.LEFT
  static CENTER = EFlowLayout.CENTER
  static RIGHT = EFlowLayout.RIGHT
  static LEADING = EFlowLayout.LEADING
  static TRAILING = EFlowLayout.TRAILING

  private align: EFlowLayout
  private hgap: number
  private vgap: number

  constructor();
  constructor(align: EFlowLayout);
  constructor(align: EFlowLayout, hgap: number, vgap: number);
  constructor(...args: any[]) {
    if (args.length === 0) {
      this.align = EFlowLayout.CENTER
      this.hgap = 5
      this.vgap = 5
    } else if (args.length === 1) {
      this.align = args[0]
      this.hgap = 5
      this.vgap = 5
    } else if (args.length === 3) {
      this.align = args[0]
      this.hgap = args[1]
      this.vgap = args[2]
    } else {
      throw new Error('Illegal argument count')
    }
  }

  getAlignment(): EFlowLayout {
    return this.align
  }

  getHgap(): number {
    return this.hgap
  }

  getVgap(): number {
    return this.vgap
  }
}
