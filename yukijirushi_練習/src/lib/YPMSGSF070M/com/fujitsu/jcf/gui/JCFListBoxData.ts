/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFListBoxData extends lib.com.fujitsu.jcf.gui.JCFItemData {
        public constructor(newItemID: string) {
            super(newItemID);
        }

        /**
         * 
         * @return {string}
         */
        public getValue(): string {
            return null;
        }

        public setValue$java_lang_String(s: string) {
        }

        /**
         * 
         * @param {string} s
         */
        public setValue(s?: any) {
            if (((typeof s === 'string') || s === null)) {
                return <any>this.setValue$java_lang_String(s);
            } else if (((s != null && s instanceof <any>Array && (s.length == 0 || s[0] == null ||(s[0] != null && s[0] instanceof <any>lib.com.fujitsu.jcf.gui.JCFSelectableElement))) || s === null)) {
                return <any>this.setValue$com_fujitsu_jcf_gui_JCFSelectableElement_A(s);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {lib.com.fujitsu.jcf.gui.JCFItemData} jcfitemdata
         */
        public setData(jcfitemdata: lib.com.fujitsu.jcf.gui.JCFItemData) {
        }

        /**
         * 
         * @return {*}
         */
        public getCommunicationData(): any {
            return null;
        }

        /**
         * 
         * @param {*} obj
         */
        public setCommunicationData(obj: any) {
        }

        public setValue$com_fujitsu_jcf_gui_JCFSelectableElement_A(elements: lib.com.fujitsu.jcf.gui.JCFSelectableElement[]) {
        }

        public getSelectableElementValue(): lib.com.fujitsu.jcf.gui.JCFSelectableElement[] {
            return null;
        }
    }
    JCFListBoxData["__class"] = "lib.com.fujitsu.jcf.gui.JCFListBoxData";

}

