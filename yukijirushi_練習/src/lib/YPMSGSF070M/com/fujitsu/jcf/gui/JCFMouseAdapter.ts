/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFMouseAdapter implements com.java.MouseListener {
        public constructor(actionCodeInfo: lib.com.fujitsu.jcf.gui.JCFActionCode) {
            if (this.pushedButtonMap === undefined) { this.pushedButtonMap = null; }
            if (this.actionCodeInfo === undefined) { this.actionCodeInfo = null; }
            if (this.subsystemID === undefined) { this.subsystemID = null; }
            this.pushedButtonMap = <any>({});
            this.actionCodeInfo = null;
            this.subsystemID = "";
            this.actionCodeInfo = actionCodeInfo;
        }

        public mousePressed(event: com.java.MouseEvent) {
        }

        public mouseReleased(event: com.java.MouseEvent) {
        }

        public mouseClicked(mouseevent: com.java.MouseEvent) {
        }

        public mouseEntered(mouseevent: com.java.MouseEvent) {
        }

        public mouseExited(mouseevent: com.java.MouseEvent) {
        }

        public canFireOthersClick(component: com.java.Component): boolean {
            return true;
        }

        public setSubsystemID(subsystemID: string) {
            this.subsystemID = subsystemID;
        }

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFMouseAdapter";

        /*private*/ pushedButtonMap: any;

        /*private*/ actionCodeInfo: lib.com.fujitsu.jcf.gui.JCFActionCode;

        /*private*/ subsystemID: string;
    }
    JCFMouseAdapter["__class"] = "lib.com.fujitsu.jcf.gui.JCFMouseAdapter";
    JCFMouseAdapter["__interfaces"] = ["com.java.MouseListener"];


}

