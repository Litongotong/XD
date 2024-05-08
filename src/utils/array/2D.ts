const create2DArrayBase = <T extends any = any>(
  row: number,
  col: number,
  initialValue: any,
): T[][] => {
  const arr: T[][] = []
  Array(row)
    .fill(0)
    .forEach(() => {
      const rowArr: T[] = []
      Array(col)
        .fill(0)
        .forEach(() => {
          rowArr.push(initialValue)
        })
      arr.push(rowArr)
    })
  return arr
}

// new String[row][col]
export const create2DStringArray = (row: number, col: number): string[][] => {
  return create2DArrayBase<string>(row, col, '')
}

// new Integer[row][col]
export const create2DNumberArray = (row: number, col: number): number[][] => {
  return create2DArrayBase<number>(row, col, 0)
}
