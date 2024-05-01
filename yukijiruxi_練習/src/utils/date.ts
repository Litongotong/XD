/**
 * 年末日を取得する
 * @param date yyyymm[dd] 式の日付
 * @returns 年末日
 */
export const getMonthEnd = (date: string) => {
  date = date.replace(/[/\-]/g, '')
  const year = Number(date.substring(0, 4))
  const month = Number(date.substring(4, 6))

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  }

  const endMap = new Map<number[], number>([
    [[1, 3, 5, 7, 8, 10, 12], 31],
    [[4, 6, 9, 11], 30],
    [[2], ((): number => (isLeapYear(year) ? 29 : 28))()],
  ])

  const key = Array.from(endMap.keys()).find((element) => {
    return element.includes(month)
  })!

  const end = endMap.get(key)
  return end ?? ''
}
