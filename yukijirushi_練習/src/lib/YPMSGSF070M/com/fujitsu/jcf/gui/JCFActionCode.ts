/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFActionCode {
        public constructor() {
            if (this.listOfFirableActionCode === undefined) { this.listOfFirableActionCode = null; }
            this.listOfFirableActionCode = null;
        }

        public setFirableActionCode(newArrayList: Array<any>) {
            this.listOfFirableActionCode = newArrayList;
        }

        public getKeyActionCode(vkCode: number, shift: boolean, ctrl: boolean, alt: boolean): string {
            let actionCode: string;
            switch((vkCode)) {
            case 112:
                actionCode = "SYSF01";
                break;
            case 113:
                actionCode = "SYSF02";
                break;
            case 114:
                actionCode = "SYSF03";
                break;
            case 115:
                actionCode = "SYSF04";
                break;
            case 116:
                actionCode = "SYSF05";
                break;
            case 117:
                actionCode = "SYSF06";
                break;
            case 118:
                actionCode = "SYSF07";
                break;
            case 119:
                actionCode = "SYSF08";
                break;
            case 120:
                actionCode = "SYSF09";
                break;
            case 121:
                actionCode = "SYSF10";
                break;
            case 122:
                actionCode = "SYSF11";
                break;
            case 123:
                actionCode = "SYSF12";
                break;
            case 36:
                actionCode = "SYSHOME";
                break;
            case 35:
                actionCode = "SYSEND";
                break;
            case 33:
                actionCode = "SYSPAGEUP";
                break;
            case 34:
                actionCode = "SYSPAGEDOWN";
                break;
            case 10:
                actionCode = "SYSENTER";
                break;
            case 9:
                actionCode = "SYSTAB";
                break;
            case 38:
                actionCode = "SYSUP";
                break;
            case 40:
                actionCode = "SYSDOWN";
                break;
            case 37:
                actionCode = "SYSLEFT";
                break;
            case 39:
                actionCode = "SYSRIGHT";
                break;
            case 27:
                actionCode = "SYSESC";
                break;
            case 145:
                actionCode = "SYSSCROLLLOCK";
                break;
            case 19:
                actionCode = "SYSPAUSE";
                break;
            default:
                return null;
            }
            actionCode = /* toString *//* append */(sb => { sb.str += <any>this.getModifierActionCode(shift, ctrl, alt); return sb; })(({ str: /* valueOf */String(actionCode).toString(), toString: function() { return this.str; } })).str;
            if (this.listOfFirableActionCode == null)return null;
            if (/* contains */(this.listOfFirableActionCode.indexOf(<any>(actionCode)) >= 0))return actionCode; else return null;
        }

        public getMouseActionCode(buttonCode: number, shift: boolean, ctrl: boolean, alt: boolean): string {
            if (this.listOfFirableActionCode == null)return null;
            if (/* contains */(this.listOfFirableActionCode.indexOf(<any>("SYSITEMCLICK")) >= 0))return "SYSITEMCLICK"; else return null;
        }

        /*private*/ getModifierActionCode(shift: boolean, ctrl: boolean, alt: boolean): string {
            let actionCode: string = "";
            if (shift)actionCode = /* toString *//* append */(sb => { sb.str += <any>"S"; return sb; })(({ str: /* valueOf */String(actionCode).toString(), toString: function() { return this.str; } })).str; else actionCode = /* toString *//* append */(sb => { sb.str += <any>"0"; return sb; })(({ str: /* valueOf */String(actionCode).toString(), toString: function() { return this.str; } })).str;
            if (ctrl)actionCode = /* toString *//* append */(sb => { sb.str += <any>"C"; return sb; })(({ str: /* valueOf */String(actionCode).toString(), toString: function() { return this.str; } })).str; else actionCode = /* toString *//* append */(sb => { sb.str += <any>"0"; return sb; })(({ str: /* valueOf */String(actionCode).toString(), toString: function() { return this.str; } })).str;
            if (alt)actionCode = /* toString *//* append */(sb => { sb.str += <any>"A"; return sb; })(({ str: /* valueOf */String(actionCode).toString(), toString: function() { return this.str; } })).str; else actionCode = /* toString *//* append */(sb => { sb.str += <any>"0"; return sb; })(({ str: /* valueOf */String(actionCode).toString(), toString: function() { return this.str; } })).str;
            return actionCode;
        }

        public static CLASS_VERSION: string = "V3L20";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2013";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFActionCode";

        public static AC_F1: string = "SYSF01";

        public static AC_F2: string = "SYSF02";

        public static AC_F3: string = "SYSF03";

        public static AC_F4: string = "SYSF04";

        public static AC_F5: string = "SYSF05";

        public static AC_F6: string = "SYSF06";

        public static AC_F7: string = "SYSF07";

        public static AC_F8: string = "SYSF08";

        public static AC_F9: string = "SYSF09";

        public static AC_F10: string = "SYSF10";

        public static AC_F11: string = "SYSF11";

        public static AC_F12: string = "SYSF12";

        public static AC_HOME: string = "SYSHOME";

        public static AC_END: string = "SYSEND";

        public static AC_PAGE_UP: string = "SYSPAGEUP";

        public static AC_PAGE_DOWN: string = "SYSPAGEDOWN";

        public static AC_ENTER: string = "SYSENTER";

        public static AC_TAB: string = "SYSTAB";

        public static AC_UP: string = "SYSUP";

        public static AC_DOWN: string = "SYSDOWN";

        public static AC_LEFT: string = "SYSLEFT";

        public static AC_RIGHT: string = "SYSRIGHT";

        public static AC_ESCAPE: string = "SYSESC";

        public static AC_SCROLL_LOCK: string = "SYSSCROLLLOCK";

        public static AC_PAUSE: string = "SYSPAUSE";

        public static AC_ITEMCLICK: string = "SYSITEMCLICK";

        public listOfFirableActionCode: Array<any>;
    }
    JCFActionCode["__class"] = "lib.com.fujitsu.jcf.gui.JCFActionCode";

}

