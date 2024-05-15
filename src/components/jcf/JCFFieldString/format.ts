import { EJFEnableType } from '@/lib/jcf/gui/JFEnableType'

const enableTypeRegMap: Record<number, RegExp> = {
  // 1
  // 入力可能：数字 '0'～'9'
  [EJFEnableType.TYPE_DIGIT]: /[0-9]/,
  // 2
  // 入力可能: 英小文字 'a'～'z'
  [EJFEnableType.TYPE_LOWERCASE]: /[a-z]/,
  // 4
  // 入力可能: 英大文字 'A'～'Z'
  [EJFEnableType.TYPE_UPPERCASE]: /[A-Z]/,
  // 6
  // 入力可能：英字 'a'～'z'および'A'～'Z'
  [EJFEnableType.TYPE_LETTER]: /[a-zA-Z]/,
  // TODO: 8
  [EJFEnableType.TYPE_SPECIAL]: /.*/,
  // TODO: 16
  [EJFEnableType.TYPE_MULTIBYTE]: /.*/,
}

type Transformer = (value: string) => string

/**
 * 入力部品の入力制御を計算する。
 */
export function getEnableTypeTransformer(
  enabledType?: EJFEnableType,
): Transformer {
  if (enabledType === undefined) {
    enabledType = EJFEnableType.TYPE_ALL
  }
  const validateRegs: RegExp[] = []
  Object.entries(enableTypeRegMap).forEach(([key, value]) => {
    const reg = value
    if (enabledType & Number(key)) {
      validateRegs.push(reg)
    }
  })
  const transformer = (value: string) => {
    if (!value?.length) {
      return value
    }
    const chars = value.split('')
    const result: string[] = []
    chars.forEach((char) => {
      const isMatched = validateRegs.some((reg) => reg.test(char))
      if (isMatched) {
        result.push(char)
      }
    })
    return result.join('')
  }
  return transformer
}
