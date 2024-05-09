
// cannot use for negative numbers
// clear all non-numeric characters, but keep `,`
export const clearStringButAllowComma = (v: string) => {
  return v.replace(/[^0-9,]/g, '')
}

// clear all non-numeric characters
export const clearString = (v: string) => {
  return v.replace(/[^0-9]/g, '')
}
