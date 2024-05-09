const YEAR = 'yyyy'
const MONTH = 'MM'
const DAY = 'dd'
const HOUR = 'HH'
const MINUTE = 'mm'
const SECOND = 'ss'
const MILLISECOND = 'SSS'

/**
 * This method should only be used for date formatting in `lib/native/*` code.
 * !!! * Do not use it for other code * !!!
 */
export const nativeDateFormat = (date: Date, pattern: string): string => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const millisecond = date.getMilliseconds()

  return pattern
    .replace(YEAR, year.toString())
    .replace(MONTH, month.toString().padStart(2, '0'))
    .replace(DAY, day.toString().padStart(2, '0'))
    .replace(HOUR, hour.toString().padStart(2, '0'))
    .replace(MINUTE, minute.toString().padStart(2, '0'))
    .replace(SECOND, second.toString().padStart(2, '0'))
    .replace(MILLISECOND, millisecond.toString().padStart(3, '0'))
}
