/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadHeaderCellData {
        public constructor() {
            if (this.background === undefined) { this.background = null; }
            if (this.foreground === undefined) { this.foreground = null; }
            if (this.value === undefined) { this.value = null; }
            if (this.selected === undefined) { this.selected = false; }
            if (this.recno === undefined) { this.recno = 0; }
            if (this.hidden === undefined) { this.hidden = false; }
            if (this.deleted === undefined) { this.deleted = false; }
            if (this.rowHidden === undefined) { this.rowHidden = false; }
            if (this.parsed === undefined) { this.parsed = null; }
            this.background = null;
            this.foreground = null;
            this.value = "";
            this.selected = false;
            this.recno = -1;
            this.hidden = false;
            this.deleted = false;
            this.rowHidden = false;
            this.parsed = null;
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

        getValue(): string {
            return this.value;
        }

        setValue(newValue: string) {
            this.value = newValue;
            this.parsed = null;
        }

        isSelected(): boolean {
            return this.selected;
        }

        setSelected(select: boolean) {
            this.selected = select;
        }

        getRecordNumber(): number {
            return this.recno;
        }

        setRecordNumber(recno: number) {
            this.recno = recno;
        }

        public isDeleted(): boolean {
            return this.deleted;
        }

        setDeleted(deleted: boolean) {
            this.deleted = deleted;
        }

        public isRowVisible(): boolean {
            return !this.rowHidden;
        }

        public setRowVisible(visible: boolean) {
            if (visible)this.rowHidden = false; else this.rowHidden = true;
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadHeaderCellData.java 11    09/02/25 14:26 Kura $";

        static Modtime: string = "$Modtime: 09/02/25 10:41 $";

        static Workfile: string = "$Workfile: JCFSpreadHeaderCellData.java $";

        static Revision: string = "$Revision: 11 $";

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFSpreadHeaderCellData";

        static serialVersionUID: number = -4389664217391900713;

        background: com.java.Color;

        foreground: com.java.Color;

        value: string;

        selected: boolean;

        recno: number;

        hidden: boolean;

        deleted: boolean;

        rowHidden: boolean;

        parsed: any;
    }
    JCFSpreadHeaderCellData["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellData";

}

