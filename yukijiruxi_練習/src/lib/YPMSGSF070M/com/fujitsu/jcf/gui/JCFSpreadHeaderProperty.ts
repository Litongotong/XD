/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadHeaderProperty {
        public constructor(rowCount?: any, columnCount?: any, headerCell?: any, height?: any) {
            if (((typeof rowCount === 'number') || rowCount === null) && ((typeof columnCount === 'number') || columnCount === null) && ((headerCell != null && headerCell instanceof <any>Array && (headerCell.length == 0 || headerCell[0] == null ||headerCell[0] instanceof Array)) || headerCell === null) && ((height != null && height instanceof <any>Array && (height.length == 0 || height[0] == null ||(typeof height[0] === 'number'))) || height === null)) {
                let __args = arguments;
                if (this.rowCount === undefined) { this.rowCount = 0; } 
                if (this.columnCount === undefined) { this.columnCount = 0; } 
                if (this.headerCell === undefined) { this.headerCell = null; } 
                if (this.defaultHeaderCell === undefined) { this.defaultHeaderCell = null; } 
                if (this.headerCellHeight === undefined) { this.headerCellHeight = null; } 
                if (this.defaultHeaderCellHeight === undefined) { this.defaultHeaderCellHeight = 0; } 
                this.rowCount = 0;
                this.columnCount = 0;
                this.headerCell = null;
                this.defaultHeaderCell = null;
                this.headerCellHeight = null;
                this.defaultHeaderCellHeight = 0;
                this.setRowCount(rowCount);
                this.setColumnCount(columnCount);
                this.setHeaderCell(headerCell);
                this.setHeaderCellHeight(height);
            } else if (rowCount === undefined && columnCount === undefined && headerCell === undefined && height === undefined) {
                let __args = arguments;
                if (this.rowCount === undefined) { this.rowCount = 0; } 
                if (this.columnCount === undefined) { this.columnCount = 0; } 
                if (this.headerCell === undefined) { this.headerCell = null; } 
                if (this.defaultHeaderCell === undefined) { this.defaultHeaderCell = null; } 
                if (this.headerCellHeight === undefined) { this.headerCellHeight = null; } 
                if (this.defaultHeaderCellHeight === undefined) { this.defaultHeaderCellHeight = 0; } 
                this.rowCount = 0;
                this.columnCount = 0;
                this.headerCell = null;
                this.defaultHeaderCell = null;
                this.headerCellHeight = null;
                this.defaultHeaderCellHeight = 0;
            } else throw new Error('invalid overload');
        }

        public getJavaInitializationString$(): string {
            const sb: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
            /* append */(sb => { sb.str += <any>"new lib.com.fujitsu.jcf.gui.JCFSpreadHeaderProperty("; return sb; })(sb);
            /* append */(sb => { sb.str += <any>this.rowCount; return sb; })(sb);
            /* append */(sb => { sb.str += <any>","; return sb; })(sb);
            /* append */(sb => { sb.str += <any>this.columnCount; return sb; })(sb);
            /* append */(sb => { sb.str += <any>","; return sb; })(sb);
            if (this.headerCell != null){
                /* append */(sb => { sb.str += <any>"new lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty[][]{"; return sb; })(sb);
                let i: number = 0;
                for(const hcCount: number = /* size */(<number>this.headerCell.length); i < hcCount; i++) {{
                    const hcRows: Array<any> = <Array<any>><Array<any>>/* get */this.headerCell[i];
                    if (hcRows != null){
                        /* append */(sb => { sb.str += <any>"{"; return sb; })(sb);
                        let j: number = 0;
                        for(const hcRowCount: number = /* size */(<number>hcRows.length); j < hcRowCount; j++) {{
                            const hcProperty: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty = <lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty>/* get */hcRows[j];
                            if (hcProperty != null){
                                /* append */(sb => { sb.str += <any>hcProperty.getJavaInitializationString$(); return sb; })(sb);
                                /* append */(sb => { sb.str += <any>","; return sb; })(sb);
                            } else {
                                /* append */(sb => { sb.str += <any>"null,"; return sb; })(sb);
                            }
                        };}
                        /* append */(sb => { sb.str += <any>"},"; return sb; })(sb);
                    } else {
                        /* append */(sb => { sb.str += <any>"null, "; return sb; })(sb);
                    }
                };}
                /* append */(sb => { sb.str += <any>"},"; return sb; })(sb);
            } else {
                /* append */(sb => { sb.str += <any>"null,"; return sb; })(sb);
            }
            if (this.headerCellHeight != null){
                /* append */(sb => { sb.str += <any>"new int[]{"; return sb; })(sb);
                let i: number = 0;
                for(const heightCount: number = /* size */(<number>this.headerCellHeight.length); i < heightCount; i++) {{
                    /* append */(sb => { sb.str += <any>this.getHeaderCellHeight(i); return sb; })(sb);
                    /* append */(sb => { sb.str += <any>","; return sb; })(sb);
                };}
                /* append */(sb => { sb.str += <any>"}"; return sb; })(sb);
            } else {
                /* append */(sb => { sb.str += <any>"null"; return sb; })(sb);
            }
            /* append */(sb => { sb.str += <any>")"; return sb; })(sb);
            return /* toString */sb.str;
        }

        public getJavaInitializationString$java_lang_StringBuffer(buf: { str: string, toString: Function }): { str: string, toString: Function } {
            const sb: { str: string, toString: Function } = buf != null ? buf : { str: "", toString: function() { return this.str; } };
            /* append */(sb => { sb.str += <any>"new lib.com.fujitsu.jcf.gui.JCFSpreadHeaderProperty("; return sb; })(sb);
            /* append */(sb => { sb.str += <any>this.rowCount; return sb; })(sb);
            /* append */(sb => { sb.str += <any>", "; return sb; })(sb);
            /* append */(sb => { sb.str += <any>this.columnCount; return sb; })(sb);
            /* append */(sb => { sb.str += <any>", "; return sb; })(sb);
            if (this.headerCell != null){
                /* append */(sb => { sb.str += <any>"new lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty[][]{"; return sb; })(sb);
                let i: number = 0;
                for(const hcCount: number = /* size */(<number>this.headerCell.length); i < hcCount; i++) {{
                    const rowsObj: any = /* get */this.headerCell[i];
                    if (rowsObj != null && (rowsObj instanceof Array)){
                        const hcRows: Array<any> = <Array<any>><any>rowsObj;
                        /* append */(sb => { sb.str += <any>"{ "; return sb; })(sb);
                        let j: number = 0;
                        for(const hcRowCount: number = /* size */(<number>hcRows.length); j < hcRowCount; j++) {{
                            const obj: any = /* get */hcRows[j];
                            if (obj != null && obj instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty){
                                const hcProperty: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty = <lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty>obj;
                                hcProperty.getJavaInitializationString$java_lang_StringBuffer(sb);
                                /* append */(sb => { sb.str += <any>", "; return sb; })(sb);
                            } else {
                                /* append */(sb => { sb.str += <any>"null, "; return sb; })(sb);
                            }
                        };}
                        /* append */(sb => { sb.str += <any>"}, "; return sb; })(sb);
                    } else {
                        /* append */(sb => { sb.str += <any>"null, "; return sb; })(sb);
                    }
                };}
                /* append */(sb => { sb.str += <any>"}, "; return sb; })(sb);
            } else {
                /* append */(sb => { sb.str += <any>"null, "; return sb; })(sb);
            }
            if (this.headerCellHeight != null){
                /* append */(sb => { sb.str += <any>"new int[]{"; return sb; })(sb);
                let i: number = 0;
                for(const heightCount: number = /* size */(<number>this.headerCellHeight.length); i < heightCount; i++) {{
                    /* append */(sb => { sb.str += <any>this.getHeaderCellHeight(i); return sb; })(sb);
                    /* append */(sb => { sb.str += <any>", "; return sb; })(sb);
                };}
                /* append */(sb => { sb.str += <any>"}"; return sb; })(sb);
            } else {
                /* append */(sb => { sb.str += <any>"null"; return sb; })(sb);
            }
            /* append */(sb => { sb.str += <any>")"; return sb; })(sb);
            return sb;
        }

        public getJavaInitializationString(buf?: any): any {
            if (((buf != null && (buf instanceof Object)) || buf === null)) {
                return <any>this.getJavaInitializationString$java_lang_StringBuffer(buf);
            } else if (buf === undefined) {
                return <any>this.getJavaInitializationString$();
            } else throw new Error('invalid overload');
        }

        public getRowCount(): number {
            return this.rowCount;
        }

        public getColumnCount(): number {
            return this.columnCount;
        }

        public setRowCount(rowCount: number) {
            this.rowCount = rowCount;
        }

        public setColumnCount(columnCount: number) {
            this.columnCount = columnCount;
        }

        public setHeaderCell(headerCell: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty[][]) {
            if (headerCell == null){
                this.headerCell = <any>([]);
            } else {
                this.headerCell = <any>([]);
                for(let i: number = 0; i < headerCell.length; i++) {{
                    const hcRows: Array<any> = <any>([]);
                    /* add */(this.headerCell.push(hcRows)>0);
                    for(let j: number = 0; j < headerCell[i].length; j++) {/* add */(hcRows.push(headerCell[i][j])>0);}
                };}
            }
        }

        public setDefaultHeaderCell(defaultHeaderCell: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty) {
            this.defaultHeaderCell = defaultHeaderCell;
        }

        public getHeaderCell(row: number, column: number): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty {
            const headerCell: Array<any> = this.headerCell;
            if (headerCell != null && row < /* size */(<number>headerCell.length)){
                const rows: any = /* get */headerCell[row];
                if (rows != null && (rows instanceof Array)){
                    const hcRows: Array<any> = <Array<any>><any>rows;
                    if (column < /* size */(<number>hcRows.length)){
                        const val: any = /* get */hcRows[column];
                        if (val != null && val instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty)return <lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty>val;
                    }
                }
            }
            return null;
        }

        public getDefaultHeaderCell(): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty {
            return this.defaultHeaderCell;
        }

        public getHeaderCellHeight(row: number): number {
            const hcHeight: Array<any> = this.headerCellHeight;
            if (hcHeight != null && /* size */(<number>hcHeight.length) > row){
                const val: any = /* get */hcHeight[row];
                if (typeof val === 'number'){
                    const num: number = <number>val;
                    return /* intValue */(num|0);
                }
            }
            return this.defaultHeaderCellHeight;
        }

        public setHeaderCellHeight(headerCellHeight: number[]) {
            if (headerCellHeight == null){
                this.headerCellHeight = <any>([]);
            } else {
                this.headerCellHeight = <any>([]);
                for(let n: number = 0; n < headerCellHeight.length; n++) {/* add */(this.headerCellHeight.push(new Number(headerCellHeight[n]).valueOf())>0);}
            }
        }

        public getDefaultHeaderCellHeight(): number {
            return this.defaultHeaderCellHeight;
        }

        public setDefaultHeaderCellHeight(defaultHeaderCellHeight: number) {
            this.defaultHeaderCellHeight = defaultHeaderCellHeight;
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadHeaderProperty.java 9     09/02/25 15:42 Kura $";

        static Modtime: string = "$Modtime: 09/02/25 15:44 $";

        static Workfile: string = "$Workfile: JCFSpreadHeaderProperty.java $";

        static Revision: string = "$Revision: 9 $";

        static serialVersionUID: number = -6846123557765542077;

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFSpreadHeaderProperty";

        rowCount: number;

        columnCount: number;

        headerCell: Array<any>;

        defaultHeaderCell: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty;

        headerCellHeight: Array<any>;

        defaultHeaderCellHeight: number;
    }
    JCFSpreadHeaderProperty["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadHeaderProperty";

}

