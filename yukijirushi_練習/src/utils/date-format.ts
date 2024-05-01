export function formatDate(date: string, format: string) {
  switch (format) {
    case 'YYYY/MM/DD HH:mm:ss':
      return changeDateToYMDHms(date)

    case 'YYYY/MM/DD':
      return changeDateToYMD(date)

    case 'yyyyMMDDHHmmss':
      return changeDateToYMDHmsSimple(date)
    //TODO:他のcase
  }
}

function changeDateToYMDHms(date: string): string {
  const year = date.substring(0, 4)
  const month = date.substring(4, 6)
  const day = date.substring(6, 8)
  const hour = date.substring(8, 10)
  const min = date.substring(10, 12)
  const sec = date.substring(12, 14)
  const fomatDate =
    year + '/' + month + '/' + day + '　' + hour + ':' + min + ':' + sec

  return fomatDate
}

function changeDateToYMD(date: string): string {
  const year = date.substring(0, 4)
  const month = date.substring(4, 6)
  const day = date.substring(6, 8)
  const fomatDate = year + '/' + month + '/' + day

  return fomatDate
}

function changeDateToYMDHmsSimple(date: string): string {
  const year = date.substring(0, 4)
  const month = date.substring(5, 7)
  const day = date.substring(8, 10)
  const hour = date.substring(11, 13)
  const min = date.substring(14, 16)
  const sec = date.substring(17, 19)
  const fomatDate = year + month + day + hour + min + sec

  return fomatDate
}