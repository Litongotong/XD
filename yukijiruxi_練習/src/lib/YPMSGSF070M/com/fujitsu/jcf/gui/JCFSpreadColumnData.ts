/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadColumnData extends lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnData {
        public constructor() {
            super();
            if (this.editType === undefined) { this.editType = 0; }
            if (this.editable === undefined) { this.editable = false; }
            if (this.maxByteLength === undefined) { this.maxByteLength = 0; }
            if (this.label === undefined) { this.label = null; }
            if (this.decimalpointAllowed === undefined) { this.decimalpointAllowed = false; }
            if (this.enableInputNegativeValue === undefined) { this.enableInputNegativeValue = false; }
            if (this.commaEditAllowed === undefined) { this.commaEditAllowed = false; }
            if (this.items === undefined) { this.items = null; }
            if (this.initialItemIndex === undefined) { this.initialItemIndex = 0; }
            if (this.name === undefined) { this.name = null; }
            if (this.pattern === undefined) { this.pattern = null; }
            if (this.maxIntegerDigit === undefined) { this.maxIntegerDigit = 0; }
            if (this.maxDecimalDigit === undefined) { this.maxDecimalDigit = 0; }
            if (this.columnHidden === undefined) { this.columnHidden = false; }
            if (this.intList === undefined) { this.intList = null; }
            this.editType = 1;
            this.editable = true;
            this.maxByteLength = -1;
            this.label = null;
            this.decimalpointAllowed = true;
            this.enableInputNegativeValue = true;
            this.commaEditAllowed = true;
            this.items = null;
            this.initialItemIndex = -1;
            this.name = null;
            this.pattern = null;
            this.maxIntegerDigit = -1;
            this.maxDecimalDigit = -1;
            this.columnHidden = false;
            this.intList = new com.java.ArrayList();
        }

        getEditType(): number {
            return this.editType;
        }

        setEditType(type: number) {
            this.editType = type;
        }

        isEditable(): boolean {
            return this.editable;
        }

        setEditable(editable: boolean) {
            this.editable = editable;
        }

        getItems(): lib.com.fujitsu.jcf.gui.JCFSelectableElement[] {
            return this.items;
        }

        setItems(items: lib.com.fujitsu.jcf.gui.JCFSelectableElement[]) {
            this.items = items;
        }

        getLabel(): string {
            return this.label;
        }

        setLabel(label: string) {
            this.label = label;
        }

        getInitialItemIndex(): number {
            return this.initialItemIndex;
        }

        setInitialItemIndex(index: number) {
            this.initialItemIndex = index;
        }

        isDecimalpointAllowed(): boolean {
            return this.decimalpointAllowed;
        }

        setDecimalpointAllowed(newValue: boolean) {
            this.decimalpointAllowed = newValue;
        }

        isEnableInputNegativeValue(): boolean {
            return this.enableInputNegativeValue;
        }

        setEnableInputNegativeValue(newValue: boolean) {
            this.enableInputNegativeValue = newValue;
        }

        isCommaEditAllowed(): boolean {
            return this.commaEditAllowed;
        }

        setCommaEditAllowed(newValue: boolean) {
            this.commaEditAllowed = newValue;
        }

        getMaxByteLength(): number {
            return this.maxByteLength;
        }

        setMaxByteLength(newValue: number) {
            this.maxByteLength = newValue;
        }

        getName(): string {
            return this.name;
        }

        setName(name: string) {
            this.name = name;
        }

        getPattern(): string {
            return this.pattern;
        }

        setPattern(pattern: string) {
            this.pattern = pattern;
        }

        getMaxIntegerDigit(): number {
            return this.maxIntegerDigit;
        }

        setMaxIntegerDigit(integerDigit: number) {
            this.maxIntegerDigit = integerDigit;
        }

        getMaxDecimalDigit(): number {
            return this.maxDecimalDigit;
        }

        public setMaxDecimalDigit(decimalDigit: number) {
            this.maxDecimalDigit = decimalDigit;
        }

        /*private*/ getInteger(value: number): number {
            return value;
        }

        getValue(cellData: lib.com.fujitsu.jcf.gui.JCFSpreadCellData): any {
            return null;
        }

        setValue(cellData: lib.com.fujitsu.jcf.gui.JCFSpreadCellData, value: any) {
        }

        load(spread: lib.com.fujitsu.jcf.gui.JCFSpread, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, column: string, copy: number) {
        }

        store(spread: lib.com.fujitsu.jcf.gui.JCFSpread, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, column: string, copy: number) {
        }

        public isColumnVisible(): boolean {
            return !this.columnHidden;
        }

        setColumnVisible(visible: boolean) {
            if (visible)this.columnHidden = false; else this.columnHidden = true;
        }

        /*private*/ readObject(stream: any) {
            this.intList = new com.java.ArrayList();
            try {
            } catch(e) {
            }
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadColumnData.java 11    09/02/25 12:58 Kura $";

        static Modtime: string = "$Modtime: 09/02/24 18:45 $";

        static Workfile: string = "$Workfile: JCFSpreadColumnData.java $";

        static Revision: string = "$Revision: 11 $";

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static __com_fujitsu_jcf_gui_JCFSpreadColumnData_CLASS_NAME: string = "JCFSpreadColumnData";

        static serialVersionUID: number = -7581647316994405560;

        editType: number;

        editable: boolean;

        maxByteLength: number;

        label: string;

        decimalpointAllowed: boolean;

        enableInputNegativeValue: boolean;

        commaEditAllowed: boolean;

        items: lib.com.fujitsu.jcf.gui.JCFSelectableElement[];

        initialItemIndex: number;

        name: string;

        pattern: string;

        maxIntegerDigit: number;

        maxDecimalDigit: number;

        columnHidden: boolean;

        intList: com.java.ArrayList;
    }
    JCFSpreadColumnData["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnData";

}

