/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export class CJSpread extends lib.com.fujitsu.caa.CJContainer {
        static __static_initialized: boolean = false;
        static __static_initialize() { if (!CJSpread.__static_initialized) { CJSpread.__static_initialized = true; CJSpread.__static_initializer_0(); } }

        cji_getRecordCount(): number {
            if (!this.recordMode)return this.dataRows; else return this.recordCount;
        }

        public getRecordCount(): number {
            return this.cji_getRecordCount();
        }

        static Header: string = "$Header: /CAA/ClientJ/SpreadB/Current/src/com/fujitsu/caa/CJSpread.java 602   11/06/21 15:10 Kura $";

        static Modtime: string = "$Modtime: 11/06/21 15:06 $";

        static Workfile: string = "$Workfile: CJSpread.java $";

        static COPYRIGHT: string = "@(#) $Revision: 602 $ Copyright (C) 1998-2009, Fujitsu Advanced Engineering Limited. & FUJITSU LIMITED.\n";

        static NORMAL: number = 0;

        static COLUMNCHANGE: number = 1;

        static ROWCHANGE: number = 2;

        static ROWCOLUMNCHANGE: number = 3;

        public static LAST: number = -1;

        static dragRange: number = 3;

        static dragMinSize: number = 4;

        static maxHeader: number = 2147483647;

        /*private*/ lockListeners: any;

        /*private*/ itemListener: Array<any>;

        /*private*/ textListener: Array<any>;

        /*private*/ spreadActionListener: Array<any>;

        /*private*/ scrollListeners: Array<any>;

        /*private*/ cellItemListeners: Array<any>;

        /*private*/ cellActionListeners: Array<any>;

        /*private*/ spreadExtensions: Array<any>;

        tableBorderColor: com.java.Color;

        headerColor: com.java.Color;

        headerTextColor: com.java.Color;

        headerTableBorderColor: com.java.Color;

        defaultDataCell: lib.com.fujitsu.caa.CJCell;

        defaultHeaderCell: lib.com.fujitsu.caa.CJCell;

        defaultFooterCell: lib.com.fujitsu.caa.CJCell;

        dn: com.java.Image;

        g2: com.java.Graphics;

        tableBorderHeight: number;

        tableBorderWidth: number;

        rows: number;

        columns: number;

        /*private*/ preferredRows: number;

        /*private*/ preferredColumns: number;

        dataRows: number;

        dataColumns: number;

        headerRows: number;

        headerColumns: number;

        /*private*/ cursorRow: number;

        /*private*/ cursorColumn: number;

        /*private*/ startRow: number;

        /*private*/ startColumn: number;

        /*private*/ cells: lib.com.fujitsu.caa.CJCell[][];

        /**
         * @deprecated Field cellfield is deprecated
         */
        static CELLFIELD_INIT_SIZE: number = 100;

        rowHeight: number[];

        columnWidth: number[];

        pointY: number[];

        pointX: number[];

        Hbar: lib.com.fujitsu.caa.CJScrollbar;

        Vbar: lib.com.fujitsu.caa.CJScrollbar;

        /*private*/ fullUpdate: boolean;

        paintAll: boolean;

        /*private*/ dragLine: boolean;

        /*private*/ focus: boolean;

        painted: boolean;

        /*private*/ paintFlag: boolean;

        /*private*/ multipleMode: boolean;

        /*private*/ inputMode: boolean;

        /*private*/ jumpMode: boolean;

        scrollbarMode: boolean;

        /*private*/ viewMode: boolean;

        inputAreaVisible: boolean;

        defaultInputArea: lib.com.fujitsu.caa.CJFieldString;

        inputArea: com.java.Component;

        mouseType: number;

        mouseTypeB: number;

        tableSize: com.java.Dimension;

        /*private*/ editPosition: lib.com.fujitsu.caa.CJCellPosition;

        /*private*/ dragOk: boolean;

        dragging: number;

        /*private*/ dragRow: number;

        /*private*/ dragColumn: number;

        /*private*/ dragMinY: number;

        /*private*/ dragMinX: number;

        /*private*/ dragMaxY: number;

        /*private*/ dragMaxX: number;

        /*private*/ mouseY: number;

        /*private*/ mouseX: number;

        /*private*/ mouseY2: number;

        /*private*/ mouseX2: number;

        /*private*/ autoHMoveMode: boolean;

        /*private*/ autoVMoveMode: boolean;

        /*private*/ autoTopLastMoveMode: boolean;

        public static NO_MERGE: number = 0;

        public static COLUMN_MERGE: number = 1;

        public static ROW_MERGE: number = 2;

        static INTERNAL_ROWCOLUMN_MERGE: number = 3;

        static INTERNAL_COLUMNROW_MERGE: number = 4;

        public static SPAN_HOLD: number = 5;

        static AREA_DATA: number = 1;

        static AREA_WESTHEADER: number = 2;

        static AREA_NORTHHEADER: number = 4;

        static AREA_NORTHWEASTCORNER: number = 8;

        static AREA_EASTFOOTER: number = 16;

        static AREA_SOUTHFOOTER: number = 32;

        static AREA_SOUTHWESTCORNER: number = 64;

        static AREA_NORTHEASTCORNER: number = 128;

        static AREA_SOUTHEASTCORNER: number = 256;

        public static STRING: number = 1;

        public static NUMBER: number = 2;

        public static DATE: number = 3;

        public static CUSTOM: number = 4;

        public static COMBOBOX: number = 5;

        public static LISTBOX: number = 6;

        static INTERNAL_CHECKBOX: number = 7;

        public static CHECKBOX: number = 7;

        static INTERNAL_PUSHBUTTON: number = 8;

        public static PUSHBUTTON: number = 8;

        static INTERNAL_TEXTAREA: number = 9;

        public static TEXTAREA: number = 9;

        static INTERNAL_TOGGLEBUTTON: number = 10;

        public static TOGGLEBUTTON: number = 10;

        static INTERNAL_COMBOBOX2: number = 11;

        public static COMBOBOX2: number = 11;

        public static TEXTAREA2: number = 13;

        public static OPEN_FIELD: number = 0;

        public static UP_CURSOR: number = 1;

        public static DOWN_CURSOR: number = 2;

        public static LEFT_CURSOR: number = 3;

        public static RIGHT_CURSOR: number = 4;

        public static NO_EFFECT: number = 5;

        static enterKeyModeTransTable: number[]; public static enterKeyModeTransTable_$LI$(): number[] { CJSpread.__static_initialize(); if (CJSpread.enterKeyModeTransTable == null) { CJSpread.enterKeyModeTransTable = [10, 38, 40, 37, 39]; }  return CJSpread.enterKeyModeTransTable; }

        /*private*/ enterKeyMode: number;

        /*private*/ ctrlKeyMode: boolean;

        /*private*/ closeMoveMode: number;

        /*private*/ openMoveMode: boolean;

        /*private*/ mergeMode: number;

        /*private*/ closeMoveFlag: boolean;

        /*private*/ keyOpenMode: boolean;

        /*private*/ realCursor: boolean;

        /*private*/ cursorRowR: number;

        /*private*/ cursorColumnR: number;

        /*private*/ recordMode: boolean;

        /*private*/ recordRows: number;

        /*private*/ recordCount: number;

        /*private*/ recordCells: lib.com.fujitsu.caa.CJCell[][];

        /*private*/ records: string[][];

        /*private*/ recordField: Array<any>;

        /*private*/ beginOpenInputArea: boolean;

        /*private*/ columnSelectableByHeader: boolean;

        /*private*/ rowSelectableByHeader: boolean;

        /*private*/ allSelectWhenClickCorner: boolean;

        static INTERNAL_DRAGBOTH: number = 0;

        static INTERNAL_DRAGVERT: number = 1;

        static INTERNAL_DRAGHORZ: number = 2;

        static INTERNAL_DRAGNONE: number = 3;

        static INTERNAL_NODRAGHORZ: number = 1;

        static INTERNAL_NODRAGVERT: number = 2;

        static INTERNAL_DRAGOVRHORZ: number = 4;

        static INTERNAL_DRAGOVRVERT: number = 8;

        static INTERNAL_DRAGHORZFIXCOL: number = 16;

        public static GRID_VERTICALDRAG: number = 1;

        public static GRID_HORIZONTALDRAG: number = 2;

        public static GRID_VERTICALDRAGOVER: number = 8;

        public static GRID_HORIZONTALDRAGOVER: number = 4;

        public static GRID_NONDRAGGING: number = 0;

        public static GRID_DRAGBOTH: number = 3;

        public static GRID_DBLCLICKFIXCOLUMN: number = 16;

        public static DRAGGRID_BOTH: number = 0;

        public static DRAGGRID_VERTICAL: number = 1;

        public static DRAGGRID_HORIZONTAL: number = 2;

        public static DRAGGRID_NONE: number = 3;

        public static DRAGGRID_OVERHORZ: number = 4;

        public static DRAGGRID_OVERVERT: number = 8;

        public static NODRAGGRID_HORIZONTAL: number = 1;

        public static NODRAGGRID_VERTICAL: number = 2;

        gridDragDirection: number;

        public static SCROLL_BOTH: number = 0;

        public static SCROLL_VERTICAL: number = 1;

        public static SCROLL_HORIZONTAL: number = 2;

        public static SCROLL_NONE: number = 3;

        public static SCROLL_HORZALWAYS: number = 4;

        public static SCROLL_VERTALWAYS: number = 8;

        static NOSCROLL_HORIZONTAL: number = 1;

        static NOSCROLL_VERTICAL: number = 2;

        scrollDirection: number;

        public static SCRL_NONE: number = 0;

        public static SCRL_VERTICALAUTO: number = 1;

        public static SCRL_HORIZONTALAUTO: number = 2;

        public static SCRL_BOTHAUTO: number = 3;

        public static SCRL_VERTICALALWAYS: number = 9;

        public static SCRL_HORIZONTALALWAYS: number = 6;

        public static SCRL_BOTHALWAYS: number = 15;

        public static SCRL_VERTICALMASK: number = 9;

        public static SCRL_HORIZONTALMASK: number = 6;

        public static INVALIDVALUE_ACCEPT: number = 0;

        public static INVALIDVALUE_DISCARD: number = 1;

        mouseEnterd: number;

        static MOUSE_ENTERD: number = 1;

        static MOUSE_EXITED: number = 2;

        cursorChangedX: number;

        cursorChangedY: number;

        static INTERNAL_ALLOW_NOACTION: number = 0;

        static INTERNAL_ALLOW_ACTION: number = 1;

        static INTERNAL_ALLOW_ACTIONMOVE: number = 2;

        public static ALLOW_NOACTION: number = 0;

        public static ALLOW_ACTION: number = 1;

        public static ALLOW_ACTIONMOVE: number = 2;

        allowEscapeMode: number;

        footerRows: number;

        footerColumns: number;

        fixedLeft: number;

        /*private*/ spreadSerialVersion: number;

        static currentSerialVersion: number = 6;

        /*private*/ selectionVisible: boolean;

        public static FOCUS_SETVALUEWHENLOSTFOCUS: number = 1;

        public static FOCUS_NONE: number = 0;

        lostFocusBehavior: number;

        public static SCROLL_SETVALUEWHENSCROLL: number = 0;

        public static SCROLL_SETVALUEALWAYS: number = 1;

        horizontalScrollBehavior: number;

        verticalScrollBehavior: number;

        static INTERNAL_WITHEVENT: number = 1;

        static INTERNAL_WITHREDRAW: number = 2;

        /*private*/ columnWidthListener: Array<any>;

        /*private*/ rowHeightListener: Array<any>;

        hiddenVerticalGridByInvisibleColumn: boolean;

        hiddenHorizontalGridByInvisibleRow: boolean;

        eventDelay: boolean;

        NOT_DRAGGING: number;

        DRAGGING_MOVEGRID: number;

        DRAGGING_SELECTSTART: number;

        DRAGGING_SELECTION: number;

        /*private*/ cellEditListener: Array<any>;

        /*private*/ defaultInsertMode: number;

        /*private*/ defaultOverwriteCaret: number;

        /*private*/ defaultInsertCaret: number;

        /*private*/ notSetFocusOnScrollbarPressed: boolean;

        vertGridColor: com.java.Color;

        horzGridColor: com.java.Color;

        vertHeaderGridColor: com.java.Color;

        horzHeaderGridColor: com.java.Color;

        selectionBackground: com.java.Color;

        selectionForeground: com.java.Color;

        discardHiddenCell: boolean;

        nodraghorz: boolean[];

        nomergeadjustvscr: boolean;

        eventmask: number;

        cursorMovedEachClick: boolean;

        cursorBehavior: number;

        textEditKey: lib.com.fujitsu.caa.CJTextEditKey;

        actionMap: any;

        extendmodeBackground: com.java.Color;

        extendmodeForeground: com.java.Color;

        /*private*/ is142_13later: boolean;

        /*private*/ is150_10later: boolean;

        public static SELENDMOVE_DEFAULT: number = 0;

        public static SELENDMOVE_MERGECELL_FIXED: number = 1;

        selectionEndMoveMode: number;

        public static INPUTMETHOD_EVENT_DISCARD: number = 0;

        public static INPUTMETHOD_EVENT_FORWARD_FOCUSOWNER: number = 1;

        forwardInputMethodEvent: number;

        /*private*/ closeMoveListener: Array<any>;

        public static CELLEDITNOTIFY_ATONCE: number = 0;

        public static CELLEDITNOTIFY_POSTED: number = 1;

        cellEditNotify: number;

        defaultTransferFocus: number;

        enableImq: boolean;

        static base: string = "cjspread";

        static nameCounter: number = 0;

        static bname: string = "lib.com.fujitsu.caa.resources.CJMessageResource";

        static serialVersionUID: number = 3830521530335898849;

        existRepaintQueue: boolean;

        static ALLOWESCAPEKEY: lib.com.fujitsu.caa.CJTextEditKey; public static ALLOWESCAPEKEY_$LI$(): lib.com.fujitsu.caa.CJTextEditKey { CJSpread.__static_initialize();  return CJSpread.ALLOWESCAPEKEY; }

        static DEFAULTKEY: lib.com.fujitsu.caa.CJTextEditKey; public static DEFAULTKEY_$LI$(): lib.com.fujitsu.caa.CJTextEditKey { CJSpread.__static_initialize();  return CJSpread.DEFAULTKEY; }

        static SPREADKEY: lib.com.fujitsu.caa.CJTextEditKey; public static SPREADKEY_$LI$(): lib.com.fujitsu.caa.CJTextEditKey { CJSpread.__static_initialize();  return CJSpread.SPREADKEY; }

        static CLASS_NAME: string = "lib.com.fujitsu.caa.CJSpread";

        static SETCELL_WITHREDRAW: number = 1;

        static SETCELL_WITHREMERGE: number = 2;

        static SETCELL_NOREDRAW: number = 0;

        rectangle2: com.java.Rectangle;

        cursorLock: any;

        position2: lib.com.fujitsu.caa.CJPosition;

        p_cellRect: com.java.Rectangle;

        p_cellBounds: com.java.Rectangle;

        p_cellBorderless: com.java.Rectangle;

        needrepaint: boolean;

        /*private*/ progressPaint: boolean;

        /*private*/ rectMergeCell1: com.java.Rectangle;

        /*private*/ rectMergeCell2: com.java.Rectangle;

        inprogressMousePressed: boolean;

        mousePresseFlagLock: any;

        posResizable: lib.com.fujitsu.caa.CJPosition;

        prevEditPos: lib.com.fujitsu.caa.CJPosition;

        public static REQUESTFOCUS_LATER: number = 0;

        public static NOT_REQUESTFOCUS: number = 1;

        public static REQUESTFOCUS_ONCLOSE: number = 2;

        static NEXTOPEN_CARETMOVED: number = 4;

        static NEXTOPEN_INPUTVIEW: number = 8;

        static NEXTOPEN_MASK: number = 12;

        /*private*/ posKeyNext: lib.com.fujitsu.caa.CJCellPosition;

        /*private*/ posKeyPressMove: lib.com.fujitsu.caa.CJCellPosition;

        public static ACTION_NOTREGISTERED: number = -1;

        public static ACTION_SUCCEEDED: number = 0;

        static KPC2_NONE: number = 0;

        static KPC2_CTRL_DOWN: number = 1;

        static KPC2_SHIFT_DOWN: number = 2;

        static KPC2_CLOSEMOVE: number = 4;

        rectKeyReleased: com.java.Rectangle;

        notifyMouseEventConsumed: boolean;

        onQueueProcess: boolean;

        notifyMouseMotionEventConsumed: boolean;

        notifyKeyEventConsumed: boolean;

        public static RECORD_HEADER_NAME: string = "__CJSPREAD_RECORD_HEADER";

        /*private*/ posGetCell: lib.com.fujitsu.caa.CJPosition;

        static GETCELL_CREATE: number = 1;

        static GETCELL_NOCREATE: number = 0;

        popupCount: number;

        /*private*/ rectSetCurosr: com.java.Rectangle;

        static ppageuse: number = -1;

        static ppageclass: any = null;

        static availablePPage: boolean = true;

        icfailed: boolean;

        static  __static_initializer_0() {
        }

        constructor() {
            super();
            if (this.lockListeners === undefined) { this.lockListeners = null; }
            if (this.itemListener === undefined) { this.itemListener = null; }
            if (this.textListener === undefined) { this.textListener = null; }
            if (this.spreadActionListener === undefined) { this.spreadActionListener = null; }
            if (this.scrollListeners === undefined) { this.scrollListeners = null; }
            if (this.cellItemListeners === undefined) { this.cellItemListeners = null; }
            if (this.cellActionListeners === undefined) { this.cellActionListeners = null; }
            if (this.spreadExtensions === undefined) { this.spreadExtensions = null; }
            if (this.tableBorderColor === undefined) { this.tableBorderColor = null; }
            if (this.headerColor === undefined) { this.headerColor = null; }
            if (this.headerTextColor === undefined) { this.headerTextColor = null; }
            if (this.headerTableBorderColor === undefined) { this.headerTableBorderColor = null; }
            if (this.defaultDataCell === undefined) { this.defaultDataCell = null; }
            if (this.defaultHeaderCell === undefined) { this.defaultHeaderCell = null; }
            if (this.defaultFooterCell === undefined) { this.defaultFooterCell = null; }
            if (this.dn === undefined) { this.dn = null; }
            if (this.g2 === undefined) { this.g2 = null; }
            if (this.tableBorderHeight === undefined) { this.tableBorderHeight = 0; }
            if (this.tableBorderWidth === undefined) { this.tableBorderWidth = 0; }
            if (this.rows === undefined) { this.rows = 0; }
            if (this.columns === undefined) { this.columns = 0; }
            if (this.preferredRows === undefined) { this.preferredRows = 0; }
            if (this.preferredColumns === undefined) { this.preferredColumns = 0; }
            if (this.dataRows === undefined) { this.dataRows = 0; }
            if (this.dataColumns === undefined) { this.dataColumns = 0; }
            if (this.headerRows === undefined) { this.headerRows = 0; }
            if (this.headerColumns === undefined) { this.headerColumns = 0; }
            if (this.cursorRow === undefined) { this.cursorRow = 0; }
            if (this.cursorColumn === undefined) { this.cursorColumn = 0; }
            if (this.startRow === undefined) { this.startRow = 0; }
            if (this.startColumn === undefined) { this.startColumn = 0; }
            if (this.cells === undefined) { this.cells = null; }
            if (this.rowHeight === undefined) { this.rowHeight = null; }
            if (this.columnWidth === undefined) { this.columnWidth = null; }
            if (this.pointY === undefined) { this.pointY = null; }
            if (this.pointX === undefined) { this.pointX = null; }
            if (this.Hbar === undefined) { this.Hbar = null; }
            if (this.Vbar === undefined) { this.Vbar = null; }
            if (this.fullUpdate === undefined) { this.fullUpdate = false; }
            if (this.paintAll === undefined) { this.paintAll = false; }
            if (this.dragLine === undefined) { this.dragLine = false; }
            if (this.focus === undefined) { this.focus = false; }
            if (this.painted === undefined) { this.painted = false; }
            if (this.paintFlag === undefined) { this.paintFlag = false; }
            if (this.multipleMode === undefined) { this.multipleMode = false; }
            if (this.inputMode === undefined) { this.inputMode = false; }
            if (this.jumpMode === undefined) { this.jumpMode = false; }
            if (this.scrollbarMode === undefined) { this.scrollbarMode = false; }
            if (this.viewMode === undefined) { this.viewMode = false; }
            if (this.inputAreaVisible === undefined) { this.inputAreaVisible = false; }
            if (this.defaultInputArea === undefined) { this.defaultInputArea = null; }
            if (this.inputArea === undefined) { this.inputArea = null; }
            if (this.mouseType === undefined) { this.mouseType = 0; }
            if (this.mouseTypeB === undefined) { this.mouseTypeB = 0; }
            if (this.tableSize === undefined) { this.tableSize = null; }
            if (this.editPosition === undefined) { this.editPosition = null; }
            if (this.dragOk === undefined) { this.dragOk = false; }
            if (this.dragging === undefined) { this.dragging = 0; }
            if (this.dragRow === undefined) { this.dragRow = 0; }
            if (this.dragColumn === undefined) { this.dragColumn = 0; }
            if (this.dragMinY === undefined) { this.dragMinY = 0; }
            if (this.dragMinX === undefined) { this.dragMinX = 0; }
            if (this.dragMaxY === undefined) { this.dragMaxY = 0; }
            if (this.dragMaxX === undefined) { this.dragMaxX = 0; }
            if (this.mouseY === undefined) { this.mouseY = 0; }
            if (this.mouseX === undefined) { this.mouseX = 0; }
            if (this.mouseY2 === undefined) { this.mouseY2 = 0; }
            if (this.mouseX2 === undefined) { this.mouseX2 = 0; }
            if (this.autoHMoveMode === undefined) { this.autoHMoveMode = false; }
            if (this.autoVMoveMode === undefined) { this.autoVMoveMode = false; }
            if (this.autoTopLastMoveMode === undefined) { this.autoTopLastMoveMode = false; }
            if (this.enterKeyMode === undefined) { this.enterKeyMode = 0; }
            if (this.ctrlKeyMode === undefined) { this.ctrlKeyMode = false; }
            if (this.closeMoveMode === undefined) { this.closeMoveMode = 0; }
            if (this.openMoveMode === undefined) { this.openMoveMode = false; }
            if (this.mergeMode === undefined) { this.mergeMode = 0; }
            if (this.closeMoveFlag === undefined) { this.closeMoveFlag = false; }
            if (this.keyOpenMode === undefined) { this.keyOpenMode = false; }
            if (this.realCursor === undefined) { this.realCursor = false; }
            if (this.cursorRowR === undefined) { this.cursorRowR = 0; }
            if (this.cursorColumnR === undefined) { this.cursorColumnR = 0; }
            if (this.recordMode === undefined) { this.recordMode = false; }
            if (this.recordRows === undefined) { this.recordRows = 0; }
            if (this.recordCount === undefined) { this.recordCount = 0; }
            if (this.recordCells === undefined) { this.recordCells = null; }
            if (this.records === undefined) { this.records = null; }
            if (this.recordField === undefined) { this.recordField = null; }
            if (this.beginOpenInputArea === undefined) { this.beginOpenInputArea = false; }
            if (this.columnSelectableByHeader === undefined) { this.columnSelectableByHeader = false; }
            if (this.rowSelectableByHeader === undefined) { this.rowSelectableByHeader = false; }
            if (this.allSelectWhenClickCorner === undefined) { this.allSelectWhenClickCorner = false; }
            if (this.gridDragDirection === undefined) { this.gridDragDirection = 0; }
            if (this.scrollDirection === undefined) { this.scrollDirection = 0; }
            if (this.mouseEnterd === undefined) { this.mouseEnterd = 0; }
            if (this.cursorChangedX === undefined) { this.cursorChangedX = 0; }
            if (this.cursorChangedY === undefined) { this.cursorChangedY = 0; }
            if (this.allowEscapeMode === undefined) { this.allowEscapeMode = 0; }
            if (this.footerRows === undefined) { this.footerRows = 0; }
            if (this.footerColumns === undefined) { this.footerColumns = 0; }
            if (this.fixedLeft === undefined) { this.fixedLeft = 0; }
            if (this.spreadSerialVersion === undefined) { this.spreadSerialVersion = 0; }
            if (this.selectionVisible === undefined) { this.selectionVisible = false; }
            if (this.lostFocusBehavior === undefined) { this.lostFocusBehavior = 0; }
            if (this.horizontalScrollBehavior === undefined) { this.horizontalScrollBehavior = 0; }
            if (this.verticalScrollBehavior === undefined) { this.verticalScrollBehavior = 0; }
            if (this.columnWidthListener === undefined) { this.columnWidthListener = null; }
            if (this.rowHeightListener === undefined) { this.rowHeightListener = null; }
            if (this.hiddenVerticalGridByInvisibleColumn === undefined) { this.hiddenVerticalGridByInvisibleColumn = false; }
            if (this.hiddenHorizontalGridByInvisibleRow === undefined) { this.hiddenHorizontalGridByInvisibleRow = false; }
            if (this.eventDelay === undefined) { this.eventDelay = false; }
            this.NOT_DRAGGING = 0;
            this.DRAGGING_MOVEGRID = 1;
            this.DRAGGING_SELECTSTART = 2;
            this.DRAGGING_SELECTION = 3;
            if (this.cellEditListener === undefined) { this.cellEditListener = null; }
            if (this.defaultInsertMode === undefined) { this.defaultInsertMode = 0; }
            if (this.defaultOverwriteCaret === undefined) { this.defaultOverwriteCaret = 0; }
            if (this.defaultInsertCaret === undefined) { this.defaultInsertCaret = 0; }
            if (this.notSetFocusOnScrollbarPressed === undefined) { this.notSetFocusOnScrollbarPressed = false; }
            if (this.vertGridColor === undefined) { this.vertGridColor = null; }
            if (this.horzGridColor === undefined) { this.horzGridColor = null; }
            if (this.vertHeaderGridColor === undefined) { this.vertHeaderGridColor = null; }
            if (this.horzHeaderGridColor === undefined) { this.horzHeaderGridColor = null; }
            if (this.selectionBackground === undefined) { this.selectionBackground = null; }
            if (this.selectionForeground === undefined) { this.selectionForeground = null; }
            if (this.discardHiddenCell === undefined) { this.discardHiddenCell = false; }
            if (this.nodraghorz === undefined) { this.nodraghorz = null; }
            if (this.nomergeadjustvscr === undefined) { this.nomergeadjustvscr = false; }
            if (this.eventmask === undefined) { this.eventmask = 0; }
            if (this.cursorMovedEachClick === undefined) { this.cursorMovedEachClick = false; }
            if (this.cursorBehavior === undefined) { this.cursorBehavior = 0; }
            if (this.textEditKey === undefined) { this.textEditKey = null; }
            if (this.actionMap === undefined) { this.actionMap = null; }
            if (this.extendmodeBackground === undefined) { this.extendmodeBackground = null; }
            if (this.extendmodeForeground === undefined) { this.extendmodeForeground = null; }
            if (this.is142_13later === undefined) { this.is142_13later = false; }
            if (this.is150_10later === undefined) { this.is150_10later = false; }
            if (this.selectionEndMoveMode === undefined) { this.selectionEndMoveMode = 0; }
            if (this.forwardInputMethodEvent === undefined) { this.forwardInputMethodEvent = 0; }
            if (this.closeMoveListener === undefined) { this.closeMoveListener = null; }
            if (this.cellEditNotify === undefined) { this.cellEditNotify = 0; }
            if (this.defaultTransferFocus === undefined) { this.defaultTransferFocus = 0; }
            if (this.enableImq === undefined) { this.enableImq = false; }
            if (this.existRepaintQueue === undefined) { this.existRepaintQueue = false; }
            if (this.rectangle2 === undefined) { this.rectangle2 = null; }
            if (this.cursorLock === undefined) { this.cursorLock = null; }
            if (this.position2 === undefined) { this.position2 = null; }
            if (this.p_cellRect === undefined) { this.p_cellRect = null; }
            if (this.p_cellBounds === undefined) { this.p_cellBounds = null; }
            if (this.p_cellBorderless === undefined) { this.p_cellBorderless = null; }
            if (this.needrepaint === undefined) { this.needrepaint = false; }
            if (this.progressPaint === undefined) { this.progressPaint = false; }
            if (this.rectMergeCell1 === undefined) { this.rectMergeCell1 = null; }
            if (this.rectMergeCell2 === undefined) { this.rectMergeCell2 = null; }
            if (this.inprogressMousePressed === undefined) { this.inprogressMousePressed = false; }
            if (this.mousePresseFlagLock === undefined) { this.mousePresseFlagLock = null; }
            if (this.posResizable === undefined) { this.posResizable = null; }
            if (this.prevEditPos === undefined) { this.prevEditPos = null; }
            if (this.posKeyNext === undefined) { this.posKeyNext = null; }
            if (this.posKeyPressMove === undefined) { this.posKeyPressMove = null; }
            if (this.rectKeyReleased === undefined) { this.rectKeyReleased = null; }
            if (this.notifyMouseEventConsumed === undefined) { this.notifyMouseEventConsumed = false; }
            if (this.onQueueProcess === undefined) { this.onQueueProcess = false; }
            if (this.notifyMouseMotionEventConsumed === undefined) { this.notifyMouseMotionEventConsumed = false; }
            if (this.notifyKeyEventConsumed === undefined) { this.notifyKeyEventConsumed = false; }
            if (this.posGetCell === undefined) { this.posGetCell = null; }
            if (this.popupCount === undefined) { this.popupCount = 0; }
            if (this.rectSetCurosr === undefined) { this.rectSetCurosr = null; }
            if (this.icfailed === undefined) { this.icfailed = false; }
        }
    }
    CJSpread["__class"] = "lib.com.fujitsu.caa.CJSpread";

}


lib.com.fujitsu.caa.CJSpread.__static_initialize();
