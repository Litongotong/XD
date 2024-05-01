/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadHeaderColumnInfoProperty {
        public constructor(width?: any, background?: any, foreground?: any, font?: any, borderColor?: any, borderWidth?: any, borderType?: any, alignmentHorizontal?: any, alignmentVertical?: any) {
            if (((typeof width === 'number') || width === null) && ((background != null && background instanceof <any>com.java.Color) || background === null) && ((foreground != null && foreground instanceof <any>com.java.Color) || foreground === null) && ((font != null && font instanceof <any>com.java.Font) || font === null) && ((borderColor != null && borderColor instanceof <any>com.java.Color) || borderColor === null) && ((typeof borderWidth === 'number') || borderWidth === null) && ((typeof borderType === 'number') || borderType === null) && ((typeof alignmentHorizontal === 'number') || alignmentHorizontal === null) && ((typeof alignmentVertical === 'number') || alignmentVertical === null)) {
                let __args = arguments;
                if (this.width === undefined) { this.width = 0; } 
                if (this.background === undefined) { this.background = null; } 
                if (this.foreground === undefined) { this.foreground = null; } 
                if (this.font === undefined) { this.font = null; } 
                if (this.borderColor === undefined) { this.borderColor = null; } 
                if (this.borderWidth === undefined) { this.borderWidth = 0; } 
                if (this.borderType === undefined) { this.borderType = 0; } 
                if (this.alignmentHorizontal === undefined) { this.alignmentHorizontal = 0; } 
                if (this.alignmentVertical === undefined) { this.alignmentVertical = 0; } 
                this.width = 0;
                this.background = null;
                this.foreground = null;
                this.font = null;
                this.borderColor = null;
                this.borderWidth = 0;
                this.borderType = 11;
                this.alignmentHorizontal = 1;
                this.alignmentVertical = 8;
                this.width = width;
                this.background = background;
                this.foreground = foreground;
                this.font = font;
                this.borderColor = borderColor;
                this.borderWidth = borderWidth;
                this.borderType = borderType;
                this.alignmentHorizontal = alignmentHorizontal;
                this.alignmentVertical = alignmentVertical;
            } else if (((width != null && width instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty) || width === null) && background === undefined && foreground === undefined && font === undefined && borderColor === undefined && borderWidth === undefined && borderType === undefined && alignmentHorizontal === undefined && alignmentVertical === undefined) {
                let __args = arguments;
                let headerColumnInfo: any = __args[0];
                if (this.width === undefined) { this.width = 0; } 
                if (this.background === undefined) { this.background = null; } 
                if (this.foreground === undefined) { this.foreground = null; } 
                if (this.font === undefined) { this.font = null; } 
                if (this.borderColor === undefined) { this.borderColor = null; } 
                if (this.borderWidth === undefined) { this.borderWidth = 0; } 
                if (this.borderType === undefined) { this.borderType = 0; } 
                if (this.alignmentHorizontal === undefined) { this.alignmentHorizontal = 0; } 
                if (this.alignmentVertical === undefined) { this.alignmentVertical = 0; } 
                this.width = 0;
                this.background = null;
                this.foreground = null;
                this.font = null;
                this.borderColor = null;
                this.borderWidth = 0;
                this.borderType = 11;
                this.alignmentHorizontal = 1;
                this.alignmentVertical = 8;
                this.width = headerColumnInfo.getWidth();
                this.background = headerColumnInfo.getBackground();
                this.foreground = headerColumnInfo.getForeground();
                this.font = headerColumnInfo.getFont();
                this.borderColor = headerColumnInfo.getBorderColor();
                this.borderWidth = headerColumnInfo.getBorderWidth();
                this.borderType = headerColumnInfo.getBorderType();
                this.alignmentHorizontal = headerColumnInfo.getAlignmentHorizontal();
                this.alignmentVertical = headerColumnInfo.getAlignmentVertical();
            } else if (width === undefined && background === undefined && foreground === undefined && font === undefined && borderColor === undefined && borderWidth === undefined && borderType === undefined && alignmentHorizontal === undefined && alignmentVertical === undefined) {
                let __args = arguments;
                if (this.width === undefined) { this.width = 0; } 
                if (this.background === undefined) { this.background = null; } 
                if (this.foreground === undefined) { this.foreground = null; } 
                if (this.font === undefined) { this.font = null; } 
                if (this.borderColor === undefined) { this.borderColor = null; } 
                if (this.borderWidth === undefined) { this.borderWidth = 0; } 
                if (this.borderType === undefined) { this.borderType = 0; } 
                if (this.alignmentHorizontal === undefined) { this.alignmentHorizontal = 0; } 
                if (this.alignmentVertical === undefined) { this.alignmentVertical = 0; } 
                this.width = 0;
                this.background = null;
                this.foreground = null;
                this.font = null;
                this.borderColor = null;
                this.borderWidth = 0;
                this.borderType = 11;
                this.alignmentHorizontal = 1;
                this.alignmentVertical = 8;
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

        public getHeaderColumnInfoProperty(): JCFSpreadHeaderColumnInfoProperty {
            return this;
        }

        public setHeaderColumnInfoProperty(headerColumnInfo: JCFSpreadHeaderColumnInfoProperty) {
            this.width = headerColumnInfo.getWidth();
            this.background = headerColumnInfo.getBackground();
            this.foreground = headerColumnInfo.getForeground();
            this.font = headerColumnInfo.getFont();
            this.borderColor = headerColumnInfo.getBorderColor();
            this.borderWidth = headerColumnInfo.getBorderWidth();
            this.borderType = headerColumnInfo.getBorderType();
            this.alignmentHorizontal = headerColumnInfo.getAlignmentHorizontal();
            this.alignmentVertical = headerColumnInfo.getAlignmentVertical();
        }

        public getAlignmentHorizontal(): number {
            return this.alignmentHorizontal;
        }

        public getAlignmentHorizontalString(): string {
            return this.getStringFromValueArray$int_A$int$java_lang_String_A(JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalValues_$LI$(), this.alignmentHorizontal, JCFSpreadHeaderColumnInfoProperty.getAlignmentHorizontalParamsString());
        }

        public static getAlignmentHorizontalParamsString(): string[] {
            return null;
        }

        /*private*/ toAlignmentHorizontalInitializer(buf: { str: string, toString: Function }): string {
            const code: string = this.getStringFromValueArray$int_A$int$java_lang_String_A$java_lang_String(JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalValues_$LI$(), this.alignmentHorizontal, JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalKeyStrings_$LI$(), "lib.com.fujitsu.jcf.gui.JCFSpread.LEFT");
            if (buf != null)/* append */(sb => { sb.str += <any>code; return sb; })(buf);
            return code;
        }

        public getAlignmentVertical(): number {
            return this.alignmentVertical;
        }

        public getAlignmentVerticalString(): string {
            return this.getStringFromValueArray$int_A$int$java_lang_String_A(JCFSpreadHeaderColumnInfoProperty.alignmentVerticalValues_$LI$(), this.alignmentVertical, JCFSpreadHeaderColumnInfoProperty.getAlignmentVerticalParamsString());
        }

        public static getAlignmentVerticalParamsString(): string[] {
            return null;
        }

        /*private*/ toAlignmentVerticalInitializer(buf: { str: string, toString: Function }): string {
            const code: string = this.getStringFromValueArray$int_A$int$java_lang_String_A$java_lang_String(JCFSpreadHeaderColumnInfoProperty.alignmentVerticalValues_$LI$(), this.alignmentVertical, JCFSpreadHeaderColumnInfoProperty.alignmentVerticalKeyStrings_$LI$(), "lib.com.fujitsu.jcf.gui.JCFSpread.TOP");
            if (buf != null)/* append */(sb => { sb.str += <any>code; return sb; })(buf);
            return code;
        }

        public getBackground(): com.java.Color {
            return this.background;
        }

        public getBorderColor(): com.java.Color {
            return this.borderColor;
        }

        public getBorderType(): number {
            return this.borderType;
        }

        public getBorderTypeString(): string {
            return this.getStringFromValueArray$int_A$int$java_lang_String_A(JCFSpreadHeaderColumnInfoProperty.borderTypeValues_$LI$(), this.borderType, JCFSpreadHeaderColumnInfoProperty.getBorderTypeParamsString());
        }

        public static getBorderTypeParamsString(): string[] {
            return null;
        }

        /*private*/ toBorderTypeInitializer(buf: { str: string, toString: Function }): string {
            const code: string = this.getStringFromValueArray$int_A$int$java_lang_String_A$java_lang_String(JCFSpreadHeaderColumnInfoProperty.borderTypeValues_$LI$(), this.borderType, JCFSpreadHeaderColumnInfoProperty.borderTypeKeyStrings_$LI$(), "lib.com.fujitsu.jcf.gui.JCFSpread.CONVEX");
            if (buf != null)/* append */(sb => { sb.str += <any>code; return sb; })(buf);
            return code;
        }

        public getBorderWidth(): number {
            return this.borderWidth;
        }

        public getFont(): com.java.Font {
            return this.font;
        }

        public getForeground(): com.java.Color {
            return this.foreground;
        }

        public getWidth(): number {
            return this.width;
        }

        public setAlignmentHorizontal$int(alignmentHorizontal: number) {
            this.alignmentHorizontal = alignmentHorizontal;
        }

        public setAlignmentHorizontal$java_lang_String(alignmentHorizontal: string) {
            let alignmentH: number = JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A$int(JCFSpreadHeaderColumnInfoProperty.getAlignmentHorizontalParamsString(), alignmentHorizontal, JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalValues_$LI$(), -1);
            if (alignmentH === -1)alignmentH = JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A(JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalString_$LI$(), alignmentHorizontal, JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalValues_$LI$());
            this.alignmentHorizontal = alignmentH;
        }

        public setAlignmentHorizontal(alignmentHorizontal?: any) {
            if (((typeof alignmentHorizontal === 'string') || alignmentHorizontal === null)) {
                return <any>this.setAlignmentHorizontal$java_lang_String(alignmentHorizontal);
            } else if (((typeof alignmentHorizontal === 'number') || alignmentHorizontal === null)) {
                return <any>this.setAlignmentHorizontal$int(alignmentHorizontal);
            } else throw new Error('invalid overload');
        }

        public setAlignmentVertical$int(alignmentVertical: number) {
            this.alignmentVertical = alignmentVertical;
        }

        public setAlignmentVertical$java_lang_String(alignmentVertical: string) {
            let alignmentV: number = JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A$int(JCFSpreadHeaderColumnInfoProperty.getAlignmentVerticalParamsString(), alignmentVertical, JCFSpreadHeaderColumnInfoProperty.alignmentVerticalValues_$LI$(), -1);
            if (alignmentV === -1)alignmentV = JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A(JCFSpreadHeaderColumnInfoProperty.alignmentVerticalString_$LI$(), alignmentVertical, JCFSpreadHeaderColumnInfoProperty.alignmentVerticalValues_$LI$());
            this.alignmentVertical = alignmentV;
        }

        public setAlignmentVertical(alignmentVertical?: any) {
            if (((typeof alignmentVertical === 'string') || alignmentVertical === null)) {
                return <any>this.setAlignmentVertical$java_lang_String(alignmentVertical);
            } else if (((typeof alignmentVertical === 'number') || alignmentVertical === null)) {
                return <any>this.setAlignmentVertical$int(alignmentVertical);
            } else throw new Error('invalid overload');
        }

        public setBackground(background: com.java.Color) {
            this.background = background;
        }

        public setBorderColor(borderColor: com.java.Color) {
            this.borderColor = borderColor;
        }

        public setBorderType$int(borderType: number) {
            this.borderType = borderType;
        }

        public setBorderType$java_lang_String(borderType: string) {
            let bType: number = JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A$int(JCFSpreadHeaderColumnInfoProperty.getBorderTypeParamsString(), borderType, JCFSpreadHeaderColumnInfoProperty.borderTypeValues_$LI$(), -1);
            if (bType === -1)bType = JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A(JCFSpreadHeaderColumnInfoProperty.borderTypeString_$LI$(), borderType, JCFSpreadHeaderColumnInfoProperty.borderTypeValues_$LI$());
            this.borderType = bType;
        }

        public setBorderType(borderType?: any) {
            if (((typeof borderType === 'string') || borderType === null)) {
                return <any>this.setBorderType$java_lang_String(borderType);
            } else if (((typeof borderType === 'number') || borderType === null)) {
                return <any>this.setBorderType$int(borderType);
            } else throw new Error('invalid overload');
        }

        public setBorderWidth(borderWidth: number) {
            this.borderWidth = borderWidth;
        }

        public setFont(font: com.java.Font) {
            this.font = font;
        }

        public setForeground(foreground: com.java.Color) {
            this.foreground = foreground;
        }

        public setWidth(width: number) {
            this.width = width;
        }

        static getValueFromStringArray$java_lang_String_A$java_lang_String$int_A(strAry: string[], str: string, valAry: number[]): number {
            return JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A$int(strAry, str, valAry, valAry[0]);
        }

        public static getValueFromStringArray$java_lang_String_A$java_lang_String$int_A$int(strAry: string[], str: string, valAry: number[], defval: number): number {
            if (str != null){
                for(let n: number = 0; n < strAry.length; n++) {if (str === (strAry[n]))return valAry[n];;}
            }
            return defval;
        }

        public static getValueFromStringArray(strAry?: any, str?: any, valAry?: any, defval?: any): number {
            if (((strAry != null && strAry instanceof <any>Array && (strAry.length == 0 || strAry[0] == null ||(typeof strAry[0] === 'string'))) || strAry === null) && ((typeof str === 'string') || str === null) && ((valAry != null && valAry instanceof <any>Array && (valAry.length == 0 || valAry[0] == null ||(typeof valAry[0] === 'number'))) || valAry === null) && ((typeof defval === 'number') || defval === null)) {
                return <any>lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A$int(strAry, str, valAry, defval);
            } else if (((strAry != null && strAry instanceof <any>Array && (strAry.length == 0 || strAry[0] == null ||(typeof strAry[0] === 'string'))) || strAry === null) && ((typeof str === 'string') || str === null) && ((valAry != null && valAry instanceof <any>Array && (valAry.length == 0 || valAry[0] == null ||(typeof valAry[0] === 'number'))) || valAry === null) && defval === undefined) {
                return <any>lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty.getValueFromStringArray$java_lang_String_A$java_lang_String$int_A(strAry, str, valAry);
            } else throw new Error('invalid overload');
        }

        getStringFromValueArray$int_A$int$java_lang_String_A(valAry: number[], val: number, strAry: string[]): string {
            return this.getStringFromValueArray$int_A$int$java_lang_String_A$java_lang_String(valAry, val, strAry, null);
        }

        public getStringFromValueArray$int_A$int$java_lang_String_A$java_lang_String(valAry: number[], val: number, strAry: string[], defval: string): string {
            if (valAry != null){
                for(let n: number = 0; n < valAry.length; n++) {if (val === valAry[n])return strAry[n];;}
            }
            return defval;
        }

        public getStringFromValueArray(valAry?: any, val?: any, strAry?: any, defval?: any): string {
            if (((valAry != null && valAry instanceof <any>Array && (valAry.length == 0 || valAry[0] == null ||(typeof valAry[0] === 'number'))) || valAry === null) && ((typeof val === 'number') || val === null) && ((strAry != null && strAry instanceof <any>Array && (strAry.length == 0 || strAry[0] == null ||(typeof strAry[0] === 'string'))) || strAry === null) && ((typeof defval === 'string') || defval === null)) {
                return <any>this.getStringFromValueArray$int_A$int$java_lang_String_A$java_lang_String(valAry, val, strAry, defval);
            } else if (((valAry != null && valAry instanceof <any>Array && (valAry.length == 0 || valAry[0] == null ||(typeof valAry[0] === 'number'))) || valAry === null) && ((typeof val === 'number') || val === null) && ((strAry != null && strAry instanceof <any>Array && (strAry.length == 0 || strAry[0] == null ||(typeof strAry[0] === 'string'))) || strAry === null) && defval === undefined) {
                return <any>this.getStringFromValueArray$int_A$int$java_lang_String_A(valAry, val, strAry);
            } else throw new Error('invalid overload');
        }

        load$com_fujitsu_caa_CJCell(cell: lib.com.fujitsu.caa.CJCell) {
        }

        public load$com_fujitsu_jcf_gui_JCFSpread$int(spread: lib.com.fujitsu.jcf.gui.JCFSpread, hcolumn: number) {
        }

        public load(spread?: any, hcolumn?: any) {
            if (((spread != null && spread instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpread) || spread === null) && ((typeof hcolumn === 'number') || hcolumn === null)) {
                return <any>this.load$com_fujitsu_jcf_gui_JCFSpread$int(spread, hcolumn);
            } else if (((spread != null && spread instanceof <any>lib.com.fujitsu.caa.CJCell) || spread === null) && hcolumn === undefined) {
                return <any>this.load$com_fujitsu_caa_CJCell(spread);
            } else throw new Error('invalid overload');
        }

        store(spread: lib.com.fujitsu.jcf.gui.JCFSpread, column: number) {
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadHeaderColumnInfoProperty.java 13    09/02/25 15:38 Kura $";

        static Modtime: string = "$Modtime: 09/02/25 10:51 $";

        static Workfile: string = "$Workfile: JCFSpreadHeaderColumnInfoProperty.java $";

        static Revision: string = "$Revision: 13 $";

        static serialVersionUID: number = -1252013986883206893;

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        public static CLASS_NAME: string = "JCFSpreadHeaderColumnInfoProperty";

        static RESOURCE: string = "lib.com.fujitsu.jcf.gui.JCFSpreadResource";

        static LOG_CLASS_NAME: string = "lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty";

        static logstr_null: string = "";

        static STR_LEFT: string = "lib.com.fujitsu.jcf.gui.JCFSpread.LEFT";

        static STR_RIGHT: string = "lib.com.fujitsu.jcf.gui.JCFSpread.RIGHT";

        static STR_TOP: string = "lib.com.fujitsu.jcf.gui.JCFSpread.TOP";

        static STR_BOTTOM: string = "lib.com.fujitsu.jcf.gui.JCFSpread.BOTTOM";

        static STR_CENTER: string = "lib.com.fujitsu.jcf.gui.JCFSpread.CENTER";

        static STR_CONVEX: string = "lib.com.fujitsu.jcf.gui.JCFSpread.CONVEX";

        static STR_FLAT: string = "lib.com.fujitsu.jcf.gui.JCFSpread.FLAT";

        static STR_CONCAVE: string = "lib.com.fujitsu.jcf.gui.JCFSpread.CONCAVE";

        static alignmentHorizontalString: string[]; public static alignmentHorizontalString_$LI$(): string[] { if (JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalString == null) { JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalString = ["Left", "Center", "Right"]; }  return JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalString; }

        static alignmentHorizontalValues: number[]; public static alignmentHorizontalValues_$LI$(): number[] { if (JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalValues == null) { JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalValues = [1, 2, 4]; }  return JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalValues; }

        static alignmentHorizontalKeyStrings: string[]; public static alignmentHorizontalKeyStrings_$LI$(): string[] { if (JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalKeyStrings == null) { JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalKeyStrings = ["lib.com.fujitsu.jcf.gui.JCFSpread.LEFT", "lib.com.fujitsu.jcf.gui.JCFSpread.CENTER", "lib.com.fujitsu.jcf.gui.JCFSpread.RIGHT"]; }  return JCFSpreadHeaderColumnInfoProperty.alignmentHorizontalKeyStrings; }

        static alignmentVerticalString: string[]; public static alignmentVerticalString_$LI$(): string[] { if (JCFSpreadHeaderColumnInfoProperty.alignmentVerticalString == null) { JCFSpreadHeaderColumnInfoProperty.alignmentVerticalString = ["Top", "Center", "Bottom"]; }  return JCFSpreadHeaderColumnInfoProperty.alignmentVerticalString; }

        static alignmentVerticalValues: number[]; public static alignmentVerticalValues_$LI$(): number[] { if (JCFSpreadHeaderColumnInfoProperty.alignmentVerticalValues == null) { JCFSpreadHeaderColumnInfoProperty.alignmentVerticalValues = [8, 2, 16]; }  return JCFSpreadHeaderColumnInfoProperty.alignmentVerticalValues; }

        static alignmentVerticalKeyStrings: string[]; public static alignmentVerticalKeyStrings_$LI$(): string[] { if (JCFSpreadHeaderColumnInfoProperty.alignmentVerticalKeyStrings == null) { JCFSpreadHeaderColumnInfoProperty.alignmentVerticalKeyStrings = ["lib.com.fujitsu.jcf.gui.JCFSpread.TOP", "lib.com.fujitsu.jcf.gui.JCFSpread.CENTER", "lib.com.fujitsu.jcf.gui.JCFSpread.BOTTOM"]; }  return JCFSpreadHeaderColumnInfoProperty.alignmentVerticalKeyStrings; }

        static borderTypeString: string[]; public static borderTypeString_$LI$(): string[] { if (JCFSpreadHeaderColumnInfoProperty.borderTypeString == null) { JCFSpreadHeaderColumnInfoProperty.borderTypeString = ["Convex", "Flat", "Concave"]; }  return JCFSpreadHeaderColumnInfoProperty.borderTypeString; }

        static borderTypeValues: number[]; public static borderTypeValues_$LI$(): number[] { if (JCFSpreadHeaderColumnInfoProperty.borderTypeValues == null) { JCFSpreadHeaderColumnInfoProperty.borderTypeValues = [11, 12, 13]; }  return JCFSpreadHeaderColumnInfoProperty.borderTypeValues; }

        static borderTypeKeyStrings: string[]; public static borderTypeKeyStrings_$LI$(): string[] { if (JCFSpreadHeaderColumnInfoProperty.borderTypeKeyStrings == null) { JCFSpreadHeaderColumnInfoProperty.borderTypeKeyStrings = ["lib.com.fujitsu.jcf.gui.JCFSpread.CONVEX", "lib.com.fujitsu.jcf.gui.JCFSpread.FLAT", "lib.com.fujitsu.jcf.gui.JCFSpread.CONCAVE"]; }  return JCFSpreadHeaderColumnInfoProperty.borderTypeKeyStrings; }

        width: number;

        background: com.java.Color;

        foreground: com.java.Color;

        font: com.java.Font;

        borderColor: com.java.Color;

        borderWidth: number;

        borderType: number;

        alignmentHorizontal: number;

        alignmentVertical: number;
    }
    JCFSpreadHeaderColumnInfoProperty["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty";

}

