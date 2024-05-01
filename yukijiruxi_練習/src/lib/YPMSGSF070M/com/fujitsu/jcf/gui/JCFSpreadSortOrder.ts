/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadSortOrder {
        public constructor(src: lib.com.fujitsu.jcf.gui.JCFSpreadData) {
            if (this.clonesrc === undefined) { this.clonesrc = null; }
            if (this.order === undefined) { this.order = null; }
            this.clonesrc = src.shallowCopy();
            this.order = (s => { let a=[]; while(s-->0) a.push(0); return a; })(src.getRowCount());
            for(let n: number = 0; n < this.order.length; n++) {this.order[n] = n;}
        }

        getCell(row: number, column: number): lib.com.fujitsu.jcf.gui.JCFSpreadCellData {
            const index: number = this.order[row];
            return this.clonesrc.getCell(index, column);
        }

        exchangeRow(r1: number, r2: number) {
            const r: number = this.order[r1];
            this.order[r1] = this.order[r2];
            this.order[r2] = r;
        }

        getOrderArray(): number[] {
            return this.order;
        }

        getCloneData(): lib.com.fujitsu.jcf.gui.JCFSpreadData {
            return this.clonesrc;
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadSortOrder.java 3     09/02/25 16:05 Kura $";

        static Modtime: string = "$Modtime: 09/02/25 11:20 $";

        static Workfile: string = "$Workfile: JCFSpreadSortOrder.java $";

        static Revision: string = "$Revision: 3 $";

        static serialVersionUID: number = -4503728077214453191;

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFSpreadSortOrder";

        clonesrc: lib.com.fujitsu.jcf.gui.JCFSpreadData;

        order: number[];
    }
    JCFSpreadSortOrder["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadSortOrder";

}

