/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export class CJSpreadActionEvent extends com.java.AWTEvent {
        public constructor(source?: any, id?: any, pos?: any, component?: any) {
            if (((source != null) || source === null) && ((typeof id === 'number') || id === null) && ((pos != null && pos instanceof <any>lib.com.fujitsu.caa.CJPosition) || pos === null) && ((component != null && component instanceof <any>com.java.Component) || component === null)) {
                let __args = arguments;
                super();
                if (this.position === undefined) { this.position = null; } 
                if (this.closeMode === undefined) { this.closeMode = false; } 
                if (this.awtEvent === undefined) { this.awtEvent = null; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
            } else if (((source != null) || source === null) && ((typeof id === 'number') || id === null) && ((pos != null && pos instanceof <any>lib.com.fujitsu.caa.CJPosition) || pos === null) && component === undefined) {
                let __args = arguments;
                super();
                if (this.position === undefined) { this.position = null; } 
                if (this.closeMode === undefined) { this.closeMode = false; } 
                if (this.awtEvent === undefined) { this.awtEvent = null; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
            } else if (((source != null) || source === null) && ((typeof id === 'number') || id === null) && pos === undefined && component === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let pos: any = null;
                    super();
                    if (this.position === undefined) { this.position = null; } 
                    if (this.closeMode === undefined) { this.closeMode = false; } 
                    if (this.awtEvent === undefined) { this.awtEvent = null; } 
                    if (this.inputArea === undefined) { this.inputArea = null; } 
                }
                if (this.position === undefined) { this.position = null; } 
                if (this.closeMode === undefined) { this.closeMode = false; } 
                if (this.awtEvent === undefined) { this.awtEvent = null; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
            } else throw new Error('invalid overload');
        }

        public getComponent(): com.java.Component {
            return null;
        }

        public getInputArea(): com.java.Component {
            return this.inputArea;
        }

        public setCloseMode(mode: boolean) {
            this.closeMode = mode;
        }

        public isCloseMode(): boolean {
            return this.closeMode;
        }

        public getPosition(): lib.com.fujitsu.caa.CJPosition {
            return this.position;
        }

        public getTypeString(): string {
            return null;
        }

        public paramString(): string {
            return null;
        }

        getReason(): com.java.AWTEvent {
            return this.awtEvent;
        }

        setReason(reason: com.java.AWTEvent) {
            this.awtEvent = reason;
        }

        public getTriggerEvent(): com.java.AWTEvent {
            return this.getReason();
        }

        internal_consume() {
        }

        internal_isConsumed(): boolean {
            return false;
        }

        static Header: string = "$Header: /CAA/ClientJ/SpreadB/Current/src/com/fujitsu/caa/CJSpreadActionEvent.java 15    09/03/13 10:00 Kura $";

        static Modtime: string = "$Modtime: 09/03/12 9:00 $";

        static Workfile: string = "$Workfile: CJSpreadActionEvent.java $";

        static COPYRIGHT: string = "@(#) $Revision: 15 $ Copyright (C) 1998-2009, Fujitsu Advanced Engineering Limited. & FUJITSU LIMITED.\n";

        static Revision: string; public static Revision_$LI$(): string { if (CJSpreadActionEvent.Revision == null) { CJSpreadActionEvent.Revision = "@(#) $Revision: 15 $ Copyright (C) 1998-2009, Fujitsu Advanced Engineering Limited. & FUJITSU LIMITED.\n".substring("@(#) $Revision: 15 $ Copyright (C) 1998-2009, Fujitsu Advanced Engineering Limited. & FUJITSU LIMITED.\n".indexOf('$'), "@(#) $Revision: 15 $ Copyright (C) 1998-2009, Fujitsu Advanced Engineering Limited. & FUJITSU LIMITED.\n".lastIndexOf('$') + 1); }  return CJSpreadActionEvent.Revision; }

        static serialVersionUID: number = -347436918470537954;

        position: lib.com.fujitsu.caa.CJPosition;

        closeMode: boolean;

        awtEvent: com.java.AWTEvent;

        inputArea: com.java.Component;

        public static TABLEVIEW_FIRST: number = 3000;

        public static INPUTAREA_OPEN: number = 3000;

        public static INPUTAREA_CLOSE: number = 3001;

        public static CURSOR_MOVED: number = 3002;

        public static ALL_SELECTED: number = 3003;

        public static ALL_DESELECTED: number = 3004;

        public static ROW_SELECTED: number = 3005;

        public static ROW_DESELECTED: number = 3006;

        public static COLUMN_SELECTED: number = 3007;

        public static COLUMN_DESELECTED: number = 3008;

        public static INPUTAREA_OPENED: number = 3011;

        public static INPUTAREA_CLOSED: number = 3012;

        public static CLOSE_MOVED: number = 3034;

        public static TABLEVIEW_LAST: number = 3038;
    }
    CJSpreadActionEvent["__class"] = "lib.com.fujitsu.caa.CJSpreadActionEvent";

}

