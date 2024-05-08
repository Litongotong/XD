import Big from 'big.js'

// Big.prototype.doubleValue = function (): number {
//   return parseFloat(this.toString())
// }

// Big.prototype.compareTo = function (b: Big | number | string): number {
//   const comparisonResult = this.cmp(b)
//   if (comparisonResult > 0) {
//     return 1
//   } else if (comparisonResult < 0) {
//     return -1
//   } else {
//     return 0
//   }
// }

// Big.prototype.divide = function (
//   divisor: Big | number | string,
//   dp?: number,
//   rm?: number,
// ): Big {
//   return this.div(divisor).round(dp ?? 20, rm ?? Big.ROUND_HALF_UP)
// }

// Big.prototype.longValue = function (): number {
//   return parseInt(this.toString(), 10)
// }

// Big.prototype.multiply = function (multiplier: Big | number | string): Big {
//   return this.mul(multiplier)
// }

// Big.prototype.negate = function (): Big {
//   return this.neg()
// }

// Big.prototype.setScale = function (
//   newScale: number,
//   roundingMode?: number,
// ): Big {
//   const mode = roundingMode !== undefined ? roundingMode : Big.ROUND_HALF_UP
//   return this.round(newScale, mode)
// }

// Big.prototype.subtract = function (subtrahend: Big | number | string): Big {
//   return this.sub(subtrahend)
// }

// Big.prototype.toString = function (): string {
//   return this.toFixed()
// }

export enum EBigDecimalRoundingMode {
  ROUND_UP = 0,
  ROUND_DOWN = 1,
  ROUND_HALF_UP = 4,
  ROUND_HALF_EVEN = 6,
}


export class BigDecimal {
  private ins: Big

  static ROUND_DOWN = EBigDecimalRoundingMode.ROUND_DOWN
  static ROUND_HALF_UP = EBigDecimalRoundingMode.ROUND_HALF_UP
  static ROUND_HALF_EVEN = EBigDecimalRoundingMode.ROUND_HALF_EVEN
  static ROUND_UP = EBigDecimalRoundingMode.ROUND_UP
  
  constructor(val: string | number) {
    this.ins = new Big(val)
  }

  setScale(
    newScale: number, 
    // TODO: java use `UNNECESSARY` as default value, but it's not supported by big.js
    roundingMode: EBigDecimalRoundingMode = EBigDecimalRoundingMode.ROUND_DOWN
  ): BigDecimal {
    
    switch (roundingMode) {
      case EBigDecimalRoundingMode.ROUND_DOWN:
        this.ins = this.ins.round(newScale, Big.roundDown)
        break
      case EBigDecimalRoundingMode.ROUND_HALF_UP:
        this.ins = this.ins.round(newScale, Big.roundHalfUp)
        break
      case EBigDecimalRoundingMode.ROUND_HALF_EVEN:
        this.ins = this.ins.round(newScale, Big.roundHalfEven)
        break
      case EBigDecimalRoundingMode.ROUND_UP:
        this.ins = this.ins.round(newScale, Big.roundUp)
        break
      default:
        throw new Error('Invalid rounding mode')
    }

    return this
  }

  doubleValue(): number {
    return this.ins.toNumber()
  }

  add(val: BigDecimal): BigDecimal {
    this.ins = this.ins.add(val.ins)
    return this
  }
}
