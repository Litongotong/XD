/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadHeaderColumnData {
        public constructor() {
            if (this.background === undefined) { this.background = null; }
            if (this.foreground === undefined) { this.foreground = null; }
            if (this.sortorder === undefined) { this.sortorder = 0; }
            if (this.hidden === undefined) { this.hidden = false; }
            this.background = null;
            this.foreground = null;
            this.sortorder = 0;
            this.hidden = false;
        }

        getBackground(): com.java.Color {
            return this.background;
        }

        setBackground(color: com.java.Color) {
            this.background = color;
        }

        getForeground(): com.java.Color {
            return this.foreground;
        }

        setForeground(color: com.java.Color) {
            this.foreground = color;
        }

        getSortOrder(): number {
            return this.sortorder;
        }

        setSortOrder(order: number) {
            this.sortorder = order;
        }

        isHidden(): boolean {
            return this.hidden;
        }

        setHidden(hidden: boolean) {
            this.hidden = hidden;
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadHeaderColumnData.java 6     09/02/25 15:38 Kura $";

        static Modtime: string = "$Modtime: 09/02/25 10:49 $";

        static Workfile: string = "$Workfile: JCFSpreadHeaderColumnData.java $";

        static Revision: string = "$Revision: 6 $";

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFSpreadHeaderColumnData";

        static serialVersionUID: number = 5347819253808873056;

        background: com.java.Color;

        foreground: com.java.Color;

        sortorder: number;

        hidden: boolean;
    }
    JCFSpreadHeaderColumnData["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnData";

}

