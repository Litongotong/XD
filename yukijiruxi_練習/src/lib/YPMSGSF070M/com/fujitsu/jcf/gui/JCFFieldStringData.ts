/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFFieldStringData extends lib.com.fujitsu.jcf.gui.JCFItemData {
        public constructor(itemID: string) {
            super(itemID);
            if (this.value === undefined) { this.value = null; }
            this.value = "";
        }

        public getValue(): string {
            return this.value;
        }

        public setValue(newValue: string) {
            if (newValue == null)newValue = "";
            this.value = newValue;
            this.callChangedListener();
        }

        public setDataAndAttributes$com_fujitsu_jcf_gui_JCFItemData(itemData: lib.com.fujitsu.jcf.gui.JCFItemData) {
            if (itemData == null)return;
            if (!(itemData != null && itemData instanceof <any>lib.com.fujitsu.jcf.gui.JCFFieldStringData)){
                return;
            } else {
                this.setData(itemData);
                super.setDataAndAttributes$com_fujitsu_jcf_gui_JCFItemData(itemData);
                return;
            }
        }

        public setDataAndAttributes(itemData?: any) {
            if (((itemData != null && itemData instanceof <any>lib.com.fujitsu.jcf.gui.JCFItemData) || itemData === null)) {
                return <any>this.setDataAndAttributes$com_fujitsu_jcf_gui_JCFItemData(itemData);
            } else if (((itemData != null && itemData instanceof <any>lib.com.fujitsu.jcf.gui.JCFDataBean) || itemData === null)) {
                super.setDataAndAttributes(itemData);
            } else throw new Error('invalid overload');
        }

        public setData(itemData: lib.com.fujitsu.jcf.gui.JCFItemData) {
            if (itemData == null)return;
            if (!(itemData != null && itemData instanceof <any>lib.com.fujitsu.jcf.gui.JCFFieldStringData)){
                return;
            } else {
                const fieldStringData: JCFFieldStringData = <JCFFieldStringData>itemData;
                this.setValue(fieldStringData.getValue());
                return;
            }
        }

        public getCommunicationData(): any {
            return this.getValue();
        }

        public setCommunicationData(newValue: any) {
            this.setValue(<string>newValue);
        }

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2010";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static __com_fujitsu_jcf_gui_JCFFieldStringData_CLASS_NAME: string = "JCFFieldStringData";

        /*private*/ value: string;
    }
    JCFFieldStringData["__class"] = "lib.com.fujitsu.jcf.gui.JCFFieldStringData";

}

