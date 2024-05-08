
// new char[num]
export const createChar = (num: number): string[] => {
  const result: string[] = []
  for (let i = 0; i < num; i++) {
    result.push('')
  }
  return result
}
