import type { CSSProperties } from 'vue'

export { findHead } from './table'
export { storageLocal, storageSession, STORAGE_KEYS } from './storage'
export { handlerMessage, interpolateMessage } from './message'
export { getMonthEnd } from './date'

/**
 * @description CSS 属性の幅、高さなどの値が数字のみで入力された場合は px 付き文字列に統一する。 それ以外はそのまま。
 * @param size 属性の値。例：120、"230px"、"230"
 * @returns サイズそのまま又はサイズ付き数字又は undefined
 */
export function ensureUnit(size?: string | number): string | undefined {
  if (size || size === 0) {
    const value = size.toString().toLowerCase()
    return Number(value) ? value + 'px' : value
  }
}

/**
 * @description 曜日を取得
 * @param date 日付
 * @returns 曜日
 */
export function getWeekday(date?: Date | string): string {
  if (!date) {
    return ''
  }

  const weekdays = ['日', '月', '火', '水', '木', '金', '土']
  const index = new Date(date).getDay()

  return `${weekdays[index]}曜`
}

/**
 * @description カンマで数字を分割
 * @param payload 数字
 * @returns フォーマット後の数字
 */
export function separateNumberComma(
  payload: number,
  minimumFractionDigits?: number,
  maximumFractionDigits: number | undefined = minimumFractionDigits,
): string {
  if (
    maximumFractionDigits &&
    minimumFractionDigits &&
    maximumFractionDigits < minimumFractionDigits
  ) {
    maximumFractionDigits = minimumFractionDigits

    console.warn(
      "MaximumFractionDigits can't be smaller then minimumFractionDigits.",
    )
  }

  // js では数字 0.00 が 0 に自動整形されるので保持の処理が必要
  const value = payload === 0 ? payload.toFixed(minimumFractionDigits) : payload

  return value.toLocaleString('en-US', {
    style: 'decimal',
    maximumFractionDigits,
    minimumFractionDigits,
  })
}

/**
 * @description 数値、金額などを右から3位毎に「,」を付ける
 * @param value 数値。例：12345.1　=>  "12,345"
 * @returns
 */
export function addThousandsSeparator(value: string | number): string {
  const oldValueArray = value.toString().split('.')
  let left = oldValueArray[0] ?? ''
  let right = oldValueArray[1] ?? ''

  if (right.length > 0) {
    return left.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.' + right
  } else {
    return left.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  }
}

/**
 * @description 数値、金額などの1桁目を0で補完する
 * @param value 数値。例：'.333'　=>  "0.333"
 * @returns
 */
export function addZeorFirst(value: string | number): string {
  const oldValueArray = value.toString().split('.')
  let left = oldValueArray[0] ?? ''
  let right = oldValueArray[1] ?? ''

  if (left === '' || left === '-') {
    return left + '0.' + right
  } else {
    return value.toString()
  }
}

/**
 * @description 数値、金額などの「,」をすべて除く
 * @param value 数値。例：'123,45.333'　=>  "12345.333"
 * @returns
 */
export function deleteComma(value: string | number): string {
  return value.toString().replace(/,/g, '')
}

/**
 * @description 元素の position style を算出
 * @param x
 * @param y
 * @returns 計算済み position style
 */
export function calculatePositionStyle(
  x: string | number | undefined,
  y: string | number | undefined,
): CSSProperties {
  const isAbsolute = [x, y].some((element) => element || element === 0)

  return <CSSProperties>{
    position: isAbsolute ? 'absolute' : 'static',
    left: ensureUnit(x),
    top: ensureUnit(y),
  }
}

/**
 * @description システム日付を取得する
 * @returns `yyyy/mm/dd HHMMSS`
 */
export function getSystemDateTime(): string {
  const now = new Date()
  return formatDate(now)
}

/**
 * @description 日付をフォーマット
 * @param date
 * @returns `yyyy/mm/dd HHMMSS`
 */
export function formatDate(date: string | Date | number): string {
  if (!date) {
    return ''
  }
  const _date = new Date(date)

  const year: number = _date.getFullYear()
  const month: string = `0${_date.getMonth() + 1}`.slice(-2)
  const day: string = `0${_date.getDate()}`.slice(-2)
  const hours: string = `0${_date.getHours()}`.slice(-2)
  const minutes: string = `0${_date.getMinutes()}`.slice(-2)
  const seconds: string = `0${_date.getSeconds()}`.slice(-2)

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
}
