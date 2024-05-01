import { PAGES } from '@/router/constant'
import router from '@/router'

export const handleSystemException = (
  errorCode: string,
  errorMsg: string,
  errorDateTime: string
) => {
  router.push({
    name: PAGES.YCSCMNF070M,
    query: {
      error_code: errorCode,
      error_msg: errorMsg,
      error_date_time: errorDateTime,
    },
  })
}
