/**
 * @description 数値、金額などを右から3位毎に「,」を付ける
 * @param value 数値。例：12345.1　=>  "12,345.1"
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
