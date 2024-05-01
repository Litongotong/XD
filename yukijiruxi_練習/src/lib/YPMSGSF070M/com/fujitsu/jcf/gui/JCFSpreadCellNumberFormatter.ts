/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadCellNumberFormatter {
        public constructor() {
            if (this.pattern === undefined) { this.pattern = null; }
            if (this.commaEdit === undefined) { this.commaEdit = 0; }
            if (this.colMaxIntegerDigit === undefined) { this.colMaxIntegerDigit = 0; }
            if (this.colMaxDecimalDigit === undefined) { this.colMaxDecimalDigit = 0; }
            if (this.roundingMode === undefined) { this.roundingMode = 0; }
            if (this.lineInspector === undefined) { this.lineInspector = null; }
            if (this.innnerListener === undefined) { this.innnerListener = null; }
        }

        public getPattern(): string {
            return this.pattern;
        }

        public setPattern(pattern: string) {
        }

        static isCommaEditAllowed(flag: number): boolean {
            return (flag & 1) !== 0;
        }

        public isCommaEditAllowed(): boolean {
            return JCFSpreadCellNumberFormatter.isCommaEditAllowed(this.commaEdit);
        }

        public setCommaEditAllowed(allowed: boolean) {
            if (allowed)this.commaEdit |= 1; else this.commaEdit &= -2;
        }

        static isDecimalPointEditAllowed(flag: number): boolean {
            return (flag & 2) !== 0;
        }

        public isDecimalPointEditAllowed(): boolean {
            return JCFSpreadCellNumberFormatter.isDecimalPointEditAllowed(this.commaEdit);
        }

        public setDecimalPointEditAllowed(allowed: boolean) {
            if (allowed)this.commaEdit |= 2; else this.commaEdit &= -3;
        }

        static isZeroFill(flag: number): boolean {
            return (flag & 4) !== 0;
        }

        public isZeroFill(): boolean {
            return JCFSpreadCellNumberFormatter.isZeroFill(this.commaEdit);
        }

        public setZeroFill(filled: boolean) {
            if (filled)this.commaEdit |= 4; else this.commaEdit &= -5;
        }

        public getColumnMaxIntegerDigit(): number {
            return this.colMaxIntegerDigit;
        }

        public setColumnMaxIntegerDigit(digit: number) {
            this.colMaxIntegerDigit = digit;
        }

        public getColumnMaxDecimalDigit(): number {
            return this.colMaxDecimalDigit;
        }

        public setColumnMaxDecimalDigit(digit: number) {
            this.colMaxDecimalDigit = digit;
        }

        public static insertNumberSeparator$int$java_lang_String(commaedit: number, value: string): string {
            return JCFSpreadCellNumberFormatter.insertNumberSeparator$int$int$java_lang_String(commaedit, -1, value);
        }

        public static insertNumberSeparator$int$int$java_lang_String(commaedit: number, maxDecimalDigit: number, value: string): string {
            return null;
        }

        public static insertNumberSeparator(commaedit?: any, maxDecimalDigit?: any, value?: any): string {
            if (((typeof commaedit === 'number') || commaedit === null) && ((typeof maxDecimalDigit === 'number') || maxDecimalDigit === null) && ((typeof value === 'string') || value === null)) {
                return <any>lib.com.fujitsu.jcf.gui.JCFSpreadCellNumberFormatter.insertNumberSeparator$int$int$java_lang_String(commaedit, maxDecimalDigit, value);
            } else if (((typeof commaedit === 'number') || commaedit === null) && ((typeof maxDecimalDigit === 'string') || maxDecimalDigit === null) && value === undefined) {
                return <any>lib.com.fujitsu.jcf.gui.JCFSpreadCellNumberFormatter.insertNumberSeparator$int$java_lang_String(commaedit, maxDecimalDigit);
            } else throw new Error('invalid overload');
        }

        getLineInspector(): lib.com.fujitsu.caa.text.CJLineInspector {
            return null;
        }

        getKeyListener(): com.java.KeyListener {
            return null;
        }

        getTextListener(): com.java.TextListener {
            return null;
        }

        public getCombinedText(): string {
            return null;
        }

        public setCombinedText(combText: string) {
        }

        static fillRight(from: string, c: string, len: number): string {
            return lib.com.fujitsu.jcf.gui.JCFSpreadData.fillRight(from, c, len);
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadCellNumberFormatter.java 21    09/02/25 15:07 Kura $";

        static Modtime: string = "$Modtime: 09/02/25 14:39 $";

        static Workfile: string = "$Workfile: JCFSpreadCellNumberFormatter.java $";

        static Revision: string = "$Revision: 21 $";

        static serialVersionUID: number = -4859463191601904357;

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFSpreadCellNumberFormatter";

        public static DISABLED_COMMA_EDIT: number = 0;

        public static ENABLED_COMMA_EDIT: number = 1;

        public static DISABLED_DECIMALPOINT_EDIT: number = 0;

        public static ENABLED_DECIMALPOINT_EDIT: number = 2;

        public static DISABLED_ZEROFILL: number = 0;

        public static ENABLED_ZEROFILL: number = 4;

        pattern: string;

        commaEdit: number;

        colMaxIntegerDigit: number;

        colMaxDecimalDigit: number;

        roundingMode: number;

        lineInspector: lib.com.fujitsu.caa.text.CJLineInspector;

        innnerListener: JCFSpreadCellNumberFormatter.InnerFieldListener;
    }
    JCFSpreadCellNumberFormatter["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadCellNumberFormatter";


    export namespace JCFSpreadCellNumberFormatter {

        export class InnerInspector {
            public __parent: any;
            public inspectInsert(field: com.java.Component, pos: lib.com.fujitsu.caa.CJPosition, keyChar: string, keyEvent: com.java.AWTEvent): number {
                return -1;
            }

            public inspectAction(field: com.java.Component, action: com.java.ActionEvent): number {
                return -1;
            }

            public static CLASS_VERSION: string = "V2L10";

            public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

            public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        InnerInspector["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadCellNumberFormatter.InnerInspector";


        export class InnerFieldListener extends com.java.KeyAdapter {
            public __parent: any;
            getKeyAction(field: lib.com.fujitsu.caa.CJField, evt: com.java.KeyEvent): number {
                return 0;
            }

            public keyPressed(evt: com.java.KeyEvent) {
            }

            public textValueChanged(e: com.java.TextEvent) {
            }

            public static CLASS_VERSION: string = "V2L10";

            public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

            public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

            textEditKey: lib.com.fujitsu.caa.CJTextEditKey;

            selectionStart: number;

            selectionEnd: number;

            constructor(__parent: any) {
                super();
                this.__parent = __parent;
                if (this.textEditKey === undefined) { this.textEditKey = null; }
                if (this.selectionStart === undefined) { this.selectionStart = 0; }
                if (this.selectionEnd === undefined) { this.selectionEnd = 0; }
            }
        }
        InnerFieldListener["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadCellNumberFormatter.InnerFieldListener";

    }

}

