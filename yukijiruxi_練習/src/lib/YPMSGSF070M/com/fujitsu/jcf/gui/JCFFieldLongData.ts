/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFFieldLongData extends lib.com.fujitsu.jcf.gui.JCFItemData {
        public constructor(newItemID: string) {
            super(newItemID);
        }

        public setEnabled(b: boolean) {
        }

        public setBackground$java_lang_String(default1: string) {
        }

        public setBackground(default1?: any) {
            if (((typeof default1 === 'string') || default1 === null)) {
                return <any>this.setBackground$java_lang_String(default1);
            } else if (((default1 != null && default1 instanceof <any>com.java.Color) || default1 === null)) {
                super.setBackground(default1);
            } else throw new Error('invalid overload');
        }

        public setValue$java_lang_Object(hyoujiKaishi: any) {
        }

        public getLongValue(): number {
            return 0;
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
            } else if (((s != null) || s === null)) {
                return <any>this.setValue$java_lang_Object(s);
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
    }
    JCFFieldLongData["__class"] = "lib.com.fujitsu.jcf.gui.JCFFieldLongData";

}

