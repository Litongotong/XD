/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadColumnInfoProperty extends lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty {
        public constructor(baseColumnInfo?: any, name?: any, editType?: any, editflag?: any, pattern?: any, label?: any, selectableElements?: any, maxByteLength?: any, minimumWidth?: any, sortStart?: any, sortEnd?: any, buttonActionCode?: any, itemActionCode?: any, textActionCode?: any, maxIntegerDigit?: any, maxDecimalDigit?: any) {
            if (((baseColumnInfo != null && baseColumnInfo instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty) || baseColumnInfo === null) && ((typeof name === 'string') || name === null) && ((typeof editType === 'number') || editType === null) && ((typeof editflag === 'number') || editflag === null) && ((typeof pattern === 'string') || pattern === null) && ((typeof label === 'string') || label === null) && ((selectableElements != null && selectableElements instanceof <any>Array && (selectableElements.length == 0 || selectableElements[0] == null ||(selectableElements[0] != null && selectableElements[0] instanceof <any>lib.com.fujitsu.jcf.gui.JCFSelectableElement))) || selectableElements === null) && ((typeof maxByteLength === 'number') || maxByteLength === null) && ((typeof minimumWidth === 'number') || minimumWidth === null) && ((typeof sortStart === 'number') || sortStart === null) && ((typeof sortEnd === 'number') || sortEnd === null) && ((typeof buttonActionCode === 'string') || buttonActionCode === null) && ((typeof itemActionCode === 'string') || itemActionCode === null) && ((typeof textActionCode === 'string') || textActionCode === null) && ((typeof maxIntegerDigit === 'number') || maxIntegerDigit === null) && ((typeof maxDecimalDigit === 'number') || maxDecimalDigit === null)) {
                let __args = arguments;
                super(baseColumnInfo);
                if (this.editType === undefined) { this.editType = 0; } 
                if (this.editable === undefined) { this.editable = false; } 
                if (this.label === undefined) { this.label = null; } 
                if (this.selectableElements === undefined) { this.selectableElements = null; } 
                if (this.selectableElementsJavaCode === undefined) { this.selectableElementsJavaCode = null; } 
                if (this.maxByteLength === undefined) { this.maxByteLength = 0; } 
                if (this.commaEditAllowed === undefined) { this.commaEditAllowed = false; } 
                if (this.decimalpointAllowed === undefined) { this.decimalpointAllowed = false; } 
                if (this.enableInputNegativeValue === undefined) { this.enableInputNegativeValue = false; } 
                if (this.maxIntegerDigit === undefined) { this.maxIntegerDigit = 0; } 
                if (this.maxDecimalDigit === undefined) { this.maxDecimalDigit = 0; } 
                if (this.name === undefined) { this.name = null; } 
                if (this.pattern === undefined) { this.pattern = null; } 
                if (this.sortable === undefined) { this.sortable = false; } 
                if (this.sortStart === undefined) { this.sortStart = 0; } 
                if (this.sortEnd === undefined) { this.sortEnd = 0; } 
                if (this.autoIME === undefined) { this.autoIME = false; } 
                if (this.cursorIME === undefined) { this.cursorIME = false; } 
                if (this.inputMode === undefined) { this.inputMode = 0; } 
                if (this.inputAssist === undefined) { this.inputAssist = 0; } 
                if (this.inputStyle === undefined) { this.inputStyle = 0; } 
                if (this.clipboardAccess === undefined) { this.clipboardAccess = 0; } 
                if (this.minimumWidth === undefined) { this.minimumWidth = 0; } 
                if (this.buttonActionCode === undefined) { this.buttonActionCode = null; } 
                if (this.itemActionCode === undefined) { this.itemActionCode = null; } 
                if (this.textActionCode === undefined) { this.textActionCode = null; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
                if (this.defaultname === undefined) { this.defaultname = null; } 
                this.editType = 1;
                this.editable = true;
                this.label = null;
                this.selectableElements = null;
                this.selectableElementsJavaCode = null;
                this.maxByteLength = -1;
                this.commaEditAllowed = true;
                this.decimalpointAllowed = true;
                this.enableInputNegativeValue = true;
                this.maxIntegerDigit = -1;
                this.maxDecimalDigit = -1;
                this.name = null;
                this.pattern = null;
                this.sortable = false;
                this.sortStart = 0;
                this.sortEnd = -1;
                this.autoIME = false;
                this.cursorIME = false;
                this.inputMode = 0;
                this.inputAssist = 0;
                this.inputStyle = 256;
                this.minimumWidth = 0;
                this.buttonActionCode = null;
                this.itemActionCode = null;
                this.textActionCode = null;
                this.defaultname = null;
                this.name = name;
                this.editType = editType;
                this.editable = (editflag & 1) !== 0;
                this.pattern = pattern;
                this.label = label;
                this.selectableElements = selectableElements;
                this.maxByteLength = maxByteLength;
                this.commaEditAllowed = (editflag & 2) !== 0;
                this.decimalpointAllowed = (editflag & 4) !== 0;
                this.enableInputNegativeValue = (editflag & 8) !== 0;
                this.sortable = (editflag & 16) !== 0;
                this.autoIME = (editflag & 32) !== 0;
                this.cursorIME = (editflag & 64) !== 0;
                this.inputMode = this.getInputMode$long(editflag);
                this.inputAssist = this.getInputAssist$long(editflag);
                this.inputStyle = this.getInputStyle$long(editflag);
                this.clipboardAccess = this.getClipboardAccess$long(editflag);
                this.minimumWidth = minimumWidth;
                this.sortStart = sortStart;
                this.sortEnd = sortEnd;
                this.buttonActionCode = buttonActionCode;
                this.itemActionCode = itemActionCode;
                this.textActionCode = textActionCode;
                this.maxIntegerDigit = maxIntegerDigit;
                this.maxDecimalDigit = maxDecimalDigit;
            } else if (((baseColumnInfo != null && baseColumnInfo instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty) || baseColumnInfo === null) && ((typeof name === 'string') || name === null) && ((typeof editType === 'number') || editType === null) && ((typeof editflag === 'number') || editflag === null) && ((typeof pattern === 'string') || pattern === null) && ((typeof label === 'string') || label === null) && ((selectableElements != null && selectableElements instanceof <any>Array && (selectableElements.length == 0 || selectableElements[0] == null ||(selectableElements[0] != null && selectableElements[0] instanceof <any>lib.com.fujitsu.jcf.gui.JCFSelectableElement))) || selectableElements === null) && ((typeof maxByteLength === 'number') || maxByteLength === null) && ((typeof minimumWidth === 'number') || minimumWidth === null) && ((typeof sortStart === 'number') || sortStart === null) && ((typeof sortEnd === 'number') || sortEnd === null) && ((typeof buttonActionCode === 'string') || buttonActionCode === null) && ((typeof itemActionCode === 'string') || itemActionCode === null) && ((typeof textActionCode === 'string') || textActionCode === null) && maxIntegerDigit === undefined && maxDecimalDigit === undefined) {
                let __args = arguments;
                super(baseColumnInfo);
                if (this.editType === undefined) { this.editType = 0; } 
                if (this.editable === undefined) { this.editable = false; } 
                if (this.label === undefined) { this.label = null; } 
                if (this.selectableElements === undefined) { this.selectableElements = null; } 
                if (this.selectableElementsJavaCode === undefined) { this.selectableElementsJavaCode = null; } 
                if (this.maxByteLength === undefined) { this.maxByteLength = 0; } 
                if (this.commaEditAllowed === undefined) { this.commaEditAllowed = false; } 
                if (this.decimalpointAllowed === undefined) { this.decimalpointAllowed = false; } 
                if (this.enableInputNegativeValue === undefined) { this.enableInputNegativeValue = false; } 
                if (this.maxIntegerDigit === undefined) { this.maxIntegerDigit = 0; } 
                if (this.maxDecimalDigit === undefined) { this.maxDecimalDigit = 0; } 
                if (this.name === undefined) { this.name = null; } 
                if (this.pattern === undefined) { this.pattern = null; } 
                if (this.sortable === undefined) { this.sortable = false; } 
                if (this.sortStart === undefined) { this.sortStart = 0; } 
                if (this.sortEnd === undefined) { this.sortEnd = 0; } 
                if (this.autoIME === undefined) { this.autoIME = false; } 
                if (this.cursorIME === undefined) { this.cursorIME = false; } 
                if (this.inputMode === undefined) { this.inputMode = 0; } 
                if (this.inputAssist === undefined) { this.inputAssist = 0; } 
                if (this.inputStyle === undefined) { this.inputStyle = 0; } 
                if (this.clipboardAccess === undefined) { this.clipboardAccess = 0; } 
                if (this.minimumWidth === undefined) { this.minimumWidth = 0; } 
                if (this.buttonActionCode === undefined) { this.buttonActionCode = null; } 
                if (this.itemActionCode === undefined) { this.itemActionCode = null; } 
                if (this.textActionCode === undefined) { this.textActionCode = null; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
                if (this.defaultname === undefined) { this.defaultname = null; } 
                this.editType = 1;
                this.editable = true;
                this.label = null;
                this.selectableElements = null;
                this.selectableElementsJavaCode = null;
                this.maxByteLength = -1;
                this.commaEditAllowed = true;
                this.decimalpointAllowed = true;
                this.enableInputNegativeValue = true;
                this.maxIntegerDigit = -1;
                this.maxDecimalDigit = -1;
                this.name = null;
                this.pattern = null;
                this.sortable = false;
                this.sortStart = 0;
                this.sortEnd = -1;
                this.autoIME = false;
                this.cursorIME = false;
                this.inputMode = 0;
                this.inputAssist = 0;
                this.inputStyle = 256;
                this.minimumWidth = 0;
                this.buttonActionCode = null;
                this.itemActionCode = null;
                this.textActionCode = null;
                this.defaultname = null;
                this.name = name;
                this.editType = editType;
                this.editable = (editflag & 1) !== 0;
                this.pattern = pattern;
                this.label = label;
                this.selectableElements = selectableElements;
                this.maxByteLength = maxByteLength;
                this.commaEditAllowed = (editflag & 2) !== 0;
                this.decimalpointAllowed = (editflag & 4) !== 0;
                this.enableInputNegativeValue = (editflag & 8) !== 0;
                this.sortable = (editflag & 16) !== 0;
                this.autoIME = (editflag & 32) !== 0;
                this.cursorIME = (editflag & 64) !== 0;
                this.inputMode = this.getInputMode$long(editflag);
                this.inputAssist = this.getInputAssist$long(editflag);
                this.inputStyle = this.getInputStyle$long(editflag);
                this.clipboardAccess = this.getClipboardAccess$long(editflag);
                this.minimumWidth = minimumWidth;
                this.sortStart = sortStart;
                this.sortEnd = sortEnd;
                this.buttonActionCode = buttonActionCode;
                this.itemActionCode = itemActionCode;
                this.textActionCode = textActionCode;
            } else if (((baseColumnInfo != null && baseColumnInfo instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty) || baseColumnInfo === null) && ((typeof name === 'number') || name === null) && ((typeof editType === 'boolean') || editType === null) && ((typeof editflag === 'string') || editflag === null) && ((pattern != null && pattern instanceof <any>Array && (pattern.length == 0 || pattern[0] == null ||(pattern[0] != null && pattern[0] instanceof <any>lib.com.fujitsu.jcf.gui.JCFSelectableElement))) || pattern === null) && ((typeof label === 'number') || label === null) && ((typeof selectableElements === 'boolean') || selectableElements === null) && ((typeof maxByteLength === 'boolean') || maxByteLength === null) && ((typeof minimumWidth === 'boolean') || minimumWidth === null) && sortStart === undefined && sortEnd === undefined && buttonActionCode === undefined && itemActionCode === undefined && textActionCode === undefined && maxIntegerDigit === undefined && maxDecimalDigit === undefined) {
                let __args = arguments;
                let editType: any = __args[1];
                let editable: any = __args[2];
                let label: any = __args[3];
                let selectableElements: any = __args[4];
                let maxByteLength: any = __args[5];
                let commaEditAllowed: any = __args[6];
                let decimalpointAllowed: any = __args[7];
                let enableInputNegativeValue: any = __args[8];
                super();
                if (this.editType === undefined) { this.editType = 0; } 
                if (this.editable === undefined) { this.editable = false; } 
                if (this.label === undefined) { this.label = null; } 
                if (this.selectableElements === undefined) { this.selectableElements = null; } 
                if (this.selectableElementsJavaCode === undefined) { this.selectableElementsJavaCode = null; } 
                if (this.maxByteLength === undefined) { this.maxByteLength = 0; } 
                if (this.commaEditAllowed === undefined) { this.commaEditAllowed = false; } 
                if (this.decimalpointAllowed === undefined) { this.decimalpointAllowed = false; } 
                if (this.enableInputNegativeValue === undefined) { this.enableInputNegativeValue = false; } 
                if (this.maxIntegerDigit === undefined) { this.maxIntegerDigit = 0; } 
                if (this.maxDecimalDigit === undefined) { this.maxDecimalDigit = 0; } 
                if (this.name === undefined) { this.name = null; } 
                if (this.pattern === undefined) { this.pattern = null; } 
                if (this.sortable === undefined) { this.sortable = false; } 
                if (this.sortStart === undefined) { this.sortStart = 0; } 
                if (this.sortEnd === undefined) { this.sortEnd = 0; } 
                if (this.autoIME === undefined) { this.autoIME = false; } 
                if (this.cursorIME === undefined) { this.cursorIME = false; } 
                if (this.inputMode === undefined) { this.inputMode = 0; } 
                if (this.inputAssist === undefined) { this.inputAssist = 0; } 
                if (this.inputStyle === undefined) { this.inputStyle = 0; } 
                if (this.clipboardAccess === undefined) { this.clipboardAccess = 0; } 
                if (this.minimumWidth === undefined) { this.minimumWidth = 0; } 
                if (this.buttonActionCode === undefined) { this.buttonActionCode = null; } 
                if (this.itemActionCode === undefined) { this.itemActionCode = null; } 
                if (this.textActionCode === undefined) { this.textActionCode = null; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
                if (this.defaultname === undefined) { this.defaultname = null; } 
                this.editType = 1;
                this.editable = true;
                this.label = null;
                this.selectableElements = null;
                this.selectableElementsJavaCode = null;
                this.maxByteLength = -1;
                this.commaEditAllowed = true;
                this.decimalpointAllowed = true;
                this.enableInputNegativeValue = true;
                this.maxIntegerDigit = -1;
                this.maxDecimalDigit = -1;
                this.name = null;
                this.pattern = null;
                this.sortable = false;
                this.sortStart = 0;
                this.sortEnd = -1;
                this.autoIME = false;
                this.cursorIME = false;
                this.inputMode = 0;
                this.inputAssist = 0;
                this.inputStyle = 256;
                this.minimumWidth = 0;
                this.buttonActionCode = null;
                this.itemActionCode = null;
                this.textActionCode = null;
                this.defaultname = null;
                this.editType = editType;
                this.editable = editable;
                this.label = label;
                this.selectableElements = selectableElements;
                this.maxByteLength = maxByteLength;
                this.commaEditAllowed = commaEditAllowed;
                this.decimalpointAllowed = decimalpointAllowed;
                this.enableInputNegativeValue = enableInputNegativeValue;
            } else if (((baseColumnInfo != null && baseColumnInfo instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty) || baseColumnInfo === null) && name === undefined && editType === undefined && editflag === undefined && pattern === undefined && label === undefined && selectableElements === undefined && maxByteLength === undefined && minimumWidth === undefined && sortStart === undefined && sortEnd === undefined && buttonActionCode === undefined && itemActionCode === undefined && textActionCode === undefined && maxIntegerDigit === undefined && maxDecimalDigit === undefined) {
                let __args = arguments;
                let columnInfo: any = __args[0];
                super(columnInfo.getHeaderColumnInfoProperty());
                if (this.editType === undefined) { this.editType = 0; } 
                if (this.editable === undefined) { this.editable = false; } 
                if (this.label === undefined) { this.label = null; } 
                if (this.selectableElements === undefined) { this.selectableElements = null; } 
                if (this.selectableElementsJavaCode === undefined) { this.selectableElementsJavaCode = null; } 
                if (this.maxByteLength === undefined) { this.maxByteLength = 0; } 
                if (this.commaEditAllowed === undefined) { this.commaEditAllowed = false; } 
                if (this.decimalpointAllowed === undefined) { this.decimalpointAllowed = false; } 
                if (this.enableInputNegativeValue === undefined) { this.enableInputNegativeValue = false; } 
                if (this.maxIntegerDigit === undefined) { this.maxIntegerDigit = 0; } 
                if (this.maxDecimalDigit === undefined) { this.maxDecimalDigit = 0; } 
                if (this.name === undefined) { this.name = null; } 
                if (this.pattern === undefined) { this.pattern = null; } 
                if (this.sortable === undefined) { this.sortable = false; } 
                if (this.sortStart === undefined) { this.sortStart = 0; } 
                if (this.sortEnd === undefined) { this.sortEnd = 0; } 
                if (this.autoIME === undefined) { this.autoIME = false; } 
                if (this.cursorIME === undefined) { this.cursorIME = false; } 
                if (this.inputMode === undefined) { this.inputMode = 0; } 
                if (this.inputAssist === undefined) { this.inputAssist = 0; } 
                if (this.inputStyle === undefined) { this.inputStyle = 0; } 
                if (this.clipboardAccess === undefined) { this.clipboardAccess = 0; } 
                if (this.minimumWidth === undefined) { this.minimumWidth = 0; } 
                if (this.buttonActionCode === undefined) { this.buttonActionCode = null; } 
                if (this.itemActionCode === undefined) { this.itemActionCode = null; } 
                if (this.textActionCode === undefined) { this.textActionCode = null; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
                if (this.defaultname === undefined) { this.defaultname = null; } 
                this.editType = 1;
                this.editable = true;
                this.label = null;
                this.selectableElements = null;
                this.selectableElementsJavaCode = null;
                this.maxByteLength = -1;
                this.commaEditAllowed = true;
                this.decimalpointAllowed = true;
                this.enableInputNegativeValue = true;
                this.maxIntegerDigit = -1;
                this.maxDecimalDigit = -1;
                this.name = null;
                this.pattern = null;
                this.sortable = false;
                this.sortStart = 0;
                this.sortEnd = -1;
                this.autoIME = false;
                this.cursorIME = false;
                this.inputMode = 0;
                this.inputAssist = 0;
                this.inputStyle = 256;
                this.minimumWidth = 0;
                this.buttonActionCode = null;
                this.itemActionCode = null;
                this.textActionCode = null;
                this.defaultname = null;
                this.name = columnInfo.getName();
                this.editType = columnInfo.getEditType();
                this.editable = columnInfo.isEditable();
                this.pattern = columnInfo.getPattern();
                this.label = columnInfo.getLabel();
                this.selectableElements = columnInfo.getSelectableElements();
                this.maxByteLength = columnInfo.getMaxByteLength();
                this.minimumWidth = columnInfo.getMinimumWidth();
                this.commaEditAllowed = columnInfo.isCommaEditAllowed();
                this.decimalpointAllowed = columnInfo.isDecimalpointAllowed();
                this.maxIntegerDigit = columnInfo.getMaxIntegerDigit();
                this.maxDecimalDigit = columnInfo.getMaxDecimalDigit();
                this.enableInputNegativeValue = columnInfo.isEnableInputNegativeValue();
                this.sortable = columnInfo.isSortable();
                this.sortStart = columnInfo.getSortStart();
                this.sortEnd = columnInfo.getSortEnd();
                this.autoIME = columnInfo.isAutoIME();
                this.cursorIME = columnInfo.isCursorIME();
                this.inputMode = columnInfo.getInputMode$();
                this.inputAssist = columnInfo.getInputAssist$();
                this.inputStyle = columnInfo.getInputStyle$();
                this.clipboardAccess = columnInfo.getClipboardAccess$();
                this.buttonActionCode = columnInfo.getButtonActionCode();
                this.itemActionCode = columnInfo.getItemActionCode();
                this.textActionCode = columnInfo.getTextActionCode();
            } else if (baseColumnInfo === undefined && name === undefined && editType === undefined && editflag === undefined && pattern === undefined && label === undefined && selectableElements === undefined && maxByteLength === undefined && minimumWidth === undefined && sortStart === undefined && sortEnd === undefined && buttonActionCode === undefined && itemActionCode === undefined && textActionCode === undefined && maxIntegerDigit === undefined && maxDecimalDigit === undefined) {
                let __args = arguments;
                super();
                if (this.editType === undefined) { this.editType = 0; } 
                if (this.editable === undefined) { this.editable = false; } 
                if (this.label === undefined) { this.label = null; } 
                if (this.selectableElements === undefined) { this.selectableElements = null; } 
                if (this.selectableElementsJavaCode === undefined) { this.selectableElementsJavaCode = null; } 
                if (this.maxByteLength === undefined) { this.maxByteLength = 0; } 
                if (this.commaEditAllowed === undefined) { this.commaEditAllowed = false; } 
                if (this.decimalpointAllowed === undefined) { this.decimalpointAllowed = false; } 
                if (this.enableInputNegativeValue === undefined) { this.enableInputNegativeValue = false; } 
                if (this.maxIntegerDigit === undefined) { this.maxIntegerDigit = 0; } 
                if (this.maxDecimalDigit === undefined) { this.maxDecimalDigit = 0; } 
                if (this.name === undefined) { this.name = null; } 
                if (this.pattern === undefined) { this.pattern = null; } 
                if (this.sortable === undefined) { this.sortable = false; } 
                if (this.sortStart === undefined) { this.sortStart = 0; } 
                if (this.sortEnd === undefined) { this.sortEnd = 0; } 
                if (this.autoIME === undefined) { this.autoIME = false; } 
                if (this.cursorIME === undefined) { this.cursorIME = false; } 
                if (this.inputMode === undefined) { this.inputMode = 0; } 
                if (this.inputAssist === undefined) { this.inputAssist = 0; } 
                if (this.inputStyle === undefined) { this.inputStyle = 0; } 
                if (this.clipboardAccess === undefined) { this.clipboardAccess = 0; } 
                if (this.minimumWidth === undefined) { this.minimumWidth = 0; } 
                if (this.buttonActionCode === undefined) { this.buttonActionCode = null; } 
                if (this.itemActionCode === undefined) { this.itemActionCode = null; } 
                if (this.textActionCode === undefined) { this.textActionCode = null; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
                if (this.defaultname === undefined) { this.defaultname = null; } 
                this.editType = 1;
                this.editable = true;
                this.label = null;
                this.selectableElements = null;
                this.selectableElementsJavaCode = null;
                this.maxByteLength = -1;
                this.commaEditAllowed = true;
                this.decimalpointAllowed = true;
                this.enableInputNegativeValue = true;
                this.maxIntegerDigit = -1;
                this.maxDecimalDigit = -1;
                this.name = null;
                this.pattern = null;
                this.sortable = false;
                this.sortStart = 0;
                this.sortEnd = -1;
                this.autoIME = false;
                this.cursorIME = false;
                this.inputMode = 0;
                this.inputAssist = 0;
                this.inputStyle = 256;
                this.minimumWidth = 0;
                this.buttonActionCode = null;
                this.itemActionCode = null;
                this.textActionCode = null;
                this.defaultname = null;
            } else throw new Error('invalid overload');
        }

        public getInputMode$long(editflag: number): number {
            let inputMode: number = 0;
            if ((editflag & 128) !== 0)inputMode |= 1;
            if ((editflag & 256) !== 0)inputMode |= 2;
            if ((editflag & 512) !== 0)inputMode |= 4;
            if ((editflag & 1024) !== 0)inputMode |= 16;
            if ((editflag & 2048) !== 0)inputMode |= 32;
            if ((editflag & 4096) !== 0)inputMode |= 64;
            if ((editflag & 8192) !== 0)inputMode |= 65536;
            if ((editflag & 16384) !== 0)inputMode |= 131072;
            return inputMode;
        }

        public getInputMode(editflag?: any): number {
            if (((typeof editflag === 'number') || editflag === null)) {
                return <any>this.getInputMode$long(editflag);
            } else if (editflag === undefined) {
                return <any>this.getInputMode$();
            } else throw new Error('invalid overload');
        }

        public getInputAssist$long(editflag: number): number {
            let inputAssist: number = 0;
            if ((editflag & 32768) !== 0)inputAssist |= 16777216;
            return inputAssist;
        }

        public getInputAssist(editflag?: any): number {
            if (((typeof editflag === 'number') || editflag === null)) {
                return <any>this.getInputAssist$long(editflag);
            } else if (editflag === undefined) {
                return <any>this.getInputAssist$();
            } else throw new Error('invalid overload');
        }

        public getInputStyle$long(editflag: number): number {
            let inputStyle: number = 0;
            if ((editflag & 65536) !== 0)inputStyle |= 256;
            if ((editflag & 131072) !== 0)inputStyle |= 512;
            return inputStyle;
        }

        public getInputStyle(editflag?: any): number {
            if (((typeof editflag === 'number') || editflag === null)) {
                return <any>this.getInputStyle$long(editflag);
            } else if (editflag === undefined) {
                return <any>this.getInputStyle$();
            } else throw new Error('invalid overload');
        }

        public getClipboardAccess$long(editflag: number): number {
            return 0;
        }

        public getClipboardAccess(editflag?: any): number {
            if (((typeof editflag === 'number') || editflag === null)) {
                return <any>this.getClipboardAccess$long(editflag);
            } else if (editflag === undefined) {
                return <any>this.getClipboardAccess$();
            } else throw new Error('invalid overload');
        }

        public getJavaInitializationString$(): string {
            return null;
        }

        public getJavaInitializationString$java_lang_StringBuffer(buf: { str: string, toString: Function }): { str: string, toString: Function } {
            return null;
        }

        public getJavaInitializationString(buf?: any): any {
            if (((buf != null && (buf instanceof Object)) || buf === null)) {
                return <any>this.getJavaInitializationString$java_lang_StringBuffer(buf);
            } else if (buf === undefined) {
                return <any>this.getJavaInitializationString$();
            } else throw new Error('invalid overload');
        }

        /*private*/ toEditFlagInitializer(buf: { str: string, toString: Function }): { str: string, toString: Function } {
            return null;
        }

        /*private*/ toAppendInputModeInitializer(buf: { str: string, toString: Function }): { str: string, toString: Function } {
            return null;
        }

        /*private*/ toAppendInputAssistInitializer(buf: { str: string, toString: Function }): { str: string, toString: Function } {
            return null;
        }

        /*private*/ toAppendInputStyleInitializer(buf: { str: string, toString: Function }): { str: string, toString: Function } {
            return null;
        }

        /*private*/ toAppendClipboardInitializer(buf: { str: string, toString: Function }): { str: string, toString: Function } {
            return null;
        }

        public getEditType(): number {
            return this.editType;
        }

        public setEditType$int(editType: number) {
            this.editType = editType;
        }

        public getEditTypeString(): string {
            return this.getStringFromValueArray$int_A$int$java_lang_String_A(JCFSpreadColumnInfoProperty.editTypeValues_$LI$(), this.editType, JCFSpreadColumnInfoProperty.getEditTypeParamsString());
        }

        public setEditType$java_lang_String(editType: string) {
            let eType: number = JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A$int(JCFSpreadColumnInfoProperty.getEditTypeParamsString(), editType, JCFSpreadColumnInfoProperty.editTypeValues_$LI$(), -1);
            if (eType === -1)eType = JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A(JCFSpreadColumnInfoProperty.editTypeString_$LI$(), editType, JCFSpreadColumnInfoProperty.editTypeValues_$LI$());
            this.editType = eType;
        }

        public setEditType(editType?: any) {
            if (((typeof editType === 'string') || editType === null)) {
                return <any>this.setEditType$java_lang_String(editType);
            } else if (((typeof editType === 'number') || editType === null)) {
                return <any>this.setEditType$int(editType);
            } else throw new Error('invalid overload');
        }

        public static getEditTypeParamsString(): string[] {
            return null;
        }

        public static getEditType(editType: string): number {
            let eType: number = JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A$int(JCFSpreadColumnInfoProperty.getEditTypeParamsString(), editType, JCFSpreadColumnInfoProperty.editTypeValues_$LI$(), -1);
            if (eType === -1)eType = JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A(JCFSpreadColumnInfoProperty.editTypeString_$LI$(), editType, JCFSpreadColumnInfoProperty.editTypeValues_$LI$());
            return eType;
        }

        /*private*/ toEditTypeInitializer(buf: { str: string, toString: Function }): string {
            const code: string = this.getStringFromValueArray$int_A$int$java_lang_String_A$java_lang_String(JCFSpreadColumnInfoProperty.editTypeValues_$LI$(), this.editType, JCFSpreadColumnInfoProperty.editTypeKeyStrings_$LI$(), "lib.com.fujitsu.jcf.gui.JCFSpread.STRING");
            if (buf != null)/* append */(sb => { sb.str += <any>code; return sb; })(buf);
            return code;
        }

        public isEditable(): boolean {
            return this.editable;
        }

        public setEditable(editable: boolean) {
            this.editable = editable;
        }

        public getLabel(): string {
            return this.label;
        }

        public setLabel(label: string) {
            this.label = label;
        }

        public getSelectableElements(): lib.com.fujitsu.jcf.gui.JCFSelectableElement[] {
            return this.selectableElements;
        }

        public setSelectableElements(selectableElements: lib.com.fujitsu.jcf.gui.JCFSelectableElement[]) {
            this.selectableElements = selectableElements;
        }

        public getSelectableElementsJavaCode(): string {
            return this.selectableElementsJavaCode;
        }

        public setSelectableElementsJavaCode(selectableElementsJavaCode: string) {
            this.selectableElementsJavaCode = selectableElementsJavaCode;
        }

        public getMaxByteLength(): number {
            return this.maxByteLength;
        }

        public setMaxByteLength(maxByteLength: number) {
            this.maxByteLength = maxByteLength;
        }

        public isCommaEditAllowed(): boolean {
            return this.commaEditAllowed;
        }

        public setCommaEditAllowed(commaEditAllowed: boolean) {
            this.commaEditAllowed = commaEditAllowed;
        }

        public isDecimalpointAllowed(): boolean {
            return this.decimalpointAllowed;
        }

        public setDecimalpointAllowed(decimalpointAllowed: boolean) {
            this.decimalpointAllowed = decimalpointAllowed;
        }

        public isEnableInputNegativeValue(): boolean {
            return this.enableInputNegativeValue;
        }

        public setEnableInputNegativeValue(enableInputNegativeValue: boolean) {
            this.enableInputNegativeValue = enableInputNegativeValue;
        }

        public getMaxIntegerDigit(): number {
            return this.maxIntegerDigit;
        }

        public setMaxIntegerDigit(integerDigit: number) {
            if (integerDigit === 0)this.maxIntegerDigit = -1; else this.maxIntegerDigit = integerDigit;
        }

        public getMaxDecimalDigit(): number {
            return this.maxDecimalDigit;
        }

        public setMaxDecimalDigit(decimalDigit: number) {
            if (decimalDigit === 0)this.maxDecimalDigit = -1; else this.maxDecimalDigit = decimalDigit;
        }

        public getName(): string {
            return this.name;
        }

        public setName(name: string) {
            this.name = name;
        }

        public getClipboardAccess$(): number {
            return 0;
        }

        public setClipboardAccess(access: number) {
            this.clipboardAccess = access;
        }

        public getPattern(): string {
            return this.pattern;
        }

        public setPattern(pattern: string) {
            this.pattern = pattern;
        }

        public getMinimumWidth(): number {
            return this.minimumWidth;
        }

        static getDatePattern(): string[] {
            return null;
        }

        public setMinimumWidth(width: number) {
            this.minimumWidth = width;
        }

        public isSortable(): boolean {
            return this.sortable;
        }

        public setSortable(sortable: boolean) {
            this.sortable = sortable;
        }

        public getSortStart(): number {
            return this.sortStart;
        }

        public setSortStart(start: number) {
            this.sortStart = start;
        }

        public getSortEnd(): number {
            return this.sortEnd;
        }

        public setSortEnd(end: number) {
            this.sortEnd = end;
        }

        public isAutoIME(): boolean {
            return this.autoIME;
        }

        public setAutoIME(enable: boolean) {
            this.autoIME = enable;
        }

        public isCursorIME(): boolean {
            return this.cursorIME;
        }

        public setCursorIME(enable: boolean) {
            this.cursorIME = enable;
        }

        public getInputMode$(): number {
            return this.inputMode;
        }

        public setInputMode$int(mode: number) {
            this.inputMode = mode;
        }

        public getInputModeString(): string {
            return this.getStringFromValueArray$int_A$int$java_lang_String_A(JCFSpreadColumnInfoProperty.inputModeValues_$LI$(), this.inputMode, JCFSpreadColumnInfoProperty.getInputModeParamsString());
        }

        public setInputMode$java_lang_String(inputMode: string) {
            const iMode: number = JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A$int(JCFSpreadColumnInfoProperty.getInputModeParamsString(), inputMode, JCFSpreadColumnInfoProperty.inputModeValues_$LI$(), 0);
            this.inputMode = iMode;
        }

        public setInputMode(inputMode?: any) {
            if (((typeof inputMode === 'string') || inputMode === null)) {
                return <any>this.setInputMode$java_lang_String(inputMode);
            } else if (((typeof inputMode === 'number') || inputMode === null)) {
                return <any>this.setInputMode$int(inputMode);
            } else throw new Error('invalid overload');
        }

        public static getInputModeParamsString(): string[] {
            return null;
        }

        public static getInputMode(inputMode: string): number {
            const iMode: number = JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A$int(JCFSpreadColumnInfoProperty.getInputModeParamsString(), inputMode, JCFSpreadColumnInfoProperty.inputModeValues_$LI$(), 0);
            return iMode;
        }

        public getInputAssist$(): number {
            return this.inputAssist;
        }

        public setInputAssist(assist: number) {
            this.inputAssist = assist;
        }

        public getInputStyle$(): number {
            return 256;
        }

        public setInputStyle(style: number) {
            this.inputStyle = style;
        }

        public getButtonActionCode(): string {
            return this.buttonActionCode;
        }

        public setButtonActionCode(code: string) {
            this.buttonActionCode = code;
        }

        public getItemActionCode(): string {
            return this.itemActionCode;
        }

        public setItemActionCode(code: string) {
            this.itemActionCode = code;
        }

        public getTextActionCode(): string {
            return this.textActionCode;
        }

        public setTextActionCode(code: string) {
            this.textActionCode = code;
        }

        public getInputArea(): com.java.Component {
            return this.inputArea;
        }

        public setInputArea(inputArea: com.java.Component) {
        }

        public getRegistName(): string {
            if (this.name == null || this.name.length === 0)return this.defaultname; else return this.name;
        }

        public getDefaultName(): string {
            return this.defaultname;
        }

        public setDefaultName(defname: string) {
            this.defaultname = defname;
        }

        public load$com_fujitsu_jcf_gui_JCFSpread$int(spread: lib.com.fujitsu.jcf.gui.JCFSpread, column: number) {
        }

        public load(spread?: any, column?: any) {
            if (((spread != null && spread instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpread) || spread === null) && ((typeof column === 'number') || column === null)) {
                return <any>this.load$com_fujitsu_jcf_gui_JCFSpread$int(spread, column);
            } else if (((spread != null && spread instanceof <any>lib.com.fujitsu.caa.CJCell) || spread === null) && column === undefined) {
                return <any>this.load$com_fujitsu_caa_CJCell(spread);
            } else throw new Error('invalid overload');
        }

        store$com_fujitsu_jcf_gui_JCFSpread$int(spread: lib.com.fujitsu.jcf.gui.JCFSpread, column: number) {
        }

        public store$com_fujitsu_jcf_gui_JCFSpread$java_lang_String(spread: lib.com.fujitsu.jcf.gui.JCFSpread, column: string) {
        }

        public store(spread?: any, column?: any) {
            if (((spread != null && spread instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpread) || spread === null) && ((typeof column === 'string') || column === null)) {
                return <any>this.store$com_fujitsu_jcf_gui_JCFSpread$java_lang_String(spread, column);
            } else if (((spread != null && spread instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpread) || spread === null) && ((typeof column === 'number') || column === null)) {
                return <any>this.store$com_fujitsu_jcf_gui_JCFSpread$int(spread, column);
            } else if (((spread != null && spread instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadColumnData) || spread === null) && column === undefined) {
                return <any>this.store$com_fujitsu_jcf_gui_JCFSpreadColumnData(spread);
            } else throw new Error('invalid overload');
        }

        store$com_fujitsu_jcf_gui_JCFSpreadColumnData(coldata: lib.com.fujitsu.jcf.gui.JCFSpreadColumnData) {
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadColumnInfoProperty.java 27    09/02/25 13:00 Kura $";

        static Modtime: string = "$Modtime: 09/02/25 13:03 $";

        static Workfile: string = "$Workfile: JCFSpreadColumnInfoProperty.java $";

        static Revision: string = "$Revision: 27 $";

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFSpreadColumnInfoProperty";

        static serialVersionUID: number = 7195011937290089100;

        static LOG_CLASS_NAME: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty";

        static logstr_null: string = "";

        static STR_STRING: string = "lib.com.fujitsu.jcf.gui.JCFSpread.STRING";

        static STR_NUMBER: string = "lib.com.fujitsu.jcf.gui.JCFSpread.NUMBER";

        static STR_DATE: string = "lib.com.fujitsu.jcf.gui.JCFSpread.DATE";

        static STR_PUSHBUTTON: string = "lib.com.fujitsu.jcf.gui.JCFSpread.PUSHBUTTON";

        static STR_TOGGLEBUTTON: string = "lib.com.fujitsu.jcf.gui.JCFSpread.TOGGLEBUTTON";

        static STR_CHECKBOX: string = "lib.com.fujitsu.jcf.gui.JCFSpread.CHECKBOX";

        static STR_COMBOBOX: string = "lib.com.fujitsu.jcf.gui.JCFSpread.COMBOBOX";

        static STR_COMBOBOX2: string = "lib.com.fujitsu.jcf.gui.JCFSpread.COMBOBOX2";

        static editTypeString: string[]; public static editTypeString_$LI$(): string[] { if (JCFSpreadColumnInfoProperty.editTypeString == null) { JCFSpreadColumnInfoProperty.editTypeString = ["String", "Number", "Date", "Pushbutton", "Togglebutton", "Checkbox", "Combobox", "Combobox2"]; }  return JCFSpreadColumnInfoProperty.editTypeString; }

        static editTypeValues: number[]; public static editTypeValues_$LI$(): number[] { if (JCFSpreadColumnInfoProperty.editTypeValues == null) { JCFSpreadColumnInfoProperty.editTypeValues = [1, 2, 3, 8, 10, 7, 5, 11]; }  return JCFSpreadColumnInfoProperty.editTypeValues; }

        static editTypeKeyStrings: string[]; public static editTypeKeyStrings_$LI$(): string[] { if (JCFSpreadColumnInfoProperty.editTypeKeyStrings == null) { JCFSpreadColumnInfoProperty.editTypeKeyStrings = ["lib.com.fujitsu.jcf.gui.JCFSpread.STRING", "lib.com.fujitsu.jcf.gui.JCFSpread.NUMBER", "lib.com.fujitsu.jcf.gui.JCFSpread.DATE", "lib.com.fujitsu.jcf.gui.JCFSpread.PUSHBUTTON", "lib.com.fujitsu.jcf.gui.JCFSpread.TOGGLEBUTTON", "lib.com.fujitsu.jcf.gui.JCFSpread.CHECKBOX", "lib.com.fujitsu.jcf.gui.JCFSpread.COMBOBOX", "lib.com.fujitsu.jcf.gui.JCFSpread.COMBOBOX2"]; }  return JCFSpreadColumnInfoProperty.editTypeKeyStrings; }

        static datePatterns: string[]; public static datePatterns_$LI$(): string[] { if (JCFSpreadColumnInfoProperty.datePatterns == null) { JCFSpreadColumnInfoProperty.datePatterns = ["yyyy/MM/dd", "hh:mm:ss"]; }  return JCFSpreadColumnInfoProperty.datePatterns; }

        static DATETIME_PATTERNS: string = "lib.com.fujitsu.jcf.gui.JCFSpread.DateTimePatterns";

        static STR_MODE_NATIVE: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.MODE_NATIVE";

        static STR_MODE_ZEN_ALPHNUM: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_ALPHNUM";

        static STR_MODE_HAN_ALPHNUM: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.HAN_ALPHNUM";

        static STR_MODE_ZEN_KATAKANA: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_KATAKANA";

        static STR_MODE_HAN_KATAKANA: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.HAN_KATAKANA";

        static STR_MODE_ZEN_HIRAGANA: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_HIRAGANA";

        static STR_MODE_SYSTEM_DEFAULT: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.SYSTEM_DEFAULT";

        static STR_MODE_ZEN_ALPHNUM_NONE: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_ALPHNUM_NONE";

        static STR_MODE_HAN_ALPHNUM_NONE: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.HAN_ALPHNUM_NONE";

        static STR_MODE_ZEN_KATAKANA_NONE: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_KATAKANA_NONE";

        static STR_MODE_HAN_KATAKANA_NONE: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.HAN_KATAKANA_NONE";

        static STR_MODE_ZEN_HIRAGANA_NONE: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_HIRAGANA_NONE";

        static STR_MODE_ZEN_ALPHNUM_CONVERT: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_ALPHNUM_CONVERT";

        static STR_MODE_HAN_ALPHNUM_CONVERT: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.HAN_ALPHNUM_CONVERT";

        static STR_MODE_ZEN_KATAKANA_CONVERT: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_KATAKANA_CONVERT";

        static STR_MODE_HAN_KATAKANA_CONVERT: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.HAN_KATAKANA_CONVERT";

        static STR_MODE_ZEN_HIRAGANA_CONVERT: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_HIRAGANA_CONVERT";

        static inputModeValues: number[]; public static inputModeValues_$LI$(): number[] { if (JCFSpreadColumnInfoProperty.inputModeValues == null) { JCFSpreadColumnInfoProperty.inputModeValues = [64, 33, 17, 36, 20, 34, 0, 65569, 65553, 65572, 65556, 65570, 131105, 131089, 131108, 131092, 131106]; }  return JCFSpreadColumnInfoProperty.inputModeValues; }

        static inputModeKeyStrings: string[]; public static inputModeKeyStrings_$LI$(): string[] { if (JCFSpreadColumnInfoProperty.inputModeKeyStrings == null) { JCFSpreadColumnInfoProperty.inputModeKeyStrings = ["lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.MODE_NATIVE", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_ALPHNUM", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.HAN_ALPHNUM", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_KATAKANA", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.HAN_KATAKANA", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_HIRAGANA", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.SYSTEM_DEFAULT", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_ALPHNUM_NONE", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.HAN_ALPHNUM_NONE", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_KATAKANA_NONE", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.HAN_KATAKANA_NONE", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_HIRAGANA_NONE", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_ALPHNUM_CONVERT", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.HAN_ALPHNUM_CONVERT", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_KATAKANA_CONVERT", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.HAN_KATAKANA_CONVERT", "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.ZEN_HIRAGANA_CONVERT"]; }  return JCFSpreadColumnInfoProperty.inputModeKeyStrings; }

        editType: number;

        editable: boolean;

        label: string;

        selectableElements: lib.com.fujitsu.jcf.gui.JCFSelectableElement[];

        selectableElementsJavaCode: string;

        maxByteLength: number;

        commaEditAllowed: boolean;

        decimalpointAllowed: boolean;

        enableInputNegativeValue: boolean;

        maxIntegerDigit: number;

        maxDecimalDigit: number;

        name: string;

        pattern: string;

        sortable: boolean;

        sortStart: number;

        sortEnd: number;

        autoIME: boolean;

        cursorIME: boolean;

        inputMode: number;

        inputAssist: number;

        inputStyle: number;

        clipboardAccess: number;

        minimumWidth: number;

        buttonActionCode: string;

        itemActionCode: string;

        textActionCode: string;

        inputArea: com.java.Component;

        defaultname: string;

        public static COL_EDITABLE: number = 1;

        public static COL_UNEDITABLE: number = 0;

        public static COL_COMMAEDITALLOWED: number = 2;

        public static COL_DECIMALPOINTALLOWED: number = 4;

        public static COL_ENABLEINPUTNEGATIVEVALUE: number = 8;

        public static COL_SORTABLE: number = 16;

        public static COL_AUTOIME: number = 32;

        public static COL_IMEONCURSOR: number = 64;

        public static COL_IMEMODE_ALPHANUMERIC: number = 128;

        public static COL_IMEMODE_HIRAGANA: number = 256;

        public static COL_IMEMODE_KATAKANA: number = 512;

        public static COL_IMEMODE_HANKAKU: number = 1024;

        public static COL_IMEMODE_ZENKAKU: number = 2048;

        public static COL_IMEMODE_NATIVE: number = 4096;

        public static COL_IMEMODE_SENTENCE_NONE: number = 8192;

        public static COL_IMEMODE_SENTENCE_CONVERT: number = 16384;

        public static COL_IMEASSIST_NONE: number = 0;

        public static COL_IMEASSIST_TYPICAL: number = 32768;

        public static COL_IMESTYLE_OVER_THE_SPOT: number = 65536;

        public static COL_IMESTYLE_DEFAULT_POSITION: number = 131072;

        public static COL_CLIPBOARD_CANCOPY: number = 262144;

        public static COL_CLIPBOARD_CANPASTE: number = 524288;

        static JCODE_COL_EDITABLE: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_EDITABLE";

        static JCODE_COL_UNEDITABLE: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_UNEDITABLE";

        static JAPPEND_COL_COMMAEDITALLOWED: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_COMMAEDITALLOWED";

        static JAPPEND_COL_DECIMALPOINTALLOWED: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_DECIMALPOINTALLOWED";

        static JAPPEND_COL_ENABLEINPUTNEGATIVEVALUE: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_ENABLEINPUTNEGATIVEVALUE";

        static JAPPEND_COL_SORTABLE: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_SORTABLE";

        static JAPPEND_COL_AUTOIME: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_AUTOIME";

        static JAPPEND_COL_IMEONCURSOR: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_IMEONCURSOR";

        static JAPPEND_COL_IMEMODE_ALPHANUMERIC: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_IMEMODE_ALPHANUMERIC";

        static JAPPEND_COL_IMEMODE_HIRAGANA: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_IMEMODE_HIRAGANA";

        static JAPPEND_COL_IMEMODE_KATAKANA: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_IMEMODE_KATAKANA";

        static JAPPEND_COL_IMEMODE_HANKAKU: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_IMEMODE_HANKAKU";

        static JAPPEND_COL_IMEMODE_ZENKAKU: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_IMEMODE_ZENKAKU";

        static JAPPEND_COL_IMEMODE_NATIVE: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_IMEMODE_NATIVE";

        static JAPPEND_COL_IMEMODE_SENTENCE_NONE: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_IMEMODE_SENTENCE_NONE";

        static JAPPEND_COL_IMEMODE_SENTENCE_CONVERT: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_IMEMODE_SENTENCE_CONVERT";

        static JAPPEND_COL_IMEASSIST_NONE: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_IMEASSIST_NONE";

        static JAPPEND_COL_IMEASSIST_TYPICAL: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_IMEASSIST_TYPICAL";

        static JAPPEND_COL_IMESTYLE_OVER_THE_SPOT: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_IMESTYLE_OVER_THE_SPOT";

        static JAPPEND_COL_IMESTYLE_DEFAULT_POSITION: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_IMESTYLE_DEFAULT_POSITION";

        static JAPPEND_COL_CLIPBOARD_CANCOPY: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANCOPY";

        static JAPPEND_COL_CLIPBOARD_CANPASTE: string = "| lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty.COL_CLIPBOARD_CANPASTE";
    }
    JCFSpreadColumnInfoProperty["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty";

}

