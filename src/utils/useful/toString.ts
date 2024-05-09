export const toString = (value: any): string => {
  if (typeof value === 'string') {
    return value
  }
  return String(value)
}
