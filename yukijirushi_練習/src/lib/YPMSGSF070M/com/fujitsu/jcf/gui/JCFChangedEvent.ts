/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFChangedEvent {
        public constructor(newDataBean: lib.com.fujitsu.jcf.gui.JCFDataBean) {
            if (this.dataBean === undefined) { this.dataBean = null; }
            this.dataBean = newDataBean;
        }

        public getDataBean(): lib.com.fujitsu.jcf.gui.JCFDataBean {
            return this.dataBean;
        }

        public static CLASS_VERSION: string = "V1L30B";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFChangedEvent";

        /*private*/ dataBean: lib.com.fujitsu.jcf.gui.JCFDataBean;
    }
    JCFChangedEvent["__class"] = "lib.com.fujitsu.jcf.gui.JCFChangedEvent";

}

