import {JCFDTScreenDataManager} from "./JCFDTScreenDataManager"
import {JCFDTUserData} from "./JCFDTUserData"
import {JCFDTApplicationData} from "./JCFDTApplicationData"
import {JCFDTSucceedData} from "./JCFDTSucceedData"
import {JCFCMReference} from "./JCFCMReference"
import {JCFSCLayoutManager} from "./JCFSCLayoutManager"
import {JCFItemData} from "../gui/JCFItemData"
import {JCFScreenData} from "./JCFScreenData"
import {JCFContext} from "./JCFContext"
import {JCFPanelData} from "../gui/JCFPanelData"
import {JCFFrameData} from "../gui/JCFFrameData"
import type { NativeSet } from "@/lib/native/util/Set"

export class JCFDTManager {
    private dataArea: JCFDTScreenDataManager;
    private userData: JCFDTUserData;
    private applicationData: JCFDTApplicationData;
    private succeedArea: JCFDTSucceedData | null = null;
    private reference: JCFCMReference;
    public static DATA_ONLY: number = 1;
    public static DATA_AND_ATTR: number = 2;

    constructor(reference: JCFCMReference, layoutManager: JCFSCLayoutManager) {
        this.dataArea = new JCFDTScreenDataManager(reference, layoutManager);
        this.userData = new JCFDTUserData();
        this.applicationData = JCFDTApplicationData.getInstance();
        if ("ID0000000000000000-000" === reference.getWindowID()) {
            this.applicationData.clear();
        }
        this.reference = reference;
    }

    init(): void {
        this.dataArea.init();
    }

    terminate(): void {
        this.dataArea.terminate();
    }

    hasData(itemdata: JCFItemData): boolean;
    hasData(paneldata: JCFPanelData): boolean;
    hasData(data: JCFItemData | JCFPanelData): boolean {
        if (data instanceof JCFItemData) {
            return this.dataArea.hasData(data);
        } else {
            return this.dataArea.hasData(data);
        }
    }

    putUserData(key: Object, value: Object): Object | null {
        if (!this.userData.isPutable()) return null;
        if (value instanceof JCFScreenData) return null;
        if (value instanceof JCFDTSucceedData) return null;
        if (value instanceof JCFContext) return null;
        if (value instanceof JCFFrameData) return null;
        if ((value instanceof JCFItemData) && this.hasData(value)) return null;
        if ((value instanceof JCFPanelData) && this.hasData(value)) return null;
        else return this.userData.put(key, value);
    }

    putSucceedData(key: Object, value: Object): Object | null {
        if (this.succeedArea == null || !this.succeedArea.isPutable()) return null;
        if (value instanceof JCFScreenData) return null;
        if (value instanceof JCFDTSucceedData) return null;
        if (value instanceof JCFContext) return null;
        if (value instanceof JCFFrameData) return null;
        if ((value instanceof JCFItemData) && this.hasData(value)) return null;
        if ((value instanceof JCFPanelData) && this.hasData(value)) return null;
        else return this.succeedArea.put(key, value);
    }

    getSucceedData(key: Object): Object | null {
        if (this.succeedArea == null || !this.succeedArea.isPutable()) return null;
        else return this.succeedArea.get(key);
    }

    getCurrentArea(outLog: boolean): JCFScreenData;
    getCurrentArea(): JCFScreenData;
    getCurrentArea(outLog?: boolean): JCFScreenData {
        if (outLog === undefined) {
            return this.dataArea.getCurrentArea();
        } else {
            return this.dataArea.getCurrentArea(outLog);
        }
    }

    getUserData(key: any): any {
        return this.userData.get(key)
    }

    getApplicationData(key: any): any {
        return this.applicationData.get(key)
    }

    userDataKeySet(): NativeSet {
        return this.userData.keySet()
    }

    removeUserData(key: any): any {
        return this.userData.remove(key)
    }

    putApplicationData(key: any, value: any): any {
        if (value instanceof JCFScreenData) {
           return null;
        } else if (value instanceof JCFDTSucceedData) {
           return null;
        } else if (value instanceof JCFContext) {
           return null;
        } else if (value instanceof JCFFrameData) {
           return null;
        } else if (value instanceof JCFItemData && this.hasData(value as JCFItemData)) {
           return null;
        } else {
           return value instanceof JCFPanelData && this.hasData(value as JCFPanelData) ? null : this.applicationData.put(key, value);
        }
    }

    applicationDataKeySet(): NativeSet {
        return this.applicationData.keySet();
    }

    applicationDataSize(): number {
        return this.applicationData.size();
    }

    clearApplicationData(): void {
        this.applicationData.clear();
    }

    clearUserData(): void {
        this.userData.clear();
    }

    userDataSize(): number {
        return this.userData.size();
    }

    clearSucceedData(): void {
        if (this.succeedArea !== null && this.succeedArea.isPutable()) {
           this.succeedArea.clear();
        }
    }

    containsSucceedDataKey(key: any): boolean {
        return this.succeedArea !== null && this.succeedArea.isPutable() ? this.succeedArea.containsKey(key) : false;
    }

    removeApplicationData(key: any): any {
        return this.applicationData.remove(key);
    }

    removeSucceedData(key: any): any {
        return this.succeedArea !== null && this.succeedArea.isPutable() ? this.succeedArea.remove(key) : null;
    }

}
