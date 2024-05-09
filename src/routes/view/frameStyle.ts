import { isStringNumber, groupBy, sortBy, toNumber } from '@/utils/useful'
import type { ILayout } from '../config/interface'
import { type CSSProperties } from 'vue'

interface IFramePosition {
  rowPosition: number
  needRows: number
  needColumns: number
  isHeightFixed: boolean
  isWidthFixed: boolean
}

export function calcFramesStyle(frames: ILayout[]) {
  const styleMap: Record<string, CSSProperties> = {}
  const gridStyle: CSSProperties = {
    display: 'grid',
    width: '100%',
    height: '100%',
    gap: 'var(--frame-gap)'
  }

  const positionData: IFramePosition[] = []

  if (!frames?.length) {
    return {
      styleMap,
      gridStyle,
    }
  }

  frames.forEach((item) => {
    const style: CSSProperties = {}
    const width = item.width
    const height = item.height

    let isHeightFixed = false
    let isWidthFixed = false

    // width
    if (width === '*') {
      style.width = '100%'
    } else {
      if (isStringNumber(width)) {
        style.width = `${width}px`
        isWidthFixed = true
      }
    }
    // height
    if (height === '*') {
      style.height = '100%'
    } else {
      if (isStringNumber(height)) {
        style.height = `${height}px`
        isHeightFixed = true
      }
    }
    // startX / startY / sizeX / sizeY
    const gridBase = 1
    const rowStart = toNumber(item.startY) + gridBase
    const columnStart = toNumber(item.startX) + gridBase
    const rowEnd = rowStart + toNumber(item.sizeY)
    const columnEnd = columnStart + toNumber(item.sizeX)
    const gridRow = `${rowStart} / ${rowEnd}`
    const gridColumn = `${columnStart} / ${columnEnd}`
    style.gridRow = gridRow
    style.gridColumn = gridColumn

    styleMap[item.frameID] = style

    positionData.push({
      rowPosition: rowStart,
      needColumns: columnEnd - columnStart,
      needRows: rowEnd - rowStart,
      isHeightFixed,
      isWidthFixed,
    })
  })

  const gridRow: string[] = []
  const gridColumn: string[] = []
  const group = groupBy(positionData, (i) => i.rowPosition)

  const rows = sortBy(Object.keys(group), (i) => toNumber(i))
  let mostFramesCount = 0
  let hasMostFramesRow: string
  rows.forEach((row) => {
    const currentRow = row
    const thisRowFrames = group[currentRow]
    // calc gridRow
    const someFrameInThisRow = thisRowFrames[0]
    if (someFrameInThisRow.isHeightFixed) {
      gridRow.push('auto')
    } else {
      gridRow.push(`${someFrameInThisRow.needRows}fr`)
    }
    if (thisRowFrames.length > mostFramesCount) {
      mostFramesCount = thisRowFrames.length
      hasMostFramesRow = currentRow
    }
  })
  const hasMostFramesRowFrames = group[hasMostFramesRow!]
  hasMostFramesRowFrames.forEach((frame) => {
    if (frame.isWidthFixed) {
      gridColumn.push('auto')
    } else {
      gridColumn.push(`${frame.needColumns}fr`)
    }
  })

  gridStyle.gridTemplateRows = gridRow.join(' ')
  gridStyle.gridTemplateColumns = gridColumn.join(' ')

  return {
    styleMap,
    gridStyle,
  }
}
