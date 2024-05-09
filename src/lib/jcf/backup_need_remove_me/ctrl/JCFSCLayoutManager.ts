import {JCFCMReference} from "./JCFCMReference"

export class JCFSCLayoutManager {
    constructor(reference: JCFCMReference) {
        if (this.windowBaseID === undefined) { this.windowBaseID = 0; }
        if (this.windowIDList === undefined) { this.windowIDList = null; }
        if (this.activeWindowFrameID === undefined) { this.activeWindowFrameID = null; }
        if (this.focusedPanelID === undefined) { this.focusedPanelID = null; }
        if (this.focusedItemID === undefined) { this.focusedItemID = null; }
        if (this.currentScreenID === undefined) { this.currentScreenID = null; }
        if (this.reference === undefined) { this.reference = null; }
        if (this.windowInfo === undefined) { this.windowInfo = null; }
        this.windowBaseID = 0;
        this.windowIDList = null;
        this.activeWindowFrameID = "";
        this.focusedPanelID = "";
        this.focusedItemID = "";
        this.currentScreenID = "";
        this.reference = null;
        this.windowInfo = null;
        this.windowIDList = <any>([]);
        this.windowInfo = <any>({});
        this.reference = reference;
    }

    /*private*/ windowBaseID: number;

    /*private*/ windowIDList: Array<any>;

    /*private*/ activeWindowFrameID: string;

    /*private*/ focusedPanelID: string;

    /*private*/ focusedItemID: string;

    /*private*/ currentScreenID: string;

    /*private*/ reference: JCFCMReference;

    /*private*/ windowInfo: any;
}