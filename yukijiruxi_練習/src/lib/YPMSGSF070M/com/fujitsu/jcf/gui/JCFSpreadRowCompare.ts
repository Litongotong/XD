/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadRowCompare {
        public constructor(column?: any, edittype?: any, order?: any) {
            if (((typeof column === 'number') || column === null) && ((typeof edittype === 'number') || edittype === null) && ((typeof order === 'number') || order === null)) {
                let __args = arguments;
                if (this.sortcolumn === undefined) { this.sortcolumn = 0; } 
                if (this.sortorder === undefined) { this.sortorder = 0; } 
                if (this.cellcompare === undefined) { this.cellcompare = null; } 
                if (this.nextcomparelist === undefined) { this.nextcomparelist = null; } 
            } else if (((typeof column === 'number') || column === null) && ((edittype != null && (edittype.constructor != null && edittype.constructor["__interfaces"] != null && edittype.constructor["__interfaces"].indexOf("lib.com.fujitsu.jcf.gui.JCFSpreadCellCompare") >= 0)) || edittype === null) && order === undefined) {
                let __args = arguments;
                let compareobj: any = __args[1];
                if (this.sortcolumn === undefined) { this.sortcolumn = 0; } 
                if (this.sortorder === undefined) { this.sortorder = 0; } 
                if (this.cellcompare === undefined) { this.cellcompare = null; } 
                if (this.nextcomparelist === undefined) { this.nextcomparelist = null; } 
            } else if (((typeof column === 'number') || column === null) && edittype === undefined && order === undefined) {
                let __args = arguments;
                if (this.sortcolumn === undefined) { this.sortcolumn = 0; } 
                if (this.sortorder === undefined) { this.sortorder = 0; } 
                if (this.cellcompare === undefined) { this.cellcompare = null; } 
                if (this.nextcomparelist === undefined) { this.nextcomparelist = null; } 
            } else throw new Error('invalid overload');
        }

        public getColumn(): number {
            return this.sortcolumn;
        }

        public getOrder(): number {
            return this.sortorder;
        }

        setOrder(order: number) {
            this.sortorder = order;
        }

        public getCellCompare(): lib.com.fujitsu.jcf.gui.JCFSpreadCellCompare {
            return this.cellcompare;
        }

        setCellCompare(compareobj: lib.com.fujitsu.jcf.gui.JCFSpreadCellCompare) {
        }

        public addNextCompare(compare: JCFSpreadRowCompare) {
        }

        public compareRow(sortorder: lib.com.fujitsu.jcf.gui.JCFSpreadSortOrder, r1: number, r2: number): number {
            return 0;
        }

        /*private*/ readObject(stream: com.java.ObjectInputStream) {
        }

        /*private*/ writeObject(stream: com.java.ObjectOutputStream) {
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadRowCompare.java 4     09/06/11 14:47 Kura $";

        static Modtime: string = "$Modtime: 09/06/11 14:50 $";

        static Workfile: string = "$Workfile: JCFSpreadRowCompare.java $";

        static Revision: string = "$Revision: 4 $";

        static serialVersionUID: number = 8846124377905810070;

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFSpreadRowCompare";

        sortcolumn: number;

        sortorder: number;

        cellcompare: lib.com.fujitsu.jcf.gui.JCFSpreadCellCompare;

        nextcomparelist: Array<any>;
    }
    JCFSpreadRowCompare["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadRowCompare";

}

