/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export class CJCellPosition extends lib.com.fujitsu.caa.CJPosition implements lib.com.fujitsu.caa.CJOwner {
        public constructor(owner?: any, row?: any, column?: any, mergeTable?: any) {
            if (((owner != null && owner instanceof <any>com.java.Component) || owner === null) && ((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null) && ((mergeTable != null && mergeTable instanceof <any>com.java.Dictionary) || mergeTable === null)) {
                let __args = arguments;
                super();
                if (this.owner === undefined) { this.owner = null; } 
                if (this.abspos === undefined) { this.abspos = false; } 
                if (this.rectable === undefined) { this.rectable = null; } 
                if (this.realRow === undefined) { this.realRow = 0; } 
                if (this.realColumn === undefined) { this.realColumn = 0; } 
            } else if (((typeof owner === 'number') || owner === null) && ((typeof row === 'string') || row === null) && ((column != null && column instanceof <any>com.java.Dictionary) || column === null) && mergeTable === undefined) {
                let __args = arguments;
                let record: any = __args[0];
                let column: any = __args[1];
                let table: any = __args[2];
                super();
                if (this.owner === undefined) { this.owner = null; } 
                if (this.abspos === undefined) { this.abspos = false; } 
                if (this.rectable === undefined) { this.rectable = null; } 
                if (this.realRow === undefined) { this.realRow = 0; } 
                if (this.realColumn === undefined) { this.realColumn = 0; } 
            } else if (((owner != null && owner instanceof <any>com.java.Component) || owner === null) && ((row != null && row instanceof <any>lib.com.fujitsu.caa.CJPosition) || row === null) && column === undefined && mergeTable === undefined) {
                let __args = arguments;
                let pos: any = __args[1];
                super();
                if (this.owner === undefined) { this.owner = null; } 
                if (this.abspos === undefined) { this.abspos = false; } 
                if (this.rectable === undefined) { this.rectable = null; } 
                if (this.realRow === undefined) { this.realRow = 0; } 
                if (this.realColumn === undefined) { this.realColumn = 0; } 
            } else if (((typeof owner === 'number') || owner === null) && ((typeof row === 'number') || row === null) && column === undefined && mergeTable === undefined) {
                let __args = arguments;
                let row: any = __args[0];
                let column: any = __args[1];
                super();
                if (this.owner === undefined) { this.owner = null; } 
                if (this.abspos === undefined) { this.abspos = false; } 
                if (this.rectable === undefined) { this.rectable = null; } 
                if (this.realRow === undefined) { this.realRow = 0; } 
                if (this.realColumn === undefined) { this.realColumn = 0; } 
            } else if (((owner != null && owner instanceof <any>com.java.Component) || owner === null) && row === undefined && column === undefined && mergeTable === undefined) {
                let __args = arguments;
                super();
                if (this.owner === undefined) { this.owner = null; } 
                if (this.abspos === undefined) { this.abspos = false; } 
                if (this.rectable === undefined) { this.rectable = null; } 
                if (this.realRow === undefined) { this.realRow = 0; } 
                if (this.realColumn === undefined) { this.realColumn = 0; } 
            } else if (((owner != null && owner instanceof <any>lib.com.fujitsu.caa.CJPosition) || owner === null) && row === undefined && column === undefined && mergeTable === undefined) {
                let __args = arguments;
                let pos: any = __args[0];
                super();
                if (this.owner === undefined) { this.owner = null; } 
                if (this.abspos === undefined) { this.abspos = false; } 
                if (this.rectable === undefined) { this.rectable = null; } 
                if (this.realRow === undefined) { this.realRow = 0; } 
                if (this.realColumn === undefined) { this.realColumn = 0; } 
            } else if (owner === undefined && row === undefined && column === undefined && mergeTable === undefined) {
                let __args = arguments;
                super();
                if (this.owner === undefined) { this.owner = null; } 
                if (this.abspos === undefined) { this.abspos = false; } 
                if (this.rectable === undefined) { this.rectable = null; } 
                if (this.realRow === undefined) { this.realRow = 0; } 
                if (this.realColumn === undefined) { this.realColumn = 0; } 
            } else throw new Error('invalid overload');
        }

        public duplicate(): lib.com.fujitsu.caa.CJPosition {
            return null;
        }

        cji_setRealLocation(r: number, c: number) {
            this.realRow = r;
            this.realColumn = c;
        }

        cji_getRealRow(): number {
            return this.realRow;
        }

        cji_getRealColumn(): number {
            return this.realColumn;
        }

        cji_setAbs(abs: boolean) {
            this.abspos = abs;
        }

        cji_isAbs(): boolean {
            return this.abspos;
        }

        static cji_getFirstRow(rocord: number, column: string, table: com.java.Dictionary): number {
            return 0;
        }

        static cji_getLeftColumn(record: number, column: string, table: com.java.Dictionary): number {
            return 0;
        }

        public invalidateRecord() {
            this.cji_invalidateRecord();
        }

        cji_invalidateRecord() {
        }

        public getColumnName(): string {
            return null;
        }

        /*private*/ getColumnNameFromSpread(): string {
            return null;
        }

        public getRecordNumber(): number {
            return this.cji_getRecordNumber();
        }

        cji_getRecordNumber(): number {
            return 0;
        }

        cji_setLocation$int$int$int$int(row: number, column: number, realrow: number, realcol: number) {
            this.cji_setRealLocation(realrow, realcol);
            this.setLocation$int$int(row, column);
        }

        public cji_setLocation$int$int$int$int$com_java_Dictionary(row: number, column: number, realrow: number, realcol: number, table: com.java.Dictionary) {
            this.rectable = table;
            this.cji_setLocation$int$int$int$int(row, column, realrow, realcol);
        }

        public cji_setLocation(row?: any, column?: any, realrow?: any, realcol?: any, table?: any) {
            if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null) && ((typeof realrow === 'number') || realrow === null) && ((typeof realcol === 'number') || realcol === null) && ((table != null && table instanceof <any>com.java.Dictionary) || table === null)) {
                return <any>this.cji_setLocation$int$int$int$int$com_java_Dictionary(row, column, realrow, realcol, table);
            } else if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null) && ((typeof realrow === 'number') || realrow === null) && ((typeof realcol === 'number') || realcol === null) && table === undefined) {
                return <any>this.cji_setLocation$int$int$int$int(row, column, realrow, realcol);
            } else if (((typeof row === 'number') || row === null) && ((typeof column === 'string') || column === null) && ((realrow != null && realrow instanceof <any>com.java.Dictionary) || realrow === null) && realcol === undefined && table === undefined) {
                return <any>this.cji_setLocation$int$java_lang_String$com_java_Dictionary(row, column, realrow);
            } else if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null) && ((realrow != null && realrow instanceof <any>com.java.Dictionary) || realrow === null) && realcol === undefined && table === undefined) {
                return <any>this.cji_setLocation$int$int$com_java_Dictionary(row, column, realrow);
            } else throw new Error('invalid overload');
        }

        cji_setLocation$int$int$com_java_Dictionary(row: number, column: number, table: com.java.Dictionary) {
            this.rectable = table;
            this.setLocation$int$int(row, column);
        }

        cji_setLocation$int$java_lang_String$com_java_Dictionary(record: number, column: string, table: com.java.Dictionary) {
            this.rectable = table;
            this.setLocation$int$java_lang_String(record, column);
        }

        public setLocation$int$java_lang_String(record: number, column: string) {
        }

        public setLocation(record?: any, column?: any) {
            if (((typeof record === 'number') || record === null) && ((typeof column === 'string') || column === null)) {
                return <any>this.setLocation$int$java_lang_String(record, column);
            } else if (((typeof record === 'number') || record === null) && ((typeof column === 'number') || column === null)) {
                return <any>this.setLocation$int$int(record, column);
            } else if (((record != null && record instanceof <any>lib.com.fujitsu.caa.CJPosition) || record === null) && column === undefined) {
                return <any>this.setLocation$com_fujitsu_caa_CJPosition(record);
            } else throw new Error('invalid overload');
        }

        public setLocation$com_fujitsu_caa_CJPosition(pos: lib.com.fujitsu.caa.CJPosition) {
            super.setLocation$com_fujitsu_caa_CJPosition(pos);
            this.abspos = false;
            if (pos != null && pos instanceof <any>lib.com.fujitsu.caa.CJCellPosition){
                this.abspos = (<CJCellPosition>pos).abspos;
                this.rectable = (<CJCellPosition>pos).rectable;
                this.owner = (<CJCellPosition>pos).owner;
            }
        }

        public setLocation$int$int(row: number, column: number) {
            this.abspos = false;
            super.setLocation$int$int(row, column);
        }

        public setRecordNumber(record: number) {
        }

        public getMergeCell(): lib.com.fujitsu.caa.CJMergeCell {
            return null;
        }

        public normalizePosition() {
        }

        public getNormalizeRow(): number {
            return 0;
        }

        public getNormalizeColumn(): number {
            const mcell: lib.com.fujitsu.caa.CJMergeCell = this.getMergeCell();
            if (mcell != null)return mcell.getColumn(); else return this.column;
        }

        public getRowSpan(): number {
            const mcell: lib.com.fujitsu.caa.CJMergeCell = this.getMergeCell();
            if (mcell != null)return mcell.getRowSpan(); else return 1;
        }

        public getColumnSpan(): number {
            const mcell: lib.com.fujitsu.caa.CJMergeCell = this.getMergeCell();
            if (mcell != null)return mcell.getColumnSpan(); else return 1;
        }

        public getOwner(): com.java.Component {
            return this.owner;
        }

        public paramString(): string {
            return null;
        }

        static Header: string = "$Header: /CAA/ClientJ/SpreadB/Current/src/com/fujitsu/caa/CJCellPosition.java 21    09/11/16 11:58 Kura $";

        static Modtime: string = "$Modtime: 09/11/16 11:58 $";

        static Workfile: string = "$Workfile: CJCellPosition.java $";

        static COPYRIGHT: string = "@(#) $Revision: 21 $ Copyright (C) 2001-2009, Fujitsu Advanced Engineering Limited.\n";

        static Revision: string; public static Revision_$LI$(): string { if (CJCellPosition.Revision == null) { CJCellPosition.Revision = "@(#) $Revision: 21 $ Copyright (C) 2001-2009, Fujitsu Advanced Engineering Limited.\n".substring("@(#) $Revision: 21 $ Copyright (C) 2001-2009, Fujitsu Advanced Engineering Limited.\n".indexOf('$'), "@(#) $Revision: 21 $ Copyright (C) 2001-2009, Fujitsu Advanced Engineering Limited.\n".lastIndexOf('$') + 1); }  return CJCellPosition.Revision; }

        static serialVersionUID: number = 4201112293700353179;

        static resbase: string = "lib.com.fujitsu.caa.resources.CJMessageResource";

        owner: com.java.Component;

        abspos: boolean;

        rectable: com.java.Dictionary;

        realRow: number;

        realColumn: number;
    }
    CJCellPosition["__class"] = "lib.com.fujitsu.caa.CJCellPosition";
    CJCellPosition["__interfaces"] = ["lib.com.fujitsu.caa.CJOwner"];


}

