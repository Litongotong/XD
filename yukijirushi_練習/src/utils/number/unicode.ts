export function getNumericValue(ch: string) {
  const code = ch.charCodeAt(0)
  // '0' to '9'
  if (code >= 48 && code <= 57) {
    return code - 48
  } else if (
    // '０' to '９'
    code >= 0xff10 &&
    code <= 0xff19
  ) {
    return code - 0xff10
  }
  const romanMapping: Record<string, number> = {
    Ⅰ: 1,
    Ⅱ: 2,
    Ⅲ: 3,
    Ⅳ: 4,
    Ⅴ: 5,
    Ⅵ: 6,
    Ⅶ: 7,
    Ⅷ: 8,
    Ⅸ: 9,
    Ⅹ: 10,
    Ⅼ: 50,
    Ⅽ: 100,
    Ⅾ: 500,
    Ⅿ: 1000,
  }
  if (romanMapping[ch]) {
    return romanMapping[ch]
  }
  // TODO: support more unicode characters
  return -1
}
