import { CHECK_CONFIG } from '@/config'

/**
 * 有効な文字列(nullではなく、空文字列でない)かどうかをチェックします。
 * @param param 文字列
 * @return 指定された文字列がnullまたは空文字列の場合は、false。それ以外の場合、true
 */
export const isValidString = (param: string) => {
  return param != undefined && param != null && '' !== param.trim()
}
