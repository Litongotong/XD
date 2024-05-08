/**
 * This class should only be used for Decimal format in `lib/native/*` code.
 * !!! * Do not use it for other code * !!!
 */

type PercentEnum = 1 | 100 | 1000

type FmtObject = {
  suffix: string
  prefix: string
  percent: PercentEnum
  thousandSeparate: number
  withSign: boolean
  maxScale?: number
  minScale?: number
  length?: number
  radixPoint?: boolean
}
type FmtCacheType = {
  [k: string]: FmtObject
}

enum ERoundingMode {
  UP = 'UP',
  DOWN = 'DOWN',
  CEILING = 'CEILING',
  FLOOR = 'FLOOR',
  HALF_UP = 'HALF_UP',
  HALF_DOWN = 'HALF_DOWN',
  HALF_EVEN = 'HALF_EVEN',
  UNNECESSARY = 'UNNECESSARY',
}

type RoundingType = `${ERoundingMode}`

const formatCache: FmtCacheType = {}
const fmtReg = /[0#.,]/
const resolveFormat = (pattern: string): FmtObject => {
  if (formatCache[pattern]) {
    return formatCache[pattern]
  }

  const prefix: string[] = []
  const suffix: string[] = []
  let withSign = false

  // Whether to convert percentile or kilodecimal, 100 for percentile, 1000 for kilodecimal
  let percent: PercentEnum = 1

  const fmt: string[] = []
  let ch = ''
  let state = 'PREFIX'
  let escape = false

  let temp
  function append(c: string, i: number) {
    if (state === 'PREFIX') {
      temp = prefix
    } else if (state === 'FMT') {
      temp = fmt
    } else {
      temp = suffix
    }
    temp.push(c)
    if (escape) {
      return
    }

    if (
      state === 'PREFIX' &&
      ['+', '-'].includes(c) &&
      fmtReg.test(pattern[i + 1])
    ) {
      temp.pop()
      withSign = true
    }

    if (suffix.length === 1) {
      if (suffix[0] === '%') {
        percent = 100
      } else if (suffix[0] === '‰') {
        percent = 1000
      }
    }
  }

  function setState(c: string) {
    if (state === 'PREFIX' && fmtReg.test(c)) {
      state = 'FMT'
    } else if (state === 'FMT' && !fmtReg.test(c)) {
      state = 'SUFFIX'
    }
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < pattern.length; i++) {
    ch = pattern[i]
    if (escape) {
      append(ch, i)
      escape = false
      // eslint-disable-next-line no-continue
      continue
    }

    setState(ch)

    if (ch === '\\') {
      escape = true
    } else {
      append(ch, i)
    }
  }

  const prefixStr = prefix.join('')
  const fmtStr = fmt.join('')
  const suffixStr = suffix.join('')

  if (!fmtStr) {
    formatCache[pattern] = {
      suffix: suffixStr,
      prefix: prefixStr,
      percent,
      thousandSeparate: 3,
      withSign,
    }
    return formatCache[pattern]
  }

  if (/\..*\./.test(fmtStr)) {
    throw Error(`Multiple decimal separators in pattern "${pattern}"`)
  }

  const [intFmt, decimalFmt = ''] = fmtStr.split('.')
  if (/[^0#]/.test(decimalFmt)) {
    throw Error(`Malformed pattern "${pattern}"`)
  }
  if (decimalFmt.includes('#0')) {
    throw Error(`Unexpected '0' in pattern "${pattern}"`)
  }
  if (intFmt.endsWith(',')) {
    throw Error(`Malformed pattern "${pattern}"`)
  }
  if (/0.*#/.test(intFmt)) {
    throw Error(`Unexpected '0' in pattern "${pattern}"`)
  }

  let thousandSeparate = 0
  const lastIndexOfSeperator = intFmt.lastIndexOf(',')
  if (lastIndexOfSeperator !== -1) {
    thousandSeparate = intFmt.length - lastIndexOfSeperator - 1
  }
  // @ts-expect-error
  const { length } = intFmt.replace(/,/g, '').match(/0*$/)[0]
  const maxScale = decimalFmt.length
  // @ts-expect-error
  const minScale = decimalFmt.match(/^0*/)[0].length
  const radixPoint = fmtStr.endsWith('.')

  const config: FmtObject = {
    prefix: prefixStr,
    suffix: suffixStr,
    percent,
    thousandSeparate,
    maxScale,
    minScale,
    length,
    radixPoint,
    withSign,
  }
  formatCache[pattern] = config
  return config
}

// support `0.0000005` -> `5e-7`
function toString(n: number): string {
  const nStr = `${n}`
  if (nStr.includes('e')) {
    const nArr = nStr.split('e')
    // eslint-disable-next-line no-use-before-define
    return enlarge(+nArr[0], +nArr[1])
  }
  return nStr
}
// decimal point left
function shrink(n: number, multi: number) {
  if (multi < 0) {
    /* istanbul ignore next */
    // eslint-disable-next-line no-use-before-define
    return enlarge(n, -multi)
  }
  const nStr = toString(n)
  if (!multi) {
    /* istanbul ignore next */
    return nStr
  }
  return `${nStr}`
    .replace(/^-?/, `$&${'0'.repeat(multi)}`)
    .replace(new RegExp(`(\\d{${multi}})(\\.|$)`), '.$1')
}
// right shift of decimal point
function enlarge(n: number, multi: number): string {
  if (multi < 0) {
    return shrink(n, -multi)
  }
  const nStr = toString(n)
  if (!multi) {
    return nStr
  }
  const num = `${nStr}${'0'.repeat(multi)}`
  return num.replace(new RegExp(`\\.(\\d{${multi}})`), '$1.')
}

// fix `1.005.toFixed(2) === 1.00`
function adjust(n: number, scale: number) {
  const num = toString(n)
  if (num.includes('.')) {
    const arr = num.split('.')
    arr[1] = `${arr[1].padEnd(scale, '0')}1`
    return +arr.join('.')
  }
  /* istanbul ignore next */
  return n
}

function round(n: number, scale: number, roundingMode: RoundingType): string {
  let [int, decimal] = toString(n).split('.')
  const sign = n > 0 ? '' : '-'
  if (!decimal) {
    return n.toFixed(scale)
  }

  decimal = decimal.padEnd(scale + 1, '0')
  if (roundingMode === ERoundingMode.CEILING) {
    return shrink(Math.ceil(+enlarge(n, scale)), scale)
  }
  if (roundingMode === ERoundingMode.FLOOR) {
    return shrink(Math.floor(+enlarge(n, scale)), scale)
  }
  if (roundingMode === ERoundingMode.UP) {
    return `${sign}${shrink(Math.ceil(+enlarge(Math.abs(n), scale)), scale)}`
  }
  if (roundingMode === ERoundingMode.DOWN) {
    return `${sign}${shrink(Math.floor(+enlarge(Math.abs(n), scale)), scale)}`
  }
  if (roundingMode === ERoundingMode.HALF_UP) {
    return (+adjust(n, scale)).toFixed(scale)
  }
  if (roundingMode === ERoundingMode.HALF_DOWN) {
    const decimalArr = decimal.split('')
    if (/^50*$/.test(decimalArr.slice(scale).join(''))) {
      decimalArr[scale] = '1'
    }
    return (+[int, decimalArr.join('')].join('.')).toFixed(scale)
  }
  if (roundingMode === ERoundingMode.HALF_EVEN) {
    const decimalArr = decimal.split('')
    if (/^50*$/.test(decimalArr.slice(scale).join(''))) {
      const lastNum = decimalArr[scale - 1] || int.slice(-1)
      if (+lastNum % 2 === 0) {
        decimalArr.splice(scale)
      } else {
        decimalArr[scale] = '9'
      }
    }

    return (+[int, decimalArr.join('')].join('.')).toFixed(scale)
  }
  if (roundingMode === ERoundingMode.UNNECESSARY) {
    if (+shrink(Math.ceil(+enlarge(n, scale)), scale) === n) {
      return String(n)
    }
    throw Error(
      'ArithmeticException: Rounding needed with the rounding mode being set to RoundingMode.UNNECESSARY',
    )
  }
  /* istanbul ignore next */
  throw Error('Wrong RoundingMode')
}

class DecimalFormat {
  private config: FmtObject

  private roundingMode: RoundingType

  constructor(
    format: string,
    roundingMode: RoundingType = ERoundingMode.HALF_EVEN,
  ) {
    this.config = { ...resolveFormat(format) }
    this.roundingMode = roundingMode
  }

  setRoundingMode(roundingMode: RoundingType) {
    this.roundingMode = roundingMode
  }

  format(n: number | string): string {
    const {
      maxScale,
      minScale,
      percent,
      length,
      thousandSeparate,
      prefix,
      suffix,
      radixPoint,
      withSign,
    } = this.config
    let num: number | string = +n
    if (Number.isNaN(num)) {
      throw Error('not a valid number')
    }
    // Expand the corresponding multiples first if there are thousandths and hundredths.
    num = enlarge(num, Math.log10(percent))

    if (maxScale !== undefined) {
      num = (+round(+num, maxScale, this.roundingMode)).toFixed(maxScale)
    }
    let [int, decimal] = num.split('.')
    if (length) {
      const intMatch = int.match(/([+-]?)(\d*)/)
      // @ts-expect-error , no `null`
      int = intMatch[1] + intMatch[2].padStart(length, '0')
    } else if (int === '0') {
      int = ''
    }
    if (thousandSeparate && thousandSeparate < int.length) {
      // Integer parts that need to be formatted
      int = int.replace(
        new RegExp(
          `(\\d{1,${thousandSeparate}})(?=(?:\\d{${thousandSeparate}})+$)`,
          'g',
        ),
        '$1,',
      )
    }

    if (decimal) {
      decimal = decimal.replace(/0+$/, '')
      if (minScale) {
        decimal = decimal.padEnd(minScale, '0')
      }
    }

    num = [int, decimal].join('.')
    if (!radixPoint) {
      num = num.replace(/\.$/, '')
    }
    if (withSign && !num.startsWith('-')) {
      num = `+${num}`
    }
    if (num === '') {
      num = 0
    }
    return `${prefix}${num}${suffix}`
  }
}

export const NativeDecimalFormat = DecimalFormat
