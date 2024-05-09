const replaceEnsureNumber = (str: string) => {
  return str.replace(/[^0-9]/g, '')
}

// 年を0で4桁に補完する
export const ensureNumberWithYear = (
  value: string,
  withPaddingAndValidate?: boolean,
): string => {
  let numberString = replaceEnsureNumber(value)
  if (withPaddingAndValidate) {
    numberString = numberString.padStart(4, '0')
  }
  numberString = numberString.slice(0, 4)
  if (withPaddingAndValidate) {
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
  if (withPaddingAndValidate && (numberString && numberString !== '0')) {
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

export const getExistedDate = (opts: {
  year: string
  month: string
  day: string
}) => {
  const { year, month, day } = opts
  let resultYear = year
  let resultMonth = month
  let resultDay = day

  const yearStr = year.toString().padStart(4, '0')
  const monthStr = month.toString().padStart(2, '0')
  const dayStr = day.toString().padStart(2, '0')

  console.log("yearStr",yearStr)
  console.log("monthStr",monthStr)
  console.log("dayStr",dayStr)


  return { year: resultYear, month: resultMonth, day: resultDay }
}
