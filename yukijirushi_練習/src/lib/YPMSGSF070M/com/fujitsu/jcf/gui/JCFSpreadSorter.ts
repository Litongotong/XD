/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadSorter {
        public constructor(data: lib.com.fujitsu.jcf.gui.JCFSpreadData) {
            if (this.data === undefined) { this.data = null; }
            this.data = data;
        }

        createSortOrder(data: lib.com.fujitsu.jcf.gui.JCFSpreadData): lib.com.fujitsu.jcf.gui.JCFSpreadSortOrder {
            const sortorder: lib.com.fujitsu.jcf.gui.JCFSpreadSortOrder = new lib.com.fujitsu.jcf.gui.JCFSpreadSortOrder(data);
            return sortorder;
        }

        public sort(cmp: lib.com.fujitsu.jcf.gui.JCFSpreadRowCompare, start: number, end: number): lib.com.fujitsu.jcf.gui.JCFSpreadSortOrder {
            const sortorder: lib.com.fujitsu.jcf.gui.JCFSpreadSortOrder = this.createSortOrder(this.data);
            if (end < 0)end += this.data.getRowCount(); else end = Math.min(end, this.data.getRowCount() - 1);
            if (start < 0 || start >= end)throw new lib.com.fujitsu.jcf.gui.JCFDataIllegalArgumentException("ERROR_RANGE_ROW");
            const elements: number = (end - start) + 1;
            let gap: number = elements;
            let flipped: boolean = false;
            do {{
                gap = (<number>((<any>Math).fround(<number>gap / 1.3))|0);
                switch((gap)) {
                case 0:
                    gap = 1;
                    break;
                case 9:
                case 10:
                    gap = 11;
                    break;
                }
                flipped = false;
                const top: number = (elements - gap) + start;
                for(let i: number = start; i < top; i++) {{
                    const j: number = i + gap;
                    const result: number = cmp.compareRow(sortorder, i, j);
                    if (result > 0){
                        sortorder.exchangeRow(i, j);
                        flipped = true;
                    }
                };}
            }} while((flipped || gap > 1));
            return sortorder;
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadSorter.java 2     09/02/25 16:05 Kura $";

        static Modtime: string = "$Modtime: 09/02/25 11:19 $";

        static Workfile: string = "$Workfile: JCFSpreadSorter.java $";

        static Revision: string = "$Revision: 2 $";

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFSpreadSorter";

        static SHRINKFACTOR: number = 1.3;

        data: lib.com.fujitsu.jcf.gui.JCFSpreadData;
    }
    JCFSpreadSorter["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadSorter";

}

