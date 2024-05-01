/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFToggleButtonData extends lib.com.fujitsu.jcf.gui.JCFItemData {
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
            } else if (((typeof s === 'boolean') || s === null)) {
                return <any>this.setValue$boolean(s);
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

        public setValue$boolean(b: boolean) {
        }
    }
    JCFToggleButtonData["__class"] = "lib.com.fujitsu.jcf.gui.JCFToggleButtonData";

}

