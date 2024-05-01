/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFKeyAdapter {
        public constructor(actionCodeInfo: lib.com.fujitsu.jcf.gui.JCFActionCode) {
            if (this.userKeyAdapter === undefined) { this.userKeyAdapter = null; }
            if (this.actionCodeInfo === undefined) { this.actionCodeInfo = null; }
            if (this.subsystemID === undefined) { this.subsystemID = null; }
        }

        getUserKeyAdapter(instance: any): com.java.KeyListener {
            return null;
        }

        public keyPressed(event: com.java.KeyEvent) {
        }

        public keyReleased(event: com.java.KeyEvent) {
        }

        public keyTyped(event: com.java.KeyEvent) {
        }

        public setSubsystemID(subsystemID: string) {
            this.subsystemID = subsystemID;
        }

        public static CLASS_VERSION: string = "V1L30B";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFKeyAdapter";

        /*private*/ userKeyAdapter: com.java.KeyListener;

        /*private*/ actionCodeInfo: lib.com.fujitsu.jcf.gui.JCFActionCode;

        /*private*/ subsystemID: string;
    }
    JCFKeyAdapter["__class"] = "lib.com.fujitsu.jcf.gui.JCFKeyAdapter";

}

