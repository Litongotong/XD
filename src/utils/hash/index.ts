/**
 * this function only can calc simple hashes and does not guarantee to avoid conflicts!
 */
export function hashCode(s: string): number {
  if (s.length >= Number.MAX_SAFE_INTEGER) {
    return hashCode(s.slice(0, Number.MAX_SAFE_INTEGER))
  }

  let hash = 0
  if (s.length === 0) {
    return hash
  }

  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return hash
}
