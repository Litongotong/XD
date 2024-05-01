/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export class CJScrollbar extends lib.com.fujitsu.caa.CJComponent {
        public constructor(orientation?: any, value?: any, visible?: any, minimum?: any, maximum?: any) {
            if (((typeof orientation === 'number') || orientation === null) && ((typeof value === 'number') || value === null) && ((typeof visible === 'number') || visible === null) && ((typeof minimum === 'number') || minimum === null) && ((typeof maximum === 'number') || maximum === null)) {
                let __args = arguments;
                super();
                if (this.maximum === undefined) { this.maximum = 0; } 
                if (this.minimum === undefined) { this.minimum = 0; } 
                if (this.visibleAmount === undefined) { this.visibleAmount = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.orientation === undefined) { this.orientation = 0; } 
                if (this.unit === undefined) { this.unit = 0; } 
                if (this.block === undefined) { this.block = 0; } 
                if (this.dragStart === undefined) { this.dragStart = 0; } 
                if (this.bodyImage === undefined) { this.bodyImage = null; } 
                if (this.barImage === undefined) { this.barImage = null; } 
                if (this.barSize === undefined) { this.barSize = null; } 
                if (this.rect1 === undefined) { this.rect1 = null; } 
                if (this.rect2 === undefined) { this.rect2 = null; } 
                if (this.rect3 === undefined) { this.rect3 = null; } 
                if (this.rect4 === undefined) { this.rect4 = null; } 
                if (this.rect5 === undefined) { this.rect5 = null; } 
                if (this.pressFlag === undefined) { this.pressFlag = 0; } 
                if (this.pressingFlag === undefined) { this.pressingFlag = 0; } 
                if (this.draggingValue === undefined) { this.draggingValue = 0; } 
                if (this.exited === undefined) { this.exited = false; } 
                if (this.mousePoint === undefined) { this.mousePoint = null; } 
                if (this.timer === undefined) { this.timer = null; } 
                if (this.adjustmentListener === undefined) { this.adjustmentListener = null; } 
                if (this.listenerLock === undefined) { this.listenerLock = null; } 
                if (this.normalCursor === undefined) { this.normalCursor = null; } 
                if (this.visibleBar === undefined) { this.visibleBar = false; } 
                if (this.disableColor === undefined) { this.disableColor = false; } 
                if (this.scrollbarSerialVersion === undefined) { this.scrollbarSerialVersion = 0; } 
                if (this.downunit === undefined) { this.downunit = 0; } 
                if (this.downblock === undefined) { this.downblock = 0; } 
                if (this.useLargeUnitThanBlock === undefined) { this.useLargeUnitThanBlock = false; } 
                if (this.smoothValue === undefined) { this.smoothValue = false; } 
                if (this.owner === undefined) { this.owner = null; } 
                if (this.r2b === undefined) { this.r2b = null; } 
                if (this.r3b === undefined) { this.r3b = null; } 
            } else if (((typeof orientation === 'number') || orientation === null) && value === undefined && visible === undefined && minimum === undefined && maximum === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let value: any = CJScrollbar.defaultValue;
                    let visible: any = CJScrollbar.defaultVisible;
                    let minimum: any = CJScrollbar.defaultMin;
                    let maximum: any = CJScrollbar.defaultMax;
                    super();
                    if (this.maximum === undefined) { this.maximum = 0; } 
                    if (this.minimum === undefined) { this.minimum = 0; } 
                    if (this.visibleAmount === undefined) { this.visibleAmount = 0; } 
                    if (this.value === undefined) { this.value = 0; } 
                    if (this.orientation === undefined) { this.orientation = 0; } 
                    if (this.unit === undefined) { this.unit = 0; } 
                    if (this.block === undefined) { this.block = 0; } 
                    if (this.dragStart === undefined) { this.dragStart = 0; } 
                    if (this.bodyImage === undefined) { this.bodyImage = null; } 
                    if (this.barImage === undefined) { this.barImage = null; } 
                    if (this.barSize === undefined) { this.barSize = null; } 
                    if (this.rect1 === undefined) { this.rect1 = null; } 
                    if (this.rect2 === undefined) { this.rect2 = null; } 
                    if (this.rect3 === undefined) { this.rect3 = null; } 
                    if (this.rect4 === undefined) { this.rect4 = null; } 
                    if (this.rect5 === undefined) { this.rect5 = null; } 
                    if (this.pressFlag === undefined) { this.pressFlag = 0; } 
                    if (this.pressingFlag === undefined) { this.pressingFlag = 0; } 
                    if (this.draggingValue === undefined) { this.draggingValue = 0; } 
                    if (this.exited === undefined) { this.exited = false; } 
                    if (this.mousePoint === undefined) { this.mousePoint = null; } 
                    if (this.timer === undefined) { this.timer = null; } 
                    if (this.adjustmentListener === undefined) { this.adjustmentListener = null; } 
                    if (this.listenerLock === undefined) { this.listenerLock = null; } 
                    if (this.normalCursor === undefined) { this.normalCursor = null; } 
                    if (this.visibleBar === undefined) { this.visibleBar = false; } 
                    if (this.disableColor === undefined) { this.disableColor = false; } 
                    if (this.scrollbarSerialVersion === undefined) { this.scrollbarSerialVersion = 0; } 
                    if (this.downunit === undefined) { this.downunit = 0; } 
                    if (this.downblock === undefined) { this.downblock = 0; } 
                    if (this.useLargeUnitThanBlock === undefined) { this.useLargeUnitThanBlock = false; } 
                    if (this.smoothValue === undefined) { this.smoothValue = false; } 
                    if (this.owner === undefined) { this.owner = null; } 
                    if (this.r2b === undefined) { this.r2b = null; } 
                    if (this.r3b === undefined) { this.r3b = null; } 
                }
                if (this.maximum === undefined) { this.maximum = 0; } 
                if (this.minimum === undefined) { this.minimum = 0; } 
                if (this.visibleAmount === undefined) { this.visibleAmount = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.orientation === undefined) { this.orientation = 0; } 
                if (this.unit === undefined) { this.unit = 0; } 
                if (this.block === undefined) { this.block = 0; } 
                if (this.dragStart === undefined) { this.dragStart = 0; } 
                if (this.bodyImage === undefined) { this.bodyImage = null; } 
                if (this.barImage === undefined) { this.barImage = null; } 
                if (this.barSize === undefined) { this.barSize = null; } 
                if (this.rect1 === undefined) { this.rect1 = null; } 
                if (this.rect2 === undefined) { this.rect2 = null; } 
                if (this.rect3 === undefined) { this.rect3 = null; } 
                if (this.rect4 === undefined) { this.rect4 = null; } 
                if (this.rect5 === undefined) { this.rect5 = null; } 
                if (this.pressFlag === undefined) { this.pressFlag = 0; } 
                if (this.pressingFlag === undefined) { this.pressingFlag = 0; } 
                if (this.draggingValue === undefined) { this.draggingValue = 0; } 
                if (this.exited === undefined) { this.exited = false; } 
                if (this.mousePoint === undefined) { this.mousePoint = null; } 
                if (this.timer === undefined) { this.timer = null; } 
                if (this.adjustmentListener === undefined) { this.adjustmentListener = null; } 
                if (this.listenerLock === undefined) { this.listenerLock = null; } 
                if (this.normalCursor === undefined) { this.normalCursor = null; } 
                if (this.visibleBar === undefined) { this.visibleBar = false; } 
                if (this.disableColor === undefined) { this.disableColor = false; } 
                if (this.scrollbarSerialVersion === undefined) { this.scrollbarSerialVersion = 0; } 
                if (this.downunit === undefined) { this.downunit = 0; } 
                if (this.downblock === undefined) { this.downblock = 0; } 
                if (this.useLargeUnitThanBlock === undefined) { this.useLargeUnitThanBlock = false; } 
                if (this.smoothValue === undefined) { this.smoothValue = false; } 
                if (this.owner === undefined) { this.owner = null; } 
                if (this.r2b === undefined) { this.r2b = null; } 
                if (this.r3b === undefined) { this.r3b = null; } 
            } else if (orientation === undefined && value === undefined && visible === undefined && minimum === undefined && maximum === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let orientation: any = 1;
                    let value: any = CJScrollbar.defaultValue;
                    let visible: any = CJScrollbar.defaultVisible;
                    let minimum: any = CJScrollbar.defaultMin;
                    let maximum: any = CJScrollbar.defaultMax;
                    super();
                    if (this.maximum === undefined) { this.maximum = 0; } 
                    if (this.minimum === undefined) { this.minimum = 0; } 
                    if (this.visibleAmount === undefined) { this.visibleAmount = 0; } 
                    if (this.value === undefined) { this.value = 0; } 
                    if (this.orientation === undefined) { this.orientation = 0; } 
                    if (this.unit === undefined) { this.unit = 0; } 
                    if (this.block === undefined) { this.block = 0; } 
                    if (this.dragStart === undefined) { this.dragStart = 0; } 
                    if (this.bodyImage === undefined) { this.bodyImage = null; } 
                    if (this.barImage === undefined) { this.barImage = null; } 
                    if (this.barSize === undefined) { this.barSize = null; } 
                    if (this.rect1 === undefined) { this.rect1 = null; } 
                    if (this.rect2 === undefined) { this.rect2 = null; } 
                    if (this.rect3 === undefined) { this.rect3 = null; } 
                    if (this.rect4 === undefined) { this.rect4 = null; } 
                    if (this.rect5 === undefined) { this.rect5 = null; } 
                    if (this.pressFlag === undefined) { this.pressFlag = 0; } 
                    if (this.pressingFlag === undefined) { this.pressingFlag = 0; } 
                    if (this.draggingValue === undefined) { this.draggingValue = 0; } 
                    if (this.exited === undefined) { this.exited = false; } 
                    if (this.mousePoint === undefined) { this.mousePoint = null; } 
                    if (this.timer === undefined) { this.timer = null; } 
                    if (this.adjustmentListener === undefined) { this.adjustmentListener = null; } 
                    if (this.listenerLock === undefined) { this.listenerLock = null; } 
                    if (this.normalCursor === undefined) { this.normalCursor = null; } 
                    if (this.visibleBar === undefined) { this.visibleBar = false; } 
                    if (this.disableColor === undefined) { this.disableColor = false; } 
                    if (this.scrollbarSerialVersion === undefined) { this.scrollbarSerialVersion = 0; } 
                    if (this.downunit === undefined) { this.downunit = 0; } 
                    if (this.downblock === undefined) { this.downblock = 0; } 
                    if (this.useLargeUnitThanBlock === undefined) { this.useLargeUnitThanBlock = false; } 
                    if (this.smoothValue === undefined) { this.smoothValue = false; } 
                    if (this.owner === undefined) { this.owner = null; } 
                    if (this.r2b === undefined) { this.r2b = null; } 
                    if (this.r3b === undefined) { this.r3b = null; } 
                }
                if (this.maximum === undefined) { this.maximum = 0; } 
                if (this.minimum === undefined) { this.minimum = 0; } 
                if (this.visibleAmount === undefined) { this.visibleAmount = 0; } 
                if (this.value === undefined) { this.value = 0; } 
                if (this.orientation === undefined) { this.orientation = 0; } 
                if (this.unit === undefined) { this.unit = 0; } 
                if (this.block === undefined) { this.block = 0; } 
                if (this.dragStart === undefined) { this.dragStart = 0; } 
                if (this.bodyImage === undefined) { this.bodyImage = null; } 
                if (this.barImage === undefined) { this.barImage = null; } 
                if (this.barSize === undefined) { this.barSize = null; } 
                if (this.rect1 === undefined) { this.rect1 = null; } 
                if (this.rect2 === undefined) { this.rect2 = null; } 
                if (this.rect3 === undefined) { this.rect3 = null; } 
                if (this.rect4 === undefined) { this.rect4 = null; } 
                if (this.rect5 === undefined) { this.rect5 = null; } 
                if (this.pressFlag === undefined) { this.pressFlag = 0; } 
                if (this.pressingFlag === undefined) { this.pressingFlag = 0; } 
                if (this.draggingValue === undefined) { this.draggingValue = 0; } 
                if (this.exited === undefined) { this.exited = false; } 
                if (this.mousePoint === undefined) { this.mousePoint = null; } 
                if (this.timer === undefined) { this.timer = null; } 
                if (this.adjustmentListener === undefined) { this.adjustmentListener = null; } 
                if (this.listenerLock === undefined) { this.listenerLock = null; } 
                if (this.normalCursor === undefined) { this.normalCursor = null; } 
                if (this.visibleBar === undefined) { this.visibleBar = false; } 
                if (this.disableColor === undefined) { this.disableColor = false; } 
                if (this.scrollbarSerialVersion === undefined) { this.scrollbarSerialVersion = 0; } 
                if (this.downunit === undefined) { this.downunit = 0; } 
                if (this.downblock === undefined) { this.downblock = 0; } 
                if (this.useLargeUnitThanBlock === undefined) { this.useLargeUnitThanBlock = false; } 
                if (this.smoothValue === undefined) { this.smoothValue = false; } 
                if (this.owner === undefined) { this.owner = null; } 
                if (this.r2b === undefined) { this.r2b = null; } 
                if (this.r3b === undefined) { this.r3b = null; } 
            } else throw new Error('invalid overload');
        }

        getLockObject(): any {
            return null;
        }

        public addAdjustmentListener(listener: com.java.AdjustmentListener) {
        }

        public removeAdjustmentListener(listener: com.java.AdjustmentListener) {
        }

        public setOrientation(orientation: number) {
        }

        public getOrientation(): number {
            return 0;
        }

        public setMaximum(max: number) {
        }

        public getMaximum(): number {
            return this.maximum;
        }

        public setMinimum(min: number) {
        }

        public getMinimum(): number {
            return this.minimum;
        }

        public setVisibleAmount(visible: number) {
        }

        public getVisibleAmount(): number {
            return this.visibleAmount;
        }

        public setValue(value: number, raise: boolean = false): boolean {
            return true;
        }

        public getValue(): number {
            return this.value;
        }

        public setValues$com_java_Adjustable$boolean(src: com.java.Adjustable, raise: boolean): boolean {
            return false;
        }

        public setValues$int$int$int$int(value: number, visible: number, minimum: number, maximum: number) {
        }

        public setValues$int$int$int$int$boolean(value: number, visible: number, minimum: number, maximum: number, raise: boolean): boolean {
            return false;
        }

        public setValues(value?: any, visible?: any, minimum?: any, maximum?: any, raise?: any): any {
            if (((typeof value === 'number') || value === null) && ((typeof visible === 'number') || visible === null) && ((typeof minimum === 'number') || minimum === null) && ((typeof maximum === 'number') || maximum === null) && ((typeof raise === 'boolean') || raise === null)) {
                return <any>this.setValues$int$int$int$int$boolean(value, visible, minimum, maximum, raise);
            } else if (((typeof value === 'number') || value === null) && ((typeof visible === 'number') || visible === null) && ((typeof minimum === 'number') || minimum === null) && ((typeof maximum === 'number') || maximum === null) && raise === undefined) {
                return <any>this.setValues$int$int$int$int(value, visible, minimum, maximum);
            } else if (((value != null && value instanceof <any>com.java.Adjustable) || value === null) && ((typeof visible === 'boolean') || visible === null) && minimum === undefined && maximum === undefined && raise === undefined) {
                return <any>this.setValues$com_java_Adjustable$boolean(value, visible);
            } else throw new Error('invalid overload');
        }

        cji_setValues(value: number, visible: number, minimum: number, maximum: number, raise: boolean): boolean {
            return true;
        }

        public setBlockIncrement(block: number) {
        }

        public getBlockIncrement(): number {
            return this.block;
        }

        public setBlockDecrement(block: number) {
        }

        public getBlockDecrement(): number {
            if (this.downblock < 0)return this.block; else return this.downblock;
        }

        public setUnitIncrement(unit: number) {
        }

        public getUnitIncrement(): number {
            return this.unit;
        }

        public setUnitDecrement(unit: number) {
        }

        public getUnitDecrement(): number {
            if (this.downunit < 0)return this.unit; else return this.downunit;
        }

        /*private*/ initPaint() {
        }

        initBar() {
        }

        /*private*/ createBodyImage() {
        }

        /*private*/ createBarImage() {
        }

        /*private*/ paintDownButton(graphics: com.java.Graphics) {
        }

        /*private*/ paintUpButton(graphics: com.java.Graphics) {
        }

        public paint(graphics: com.java.Graphics) {
        }

        public getPreferredSize(): com.java.Dimension {
            return null;
        }

        drawVerticalTriangle(x: number, y: number, width: number, height: number, g: com.java.Graphics, button: number) {
        }

        drawHorizontalTriangle(x: number, y: number, width: number, height: number, g: com.java.Graphics, button: number) {
        }

        draw3DRect(x: number, y: number, width: number, height: number, g: com.java.Graphics) {
        }

        public update(graphics: com.java.Graphics) {
            this.paint(graphics);
        }

        processAdjustmentEvent$com_java_AdjustmentEvent(event: com.java.AdjustmentEvent) {
            this.processAdjustmentEvent$boolean$com_java_AdjustmentEvent(true, event);
        }

        public processAdjustmentEvent$boolean$com_java_AdjustmentEvent(raise: boolean, event: com.java.AdjustmentEvent) {
        }

        public processAdjustmentEvent(raise?: any, event?: any) {
            if (((typeof raise === 'boolean') || raise === null) && ((event != null && event instanceof <any>com.java.AdjustmentEvent) || event === null)) {
                return <any>this.processAdjustmentEvent$boolean$com_java_AdjustmentEvent(raise, event);
            } else if (((raise != null && raise instanceof <any>com.java.AdjustmentEvent) || raise === null) && event === undefined) {
                return <any>this.processAdjustmentEvent$com_java_AdjustmentEvent(raise);
            } else throw new Error('invalid overload');
        }

        processEvent$com_java_AWTEvent(e: com.java.AWTEvent) {
            this.processEvent$boolean$com_java_AWTEvent(true, e);
        }

        public processEvent$boolean$com_java_AWTEvent(raise: boolean, e: com.java.AWTEvent) {
        }

        public processEvent(raise?: any, e?: any) {
            if (((typeof raise === 'boolean') || raise === null) && ((e != null && e instanceof <any>com.java.AWTEvent) || e === null)) {
                return <any>this.processEvent$boolean$com_java_AWTEvent(raise, e);
            } else if (((raise != null && raise instanceof <any>com.java.AWTEvent) || raise === null) && e === undefined) {
                return <any>this.processEvent$com_java_AWTEvent(raise);
            } else throw new Error('invalid overload');
        }

        processMouseMotionEvent(e: com.java.MouseEvent) {
        }

        mouseDragged(e: com.java.MouseEvent) {
        }

        doDrag(e: com.java.MouseEvent) {
        }

        processMouseEvent(e: com.java.MouseEvent) {
        }

        mousePressed(e: com.java.MouseEvent) {
        }

        mouseReleased(e: com.java.MouseEvent) {
        }

        mouseEntered(e: com.java.MouseEvent) {
        }

        mouseExited(e: com.java.MouseEvent) {
        }

        unitUp(e: com.java.AWTEvent) {
        }

        unitDown(e: com.java.AWTEvent) {
        }

        scroll(e: com.java.AWTEvent) {
        }

        adjust(unit: number, e: com.java.AWTEvent): boolean {
            return false;
        }

        pressCheck(): boolean {
            return true;
        }

        /**
         * @deprecated Method setBorderWidth is deprecated
         * @param {number} i
         */
        public setBorderWidth(i: number) {
        }

        /**
         * @deprecated Method setBorderColor is deprecated
         * @param {com.java.Color} color
         */
        public setBorderColor(color: com.java.Color) {
        }

        /**
         * @deprecated Method setBorderType is deprecated
         * @param {number} i
         */
        public setBorderType(i: number) {
        }

        public isVisibleThumb(): boolean {
            return this.visibleBar;
        }

        public setVisibleThumb(visible: boolean) {
        }

        isDisableColor(): boolean {
            return this.disableColor;
        }

        setDisableColor(disable: boolean) {
            this.disableColor = disable;
        }

        /*private*/ readObject(stream: com.java.ObjectInputStream) {
        }

        /*private*/ writeObject(stream: com.java.ObjectOutputStream) {
        }

        public getOwner(): com.java.Component {
            return null;
        }

        setOwner(owner: com.java.Component) {
            this.owner = owner;
        }

        static Header: string = "$Header: /CAA/ClientJ/SpreadB/Current/src/com/fujitsu/caa/CJScrollbar.java 42    09/03/26 17:14 Kura $";

        static Modtime: string = "$Modtime: 09/03/26 16:07 $";

        static Workfile: string = "$Workfile: CJScrollbar.java $";

        static COPYRIGHT: string = "@(#) $Revision: 42 $ Copyright (C) 1998-2007, FFC Limited. & FUJITSU LIMITED.\n";

        static Revision: string; public static Revision_$LI$(): string { if (CJScrollbar.Revision == null) { CJScrollbar.Revision = "@(#) $Revision: 42 $ Copyright (C) 1998-2007, FFC Limited. & FUJITSU LIMITED.\n".substring("@(#) $Revision: 42 $ Copyright (C) 1998-2007, FFC Limited. & FUJITSU LIMITED.\n".indexOf('$'), "@(#) $Revision: 42 $ Copyright (C) 1998-2007, FFC Limited. & FUJITSU LIMITED.\n".lastIndexOf('$') + 1); }  return CJScrollbar.Revision; }

        static serialVersionUID: number = 1899185644598601979;

        /*private*/ maximum: number;

        /*private*/ minimum: number;

        /*private*/ visibleAmount: number;

        /*private*/ value: number;

        /*private*/ orientation: number;

        /*private*/ unit: number;

        /*private*/ block: number;

        /*private*/ dragStart: number;

        /*private*/ bodyImage: com.java.Image;

        /*private*/ barImage: com.java.Image;

        /*private*/ barSize: com.java.Dimension;

        /*private*/ rect1: com.java.Rectangle;

        /*private*/ rect2: com.java.Rectangle;

        /*private*/ rect3: com.java.Rectangle;

        /*private*/ rect4: com.java.Rectangle;

        /*private*/ rect5: com.java.Rectangle;

        static NO_PRESS: number = 0;

        static UP: number = 1;

        static DOWN: number = 2;

        static DRAGGABLE: number = 4;

        static BLOCKUP: number = 8;

        static BLOCKDOWN: number = 16;

        /*private*/ pressFlag: number;

        /*private*/ pressingFlag: number;

        /*private*/ draggingValue: number;

        /*private*/ exited: boolean;

        /*private*/ mousePoint: com.java.Point;

        static firstInterval: number = 500;

        static secondInterval: number = 70;

        static defaultMin: number = 0;

        static defaultMax: number = 100;

        static defaultVisible: number = 10;

        static defaultValue: number = 0;

        timer: com.java.Timer;

        /*private*/ adjustmentListener: com.java.Vector;

        /*private*/ listenerLock: any;

        normalCursor: com.java.Cursor;

        visibleBar: boolean;

        disableColor: boolean;

        static currentVersion: number = 1;

        scrollbarSerialVersion: number;

        /*private*/ downunit: number;

        /*private*/ downblock: number;

        useLargeUnitThanBlock: boolean;

        smoothValue: boolean;

        static base: string = "cjscrollbar";

        static nameCounter: number = 0;

        static bname: string = "lib.com.fujitsu.caa.resources.CJMessageResource";

        owner: com.java.Component;

        r2b: com.java.Rectangle;

        r3b: com.java.Rectangle;
    }
    CJScrollbar["__class"] = "lib.com.fujitsu.caa.CJScrollbar";

}

