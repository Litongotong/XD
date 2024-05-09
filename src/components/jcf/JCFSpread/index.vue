<!-- Wijmo 利用ガイド：https://developer.mescius.jp/wijmo/guide-to-use-wijmo -->
<template>
  <WjFlexGrid
    :data-item-id="id"
    :data-component-name="EComponentName.JCFSpread"
    :allow-resizing="AllowResizing.Both"
    :headers-visibility="HeadersVisibility.Column"
    :items-source="itemSource"
    :item-formatter="flexGridItemFormatter"
    :initialized="handleGridInitialize"
    :key-action-tab="KeyAction.CycleOut"
    :key-action-enter="KeyAction.CycleOut"
    :loaded-rows="onLoadedRows"
    :show-sort="showSort()"
    :style="computedStyle"
  >
    <WjFlexGridColumn
      v-for="item of columns"
      :key="item.binding"
      v-bind="item"
      :width="transformColumnWidth(item.width)"
    />
  </WjFlexGrid>
</template>

<script setup lang="ts">
import { DataType, type Control } from '@grapecity/wijmo'
import {
  type FlexGrid,
  type Column,
  type ICellTemplateFunction,
  type IItemFormatter,
  type GridPanel,
  KeyAction,
  AllowResizing,
} from '@grapecity/wijmo.grid'
import { WjFlexGrid, WjFlexGridColumn } from '@grapecity/wijmo.vue2.grid'
import { type ICellTemplateContext } from '@grapecity/wijmo.grid'
import { CellMaker } from '@grapecity/wijmo.grid.cellmaker'
import { InputMask } from '@grapecity/wijmo.input'

import type {
  JCFSpreadProps,
  ColumnWidth,
  JCFSPreadInstallationPayload,
  JCFSpreadColumnInfoProperty,
  JCFSpreadHeaderColumnInfoProperty,
} from './types'
import type { JCFSpreadData } from '@/lib/jcf/gui/JCFSpreadData'
import type { EJFAlignment } from '@/lib/jcf/gui/JFAlignment'

import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { isNil } from '@/utils/useful'
import { getInstance } from '../utils/instance'
import { computed, ref, type CSSProperties } from 'vue'
import { calculatePositionStyle } from '../utils/transform'
import {
  HeadersVisibility,
  DEFAULT_COLUMN_WIDTH,
  JCFSpread,
  EJCFSpread,
} from './static'
import {
  EJCFSpreadColumnInfoProperty,
  JCFSpreadColumnInfoProperty as ColumnInfoStatic,
} from '@/lib/jcf/gui/JCFSpreadColumnInfoProperty'
import { Adapter } from '@/lib/adapter/adapter'
import { JCFSpreadCellPosition } from '@/lib/jcf/gui/JCFSpreadCellPosition'
import { toCSSFont, toRGB } from '../utils/common'

defineOptions({
  name: EComponentName.JCFSpread,
})

const props = defineProps<JCFSpreadProps>()

// [[FlexGrid InlineStyle]]
const computedStyle = computed(() => {
  const positionStyle = calculatePositionStyle(props)

  const style: CSSProperties = { ...positionStyle, border: 'none' }
  return style
})

// [[列情報設定関数群]]
/**
 * Wijmo Column align options.
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_grid.column.html#align
 */
const alignMap: Partial<Record<EJFAlignment, string>> = {
  [JCFSpread.LEFT]: 'left',
  [JCFSpread.RIGHT]: 'right',
  [JCFSpread.CENTER]: 'center',
}

/**
 * 列のセルの水平方向の配置。
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_grid.column.html#align
 * @param column JCFSpread 列制御情報
 * @returns cellTemplate
 */
const computeColumnAlign = (
  column: JCFSpreadColumnInfoProperty,
): string | null | undefined => {
  const alignmentHorizontal = column.baseColumnInfo?.alignmentHorizontal
  const align = alignmentHorizontal ? alignMap[alignmentHorizontal] : null
  return align
}

const logic = Adapter.create()

/**
 * 該当 Column のデータセルのHTMLコンテンツを生成する。
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_grid.column.html#celltemplate
 * @param column JCFSpread 列制御情報
 * @returns cellTemplate
 */
const computeColumnCellTemplate = (
  column: JCFSpreadColumnInfoProperty,
): string | ICellTemplateFunction | null => {
  // ボタンセル
  if (column.editType === JCFSpread.PUSHBUTTON) {
    return CellMaker.makeButton({
      text: column.label ?? '',
      click: (event: MouseEvent, cell: ICellTemplateContext) => {
        const position = new JCFSpreadCellPosition(
          cell.row.index,
          cell.col.index,
        )
        logic.extra.wrap({
          actionCode: column.buttonActionCode ?? '',
          additionalParams: [position],
        })
      },
    })
  }

  return null
}

/**
 * 列編集フラグを検証する。
 * @param oneFlag
 * @param allFlag
 * @returns 該当フラグが有効化どうか
 */
const validateEditFlag = (
  allFlag: number | null | undefined,
  oneFlag: EJCFSpreadColumnInfoProperty,
) => {
  return ((allFlag ?? 0) & oneFlag) !== 0
}

type EditFlagValidationHandler = (editFlag?: number | null) => boolean
const editFlagValidationMap: Partial<
  Record<EJCFSpreadColumnInfoProperty, EditFlagValidationHandler>
> = {
  [ColumnInfoStatic.COL_EDITABLE]: (editFlag) =>
    validateEditFlag(editFlag, ColumnInfoStatic.COL_EDITABLE),
  [ColumnInfoStatic.COL_UNEDITABLE]: (editFlag) =>
    validateEditFlag(editFlag, ColumnInfoStatic.COL_UNEDITABLE),
}

/**
 * 該当 Column の isReadOnly を設定する。
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_grid.column.html#isreadonly
 * @param column JCFSpread 列制御情報
 * @returns isReadOnly
 */
const isColumnReadOnly = (column: JCFSpreadColumnInfoProperty): boolean => {
  return (
    !editFlagValidationMap[ColumnInfoStatic.COL_EDITABLE]?.(column.editFlag) ??
    true
  )
}

/**
 * 該当 Column の cssClassAll を設定する。
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_grid.column.html#cssclassall
 * @param column JCFSpread 列制御情報
 * @returns cssClassAll
 */
const computeColumnCSSClassAll = (
  column: JCFSpreadColumnInfoProperty,
): string | null => {
  // 後続にクラスを付けることを予想して最後にスペースを入れた
  const common = 'header-cell '
  const editable = isColumnReadOnly(column) ? '' : 'editable-column '

  return common + editable
}

/** JCF 編集タイプ対 Wijmo Column のマップ。 */
const editTypeMap: Partial<Record<EJCFSpread, Partial<Column>>> = {
  [JCFSpread.CHECKBOX]: {
    dataType: DataType.Boolean,
  },
  [JCFSpread.NUMBER]: {
    dataType: DataType.Number,
    format: null,
  },
  [JCFSpread.STRING]: {
    dataType: DataType.String,
  },
}

/**
 * 該当 Column の dataType を算出する。
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_grid.column.html#datatype
 * @see https://demo.mescius.jp/wijmo/api/enums/wijmo.datatype.html
 * @param column JCFSpread 列制御情報
 * @returns dataType
 */
const computeColumnDataType = (
  column: JCFSpreadColumnInfoProperty,
): DataType | null | undefined => {
  if (!column.editType) {
    return
  }

  const dataType = editTypeMap[column.editType]?.dataType
  return dataType
}

/**
 * 該当 Column の editor を算出する。
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_grid.column.html#editor
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo.control.html
 * @param column JCFSpread 列制御情報
 * @returns editor
 */
const computeColumnEditor = (
  column: JCFSpreadColumnInfoProperty,
): Control | null | undefined => {
  if (!column.editType) {
    return
  }

  let editor: Control | undefined

  // NOTE: Input Editor Sample
  // if (column.editType === JCFSpread.STRING) {
  //   editor = new InputMask(document.createElement('div'))
  // }
  //
  // if (editor instanceof InputMask) {
  //   editor.valueChanged.addHandler((sender) => {
  //     if (column.maxByteLength) {
  //       sender.value = sender.value.substring(0, column.maxByteLength)
  //     }
  //   })
  // }

  return editor
}

/**
 * 該当 Column の format を算出する。
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_grid.column.html#format
 * @param column JCFSpread 列制御情報
 * @returns format
 */
const computeColumnFormat = (
  column: JCFSpreadColumnInfoProperty,
): string | null | undefined => {
  if (!column.editType) {
    return
  }

  const format = editTypeMap[column.editType]?.format
  return format
}

/**
 * 該当 Column の inline style を算出する。
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_grid.flexgrid.html#itemformatter
 * @param column JCFSpread 列制御情報
 * @returns style
 */
const computeColumnStyle = (
  columnInfo?: JCFSpreadHeaderColumnInfoProperty | null,
): Partial<CSSStyleDeclaration> => {
  const style: Partial<CSSStyleDeclaration> = {}

  style.background = toRGB(columnInfo?.background)
  style.color = toRGB(columnInfo?.foreground)

  const font = toCSSFont(columnInfo?.font)
  // NOTE: Applet の `monospace` は全角数字を半角にするので検討が必要。
  // style.fontFamily = font?.fontFamily ?? style.fontFamily
  style.fontSize = font?.fontSize?.toString() ?? style.fontSize
  style.fontWeight = font?.fontWeight?.toString() ?? style.fontWeight
  style.fontStyle = font?.fontStyle ?? style.fontStyle

  return style
}

// [[列情報設定]]
type ColumnConfig = Partial<Column> & {
  style: Partial<CSSStyleDeclaration>
  headerStyle: Partial<CSSStyleDeclaration>
}

const config = props.headerAndColumnProperty
const columns =
  config?.columns?.columnInfo?.map<ColumnConfig>((column, index) => {
    const headerRowIndex = config?.header?.rowCount
      ? config?.header?.rowCount - 1
      : 0

    const headerCell = config.header?.headerCell?.[headerRowIndex][index]

    const align = computeColumnAlign(column)
    const allowSorting = headerCell?.sortColumn
    const binding = config?.recordInfo?.layout?.[headerRowIndex][index]
    const cellTemplate = computeColumnCellTemplate(column)
    const cssClassAll = computeColumnCSSClassAll(column)
    const dataType = computeColumnDataType(column)
    const editor = computeColumnEditor(column)
    const format = computeColumnFormat(column)

    // `header` が空の文字列だと `binding` が `header` になるのでスペースを無名とする
    const header = headerCell?.title || ' '

    // FIXME: 複数行ヘッダの時の処理
    const headerStyle = computeColumnStyle(
      props.headerAndColumnProperty?.header?.headerCell?.[0][index]
        .baseHeaderCell,
    )

    const isReadOnly = isColumnReadOnly(column)
    const maxLength =
      (column.maxByteLength as number) >= 0 ? column.maxByteLength : null
    const minWidth = column.minimumWidth
    const style = computeColumnStyle(column.baseColumnInfo)
    const width = column.baseColumnInfo?.width

    const computedColumn: ColumnConfig = {
      align,
      allowSorting,
      binding,
      cellTemplate,
      cssClassAll,
      dataType,
      editor,
      format,
      header,
      headerStyle,
      isReadOnly,
      maxLength,
      minWidth,
      style,
      width,
    }

    return computedColumn
  }) ?? []

// [[FlexGrid]]
/**
 * wijmo.vue2.grid.WjFlexGrid
 * @see https://demo.mescius.jp/wijmo/api/modules/wijmo_vue2_grid.html#wjflexgrid
 */
const flexGrid = ref<FlexGrid>()

/**
 * Flex Grid 初期化トリガー
 * @param grid グリッドインスタンス
 * @see https://demo.mescius.jp/wijmo/api/modules/wijmo_vue2_grid.html#wjflexgrid
 */
const handleGridInitialize = (grid: FlexGrid) => {
  // flexGrid と grid の何れを変更してももう片方に反映される
  flexGrid.value = grid
}

/** ソートできるかどうか */
const showSort = () => {
  const sortStatus =
    props.headerAndColumnProperty?.header?.headerCell?.[0]?.some(
      (item) => item.sortColumn,
    )

  return sortStatus
}

/**
 * グリッド行がデータソースの項目に連結された後に発生するイベントの実行関数
 * @param grid グリッドインスタンス
 * @see https://demo.mescius.jp/wijmo/demos/Grid/Styling/Rows/Overview/vue
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_grid.flexgrid.html#loadedrows
 */
const onLoadedRows = (grid: FlexGrid) => {
  setupDefaultCellHeight(grid, props)
  setupDoubleColor(grid, props)
}

/** デフォルトセル高さを設定する */
const setupDefaultCellHeight = (grid: FlexGrid, props: JCFSpreadProps) => {
  if (props.defaultCellHeight) {
    grid.rows.defaultSize = props.defaultCellHeight
  }
}

/**
 * 偶数行に違う色を付ける
 * @see https://devlog.mescius.jp/wijmo-flexgrid-style-usage/#flexgrid-5
 */
const setupDoubleColor = (grid: FlexGrid, props: JCFSpreadProps) => {
  if (!props.doubleColor) {
    return
  }

  grid.rows.forEach((item, index) => {
    if (index % 2 !== 0) {
      const before = item.cssClass ?? ''
      // 後続にクラスを付けることを予想して最後にスペースを入れた
      item.cssClass = before + 'double-color '
    }
  })
}

/**
 * 列幅を整形する
 * @param width
 */
const transformColumnWidth = (width?: ColumnWidth | null) => {
  if (Number.isNaN(width) || isNil(width)) {
    return DEFAULT_COLUMN_WIDTH
  }

  return width
}

type ItemFormatterParameter = Parameters<IItemFormatter>

/**
 * FlexGrid の itemFormatter
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_grid.flexgrid.html#itemformatter
 * @param panel
 * @param row
 * @param col
 * @param cell
 */
const flexGridItemFormatter: IItemFormatter = (
  panel: GridPanel,
  row: number,
  col: number,
  cell: HTMLElement,
) => {
  setCellStyle([panel, row, col, cell])
  formatWithPattern([panel, row, col, cell])
}

/** Cell Style を設定する。 */
const setCellStyle = ([_, __, col, cell]: ItemFormatterParameter) => {
  const isHeader = cell.classList.contains('wj-header')
  const columnStyle = isHeader ? columns[col].headerStyle : columns[col].style

  for (const key in columnStyle) {
    cell.style[key] = columnStyle[key] ?? cell.style[key]
  }

  // 調整済みの lineHeight を取得する。lineHeight > height の場合は下に寄る。
  const computeLineHeight = (increment: number) => {
    return window.parseInt(cell.style.height) + increment + 'px'
  }

  // 元素を垂直に中央に位置させる
  if (columns[col].dataType === DataType.Boolean) {
    cell.style.lineHeight = computeLineHeight(3)
  } else {
    cell.style.lineHeight = computeLineHeight(2)
  }

  // Applet 上では padding 0 想定で列幅を決めていたと考えられる
  cell.style.padding = '0'
}

/** 表示文字列のフォーマットパターン */
const patternMap: Record<string, (payload: string, pattern: string) => string> =
  {
    ['yyyy/MM/dd H:mm:ss']: (payload, pattern) => {
      const result = pattern
        .replace('yyyy', payload.substring(0, 4))
        .replace('MM', payload.substring(4, 6))
        .replace('dd', payload.substring(6, 8))
        .replace('H', payload.substring(8, 10))
        .replace('mm', payload.substring(10, 12))
        .replace('ss', payload.substring(12, 14))

      return result
    },
  }

/** 表示文字列をフォーマットする */
const formatWithPattern = ([_, __, col, cell]: ItemFormatterParameter) => {
  const isHeader = cell.classList.contains('wj-header')

  if (isHeader) {
    return
  }

  const pattern =
    props.headerAndColumnProperty?.columns?.columnInfo?.[col].pattern

  if (!pattern) {
    return
  }

  cell.textContent = patternMap[pattern](cell.textContent ?? '', pattern)
}

// [[JCFSpreadData]]
// 部品データに動的 props をマウントする
const ins = getInstance<JCFSpreadData>(props)
ins?._setFlexGrid(flexGrid)
</script>

<style scoped>
:deep(.double-color) {
  background: var(--color-light-yellow) !important;
}

:deep(.header-cell.wj-cell.wj-header) {
  align-items: center;
  background: var(--color-light-blue);
  display: flex;
  justify-content: center;
  padding: 0;
}

:deep(.editable-column.wj-cell.wj-header) {
  background: var(--color-deep-blue) !important;
}

:deep(button) {
  padding: 0;
}

:deep(input[type='checkbox']) {
  margin-right: 0 !important;
}
</style>
