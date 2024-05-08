export const isNaN = (value: any): boolean => {
  return typeof value === 'number' && Number.isNaN(value)
}
