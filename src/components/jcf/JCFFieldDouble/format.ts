// clear all non-numeric characters, but keep `,` and `.`
export const clearStringButAllowCommaAndDot = (v: string) => {
  const firstDot = v.indexOf('.')
  if (~firstDot) {
    const secondDot = v.indexOf('.', firstDot + 1)
    if (~secondDot) {
      v = v.slice(0, secondDot)
    }
  }

  return v.replace(/[^0-9,\.]/g, '')
}

export const clearStringButAllowDot = (v: string) => {
  const firstDot = v.indexOf('.')
  if (~firstDot) {
    const secondDot = v.indexOf('.', firstDot + 1)
    if (~secondDot) {
      v = v.slice(0, secondDot)
    }
  }

  return v.replace(/[^0-9\.]/g, '')
}
