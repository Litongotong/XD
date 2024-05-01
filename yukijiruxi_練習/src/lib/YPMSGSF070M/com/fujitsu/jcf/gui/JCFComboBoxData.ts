/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFComboBoxData extends lib.com.fujitsu.jcf.gui.JCFItemData {
        public constructor(newItemID: string) {
            super(newItemID);
        }

        public getSelectableElementValue(): lib.com.fujitsu.jcf.gui.JCFSelectableElement[] {
            return null;
        }

        /**
         * 
         * @return {string}
         */
        public getValue(): string {
            return null;
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

        public setValue(elements?: any) {
            if (((elements != null && elements instanceof <any>Array && (elements.length == 0 || elements[0] == null ||(elements[0] != null && elements[0] instanceof <any>lib.com.fujitsu.jcf.gui.JCFSelectableElement))) || elements === null)) {
                return <any>this.setValue$com_fujitsu_jcf_gui_JCFSelectableElement_A(elements);
            } else if (((typeof elements === 'string') || elements === null)) {
                return <any>this.setValue$java_lang_String(elements);
            } else throw new Error('invalid overload');
        }

        public setValue$java_lang_String(s: string) {
        }
    }
    JCFComboBoxData["__class"] = "lib.com.fujitsu.jcf.gui.JCFComboBoxData";

}

