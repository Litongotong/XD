/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFActionEvent extends com.java.ActionEvent {
        public constructor(source?: any, newItemSeqNo?: any, newActionCode?: any, newItemID?: any, newPanelID?: any, newFrameID?: any, newInputEvent?: any, newSubItemID?: any, newSubPanelID?: any, newSubFrameID?: any) {
            if (((source != null) || source === null) && ((typeof newItemSeqNo === 'number') || newItemSeqNo === null) && ((typeof newActionCode === 'string') || newActionCode === null) && ((typeof newItemID === 'string') || newItemID === null) && ((typeof newPanelID === 'string') || newPanelID === null) && ((typeof newFrameID === 'string') || newFrameID === null) && ((newInputEvent != null && newInputEvent instanceof <any>com.java.InputEvent) || newInputEvent === null) && ((typeof newSubItemID === 'string') || newSubItemID === null) && ((typeof newSubPanelID === 'string') || newSubPanelID === null) && ((typeof newSubFrameID === 'string') || newSubFrameID === null)) {
                let __args = arguments;
                {
                    let __args = arguments;
                    super();
                    if (this.actionCode === undefined) { this.actionCode = null; } 
                    if (this.itemSeqNo === undefined) { this.itemSeqNo = 0; } 
                    if (this.itemID === undefined) { this.itemID = null; } 
                    if (this.panelID === undefined) { this.panelID = null; } 
                    if (this.frameID === undefined) { this.frameID = null; } 
                    if (this.inputEvent === undefined) { this.inputEvent = null; } 
                    if (this.additionalInfo === undefined) { this.additionalInfo = null; } 
                    if (this.subItemID === undefined) { this.subItemID = null; } 
                    if (this.subPanelID === undefined) { this.subPanelID = null; } 
                    if (this.subFrameID === undefined) { this.subFrameID = null; } 
                    if (this.retryError === undefined) { this.retryError = false; } 
                    if (this.businessLogicDefined === undefined) { this.businessLogicDefined = false; } 
                    if (this.transitionDefined === undefined) { this.transitionDefined = false; } 
                    if (this.changeSubsystemDefined === undefined) { this.changeSubsystemDefined = false; } 
                    if (this.openSubsystemDefined === undefined) { this.openSubsystemDefined = false; } 
                    if (this.realTimeEvent === undefined) { this.realTimeEvent = false; } 
                    this.actionCode = "";
                    this.itemSeqNo = 0;
                    this.itemID = "";
                    this.panelID = "";
                    this.frameID = "";
                    this.inputEvent = null;
                    this.subItemID = "";
                    this.subPanelID = "";
                    this.subFrameID = "";
                    this.retryError = false;
                    this.businessLogicDefined = false;
                    this.transitionDefined = false;
                    this.changeSubsystemDefined = false;
                    this.openSubsystemDefined = false;
                    this.realTimeEvent = false;
                    this.actionCode = newActionCode;
                    this.itemID = newItemID;
                    this.itemSeqNo = newItemSeqNo;
                    this.panelID = newPanelID;
                    this.inputEvent = newInputEvent;
                }
                if (this.actionCode === undefined) { this.actionCode = null; } 
                if (this.itemSeqNo === undefined) { this.itemSeqNo = 0; } 
                if (this.itemID === undefined) { this.itemID = null; } 
                if (this.panelID === undefined) { this.panelID = null; } 
                if (this.frameID === undefined) { this.frameID = null; } 
                if (this.inputEvent === undefined) { this.inputEvent = null; } 
                if (this.additionalInfo === undefined) { this.additionalInfo = null; } 
                if (this.subItemID === undefined) { this.subItemID = null; } 
                if (this.subPanelID === undefined) { this.subPanelID = null; } 
                if (this.subFrameID === undefined) { this.subFrameID = null; } 
                if (this.retryError === undefined) { this.retryError = false; } 
                if (this.businessLogicDefined === undefined) { this.businessLogicDefined = false; } 
                if (this.transitionDefined === undefined) { this.transitionDefined = false; } 
                if (this.changeSubsystemDefined === undefined) { this.changeSubsystemDefined = false; } 
                if (this.openSubsystemDefined === undefined) { this.openSubsystemDefined = false; } 
                if (this.realTimeEvent === undefined) { this.realTimeEvent = false; } 
                (() => {
                    this.frameID = newFrameID;
                    this.subItemID = newSubItemID;
                    this.subPanelID = newSubPanelID;
                    this.subFrameID = newSubFrameID;
                })();
            } else if (((source != null) || source === null) && ((typeof newItemSeqNo === 'number') || newItemSeqNo === null) && ((typeof newActionCode === 'string') || newActionCode === null) && ((typeof newItemID === 'string') || newItemID === null) && ((typeof newPanelID === 'string') || newPanelID === null) && ((newFrameID != null && newFrameID instanceof <any>com.java.InputEvent) || newFrameID === null) && ((typeof newInputEvent === 'boolean') || newInputEvent === null) && newSubItemID === undefined && newSubPanelID === undefined && newSubFrameID === undefined) {
                let __args = arguments;
                let newInputEvent: any = __args[5];
                let realTimeEvent: any = __args[6];
                {
                    let __args = arguments;
                    super();
                    if (this.actionCode === undefined) { this.actionCode = null; } 
                    if (this.itemSeqNo === undefined) { this.itemSeqNo = 0; } 
                    if (this.itemID === undefined) { this.itemID = null; } 
                    if (this.panelID === undefined) { this.panelID = null; } 
                    if (this.frameID === undefined) { this.frameID = null; } 
                    if (this.inputEvent === undefined) { this.inputEvent = null; } 
                    if (this.additionalInfo === undefined) { this.additionalInfo = null; } 
                    if (this.subItemID === undefined) { this.subItemID = null; } 
                    if (this.subPanelID === undefined) { this.subPanelID = null; } 
                    if (this.subFrameID === undefined) { this.subFrameID = null; } 
                    if (this.retryError === undefined) { this.retryError = false; } 
                    if (this.businessLogicDefined === undefined) { this.businessLogicDefined = false; } 
                    if (this.transitionDefined === undefined) { this.transitionDefined = false; } 
                    if (this.changeSubsystemDefined === undefined) { this.changeSubsystemDefined = false; } 
                    if (this.openSubsystemDefined === undefined) { this.openSubsystemDefined = false; } 
                    if (this.realTimeEvent === undefined) { this.realTimeEvent = false; } 
                    this.actionCode = "";
                    this.itemSeqNo = 0;
                    this.itemID = "";
                    this.panelID = "";
                    this.frameID = "";
                    this.inputEvent = null;
                    this.subItemID = "";
                    this.subPanelID = "";
                    this.subFrameID = "";
                    this.retryError = false;
                    this.businessLogicDefined = false;
                    this.transitionDefined = false;
                    this.changeSubsystemDefined = false;
                    this.openSubsystemDefined = false;
                    this.realTimeEvent = false;
                    this.actionCode = newActionCode;
                    this.itemID = newItemID;
                    this.itemSeqNo = newItemSeqNo;
                    this.panelID = newPanelID;
                    this.inputEvent = newInputEvent;
                }
                if (this.actionCode === undefined) { this.actionCode = null; } 
                if (this.itemSeqNo === undefined) { this.itemSeqNo = 0; } 
                if (this.itemID === undefined) { this.itemID = null; } 
                if (this.panelID === undefined) { this.panelID = null; } 
                if (this.frameID === undefined) { this.frameID = null; } 
                if (this.inputEvent === undefined) { this.inputEvent = null; } 
                if (this.additionalInfo === undefined) { this.additionalInfo = null; } 
                if (this.subItemID === undefined) { this.subItemID = null; } 
                if (this.subPanelID === undefined) { this.subPanelID = null; } 
                if (this.subFrameID === undefined) { this.subFrameID = null; } 
                if (this.retryError === undefined) { this.retryError = false; } 
                if (this.businessLogicDefined === undefined) { this.businessLogicDefined = false; } 
                if (this.transitionDefined === undefined) { this.transitionDefined = false; } 
                if (this.changeSubsystemDefined === undefined) { this.changeSubsystemDefined = false; } 
                if (this.openSubsystemDefined === undefined) { this.openSubsystemDefined = false; } 
                if (this.realTimeEvent === undefined) { this.realTimeEvent = false; } 
                (() => {
                    this.realTimeEvent = realTimeEvent;
                })();
            } else if (((source != null) || source === null) && ((typeof newItemSeqNo === 'number') || newItemSeqNo === null) && ((typeof newActionCode === 'string') || newActionCode === null) && ((typeof newItemID === 'string') || newItemID === null) && ((typeof newPanelID === 'string') || newPanelID === null) && ((newFrameID != null && newFrameID instanceof <any>com.java.InputEvent) || newFrameID === null) && newInputEvent === undefined && newSubItemID === undefined && newSubPanelID === undefined && newSubFrameID === undefined) {
                let __args = arguments;
                let newInputEvent: any = __args[5];
                super();
                if (this.actionCode === undefined) { this.actionCode = null; } 
                if (this.itemSeqNo === undefined) { this.itemSeqNo = 0; } 
                if (this.itemID === undefined) { this.itemID = null; } 
                if (this.panelID === undefined) { this.panelID = null; } 
                if (this.frameID === undefined) { this.frameID = null; } 
                if (this.inputEvent === undefined) { this.inputEvent = null; } 
                if (this.additionalInfo === undefined) { this.additionalInfo = null; } 
                if (this.subItemID === undefined) { this.subItemID = null; } 
                if (this.subPanelID === undefined) { this.subPanelID = null; } 
                if (this.subFrameID === undefined) { this.subFrameID = null; } 
                if (this.retryError === undefined) { this.retryError = false; } 
                if (this.businessLogicDefined === undefined) { this.businessLogicDefined = false; } 
                if (this.transitionDefined === undefined) { this.transitionDefined = false; } 
                if (this.changeSubsystemDefined === undefined) { this.changeSubsystemDefined = false; } 
                if (this.openSubsystemDefined === undefined) { this.openSubsystemDefined = false; } 
                if (this.realTimeEvent === undefined) { this.realTimeEvent = false; } 
                this.actionCode = "";
                this.itemSeqNo = 0;
                this.itemID = "";
                this.panelID = "";
                this.frameID = "";
                this.inputEvent = null;
                this.subItemID = "";
                this.subPanelID = "";
                this.subFrameID = "";
                this.retryError = false;
                this.businessLogicDefined = false;
                this.transitionDefined = false;
                this.changeSubsystemDefined = false;
                this.openSubsystemDefined = false;
                this.realTimeEvent = false;
                this.actionCode = newActionCode;
                this.itemID = newItemID;
                this.itemSeqNo = newItemSeqNo;
                this.panelID = newPanelID;
                this.inputEvent = newInputEvent;
            } else throw new Error('invalid overload');
        }

        public getActionCode(): string {
            return this.actionCode;
        }

        public getItemID(): string {
            return this.itemID;
        }

        public getItemSequentialNumber(): number {
            return this.itemSeqNo;
        }

        public getPanelID(): string {
            return this.panelID;
        }

        public getFrameID(): string {
            return this.frameID;
        }

        public getInputEvent(): com.java.InputEvent {
            return this.inputEvent;
        }

        public getAdditionalInfo(): com.java.Serializable {
            return this.additionalInfo;
        }

        public setAdditionalInfo(newAdditionalInfo: com.java.Serializable) {
            this.additionalInfo = newAdditionalInfo;
        }

        public getSubItemID(): string {
            return this.subItemID;
        }

        public getSubPanelID(): string {
            return this.subPanelID;
        }

        public getSubFrameID(): string {
            return this.subFrameID;
        }

        public isRetryError(): boolean {
            return this.retryError;
        }

        public setRetryError(retryError: boolean) {
            this.retryError = retryError;
        }

        public isBusinessLogicDefined(): boolean {
            return this.businessLogicDefined;
        }

        public setBusinessLogicDefined(businessLogicDefined: boolean) {
            this.businessLogicDefined = businessLogicDefined;
        }

        public isTransitionDefined(): boolean {
            return this.transitionDefined;
        }

        public setTransitionDefined(transitionDefined: boolean) {
            this.transitionDefined = transitionDefined;
        }

        public isChangeSubsystemDefined(): boolean {
            return this.changeSubsystemDefined;
        }

        public setChangeSubsystemDefined(changeSubsystemDefined: boolean) {
            this.changeSubsystemDefined = changeSubsystemDefined;
        }

        public isOpenSubsystemDefined(): boolean {
            return this.openSubsystemDefined;
        }

        public setOpenSubsystemDefined(openSubsystemDefined: boolean) {
            this.openSubsystemDefined = openSubsystemDefined;
        }

        public isRealTimeEvent(): boolean {
            return this.realTimeEvent;
        }

        setItemID(itemID: string) {
            this.itemID = itemID;
        }

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFActionEvent";

        /*private*/ actionCode: string;

        /*private*/ itemSeqNo: number;

        /*private*/ itemID: string;

        /*private*/ panelID: string;

        /*private*/ frameID: string;

        /*private*/ inputEvent: com.java.InputEvent;

        /*private*/ additionalInfo: com.java.Serializable;

        /*private*/ subItemID: string;

        /*private*/ subPanelID: string;

        /*private*/ subFrameID: string;

        /*private*/ retryError: boolean;

        /*private*/ businessLogicDefined: boolean;

        /*private*/ transitionDefined: boolean;

        /*private*/ changeSubsystemDefined: boolean;

        /*private*/ openSubsystemDefined: boolean;

        /*private*/ realTimeEvent: boolean;
    }
    JCFActionEvent["__class"] = "lib.com.fujitsu.jcf.gui.JCFActionEvent";

}

