/**
 * 値が undefined か null である。
 * @param payload 任意の値
 * @returns payload が未定義であるかどうか
 */
export function isNil<T extends any = any>(
  payload: T | undefined | null,
): payload is undefined | null {
  return payload === undefined || payload === null
}
