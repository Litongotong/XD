/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export class CJCellItemEvent extends lib.com.fujitsu.caa.event.CJItemEvent {
        public constructor(source?: any, id?: any, item?: any, stateChange?: any, pos?: any, label?: any, trigger?: any) {
            if (((source != null && source instanceof <any>com.java.ItemSelectable) || source === null) && ((typeof id === 'number') || id === null) && ((item != null) || item === null) && ((typeof stateChange === 'number') || stateChange === null) && ((pos != null && pos instanceof <any>lib.com.fujitsu.caa.CJPosition) || pos === null) && ((typeof label === 'string') || label === null) && ((trigger != null && trigger instanceof <any>com.java.AWTEvent) || trigger === null)) {
                let __args = arguments;
                super();
                if (this.cellPosition === undefined) { this.cellPosition = null; } 
                if (this.itemLabel === undefined) { this.itemLabel = null; } 
            } else if (((source != null && source instanceof <any>com.java.ItemSelectable) || source === null) && ((typeof id === 'number') || id === null) && ((item != null) || item === null) && ((typeof stateChange === 'number') || stateChange === null) && ((pos != null && pos instanceof <any>lib.com.fujitsu.caa.CJPosition) || pos === null) && ((typeof label === 'string') || label === null) && trigger === undefined) {
                let __args = arguments;
                super();
                if (this.cellPosition === undefined) { this.cellPosition = null; } 
                if (this.itemLabel === undefined) { this.itemLabel = null; } 
            } else if (((source != null && source instanceof <any>com.java.ItemSelectable) || source === null) && ((typeof id === 'number') || id === null) && ((item != null) || item === null) && ((typeof stateChange === 'number') || stateChange === null) && ((pos != null && pos instanceof <any>lib.com.fujitsu.caa.CJPosition) || pos === null) && label === undefined && trigger === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let label: any = null;
                    super();
                    if (this.cellPosition === undefined) { this.cellPosition = null; } 
                    if (this.itemLabel === undefined) { this.itemLabel = null; } 
                }
                if (this.cellPosition === undefined) { this.cellPosition = null; } 
                if (this.itemLabel === undefined) { this.itemLabel = null; } 
            } else if (((source != null && source instanceof <any>com.java.ItemSelectable) || source === null) && ((typeof id === 'number') || id === null) && ((item != null) || item === null) && ((typeof stateChange === 'number') || stateChange === null) && pos === undefined && label === undefined && trigger === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let pos: any = null;
                    let label: any = null;
                    super();
                    if (this.cellPosition === undefined) { this.cellPosition = null; } 
                    if (this.itemLabel === undefined) { this.itemLabel = null; } 
                }
                if (this.cellPosition === undefined) { this.cellPosition = null; } 
                if (this.itemLabel === undefined) { this.itemLabel = null; } 
            } else throw new Error('invalid overload');
        }

        public getPosition(): lib.com.fujitsu.caa.CJPosition {
            return this.cellPosition;
        }

        public getLabel(): string {
            return <string>new String(this.itemLabel);
        }

        public paramString(): string {
            return null;
        }

        static Header: string = "$Header: /CAA/Java/TOYOTA/Gantt/com/fujitsu/caa/CJCellItemEvent.java 13    02/07/08 11:32 Kura $";

        static Modtime: string = "$Modtime: 02/07/05 19:46 $";

        static Workfile: string = "$Workfile: CJCellItemEvent.java $";

        static COPYRIGHT: string = "@(#) $Revision: 13 $ Copyright (C) 2000-2002, FFC Limited.\n";

        static Revision: string; public static Revision_$LI$(): string { if (CJCellItemEvent.Revision == null) { CJCellItemEvent.Revision = "@(#) $Revision: 13 $ Copyright (C) 2000-2002, FFC Limited.\n".substring("@(#) $Revision: 13 $ Copyright (C) 2000-2002, FFC Limited.\n".indexOf('$'), "@(#) $Revision: 13 $ Copyright (C) 2000-2002, FFC Limited.\n".lastIndexOf('$') + 1); }  return CJCellItemEvent.Revision; }

        cellPosition: lib.com.fujitsu.caa.CJPosition;

        itemLabel: string;
    }
    CJCellItemEvent["__class"] = "lib.com.fujitsu.caa.CJCellItemEvent";

}

