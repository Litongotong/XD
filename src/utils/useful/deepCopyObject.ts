/**
 * オブジェクトの深いコピー
 * @param payload コピーされる対象
 * @returns コピー後のオブジェクト
 */
export function deepCopyObject<T>(
  payload: T | undefined | null,
): T | undefined {
  if (!payload) {
    return
  }

  return JSON.parse(JSON.stringify(payload))
}
