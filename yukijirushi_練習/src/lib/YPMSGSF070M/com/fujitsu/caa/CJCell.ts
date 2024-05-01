/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export class CJCell {
        static __static_initialized: boolean = false;
        static __static_initialize() { if (!CJCell.__static_initialized) { CJCell.__static_initialized = true; CJCell.__static_initializer_0(); } }

        static Header: string = "$Header: /CAA/ClientJ/SpreadB/Current/src/com/fujitsu/caa/CJCell.java 108   10/10/15 17:13 Kura $";

        static Modtime: string = "$Modtime: 10/10/15 16:51 $";

        static Workfile: string = "$Workfile: CJCell.java $";

        static COPYRIGHT: string = "@(#) $Revision: 108 $ Copyright (C) 1997-2004, FFC Limited. & FUJITSU LIMITED.\n";

        static Revision: string; public static Revision_$LI$(): string { CJCell.__static_initialize(); if (CJCell.Revision == null) { CJCell.Revision = "@(#) $Revision: 108 $ Copyright (C) 1997-2004, FFC Limited. & FUJITSU LIMITED.\n".substring("@(#) $Revision: 108 $ Copyright (C) 1997-2004, FFC Limited. & FUJITSU LIMITED.\n".indexOf('$'), "@(#) $Revision: 108 $ Copyright (C) 1997-2004, FFC Limited. & FUJITSU LIMITED.\n".lastIndexOf('$') + 1); }  return CJCell.Revision; }

        static EXTENDED_ATTRIBUTE: number = 0;

        static SORT_ITEM: number = 1;

        static BORDER_COLOR: number = 2;

        static SELECTION_BACKGROUND: number = 3;

        static SELECTION_FOREGROUND: number = 4;

        static EXTENDED_BACKGROUND: number = 5;

        static EXTENDED_FOREGROUND: number = 6;

        static ERROR_BACKGROUND: number = 7;

        static ERROR_FOREGROUND: number = 8;

        static BSET1_VISIBLE: number = 0;

        static BSET1_CURSORENABLE: number = 1;

        static BSET1_REDISPLAY: number = 2;

        static BSET1_SELECTED: number = 3;

        static BSET1_SELECTABLE: number = 4;

        static BSET1_CURSOR: number = 5;

        static BSET1_EDITABLE: number = 6;

        static BSET1_HIDDEN: number = 7;

        static BSET1_AUTOTURN: number = 8;

        static BSET1_BUTTONSTATE: number = 9;

        static BSET1_BUTTONDISABLECOLOR: number = 10;

        static BSET1_SPREADIMAGE: number = 11;

        static BSET1_IMAGEDRAW: number = 12;

        static BSET1_POPUPVISIBLED: number = 13;

        static BSET1_CLIPGRAPHICS: number = 14;

        static BSET1_EXTENDEMODE: number = 15;

        static BSET1_DRAWSELECT: number = 16;

        static BSET1_PROGRESSPAINT: number = 17;

        static BSET1_SETNULLATEMPTY: number = 18;

        static BSET1_HEADERCELL: number = 19;

        static BSET1_NOMODIFYEDITKEY: number = 20;

        static BSET1_CURSORIME: number = 21;

        static BSET1_CLIPBOARDCANCOPY: number = 24;

        static BSET1_CLIPBOARDCANPASTE: number = 25;

        static BSET1_CLIPBOARDCUSTOMCOPY: number = 26;

        static BSET1_CLIPBOARDCUSTOMPASTE: number = 27;

        static BSET1_COLINFO_RESIZABLE: number = 32;

        static BSET1_COLINFO_SORTABLE: number = 33;

        static CLIPBOARDDATA_CANCOPY: number; public static CLIPBOARDDATA_CANCOPY_$LI$(): number { CJCell.__static_initialize();  return CJCell.CLIPBOARDDATA_CANCOPY; }

        static CLIPBOARDDATA_CANPASTE: number; public static CLIPBOARDDATA_CANPASTE_$LI$(): number { CJCell.__static_initialize();  return CJCell.CLIPBOARDDATA_CANPASTE; }

        static CLIPBOARDDATA_CUSTOMCOPY: number; public static CLIPBOARDDATA_CUSTOMCOPY_$LI$(): number { CJCell.__static_initialize();  return CJCell.CLIPBOARDDATA_CUSTOMCOPY; }

        static CLIPBOARDDATA_CUSTOMPASTE: number; public static CLIPBOARDDATA_CUSTOMPASTE_$LI$(): number { CJCell.__static_initialize();  return CJCell.CLIPBOARDDATA_CUSTOMPASTE; }

        static BSET1_CLIPBOARDACCESS_MASK: number; public static BSET1_CLIPBOARDACCESS_MASK_$LI$(): number { CJCell.__static_initialize();  return CJCell.BSET1_CLIPBOARDACCESS_MASK; }

        static ESET1_CLIPBOARDILLEGALSELECTION: number = 48;

        static CLIPBOARDDATA_ILLEGALSELECTION: number = 65536;

        static ESET1_CLIPBOARDSELECTIONEMPTY: number = 49;

        static CLIPBOARDDATA_SELECTIONEMPTY: number = 131072;

        static ESET1_CLIPBOARDCELLISREADONLY: number = 49;

        static CLIPBOARDDATA_CELLISREADONLY: number = 131072;

        static margin: number = 2;

        static maxBorderWidth: number = 5;

        string: string;

        background: com.java.Color;

        foreground: com.java.Color;

        errorFlag: number;

        extendStatus: number;

        inputArea: com.java.Component;

        font: com.java.Font;

        image: com.java.Image;

        object: any;

        paintcellobject: lib.com.fujitsu.caa.CJPaintCellObject;

        inputcellobject: any;

        stringcellobject: lib.com.fujitsu.caa.CJStringCellObject;

        border: lib.com.fujitsu.caa.CJCellBorder;

        borderWidth: number;

        borderType: number;

        alignmentHorizontal: number;

        alignmentVertical: number;

        imageAlignment: number;

        imageRect: com.java.Rectangle;

        component: com.java.Component;

        eachline: Array<any>;

        prevparsestr: Array<any>;

        prevwidth: number;

        linepitch: number;

        lastdrawwidth: number;

        public static INVALIDVALUE_ACCEPT: number = 0;

        public static INVALIDVALUE_DISCARD: number = 1;

        static INTERNAL_IVROUND: number = 2;

        invalidValueSettlement: number;

        lineLength: number;

        value: any[];

        static CANNOTSETCURSOR_NOTSELECTABLE: number = 1;

        static CANNOTSETCURSOR_NOTEDITABLE: number = 2;

        static CANNOTSETCURSOR_HIDDEN: number = 4;

        static CANNOTSETCURSOR_NULLRECT: number = 8;

        static CANSETCURSOR_ALWAYS: number = 0;

        static CANNOTSETCURSOR_ALWAYS: number = 16;

        cursorBehavior: number;

        minimumWidth: number;

        maximumWidth: number;

        row: number;

        column: number;

        clipboardConverter: lib.com.fujitsu.caa.text.CJClipboardConverter;

        bitSet1: number;

        insets: com.java.Insets;

        static bname: string = "lib.com.fujitsu.caa.resources.CJMessageResource";

        static serialVersionUID: number = -2818912865092356524;

        static COPY_INPUTAREA: number = 1;

        static COPY_PAINTCELLOBJECT: number = 2;

        static COPY_INPUTCELLOBJECT: number = 4;

        static COPY_STRINGCELLOBJECT: number = 8;

        static COPY_CURSOR: number = 16;

        static COPY_HIDDEN: number = 32;

        static COPY_SELECTABLE: number = 64;

        static COPY_REDISPLAY: number = 128;

        static COPY_IMAGEDRAW: number = 256;

        static COPY_CURSORENABLE: number = 512;

        static COPY_COMPONENT: number = 1024;

        static COPY_ISHEADER: number = 2048;

        static CALL_CELLCOMPONENT: number = 4096;

        static NOTCOPY_CLIPBOARDCONVERTER: number = 8192;

        lockPaintCell: any;

        /*private*/ p_paintCopy: com.java.Rectangle;

        /*private*/ p_paintBounds: com.java.Rectangle;

        /*private*/ p_paintBorderless: com.java.Rectangle;

        dimPreferred: com.java.Dimension;

        static  __static_initializer_0() {
            CJCell.CLIPBOARDDATA_CANCOPY = 16777216;
            CJCell.CLIPBOARDDATA_CANPASTE = 33554432;
            CJCell.CLIPBOARDDATA_CUSTOMCOPY = 67108864;
            CJCell.CLIPBOARDDATA_CUSTOMPASTE = 134217728;
            CJCell.BSET1_CLIPBOARDACCESS_MASK = CJCell.CLIPBOARDDATA_CANCOPY | CJCell.CLIPBOARDDATA_CANPASTE | CJCell.CLIPBOARDDATA_CUSTOMCOPY | CJCell.CLIPBOARDDATA_CUSTOMPASTE;
        }

        constructor() {
            if (this.string === undefined) { this.string = null; }
            if (this.background === undefined) { this.background = null; }
            if (this.foreground === undefined) { this.foreground = null; }
            if (this.errorFlag === undefined) { this.errorFlag = 0; }
            if (this.extendStatus === undefined) { this.extendStatus = 0; }
            if (this.inputArea === undefined) { this.inputArea = null; }
            if (this.font === undefined) { this.font = null; }
            if (this.image === undefined) { this.image = null; }
            if (this.object === undefined) { this.object = null; }
            if (this.paintcellobject === undefined) { this.paintcellobject = null; }
            if (this.inputcellobject === undefined) { this.inputcellobject = null; }
            if (this.stringcellobject === undefined) { this.stringcellobject = null; }
            if (this.border === undefined) { this.border = null; }
            if (this.borderWidth === undefined) { this.borderWidth = 0; }
            if (this.borderType === undefined) { this.borderType = 0; }
            if (this.alignmentHorizontal === undefined) { this.alignmentHorizontal = 0; }
            if (this.alignmentVertical === undefined) { this.alignmentVertical = 0; }
            if (this.imageAlignment === undefined) { this.imageAlignment = 0; }
            if (this.imageRect === undefined) { this.imageRect = null; }
            if (this.component === undefined) { this.component = null; }
            if (this.eachline === undefined) { this.eachline = null; }
            if (this.prevparsestr === undefined) { this.prevparsestr = null; }
            if (this.prevwidth === undefined) { this.prevwidth = 0; }
            if (this.linepitch === undefined) { this.linepitch = 0; }
            if (this.lastdrawwidth === undefined) { this.lastdrawwidth = 0; }
            if (this.invalidValueSettlement === undefined) { this.invalidValueSettlement = 0; }
            if (this.lineLength === undefined) { this.lineLength = 0; }
            if (this.value === undefined) { this.value = null; }
            if (this.cursorBehavior === undefined) { this.cursorBehavior = 0; }
            if (this.minimumWidth === undefined) { this.minimumWidth = 0; }
            if (this.maximumWidth === undefined) { this.maximumWidth = 0; }
            if (this.row === undefined) { this.row = 0; }
            if (this.column === undefined) { this.column = 0; }
            if (this.clipboardConverter === undefined) { this.clipboardConverter = null; }
            if (this.bitSet1 === undefined) { this.bitSet1 = 0; }
            if (this.insets === undefined) { this.insets = null; }
            if (this.lockPaintCell === undefined) { this.lockPaintCell = null; }
            if (this.p_paintCopy === undefined) { this.p_paintCopy = null; }
            if (this.p_paintBounds === undefined) { this.p_paintBounds = null; }
            if (this.p_paintBorderless === undefined) { this.p_paintBorderless = null; }
            if (this.dimPreferred === undefined) { this.dimPreferred = null; }
        }
    }
    CJCell["__class"] = "lib.com.fujitsu.caa.CJCell";

}


lib.com.fujitsu.caa.CJCell.__static_initialize();
