let counter = 0

export const uniqueId = (prefix?: string) => {
  return `${prefix || ''}${counter++}`
}
