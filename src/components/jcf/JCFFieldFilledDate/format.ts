const replaceEnsureNumber = (str: string) => {
  return str.replace(/[^0-9]/g, '')
}

// 年を0で4桁に補完する
export const ensureNumberWithYear = (
  value: string,
  withPaddingAndValidate?: boolean,
): string => {
  let numberString = replaceEnsureNumber(value)
  if (withPaddingAndValidate && value) {
    numberString = numberString.padStart(4, '0')
  }
  numberString = numberString.slice(0, 4)
  if (withPaddingAndValidate && value) {
    const asNumber = parseInt(numberString)
    // range: > 0000, < 9999
    if (asNumber < 0) {
      numberString = '0000'
    }
    if (asNumber > 9999) {
      numberString = '9999'
    }
  }
  return numberString
}

// 月を0で2桁に補完する
export const ensureNumberWithMonth = (
  value: string,
  withPaddingAndValidate?: boolean,
): string => {
  let numberString = replaceEnsureNumber(value)
  if (withPaddingAndValidate && numberString && numberString !== '0') {
    numberString = numberString.padStart(2, '0')
  }
  numberString = numberString.slice(0, 2)
  return numberString
}

// 日を0で2桁に補完する
export const ensureNumberWithDay = (
  value: string,
  withPaddingAndValidate?: boolean,
): string => {
  let numberString = replaceEnsureNumber(value)
  if (withPaddingAndValidate) {
    numberString = numberString.padStart(2, '0')
  }
  numberString = numberString.slice(0, 2)
  return numberString
}
