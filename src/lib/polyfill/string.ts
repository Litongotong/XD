// String.prototype.equals
String.prototype.equals = function (value: string): boolean {
  return this === value
}

function compareTo(a: string, b: string) {
  const t1 = a
  const t2 = b
  const len1 = t1.length
  const len2 = t2.length
  const lim = Math.min(t1.length, t2.length)

  const v1 = t1
  const v2 = t2

  let k = 0
  while (k < lim) {
    const c1 = v1[k]
    const c2 = v2[k]
    if (c1 != c2) {
      if (c1.charCodeAt(0) == 32) {
        const charWithSpace = c1.charCodeAt(0) + c2.charCodeAt(0)
        return charWithSpace
      } else {
        return c1.charCodeAt(0) - c2.charCodeAt(0)
      }
    }
    k++
  }
  return len1 - len2
}

// String.prototype.compareTo
String.prototype.compareTo = function (value: string): number {
  return compareTo(this.toString(), value)
}

// String.prototype.codePointCount
String.prototype.codePointCount = function (beginIndex: number, endIndex: number): number {
  return [...this.slice(beginIndex, endIndex)].length
}

// String.prototype.contains
String.prototype.contains = function (value: string): boolean {
  return !!~this.indexOf(value)
}

// String.prototype.equalsIgnoreCase
String.prototype.equalsIgnoreCase = function (value: string): boolean {
  return this.toLowerCase() === value.toLowerCase()
}

// String.prototype.replaceAll
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (regex: string, replacement: string): string {
    return this.replace(new RegExp(regex, 'g'), replacement)
  }
}
