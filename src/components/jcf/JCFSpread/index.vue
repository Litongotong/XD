<!-- Wijmo 利用ガイド：https://developer.mescius.jp/wijmo/guide-to-use-wijmo -->
<template>
  <WjFlexGrid
    :data-item-id="id"
    :data-component-name="EComponentName.JCFSpread"
    :allow-dragging="false"
    :allow-resizing="AllowResizing.BothAllCells"
    :alternating-row-step="alternatingRowStep"
    :items-source="computedDummySource"
    :item-formatter="flexGridItemFormatter"
    :initialized="handleGridInitialize"
    :key-action-tab="KeyAction.CycleOut"
    :key-action-enter="KeyAction.CycleOut"
    :loaded-rows="onLoadedRows"
    :show-sort="canSort"
    :style="computedStyle"
  >
    <!-- 行ヘッダーが存在する場合のテンプレート -->
    <WjFlexGridCellTemplate
      v-if="rowHeaderCount"
      cellType="RowHeader"
      v-slot="cell"
    >
      {{ cell.row.index + 1 }}
    </WjFlexGridCellTemplate>

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
import {
  WjFlexGrid,
  WjFlexGridColumn,
  WjFlexGridCellTemplate,
} from '@grapecity/wijmo.vue2.grid'
import { type ICellTemplateContext } from '@grapecity/wijmo.grid'
import { CellMaker } from '@grapecity/wijmo.grid.cellmaker'
import { InputNumber } from '@grapecity/wijmo.input'

import type {
  JCFSpreadProps,
  ColumnWidth,
  JCFSpreadColumnInfoProperty,
  JCFSpreadHeaderColumnInfoProperty,
  ItemSource,
} from './types'
import type { JCFSpreadData } from '@/lib/jcf/gui/JCFSpreadData'
import type { EJFAlignment } from '@/lib/jcf/gui/JFAlignment'

import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { isNil } from '@/utils/useful'
import { getInstance } from '../utils/instance'
import { computed, ref, type CSSProperties } from 'vue'
import { calculatePositionStyle } from '../utils/transform'
import { DEFAULT_COLUMN_WIDTH, JCFSpread, EJCFSpread } from './static'
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

const source: ItemSource =
  props.itemSource ??
  Array.from({ length: 5 }, () => ({
    __COL_0: false,
    __COL_1: '103386',
    __COL_2: null,
    __COL_3: 'セイ2',
    __COL_4: '1',
    __COL_5: 2222.01,
    __COL_6: 22.02,
    __COL_7: 22.03,
    __COL_8: 2222.04,
    __COL_9: '20240421110909128',
    __COL_10: '雪次郎',
  }))

const computedDummySource = ref(source)

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

// FlexGrid Inline Style
const computedStyle = computed(() => {
  const positionStyle = calculatePositionStyle(props)

  const style: CSSProperties = {
    ...positionStyle,
    border: 'none',
    borderRadius: 0,
  }

  return style
})

/**
 * 交互行
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_grid.flexgrid.html#alternatingrowstep
 */
const alternatingRowStep = computed<number>(() => (props.doubleColor ? 1 : 0))

/** ソートできるかどうか */
const canSort = computed(() => {
  const sortStatus =
    props.headerAndColumnProperty?.header?.headerCell?.[0]?.some(
      (item) => item.sortColumn,
    )

  return sortStatus
})

/**
 * グリッド行がデータソースの項目に連結された後に発生するイベントの実行関数
 * @param grid グリッドインスタンス
 * @see https://demo.mescius.jp/wijmo/demos/Grid/Styling/Rows/Overview/vue
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_grid.flexgrid.html#loadedrows
 */
const onLoadedRows = (grid: FlexGrid) => {
  setupRowHeader(grid, props)
  setupDefaultCellHeight(grid, props)
}

const setupRowHeader = (grid: FlexGrid, props: JCFSpreadProps) => {
  const header = props.headerAndColumnProperty?.header
  const rowHeaderCount = props.headerAndColumnProperty?.columns?.headerColumns

  if (rowHeaderCount) {
    grid.rowHeaders.columns.forEach((item, index) => {
      item.cssClassAll = 'normal-column'
      item.header = header?.headerCell?.[0]?.[index].title ?? ' '
      item.minWidth = 28 // Wijmo default width
    })
  } else {
    /**
     * 列設定に列ヘッダがない場合は Wijmo のデフォルト列ヘッダを削除
     * @see https://demo.mescius.jp/wijmo/demos/Grid/Columns/Collections/vue
     */
    grid.rowHeaders.columns.splice(0, 1)
  }
}

/** デフォルトセル高さを設定する */
const setupDefaultCellHeight = (grid: FlexGrid, props: JCFSpreadProps) => {
  const customCellHeight =
    props.defaultCellHeight ??
    props.headerAndColumnProperty?.recordInfo?.rowHeight?.[0]

  if (customCellHeight) {
    grid.rows.defaultSize = customCellHeight
  }

  grid.rows.minSize = grid.rows.defaultSize
  grid.columnHeaders.rows.minSize = grid.rows.defaultSize
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

// [[列情報設定関数群]]
/** JCF 編集タイプ対 Wijmo Column のマップ。 */
const editTypeMap: Partial<Record<EJCFSpread, Partial<Column>>> = {
  [JCFSpread.CHECKBOX]: {
    dataType: DataType.Boolean,
  },
  [JCFSpread.NUMBER]: {
    dataType: DataType.Number,
  },
  [JCFSpread.STRING]: {
    dataType: DataType.String,
  },
}

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
      click: (_: MouseEvent, cell: ICellTemplateContext) => {
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
  const normal = 'normal-column '
  const editable = isColumnReadOnly(column) ? '' : 'editable-column '
  return normal + editable
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

  if (column.editType === JCFSpread.NUMBER) {
    editor = new InputNumber(document.createElement('div'), {
      format: `n${column.maxDecimalDigit ?? 2}`,
    })
  }

  if (editor instanceof InputNumber) {
    editor.valueChanged.addHandler((sender: InputNumber) => {
      if (!sender.value) {
        return
      }

      const valueList = sender.value.toString().split('.')
      const integer = valueList[0].substring(0, column.maxIntegerDigit!)
      const decimal = valueList[1]

      sender.value = parseFloat(`${integer}.${decimal}`)
    })
  }

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

  let format: string | null | undefined

  if (column.editType === JCFSpread.NUMBER) {
    format = `n${column.maxDecimalDigit ?? 2}`
  }

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
  // NOTE: ここに background を設定するとinline style を変更してしまうので、wijmo が css で操作した一部の背景色変更が描画できなくなる。
  const style: Partial<CSSStyleDeclaration> = {}

  style.color = toRGB(columnInfo?.foreground)

  const font = toCSSFont(columnInfo?.font)
  // NOTE: Applet の `monospace` は全角数字を半角にするので検討が必要。
  // style.fontFamily = font?.fontFamily ?? style.fontFamily
  style.fontSize = font?.fontSize?.toString() ?? style.fontSize
  style.fontWeight = font?.fontWeight?.toString() ?? style.fontWeight
  style.fontStyle = font?.fontStyle ?? style.fontStyle

  return style
}

/**
 * 該当 Column の最小列幅を算出する。
 * @param column JCFSpread 列制御情報
 * @returns 最小列幅
 */
const computeMinWidth = (column: JCFSpreadColumnInfoProperty): number => {
  if (column.minimumWidth) {
    return column.minimumWidth
  }

  if (column.baseColumnInfo?.width) {
    return column.baseColumnInfo.width
  }

  const spreadWidth = props.bounds?.[2] ?? 0

  const columnWidthSummary =
    config.columns?.columnInfo?.reduce(
      (accumulator, current) =>
        accumulator + (current.baseColumnInfo?.width ?? 0),
      0,
    ) ?? 0

  const difference = spreadWidth - columnWidthSummary

  return difference
}

// [[列情報設定]]
const config = { ...props.headerAndColumnProperty }

// 行ヘッダー設定
const rowHeaderCount = config?.columns?.headerColumns

const gridLeftBorder = computed(() =>
  rowHeaderCount ? 'none' : '1px solid rgba(0, 0, 0, 0.2)',
)

// 列情報設定
type ColumnConfig = Partial<Column> & {
  style: Partial<CSSStyleDeclaration>
  headerStyle: Partial<CSSStyleDeclaration>
}

const columns =
  config?.columns?.columnInfo?.map<ColumnConfig>((column, index) => {
    const headerRowIndex = config?.header?.rowCount
      ? config?.header?.rowCount - 1
      : 0

    const headerListWithoutRowHeader = config.header?.headerCell?.[
      headerRowIndex
    ].slice(rowHeaderCount!)

    const headerCell = headerListWithoutRowHeader?.[index]

    // Column Properties
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
        ?.baseHeaderCell,
    )

    const isReadOnly = isColumnReadOnly(column)

    const maxLength =
      (column.maxByteLength as number) >= 0 ? column.maxByteLength : null

    const minWidth = computeMinWidth(column)

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

// [[JCFSpreadData]]
// 部品データに動的 props をマウントする
const ins = getInstance<JCFSpreadData>(props)
ins?._setFlexGrid(flexGrid)
</script>

<style scoped>
/* 交互行の背景色の変更 */
:deep(.wj-alt) {
  /* Wijmo のセル選択背景色は css class で制御しているので、 ここに `important` を使うとセル選択時背景色が覆わされる。 */
  background: var(--color-light-yellow);
}

/* Wijmo は行タイトル列が常に表示すると想定するので左ボーダーは行タイトルにのみ設定している */
:deep(.wj-row .wj-cell:first-child) {
  /* 値は border-right に参照した */
  /* border-left: 1px solid rgba(0, 0, 0, 0.2); */
  border-left: v-bind('gridLeftBorder');
}

/* ヘッダーセルのスタイルの変更 */
:deep(.normal-column.wj-cell.wj-header) {
  align-items: center;
  background: var(--color-light-blue);
  display: flex;
  font-weight: 400;
  justify-content: center;
  padding: 0;
}

/* 編集可能列のヘッダーセルの背景色の変更 */
:deep(.editable-column.wj-cell.wj-header) {
  background: var(--color-deep-blue) !important;
}

:deep(.wj-control) {
  /* 任意のエディタの背景を親元素から継承する */
  background: inherit;
}

/* ボタンの padding を消さないと applet 上の列幅に沿っては正しく表示されない */
:deep(button) {
  /** セル層で動的にフォントサイズが変更される */
  font-size: inherit;
  font-weight: inherit;
  font-style: inherit;
  padding: 0;
}

:deep(input[type='tel']),
:deep(input[type='text']) {
  /** セル層で動的にフォントサイズが変更される */
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-style: inherit;
  padding: 0 !important;
  text-align: inherit !important;
}

/* チェックボックスを中央に位置させる */
:deep(input[type='checkbox']) {
  margin-right: 0 !important;
}
</style>
