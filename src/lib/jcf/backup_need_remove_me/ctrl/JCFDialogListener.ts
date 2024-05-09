import { JCFDialogEvent } from "./JCFDialogEvent";

export interface JCFDialogListener {
    dialogOpening(jcfDialogEvent: JCFDialogEvent): void;
    dialogOpened(jcfDialogEvent: JCFDialogEvent): void;
    dialogClosing(jcfDialogEvent: JCFDialogEvent): void;
    dialogClosed(jcfDialogEvent: JCFDialogEvent): void;
}

export namespace JCFDialogListener {

    export const CLASS_VERSION: string = "V01L01";

    export const COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";

    export const FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";
}
