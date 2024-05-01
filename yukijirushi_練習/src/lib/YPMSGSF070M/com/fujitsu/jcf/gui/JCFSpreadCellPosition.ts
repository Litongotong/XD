/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadCellPosition extends lib.com.fujitsu.caa.CJPosition {
        public constructor(row?: any, column?: any) {
            if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null)) {
                let __args = arguments;
                super(row, column);
                if (this.recno === undefined) { this.recno = 0; } 
                if (this.colname === undefined) { this.colname = null; } 
                this.recno = this.row;
                this.colname = this.column >= 0 ? /* toString */(''+(this.column)) : "";
            } else if (((row != null && row instanceof <any>lib.com.fujitsu.caa.CJPosition) || row === null) && column === undefined) {
                let __args = arguments;
                let pos: any = __args[0];
                super();
                if (this.recno === undefined) { this.recno = 0; } 
                if (this.colname === undefined) { this.colname = null; } 
            } else if (row === undefined && column === undefined) {
                let __args = arguments;
                super();
                if (this.recno === undefined) { this.recno = 0; } 
                if (this.colname === undefined) { this.colname = null; } 
                this.recno = this.row;
                this.colname = this.column >= 0 ? /* toString */(''+(this.column)) : "";
            } else throw new Error('invalid overload');
        }

        public getRecordNumber(): number {
            return this.recno;
        }

        public getColumnName(): string {
            return this.colname;
        }

        public paramString(): string {
            return null;
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadCellPosition.java 6     09/02/25 11:50 Kura $";

        static Modtime: string = "$Modtime: 09/02/24 18:36 $";

        static Workfile: string = "$Workfile: JCFSpreadCellPosition.java $";

        static Revision: string = "$Revision: 6 $";

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFSpreadCellPosition";

        static serialVersionUID: number = -7477729396741329042;

        recno: number;

        colname: string;
    }
    JCFSpreadCellPosition["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition";

}

