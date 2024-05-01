/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa.event {
    /**
     * @deprecated Method CJCellEditEvent is deprecated
     * @param {*} source
     * @param {number} id
     * @param {number} editaction
     * @param {lib.com.fujitsu.caa.CJPosition} pos
     * @param {com.java.Component} component
     * @param {lib.com.fujitsu.caa.CJPosition} next
     * @class
     * @extends lib.com.fujitsu.caa.CJSpreadActionEvent
     */
    export class CJCellEditEvent extends lib.com.fujitsu.caa.CJSpreadActionEvent {
        public constructor(source: any, id: number, editaction: number, pos: lib.com.fujitsu.caa.CJPosition, component: com.java.Component, next: lib.com.fujitsu.caa.CJPosition) {
            super(source, id, pos, component);
            if (this.focusTransfer === undefined) { this.focusTransfer = 0; }
            if (this.nextPos === undefined) { this.nextPos = null; }
            if (this.subaction === undefined) { this.subaction = 0; }
            this.focusTransfer = 0;
            this.nextPos = next;
            this.subaction = editaction;
        }

        public getFocusTransfer(): number {
            return this.focusTransfer;
        }

        public setFocusTransfer(transfer: number) {
            this.focusTransfer = transfer;
        }

        public getNextPos(): lib.com.fujitsu.caa.CJPosition {
            return this.nextPos;
        }

        public paramString(): string {
            const buf: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
            /* append */(sb => { sb.str += <any>super.paramString(); return sb; })(buf);
            switch((this.subaction)) {
            case 5:
                /* append */(sb => { sb.str += <any>",editAction=INPUTAREACLOSE_ACTIONBYFUNCTION"; return sb; })(buf);
                break;
            case 3:
                /* append */(sb => { sb.str += <any>",editAction=INPUTAREACLOSE_ACTIONKEY"; return sb; })(buf);
                break;
            case 4:
                /* append */(sb => { sb.str += <any>",editAction=INPUTAREACLOSE_ESCAPE"; return sb; })(buf);
                break;
            case 6:
                /* append */(sb => { sb.str += <any>",editAction=INPUTAREACLOSE_ESCAPEBYFUNCTION"; return sb; })(buf);
                break;
            case 0:
                /* append */(sb => { sb.str += <any>",editAction=INPUTAREAOPEN_ACTIONKEY"; return sb; })(buf);
                break;
            case 1:
                /* append */(sb => { sb.str += <any>",editAction=INPUTAREAOPEN_VALUEINPUT"; return sb; })(buf);
                break;
            case 2:
            default:
                /* append */(sb => { sb.str += <any>",editAction=unknown"; return sb; })(buf);
                break;
            }
            switch((this.focusTransfer)) {
            case 0:
                /* append */(sb => { sb.str += <any>",focusTransfer=REQUESTFOCUS_LATER"; return sb; })(buf);
                break;
            case 1:
                /* append */(sb => { sb.str += <any>",focusTransfer=NOT_REQUESTFOCUS"; return sb; })(buf);
                break;
            case 2:
                /* append */(sb => { sb.str += <any>",focusTransfer=REQUESTFOCUS_ONCLOSE"; return sb; })(buf);
                break;
            }
            if (this.nextPos != null){
                /* append */(sb => { sb.str += <any>",nextPos="; return sb; })(buf);
                /* append */(sb => { sb.str += <any>this.nextPos.toString(); return sb; })(buf);
            }
            return buf.str;
        }

        public getEditAction(): number {
            return this.subaction;
        }

        static Header: string = "$Header: /CAA/ClientJ/SpreadB/Current/src/com/fujitsu/caa/event/CJCellEditEvent.java 9     09/10/22 16:56 Kura $";

        static Modtime: string = "$Modtime: 09/10/22 16:55 $";

        static Workfile: string = "$Workfile: CJCellEditEvent.java $";

        static COPYRIGHT: string = "@(#) $Revision: 9 $ Copyright (C) 2000-2009, Fujitsu Advanced Engineering Limited.\n";

        static Revision: string; public static Revision_$LI$(): string { if (CJCellEditEvent.Revision == null) { CJCellEditEvent.Revision = "@(#) $Revision: 9 $ Copyright (C) 2000-2009, Fujitsu Advanced Engineering Limited.\n".substring("@(#) $Revision: 9 $ Copyright (C) 2000-2009, Fujitsu Advanced Engineering Limited.\n".indexOf('$'), "@(#) $Revision: 9 $ Copyright (C) 2000-2009, Fujitsu Advanced Engineering Limited.\n".lastIndexOf('$') + 1); }  return CJCellEditEvent.Revision; }

        static serialVersionUID: number = -7650444270978472895;

        public static INPUTAREAOPEN_ACTIONKEY: number = 0;

        public static INPUTAREAOPEN_VALUEINPUT: number = 1;

        public static INPUTAREACLOSE_ACTIONKEY: number = 3;

        public static INPUTAREACLOSE_ESCAPE: number = 4;

        public static INPUTAREACLOSE_ACTIONBYFUNCTION: number = 5;

        public static INPUTAREACLOSE_ESCAPEBYFUNCTION: number = 6;

        focusTransfer: number;

        nextPos: lib.com.fujitsu.caa.CJPosition;

        subaction: number;
    }
    CJCellEditEvent["__class"] = "lib.com.fujitsu.caa.event.CJCellEditEvent";

}

