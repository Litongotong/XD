/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export class CJCellActionEvent extends lib.com.fujitsu.caa.event.CJActionEvent implements lib.com.fujitsu.caa.event.CJTrigger, lib.com.fujitsu.caa.CJOwner {
        public constructor(source?: any, id?: any, command?: any, modifiers?: any, pos?: any, trigger?: any) {
            if (((source != null) || source === null) && ((typeof id === 'number') || id === null) && ((typeof command === 'string') || command === null) && ((typeof modifiers === 'number') || modifiers === null) && ((pos != null && pos instanceof <any>lib.com.fujitsu.caa.CJPosition) || pos === null) && ((trigger != null && trigger instanceof <any>com.java.AWTEvent) || trigger === null)) {
                let __args = arguments;
                super();
                if (this.cellPosition === undefined) { this.cellPosition = null; } 
            } else if (((source != null) || source === null) && ((typeof id === 'number') || id === null) && ((typeof command === 'string') || command === null) && ((modifiers != null && modifiers instanceof <any>lib.com.fujitsu.caa.CJPosition) || modifiers === null) && ((pos != null && pos instanceof <any>com.java.InputEvent) || pos === null) && trigger === undefined) {
                let __args = arguments;
                let pos: any = __args[3];
                let trigger: any = __args[4];
                super();
                if (this.cellPosition === undefined) { this.cellPosition = null; } 
            } else if (((source != null) || source === null) && ((typeof id === 'number') || id === null) && ((typeof command === 'string') || command === null) && ((typeof modifiers === 'number') || modifiers === null) && ((pos != null && pos instanceof <any>lib.com.fujitsu.caa.CJPosition) || pos === null) && trigger === undefined) {
                let __args = arguments;
                super();
                if (this.cellPosition === undefined) { this.cellPosition = null; } 
            } else if (((source != null) || source === null) && ((typeof id === 'number') || id === null) && ((typeof command === 'string') || command === null) && ((typeof modifiers === 'number') || modifiers === null) && pos === undefined && trigger === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let pos: any = (<lib.com.fujitsu.caa.CJPosition>(null));
                    super();
                    if (this.cellPosition === undefined) { this.cellPosition = null; } 
                }
                if (this.cellPosition === undefined) { this.cellPosition = null; } 
            } else if (((source != null) || source === null) && ((typeof id === 'number') || id === null) && ((typeof command === 'string') || command === null) && modifiers === undefined && pos === undefined && trigger === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let modifiers: any = 0;
                    let pos: any = (<lib.com.fujitsu.caa.CJPosition>(null));
                    super();
                    if (this.cellPosition === undefined) { this.cellPosition = null; } 
                }
                if (this.cellPosition === undefined) { this.cellPosition = null; } 
            } else if (((source != null && source instanceof <any>lib.com.fujitsu.caa.CJCellActionEvent) || source === null) && id === undefined && command === undefined && modifiers === undefined && pos === undefined && trigger === undefined) {
                let __args = arguments;
                let trigger: any = __args[0];
                super();
                if (this.cellPosition === undefined) { this.cellPosition = null; } 
            } else throw new Error('invalid overload');
        }

        public duplicate(): lib.com.fujitsu.caa.event.CJActionEvent {
            return null;
        }

        public getPosition(): lib.com.fujitsu.caa.CJPosition {
            return this.cellPosition;
        }

        public getOwner(): com.java.Component {
            return null;
        }

        public paramString(): string {
            return null;
        }

        static Header: string = "$Header: /CAA/Java/Current/com/fujitsu/caa/CJCellActionEvent.java 11    03/02/14 10:15 Kura $";

        static Modtime: string = "$Modtime: 03/02/14 10:14 $";

        static Workfile: string = "$Workfile: CJCellActionEvent.java $";

        static COPYRIGHT: string = "@(#) $Revision: 11 $ Copyright (C) 2000-2002, FFC Limited.\n";

        static Revision: string; public static Revision_$LI$(): string { if (CJCellActionEvent.Revision == null) { CJCellActionEvent.Revision = "@(#) $Revision: 11 $ Copyright (C) 2000-2002, FFC Limited.\n".substring("@(#) $Revision: 11 $ Copyright (C) 2000-2002, FFC Limited.\n".indexOf('$'), "@(#) $Revision: 11 $ Copyright (C) 2000-2002, FFC Limited.\n".lastIndexOf('$') + 1); }  return CJCellActionEvent.Revision; }

        static serialVersionUID: number = 250301609086118465;

        cellPosition: lib.com.fujitsu.caa.CJPosition;
    }
    CJCellActionEvent["__class"] = "lib.com.fujitsu.caa.CJCellActionEvent";
    CJCellActionEvent["__interfaces"] = ["lib.com.fujitsu.caa.CJOwner","lib.com.fujitsu.caa.event.CJTrigger"];


}

