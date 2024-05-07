//作業中 - kara
export class JCFDTScreenDataManager {
    // constructor(reference: JCFCMReference, layoutManager: JCFSCLayoutManager) {
    //     if (this.layoutManager === undefined) { this.layoutManager = null; }
    //     if (this.currentDataArea === undefined) { this.currentDataArea = null; }
    //     if (this.transitionDataArea === undefined) { this.transitionDataArea = null; }
    //     if (this.reference === undefined) { this.reference = null; }
    //     if (this.parentDataArea === undefined) { this.parentDataArea = null; }
    //     if (this.framePriority === undefined) { this.framePriority = null; }
    //     this.reference = null;
    //     this.parentDataArea = <any>([]);
    //     this.framePriority = null;
    //     this.reference = reference;
    //     this.layoutManager = layoutManager;
    //     this.currentDataArea = new JCFScreenData(this.reference);
    //     this.setEnableCurrentArea(true);
    // }

    // init() {
    //     this.currentDataArea.setEnabled(true);
    // }

    // terminate() {
    //     this.currentDataArea.setEnabled(false);
    //     this.currentDataArea.clearData();
    //     /* clear */(this.parentDataArea.length = 0);
    // }

    // setEnableCurrentArea(status: boolean) {
    //     this.currentDataArea.setEnabled(status);
    // }

    // setEnableTransitionArea(status: boolean) {
    //     if (this.transitionDataArea != null)this.transitionDataArea.setEnabled(status);
    // }

    // setEenableParentArea(status: boolean) {
    //     const dataArea: JCFScreenData = <JCFScreenData>/* get */this.parentDataArea[0];
    //     dataArea.setEnabled(status);
    // }

    // public getCurrentArea(outLog: boolean = true): JCFScreenData {
    //     if (this.currentDataArea == null){
    //         const e: JCFInternalError = new JCFInternalError(JCFCMMessageProperties.getExceptionMessage("E0101"));
    //         if (!outLog){
    //             throw e;
    //         } else {
    //             JCFDebug.write("JCFDTScreenDataManager", "getCurrentArea", e, 1282, JCFCMMessageProperties.getExceptionMessage("E1264"), this.reference.getSubsystemID(), this.reference.getWindowID());
    //             throw e;
    //         }
    //     } else {
    //         return this.currentDataArea;
    //     }
    // }

    // getTransitionArea(): JCFScreenData {
    //     if (this.transitionDataArea == null)return new JCFScreenData(this.reference);
    //     if (!this.transitionDataArea.isEnable())return new JCFScreenData(this.reference); else return this.transitionDataArea;
    // }

    // getForceTransitionArea(): JCFScreenData {
    //     if (this.transitionDataArea == null){
    //         const e: JCFIllegalStateException = new JCFIllegalStateException(JCFCMMessageProperties.getExceptionMessage("E1101"));
    //         JCFDebug.write("JCFDTScreenDataManager", "getForceTransitionArea", e, 1282, JCFCMMessageProperties.getExceptionMessage("E1265"), this.reference.getSubsystemID(), this.reference.getWindowID());
    //         throw e;
    //     } else {
    //         return this.transitionDataArea;
    //     }
    // }

    // addCurrentArea(frameID: string, panelID: string, panelData: JCFPanelData) {
    //     this.currentDataArea.addPanelData(frameID, panelID, panelData);
    // }

    // moveCurrentArea(frameID: string[], topFrameID: string) {
    //     this.transitionDataArea = new JCFScreenData(this.reference);
    //     this.transitionDataArea.setEnabled(false);
    //     this.framePriority = (s => { let a=[]; while(s-->0) a.push(null); return a; })(frameID.length);
    //     /* arraycopy */((srcPts, srcOff, dstPts, dstOff, size) => { if(srcPts !== dstPts || dstOff >= srcOff + size) { while (--size >= 0) dstPts[dstOff++] = srcPts[srcOff++];} else { let tmp = srcPts.slice(srcOff, srcOff + size); for (let i = 0; i < size; i++) dstPts[dstOff++] = tmp[i]; }})(frameID, 0, this.framePriority, 0, this.framePriority.length);
    //     for(let i: number = 0; i < frameID.length; i++) {{
    //         const panelID: string = this.currentDataArea.getPanelID(frameID[i]);
    //         if (panelID.length === 0){
    //             const e: JCFIllegalStateException = new JCFIllegalStateException(JCFCMMessageProperties.getExceptionMessage("E0101"));
    //             JCFDebug.write("JCFDTScreenDataManager", "moveCurrentArea", e, 1282, JCFCMMessageProperties.getExceptionMessage("E1104"), this.reference.getSubsystemID(), this.reference.getWindowID());
    //             throw e;
    //         }
    //         const panelData: JCFPanelData = this.currentDataArea.getPanelData(frameID[i], false);
    //         this.currentDataArea.removePanelData(panelID);
    //         this.transitionDataArea.addPanelData(frameID[i], panelID, panelData);
    //     };}
    //     if (topFrameID != null && this.currentDataArea.isFrameDataList(topFrameID))try {
    //         const data: JCFFrameDataList = this.currentDataArea.getFrameDataList(topFrameID);
    //         this.transitionDataArea.addFrameDataList(topFrameID, data);
    //     } catch(jcfillegalargumentexception) {
    //     }
    // }

    // destroyTransitionArea() {
    //     this.transitionDataArea.clearData();
    //     this.transitionDataArea.clearFrameDataList();
    //     this.transitionDataArea.setEnabled(false);
    //     this.transitionDataArea = null;
    // }

    // moveTransitionArea() {
    //     /* add */this.parentDataArea.splice(0, 0, this.transitionDataArea);
    //     this.transitionDataArea.setEnabled(false);
    //     this.transitionDataArea = null;
    // }

    // moveParentArea() {
    //     this.currentDataArea.setEnabled(false);
    //     this.currentDataArea.clearData();
    //     this.currentDataArea = <JCFScreenData>/* remove */this.parentDataArea.splice(0, 1)[0];
    //     this.currentDataArea.setEnabled(true);
    // }

    // destroyParentArea() {
    //     /* clear */(this.parentDataArea.length = 0);
    // }

    // getTransitionAreaFrames(): string[] {
    //     return this.framePriority;
    // }

    // getCurrentAreaPanelData(panelID: string): JCFPanelData {
    //     try {
    //         return this.currentDataArea.getPanelData$java_lang_String$boolean(this.currentDataArea.getFrameID(panelID), false);
    //     } catch(ignore) {
    //         const controller: JCFSYGUIInstanceManager = JCFSYGUIInstanceManager.getInstance();
    //         return controller.createPanelData("", 0);
    //     }
    // }

    // addCurrentAreaFrameDataList(frameID: string, frameDataList: JCFFrameDataList) {
    //     this.currentDataArea.addFrameDataList(frameID, frameDataList);
    // }

    // clearCurrentAreaFrameDataList() {
    //     this.currentDataArea.clearFrameDataList();
    // }

    // getCurrentAreaFrameDataList(frameID: string): JCFFrameDataList {
    //     return this.currentDataArea.getFrameDataList(frameID);
    // }

    // public hasData$com_fujitsu_jcf_gui_JCFItemData(itemdata: JCFItemData): boolean {
    //     if (this.currentDataArea.hasData$com_fujitsu_jcf_gui_JCFItemData(itemdata))return true;
    //     if (this.transitionDataArea != null && this.transitionDataArea.hasData$com_fujitsu_jcf_gui_JCFItemData(itemdata))return true;
    //     for(const ite: any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.parentDataArea); ite.hasNext(); ) {{
    //         const dataArea: JCFScreenData = <JCFScreenData>ite.next();
    //         if (dataArea.hasData$com_fujitsu_jcf_gui_JCFItemData(itemdata))return true;
    //     };}
    //     return false;
    // }

    // public hasData(itemdata?: any): boolean {
    //     if (((itemdata != null && itemdata instanceof <any>JCFItemData) || itemdata === null)) {
    //         return <any>this.hasData$com_fujitsu_jcf_gui_JCFItemData(itemdata);
    //     } else if (((itemdata != null && itemdata instanceof <any>JCFPanelData) || itemdata === null)) {
    //         return <any>this.hasData$com_fujitsu_jcf_gui_JCFPanelData(itemdata);
    //     } else throw new Error('invalid overload');
    // }

    // hasData$com_fujitsu_jcf_gui_JCFPanelData(paneldata: JCFPanelData): boolean {
    //     if (this.currentDataArea.hasData$com_fujitsu_jcf_gui_JCFPanelData(paneldata))return true;
    //     if (this.transitionDataArea != null && this.transitionDataArea.hasData$com_fujitsu_jcf_gui_JCFPanelData(paneldata))return true;
    //     for(const ite: any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.parentDataArea); ite.hasNext(); ) {{
    //         const dataArea: JCFScreenData = <JCFScreenData>ite.next();
    //         if (dataArea.hasData$com_fujitsu_jcf_gui_JCFPanelData(paneldata))return true;
    //     };}
    //     return false;
    // }

    // getCommunicationData(itemID: string[]): any {
    //     const map: any = <any>({});
    //     if (this.layoutManager.getActiveWindowID().length === 0)return map;
    //     const mainFrameID: string = this.layoutManager.getActiveMainFrameID();
    //     const mainsPanelID: string = this.getCurrentArea().getPanelID(mainFrameID);
    //     const list: string[] = this.layoutManager.getActivePanelFramesByPriority();
    //     for(let i: number = list.length - 1; i >= 0; i--) {{
    //         const panelID: string = this.getCurrentArea().getPanelID(list[i]);
    //         if (!(mainsPanelID === panelID)){
    //             for(let j: number = 0; j < itemID.length; j++) {{
    //                 const itemData: JCFItemData = this.getCurrentAreaPanelData(panelID).getItemData$java_lang_String(itemID[j]);
    //                 if (itemData != null)/* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>map, itemID[j], itemData.getCommunicationData());
    //             };}
    //         }
    //     };}
    //     for(let j: number = 0; j < itemID.length; j++) {{
    //         const itemData: JCFItemData = this.getCurrentAreaPanelData(mainsPanelID).getItemData$java_lang_String(itemID[j]);
    //         if (itemData != null)/* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>map, itemID[j], itemData.getCommunicationData());
    //     };}
    //     return map;
    // }

    // setCommunicationData(orgMap: any) {
    //     if (this.layoutManager.getActiveWindowID().length === 0)return;
    //     const mainFrameID: string = this.layoutManager.getActiveMainFrameID();
    //     const list: string[] = this.layoutManager.getActivePanelFramesByPriority();
    //     const map: any = <any>({});
    //     let set: Array<any> = /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>orgMap);
    //     for(const ite: any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(set); ite.hasNext(); ) {try {
    //         const itemID: string = <string>ite.next();
    //         const target: JCFItemData = this.getCurrentArea().getItemData$java_lang_String$java_lang_String$boolean(mainFrameID, itemID, false);
    //         if (target != null)target.setCommunicationData(/* remove */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries.splice(i,1)[0]; } })(<any>map, itemID));
    //     } catch(__e) {
    //         if(__e != null && __e instanceof <any>JCFDataException) {
    //             const jcfdataexception: JCFDataException = <JCFDataException>__e;

    //         }
    //         if(__e != null && __e instanceof <any>JCFException) {
    //             const jcfexception: JCFException = <JCFException>__e;

    //         }
    //     };}
    //     for(let i: number = 0; i < list.length; i++) {if (!(mainFrameID === (list[i]))){
    //         set = /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>map);
    //         for(const ite: any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(set); ite.hasNext(); ) {try {
    //             const itemID: string = <string>ite.next();
    //             const target: JCFItemData = this.getCurrentArea().getItemData$java_lang_String$java_lang_String$boolean(list[i], itemID, false);
    //             if (target != null)target.setCommunicationData(/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>map, itemID));
    //         } catch(__e) {
    //             if(__e != null && __e instanceof <any>JCFDataException) {
    //                 const jcfdataexception1: JCFDataException = <JCFDataException>__e;

    //             }
    //             if(__e != null && __e instanceof <any>JCFException) {
    //                 const jcfexception1: JCFException = <JCFException>__e;

    //             }
    //         };}
    //     };}
    // }

    // addCurrentAreaFrameRectangle(frameID: string, rectangle: Rectangle) {
    //     this.currentDataArea.addBoundsOnScreen(frameID, rectangle);
    // }

    // clearCurrentAreaFrameRectangle() {
    //     this.currentDataArea.clearBoundsOnScreen();
    // }

    // public static CLASS_VERSION: string = "V3L10";

    // public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2011";

    // public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

    // /*private*/ layoutManager: JCFSCLayoutManager;

    // /*private*/ currentDataArea: JCFScreenData;

    // /*private*/ transitionDataArea: JCFScreenData;

    // /*private*/ reference: JCFCMReference;

    // /*private*/ parentDataArea: Array<any>;

    // /*private*/ framePriority: string[];
}
// JCFDTScreenDataManager["__class"] = "com.fujitsu.jcf.ctrl.JCFDTScreenDataManager";




// import { JCFException } from './JCFException';


// import { JCFDataException } from '../gui/JCFDataException';


// import { JCFItemData } from '../gui/JCFItemData';


// import { JCFSYGUIInstanceManager } from './JCFSYGUIInstanceManager';


// import { JCFFrameDataList } from '../gui/JCFFrameDataList';


// import { JCFIllegalArgumentException } from './JCFIllegalArgumentException';


// import { JCFIllegalConfigurationException } from './JCFIllegalConfigurationException';


// import { JCFPanelData } from '../gui/JCFPanelData';


// import { JCFIllegalStateException } from './JCFIllegalStateException';


// import { JCFDebug } from './JCFDebug';


// import { JCFCMMessageProperties } from './JCFCMMessageProperties';


// import { JCFInternalError } from './JCFInternalError';


// import { JCFScreenData } from './JCFScreenData';


// import { JCFSCLayoutManager } from './JCFSCLayoutManager';


// import { JCFCMReference } from './JCFCMReference';

