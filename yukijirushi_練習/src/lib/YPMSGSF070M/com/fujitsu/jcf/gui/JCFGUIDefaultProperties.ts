/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFGUIDefaultProperties {
        public constructor(defaultBackground: com.java.Color, defaultFont: com.java.Font, errorForeground: com.java.Color, errorBackground: com.java.Color, errorReverse: boolean, resourceFolder: string, filePathType: number, caretStyleInsert: string, caretStyleOverwrite: string, focusMovementEnter: boolean, focusMovementTab: boolean, focusMovementBackTab: boolean, focusMovementUp: boolean, focusMovementDown: boolean, focusMovementLeft: boolean, focusMovementRight: boolean, focusMovementHome: boolean, focusMovementEnd: boolean, focusMovementOthersClick: boolean, retryMouseClick: boolean, checkRoutineInfo: any, modelType: number, mainSystem: boolean, lockAdapter: lib.com.fujitsu.jcf.gui.JCFLockAdapter, mouseClickFocusModeForPushButton: number, mouseClickFocusModeForSwitchButton: number, mouseClickFocusModeForBoardButton: number) {
            if (this.defaultBackground === undefined) { this.defaultBackground = null; }
            if (this.defaultFont === undefined) { this.defaultFont = null; }
            if (this.errorForeground === undefined) { this.errorForeground = null; }
            if (this.errorBackground === undefined) { this.errorBackground = null; }
            if (this.errorReverse === undefined) { this.errorReverse = false; }
            if (this.resourceFolder === undefined) { this.resourceFolder = null; }
            if (this.filePathType === undefined) { this.filePathType = 0; }
            if (this.caretStyleInsert === undefined) { this.caretStyleInsert = null; }
            if (this.caretStyleOverwrite === undefined) { this.caretStyleOverwrite = null; }
            if (this.focusMovementEnter === undefined) { this.focusMovementEnter = false; }
            if (this.focusMovementTab === undefined) { this.focusMovementTab = false; }
            if (this.focusMovementBackTab === undefined) { this.focusMovementBackTab = false; }
            if (this.focusMovementUp === undefined) { this.focusMovementUp = false; }
            if (this.focusMovementDown === undefined) { this.focusMovementDown = false; }
            if (this.focusMovementLeft === undefined) { this.focusMovementLeft = false; }
            if (this.focusMovementRight === undefined) { this.focusMovementRight = false; }
            if (this.focusMovementHome === undefined) { this.focusMovementHome = false; }
            if (this.focusMovementEnd === undefined) { this.focusMovementEnd = false; }
            if (this.focusMovementOthersClick === undefined) { this.focusMovementOthersClick = false; }
            if (this.retryMouseClick === undefined) { this.retryMouseClick = false; }
            if (this.modelType === undefined) { this.modelType = 0; }
            if (this.mainSystem === undefined) { this.mainSystem = false; }
            if (this.lockAdapter === undefined) { this.lockAdapter = null; }
            if (this.mouseClickFocusModeForPushButton === undefined) { this.mouseClickFocusModeForPushButton = 0; }
            if (this.mouseClickFocusModeForSwitchButton === undefined) { this.mouseClickFocusModeForSwitchButton = 0; }
            if (this.mouseClickFocusModeForBoardButton === undefined) { this.mouseClickFocusModeForBoardButton = 0; }
            if (this.checkRoutineInfo === undefined) { this.checkRoutineInfo = null; }
            this.defaultBackground = null;
            this.defaultFont = null;
            this.errorForeground = null;
            this.errorBackground = null;
            this.errorReverse = false;
            this.resourceFolder = "";
            this.filePathType = 0;
            this.caretStyleInsert = null;
            this.caretStyleOverwrite = null;
            this.focusMovementEnter = false;
            this.focusMovementTab = true;
            this.focusMovementBackTab = true;
            this.focusMovementUp = false;
            this.focusMovementDown = false;
            this.focusMovementLeft = false;
            this.focusMovementRight = false;
            this.focusMovementHome = false;
            this.focusMovementEnd = false;
            this.focusMovementOthersClick = true;
            this.retryMouseClick = true;
            this.modelType = 0;
            this.mainSystem = true;
            this.lockAdapter = null;
            this.mouseClickFocusModeForPushButton = 0;
            this.mouseClickFocusModeForSwitchButton = 0;
            this.mouseClickFocusModeForBoardButton = 0;
            this.checkRoutineInfo = <any>({});
            this.defaultBackground = defaultBackground;
            this.defaultFont = defaultFont;
            this.errorForeground = errorForeground;
            this.errorBackground = errorBackground;
            this.errorReverse = errorReverse;
            this.resourceFolder = resourceFolder;
            this.filePathType = filePathType;
            this.caretStyleInsert = caretStyleInsert;
            this.caretStyleOverwrite = caretStyleOverwrite;
            this.focusMovementEnter = focusMovementEnter;
            this.focusMovementTab = focusMovementTab;
            this.focusMovementBackTab = focusMovementBackTab;
            this.focusMovementUp = focusMovementUp;
            this.focusMovementDown = focusMovementDown;
            this.focusMovementLeft = focusMovementLeft;
            this.focusMovementRight = focusMovementRight;
            this.focusMovementHome = focusMovementHome;
            this.focusMovementEnd = focusMovementEnd;
            this.focusMovementOthersClick = focusMovementOthersClick;
            this.retryMouseClick = retryMouseClick;
            this.checkRoutineInfo = checkRoutineInfo;
            this.modelType = modelType;
            this.mainSystem = mainSystem;
            this.lockAdapter = lockAdapter;
            this.mouseClickFocusModeForPushButton = mouseClickFocusModeForPushButton;
            this.mouseClickFocusModeForSwitchButton = mouseClickFocusModeForSwitchButton;
            this.mouseClickFocusModeForBoardButton = mouseClickFocusModeForBoardButton;
        }

        public getDefaultBackground(): com.java.Color {
            return this.defaultBackground;
        }

        public getDefaultFont(): com.java.Font {
            return this.defaultFont;
        }

        public getErrorForeground(): com.java.Color {
            return this.errorForeground;
        }

        public getErrorBackground(): com.java.Color {
            return this.errorBackground;
        }

        public isErrorReverse(): boolean {
            return this.errorReverse;
        }

        public getResourceFolder(): string {
            return this.resourceFolder;
        }

        public getFilePathType(): number {
            return this.filePathType;
        }

        public getCaretStyleInsert(): string {
            return this.caretStyleInsert;
        }

        public getCaretStyleOverwrite(): string {
            return this.caretStyleOverwrite;
        }

        public isFocusMovementEnter(): boolean {
            return this.focusMovementEnter;
        }

        public isFocusMovementTab(): boolean {
            return this.focusMovementTab;
        }

        public isFocusMovementBackTab(): boolean {
            return this.focusMovementBackTab;
        }

        public isFocusMovementUp(): boolean {
            return this.focusMovementUp;
        }

        public isFocusMovementDown(): boolean {
            return this.focusMovementDown;
        }

        public isFocusMovementLeft(): boolean {
            return this.focusMovementLeft;
        }

        public isFocusMovementRight(): boolean {
            return this.focusMovementRight;
        }

        public isFocusMovementHome(): boolean {
            return this.focusMovementHome;
        }

        public isFocusMovementEnd(): boolean {
            return this.focusMovementEnd;
        }

        public isFocusMovementOthersClick(): boolean {
            return this.focusMovementOthersClick;
        }

        public isRetryMouseClick(): boolean {
            return this.retryMouseClick;
        }

        public getCheckRoutineInfo(): any {
            return this.checkRoutineInfo;
        }

        public getModelType(): number {
            return this.modelType;
        }

        public isMainSystem(): boolean {
            return this.mainSystem;
        }

        public getLockAdapter(): lib.com.fujitsu.jcf.gui.JCFLockAdapter {
            return this.lockAdapter;
        }

        public getMouseClickFocusModeForPushButton(): number {
            return this.mouseClickFocusModeForPushButton;
        }

        public getMouseClickFocusModeForSwitchButton(): number {
            return this.mouseClickFocusModeForSwitchButton;
        }

        public getMouseClickFocusModeForBoardButton(): number {
            return this.mouseClickFocusModeForBoardButton;
        }

        public static CLASS_VERSION: string = "V3L20";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2013";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFGUIDefaultProperties";

        public static FILE_PATH_TYPE_ABSOLUTENESS: number = 0;

        public static FILE_PATH_TYPE_RELATIVITY: number = 1;

        public static MODEL_TYPE_APPLICATION: number = 0;

        public static MODEL_TYPE_APPLET: number = 1;

        public static MOUSE_CLICK_FOCUS_MODE_GUI: number = 0;

        public static MOUSE_CLICK_FOCUS_MODE_FALSE: number = 1;

        public static MOUSE_CLICK_FOCUS_MODE_TRUE: number = 2;

        /*private*/ defaultBackground: com.java.Color;

        /*private*/ defaultFont: com.java.Font;

        /*private*/ errorForeground: com.java.Color;

        /*private*/ errorBackground: com.java.Color;

        /*private*/ errorReverse: boolean;

        /*private*/ resourceFolder: string;

        /*private*/ filePathType: number;

        /*private*/ caretStyleInsert: string;

        /*private*/ caretStyleOverwrite: string;

        /*private*/ focusMovementEnter: boolean;

        /*private*/ focusMovementTab: boolean;

        /*private*/ focusMovementBackTab: boolean;

        /*private*/ focusMovementUp: boolean;

        /*private*/ focusMovementDown: boolean;

        /*private*/ focusMovementLeft: boolean;

        /*private*/ focusMovementRight: boolean;

        /*private*/ focusMovementHome: boolean;

        /*private*/ focusMovementEnd: boolean;

        /*private*/ focusMovementOthersClick: boolean;

        /*private*/ retryMouseClick: boolean;

        /*private*/ modelType: number;

        /*private*/ mainSystem: boolean;

        /*private*/ lockAdapter: lib.com.fujitsu.jcf.gui.JCFLockAdapter;

        /*private*/ mouseClickFocusModeForPushButton: number;

        /*private*/ mouseClickFocusModeForSwitchButton: number;

        /*private*/ mouseClickFocusModeForBoardButton: number;

        /*private*/ checkRoutineInfo: any;
    }
    JCFGUIDefaultProperties["__class"] = "lib.com.fujitsu.jcf.gui.JCFGUIDefaultProperties";

}

