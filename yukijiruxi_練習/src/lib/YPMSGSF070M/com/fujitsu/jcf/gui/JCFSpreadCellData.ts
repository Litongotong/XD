/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadCellData extends lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellData {
        public constructor() {
            super();
            if (this.booleanValue === undefined) { this.booleanValue = false; }
            if (this.selectedIndex === undefined) { this.selectedIndex = 0; }
            if (this.dateValue === undefined) { this.dateValue = null; }
            if (this.editable === undefined) { this.editable = false; }
            this.booleanValue = false;
            this.selectedIndex = -1;
            this.dateValue = null;
            this.editable = true;
        }

        getBooleanValue(): boolean {
            return this.booleanValue;
        }

        setValue$boolean(newValue: boolean) {
            this.booleanValue = newValue;
            this.parsed = null;
        }

        getDateValue(): com.java.Date {
            return this.dateValue;
        }

        public setValue$com_java_Date(newValue: com.java.Date) {
            this.dateValue = newValue;
            this.parsed = null;
        }

        public setValue(newValue?: any) {
            if (((newValue != null && newValue instanceof <any>com.java.Date) || newValue === null)) {
                return <any>this.setValue$com_java_Date(newValue);
            } else if (((typeof newValue === 'string') || newValue === null)) {
                super.setValue(newValue);
            } else if (((typeof newValue === 'boolean') || newValue === null)) {
                return <any>this.setValue$boolean(newValue);
            } else throw new Error('invalid overload');
        }

        getSelectedIndex(): number {
            return this.selectedIndex;
        }

        setSelectedIndex(index: number) {
            this.selectedIndex = index;
        }

        public isEditable(): boolean {
            return this.editable;
        }

        public setEditable(editable: boolean) {
            this.editable = editable;
        }

        public isHidden(): boolean {
            return this.hidden;
        }

        setHidden(hidden: boolean) {
            this.hidden = hidden;
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadCellData.java 10    09/02/25 11:37 Kura $";

        static Modtime: string = "$Modtime: 09/02/24 18:24 $";

        static Workfile: string = "$Workfile: JCFSpreadCellData.java $";

        static Revision: string = "$Revision: 10 $";

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static __com_fujitsu_jcf_gui_JCFSpreadCellData_CLASS_NAME: string = "JCFSpreadCellData";

        static serialVersionUID: number = 1294800605959805069;

        booleanValue: boolean;

        selectedIndex: number;

        dateValue: com.java.Date;

        editable: boolean;
    }
    JCFSpreadCellData["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadCellData";

}

