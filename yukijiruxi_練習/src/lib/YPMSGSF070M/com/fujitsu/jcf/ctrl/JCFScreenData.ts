/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.ctrl {
    export class JCFScreenData {
        /*private*/ panelDataArea: any;

        /*private*/ panelIDMap: any;

        public getItemData$java_lang_String$java_lang_String(frameID: string, itemID: string): lib.com.fujitsu.jcf.gui.JCFItemData {
            return this.getItemData$java_lang_String$java_lang_String$boolean(frameID, itemID, true);
        }

        public getItemData$java_lang_String$java_lang_String$boolean(frameID: string, itemID: string, outLog: boolean): lib.com.fujitsu.jcf.gui.JCFItemData {
            let param: Array<any> = <any>([]);
            /* add */(param.push(frameID)>0);
            /* add */(param.push(itemID)>0);
            if (outLog)if (itemID == null){
                const e: lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException = new lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException(lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage("E1106"));
                if (!outLog){
                    return null;
                } else {
                    return null;
                }
            }
            if (frameID == null){
                const e: lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException = new lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException(lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage("E1106"));
                if (!outLog){
                    return null;
                } else {
                    return null;
                }
            }
            if (/* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>this.panelDataArea))return null;
            const searchPanelID: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.panelIDMap, frameID);
            if (searchPanelID == null){
                const e: lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException = new lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException(lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage("E1106"));
                if (!outLog){
                    return null;
                } else {
                    return null;
                }
            }
            const ret: lib.com.fujitsu.jcf.gui.JCFItemData = this.getPanelData$java_lang_String$boolean(this.getFrameID(searchPanelID), false).getItemData(itemID);
            param = <any>([]);
            if (ret != null)/* add */(param.push(ret.getItemID())>0); else /* add */(param.push(null)>0);
            return ret;
        }

        public getItemData(frameID?: any, itemID?: any, outLog?: any): lib.com.fujitsu.jcf.gui.JCFItemData {
            if (((typeof frameID === 'string') || frameID === null) && ((typeof itemID === 'string') || itemID === null) && ((typeof outLog === 'boolean') || outLog === null)) {
                return <any>this.getItemData$java_lang_String$java_lang_String$boolean(frameID, itemID, outLog);
            } else if (((typeof frameID === 'string') || frameID === null) && ((typeof itemID === 'string') || itemID === null) && outLog === undefined) {
                return <any>this.getItemData$java_lang_String$java_lang_String(frameID, itemID);
            } else throw new Error('invalid overload');
        }

        public getPanelData$java_lang_String$boolean(frameID: string, outLog: boolean): lib.com.fujitsu.jcf.gui.JCFPanelData {
            let param: Array<any> = <any>([]);
            /* add */(param.push(frameID)>0);
            if (frameID == null){
                const e: lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException = new lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException(lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage("E1106"));
            }
            if (/* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>this.panelDataArea)){
                const controller: lib.com.fujitsu.jcf.ctrl.JCFSYGUIInstanceManager = lib.com.fujitsu.jcf.ctrl.JCFSYGUIInstanceManager.getInstance();
                return controller.createPanelData("", 0);
            }
            const panelID: string = this.getPanelID(frameID);
            if (!/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>this.panelDataArea, panelID)){
                const e: lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException = new lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException(lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage("E1106"));
            }
            const ret: lib.com.fujitsu.jcf.gui.JCFPanelData = <lib.com.fujitsu.jcf.gui.JCFPanelData>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.panelDataArea, panelID);
            param = <any>([]);
            if (ret != null)/* add */(param.push(ret.getPanelID())>0); else /* add */(param.push(null)>0);
            return ret;
        }

        public getPanelData(frameID?: any, outLog?: any): lib.com.fujitsu.jcf.gui.JCFPanelData {
            if (((typeof frameID === 'string') || frameID === null) && ((typeof outLog === 'boolean') || outLog === null)) {
                return <any>this.getPanelData$java_lang_String$boolean(frameID, outLog);
            } else if (((typeof frameID === 'string') || frameID === null) && outLog === undefined) {
                return <any>this.getPanelData$java_lang_String(frameID);
            } else throw new Error('invalid overload');
        }

        getPanelID(frameID: string): string {
            let panelID: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.panelIDMap, frameID);
            if (panelID == null)panelID = "";
            return panelID;
        }

        getFrameID(panelID: string): string {
            const set: Array<any> = /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>this.panelIDMap);
            const ite: any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(set);
            let frameID: string = "";
            while((ite.hasNext())) {{
                const srcFrameID: string = <string>ite.next();
                const orgpanelid: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.panelIDMap, srcFrameID);
                if (orgpanelid === panelID){
                    frameID = srcFrameID;
                    break;
                }
            }};
            return frameID;
        }

        public getPanelData$java_lang_String(frameFooter: string): lib.com.fujitsu.jcf.gui.JCFPanelData {
            return null;
        }

        constructor() {
            if (this.panelDataArea === undefined) { this.panelDataArea = null; }
            if (this.panelIDMap === undefined) { this.panelIDMap = null; }
        }
    }
    JCFScreenData["__class"] = "lib.com.fujitsu.jcf.ctrl.JCFScreenData";

}

