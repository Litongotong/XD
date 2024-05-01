/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export class CJFieldNumericalValue extends lib.com.fujitsu.caa.CJField implements lib.com.fujitsu.caa.CJThresholdable {
        public constructor(value?: any, columns?: any, formatPattern?: any) {
            if (((typeof value === 'number') || value === null) && ((typeof columns === 'number') || columns === null) && ((typeof formatPattern === 'string') || formatPattern === null)) {
                let __args = arguments;
                super();
                if (this.equalBackground === undefined) { this.equalBackground = null; } 
                if (this.equalForeground === undefined) { this.equalForeground = null; } 
                if (this.greaterBackground === undefined) { this.greaterBackground = null; } 
                if (this.greaterForeground === undefined) { this.greaterForeground = null; } 
                if (this.lessBackground === undefined) { this.lessBackground = null; } 
                if (this.lessForeground === undefined) { this.lessForeground = null; } 
                if (this.outputFormat === undefined) { this.outputFormat = null; } 
                if (this.maximumValue === undefined) { this.maximumValue = 0; } 
                if (this.minimumValue === undefined) { this.minimumValue = 0; } 
                if (this.threshold === undefined) { this.threshold = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.integerDigit === undefined) { this.integerDigit = 0; } 
                if (this.decimalDigit === undefined) { this.decimalDigit = 0; } 
            } else if (((typeof value === 'number') || value === null) && ((typeof columns === 'number') || columns === null) && ((formatPattern != null && formatPattern instanceof <any>com.java.NumberFormat) || formatPattern === null)) {
                let __args = arguments;
                let numberFormat: any = __args[2];
                super();
                if (this.equalBackground === undefined) { this.equalBackground = null; } 
                if (this.equalForeground === undefined) { this.equalForeground = null; } 
                if (this.greaterBackground === undefined) { this.greaterBackground = null; } 
                if (this.greaterForeground === undefined) { this.greaterForeground = null; } 
                if (this.lessBackground === undefined) { this.lessBackground = null; } 
                if (this.lessForeground === undefined) { this.lessForeground = null; } 
                if (this.outputFormat === undefined) { this.outputFormat = null; } 
                if (this.maximumValue === undefined) { this.maximumValue = 0; } 
                if (this.minimumValue === undefined) { this.minimumValue = 0; } 
                if (this.threshold === undefined) { this.threshold = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.integerDigit === undefined) { this.integerDigit = 0; } 
                if (this.decimalDigit === undefined) { this.decimalDigit = 0; } 
            } else if (((value != null && value instanceof <any>lib.com.fujitsu.caa.CJFieldNumericalValue) || value === null) && ((columns != null && columns instanceof <any>com.java.Component) || columns === null) && formatPattern === undefined) {
                let __args = arguments;
                let src: any = __args[0];
                let owner: any = __args[1];
                super();
                if (this.equalBackground === undefined) { this.equalBackground = null; } 
                if (this.equalForeground === undefined) { this.equalForeground = null; } 
                if (this.greaterBackground === undefined) { this.greaterBackground = null; } 
                if (this.greaterForeground === undefined) { this.greaterForeground = null; } 
                if (this.lessBackground === undefined) { this.lessBackground = null; } 
                if (this.lessForeground === undefined) { this.lessForeground = null; } 
                if (this.outputFormat === undefined) { this.outputFormat = null; } 
                if (this.maximumValue === undefined) { this.maximumValue = 0; } 
                if (this.minimumValue === undefined) { this.minimumValue = 0; } 
                if (this.threshold === undefined) { this.threshold = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.integerDigit === undefined) { this.integerDigit = 0; } 
                if (this.decimalDigit === undefined) { this.decimalDigit = 0; } 
            } else if (((typeof value === 'number') || value === null) && ((typeof columns === 'string') || columns === null) && formatPattern === undefined) {
                let __args = arguments;
                let formatPattern: any = __args[1];
                super();
                if (this.equalBackground === undefined) { this.equalBackground = null; } 
                if (this.equalForeground === undefined) { this.equalForeground = null; } 
                if (this.greaterBackground === undefined) { this.greaterBackground = null; } 
                if (this.greaterForeground === undefined) { this.greaterForeground = null; } 
                if (this.lessBackground === undefined) { this.lessBackground = null; } 
                if (this.lessForeground === undefined) { this.lessForeground = null; } 
                if (this.outputFormat === undefined) { this.outputFormat = null; } 
                if (this.maximumValue === undefined) { this.maximumValue = 0; } 
                if (this.minimumValue === undefined) { this.minimumValue = 0; } 
                if (this.threshold === undefined) { this.threshold = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.integerDigit === undefined) { this.integerDigit = 0; } 
                if (this.decimalDigit === undefined) { this.decimalDigit = 0; } 
            } else if (((typeof value === 'number') || value === null) && ((columns != null && columns instanceof <any>com.java.NumberFormat) || columns === null) && formatPattern === undefined) {
                let __args = arguments;
                let numberFormat: any = __args[1];
                super();
                if (this.equalBackground === undefined) { this.equalBackground = null; } 
                if (this.equalForeground === undefined) { this.equalForeground = null; } 
                if (this.greaterBackground === undefined) { this.greaterBackground = null; } 
                if (this.greaterForeground === undefined) { this.greaterForeground = null; } 
                if (this.lessBackground === undefined) { this.lessBackground = null; } 
                if (this.lessForeground === undefined) { this.lessForeground = null; } 
                if (this.outputFormat === undefined) { this.outputFormat = null; } 
                if (this.maximumValue === undefined) { this.maximumValue = 0; } 
                if (this.minimumValue === undefined) { this.minimumValue = 0; } 
                if (this.threshold === undefined) { this.threshold = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.integerDigit === undefined) { this.integerDigit = 0; } 
                if (this.decimalDigit === undefined) { this.decimalDigit = 0; } 
            } else if (((typeof value === 'number') || value === null) && ((typeof columns === 'number') || columns === null) && formatPattern === undefined) {
                let __args = arguments;
                super();
                if (this.equalBackground === undefined) { this.equalBackground = null; } 
                if (this.equalForeground === undefined) { this.equalForeground = null; } 
                if (this.greaterBackground === undefined) { this.greaterBackground = null; } 
                if (this.greaterForeground === undefined) { this.greaterForeground = null; } 
                if (this.lessBackground === undefined) { this.lessBackground = null; } 
                if (this.lessForeground === undefined) { this.lessForeground = null; } 
                if (this.outputFormat === undefined) { this.outputFormat = null; } 
                if (this.maximumValue === undefined) { this.maximumValue = 0; } 
                if (this.minimumValue === undefined) { this.minimumValue = 0; } 
                if (this.threshold === undefined) { this.threshold = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.integerDigit === undefined) { this.integerDigit = 0; } 
                if (this.decimalDigit === undefined) { this.decimalDigit = 0; } 
            } else if (((value != null && value instanceof <any>com.java.Component) || value === null) && columns === undefined && formatPattern === undefined) {
                let __args = arguments;
                let owner: any = __args[0];
                super();
                if (this.equalBackground === undefined) { this.equalBackground = null; } 
                if (this.equalForeground === undefined) { this.equalForeground = null; } 
                if (this.greaterBackground === undefined) { this.greaterBackground = null; } 
                if (this.greaterForeground === undefined) { this.greaterForeground = null; } 
                if (this.lessBackground === undefined) { this.lessBackground = null; } 
                if (this.lessForeground === undefined) { this.lessForeground = null; } 
                if (this.outputFormat === undefined) { this.outputFormat = null; } 
                if (this.maximumValue === undefined) { this.maximumValue = 0; } 
                if (this.minimumValue === undefined) { this.minimumValue = 0; } 
                if (this.threshold === undefined) { this.threshold = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.integerDigit === undefined) { this.integerDigit = 0; } 
                if (this.decimalDigit === undefined) { this.decimalDigit = 0; } 
            } else if (((typeof value === 'string') || value === null) && columns === undefined && formatPattern === undefined) {
                let __args = arguments;
                let formatPattern: any = __args[0];
                super();
                if (this.equalBackground === undefined) { this.equalBackground = null; } 
                if (this.equalForeground === undefined) { this.equalForeground = null; } 
                if (this.greaterBackground === undefined) { this.greaterBackground = null; } 
                if (this.greaterForeground === undefined) { this.greaterForeground = null; } 
                if (this.lessBackground === undefined) { this.lessBackground = null; } 
                if (this.lessForeground === undefined) { this.lessForeground = null; } 
                if (this.outputFormat === undefined) { this.outputFormat = null; } 
                if (this.maximumValue === undefined) { this.maximumValue = 0; } 
                if (this.minimumValue === undefined) { this.minimumValue = 0; } 
                if (this.threshold === undefined) { this.threshold = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.integerDigit === undefined) { this.integerDigit = 0; } 
                if (this.decimalDigit === undefined) { this.decimalDigit = 0; } 
            } else if (((value != null && value instanceof <any>com.java.NumberFormat) || value === null) && columns === undefined && formatPattern === undefined) {
                let __args = arguments;
                let numberFormat: any = __args[0];
                super();
                if (this.equalBackground === undefined) { this.equalBackground = null; } 
                if (this.equalForeground === undefined) { this.equalForeground = null; } 
                if (this.greaterBackground === undefined) { this.greaterBackground = null; } 
                if (this.greaterForeground === undefined) { this.greaterForeground = null; } 
                if (this.lessBackground === undefined) { this.lessBackground = null; } 
                if (this.lessForeground === undefined) { this.lessForeground = null; } 
                if (this.outputFormat === undefined) { this.outputFormat = null; } 
                if (this.maximumValue === undefined) { this.maximumValue = 0; } 
                if (this.minimumValue === undefined) { this.minimumValue = 0; } 
                if (this.threshold === undefined) { this.threshold = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.integerDigit === undefined) { this.integerDigit = 0; } 
                if (this.decimalDigit === undefined) { this.decimalDigit = 0; } 
            } else if (((value != null && value instanceof <any>lib.com.fujitsu.caa.CJFieldNumericalValue) || value === null) && columns === undefined && formatPattern === undefined) {
                let __args = arguments;
                let src: any = __args[0];
                super();
                if (this.equalBackground === undefined) { this.equalBackground = null; } 
                if (this.equalForeground === undefined) { this.equalForeground = null; } 
                if (this.greaterBackground === undefined) { this.greaterBackground = null; } 
                if (this.greaterForeground === undefined) { this.greaterForeground = null; } 
                if (this.lessBackground === undefined) { this.lessBackground = null; } 
                if (this.lessForeground === undefined) { this.lessForeground = null; } 
                if (this.outputFormat === undefined) { this.outputFormat = null; } 
                if (this.maximumValue === undefined) { this.maximumValue = 0; } 
                if (this.minimumValue === undefined) { this.minimumValue = 0; } 
                if (this.threshold === undefined) { this.threshold = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.integerDigit === undefined) { this.integerDigit = 0; } 
                if (this.decimalDigit === undefined) { this.decimalDigit = 0; } 
            } else if (((typeof value === 'number') || value === null) && columns === undefined && formatPattern === undefined) {
                let __args = arguments;
                super();
                if (this.equalBackground === undefined) { this.equalBackground = null; } 
                if (this.equalForeground === undefined) { this.equalForeground = null; } 
                if (this.greaterBackground === undefined) { this.greaterBackground = null; } 
                if (this.greaterForeground === undefined) { this.greaterForeground = null; } 
                if (this.lessBackground === undefined) { this.lessBackground = null; } 
                if (this.lessForeground === undefined) { this.lessForeground = null; } 
                if (this.outputFormat === undefined) { this.outputFormat = null; } 
                if (this.maximumValue === undefined) { this.maximumValue = 0; } 
                if (this.minimumValue === undefined) { this.minimumValue = 0; } 
                if (this.threshold === undefined) { this.threshold = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.integerDigit === undefined) { this.integerDigit = 0; } 
                if (this.decimalDigit === undefined) { this.decimalDigit = 0; } 
            } else if (value === undefined && columns === undefined && formatPattern === undefined) {
                let __args = arguments;
                super();
                if (this.equalBackground === undefined) { this.equalBackground = null; } 
                if (this.equalForeground === undefined) { this.equalForeground = null; } 
                if (this.greaterBackground === undefined) { this.greaterBackground = null; } 
                if (this.greaterForeground === undefined) { this.greaterForeground = null; } 
                if (this.lessBackground === undefined) { this.lessBackground = null; } 
                if (this.lessForeground === undefined) { this.lessForeground = null; } 
                if (this.outputFormat === undefined) { this.outputFormat = null; } 
                if (this.maximumValue === undefined) { this.maximumValue = 0; } 
                if (this.minimumValue === undefined) { this.minimumValue = 0; } 
                if (this.threshold === undefined) { this.threshold = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.integerDigit === undefined) { this.integerDigit = 0; } 
                if (this.decimalDigit === undefined) { this.decimalDigit = 0; } 
            } else throw new Error('invalid overload');
        }

        public copyFrom$com_fujitsu_caa_CJFieldNumericalValue(src: CJFieldNumericalValue) {
        }

        public copyFrom(src?: any) {
            if (((src != null && src instanceof <any>lib.com.fujitsu.caa.CJFieldNumericalValue) || src === null)) {
                return <any>this.copyFrom$com_fujitsu_caa_CJFieldNumericalValue(src);
            } else if (((src != null && src instanceof <any>lib.com.fujitsu.caa.CJField) || src === null)) {
                super.copyFrom(src);
            } else throw new Error('invalid overload');
        }

        public internalcopy$com_fujitsu_caa_CJFieldNumericalValue(src: CJFieldNumericalValue) {
        }

        public internalcopy(src?: any) {
            if (((src != null && src instanceof <any>lib.com.fujitsu.caa.CJFieldNumericalValue) || src === null)) {
                return <any>this.internalcopy$com_fujitsu_caa_CJFieldNumericalValue(src);
            } else if (((src != null && src instanceof <any>lib.com.fujitsu.caa.CJField) || src === null)) {
                super.internalcopy(src);
            } else throw new Error('invalid overload');
        }

        /*private*/ __com_fujitsu_caa_CJFieldNumericalValue_readObject(stream: com.java.ObjectInputStream) {
        }

        /*private*/ writeObject(stream: com.java.ObjectOutputStream) {
        }

        addEnableCharsFromPattern(pattern: string) {
        }

        public addInputFormat(inputNumberFormat: com.java.NumberFormat) {
        }

        formatting$long(internalvalue: number): string {
            return null;
        }

        static formatting(internalvalue: number, format: com.java.NumberFormat): string {
            return null;
        }

        formatting$java_lang_String(text: string): string {
            return null;
        }

        public formatting$java_lang_String$int_A(text: string, caretpos: number[]): string {
            return null;
        }

        public formatting(text?: any, caretpos?: any): string {
            if (((typeof text === 'string') || text === null) && ((caretpos != null && caretpos instanceof <any>Array && (caretpos.length == 0 || caretpos[0] == null ||(typeof caretpos[0] === 'number'))) || caretpos === null)) {
                return <any>this.formatting$java_lang_String$int_A(text, caretpos);
            } else if (((typeof text === 'string') || text === null) && caretpos === undefined) {
                return <any>this.formatting$java_lang_String(text);
            } else if (((typeof text === 'number') || text === null) && caretpos === undefined) {
                return <any>this.formatting$long(text);
            } else throw new Error('invalid overload');
        }

        public static getClassLock(): any {
            return "@(#) $Revision: 33 $ Copyright (C) 1998-2011, Fujitsu Advanced Engineering Limited. & FUJITSU LIMITED.\n";
        }

        getDisplayBackground(): com.java.Color {
            return null;
        }

        getDisplayForeground(): com.java.Color {
            return null;
        }

        getIntegerDigit(string: string): number {
            return 0;
        }

        getDecimalDigit(string: string): number {
            return 0;
        }

        public getMaxIntegerDigit(): number {
            return this.integerDigit;
        }

        public getMaxDecimalDigit(): number {
            return this.decimalDigit;
        }

        public getOleCurrency(): number {
            return this.getInternalValue();
        }

        public setInputFormats(inputNumberFormat: com.java.NumberFormat[]) {
        }

        public setMaxIntegerDigit(digit: number) {
        }

        public setMaxDecimalDigit(digit: number) {
        }

        public setOleCurrency(cy: number) {
            this.setInternalValue(cy);
        }

        public getEqualBackground(): com.java.Color {
            return null;
        }

        public getEqualForeground(): com.java.Color {
            return null;
        }

        public getGreaterBackground(): com.java.Color {
            return null;
        }

        public getGreaterForeground(): com.java.Color {
            return null;
        }

        public getLessBackground(): com.java.Color {
            return null;
        }

        public getLessForeground(): com.java.Color {
            return null;
        }

        public setEqualBackground(color: com.java.Color) {
        }

        public setEqualForeground(color: com.java.Color) {
        }

        public setGreaterBackground(color: com.java.Color) {
        }

        public setGreaterForeground(color: com.java.Color) {
        }

        public setLessBackground(color: com.java.Color) {
        }

        public setLessForeground(color: com.java.Color) {
            this.lessForeground = color;
        }

        public getOutputFormat(): com.java.NumberFormat {
            return this.outputFormat;
        }

        public getOutputFormatPattern(): string {
            return null;
        }

        public setOutputFormat(numberFormat: com.java.NumberFormat) {
        }

        public setOutputFormatPattern(pattern: string) {
        }

        public getInputFormats(): com.java.NumberFormat[] {
            return null;
        }

        public getInputFormatPatterns(): string[] {
            return null;
        }

        public addInputFormatPattern(inputFormatPattern: string) {
        }

        public getMaximumValue(): number {
            return (n => n<0?Math.ceil(n):Math.floor(n))(this.maximumValue / 10000);
        }

        public getMinimumValue(): number {
            return (n => n<0?Math.ceil(n):Math.floor(n))(this.minimumValue / 10000);
        }

        public setMaximumValue(maximum: number) {
        }

        public setMinimumValue(minimum: number) {
        }

        checkText(string: string) {
        }

        checkRange(value: number) {
        }

        checkInternalRange(internalvalue: number) {
        }

        public checkOleCurrencyRange(olecurrensy: number): number {
            return 0;
        }

        checkDigit(string: string) {
        }

        public getThreshold(): number {
            return (n => n<0?Math.ceil(n):Math.floor(n))(this.threshold / 10000);
        }

        public setThreshold(threshold: number) {
        }

        public getValue(): number {
            return 0;
        }

        public setValue(value: number) {
        }

        public setValues$long$long$long(value: number, minimum: number, maximum: number) {
        }

        public setValues$long$long$long$long(value: number, minimum: number, maximum: number, threshold: number) {
        }

        public setValues(value?: any, minimum?: any, maximum?: any, threshold?: any) {
            if (((typeof value === 'number') || value === null) && ((typeof minimum === 'number') || minimum === null) && ((typeof maximum === 'number') || maximum === null) && ((typeof threshold === 'number') || threshold === null)) {
                return <any>this.setValues$long$long$long$long(value, minimum, maximum, threshold);
            } else if (((typeof value === 'number') || value === null) && ((typeof minimum === 'number') || minimum === null) && ((typeof maximum === 'number') || maximum === null) && threshold === undefined) {
                return <any>this.setValues$long$long$long(value, minimum, maximum);
            } else throw new Error('invalid overload');
        }

        public setEnableChars$com_java_NumberFormat(format: com.java.NumberFormat) {
        }

        public setEnableChars(format?: any) {
            if (((format != null && format instanceof <any>com.java.NumberFormat) || format === null)) {
                return <any>this.setEnableChars$com_java_NumberFormat(format);
            } else if (((format != null && format instanceof <any>Array && (format.length == 0 || format[0] == null ||(typeof format[0] === 'string'))) || format === null)) {
                super.setEnableChars(format);
            } else throw new Error('invalid overload');
        }

        public isEnableChar(str?: any, pos?: any, type?: any, enables?: any, disables?: any): boolean {
            if (((typeof str === 'string') || str === null) && ((typeof pos === 'number') || pos === null) && ((typeof type === 'number') || type === null) && ((enables != null && enables instanceof <any>Array && (enables.length == 0 || enables[0] == null ||(typeof enables[0] === 'string'))) || enables === null) && ((disables != null && disables instanceof <any>Array && (disables.length == 0 || disables[0] == null ||(typeof disables[0] === 'string'))) || disables === null)) {
                return super.isEnableChar(str, pos, type, enables, disables);
            } else if (((typeof str === 'string') || str === null) && ((typeof pos === 'number') || pos === null) && ((typeof type === 'number') || type === null) && ((enables != null && enables instanceof <any>Array && (enables.length == 0 || enables[0] == null ||(typeof enables[0] === 'string'))) || enables === null) && disables === undefined) {
                return <any>this.isEnableChar$java_lang_String$int$long$char_A(str, pos, type, enables);
            } else if (((typeof str === 'string') || str === null) && ((typeof pos === 'number') || pos === null) && ((type != null && type instanceof <any>Array && (type.length == 0 || type[0] == null ||(typeof type[0] === 'string'))) || type === null) && ((enables != null && enables instanceof <any>Array && (enables.length == 0 || enables[0] == null ||(typeof enables[0] === 'string'))) || enables === null) && disables === undefined) {
                return <any>this.isEnableChar$char$int$char_A$char_A(str, pos, type, enables);
            } else if (((typeof str === 'string') || str === null) && ((typeof pos === 'number') || pos === null) && ((type != null && type instanceof <any>Array && (type.length == 0 || type[0] == null ||(typeof type[0] === 'string'))) || type === null) && ((enables != null && enables instanceof <any>Array && (enables.length == 0 || enables[0] == null ||(typeof enables[0] === 'string'))) || enables === null) && disables === undefined) {
                return <any>this.isEnableChar$char$long$char_A$char_A(str, pos, type, enables);
            } else if (((typeof str === 'string') || str === null) && ((typeof pos === 'number') || pos === null) && ((type != null && type instanceof <any>Array && (type.length == 0 || type[0] == null ||(typeof type[0] === 'string'))) || type === null) && enables === undefined && disables === undefined) {
                return <any>this.isEnableChar$char$int$char_A(str, pos, type);
            } else if (((typeof str === 'string') || str === null) && ((typeof pos === 'number') || pos === null) && ((type != null && type instanceof <any>Array && (type.length == 0 || type[0] == null ||(typeof type[0] === 'string'))) || type === null) && enables === undefined && disables === undefined) {
                return <any>this.isEnableChar$char$long$char_A(str, pos, type);
            } else if (((typeof str === 'string') || str === null) && ((typeof pos === 'number') || pos === null) && type === undefined && enables === undefined && disables === undefined) {
                return <any>this.isEnableChar$java_lang_String$int(str, pos);
            } else if (((typeof str === 'string') || str === null) && pos === undefined && type === undefined && enables === undefined && disables === undefined) {
                return <any>this.isEnableChar$char(str);
            } else throw new Error('invalid overload');
        }

        public isEnableChar$char(c: string): boolean {
            return false;
        }

        public setText$java_lang_String$int$int$int$boolean$com_java_AWTEvent(string: string, caretPos: number, selectionStart: number, selectionEnd: number, setmodified: boolean, trigger: com.java.AWTEvent) {
        }

        public setText(string?: any, caretPos?: any, selectionStart?: any, selectionEnd?: any, setmodified?: any, trigger?: any) {
            if (((typeof string === 'string') || string === null) && ((typeof caretPos === 'number') || caretPos === null) && ((typeof selectionStart === 'number') || selectionStart === null) && ((typeof selectionEnd === 'number') || selectionEnd === null) && ((typeof setmodified === 'boolean') || setmodified === null) && ((trigger != null && trigger instanceof <any>com.java.AWTEvent) || trigger === null)) {
                return <any>this.setText$java_lang_String$int$int$int$boolean$com_java_AWTEvent(string, caretPos, selectionStart, selectionEnd, setmodified, trigger);
            } else if (((typeof string === 'string') || string === null) && ((typeof caretPos === 'number') || caretPos === null) && ((typeof selectionStart === 'number') || selectionStart === null) && ((typeof selectionEnd === 'number') || selectionEnd === null) && ((typeof setmodified === 'boolean') || setmodified === null) && trigger === undefined) {
                return <any>this.setText$java_lang_String$int$int$int$boolean(string, caretPos, selectionStart, selectionEnd, setmodified);
            } else if (((typeof string === 'string') || string === null) && caretPos === undefined && selectionStart === undefined && selectionEnd === undefined && setmodified === undefined && trigger === undefined) {
                return <any>this.setText$java_lang_String(string);
            } else throw new Error('invalid overload');
        }

        parsing$java_lang_String(string: string): number {
            return 0;
        }

        paramString(): string {
            return null;
        }

        makeDigitFormat() {
        }

        getInternalMaxLimitString(): string {
            return null;
        }

        getInternalMinLimitString(): string {
            return null;
        }

        checkLongToInternal(longvalue: number, valuename: string) {
        }

        getInternalValue(): number {
            return 0;
        }

        setInternalValue(internalvalue: number) {
        }

        getInternalThreshold(): number {
            return this.threshold;
        }

        public parsing$java_lang_String$com_java_NumberFormat(string: string, nformat: com.java.NumberFormat): number {
            return 0;
        }

        public parsing(string?: any, nformat?: any): number {
            if (((typeof string === 'string') || string === null) && ((nformat != null && nformat instanceof <any>com.java.NumberFormat) || nformat === null)) {
                return <any>this.parsing$java_lang_String$com_java_NumberFormat(string, nformat);
            } else if (((typeof string === 'string') || string === null) && nformat === undefined) {
                return <any>this.parsing$java_lang_String(string);
            } else throw new Error('invalid overload');
        }

        inspectText(srctext: string): number {
            let status: number = super.inspectText(srctext);
            if (srctext.length > 0){
                let internalvalue: number;
                try {
                    internalvalue = this.parsing$java_lang_String(srctext);
                } catch(exception) {
                    status |= 128;
                    return status;
                }
                if (internalvalue < this.minimumValue)status |= 16;
                if (internalvalue > this.maximumValue)status |= 32;
            }
            return status;
        }

        addInputFormatSymbols(inputNumberFormat: com.java.NumberFormat) {
        }

        public setToCell(cell: lib.com.fujitsu.caa.CJCell) {
        }

        public getCombinedText(): string {
            return null;
        }

        public setCombinedText(combText: string) {
        }

        actBackspace(keyEvent: com.java.KeyEvent): boolean {
            return false;
        }

        actDelete(keyEvent: com.java.KeyEvent) {
        }

        createClipboardConverter(): lib.com.fujitsu.caa.text.CJClipboardConverter {
            return null;
        }

        public inputMethodTextChanged(event: com.java.InputMethodEvent, cell: lib.com.fujitsu.caa.CJCell, graphics: com.java.Graphics, rect: com.java.Rectangle, pos: lib.com.fujitsu.caa.CJPosition): number {
            return 0;
        }

        static Header: string = "$Header: /CAA/ClientJ/SpreadB/Current/src/com/fujitsu/caa/CJFieldNumericalValue.java 33    11/06/21 11:38 Kura $";

        static Modtime: string = "$Modtime: 11/06/21 11:36 $";

        static Workfile: string = "$Workfile: CJFieldNumericalValue.java $";

        static COPYRIGHT: string = "@(#) $Revision: 33 $ Copyright (C) 1998-2011, Fujitsu Advanced Engineering Limited. & FUJITSU LIMITED.\n";

        static Revision: string; public static Revision_$LI$(): string { if (CJFieldNumericalValue.Revision == null) { CJFieldNumericalValue.Revision = "@(#) $Revision: 33 $ Copyright (C) 1998-2011, Fujitsu Advanced Engineering Limited. & FUJITSU LIMITED.\n".substring("@(#) $Revision: 33 $ Copyright (C) 1998-2011, Fujitsu Advanced Engineering Limited. & FUJITSU LIMITED.\n".indexOf('$'), "@(#) $Revision: 33 $ Copyright (C) 1998-2011, Fujitsu Advanced Engineering Limited. & FUJITSU LIMITED.\n".lastIndexOf('$') + 1); }  return CJFieldNumericalValue.Revision; }

        static base: string = "cjfieldnumericalvalue";

        equalBackground: com.java.Color;

        equalForeground: com.java.Color;

        greaterBackground: com.java.Color;

        greaterForeground: com.java.Color;

        lessBackground: com.java.Color;

        lessForeground: com.java.Color;

        outputFormat: com.java.NumberFormat;

        maximumValue: number;

        minimumValue: number;

        threshold: number;

        value: number;

        integerDigit: number;

        decimalDigit: number;

        static DEFAULTALIGNMENT: number = 4;

        static DEFAULTENABLETYPE: number = 1;

        static DEFAULTENABLECHARS: string[]; public static DEFAULTENABLECHARS_$LI$(): string[] { if (CJFieldNumericalValue.DEFAULTENABLECHARS == null) { CJFieldNumericalValue.DEFAULTENABLECHARS = ['-', '.', ',']; }  return CJFieldNumericalValue.DEFAULTENABLECHARS; }

        static DEFAULT_DECIMAL_SEPARATOR: string = String.fromCharCode(46);

        static DEFAULT_POSITIVE_PREFIX: string = "";

        static DEFAULT_NEGATIVE_PREFIX: string = "-";

        static DEFAULT_POSITIVE_SUFFIX: string = "";

        static DEFAULT_NEGATIVE_SUFFIX: string = "";

        static nameCounter: number = 0;

        static bName: string = "lib.com.fujitsu.caa.resources.CJMessageResource";

        static scale: number = 4;

        static divisor: number = 10000;

        static serialVersionUID: number = 8140636789855245839;
    }
    CJFieldNumericalValue["__class"] = "lib.com.fujitsu.caa.CJFieldNumericalValue";
    CJFieldNumericalValue["__interfaces"] = ["lib.com.fujitsu.caa.CJTextOperator","lib.com.fujitsu.caa.CJThresholdable","lib.com.fujitsu.caa.CJEditOperator"];


}

