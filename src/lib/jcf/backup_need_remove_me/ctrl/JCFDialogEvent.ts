import { Window } from "../../native/awt/Window"


export class JCFDialogEvent {
    private activeWindow: Window;

    constructor(activeWindow: Window) {
        if (this.activeWindow === undefined) { this.activeWindow = null; }
        this.activeWindow = null;
        this.activeWindow = activeWindow;
    }

    public getActiveWindow(): Window {
        return this.activeWindow;
    }
}
