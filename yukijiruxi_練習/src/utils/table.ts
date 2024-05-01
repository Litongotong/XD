import type { Table } from '@/types/components'

/**
 * @description データセルのヘッダを探し出す
 * @param datum データセル
 * @param heads ヘッダリスト
 * @returns このデータセルの該当ヘッダ
 */
export function findHead(
  datum: Table.Datum,
  heads?: Table.HeadRow | Table.HeadRow[],
): Table.Head | undefined {
  return (heads?.flat() ?? []).find((item) => item.id === datum.id)
}
