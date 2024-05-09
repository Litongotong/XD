/** NOTE: 一時ファイル。スプレッド列情報の変換が正常に終了後に削除。 */
import type { JCFSpreadHeaderAndColumnProperty } from './types'
import { SystemColor } from '@/lib/native/awt/SystemColor'
import { Font } from '@/lib/native/awt/Font'
import { JCFSpread } from './static'
import { JCFSpreadColumnInfoProperty } from '@/lib/jcf/gui/JCFSpreadColumnInfoProperty'
import { Color } from '@/lib/native/awt/Color'

/** スプレッド列情報 */
export const spreadColumnInfo: JCFSpreadHeaderAndColumnProperty = {
  columns: {
    headerColumns: 0,
    columnCount: 11,
    headerColumnInfo: null,
    columnInfo: [
      {
        baseColumnInfo: {
          width: 32,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.CENTER,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.CHECKBOX,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_EDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 32,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 80,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.LEFT,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.STRING,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_EDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE |
          JCFSpreadColumnInfoProperty.COL_AUTOIME |
          JCFSpreadColumnInfoProperty.COL_IMEONCURSOR |
          JCFSpreadColumnInfoProperty.COL_IMEMODE_NATIVE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: 6,
        minimumWidth: 80,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 32,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 12),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.CENTER,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.PUSHBUTTON,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_EDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '検索',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 32,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: 'body_button07',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 176,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.LEFT,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.STRING,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_UNEDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 176,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 32,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.CENTER,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.NUMBER,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_UNEDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 32,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 64,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.CENTER,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.NUMBER,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_EDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_AUTOIME |
          JCFSpreadColumnInfoProperty.COL_IMEONCURSOR |
          JCFSpreadColumnInfoProperty.COL_IMEMODE_NATIVE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 64,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 64,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.CENTER,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.NUMBER,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_EDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_AUTOIME |
          JCFSpreadColumnInfoProperty.COL_IMEONCURSOR |
          JCFSpreadColumnInfoProperty.COL_IMEMODE_NATIVE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 64,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 64,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.CENTER,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.NUMBER,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_UNEDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 64,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 64,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.CENTER,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.NUMBER,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_UNEDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 64,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 144,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.LEFT,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.STRING,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_UNEDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: 'yyyy/MM/dd H:mm:ss',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 144,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
      {
        baseColumnInfo: {
          width: 144,
          background: SystemColor.window,
          foreground: SystemColor.windowText,
          borderColor: SystemColor.window,
          borderWidth: 0,
          font: new Font('Monospaced', Font.PLAIN, 14),
          borderType: JCFSpread.FLAT,
          alignmentHorizontal: JCFSpread.LEFT,
          alignmentVertical: JCFSpread.CENTER,
        },
        name: null,
        editType: JCFSpread.STRING,
        editFlag:
          JCFSpreadColumnInfoProperty.COL_UNEDITABLE |
          JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED |
          JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED |
          JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE |
          JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE |
          JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY |
          JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE,
        pattern: '',
        label: '',
        selectableElements: [],
        maxByteLength: -1,
        minimumWidth: 144,
        sortStart: 0,
        sortEnd: -1,
        buttonActionCode: '',
        itemActionCode: '',
        textActionCode: '',
      },
    ],
  },

  header: {
    rowCount: 1,
    columnCount: 11,
    headerCell: [
      [
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(182, 198, 250),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(182, 198, 250),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: '削除',
          sortColumn: null,
        },
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(182, 198, 250),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(182, 198, 250),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: '事業コード',
          sortColumn: null,
        },
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(182, 198, 250),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(182, 198, 250),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: '',
          sortColumn: null,
        },
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(182, 198, 250),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(182, 198, 250),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: '事業名',
          sortColumn: null,
        },
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(182, 198, 250),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(182, 198, 250),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: '階層',
          sortColumn: null,
        },
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(182, 198, 250),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(182, 198, 250),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: '予算比率',
          sortColumn: null,
        },
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(182, 198, 250),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(182, 198, 250),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: '実績比率',
          sortColumn: null,
        },
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(182, 198, 250),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(182, 198, 250),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: '前回予算',
          sortColumn: null,
        },
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(182, 198, 250),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(182, 198, 250),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: '前回実績',
          sortColumn: null,
        },
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(182, 198, 250),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(182, 198, 250),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: '更新日時',
          sortColumn: null,
        },
        {
          baseHeaderCell: {
            width: 80,
            background: new Color(182, 198, 250),
            foreground: Color.black,
            font: new Font('Monospaced', Font.PLAIN, 14),
            borderColor: new Color(182, 198, 250),
            borderWidth: 1,
            borderType: JCFSpread.FLAT,
            alignmentHorizontal: JCFSpread.CENTER,
            alignmentVertical: JCFSpread.CENTER,
          },
          title: '更新者',
          sortColumn: null,
        },
      ],
    ],
    height: [24],
  },

  recordInfo: {
    layout: [
      [
        '__COL_0',
        '__COL_1',
        '__COL_2',
        '__COL_3',
        '__COL_4',
        '__COL_5',
        '__COL_6',
        '__COL_7',
        '__COL_8',
        '__COL_9',
        '__COL_10',
      ],
    ],
    colWidth: [64, 39, 80, 41, 80, 80, 80, 80, 80, 80, 80],
    rowHeight: [24],
    fixedColumns: 0,
  },
}
