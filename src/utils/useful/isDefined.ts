/**
 * 値が undefined か null ではない。
 * @param payload 任意の値
 * @returns payload が定義された値であるかどうか
 */
export function isDefined<T extends any = any>(
  payload: T,
): payload is NonNullable<T> {
  return payload !== undefined && payload !== null
}
