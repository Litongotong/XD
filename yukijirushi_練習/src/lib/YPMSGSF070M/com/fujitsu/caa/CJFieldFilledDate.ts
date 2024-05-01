/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export class CJFieldFilledDate extends lib.com.fujitsu.caa.CJFieldFilled {
        public constructor(owner?: any, pattern?: any) {
            if (((owner != null && owner instanceof <any>com.java.Component) || owner === null) && ((typeof pattern === 'string') || pattern === null)) {
                let __args = arguments;
                super();
                if (this.pattern === undefined) { this.pattern = null; } 
                if (this.dateIndex === undefined) { this.dateIndex = null; } 
                if (this.fieldType === undefined) { this.fieldType = null; } 
                this.GREGORIAN_LAST_DAY_OF_MONTH = 31;
            } else if (((owner != null && owner instanceof <any>lib.com.fujitsu.caa.CJFieldFilledDate) || owner === null) && ((pattern != null && pattern instanceof <any>com.java.Component) || pattern === null)) {
                let __args = arguments;
                let src: any = __args[0];
                let owner: any = __args[1];
                super();
                if (this.pattern === undefined) { this.pattern = null; } 
                if (this.dateIndex === undefined) { this.dateIndex = null; } 
                if (this.fieldType === undefined) { this.fieldType = null; } 
                this.GREGORIAN_LAST_DAY_OF_MONTH = 31;
            } else if (((owner != null && owner instanceof <any>com.java.Component) || owner === null) && pattern === undefined) {
                let __args = arguments;
                super();
                if (this.pattern === undefined) { this.pattern = null; } 
                if (this.dateIndex === undefined) { this.dateIndex = null; } 
                if (this.fieldType === undefined) { this.fieldType = null; } 
                this.GREGORIAN_LAST_DAY_OF_MONTH = 31;
            } else if (((typeof owner === 'string') || owner === null) && pattern === undefined) {
                let __args = arguments;
                let pattern: any = __args[0];
                super();
                if (this.pattern === undefined) { this.pattern = null; } 
                if (this.dateIndex === undefined) { this.dateIndex = null; } 
                if (this.fieldType === undefined) { this.fieldType = null; } 
                this.GREGORIAN_LAST_DAY_OF_MONTH = 31;
            } else if (((owner != null && owner instanceof <any>lib.com.fujitsu.caa.CJFieldFilledDate) || owner === null) && pattern === undefined) {
                let __args = arguments;
                let src: any = __args[0];
                super();
                if (this.pattern === undefined) { this.pattern = null; } 
                if (this.dateIndex === undefined) { this.dateIndex = null; } 
                if (this.fieldType === undefined) { this.fieldType = null; } 
                this.GREGORIAN_LAST_DAY_OF_MONTH = 31;
            } else if (owner === undefined && pattern === undefined) {
                let __args = arguments;
                super();
                if (this.pattern === undefined) { this.pattern = null; } 
                if (this.dateIndex === undefined) { this.dateIndex = null; } 
                if (this.fieldType === undefined) { this.fieldType = null; } 
                this.GREGORIAN_LAST_DAY_OF_MONTH = 31;
            } else throw new Error('invalid overload');
        }

        copyFrom(src: CJFieldFilledDate) {
        }

        internalcopy(src: CJFieldFilledDate) {
        }

        readObject(stream: com.java.ObjectInputStream) {
        }

        dayChanged(flag: boolean) {
        }

        fieldChanged(fieldno: number, escaped: boolean) {
        }

        formatPattern(): string {
            return null;
        }

        getGregorianLastDayAtCurrentMonth(): number {
            return 0;
        }

        getGregorianLastDay(year: number, month: number): number {
            return 0;
        }

        getMaximumValue$int$boolean(fieldno: number, completion: boolean): number {
            return 0;
        }

        public getMaximumValue$int$java_lang_String_A$boolean(fieldno: number, texts: string[], completion: boolean): number {
            return 0;
        }

        public getMaximumValue(fieldno?: any, texts?: any, completion?: any): number {
            if (((typeof fieldno === 'number') || fieldno === null) && ((texts != null && texts instanceof <any>Array && (texts.length == 0 || texts[0] == null ||(typeof texts[0] === 'string'))) || texts === null) && ((typeof completion === 'boolean') || completion === null)) {
                return <any>this.getMaximumValue$int$java_lang_String_A$boolean(fieldno, texts, completion);
            } else if (((typeof fieldno === 'number') || fieldno === null) && ((typeof texts === 'boolean') || texts === null) && completion === undefined) {
                return <any>this.getMaximumValue$int$boolean(fieldno, texts);
            } else throw new Error('invalid overload');
        }

        static getPatternType(ch: string): number {
            return 0;
        }

        static getTypeIndex(ftype: number): number {
            return ftype & 255;
        }

        static getDateTimeType(ftype: number): number {
            return ftype & 65280;
        }

        static getDefaultSeparator(ftype1: number, ftype2: number): string {
            return null;
        }

        hourChanged(flag: boolean) {
        }

        public static isLeapYear(gregorianyear: number): boolean {
            if (gregorianyear % 400 === 0)return true;
            if (gregorianyear % 100 === 0)return false;
            return gregorianyear % 4 === 0;
        }

        staticLen(combined: string, index: number, staticno: number): number {
            return 1;
        }

        getStaticSeparator(staticno: number): string {
            return null;
        }

        minuteChanged(flag: boolean) {
        }

        monthChanged(flag: boolean) {
        }

        parsePattern(pattern: string) {
        }

        secondChanged(flag: boolean) {
        }

        /**
         * @deprecated Method setEnableJType is deprecated
         * @param {number} i
         * @param {number} l
         */
        public setEnableJType(i: number, l: number) {
        }

        /**
         * @deprecated Method setEnableType is deprecated
         * @param {number} i
         * @param {number} j
         */
        public setEnableType(i: number, j: number) {
        }

        /**
         * @deprecated Method setFieldCount is deprecated
         * @param {number} i
         */
        public setFieldCount(i: number) {
        }

        setInternalFieldCount(findex: number) {
        }

        setInternalMaximumValue(fieldno: number, value: number) {
        }

        setInternalMinimumValue(fieldno: number, value: number) {
        }

        /**
         * @deprecated Method setMaximumValue is deprecated
         * @param {number} i
         * @param {number} j
         */
        public setMaximumValue(i: number, j: number) {
        }

        /**
         * @deprecated Method setMinimumValue is deprecated
         * @param {number} i
         * @param {number} j
         */
        public setMinimumValue(i: number, j: number) {
        }

        public setPattern(pattern: string) {
        }

        yearChanged(flag: boolean) {
        }

        public getYearIndex(): number {
            return this.dateIndex[0];
        }

        public getMonthIndex(): number {
            return this.dateIndex[1];
        }

        public getDayIndex(): number {
            return this.dateIndex[2];
        }

        public getHourIndex(): number {
            return this.dateIndex[3];
        }

        public getMinuteIndex(): number {
            return this.dateIndex[4];
        }

        public getSecondIndex(): number {
            return this.dateIndex[5];
        }

        public getGregorianYear$(): number {
            return 0;
        }

        getValue(fieldno: number, texts: string[]): number {
            return 0;
        }

        public getGregorianYear$java_lang_String_A(texts: string[]): number {
            return -1;
        }

        public getGregorianYear(texts?: any): number {
            if (((texts != null && texts instanceof <any>Array && (texts.length == 0 || texts[0] == null ||(typeof texts[0] === 'string'))) || texts === null)) {
                return <any>this.getGregorianYear$java_lang_String_A(texts);
            } else if (texts === undefined) {
                return <any>this.getGregorianYear$();
            } else throw new Error('invalid overload');
        }

        public getMonth$(): number {
            return -1;
        }

        public getMonth$java_lang_String_A(texts: string[]): number {
            return -1;
        }

        public getMonth(texts?: any): number {
            if (((texts != null && texts instanceof <any>Array && (texts.length == 0 || texts[0] == null ||(typeof texts[0] === 'string'))) || texts === null)) {
                return <any>this.getMonth$java_lang_String_A(texts);
            } else if (texts === undefined) {
                return <any>this.getMonth$();
            } else throw new Error('invalid overload');
        }

        public getDayOfMonth(): number {
            return -1;
        }

        public getDay(): number {
            return this.getDayOfMonth();
        }

        public getHours(): number {
            return -1;
        }

        public getHour(): number {
            return this.getHours();
        }

        public getMinutes(): number {
            return -1;
        }

        public getMinute(): number {
            return this.getMinutes();
        }

        public getSeconds(): number {
            return -1;
        }

        public getSecond(): number {
            return this.getSeconds();
        }

        setInternalText(fieldno: number, text: string) {
        }

        public setText(fieldno: number, text: string) {
        }

        setInternalValue(fieldno: number, value: number) {
        }

        public setValue(fieldno: number, value: number) {
        }

        actAction(keyEvent: com.java.KeyEvent): boolean {
            return false;
        }

        public checkCombinedText(combText: string): number {
            return 0;
        }

        inspectText(fieldno: number, srctext: string, texts: string[]): number {
            return 0;
        }

        isLessThanMaxVal(fieldno: number, srctext: string, texts: string[]): boolean {
            return false;
        }

        createClipboardConverter(): lib.com.fujitsu.caa.text.CJClipboardConverter {
            return null;
        }

        static Header: string = "$Header: /CAA/ClientJ/SpreadB/Current/src/com/fujitsu/caa/CJFieldFilledDate.java 20    04/11/21 13:51 Kura $";

        static Modtime: string = "$Modtime: 04/11/20 23:29 $";

        static Workfile: string = "$Workfile: CJFieldFilledDate.java $";

        static COPYRIGHT: string = "@(#) $Revision: 20 $ Copyright (C) 1998-2004, FFC Limited.\n";

        static Revision: string; public static Revision_$LI$(): string { if (CJFieldFilledDate.Revision == null) { CJFieldFilledDate.Revision = "@(#) $Revision: 20 $ Copyright (C) 1998-2004, FFC Limited.\n".substring("@(#) $Revision: 20 $ Copyright (C) 1998-2004, FFC Limited.\n".indexOf('$'), "@(#) $Revision: 20 $ Copyright (C) 1998-2004, FFC Limited.\n".lastIndexOf('$') + 1); }  return CJFieldFilledDate.Revision; }

        static serialVersionUID: number = 6612770782044256472;

        static bName: string = "lib.com.fujitsu.caa.resources.CJMessageResource";

        static base: string = "cjfieldfilleddate";

        static nameCounter: number = 0;

        /*private*/ GREGORIAN_LAST_DAY_OF_MONTH: number;

        static ESCAPE_CHARACTER: number = -2;

        static ESCAPE_STARTPUNCTUATION: number = -1;

        static YEAR_SEPARATOR: number = 0;

        static MONTH_SEPARATOR: number = 1;

        static DAY_SEPARATOR: number = 2;

        static HOUR_SEPARATOR: number = 3;

        static MINUTE_SEPARATOR: number = 4;

        static SECOND_SEPARATOR: number = 5;

        static NUMBER_OF_SEPARATORS: number = 6;

        static SEPARATOR_TYPE_MASK: number = 255;

        static DATE_SEPARATOR: number = 256;

        static TIME_SEPARATOR: number = 512;

        static DATETIME_TYPE_MASK: number = 65280;

        static patternChars: string = "\\\'yMdHms";

        static separatorDate2Time: string = " ";

        static separatorDate: string = "/";

        static separatorTime: string = ":";

        static fieldmax: number[]; public static fieldmax_$LI$(): number[] { if (CJFieldFilledDate.fieldmax == null) { CJFieldFilledDate.fieldmax = [9999, 12, 31, 23, 59, 59]; }  return CJFieldFilledDate.fieldmax; }

        static fieldmin: number[]; public static fieldmin_$LI$(): number[] { if (CJFieldFilledDate.fieldmin == null) { CJFieldFilledDate.fieldmin = [0, 1, 1, 0, 0, 0]; }  return CJFieldFilledDate.fieldmin; }

        /*private*/ pattern: string;

        /*private*/ dateIndex: number[];

        /*private*/ fieldType: number[];
    }
    CJFieldFilledDate["__class"] = "lib.com.fujitsu.caa.CJFieldFilledDate";


    export namespace CJFieldFilledDate {

        export class FieldChangeReceiver implements lib.com.fujitsu.caa.CJFieldChangeListener, lib.com.fujitsu.caa.event.CJFieldFocusListener {
            public __parent: any;
            public fieldChanged(evt: lib.com.fujitsu.caa.CJFieldChangedEvent) {
            }

            public caretTransfered(event: lib.com.fujitsu.caa.event.CJFieldFocusEvent) {
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        FieldChangeReceiver["__class"] = "lib.com.fujitsu.caa.CJFieldFilledDate.FieldChangeReceiver";
        FieldChangeReceiver["__interfaces"] = ["lib.com.fujitsu.caa.CJFieldChangeListener","lib.com.fujitsu.caa.event.CJFieldFocusListener"];


    }

}

