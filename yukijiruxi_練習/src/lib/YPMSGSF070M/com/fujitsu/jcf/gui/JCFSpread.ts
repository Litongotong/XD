/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpread extends lib.com.fujitsu.caa.CJSpread {
        __cdInitBean() {
            try {
                this.__cdEnableEventDispatch = true;
            } catch(e) {
                console.error(e.message, e);
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        }

        public constructor(arg0?: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any) {
            if (((typeof arg0 === 'number') || arg0 === null) && ((typeof arg1 === 'number') || arg1 === null) && ((typeof arg2 === 'number') || arg2 === null) && ((typeof arg3 === 'number') || arg3 === null) && ((typeof arg4 === 'number') || arg4 === null) && ((typeof arg5 === 'number') || arg5 === null) && ((typeof arg6 === 'number') || arg6 === null) && ((typeof arg7 === 'number') || arg7 === null)) {
                let __args = arguments;
                super();
                if (this.__cdEnableEventDispatch === undefined) { this.__cdEnableEventDispatch = false; } 
                if (this.sequentialNumber === undefined) { this.sequentialNumber = 0; } 
                if (this.panelID === undefined) { this.panelID = null; } 
                if (this.itemID === undefined) { this.itemID = null; } 
                if (this.tag === undefined) { this.tag = null; } 
                if (this.initialized === undefined) { this.initialized = false; } 
                if (this.textValueChangedActionCode === undefined) { this.textValueChangedActionCode = null; } 
                if (this.rowsStateChangedActionCode === undefined) { this.rowsStateChangedActionCode = null; } 
                if (this.itemStateChangedActionCode === undefined) { this.itemStateChangedActionCode = null; } 
                if (this.pushedActionCode === undefined) { this.pushedActionCode = null; } 
                if (this.initSpreadData === undefined) { this.initSpreadData = null; } 
                if (this.valueOnOpen === undefined) { this.valueOnOpen = null; } 
                if (this.editvalueOnOpen === undefined) { this.editvalueOnOpen = null; } 
                if (this.statusOnOpen === undefined) { this.statusOnOpen = 0; } 
                if (this.inputAreaOpened === undefined) { this.inputAreaOpened = false; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
                if (this.columnInfoBackgroundArray === undefined) { this.columnInfoBackgroundArray = null; } 
                if (this.columnInfoForegroundArray === undefined) { this.columnInfoForegroundArray = null; } 
                if (this.commaEditAllowedArray === undefined) { this.commaEditAllowedArray = null; } 
                if (this.decimalpointAllowedArray === undefined) { this.decimalpointAllowedArray = null; } 
                if (this.enableInputNegativeValueArray === undefined) { this.enableInputNegativeValueArray = null; } 
                if (this.itemArrays === undefined) { this.itemArrays = null; } 
                if (this.headerColumnInfoBackgroundArray === undefined) { this.headerColumnInfoBackgroundArray = null; } 
                if (this.headerColumnInfoForegroundArray === undefined) { this.headerColumnInfoForegroundArray = null; } 
                if (this.envBackgroundEnabled === undefined) { this.envBackgroundEnabled = false; } 
                if (this.envFontEnabled === undefined) { this.envFontEnabled = false; } 
                if (this.defaultProperties === undefined) { this.defaultProperties = null; } 
                if (this.errorCode === undefined) { this.errorCode = null; } 
                if (this.inputAreaKeyListener === undefined) { this.inputAreaKeyListener = null; } 
                if (this.__rowSelected === undefined) { this.__rowSelected = false; } 
                if (this.inputAreaOpenedPosition === undefined) { this.inputAreaOpenedPosition = null; } 
                if (this.actionCodeInfo === undefined) { this.actionCodeInfo = null; } 
                if (this.keyAdapter === undefined) { this.keyAdapter = null; } 
                if (this.mouseAdapter === undefined) { this.mouseAdapter = null; } 
                if (this.lineSelection === undefined) { this.lineSelection = 0; } 
                if (this.recordInfo === undefined) { this.recordInfo = null; } 
                if (this.clientBackground === undefined) { this.clientBackground = null; } 
                if (this.clientForeground === undefined) { this.clientForeground = null; } 
                if (this.zeroSuppress === undefined) { this.zeroSuppress = 0; } 
                if (this.selectedRowPositions === undefined) { this.selectedRowPositions = null; } 
                if (this.deselectedRowPositions === undefined) { this.deselectedRowPositions = null; } 
                if (this.rowSelectingTrigger === undefined) { this.rowSelectingTrigger = null; } 
                if (this.hiddenSupport === undefined) { this.hiddenSupport = 0; } 
                if (this.checkRoutineID === undefined) { this.checkRoutineID = null; } 
                if (this.retryOnError === undefined) { this.retryOnError = false; } 
                if (this.lockedByGUI === undefined) { this.lockedByGUI = false; } 
                if (this.lockedByCJF === undefined) { this.lockedByCJF = false; } 
                if (this.refocusable === undefined) { this.refocusable = false; } 
                if (this.needSetErrorAttributes === undefined) { this.needSetErrorAttributes = false; } 
                if (this.errorAttributesBackup === undefined) { this.errorAttributesBackup = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyConstrained === undefined) { this.__cdIsheaderAndColumnPropertyPropertyConstrained = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyBounded === undefined) { this.__cdIsheaderAndColumnPropertyPropertyBounded = false; } 
                if (this.initCursorRow === undefined) { this.initCursorRow = 0; } 
                if (this.initCursorCol === undefined) { this.initCursorCol = 0; } 
                if (this.__cdIsitemIDPropertyConstrained === undefined) { this.__cdIsitemIDPropertyConstrained = false; } 
                if (this.__cdIsitemIDPropertyBounded === undefined) { this.__cdIsitemIDPropertyBounded = false; } 
                if (this.__cdIstagPropertyConstrained === undefined) { this.__cdIstagPropertyConstrained = false; } 
                if (this.__cdIstagPropertyBounded === undefined) { this.__cdIstagPropertyBounded = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyConstrained === undefined) { this.__cdIsenvBackgroundEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyBounded === undefined) { this.__cdIsenvBackgroundEnabledPropertyBounded = false; } 
                if (this.__cdIsenvFontEnabledPropertyConstrained === undefined) { this.__cdIsenvFontEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvFontEnabledPropertyBounded === undefined) { this.__cdIsenvFontEnabledPropertyBounded = false; } 
                if (this.__cdIsselectionVisiblePropertyConstrained === undefined) { this.__cdIsselectionVisiblePropertyConstrained = false; } 
                if (this.__cdIsselectionVisiblePropertyBounded === undefined) { this.__cdIsselectionVisiblePropertyBounded = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyConstrained === undefined) { this.__cdIstextValueChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyBounded === undefined) { this.__cdIstextValueChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsitemStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyBounded === undefined) { this.__cdIsitemStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsrowsStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyBounded === undefined) { this.__cdIsrowsStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIspushedActionCodePropertyConstrained === undefined) { this.__cdIspushedActionCodePropertyConstrained = false; } 
                if (this.__cdIspushedActionCodePropertyBounded === undefined) { this.__cdIspushedActionCodePropertyBounded = false; } 
                if (this.closeMode === undefined) { this.closeMode = false; } 
                if (this.JCFActionListenerList === undefined) { this.JCFActionListenerList = null; } 
                if (this.__cdIsextendmodeBackgroundPropertyConstrained === undefined) { this.__cdIsextendmodeBackgroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeBackgroundPropertyBounded === undefined) { this.__cdIsextendmodeBackgroundPropertyBounded = false; } 
                if (this.__cdIsextendmodeForegroundPropertyConstrained === undefined) { this.__cdIsextendmodeForegroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeForegroundPropertyBounded === undefined) { this.__cdIsextendmodeForegroundPropertyBounded = false; } 
                if (this.__cdIsselectionBackgroundPropertyConstrained === undefined) { this.__cdIsselectionBackgroundPropertyConstrained = false; } 
                if (this.__cdIsselectionBackgroundPropertyBounded === undefined) { this.__cdIsselectionBackgroundPropertyBounded = false; } 
                if (this.__cdIsselectionForegroundPropertyConstrained === undefined) { this.__cdIsselectionForegroundPropertyConstrained = false; } 
                if (this.__cdIsselectionForegroundPropertyBounded === undefined) { this.__cdIsselectionForegroundPropertyBounded = false; } 
                if (this.__cdIslineSelectionPropertyConstrained === undefined) { this.__cdIslineSelectionPropertyConstrained = false; } 
                if (this.__cdIslineSelectionPropertyBounded === undefined) { this.__cdIslineSelectionPropertyBounded = false; } 
                if (this.__cdIsclientBackgroundPropertyConstrained === undefined) { this.__cdIsclientBackgroundPropertyConstrained = false; } 
                if (this.__cdIsclientBackgroundPropertyBounded === undefined) { this.__cdIsclientBackgroundPropertyBounded = false; } 
                if (this.__cdIsclientForegroundPropertyConstrained === undefined) { this.__cdIsclientForegroundPropertyConstrained = false; } 
                if (this.__cdIsclientForegroundPropertyBounded === undefined) { this.__cdIsclientForegroundPropertyBounded = false; } 
                if (this.semaphore === undefined) { this.semaphore = null; } 
                if (this.__cdIszeroSuppressPropertyConstrained === undefined) { this.__cdIszeroSuppressPropertyConstrained = false; } 
                if (this.__cdIszeroSuppressPropertyBounded === undefined) { this.__cdIszeroSuppressPropertyBounded = false; } 
                if (this.__cdIslockModePropertyConstrained === undefined) { this.__cdIslockModePropertyConstrained = false; } 
                if (this.__cdIslockModePropertyBounded === undefined) { this.__cdIslockModePropertyBounded = false; } 
                if (this.lockMode === undefined) { this.lockMode = 0; } 
                if (this.wheelScrollingEnabled === undefined) { this.wheelScrollingEnabled = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyConstrained === undefined) { this.__cdIswheelScrollingEnabledPropertyConstrained = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyBounded === undefined) { this.__cdIswheelScrollingEnabledPropertyBounded = false; } 
                if (this.__cdIshiddenSupportPropertyConstrained === undefined) { this.__cdIshiddenSupportPropertyConstrained = false; } 
                if (this.__cdIshiddenSupportPropertyBounded === undefined) { this.__cdIshiddenSupportPropertyBounded = false; } 
                if (this.__cdIscheckRoutineIDPropertyConstrained === undefined) { this.__cdIscheckRoutineIDPropertyConstrained = false; } 
                if (this.__cdIscheckRoutineIDPropertyBounded === undefined) { this.__cdIscheckRoutineIDPropertyBounded = false; } 
                if (this.__cdIsretryOnErrorPropertyConstrained === undefined) { this.__cdIsretryOnErrorPropertyConstrained = false; } 
                if (this.__cdIsretryOnErrorPropertyBounded === undefined) { this.__cdIsretryOnErrorPropertyBounded = false; } 
                this.__cdEnableEventDispatch = false;
                this.sequentialNumber = 0;
                this.panelID = "";
                this.itemID = "";
                this.tag = "";
                this.initialized = false;
                this.textValueChangedActionCode = "";
                this.rowsStateChangedActionCode = "";
                this.itemStateChangedActionCode = "";
                this.pushedActionCode = "";
                this.initSpreadData = null;
                this.valueOnOpen = "";
                this.editvalueOnOpen = "";
                this.statusOnOpen = 0;
                this.inputAreaOpened = false;
                this.commaEditAllowedArray = [];
                this.decimalpointAllowedArray = [];
                this.enableInputNegativeValueArray = [];
                this.itemArrays = <any> (function(dims) { let allocate = function(dims) { if (dims.length === 0) { return null; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([0, 0]);
                this.envBackgroundEnabled = false;
                this.envFontEnabled = false;
                this.defaultProperties = null;
                this.errorCode = "ERROR_NOTHING";
                this.inputAreaKeyListener = new JCFSpread.InputAreaKeyListener(this);
                this.__rowSelected = false;
                this.inputAreaOpenedPosition = null;
                this.actionCodeInfo = null;
                this.keyAdapter = null;
                this.mouseAdapter = null;
                this.lineSelection = 0;
                this.recordInfo = null;
                this.zeroSuppress = 0;
                this.selectedRowPositions = null;
                this.deselectedRowPositions = null;
                this.hiddenSupport = 1;
                this.checkRoutineID = "";
                this.retryOnError = false;
                this.lockedByGUI = false;
                this.lockedByCJF = false;
                this.refocusable = true;
                this.needSetErrorAttributes = false;
                this.errorAttributesBackup = false;
                this.__cdIsheaderAndColumnPropertyPropertyConstrained = false;
                this.__cdIsheaderAndColumnPropertyPropertyBounded = true;
                this.__cdIsitemIDPropertyConstrained = false;
                this.__cdIsitemIDPropertyBounded = false;
                this.__cdIstagPropertyConstrained = false;
                this.__cdIstagPropertyBounded = false;
                this.__cdIsenvBackgroundEnabledPropertyConstrained = false;
                this.__cdIsenvBackgroundEnabledPropertyBounded = false;
                this.__cdIsenvFontEnabledPropertyConstrained = false;
                this.__cdIsenvFontEnabledPropertyBounded = false;
                this.__cdIsselectionVisiblePropertyConstrained = false;
                this.__cdIsselectionVisiblePropertyBounded = false;
                this.__cdIstextValueChangedActionCodePropertyConstrained = false;
                this.__cdIstextValueChangedActionCodePropertyBounded = false;
                this.__cdIsitemStateChangedActionCodePropertyConstrained = false;
                this.__cdIsitemStateChangedActionCodePropertyBounded = false;
                this.__cdIsrowsStateChangedActionCodePropertyConstrained = false;
                this.__cdIsrowsStateChangedActionCodePropertyBounded = false;
                this.__cdIspushedActionCodePropertyConstrained = false;
                this.__cdIspushedActionCodePropertyBounded = false;
                this.closeMode = false;
                this.__cdIsextendmodeBackgroundPropertyConstrained = false;
                this.__cdIsextendmodeBackgroundPropertyBounded = false;
                this.__cdIsextendmodeForegroundPropertyConstrained = false;
                this.__cdIsextendmodeForegroundPropertyBounded = false;
                this.__cdIsselectionBackgroundPropertyConstrained = false;
                this.__cdIsselectionBackgroundPropertyBounded = false;
                this.__cdIsselectionForegroundPropertyConstrained = false;
                this.__cdIsselectionForegroundPropertyBounded = false;
                this.__cdIslineSelectionPropertyConstrained = false;
                this.__cdIslineSelectionPropertyBounded = false;
                this.__cdIsclientBackgroundPropertyConstrained = false;
                this.__cdIsclientBackgroundPropertyBounded = false;
                this.__cdIsclientForegroundPropertyConstrained = false;
                this.__cdIsclientForegroundPropertyBounded = false;
                this.semaphore = null;
                this.__cdIszeroSuppressPropertyConstrained = false;
                this.__cdIszeroSuppressPropertyBounded = false;
                this.__cdIslockModePropertyConstrained = false;
                this.__cdIslockModePropertyBounded = false;
                this.lockMode = 0;
                this.wheelScrollingEnabled = false;
                this.__cdIswheelScrollingEnabledPropertyConstrained = false;
                this.__cdIswheelScrollingEnabledPropertyBounded = false;
                this.__cdIshiddenSupportPropertyConstrained = false;
                this.__cdIshiddenSupportPropertyBounded = false;
                this.__cdIscheckRoutineIDPropertyConstrained = false;
                this.__cdIscheckRoutineIDPropertyBounded = false;
                this.__cdIsretryOnErrorPropertyConstrained = false;
                this.__cdIsretryOnErrorPropertyBounded = false;
            } else if (((typeof arg0 === 'number') || arg0 === null) && ((typeof arg1 === 'number') || arg1 === null) && ((typeof arg2 === 'number') || arg2 === null) && ((typeof arg3 === 'number') || arg3 === null) && ((arg4 != null && arg4 instanceof <any>lib.com.fujitsu.caa.CJCell) || arg4 === null) && ((arg5 != null && arg5 instanceof <any>lib.com.fujitsu.caa.CJCell) || arg5 === null) && arg6 === undefined && arg7 === undefined) {
                let __args = arguments;
                super();
                if (this.__cdEnableEventDispatch === undefined) { this.__cdEnableEventDispatch = false; } 
                if (this.sequentialNumber === undefined) { this.sequentialNumber = 0; } 
                if (this.panelID === undefined) { this.panelID = null; } 
                if (this.itemID === undefined) { this.itemID = null; } 
                if (this.tag === undefined) { this.tag = null; } 
                if (this.initialized === undefined) { this.initialized = false; } 
                if (this.textValueChangedActionCode === undefined) { this.textValueChangedActionCode = null; } 
                if (this.rowsStateChangedActionCode === undefined) { this.rowsStateChangedActionCode = null; } 
                if (this.itemStateChangedActionCode === undefined) { this.itemStateChangedActionCode = null; } 
                if (this.pushedActionCode === undefined) { this.pushedActionCode = null; } 
                if (this.initSpreadData === undefined) { this.initSpreadData = null; } 
                if (this.valueOnOpen === undefined) { this.valueOnOpen = null; } 
                if (this.editvalueOnOpen === undefined) { this.editvalueOnOpen = null; } 
                if (this.statusOnOpen === undefined) { this.statusOnOpen = 0; } 
                if (this.inputAreaOpened === undefined) { this.inputAreaOpened = false; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
                if (this.columnInfoBackgroundArray === undefined) { this.columnInfoBackgroundArray = null; } 
                if (this.columnInfoForegroundArray === undefined) { this.columnInfoForegroundArray = null; } 
                if (this.commaEditAllowedArray === undefined) { this.commaEditAllowedArray = null; } 
                if (this.decimalpointAllowedArray === undefined) { this.decimalpointAllowedArray = null; } 
                if (this.enableInputNegativeValueArray === undefined) { this.enableInputNegativeValueArray = null; } 
                if (this.itemArrays === undefined) { this.itemArrays = null; } 
                if (this.headerColumnInfoBackgroundArray === undefined) { this.headerColumnInfoBackgroundArray = null; } 
                if (this.headerColumnInfoForegroundArray === undefined) { this.headerColumnInfoForegroundArray = null; } 
                if (this.envBackgroundEnabled === undefined) { this.envBackgroundEnabled = false; } 
                if (this.envFontEnabled === undefined) { this.envFontEnabled = false; } 
                if (this.defaultProperties === undefined) { this.defaultProperties = null; } 
                if (this.errorCode === undefined) { this.errorCode = null; } 
                if (this.inputAreaKeyListener === undefined) { this.inputAreaKeyListener = null; } 
                if (this.__rowSelected === undefined) { this.__rowSelected = false; } 
                if (this.inputAreaOpenedPosition === undefined) { this.inputAreaOpenedPosition = null; } 
                if (this.actionCodeInfo === undefined) { this.actionCodeInfo = null; } 
                if (this.keyAdapter === undefined) { this.keyAdapter = null; } 
                if (this.mouseAdapter === undefined) { this.mouseAdapter = null; } 
                if (this.lineSelection === undefined) { this.lineSelection = 0; } 
                if (this.recordInfo === undefined) { this.recordInfo = null; } 
                if (this.clientBackground === undefined) { this.clientBackground = null; } 
                if (this.clientForeground === undefined) { this.clientForeground = null; } 
                if (this.zeroSuppress === undefined) { this.zeroSuppress = 0; } 
                if (this.selectedRowPositions === undefined) { this.selectedRowPositions = null; } 
                if (this.deselectedRowPositions === undefined) { this.deselectedRowPositions = null; } 
                if (this.rowSelectingTrigger === undefined) { this.rowSelectingTrigger = null; } 
                if (this.hiddenSupport === undefined) { this.hiddenSupport = 0; } 
                if (this.checkRoutineID === undefined) { this.checkRoutineID = null; } 
                if (this.retryOnError === undefined) { this.retryOnError = false; } 
                if (this.lockedByGUI === undefined) { this.lockedByGUI = false; } 
                if (this.lockedByCJF === undefined) { this.lockedByCJF = false; } 
                if (this.refocusable === undefined) { this.refocusable = false; } 
                if (this.needSetErrorAttributes === undefined) { this.needSetErrorAttributes = false; } 
                if (this.errorAttributesBackup === undefined) { this.errorAttributesBackup = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyConstrained === undefined) { this.__cdIsheaderAndColumnPropertyPropertyConstrained = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyBounded === undefined) { this.__cdIsheaderAndColumnPropertyPropertyBounded = false; } 
                if (this.initCursorRow === undefined) { this.initCursorRow = 0; } 
                if (this.initCursorCol === undefined) { this.initCursorCol = 0; } 
                if (this.__cdIsitemIDPropertyConstrained === undefined) { this.__cdIsitemIDPropertyConstrained = false; } 
                if (this.__cdIsitemIDPropertyBounded === undefined) { this.__cdIsitemIDPropertyBounded = false; } 
                if (this.__cdIstagPropertyConstrained === undefined) { this.__cdIstagPropertyConstrained = false; } 
                if (this.__cdIstagPropertyBounded === undefined) { this.__cdIstagPropertyBounded = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyConstrained === undefined) { this.__cdIsenvBackgroundEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyBounded === undefined) { this.__cdIsenvBackgroundEnabledPropertyBounded = false; } 
                if (this.__cdIsenvFontEnabledPropertyConstrained === undefined) { this.__cdIsenvFontEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvFontEnabledPropertyBounded === undefined) { this.__cdIsenvFontEnabledPropertyBounded = false; } 
                if (this.__cdIsselectionVisiblePropertyConstrained === undefined) { this.__cdIsselectionVisiblePropertyConstrained = false; } 
                if (this.__cdIsselectionVisiblePropertyBounded === undefined) { this.__cdIsselectionVisiblePropertyBounded = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyConstrained === undefined) { this.__cdIstextValueChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyBounded === undefined) { this.__cdIstextValueChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsitemStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyBounded === undefined) { this.__cdIsitemStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsrowsStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyBounded === undefined) { this.__cdIsrowsStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIspushedActionCodePropertyConstrained === undefined) { this.__cdIspushedActionCodePropertyConstrained = false; } 
                if (this.__cdIspushedActionCodePropertyBounded === undefined) { this.__cdIspushedActionCodePropertyBounded = false; } 
                if (this.closeMode === undefined) { this.closeMode = false; } 
                if (this.JCFActionListenerList === undefined) { this.JCFActionListenerList = null; } 
                if (this.__cdIsextendmodeBackgroundPropertyConstrained === undefined) { this.__cdIsextendmodeBackgroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeBackgroundPropertyBounded === undefined) { this.__cdIsextendmodeBackgroundPropertyBounded = false; } 
                if (this.__cdIsextendmodeForegroundPropertyConstrained === undefined) { this.__cdIsextendmodeForegroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeForegroundPropertyBounded === undefined) { this.__cdIsextendmodeForegroundPropertyBounded = false; } 
                if (this.__cdIsselectionBackgroundPropertyConstrained === undefined) { this.__cdIsselectionBackgroundPropertyConstrained = false; } 
                if (this.__cdIsselectionBackgroundPropertyBounded === undefined) { this.__cdIsselectionBackgroundPropertyBounded = false; } 
                if (this.__cdIsselectionForegroundPropertyConstrained === undefined) { this.__cdIsselectionForegroundPropertyConstrained = false; } 
                if (this.__cdIsselectionForegroundPropertyBounded === undefined) { this.__cdIsselectionForegroundPropertyBounded = false; } 
                if (this.__cdIslineSelectionPropertyConstrained === undefined) { this.__cdIslineSelectionPropertyConstrained = false; } 
                if (this.__cdIslineSelectionPropertyBounded === undefined) { this.__cdIslineSelectionPropertyBounded = false; } 
                if (this.__cdIsclientBackgroundPropertyConstrained === undefined) { this.__cdIsclientBackgroundPropertyConstrained = false; } 
                if (this.__cdIsclientBackgroundPropertyBounded === undefined) { this.__cdIsclientBackgroundPropertyBounded = false; } 
                if (this.__cdIsclientForegroundPropertyConstrained === undefined) { this.__cdIsclientForegroundPropertyConstrained = false; } 
                if (this.__cdIsclientForegroundPropertyBounded === undefined) { this.__cdIsclientForegroundPropertyBounded = false; } 
                if (this.semaphore === undefined) { this.semaphore = null; } 
                if (this.__cdIszeroSuppressPropertyConstrained === undefined) { this.__cdIszeroSuppressPropertyConstrained = false; } 
                if (this.__cdIszeroSuppressPropertyBounded === undefined) { this.__cdIszeroSuppressPropertyBounded = false; } 
                if (this.__cdIslockModePropertyConstrained === undefined) { this.__cdIslockModePropertyConstrained = false; } 
                if (this.__cdIslockModePropertyBounded === undefined) { this.__cdIslockModePropertyBounded = false; } 
                if (this.lockMode === undefined) { this.lockMode = 0; } 
                if (this.wheelScrollingEnabled === undefined) { this.wheelScrollingEnabled = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyConstrained === undefined) { this.__cdIswheelScrollingEnabledPropertyConstrained = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyBounded === undefined) { this.__cdIswheelScrollingEnabledPropertyBounded = false; } 
                if (this.__cdIshiddenSupportPropertyConstrained === undefined) { this.__cdIshiddenSupportPropertyConstrained = false; } 
                if (this.__cdIshiddenSupportPropertyBounded === undefined) { this.__cdIshiddenSupportPropertyBounded = false; } 
                if (this.__cdIscheckRoutineIDPropertyConstrained === undefined) { this.__cdIscheckRoutineIDPropertyConstrained = false; } 
                if (this.__cdIscheckRoutineIDPropertyBounded === undefined) { this.__cdIscheckRoutineIDPropertyBounded = false; } 
                if (this.__cdIsretryOnErrorPropertyConstrained === undefined) { this.__cdIsretryOnErrorPropertyConstrained = false; } 
                if (this.__cdIsretryOnErrorPropertyBounded === undefined) { this.__cdIsretryOnErrorPropertyBounded = false; } 
                this.__cdEnableEventDispatch = false;
                this.sequentialNumber = 0;
                this.panelID = "";
                this.itemID = "";
                this.tag = "";
                this.initialized = false;
                this.textValueChangedActionCode = "";
                this.rowsStateChangedActionCode = "";
                this.itemStateChangedActionCode = "";
                this.pushedActionCode = "";
                this.initSpreadData = null;
                this.valueOnOpen = "";
                this.editvalueOnOpen = "";
                this.statusOnOpen = 0;
                this.inputAreaOpened = false;
                this.commaEditAllowedArray = [];
                this.decimalpointAllowedArray = [];
                this.enableInputNegativeValueArray = [];
                this.itemArrays = <any> (function(dims) { let allocate = function(dims) { if (dims.length === 0) { return null; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([0, 0]);
                this.envBackgroundEnabled = false;
                this.envFontEnabled = false;
                this.defaultProperties = null;
                this.errorCode = "ERROR_NOTHING";
                this.inputAreaKeyListener = new JCFSpread.InputAreaKeyListener(this);
                this.__rowSelected = false;
                this.inputAreaOpenedPosition = null;
                this.actionCodeInfo = null;
                this.keyAdapter = null;
                this.mouseAdapter = null;
                this.lineSelection = 0;
                this.recordInfo = null;
                this.zeroSuppress = 0;
                this.selectedRowPositions = null;
                this.deselectedRowPositions = null;
                this.hiddenSupport = 1;
                this.checkRoutineID = "";
                this.retryOnError = false;
                this.lockedByGUI = false;
                this.lockedByCJF = false;
                this.refocusable = true;
                this.needSetErrorAttributes = false;
                this.errorAttributesBackup = false;
                this.__cdIsheaderAndColumnPropertyPropertyConstrained = false;
                this.__cdIsheaderAndColumnPropertyPropertyBounded = true;
                this.__cdIsitemIDPropertyConstrained = false;
                this.__cdIsitemIDPropertyBounded = false;
                this.__cdIstagPropertyConstrained = false;
                this.__cdIstagPropertyBounded = false;
                this.__cdIsenvBackgroundEnabledPropertyConstrained = false;
                this.__cdIsenvBackgroundEnabledPropertyBounded = false;
                this.__cdIsenvFontEnabledPropertyConstrained = false;
                this.__cdIsenvFontEnabledPropertyBounded = false;
                this.__cdIsselectionVisiblePropertyConstrained = false;
                this.__cdIsselectionVisiblePropertyBounded = false;
                this.__cdIstextValueChangedActionCodePropertyConstrained = false;
                this.__cdIstextValueChangedActionCodePropertyBounded = false;
                this.__cdIsitemStateChangedActionCodePropertyConstrained = false;
                this.__cdIsitemStateChangedActionCodePropertyBounded = false;
                this.__cdIsrowsStateChangedActionCodePropertyConstrained = false;
                this.__cdIsrowsStateChangedActionCodePropertyBounded = false;
                this.__cdIspushedActionCodePropertyConstrained = false;
                this.__cdIspushedActionCodePropertyBounded = false;
                this.closeMode = false;
                this.__cdIsextendmodeBackgroundPropertyConstrained = false;
                this.__cdIsextendmodeBackgroundPropertyBounded = false;
                this.__cdIsextendmodeForegroundPropertyConstrained = false;
                this.__cdIsextendmodeForegroundPropertyBounded = false;
                this.__cdIsselectionBackgroundPropertyConstrained = false;
                this.__cdIsselectionBackgroundPropertyBounded = false;
                this.__cdIsselectionForegroundPropertyConstrained = false;
                this.__cdIsselectionForegroundPropertyBounded = false;
                this.__cdIslineSelectionPropertyConstrained = false;
                this.__cdIslineSelectionPropertyBounded = false;
                this.__cdIsclientBackgroundPropertyConstrained = false;
                this.__cdIsclientBackgroundPropertyBounded = false;
                this.__cdIsclientForegroundPropertyConstrained = false;
                this.__cdIsclientForegroundPropertyBounded = false;
                this.semaphore = null;
                this.__cdIszeroSuppressPropertyConstrained = false;
                this.__cdIszeroSuppressPropertyBounded = false;
                this.__cdIslockModePropertyConstrained = false;
                this.__cdIslockModePropertyBounded = false;
                this.lockMode = 0;
                this.wheelScrollingEnabled = false;
                this.__cdIswheelScrollingEnabledPropertyConstrained = false;
                this.__cdIswheelScrollingEnabledPropertyBounded = false;
                this.__cdIshiddenSupportPropertyConstrained = false;
                this.__cdIshiddenSupportPropertyBounded = false;
                this.__cdIscheckRoutineIDPropertyConstrained = false;
                this.__cdIscheckRoutineIDPropertyBounded = false;
                this.__cdIsretryOnErrorPropertyConstrained = false;
                this.__cdIsretryOnErrorPropertyBounded = false;
            } else if (((typeof arg0 === 'number') || arg0 === null) && ((typeof arg1 === 'number') || arg1 === null) && ((typeof arg2 === 'number') || arg2 === null) && ((typeof arg3 === 'number') || arg3 === null) && ((typeof arg4 === 'number') || arg4 === null) && ((typeof arg5 === 'number') || arg5 === null) && arg6 === undefined && arg7 === undefined) {
                let __args = arguments;
                super();
                if (this.__cdEnableEventDispatch === undefined) { this.__cdEnableEventDispatch = false; } 
                if (this.sequentialNumber === undefined) { this.sequentialNumber = 0; } 
                if (this.panelID === undefined) { this.panelID = null; } 
                if (this.itemID === undefined) { this.itemID = null; } 
                if (this.tag === undefined) { this.tag = null; } 
                if (this.initialized === undefined) { this.initialized = false; } 
                if (this.textValueChangedActionCode === undefined) { this.textValueChangedActionCode = null; } 
                if (this.rowsStateChangedActionCode === undefined) { this.rowsStateChangedActionCode = null; } 
                if (this.itemStateChangedActionCode === undefined) { this.itemStateChangedActionCode = null; } 
                if (this.pushedActionCode === undefined) { this.pushedActionCode = null; } 
                if (this.initSpreadData === undefined) { this.initSpreadData = null; } 
                if (this.valueOnOpen === undefined) { this.valueOnOpen = null; } 
                if (this.editvalueOnOpen === undefined) { this.editvalueOnOpen = null; } 
                if (this.statusOnOpen === undefined) { this.statusOnOpen = 0; } 
                if (this.inputAreaOpened === undefined) { this.inputAreaOpened = false; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
                if (this.columnInfoBackgroundArray === undefined) { this.columnInfoBackgroundArray = null; } 
                if (this.columnInfoForegroundArray === undefined) { this.columnInfoForegroundArray = null; } 
                if (this.commaEditAllowedArray === undefined) { this.commaEditAllowedArray = null; } 
                if (this.decimalpointAllowedArray === undefined) { this.decimalpointAllowedArray = null; } 
                if (this.enableInputNegativeValueArray === undefined) { this.enableInputNegativeValueArray = null; } 
                if (this.itemArrays === undefined) { this.itemArrays = null; } 
                if (this.headerColumnInfoBackgroundArray === undefined) { this.headerColumnInfoBackgroundArray = null; } 
                if (this.headerColumnInfoForegroundArray === undefined) { this.headerColumnInfoForegroundArray = null; } 
                if (this.envBackgroundEnabled === undefined) { this.envBackgroundEnabled = false; } 
                if (this.envFontEnabled === undefined) { this.envFontEnabled = false; } 
                if (this.defaultProperties === undefined) { this.defaultProperties = null; } 
                if (this.errorCode === undefined) { this.errorCode = null; } 
                if (this.inputAreaKeyListener === undefined) { this.inputAreaKeyListener = null; } 
                if (this.__rowSelected === undefined) { this.__rowSelected = false; } 
                if (this.inputAreaOpenedPosition === undefined) { this.inputAreaOpenedPosition = null; } 
                if (this.actionCodeInfo === undefined) { this.actionCodeInfo = null; } 
                if (this.keyAdapter === undefined) { this.keyAdapter = null; } 
                if (this.mouseAdapter === undefined) { this.mouseAdapter = null; } 
                if (this.lineSelection === undefined) { this.lineSelection = 0; } 
                if (this.recordInfo === undefined) { this.recordInfo = null; } 
                if (this.clientBackground === undefined) { this.clientBackground = null; } 
                if (this.clientForeground === undefined) { this.clientForeground = null; } 
                if (this.zeroSuppress === undefined) { this.zeroSuppress = 0; } 
                if (this.selectedRowPositions === undefined) { this.selectedRowPositions = null; } 
                if (this.deselectedRowPositions === undefined) { this.deselectedRowPositions = null; } 
                if (this.rowSelectingTrigger === undefined) { this.rowSelectingTrigger = null; } 
                if (this.hiddenSupport === undefined) { this.hiddenSupport = 0; } 
                if (this.checkRoutineID === undefined) { this.checkRoutineID = null; } 
                if (this.retryOnError === undefined) { this.retryOnError = false; } 
                if (this.lockedByGUI === undefined) { this.lockedByGUI = false; } 
                if (this.lockedByCJF === undefined) { this.lockedByCJF = false; } 
                if (this.refocusable === undefined) { this.refocusable = false; } 
                if (this.needSetErrorAttributes === undefined) { this.needSetErrorAttributes = false; } 
                if (this.errorAttributesBackup === undefined) { this.errorAttributesBackup = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyConstrained === undefined) { this.__cdIsheaderAndColumnPropertyPropertyConstrained = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyBounded === undefined) { this.__cdIsheaderAndColumnPropertyPropertyBounded = false; } 
                if (this.initCursorRow === undefined) { this.initCursorRow = 0; } 
                if (this.initCursorCol === undefined) { this.initCursorCol = 0; } 
                if (this.__cdIsitemIDPropertyConstrained === undefined) { this.__cdIsitemIDPropertyConstrained = false; } 
                if (this.__cdIsitemIDPropertyBounded === undefined) { this.__cdIsitemIDPropertyBounded = false; } 
                if (this.__cdIstagPropertyConstrained === undefined) { this.__cdIstagPropertyConstrained = false; } 
                if (this.__cdIstagPropertyBounded === undefined) { this.__cdIstagPropertyBounded = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyConstrained === undefined) { this.__cdIsenvBackgroundEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyBounded === undefined) { this.__cdIsenvBackgroundEnabledPropertyBounded = false; } 
                if (this.__cdIsenvFontEnabledPropertyConstrained === undefined) { this.__cdIsenvFontEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvFontEnabledPropertyBounded === undefined) { this.__cdIsenvFontEnabledPropertyBounded = false; } 
                if (this.__cdIsselectionVisiblePropertyConstrained === undefined) { this.__cdIsselectionVisiblePropertyConstrained = false; } 
                if (this.__cdIsselectionVisiblePropertyBounded === undefined) { this.__cdIsselectionVisiblePropertyBounded = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyConstrained === undefined) { this.__cdIstextValueChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyBounded === undefined) { this.__cdIstextValueChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsitemStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyBounded === undefined) { this.__cdIsitemStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsrowsStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyBounded === undefined) { this.__cdIsrowsStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIspushedActionCodePropertyConstrained === undefined) { this.__cdIspushedActionCodePropertyConstrained = false; } 
                if (this.__cdIspushedActionCodePropertyBounded === undefined) { this.__cdIspushedActionCodePropertyBounded = false; } 
                if (this.closeMode === undefined) { this.closeMode = false; } 
                if (this.JCFActionListenerList === undefined) { this.JCFActionListenerList = null; } 
                if (this.__cdIsextendmodeBackgroundPropertyConstrained === undefined) { this.__cdIsextendmodeBackgroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeBackgroundPropertyBounded === undefined) { this.__cdIsextendmodeBackgroundPropertyBounded = false; } 
                if (this.__cdIsextendmodeForegroundPropertyConstrained === undefined) { this.__cdIsextendmodeForegroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeForegroundPropertyBounded === undefined) { this.__cdIsextendmodeForegroundPropertyBounded = false; } 
                if (this.__cdIsselectionBackgroundPropertyConstrained === undefined) { this.__cdIsselectionBackgroundPropertyConstrained = false; } 
                if (this.__cdIsselectionBackgroundPropertyBounded === undefined) { this.__cdIsselectionBackgroundPropertyBounded = false; } 
                if (this.__cdIsselectionForegroundPropertyConstrained === undefined) { this.__cdIsselectionForegroundPropertyConstrained = false; } 
                if (this.__cdIsselectionForegroundPropertyBounded === undefined) { this.__cdIsselectionForegroundPropertyBounded = false; } 
                if (this.__cdIslineSelectionPropertyConstrained === undefined) { this.__cdIslineSelectionPropertyConstrained = false; } 
                if (this.__cdIslineSelectionPropertyBounded === undefined) { this.__cdIslineSelectionPropertyBounded = false; } 
                if (this.__cdIsclientBackgroundPropertyConstrained === undefined) { this.__cdIsclientBackgroundPropertyConstrained = false; } 
                if (this.__cdIsclientBackgroundPropertyBounded === undefined) { this.__cdIsclientBackgroundPropertyBounded = false; } 
                if (this.__cdIsclientForegroundPropertyConstrained === undefined) { this.__cdIsclientForegroundPropertyConstrained = false; } 
                if (this.__cdIsclientForegroundPropertyBounded === undefined) { this.__cdIsclientForegroundPropertyBounded = false; } 
                if (this.semaphore === undefined) { this.semaphore = null; } 
                if (this.__cdIszeroSuppressPropertyConstrained === undefined) { this.__cdIszeroSuppressPropertyConstrained = false; } 
                if (this.__cdIszeroSuppressPropertyBounded === undefined) { this.__cdIszeroSuppressPropertyBounded = false; } 
                if (this.__cdIslockModePropertyConstrained === undefined) { this.__cdIslockModePropertyConstrained = false; } 
                if (this.__cdIslockModePropertyBounded === undefined) { this.__cdIslockModePropertyBounded = false; } 
                if (this.lockMode === undefined) { this.lockMode = 0; } 
                if (this.wheelScrollingEnabled === undefined) { this.wheelScrollingEnabled = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyConstrained === undefined) { this.__cdIswheelScrollingEnabledPropertyConstrained = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyBounded === undefined) { this.__cdIswheelScrollingEnabledPropertyBounded = false; } 
                if (this.__cdIshiddenSupportPropertyConstrained === undefined) { this.__cdIshiddenSupportPropertyConstrained = false; } 
                if (this.__cdIshiddenSupportPropertyBounded === undefined) { this.__cdIshiddenSupportPropertyBounded = false; } 
                if (this.__cdIscheckRoutineIDPropertyConstrained === undefined) { this.__cdIscheckRoutineIDPropertyConstrained = false; } 
                if (this.__cdIscheckRoutineIDPropertyBounded === undefined) { this.__cdIscheckRoutineIDPropertyBounded = false; } 
                if (this.__cdIsretryOnErrorPropertyConstrained === undefined) { this.__cdIsretryOnErrorPropertyConstrained = false; } 
                if (this.__cdIsretryOnErrorPropertyBounded === undefined) { this.__cdIsretryOnErrorPropertyBounded = false; } 
                this.__cdEnableEventDispatch = false;
                this.sequentialNumber = 0;
                this.panelID = "";
                this.itemID = "";
                this.tag = "";
                this.initialized = false;
                this.textValueChangedActionCode = "";
                this.rowsStateChangedActionCode = "";
                this.itemStateChangedActionCode = "";
                this.pushedActionCode = "";
                this.initSpreadData = null;
                this.valueOnOpen = "";
                this.editvalueOnOpen = "";
                this.statusOnOpen = 0;
                this.inputAreaOpened = false;
                this.commaEditAllowedArray = [];
                this.decimalpointAllowedArray = [];
                this.enableInputNegativeValueArray = [];
                this.itemArrays = <any> (function(dims) { let allocate = function(dims) { if (dims.length === 0) { return null; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([0, 0]);
                this.envBackgroundEnabled = false;
                this.envFontEnabled = false;
                this.defaultProperties = null;
                this.errorCode = "ERROR_NOTHING";
                this.inputAreaKeyListener = new JCFSpread.InputAreaKeyListener(this);
                this.__rowSelected = false;
                this.inputAreaOpenedPosition = null;
                this.actionCodeInfo = null;
                this.keyAdapter = null;
                this.mouseAdapter = null;
                this.lineSelection = 0;
                this.recordInfo = null;
                this.zeroSuppress = 0;
                this.selectedRowPositions = null;
                this.deselectedRowPositions = null;
                this.hiddenSupport = 1;
                this.checkRoutineID = "";
                this.retryOnError = false;
                this.lockedByGUI = false;
                this.lockedByCJF = false;
                this.refocusable = true;
                this.needSetErrorAttributes = false;
                this.errorAttributesBackup = false;
                this.__cdIsheaderAndColumnPropertyPropertyConstrained = false;
                this.__cdIsheaderAndColumnPropertyPropertyBounded = true;
                this.__cdIsitemIDPropertyConstrained = false;
                this.__cdIsitemIDPropertyBounded = false;
                this.__cdIstagPropertyConstrained = false;
                this.__cdIstagPropertyBounded = false;
                this.__cdIsenvBackgroundEnabledPropertyConstrained = false;
                this.__cdIsenvBackgroundEnabledPropertyBounded = false;
                this.__cdIsenvFontEnabledPropertyConstrained = false;
                this.__cdIsenvFontEnabledPropertyBounded = false;
                this.__cdIsselectionVisiblePropertyConstrained = false;
                this.__cdIsselectionVisiblePropertyBounded = false;
                this.__cdIstextValueChangedActionCodePropertyConstrained = false;
                this.__cdIstextValueChangedActionCodePropertyBounded = false;
                this.__cdIsitemStateChangedActionCodePropertyConstrained = false;
                this.__cdIsitemStateChangedActionCodePropertyBounded = false;
                this.__cdIsrowsStateChangedActionCodePropertyConstrained = false;
                this.__cdIsrowsStateChangedActionCodePropertyBounded = false;
                this.__cdIspushedActionCodePropertyConstrained = false;
                this.__cdIspushedActionCodePropertyBounded = false;
                this.closeMode = false;
                this.__cdIsextendmodeBackgroundPropertyConstrained = false;
                this.__cdIsextendmodeBackgroundPropertyBounded = false;
                this.__cdIsextendmodeForegroundPropertyConstrained = false;
                this.__cdIsextendmodeForegroundPropertyBounded = false;
                this.__cdIsselectionBackgroundPropertyConstrained = false;
                this.__cdIsselectionBackgroundPropertyBounded = false;
                this.__cdIsselectionForegroundPropertyConstrained = false;
                this.__cdIsselectionForegroundPropertyBounded = false;
                this.__cdIslineSelectionPropertyConstrained = false;
                this.__cdIslineSelectionPropertyBounded = false;
                this.__cdIsclientBackgroundPropertyConstrained = false;
                this.__cdIsclientBackgroundPropertyBounded = false;
                this.__cdIsclientForegroundPropertyConstrained = false;
                this.__cdIsclientForegroundPropertyBounded = false;
                this.semaphore = null;
                this.__cdIszeroSuppressPropertyConstrained = false;
                this.__cdIszeroSuppressPropertyBounded = false;
                this.__cdIslockModePropertyConstrained = false;
                this.__cdIslockModePropertyBounded = false;
                this.lockMode = 0;
                this.wheelScrollingEnabled = false;
                this.__cdIswheelScrollingEnabledPropertyConstrained = false;
                this.__cdIswheelScrollingEnabledPropertyBounded = false;
                this.__cdIshiddenSupportPropertyConstrained = false;
                this.__cdIshiddenSupportPropertyBounded = false;
                this.__cdIscheckRoutineIDPropertyConstrained = false;
                this.__cdIscheckRoutineIDPropertyBounded = false;
                this.__cdIsretryOnErrorPropertyConstrained = false;
                this.__cdIsretryOnErrorPropertyBounded = false;
            } else if (((typeof arg0 === 'number') || arg0 === null) && ((typeof arg1 === 'number') || arg1 === null) && ((typeof arg2 === 'number') || arg2 === null) && ((typeof arg3 === 'number') || arg3 === null) && arg4 === undefined && arg5 === undefined && arg6 === undefined && arg7 === undefined) {
                let __args = arguments;
                super();
                if (this.__cdEnableEventDispatch === undefined) { this.__cdEnableEventDispatch = false; } 
                if (this.sequentialNumber === undefined) { this.sequentialNumber = 0; } 
                if (this.panelID === undefined) { this.panelID = null; } 
                if (this.itemID === undefined) { this.itemID = null; } 
                if (this.tag === undefined) { this.tag = null; } 
                if (this.initialized === undefined) { this.initialized = false; } 
                if (this.textValueChangedActionCode === undefined) { this.textValueChangedActionCode = null; } 
                if (this.rowsStateChangedActionCode === undefined) { this.rowsStateChangedActionCode = null; } 
                if (this.itemStateChangedActionCode === undefined) { this.itemStateChangedActionCode = null; } 
                if (this.pushedActionCode === undefined) { this.pushedActionCode = null; } 
                if (this.initSpreadData === undefined) { this.initSpreadData = null; } 
                if (this.valueOnOpen === undefined) { this.valueOnOpen = null; } 
                if (this.editvalueOnOpen === undefined) { this.editvalueOnOpen = null; } 
                if (this.statusOnOpen === undefined) { this.statusOnOpen = 0; } 
                if (this.inputAreaOpened === undefined) { this.inputAreaOpened = false; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
                if (this.columnInfoBackgroundArray === undefined) { this.columnInfoBackgroundArray = null; } 
                if (this.columnInfoForegroundArray === undefined) { this.columnInfoForegroundArray = null; } 
                if (this.commaEditAllowedArray === undefined) { this.commaEditAllowedArray = null; } 
                if (this.decimalpointAllowedArray === undefined) { this.decimalpointAllowedArray = null; } 
                if (this.enableInputNegativeValueArray === undefined) { this.enableInputNegativeValueArray = null; } 
                if (this.itemArrays === undefined) { this.itemArrays = null; } 
                if (this.headerColumnInfoBackgroundArray === undefined) { this.headerColumnInfoBackgroundArray = null; } 
                if (this.headerColumnInfoForegroundArray === undefined) { this.headerColumnInfoForegroundArray = null; } 
                if (this.envBackgroundEnabled === undefined) { this.envBackgroundEnabled = false; } 
                if (this.envFontEnabled === undefined) { this.envFontEnabled = false; } 
                if (this.defaultProperties === undefined) { this.defaultProperties = null; } 
                if (this.errorCode === undefined) { this.errorCode = null; } 
                if (this.inputAreaKeyListener === undefined) { this.inputAreaKeyListener = null; } 
                if (this.__rowSelected === undefined) { this.__rowSelected = false; } 
                if (this.inputAreaOpenedPosition === undefined) { this.inputAreaOpenedPosition = null; } 
                if (this.actionCodeInfo === undefined) { this.actionCodeInfo = null; } 
                if (this.keyAdapter === undefined) { this.keyAdapter = null; } 
                if (this.mouseAdapter === undefined) { this.mouseAdapter = null; } 
                if (this.lineSelection === undefined) { this.lineSelection = 0; } 
                if (this.recordInfo === undefined) { this.recordInfo = null; } 
                if (this.clientBackground === undefined) { this.clientBackground = null; } 
                if (this.clientForeground === undefined) { this.clientForeground = null; } 
                if (this.zeroSuppress === undefined) { this.zeroSuppress = 0; } 
                if (this.selectedRowPositions === undefined) { this.selectedRowPositions = null; } 
                if (this.deselectedRowPositions === undefined) { this.deselectedRowPositions = null; } 
                if (this.rowSelectingTrigger === undefined) { this.rowSelectingTrigger = null; } 
                if (this.hiddenSupport === undefined) { this.hiddenSupport = 0; } 
                if (this.checkRoutineID === undefined) { this.checkRoutineID = null; } 
                if (this.retryOnError === undefined) { this.retryOnError = false; } 
                if (this.lockedByGUI === undefined) { this.lockedByGUI = false; } 
                if (this.lockedByCJF === undefined) { this.lockedByCJF = false; } 
                if (this.refocusable === undefined) { this.refocusable = false; } 
                if (this.needSetErrorAttributes === undefined) { this.needSetErrorAttributes = false; } 
                if (this.errorAttributesBackup === undefined) { this.errorAttributesBackup = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyConstrained === undefined) { this.__cdIsheaderAndColumnPropertyPropertyConstrained = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyBounded === undefined) { this.__cdIsheaderAndColumnPropertyPropertyBounded = false; } 
                if (this.initCursorRow === undefined) { this.initCursorRow = 0; } 
                if (this.initCursorCol === undefined) { this.initCursorCol = 0; } 
                if (this.__cdIsitemIDPropertyConstrained === undefined) { this.__cdIsitemIDPropertyConstrained = false; } 
                if (this.__cdIsitemIDPropertyBounded === undefined) { this.__cdIsitemIDPropertyBounded = false; } 
                if (this.__cdIstagPropertyConstrained === undefined) { this.__cdIstagPropertyConstrained = false; } 
                if (this.__cdIstagPropertyBounded === undefined) { this.__cdIstagPropertyBounded = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyConstrained === undefined) { this.__cdIsenvBackgroundEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyBounded === undefined) { this.__cdIsenvBackgroundEnabledPropertyBounded = false; } 
                if (this.__cdIsenvFontEnabledPropertyConstrained === undefined) { this.__cdIsenvFontEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvFontEnabledPropertyBounded === undefined) { this.__cdIsenvFontEnabledPropertyBounded = false; } 
                if (this.__cdIsselectionVisiblePropertyConstrained === undefined) { this.__cdIsselectionVisiblePropertyConstrained = false; } 
                if (this.__cdIsselectionVisiblePropertyBounded === undefined) { this.__cdIsselectionVisiblePropertyBounded = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyConstrained === undefined) { this.__cdIstextValueChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyBounded === undefined) { this.__cdIstextValueChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsitemStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyBounded === undefined) { this.__cdIsitemStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsrowsStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyBounded === undefined) { this.__cdIsrowsStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIspushedActionCodePropertyConstrained === undefined) { this.__cdIspushedActionCodePropertyConstrained = false; } 
                if (this.__cdIspushedActionCodePropertyBounded === undefined) { this.__cdIspushedActionCodePropertyBounded = false; } 
                if (this.closeMode === undefined) { this.closeMode = false; } 
                if (this.JCFActionListenerList === undefined) { this.JCFActionListenerList = null; } 
                if (this.__cdIsextendmodeBackgroundPropertyConstrained === undefined) { this.__cdIsextendmodeBackgroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeBackgroundPropertyBounded === undefined) { this.__cdIsextendmodeBackgroundPropertyBounded = false; } 
                if (this.__cdIsextendmodeForegroundPropertyConstrained === undefined) { this.__cdIsextendmodeForegroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeForegroundPropertyBounded === undefined) { this.__cdIsextendmodeForegroundPropertyBounded = false; } 
                if (this.__cdIsselectionBackgroundPropertyConstrained === undefined) { this.__cdIsselectionBackgroundPropertyConstrained = false; } 
                if (this.__cdIsselectionBackgroundPropertyBounded === undefined) { this.__cdIsselectionBackgroundPropertyBounded = false; } 
                if (this.__cdIsselectionForegroundPropertyConstrained === undefined) { this.__cdIsselectionForegroundPropertyConstrained = false; } 
                if (this.__cdIsselectionForegroundPropertyBounded === undefined) { this.__cdIsselectionForegroundPropertyBounded = false; } 
                if (this.__cdIslineSelectionPropertyConstrained === undefined) { this.__cdIslineSelectionPropertyConstrained = false; } 
                if (this.__cdIslineSelectionPropertyBounded === undefined) { this.__cdIslineSelectionPropertyBounded = false; } 
                if (this.__cdIsclientBackgroundPropertyConstrained === undefined) { this.__cdIsclientBackgroundPropertyConstrained = false; } 
                if (this.__cdIsclientBackgroundPropertyBounded === undefined) { this.__cdIsclientBackgroundPropertyBounded = false; } 
                if (this.__cdIsclientForegroundPropertyConstrained === undefined) { this.__cdIsclientForegroundPropertyConstrained = false; } 
                if (this.__cdIsclientForegroundPropertyBounded === undefined) { this.__cdIsclientForegroundPropertyBounded = false; } 
                if (this.semaphore === undefined) { this.semaphore = null; } 
                if (this.__cdIszeroSuppressPropertyConstrained === undefined) { this.__cdIszeroSuppressPropertyConstrained = false; } 
                if (this.__cdIszeroSuppressPropertyBounded === undefined) { this.__cdIszeroSuppressPropertyBounded = false; } 
                if (this.__cdIslockModePropertyConstrained === undefined) { this.__cdIslockModePropertyConstrained = false; } 
                if (this.__cdIslockModePropertyBounded === undefined) { this.__cdIslockModePropertyBounded = false; } 
                if (this.lockMode === undefined) { this.lockMode = 0; } 
                if (this.wheelScrollingEnabled === undefined) { this.wheelScrollingEnabled = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyConstrained === undefined) { this.__cdIswheelScrollingEnabledPropertyConstrained = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyBounded === undefined) { this.__cdIswheelScrollingEnabledPropertyBounded = false; } 
                if (this.__cdIshiddenSupportPropertyConstrained === undefined) { this.__cdIshiddenSupportPropertyConstrained = false; } 
                if (this.__cdIshiddenSupportPropertyBounded === undefined) { this.__cdIshiddenSupportPropertyBounded = false; } 
                if (this.__cdIscheckRoutineIDPropertyConstrained === undefined) { this.__cdIscheckRoutineIDPropertyConstrained = false; } 
                if (this.__cdIscheckRoutineIDPropertyBounded === undefined) { this.__cdIscheckRoutineIDPropertyBounded = false; } 
                if (this.__cdIsretryOnErrorPropertyConstrained === undefined) { this.__cdIsretryOnErrorPropertyConstrained = false; } 
                if (this.__cdIsretryOnErrorPropertyBounded === undefined) { this.__cdIsretryOnErrorPropertyBounded = false; } 
                this.__cdEnableEventDispatch = false;
                this.sequentialNumber = 0;
                this.panelID = "";
                this.itemID = "";
                this.tag = "";
                this.initialized = false;
                this.textValueChangedActionCode = "";
                this.rowsStateChangedActionCode = "";
                this.itemStateChangedActionCode = "";
                this.pushedActionCode = "";
                this.initSpreadData = null;
                this.valueOnOpen = "";
                this.editvalueOnOpen = "";
                this.statusOnOpen = 0;
                this.inputAreaOpened = false;
                this.commaEditAllowedArray = [];
                this.decimalpointAllowedArray = [];
                this.enableInputNegativeValueArray = [];
                this.itemArrays = <any> (function(dims) { let allocate = function(dims) { if (dims.length === 0) { return null; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([0, 0]);
                this.envBackgroundEnabled = false;
                this.envFontEnabled = false;
                this.defaultProperties = null;
                this.errorCode = "ERROR_NOTHING";
                this.inputAreaKeyListener = new JCFSpread.InputAreaKeyListener(this);
                this.__rowSelected = false;
                this.inputAreaOpenedPosition = null;
                this.actionCodeInfo = null;
                this.keyAdapter = null;
                this.mouseAdapter = null;
                this.lineSelection = 0;
                this.zeroSuppress = 0;
                this.selectedRowPositions = null;
                this.deselectedRowPositions = null;
                this.hiddenSupport = 1;
                this.checkRoutineID = "";
                this.retryOnError = false;
                this.lockedByGUI = false;
                this.lockedByCJF = false;
                this.refocusable = true;
                this.needSetErrorAttributes = false;
                this.errorAttributesBackup = false;
                this.__cdIsheaderAndColumnPropertyPropertyConstrained = false;
                this.__cdIsheaderAndColumnPropertyPropertyBounded = true;
                this.__cdIsitemIDPropertyConstrained = false;
                this.__cdIsitemIDPropertyBounded = false;
                this.__cdIstagPropertyConstrained = false;
                this.__cdIstagPropertyBounded = false;
                this.__cdIsenvBackgroundEnabledPropertyConstrained = false;
                this.__cdIsenvBackgroundEnabledPropertyBounded = false;
                this.__cdIsenvFontEnabledPropertyConstrained = false;
                this.__cdIsenvFontEnabledPropertyBounded = false;
                this.__cdIsselectionVisiblePropertyConstrained = false;
                this.__cdIsselectionVisiblePropertyBounded = false;
                this.__cdIstextValueChangedActionCodePropertyConstrained = false;
                this.__cdIstextValueChangedActionCodePropertyBounded = false;
                this.__cdIsitemStateChangedActionCodePropertyConstrained = false;
                this.__cdIsitemStateChangedActionCodePropertyBounded = false;
                this.__cdIsrowsStateChangedActionCodePropertyConstrained = false;
                this.__cdIsrowsStateChangedActionCodePropertyBounded = false;
                this.__cdIspushedActionCodePropertyConstrained = false;
                this.__cdIspushedActionCodePropertyBounded = false;
                this.closeMode = false;
                this.__cdIsextendmodeBackgroundPropertyConstrained = false;
                this.__cdIsextendmodeBackgroundPropertyBounded = false;
                this.__cdIsextendmodeForegroundPropertyConstrained = false;
                this.__cdIsextendmodeForegroundPropertyBounded = false;
                this.__cdIsselectionBackgroundPropertyConstrained = false;
                this.__cdIsselectionBackgroundPropertyBounded = false;
                this.__cdIsselectionForegroundPropertyConstrained = false;
                this.__cdIsselectionForegroundPropertyBounded = false;
                this.__cdIslineSelectionPropertyConstrained = false;
                this.__cdIslineSelectionPropertyBounded = false;
                this.__cdIsclientBackgroundPropertyConstrained = false;
                this.__cdIsclientBackgroundPropertyBounded = false;
                this.__cdIsclientForegroundPropertyConstrained = false;
                this.__cdIsclientForegroundPropertyBounded = false;
                this.semaphore = null;
                this.__cdIszeroSuppressPropertyConstrained = false;
                this.__cdIszeroSuppressPropertyBounded = false;
                this.__cdIslockModePropertyConstrained = false;
                this.__cdIslockModePropertyBounded = false;
                this.lockMode = 0;
                this.wheelScrollingEnabled = false;
                this.__cdIswheelScrollingEnabledPropertyConstrained = false;
                this.__cdIswheelScrollingEnabledPropertyBounded = false;
                this.__cdIshiddenSupportPropertyConstrained = false;
                this.__cdIshiddenSupportPropertyBounded = false;
                this.__cdIscheckRoutineIDPropertyConstrained = false;
                this.__cdIscheckRoutineIDPropertyBounded = false;
                this.__cdIsretryOnErrorPropertyConstrained = false;
                this.__cdIsretryOnErrorPropertyBounded = false;
            } else if (((arg0 != null && arg0 instanceof <any>lib.com.fujitsu.caa.CJCell) || arg0 === null) && ((arg1 != null && arg1 instanceof <any>lib.com.fujitsu.caa.CJCell) || arg1 === null) && arg2 === undefined && arg3 === undefined && arg4 === undefined && arg5 === undefined && arg6 === undefined && arg7 === undefined) {
                let __args = arguments;
                super();
                if (this.__cdEnableEventDispatch === undefined) { this.__cdEnableEventDispatch = false; } 
                if (this.sequentialNumber === undefined) { this.sequentialNumber = 0; } 
                if (this.panelID === undefined) { this.panelID = null; } 
                if (this.itemID === undefined) { this.itemID = null; } 
                if (this.tag === undefined) { this.tag = null; } 
                if (this.initialized === undefined) { this.initialized = false; } 
                if (this.textValueChangedActionCode === undefined) { this.textValueChangedActionCode = null; } 
                if (this.rowsStateChangedActionCode === undefined) { this.rowsStateChangedActionCode = null; } 
                if (this.itemStateChangedActionCode === undefined) { this.itemStateChangedActionCode = null; } 
                if (this.pushedActionCode === undefined) { this.pushedActionCode = null; } 
                if (this.initSpreadData === undefined) { this.initSpreadData = null; } 
                if (this.valueOnOpen === undefined) { this.valueOnOpen = null; } 
                if (this.editvalueOnOpen === undefined) { this.editvalueOnOpen = null; } 
                if (this.statusOnOpen === undefined) { this.statusOnOpen = 0; } 
                if (this.inputAreaOpened === undefined) { this.inputAreaOpened = false; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
                if (this.columnInfoBackgroundArray === undefined) { this.columnInfoBackgroundArray = null; } 
                if (this.columnInfoForegroundArray === undefined) { this.columnInfoForegroundArray = null; } 
                if (this.commaEditAllowedArray === undefined) { this.commaEditAllowedArray = null; } 
                if (this.decimalpointAllowedArray === undefined) { this.decimalpointAllowedArray = null; } 
                if (this.enableInputNegativeValueArray === undefined) { this.enableInputNegativeValueArray = null; } 
                if (this.itemArrays === undefined) { this.itemArrays = null; } 
                if (this.headerColumnInfoBackgroundArray === undefined) { this.headerColumnInfoBackgroundArray = null; } 
                if (this.headerColumnInfoForegroundArray === undefined) { this.headerColumnInfoForegroundArray = null; } 
                if (this.envBackgroundEnabled === undefined) { this.envBackgroundEnabled = false; } 
                if (this.envFontEnabled === undefined) { this.envFontEnabled = false; } 
                if (this.defaultProperties === undefined) { this.defaultProperties = null; } 
                if (this.errorCode === undefined) { this.errorCode = null; } 
                if (this.inputAreaKeyListener === undefined) { this.inputAreaKeyListener = null; } 
                if (this.__rowSelected === undefined) { this.__rowSelected = false; } 
                if (this.inputAreaOpenedPosition === undefined) { this.inputAreaOpenedPosition = null; } 
                if (this.actionCodeInfo === undefined) { this.actionCodeInfo = null; } 
                if (this.keyAdapter === undefined) { this.keyAdapter = null; } 
                if (this.mouseAdapter === undefined) { this.mouseAdapter = null; } 
                if (this.lineSelection === undefined) { this.lineSelection = 0; } 
                if (this.recordInfo === undefined) { this.recordInfo = null; } 
                if (this.clientBackground === undefined) { this.clientBackground = null; } 
                if (this.clientForeground === undefined) { this.clientForeground = null; } 
                if (this.zeroSuppress === undefined) { this.zeroSuppress = 0; } 
                if (this.selectedRowPositions === undefined) { this.selectedRowPositions = null; } 
                if (this.deselectedRowPositions === undefined) { this.deselectedRowPositions = null; } 
                if (this.rowSelectingTrigger === undefined) { this.rowSelectingTrigger = null; } 
                if (this.hiddenSupport === undefined) { this.hiddenSupport = 0; } 
                if (this.checkRoutineID === undefined) { this.checkRoutineID = null; } 
                if (this.retryOnError === undefined) { this.retryOnError = false; } 
                if (this.lockedByGUI === undefined) { this.lockedByGUI = false; } 
                if (this.lockedByCJF === undefined) { this.lockedByCJF = false; } 
                if (this.refocusable === undefined) { this.refocusable = false; } 
                if (this.needSetErrorAttributes === undefined) { this.needSetErrorAttributes = false; } 
                if (this.errorAttributesBackup === undefined) { this.errorAttributesBackup = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyConstrained === undefined) { this.__cdIsheaderAndColumnPropertyPropertyConstrained = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyBounded === undefined) { this.__cdIsheaderAndColumnPropertyPropertyBounded = false; } 
                if (this.initCursorRow === undefined) { this.initCursorRow = 0; } 
                if (this.initCursorCol === undefined) { this.initCursorCol = 0; } 
                if (this.__cdIsitemIDPropertyConstrained === undefined) { this.__cdIsitemIDPropertyConstrained = false; } 
                if (this.__cdIsitemIDPropertyBounded === undefined) { this.__cdIsitemIDPropertyBounded = false; } 
                if (this.__cdIstagPropertyConstrained === undefined) { this.__cdIstagPropertyConstrained = false; } 
                if (this.__cdIstagPropertyBounded === undefined) { this.__cdIstagPropertyBounded = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyConstrained === undefined) { this.__cdIsenvBackgroundEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyBounded === undefined) { this.__cdIsenvBackgroundEnabledPropertyBounded = false; } 
                if (this.__cdIsenvFontEnabledPropertyConstrained === undefined) { this.__cdIsenvFontEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvFontEnabledPropertyBounded === undefined) { this.__cdIsenvFontEnabledPropertyBounded = false; } 
                if (this.__cdIsselectionVisiblePropertyConstrained === undefined) { this.__cdIsselectionVisiblePropertyConstrained = false; } 
                if (this.__cdIsselectionVisiblePropertyBounded === undefined) { this.__cdIsselectionVisiblePropertyBounded = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyConstrained === undefined) { this.__cdIstextValueChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyBounded === undefined) { this.__cdIstextValueChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsitemStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyBounded === undefined) { this.__cdIsitemStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsrowsStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyBounded === undefined) { this.__cdIsrowsStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIspushedActionCodePropertyConstrained === undefined) { this.__cdIspushedActionCodePropertyConstrained = false; } 
                if (this.__cdIspushedActionCodePropertyBounded === undefined) { this.__cdIspushedActionCodePropertyBounded = false; } 
                if (this.closeMode === undefined) { this.closeMode = false; } 
                if (this.JCFActionListenerList === undefined) { this.JCFActionListenerList = null; } 
                if (this.__cdIsextendmodeBackgroundPropertyConstrained === undefined) { this.__cdIsextendmodeBackgroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeBackgroundPropertyBounded === undefined) { this.__cdIsextendmodeBackgroundPropertyBounded = false; } 
                if (this.__cdIsextendmodeForegroundPropertyConstrained === undefined) { this.__cdIsextendmodeForegroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeForegroundPropertyBounded === undefined) { this.__cdIsextendmodeForegroundPropertyBounded = false; } 
                if (this.__cdIsselectionBackgroundPropertyConstrained === undefined) { this.__cdIsselectionBackgroundPropertyConstrained = false; } 
                if (this.__cdIsselectionBackgroundPropertyBounded === undefined) { this.__cdIsselectionBackgroundPropertyBounded = false; } 
                if (this.__cdIsselectionForegroundPropertyConstrained === undefined) { this.__cdIsselectionForegroundPropertyConstrained = false; } 
                if (this.__cdIsselectionForegroundPropertyBounded === undefined) { this.__cdIsselectionForegroundPropertyBounded = false; } 
                if (this.__cdIslineSelectionPropertyConstrained === undefined) { this.__cdIslineSelectionPropertyConstrained = false; } 
                if (this.__cdIslineSelectionPropertyBounded === undefined) { this.__cdIslineSelectionPropertyBounded = false; } 
                if (this.__cdIsclientBackgroundPropertyConstrained === undefined) { this.__cdIsclientBackgroundPropertyConstrained = false; } 
                if (this.__cdIsclientBackgroundPropertyBounded === undefined) { this.__cdIsclientBackgroundPropertyBounded = false; } 
                if (this.__cdIsclientForegroundPropertyConstrained === undefined) { this.__cdIsclientForegroundPropertyConstrained = false; } 
                if (this.__cdIsclientForegroundPropertyBounded === undefined) { this.__cdIsclientForegroundPropertyBounded = false; } 
                if (this.semaphore === undefined) { this.semaphore = null; } 
                if (this.__cdIszeroSuppressPropertyConstrained === undefined) { this.__cdIszeroSuppressPropertyConstrained = false; } 
                if (this.__cdIszeroSuppressPropertyBounded === undefined) { this.__cdIszeroSuppressPropertyBounded = false; } 
                if (this.__cdIslockModePropertyConstrained === undefined) { this.__cdIslockModePropertyConstrained = false; } 
                if (this.__cdIslockModePropertyBounded === undefined) { this.__cdIslockModePropertyBounded = false; } 
                if (this.lockMode === undefined) { this.lockMode = 0; } 
                if (this.wheelScrollingEnabled === undefined) { this.wheelScrollingEnabled = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyConstrained === undefined) { this.__cdIswheelScrollingEnabledPropertyConstrained = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyBounded === undefined) { this.__cdIswheelScrollingEnabledPropertyBounded = false; } 
                if (this.__cdIshiddenSupportPropertyConstrained === undefined) { this.__cdIshiddenSupportPropertyConstrained = false; } 
                if (this.__cdIshiddenSupportPropertyBounded === undefined) { this.__cdIshiddenSupportPropertyBounded = false; } 
                if (this.__cdIscheckRoutineIDPropertyConstrained === undefined) { this.__cdIscheckRoutineIDPropertyConstrained = false; } 
                if (this.__cdIscheckRoutineIDPropertyBounded === undefined) { this.__cdIscheckRoutineIDPropertyBounded = false; } 
                if (this.__cdIsretryOnErrorPropertyConstrained === undefined) { this.__cdIsretryOnErrorPropertyConstrained = false; } 
                if (this.__cdIsretryOnErrorPropertyBounded === undefined) { this.__cdIsretryOnErrorPropertyBounded = false; } 
                this.__cdEnableEventDispatch = false;
                this.sequentialNumber = 0;
                this.panelID = "";
                this.itemID = "";
                this.tag = "";
                this.initialized = false;
                this.textValueChangedActionCode = "";
                this.rowsStateChangedActionCode = "";
                this.itemStateChangedActionCode = "";
                this.pushedActionCode = "";
                this.initSpreadData = null;
                this.valueOnOpen = "";
                this.editvalueOnOpen = "";
                this.statusOnOpen = 0;
                this.inputAreaOpened = false;
                this.commaEditAllowedArray = [];
                this.decimalpointAllowedArray = [];
                this.enableInputNegativeValueArray = [];
                this.itemArrays = <any> (function(dims) { let allocate = function(dims) { if (dims.length === 0) { return null; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([0, 0]);
                this.envBackgroundEnabled = false;
                this.envFontEnabled = false;
                this.defaultProperties = null;
                this.errorCode = "ERROR_NOTHING";
                this.inputAreaKeyListener = new JCFSpread.InputAreaKeyListener(this);
                this.__rowSelected = false;
                this.inputAreaOpenedPosition = null;
                this.actionCodeInfo = null;
                this.keyAdapter = null;
                this.mouseAdapter = null;
                this.lineSelection = 0;
                this.recordInfo = null;
                this.zeroSuppress = 0;
                this.selectedRowPositions = null;
                this.deselectedRowPositions = null;
                this.hiddenSupport = 1;
                this.checkRoutineID = "";
                this.retryOnError = false;
                this.lockedByGUI = false;
                this.lockedByCJF = false;
                this.refocusable = true;
                this.needSetErrorAttributes = false;
                this.errorAttributesBackup = false;
                this.__cdIsheaderAndColumnPropertyPropertyConstrained = false;
                this.__cdIsheaderAndColumnPropertyPropertyBounded = true;
                this.__cdIsitemIDPropertyConstrained = false;
                this.__cdIsitemIDPropertyBounded = false;
                this.__cdIstagPropertyConstrained = false;
                this.__cdIstagPropertyBounded = false;
                this.__cdIsenvBackgroundEnabledPropertyConstrained = false;
                this.__cdIsenvBackgroundEnabledPropertyBounded = false;
                this.__cdIsenvFontEnabledPropertyConstrained = false;
                this.__cdIsenvFontEnabledPropertyBounded = false;
                this.__cdIsselectionVisiblePropertyConstrained = false;
                this.__cdIsselectionVisiblePropertyBounded = false;
                this.__cdIstextValueChangedActionCodePropertyConstrained = false;
                this.__cdIstextValueChangedActionCodePropertyBounded = false;
                this.__cdIsitemStateChangedActionCodePropertyConstrained = false;
                this.__cdIsitemStateChangedActionCodePropertyBounded = false;
                this.__cdIsrowsStateChangedActionCodePropertyConstrained = false;
                this.__cdIsrowsStateChangedActionCodePropertyBounded = false;
                this.__cdIspushedActionCodePropertyConstrained = false;
                this.__cdIspushedActionCodePropertyBounded = false;
                this.closeMode = false;
                this.__cdIsextendmodeBackgroundPropertyConstrained = false;
                this.__cdIsextendmodeBackgroundPropertyBounded = false;
                this.__cdIsextendmodeForegroundPropertyConstrained = false;
                this.__cdIsextendmodeForegroundPropertyBounded = false;
                this.__cdIsselectionBackgroundPropertyConstrained = false;
                this.__cdIsselectionBackgroundPropertyBounded = false;
                this.__cdIsselectionForegroundPropertyConstrained = false;
                this.__cdIsselectionForegroundPropertyBounded = false;
                this.__cdIslineSelectionPropertyConstrained = false;
                this.__cdIslineSelectionPropertyBounded = false;
                this.__cdIsclientBackgroundPropertyConstrained = false;
                this.__cdIsclientBackgroundPropertyBounded = false;
                this.__cdIsclientForegroundPropertyConstrained = false;
                this.__cdIsclientForegroundPropertyBounded = false;
                this.semaphore = null;
                this.__cdIszeroSuppressPropertyConstrained = false;
                this.__cdIszeroSuppressPropertyBounded = false;
                this.__cdIslockModePropertyConstrained = false;
                this.__cdIslockModePropertyBounded = false;
                this.lockMode = 0;
                this.wheelScrollingEnabled = false;
                this.__cdIswheelScrollingEnabledPropertyConstrained = false;
                this.__cdIswheelScrollingEnabledPropertyBounded = false;
                this.__cdIshiddenSupportPropertyConstrained = false;
                this.__cdIshiddenSupportPropertyBounded = false;
                this.__cdIscheckRoutineIDPropertyConstrained = false;
                this.__cdIscheckRoutineIDPropertyBounded = false;
                this.__cdIsretryOnErrorPropertyConstrained = false;
                this.__cdIsretryOnErrorPropertyBounded = false;
            } else if (((typeof arg0 === 'number') || arg0 === null) && ((typeof arg1 === 'number') || arg1 === null) && arg2 === undefined && arg3 === undefined && arg4 === undefined && arg5 === undefined && arg6 === undefined && arg7 === undefined) {
                let __args = arguments;
                super();
                if (this.__cdEnableEventDispatch === undefined) { this.__cdEnableEventDispatch = false; } 
                if (this.sequentialNumber === undefined) { this.sequentialNumber = 0; } 
                if (this.panelID === undefined) { this.panelID = null; } 
                if (this.itemID === undefined) { this.itemID = null; } 
                if (this.tag === undefined) { this.tag = null; } 
                if (this.initialized === undefined) { this.initialized = false; } 
                if (this.textValueChangedActionCode === undefined) { this.textValueChangedActionCode = null; } 
                if (this.rowsStateChangedActionCode === undefined) { this.rowsStateChangedActionCode = null; } 
                if (this.itemStateChangedActionCode === undefined) { this.itemStateChangedActionCode = null; } 
                if (this.pushedActionCode === undefined) { this.pushedActionCode = null; } 
                if (this.initSpreadData === undefined) { this.initSpreadData = null; } 
                if (this.valueOnOpen === undefined) { this.valueOnOpen = null; } 
                if (this.editvalueOnOpen === undefined) { this.editvalueOnOpen = null; } 
                if (this.statusOnOpen === undefined) { this.statusOnOpen = 0; } 
                if (this.inputAreaOpened === undefined) { this.inputAreaOpened = false; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
                if (this.columnInfoBackgroundArray === undefined) { this.columnInfoBackgroundArray = null; } 
                if (this.columnInfoForegroundArray === undefined) { this.columnInfoForegroundArray = null; } 
                if (this.commaEditAllowedArray === undefined) { this.commaEditAllowedArray = null; } 
                if (this.decimalpointAllowedArray === undefined) { this.decimalpointAllowedArray = null; } 
                if (this.enableInputNegativeValueArray === undefined) { this.enableInputNegativeValueArray = null; } 
                if (this.itemArrays === undefined) { this.itemArrays = null; } 
                if (this.headerColumnInfoBackgroundArray === undefined) { this.headerColumnInfoBackgroundArray = null; } 
                if (this.headerColumnInfoForegroundArray === undefined) { this.headerColumnInfoForegroundArray = null; } 
                if (this.envBackgroundEnabled === undefined) { this.envBackgroundEnabled = false; } 
                if (this.envFontEnabled === undefined) { this.envFontEnabled = false; } 
                if (this.defaultProperties === undefined) { this.defaultProperties = null; } 
                if (this.errorCode === undefined) { this.errorCode = null; } 
                if (this.inputAreaKeyListener === undefined) { this.inputAreaKeyListener = null; } 
                if (this.__rowSelected === undefined) { this.__rowSelected = false; } 
                if (this.inputAreaOpenedPosition === undefined) { this.inputAreaOpenedPosition = null; } 
                if (this.actionCodeInfo === undefined) { this.actionCodeInfo = null; } 
                if (this.keyAdapter === undefined) { this.keyAdapter = null; } 
                if (this.mouseAdapter === undefined) { this.mouseAdapter = null; } 
                if (this.lineSelection === undefined) { this.lineSelection = 0; } 
                if (this.recordInfo === undefined) { this.recordInfo = null; } 
                if (this.clientBackground === undefined) { this.clientBackground = null; } 
                if (this.clientForeground === undefined) { this.clientForeground = null; } 
                if (this.zeroSuppress === undefined) { this.zeroSuppress = 0; } 
                if (this.selectedRowPositions === undefined) { this.selectedRowPositions = null; } 
                if (this.deselectedRowPositions === undefined) { this.deselectedRowPositions = null; } 
                if (this.rowSelectingTrigger === undefined) { this.rowSelectingTrigger = null; } 
                if (this.hiddenSupport === undefined) { this.hiddenSupport = 0; } 
                if (this.checkRoutineID === undefined) { this.checkRoutineID = null; } 
                if (this.retryOnError === undefined) { this.retryOnError = false; } 
                if (this.lockedByGUI === undefined) { this.lockedByGUI = false; } 
                if (this.lockedByCJF === undefined) { this.lockedByCJF = false; } 
                if (this.refocusable === undefined) { this.refocusable = false; } 
                if (this.needSetErrorAttributes === undefined) { this.needSetErrorAttributes = false; } 
                if (this.errorAttributesBackup === undefined) { this.errorAttributesBackup = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyConstrained === undefined) { this.__cdIsheaderAndColumnPropertyPropertyConstrained = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyBounded === undefined) { this.__cdIsheaderAndColumnPropertyPropertyBounded = false; } 
                if (this.initCursorRow === undefined) { this.initCursorRow = 0; } 
                if (this.initCursorCol === undefined) { this.initCursorCol = 0; } 
                if (this.__cdIsitemIDPropertyConstrained === undefined) { this.__cdIsitemIDPropertyConstrained = false; } 
                if (this.__cdIsitemIDPropertyBounded === undefined) { this.__cdIsitemIDPropertyBounded = false; } 
                if (this.__cdIstagPropertyConstrained === undefined) { this.__cdIstagPropertyConstrained = false; } 
                if (this.__cdIstagPropertyBounded === undefined) { this.__cdIstagPropertyBounded = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyConstrained === undefined) { this.__cdIsenvBackgroundEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyBounded === undefined) { this.__cdIsenvBackgroundEnabledPropertyBounded = false; } 
                if (this.__cdIsenvFontEnabledPropertyConstrained === undefined) { this.__cdIsenvFontEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvFontEnabledPropertyBounded === undefined) { this.__cdIsenvFontEnabledPropertyBounded = false; } 
                if (this.__cdIsselectionVisiblePropertyConstrained === undefined) { this.__cdIsselectionVisiblePropertyConstrained = false; } 
                if (this.__cdIsselectionVisiblePropertyBounded === undefined) { this.__cdIsselectionVisiblePropertyBounded = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyConstrained === undefined) { this.__cdIstextValueChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyBounded === undefined) { this.__cdIstextValueChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsitemStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyBounded === undefined) { this.__cdIsitemStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsrowsStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyBounded === undefined) { this.__cdIsrowsStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIspushedActionCodePropertyConstrained === undefined) { this.__cdIspushedActionCodePropertyConstrained = false; } 
                if (this.__cdIspushedActionCodePropertyBounded === undefined) { this.__cdIspushedActionCodePropertyBounded = false; } 
                if (this.closeMode === undefined) { this.closeMode = false; } 
                if (this.JCFActionListenerList === undefined) { this.JCFActionListenerList = null; } 
                if (this.__cdIsextendmodeBackgroundPropertyConstrained === undefined) { this.__cdIsextendmodeBackgroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeBackgroundPropertyBounded === undefined) { this.__cdIsextendmodeBackgroundPropertyBounded = false; } 
                if (this.__cdIsextendmodeForegroundPropertyConstrained === undefined) { this.__cdIsextendmodeForegroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeForegroundPropertyBounded === undefined) { this.__cdIsextendmodeForegroundPropertyBounded = false; } 
                if (this.__cdIsselectionBackgroundPropertyConstrained === undefined) { this.__cdIsselectionBackgroundPropertyConstrained = false; } 
                if (this.__cdIsselectionBackgroundPropertyBounded === undefined) { this.__cdIsselectionBackgroundPropertyBounded = false; } 
                if (this.__cdIsselectionForegroundPropertyConstrained === undefined) { this.__cdIsselectionForegroundPropertyConstrained = false; } 
                if (this.__cdIsselectionForegroundPropertyBounded === undefined) { this.__cdIsselectionForegroundPropertyBounded = false; } 
                if (this.__cdIslineSelectionPropertyConstrained === undefined) { this.__cdIslineSelectionPropertyConstrained = false; } 
                if (this.__cdIslineSelectionPropertyBounded === undefined) { this.__cdIslineSelectionPropertyBounded = false; } 
                if (this.__cdIsclientBackgroundPropertyConstrained === undefined) { this.__cdIsclientBackgroundPropertyConstrained = false; } 
                if (this.__cdIsclientBackgroundPropertyBounded === undefined) { this.__cdIsclientBackgroundPropertyBounded = false; } 
                if (this.__cdIsclientForegroundPropertyConstrained === undefined) { this.__cdIsclientForegroundPropertyConstrained = false; } 
                if (this.__cdIsclientForegroundPropertyBounded === undefined) { this.__cdIsclientForegroundPropertyBounded = false; } 
                if (this.semaphore === undefined) { this.semaphore = null; } 
                if (this.__cdIszeroSuppressPropertyConstrained === undefined) { this.__cdIszeroSuppressPropertyConstrained = false; } 
                if (this.__cdIszeroSuppressPropertyBounded === undefined) { this.__cdIszeroSuppressPropertyBounded = false; } 
                if (this.__cdIslockModePropertyConstrained === undefined) { this.__cdIslockModePropertyConstrained = false; } 
                if (this.__cdIslockModePropertyBounded === undefined) { this.__cdIslockModePropertyBounded = false; } 
                if (this.lockMode === undefined) { this.lockMode = 0; } 
                if (this.wheelScrollingEnabled === undefined) { this.wheelScrollingEnabled = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyConstrained === undefined) { this.__cdIswheelScrollingEnabledPropertyConstrained = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyBounded === undefined) { this.__cdIswheelScrollingEnabledPropertyBounded = false; } 
                if (this.__cdIshiddenSupportPropertyConstrained === undefined) { this.__cdIshiddenSupportPropertyConstrained = false; } 
                if (this.__cdIshiddenSupportPropertyBounded === undefined) { this.__cdIshiddenSupportPropertyBounded = false; } 
                if (this.__cdIscheckRoutineIDPropertyConstrained === undefined) { this.__cdIscheckRoutineIDPropertyConstrained = false; } 
                if (this.__cdIscheckRoutineIDPropertyBounded === undefined) { this.__cdIscheckRoutineIDPropertyBounded = false; } 
                if (this.__cdIsretryOnErrorPropertyConstrained === undefined) { this.__cdIsretryOnErrorPropertyConstrained = false; } 
                if (this.__cdIsretryOnErrorPropertyBounded === undefined) { this.__cdIsretryOnErrorPropertyBounded = false; } 
                this.__cdEnableEventDispatch = false;
                this.sequentialNumber = 0;
                this.panelID = "";
                this.itemID = "";
                this.tag = "";
                this.initialized = false;
                this.textValueChangedActionCode = "";
                this.rowsStateChangedActionCode = "";
                this.itemStateChangedActionCode = "";
                this.pushedActionCode = "";
                this.initSpreadData = null;
                this.valueOnOpen = "";
                this.editvalueOnOpen = "";
                this.statusOnOpen = 0;
                this.inputAreaOpened = false;
                this.commaEditAllowedArray = [];
                this.decimalpointAllowedArray = [];
                this.enableInputNegativeValueArray = [];
                this.itemArrays = <any> (function(dims) { let allocate = function(dims) { if (dims.length === 0) { return null; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([0, 0]);
                this.envBackgroundEnabled = false;
                this.envFontEnabled = false;
                this.defaultProperties = null;
                this.errorCode = "ERROR_NOTHING";
                this.inputAreaKeyListener = new JCFSpread.InputAreaKeyListener(this);
                this.__rowSelected = false;
                this.inputAreaOpenedPosition = null;
                this.actionCodeInfo = null;
                this.keyAdapter = null;
                this.mouseAdapter = null;
                this.lineSelection = 0;
                this.recordInfo = null;
                this.zeroSuppress = 0;
                this.selectedRowPositions = null;
                this.deselectedRowPositions = null;
                this.hiddenSupport = 1;
                this.checkRoutineID = "";
                this.retryOnError = false;
                this.lockedByGUI = false;
                this.lockedByCJF = false;
                this.refocusable = true;
                this.needSetErrorAttributes = false;
                this.errorAttributesBackup = false;
                this.__cdIsheaderAndColumnPropertyPropertyConstrained = false;
                this.__cdIsheaderAndColumnPropertyPropertyBounded = true;
                this.__cdIsitemIDPropertyConstrained = false;
                this.__cdIsitemIDPropertyBounded = false;
                this.__cdIstagPropertyConstrained = false;
                this.__cdIstagPropertyBounded = false;
                this.__cdIsenvBackgroundEnabledPropertyConstrained = false;
                this.__cdIsenvBackgroundEnabledPropertyBounded = false;
                this.__cdIsenvFontEnabledPropertyConstrained = false;
                this.__cdIsenvFontEnabledPropertyBounded = false;
                this.__cdIsselectionVisiblePropertyConstrained = false;
                this.__cdIsselectionVisiblePropertyBounded = false;
                this.__cdIstextValueChangedActionCodePropertyConstrained = false;
                this.__cdIstextValueChangedActionCodePropertyBounded = false;
                this.__cdIsitemStateChangedActionCodePropertyConstrained = false;
                this.__cdIsitemStateChangedActionCodePropertyBounded = false;
                this.__cdIsrowsStateChangedActionCodePropertyConstrained = false;
                this.__cdIsrowsStateChangedActionCodePropertyBounded = false;
                this.__cdIspushedActionCodePropertyConstrained = false;
                this.__cdIspushedActionCodePropertyBounded = false;
                this.closeMode = false;
                this.__cdIsextendmodeBackgroundPropertyConstrained = false;
                this.__cdIsextendmodeBackgroundPropertyBounded = false;
                this.__cdIsextendmodeForegroundPropertyConstrained = false;
                this.__cdIsextendmodeForegroundPropertyBounded = false;
                this.__cdIsselectionBackgroundPropertyConstrained = false;
                this.__cdIsselectionBackgroundPropertyBounded = false;
                this.__cdIsselectionForegroundPropertyConstrained = false;
                this.__cdIsselectionForegroundPropertyBounded = false;
                this.__cdIslineSelectionPropertyConstrained = false;
                this.__cdIslineSelectionPropertyBounded = false;
                this.__cdIsclientBackgroundPropertyConstrained = false;
                this.__cdIsclientBackgroundPropertyBounded = false;
                this.__cdIsclientForegroundPropertyConstrained = false;
                this.__cdIsclientForegroundPropertyBounded = false;
                this.semaphore = null;
                this.__cdIszeroSuppressPropertyConstrained = false;
                this.__cdIszeroSuppressPropertyBounded = false;
                this.__cdIslockModePropertyConstrained = false;
                this.__cdIslockModePropertyBounded = false;
                this.lockMode = 0;
                this.wheelScrollingEnabled = false;
                this.__cdIswheelScrollingEnabledPropertyConstrained = false;
                this.__cdIswheelScrollingEnabledPropertyBounded = false;
                this.__cdIshiddenSupportPropertyConstrained = false;
                this.__cdIshiddenSupportPropertyBounded = false;
                this.__cdIscheckRoutineIDPropertyConstrained = false;
                this.__cdIscheckRoutineIDPropertyBounded = false;
                this.__cdIsretryOnErrorPropertyConstrained = false;
                this.__cdIsretryOnErrorPropertyBounded = false;
            } else if (((arg0 != null && arg0 instanceof <any>lib.com.fujitsu.caa.CJCell) || arg0 === null) && arg1 === undefined && arg2 === undefined && arg3 === undefined && arg4 === undefined && arg5 === undefined && arg6 === undefined && arg7 === undefined) {
                let __args = arguments;
                super();
                if (this.__cdEnableEventDispatch === undefined) { this.__cdEnableEventDispatch = false; } 
                if (this.sequentialNumber === undefined) { this.sequentialNumber = 0; } 
                if (this.panelID === undefined) { this.panelID = null; } 
                if (this.itemID === undefined) { this.itemID = null; } 
                if (this.tag === undefined) { this.tag = null; } 
                if (this.initialized === undefined) { this.initialized = false; } 
                if (this.textValueChangedActionCode === undefined) { this.textValueChangedActionCode = null; } 
                if (this.rowsStateChangedActionCode === undefined) { this.rowsStateChangedActionCode = null; } 
                if (this.itemStateChangedActionCode === undefined) { this.itemStateChangedActionCode = null; } 
                if (this.pushedActionCode === undefined) { this.pushedActionCode = null; } 
                if (this.initSpreadData === undefined) { this.initSpreadData = null; } 
                if (this.valueOnOpen === undefined) { this.valueOnOpen = null; } 
                if (this.editvalueOnOpen === undefined) { this.editvalueOnOpen = null; } 
                if (this.statusOnOpen === undefined) { this.statusOnOpen = 0; } 
                if (this.inputAreaOpened === undefined) { this.inputAreaOpened = false; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
                if (this.columnInfoBackgroundArray === undefined) { this.columnInfoBackgroundArray = null; } 
                if (this.columnInfoForegroundArray === undefined) { this.columnInfoForegroundArray = null; } 
                if (this.commaEditAllowedArray === undefined) { this.commaEditAllowedArray = null; } 
                if (this.decimalpointAllowedArray === undefined) { this.decimalpointAllowedArray = null; } 
                if (this.enableInputNegativeValueArray === undefined) { this.enableInputNegativeValueArray = null; } 
                if (this.itemArrays === undefined) { this.itemArrays = null; } 
                if (this.headerColumnInfoBackgroundArray === undefined) { this.headerColumnInfoBackgroundArray = null; } 
                if (this.headerColumnInfoForegroundArray === undefined) { this.headerColumnInfoForegroundArray = null; } 
                if (this.envBackgroundEnabled === undefined) { this.envBackgroundEnabled = false; } 
                if (this.envFontEnabled === undefined) { this.envFontEnabled = false; } 
                if (this.defaultProperties === undefined) { this.defaultProperties = null; } 
                if (this.errorCode === undefined) { this.errorCode = null; } 
                if (this.inputAreaKeyListener === undefined) { this.inputAreaKeyListener = null; } 
                if (this.__rowSelected === undefined) { this.__rowSelected = false; } 
                if (this.inputAreaOpenedPosition === undefined) { this.inputAreaOpenedPosition = null; } 
                if (this.actionCodeInfo === undefined) { this.actionCodeInfo = null; } 
                if (this.keyAdapter === undefined) { this.keyAdapter = null; } 
                if (this.mouseAdapter === undefined) { this.mouseAdapter = null; } 
                if (this.lineSelection === undefined) { this.lineSelection = 0; } 
                if (this.recordInfo === undefined) { this.recordInfo = null; } 
                if (this.clientBackground === undefined) { this.clientBackground = null; } 
                if (this.clientForeground === undefined) { this.clientForeground = null; } 
                if (this.zeroSuppress === undefined) { this.zeroSuppress = 0; } 
                if (this.selectedRowPositions === undefined) { this.selectedRowPositions = null; } 
                if (this.deselectedRowPositions === undefined) { this.deselectedRowPositions = null; } 
                if (this.rowSelectingTrigger === undefined) { this.rowSelectingTrigger = null; } 
                if (this.hiddenSupport === undefined) { this.hiddenSupport = 0; } 
                if (this.checkRoutineID === undefined) { this.checkRoutineID = null; } 
                if (this.retryOnError === undefined) { this.retryOnError = false; } 
                if (this.lockedByGUI === undefined) { this.lockedByGUI = false; } 
                if (this.lockedByCJF === undefined) { this.lockedByCJF = false; } 
                if (this.refocusable === undefined) { this.refocusable = false; } 
                if (this.needSetErrorAttributes === undefined) { this.needSetErrorAttributes = false; } 
                if (this.errorAttributesBackup === undefined) { this.errorAttributesBackup = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyConstrained === undefined) { this.__cdIsheaderAndColumnPropertyPropertyConstrained = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyBounded === undefined) { this.__cdIsheaderAndColumnPropertyPropertyBounded = false; } 
                if (this.initCursorRow === undefined) { this.initCursorRow = 0; } 
                if (this.initCursorCol === undefined) { this.initCursorCol = 0; } 
                if (this.__cdIsitemIDPropertyConstrained === undefined) { this.__cdIsitemIDPropertyConstrained = false; } 
                if (this.__cdIsitemIDPropertyBounded === undefined) { this.__cdIsitemIDPropertyBounded = false; } 
                if (this.__cdIstagPropertyConstrained === undefined) { this.__cdIstagPropertyConstrained = false; } 
                if (this.__cdIstagPropertyBounded === undefined) { this.__cdIstagPropertyBounded = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyConstrained === undefined) { this.__cdIsenvBackgroundEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyBounded === undefined) { this.__cdIsenvBackgroundEnabledPropertyBounded = false; } 
                if (this.__cdIsenvFontEnabledPropertyConstrained === undefined) { this.__cdIsenvFontEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvFontEnabledPropertyBounded === undefined) { this.__cdIsenvFontEnabledPropertyBounded = false; } 
                if (this.__cdIsselectionVisiblePropertyConstrained === undefined) { this.__cdIsselectionVisiblePropertyConstrained = false; } 
                if (this.__cdIsselectionVisiblePropertyBounded === undefined) { this.__cdIsselectionVisiblePropertyBounded = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyConstrained === undefined) { this.__cdIstextValueChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyBounded === undefined) { this.__cdIstextValueChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsitemStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyBounded === undefined) { this.__cdIsitemStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsrowsStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyBounded === undefined) { this.__cdIsrowsStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIspushedActionCodePropertyConstrained === undefined) { this.__cdIspushedActionCodePropertyConstrained = false; } 
                if (this.__cdIspushedActionCodePropertyBounded === undefined) { this.__cdIspushedActionCodePropertyBounded = false; } 
                if (this.closeMode === undefined) { this.closeMode = false; } 
                if (this.JCFActionListenerList === undefined) { this.JCFActionListenerList = null; } 
                if (this.__cdIsextendmodeBackgroundPropertyConstrained === undefined) { this.__cdIsextendmodeBackgroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeBackgroundPropertyBounded === undefined) { this.__cdIsextendmodeBackgroundPropertyBounded = false; } 
                if (this.__cdIsextendmodeForegroundPropertyConstrained === undefined) { this.__cdIsextendmodeForegroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeForegroundPropertyBounded === undefined) { this.__cdIsextendmodeForegroundPropertyBounded = false; } 
                if (this.__cdIsselectionBackgroundPropertyConstrained === undefined) { this.__cdIsselectionBackgroundPropertyConstrained = false; } 
                if (this.__cdIsselectionBackgroundPropertyBounded === undefined) { this.__cdIsselectionBackgroundPropertyBounded = false; } 
                if (this.__cdIsselectionForegroundPropertyConstrained === undefined) { this.__cdIsselectionForegroundPropertyConstrained = false; } 
                if (this.__cdIsselectionForegroundPropertyBounded === undefined) { this.__cdIsselectionForegroundPropertyBounded = false; } 
                if (this.__cdIslineSelectionPropertyConstrained === undefined) { this.__cdIslineSelectionPropertyConstrained = false; } 
                if (this.__cdIslineSelectionPropertyBounded === undefined) { this.__cdIslineSelectionPropertyBounded = false; } 
                if (this.__cdIsclientBackgroundPropertyConstrained === undefined) { this.__cdIsclientBackgroundPropertyConstrained = false; } 
                if (this.__cdIsclientBackgroundPropertyBounded === undefined) { this.__cdIsclientBackgroundPropertyBounded = false; } 
                if (this.__cdIsclientForegroundPropertyConstrained === undefined) { this.__cdIsclientForegroundPropertyConstrained = false; } 
                if (this.__cdIsclientForegroundPropertyBounded === undefined) { this.__cdIsclientForegroundPropertyBounded = false; } 
                if (this.semaphore === undefined) { this.semaphore = null; } 
                if (this.__cdIszeroSuppressPropertyConstrained === undefined) { this.__cdIszeroSuppressPropertyConstrained = false; } 
                if (this.__cdIszeroSuppressPropertyBounded === undefined) { this.__cdIszeroSuppressPropertyBounded = false; } 
                if (this.__cdIslockModePropertyConstrained === undefined) { this.__cdIslockModePropertyConstrained = false; } 
                if (this.__cdIslockModePropertyBounded === undefined) { this.__cdIslockModePropertyBounded = false; } 
                if (this.lockMode === undefined) { this.lockMode = 0; } 
                if (this.wheelScrollingEnabled === undefined) { this.wheelScrollingEnabled = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyConstrained === undefined) { this.__cdIswheelScrollingEnabledPropertyConstrained = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyBounded === undefined) { this.__cdIswheelScrollingEnabledPropertyBounded = false; } 
                if (this.__cdIshiddenSupportPropertyConstrained === undefined) { this.__cdIshiddenSupportPropertyConstrained = false; } 
                if (this.__cdIshiddenSupportPropertyBounded === undefined) { this.__cdIshiddenSupportPropertyBounded = false; } 
                if (this.__cdIscheckRoutineIDPropertyConstrained === undefined) { this.__cdIscheckRoutineIDPropertyConstrained = false; } 
                if (this.__cdIscheckRoutineIDPropertyBounded === undefined) { this.__cdIscheckRoutineIDPropertyBounded = false; } 
                if (this.__cdIsretryOnErrorPropertyConstrained === undefined) { this.__cdIsretryOnErrorPropertyConstrained = false; } 
                if (this.__cdIsretryOnErrorPropertyBounded === undefined) { this.__cdIsretryOnErrorPropertyBounded = false; } 
                this.__cdEnableEventDispatch = false;
                this.sequentialNumber = 0;
                this.panelID = "";
                this.itemID = "";
                this.tag = "";
                this.initialized = false;
                this.textValueChangedActionCode = "";
                this.rowsStateChangedActionCode = "";
                this.itemStateChangedActionCode = "";
                this.pushedActionCode = "";
                this.initSpreadData = null;
                this.valueOnOpen = "";
                this.editvalueOnOpen = "";
                this.statusOnOpen = 0;
                this.inputAreaOpened = false;
                this.commaEditAllowedArray = [];
                this.decimalpointAllowedArray = [];
                this.enableInputNegativeValueArray = [];
                this.itemArrays = <any> (function(dims) { let allocate = function(dims) { if (dims.length === 0) { return null; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([0, 0]);
                this.envBackgroundEnabled = false;
                this.envFontEnabled = false;
                this.defaultProperties = null;
                this.errorCode = "ERROR_NOTHING";
                this.inputAreaKeyListener = new JCFSpread.InputAreaKeyListener(this);
                this.__rowSelected = false;
                this.inputAreaOpenedPosition = null;
                this.actionCodeInfo = null;
                this.keyAdapter = null;
                this.mouseAdapter = null;
                this.lineSelection = 0;
                this.recordInfo = null;
                this.zeroSuppress = 0;
                this.selectedRowPositions = null;
                this.deselectedRowPositions = null;
                this.hiddenSupport = 1;
                this.checkRoutineID = "";
                this.retryOnError = false;
                this.lockedByGUI = false;
                this.lockedByCJF = false;
                this.refocusable = true;
                this.needSetErrorAttributes = false;
                this.errorAttributesBackup = false;
                this.__cdIsheaderAndColumnPropertyPropertyConstrained = false;
                this.__cdIsheaderAndColumnPropertyPropertyBounded = true;
                this.__cdIsitemIDPropertyConstrained = false;
                this.__cdIsitemIDPropertyBounded = false;
                this.__cdIstagPropertyConstrained = false;
                this.__cdIstagPropertyBounded = false;
                this.__cdIsenvBackgroundEnabledPropertyConstrained = false;
                this.__cdIsenvBackgroundEnabledPropertyBounded = false;
                this.__cdIsenvFontEnabledPropertyConstrained = false;
                this.__cdIsenvFontEnabledPropertyBounded = false;
                this.__cdIsselectionVisiblePropertyConstrained = false;
                this.__cdIsselectionVisiblePropertyBounded = false;
                this.__cdIstextValueChangedActionCodePropertyConstrained = false;
                this.__cdIstextValueChangedActionCodePropertyBounded = false;
                this.__cdIsitemStateChangedActionCodePropertyConstrained = false;
                this.__cdIsitemStateChangedActionCodePropertyBounded = false;
                this.__cdIsrowsStateChangedActionCodePropertyConstrained = false;
                this.__cdIsrowsStateChangedActionCodePropertyBounded = false;
                this.__cdIspushedActionCodePropertyConstrained = false;
                this.__cdIspushedActionCodePropertyBounded = false;
                this.closeMode = false;
                this.__cdIsextendmodeBackgroundPropertyConstrained = false;
                this.__cdIsextendmodeBackgroundPropertyBounded = false;
                this.__cdIsextendmodeForegroundPropertyConstrained = false;
                this.__cdIsextendmodeForegroundPropertyBounded = false;
                this.__cdIsselectionBackgroundPropertyConstrained = false;
                this.__cdIsselectionBackgroundPropertyBounded = false;
                this.__cdIsselectionForegroundPropertyConstrained = false;
                this.__cdIsselectionForegroundPropertyBounded = false;
                this.__cdIslineSelectionPropertyConstrained = false;
                this.__cdIslineSelectionPropertyBounded = false;
                this.__cdIsclientBackgroundPropertyConstrained = false;
                this.__cdIsclientBackgroundPropertyBounded = false;
                this.__cdIsclientForegroundPropertyConstrained = false;
                this.__cdIsclientForegroundPropertyBounded = false;
                this.semaphore = null;
                this.__cdIszeroSuppressPropertyConstrained = false;
                this.__cdIszeroSuppressPropertyBounded = false;
                this.__cdIslockModePropertyConstrained = false;
                this.__cdIslockModePropertyBounded = false;
                this.lockMode = 0;
                this.wheelScrollingEnabled = false;
                this.__cdIswheelScrollingEnabledPropertyConstrained = false;
                this.__cdIswheelScrollingEnabledPropertyBounded = false;
                this.__cdIshiddenSupportPropertyConstrained = false;
                this.__cdIshiddenSupportPropertyBounded = false;
                this.__cdIscheckRoutineIDPropertyConstrained = false;
                this.__cdIscheckRoutineIDPropertyBounded = false;
                this.__cdIsretryOnErrorPropertyConstrained = false;
                this.__cdIsretryOnErrorPropertyBounded = false;
            } else if (((arg0 != null && arg0 instanceof <any>lib.com.fujitsu.caa.CJSpread) || arg0 === null) && arg1 === undefined && arg2 === undefined && arg3 === undefined && arg4 === undefined && arg5 === undefined && arg6 === undefined && arg7 === undefined) {
                let __args = arguments;
                super();
                if (this.__cdEnableEventDispatch === undefined) { this.__cdEnableEventDispatch = false; } 
                if (this.sequentialNumber === undefined) { this.sequentialNumber = 0; } 
                if (this.panelID === undefined) { this.panelID = null; } 
                if (this.itemID === undefined) { this.itemID = null; } 
                if (this.tag === undefined) { this.tag = null; } 
                if (this.initialized === undefined) { this.initialized = false; } 
                if (this.textValueChangedActionCode === undefined) { this.textValueChangedActionCode = null; } 
                if (this.rowsStateChangedActionCode === undefined) { this.rowsStateChangedActionCode = null; } 
                if (this.itemStateChangedActionCode === undefined) { this.itemStateChangedActionCode = null; } 
                if (this.pushedActionCode === undefined) { this.pushedActionCode = null; } 
                if (this.initSpreadData === undefined) { this.initSpreadData = null; } 
                if (this.valueOnOpen === undefined) { this.valueOnOpen = null; } 
                if (this.editvalueOnOpen === undefined) { this.editvalueOnOpen = null; } 
                if (this.statusOnOpen === undefined) { this.statusOnOpen = 0; } 
                if (this.inputAreaOpened === undefined) { this.inputAreaOpened = false; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
                if (this.columnInfoBackgroundArray === undefined) { this.columnInfoBackgroundArray = null; } 
                if (this.columnInfoForegroundArray === undefined) { this.columnInfoForegroundArray = null; } 
                if (this.commaEditAllowedArray === undefined) { this.commaEditAllowedArray = null; } 
                if (this.decimalpointAllowedArray === undefined) { this.decimalpointAllowedArray = null; } 
                if (this.enableInputNegativeValueArray === undefined) { this.enableInputNegativeValueArray = null; } 
                if (this.itemArrays === undefined) { this.itemArrays = null; } 
                if (this.headerColumnInfoBackgroundArray === undefined) { this.headerColumnInfoBackgroundArray = null; } 
                if (this.headerColumnInfoForegroundArray === undefined) { this.headerColumnInfoForegroundArray = null; } 
                if (this.envBackgroundEnabled === undefined) { this.envBackgroundEnabled = false; } 
                if (this.envFontEnabled === undefined) { this.envFontEnabled = false; } 
                if (this.defaultProperties === undefined) { this.defaultProperties = null; } 
                if (this.errorCode === undefined) { this.errorCode = null; } 
                if (this.inputAreaKeyListener === undefined) { this.inputAreaKeyListener = null; } 
                if (this.__rowSelected === undefined) { this.__rowSelected = false; } 
                if (this.inputAreaOpenedPosition === undefined) { this.inputAreaOpenedPosition = null; } 
                if (this.actionCodeInfo === undefined) { this.actionCodeInfo = null; } 
                if (this.keyAdapter === undefined) { this.keyAdapter = null; } 
                if (this.mouseAdapter === undefined) { this.mouseAdapter = null; } 
                if (this.lineSelection === undefined) { this.lineSelection = 0; } 
                if (this.recordInfo === undefined) { this.recordInfo = null; } 
                if (this.clientBackground === undefined) { this.clientBackground = null; } 
                if (this.clientForeground === undefined) { this.clientForeground = null; } 
                if (this.zeroSuppress === undefined) { this.zeroSuppress = 0; } 
                if (this.selectedRowPositions === undefined) { this.selectedRowPositions = null; } 
                if (this.deselectedRowPositions === undefined) { this.deselectedRowPositions = null; } 
                if (this.rowSelectingTrigger === undefined) { this.rowSelectingTrigger = null; } 
                if (this.hiddenSupport === undefined) { this.hiddenSupport = 0; } 
                if (this.checkRoutineID === undefined) { this.checkRoutineID = null; } 
                if (this.retryOnError === undefined) { this.retryOnError = false; } 
                if (this.lockedByGUI === undefined) { this.lockedByGUI = false; } 
                if (this.lockedByCJF === undefined) { this.lockedByCJF = false; } 
                if (this.refocusable === undefined) { this.refocusable = false; } 
                if (this.needSetErrorAttributes === undefined) { this.needSetErrorAttributes = false; } 
                if (this.errorAttributesBackup === undefined) { this.errorAttributesBackup = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyConstrained === undefined) { this.__cdIsheaderAndColumnPropertyPropertyConstrained = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyBounded === undefined) { this.__cdIsheaderAndColumnPropertyPropertyBounded = false; } 
                if (this.initCursorRow === undefined) { this.initCursorRow = 0; } 
                if (this.initCursorCol === undefined) { this.initCursorCol = 0; } 
                if (this.__cdIsitemIDPropertyConstrained === undefined) { this.__cdIsitemIDPropertyConstrained = false; } 
                if (this.__cdIsitemIDPropertyBounded === undefined) { this.__cdIsitemIDPropertyBounded = false; } 
                if (this.__cdIstagPropertyConstrained === undefined) { this.__cdIstagPropertyConstrained = false; } 
                if (this.__cdIstagPropertyBounded === undefined) { this.__cdIstagPropertyBounded = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyConstrained === undefined) { this.__cdIsenvBackgroundEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyBounded === undefined) { this.__cdIsenvBackgroundEnabledPropertyBounded = false; } 
                if (this.__cdIsenvFontEnabledPropertyConstrained === undefined) { this.__cdIsenvFontEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvFontEnabledPropertyBounded === undefined) { this.__cdIsenvFontEnabledPropertyBounded = false; } 
                if (this.__cdIsselectionVisiblePropertyConstrained === undefined) { this.__cdIsselectionVisiblePropertyConstrained = false; } 
                if (this.__cdIsselectionVisiblePropertyBounded === undefined) { this.__cdIsselectionVisiblePropertyBounded = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyConstrained === undefined) { this.__cdIstextValueChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyBounded === undefined) { this.__cdIstextValueChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsitemStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyBounded === undefined) { this.__cdIsitemStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsrowsStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyBounded === undefined) { this.__cdIsrowsStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIspushedActionCodePropertyConstrained === undefined) { this.__cdIspushedActionCodePropertyConstrained = false; } 
                if (this.__cdIspushedActionCodePropertyBounded === undefined) { this.__cdIspushedActionCodePropertyBounded = false; } 
                if (this.closeMode === undefined) { this.closeMode = false; } 
                if (this.JCFActionListenerList === undefined) { this.JCFActionListenerList = null; } 
                if (this.__cdIsextendmodeBackgroundPropertyConstrained === undefined) { this.__cdIsextendmodeBackgroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeBackgroundPropertyBounded === undefined) { this.__cdIsextendmodeBackgroundPropertyBounded = false; } 
                if (this.__cdIsextendmodeForegroundPropertyConstrained === undefined) { this.__cdIsextendmodeForegroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeForegroundPropertyBounded === undefined) { this.__cdIsextendmodeForegroundPropertyBounded = false; } 
                if (this.__cdIsselectionBackgroundPropertyConstrained === undefined) { this.__cdIsselectionBackgroundPropertyConstrained = false; } 
                if (this.__cdIsselectionBackgroundPropertyBounded === undefined) { this.__cdIsselectionBackgroundPropertyBounded = false; } 
                if (this.__cdIsselectionForegroundPropertyConstrained === undefined) { this.__cdIsselectionForegroundPropertyConstrained = false; } 
                if (this.__cdIsselectionForegroundPropertyBounded === undefined) { this.__cdIsselectionForegroundPropertyBounded = false; } 
                if (this.__cdIslineSelectionPropertyConstrained === undefined) { this.__cdIslineSelectionPropertyConstrained = false; } 
                if (this.__cdIslineSelectionPropertyBounded === undefined) { this.__cdIslineSelectionPropertyBounded = false; } 
                if (this.__cdIsclientBackgroundPropertyConstrained === undefined) { this.__cdIsclientBackgroundPropertyConstrained = false; } 
                if (this.__cdIsclientBackgroundPropertyBounded === undefined) { this.__cdIsclientBackgroundPropertyBounded = false; } 
                if (this.__cdIsclientForegroundPropertyConstrained === undefined) { this.__cdIsclientForegroundPropertyConstrained = false; } 
                if (this.__cdIsclientForegroundPropertyBounded === undefined) { this.__cdIsclientForegroundPropertyBounded = false; } 
                if (this.semaphore === undefined) { this.semaphore = null; } 
                if (this.__cdIszeroSuppressPropertyConstrained === undefined) { this.__cdIszeroSuppressPropertyConstrained = false; } 
                if (this.__cdIszeroSuppressPropertyBounded === undefined) { this.__cdIszeroSuppressPropertyBounded = false; } 
                if (this.__cdIslockModePropertyConstrained === undefined) { this.__cdIslockModePropertyConstrained = false; } 
                if (this.__cdIslockModePropertyBounded === undefined) { this.__cdIslockModePropertyBounded = false; } 
                if (this.lockMode === undefined) { this.lockMode = 0; } 
                if (this.wheelScrollingEnabled === undefined) { this.wheelScrollingEnabled = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyConstrained === undefined) { this.__cdIswheelScrollingEnabledPropertyConstrained = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyBounded === undefined) { this.__cdIswheelScrollingEnabledPropertyBounded = false; } 
                if (this.__cdIshiddenSupportPropertyConstrained === undefined) { this.__cdIshiddenSupportPropertyConstrained = false; } 
                if (this.__cdIshiddenSupportPropertyBounded === undefined) { this.__cdIshiddenSupportPropertyBounded = false; } 
                if (this.__cdIscheckRoutineIDPropertyConstrained === undefined) { this.__cdIscheckRoutineIDPropertyConstrained = false; } 
                if (this.__cdIscheckRoutineIDPropertyBounded === undefined) { this.__cdIscheckRoutineIDPropertyBounded = false; } 
                if (this.__cdIsretryOnErrorPropertyConstrained === undefined) { this.__cdIsretryOnErrorPropertyConstrained = false; } 
                if (this.__cdIsretryOnErrorPropertyBounded === undefined) { this.__cdIsretryOnErrorPropertyBounded = false; } 
                this.__cdEnableEventDispatch = false;
                this.sequentialNumber = 0;
                this.panelID = "";
                this.itemID = "";
                this.tag = "";
                this.initialized = false;
                this.textValueChangedActionCode = "";
                this.rowsStateChangedActionCode = "";
                this.itemStateChangedActionCode = "";
                this.pushedActionCode = "";
                this.initSpreadData = null;
                this.valueOnOpen = "";
                this.editvalueOnOpen = "";
                this.statusOnOpen = 0;
                this.inputAreaOpened = false;
                this.commaEditAllowedArray = [];
                this.decimalpointAllowedArray = [];
                this.enableInputNegativeValueArray = [];
                this.itemArrays = <any> (function(dims) { let allocate = function(dims) { if (dims.length === 0) { return null; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([0, 0]);
                this.envBackgroundEnabled = false;
                this.envFontEnabled = false;
                this.defaultProperties = null;
                this.errorCode = "ERROR_NOTHING";
                this.inputAreaKeyListener = new JCFSpread.InputAreaKeyListener(this);
                this.__rowSelected = false;
                this.inputAreaOpenedPosition = null;
                this.actionCodeInfo = null;
                this.keyAdapter = null;
                this.mouseAdapter = null;
                this.lineSelection = 0;
                this.recordInfo = null;
                this.zeroSuppress = 0;
                this.selectedRowPositions = null;
                this.deselectedRowPositions = null;
                this.hiddenSupport = 1;
                this.checkRoutineID = "";
                this.retryOnError = false;
                this.lockedByGUI = false;
                this.lockedByCJF = false;
                this.refocusable = true;
                this.needSetErrorAttributes = false;
                this.errorAttributesBackup = false;
                this.__cdIsheaderAndColumnPropertyPropertyConstrained = false;
                this.__cdIsheaderAndColumnPropertyPropertyBounded = true;
                this.__cdIsitemIDPropertyConstrained = false;
                this.__cdIsitemIDPropertyBounded = false;
                this.__cdIstagPropertyConstrained = false;
                this.__cdIstagPropertyBounded = false;
                this.__cdIsenvBackgroundEnabledPropertyConstrained = false;
                this.__cdIsenvBackgroundEnabledPropertyBounded = false;
                this.__cdIsenvFontEnabledPropertyConstrained = false;
                this.__cdIsenvFontEnabledPropertyBounded = false;
                this.__cdIsselectionVisiblePropertyConstrained = false;
                this.__cdIsselectionVisiblePropertyBounded = false;
                this.__cdIstextValueChangedActionCodePropertyConstrained = false;
                this.__cdIstextValueChangedActionCodePropertyBounded = false;
                this.__cdIsitemStateChangedActionCodePropertyConstrained = false;
                this.__cdIsitemStateChangedActionCodePropertyBounded = false;
                this.__cdIsrowsStateChangedActionCodePropertyConstrained = false;
                this.__cdIsrowsStateChangedActionCodePropertyBounded = false;
                this.__cdIspushedActionCodePropertyConstrained = false;
                this.__cdIspushedActionCodePropertyBounded = false;
                this.closeMode = false;
                this.__cdIsextendmodeBackgroundPropertyConstrained = false;
                this.__cdIsextendmodeBackgroundPropertyBounded = false;
                this.__cdIsextendmodeForegroundPropertyConstrained = false;
                this.__cdIsextendmodeForegroundPropertyBounded = false;
                this.__cdIsselectionBackgroundPropertyConstrained = false;
                this.__cdIsselectionBackgroundPropertyBounded = false;
                this.__cdIsselectionForegroundPropertyConstrained = false;
                this.__cdIsselectionForegroundPropertyBounded = false;
                this.__cdIslineSelectionPropertyConstrained = false;
                this.__cdIslineSelectionPropertyBounded = false;
                this.__cdIsclientBackgroundPropertyConstrained = false;
                this.__cdIsclientBackgroundPropertyBounded = false;
                this.__cdIsclientForegroundPropertyConstrained = false;
                this.__cdIsclientForegroundPropertyBounded = false;
                this.semaphore = null;
                this.__cdIszeroSuppressPropertyConstrained = false;
                this.__cdIszeroSuppressPropertyBounded = false;
                this.__cdIslockModePropertyConstrained = false;
                this.__cdIslockModePropertyBounded = false;
                this.lockMode = 0;
                this.wheelScrollingEnabled = false;
                this.__cdIswheelScrollingEnabledPropertyConstrained = false;
                this.__cdIswheelScrollingEnabledPropertyBounded = false;
                this.__cdIshiddenSupportPropertyConstrained = false;
                this.__cdIshiddenSupportPropertyBounded = false;
                this.__cdIscheckRoutineIDPropertyConstrained = false;
                this.__cdIscheckRoutineIDPropertyBounded = false;
                this.__cdIsretryOnErrorPropertyConstrained = false;
                this.__cdIsretryOnErrorPropertyBounded = false;
            } else if (arg0 === undefined && arg1 === undefined && arg2 === undefined && arg3 === undefined && arg4 === undefined && arg5 === undefined && arg6 === undefined && arg7 === undefined) {
                let __args = arguments;
                super();
                if (this.__cdEnableEventDispatch === undefined) { this.__cdEnableEventDispatch = false; } 
                if (this.sequentialNumber === undefined) { this.sequentialNumber = 0; } 
                if (this.panelID === undefined) { this.panelID = null; } 
                if (this.itemID === undefined) { this.itemID = null; } 
                if (this.tag === undefined) { this.tag = null; } 
                if (this.initialized === undefined) { this.initialized = false; } 
                if (this.textValueChangedActionCode === undefined) { this.textValueChangedActionCode = null; } 
                if (this.rowsStateChangedActionCode === undefined) { this.rowsStateChangedActionCode = null; } 
                if (this.itemStateChangedActionCode === undefined) { this.itemStateChangedActionCode = null; } 
                if (this.pushedActionCode === undefined) { this.pushedActionCode = null; } 
                if (this.initSpreadData === undefined) { this.initSpreadData = null; } 
                if (this.valueOnOpen === undefined) { this.valueOnOpen = null; } 
                if (this.editvalueOnOpen === undefined) { this.editvalueOnOpen = null; } 
                if (this.statusOnOpen === undefined) { this.statusOnOpen = 0; } 
                if (this.inputAreaOpened === undefined) { this.inputAreaOpened = false; } 
                if (this.inputArea === undefined) { this.inputArea = null; } 
                if (this.columnInfoBackgroundArray === undefined) { this.columnInfoBackgroundArray = null; } 
                if (this.columnInfoForegroundArray === undefined) { this.columnInfoForegroundArray = null; } 
                if (this.commaEditAllowedArray === undefined) { this.commaEditAllowedArray = null; } 
                if (this.decimalpointAllowedArray === undefined) { this.decimalpointAllowedArray = null; } 
                if (this.enableInputNegativeValueArray === undefined) { this.enableInputNegativeValueArray = null; } 
                if (this.itemArrays === undefined) { this.itemArrays = null; } 
                if (this.headerColumnInfoBackgroundArray === undefined) { this.headerColumnInfoBackgroundArray = null; } 
                if (this.headerColumnInfoForegroundArray === undefined) { this.headerColumnInfoForegroundArray = null; } 
                if (this.envBackgroundEnabled === undefined) { this.envBackgroundEnabled = false; } 
                if (this.envFontEnabled === undefined) { this.envFontEnabled = false; } 
                if (this.defaultProperties === undefined) { this.defaultProperties = null; } 
                if (this.errorCode === undefined) { this.errorCode = null; } 
                if (this.inputAreaKeyListener === undefined) { this.inputAreaKeyListener = null; } 
                if (this.__rowSelected === undefined) { this.__rowSelected = false; } 
                if (this.inputAreaOpenedPosition === undefined) { this.inputAreaOpenedPosition = null; } 
                if (this.actionCodeInfo === undefined) { this.actionCodeInfo = null; } 
                if (this.keyAdapter === undefined) { this.keyAdapter = null; } 
                if (this.mouseAdapter === undefined) { this.mouseAdapter = null; } 
                if (this.lineSelection === undefined) { this.lineSelection = 0; } 
                if (this.recordInfo === undefined) { this.recordInfo = null; } 
                if (this.clientBackground === undefined) { this.clientBackground = null; } 
                if (this.clientForeground === undefined) { this.clientForeground = null; } 
                if (this.zeroSuppress === undefined) { this.zeroSuppress = 0; } 
                if (this.selectedRowPositions === undefined) { this.selectedRowPositions = null; } 
                if (this.deselectedRowPositions === undefined) { this.deselectedRowPositions = null; } 
                if (this.rowSelectingTrigger === undefined) { this.rowSelectingTrigger = null; } 
                if (this.hiddenSupport === undefined) { this.hiddenSupport = 0; } 
                if (this.checkRoutineID === undefined) { this.checkRoutineID = null; } 
                if (this.retryOnError === undefined) { this.retryOnError = false; } 
                if (this.lockedByGUI === undefined) { this.lockedByGUI = false; } 
                if (this.lockedByCJF === undefined) { this.lockedByCJF = false; } 
                if (this.refocusable === undefined) { this.refocusable = false; } 
                if (this.needSetErrorAttributes === undefined) { this.needSetErrorAttributes = false; } 
                if (this.errorAttributesBackup === undefined) { this.errorAttributesBackup = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyConstrained === undefined) { this.__cdIsheaderAndColumnPropertyPropertyConstrained = false; } 
                if (this.__cdIsheaderAndColumnPropertyPropertyBounded === undefined) { this.__cdIsheaderAndColumnPropertyPropertyBounded = false; } 
                if (this.initCursorRow === undefined) { this.initCursorRow = 0; } 
                if (this.initCursorCol === undefined) { this.initCursorCol = 0; } 
                if (this.__cdIsitemIDPropertyConstrained === undefined) { this.__cdIsitemIDPropertyConstrained = false; } 
                if (this.__cdIsitemIDPropertyBounded === undefined) { this.__cdIsitemIDPropertyBounded = false; } 
                if (this.__cdIstagPropertyConstrained === undefined) { this.__cdIstagPropertyConstrained = false; } 
                if (this.__cdIstagPropertyBounded === undefined) { this.__cdIstagPropertyBounded = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyConstrained === undefined) { this.__cdIsenvBackgroundEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvBackgroundEnabledPropertyBounded === undefined) { this.__cdIsenvBackgroundEnabledPropertyBounded = false; } 
                if (this.__cdIsenvFontEnabledPropertyConstrained === undefined) { this.__cdIsenvFontEnabledPropertyConstrained = false; } 
                if (this.__cdIsenvFontEnabledPropertyBounded === undefined) { this.__cdIsenvFontEnabledPropertyBounded = false; } 
                if (this.__cdIsselectionVisiblePropertyConstrained === undefined) { this.__cdIsselectionVisiblePropertyConstrained = false; } 
                if (this.__cdIsselectionVisiblePropertyBounded === undefined) { this.__cdIsselectionVisiblePropertyBounded = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyConstrained === undefined) { this.__cdIstextValueChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIstextValueChangedActionCodePropertyBounded === undefined) { this.__cdIstextValueChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsitemStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsitemStateChangedActionCodePropertyBounded === undefined) { this.__cdIsitemStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyConstrained === undefined) { this.__cdIsrowsStateChangedActionCodePropertyConstrained = false; } 
                if (this.__cdIsrowsStateChangedActionCodePropertyBounded === undefined) { this.__cdIsrowsStateChangedActionCodePropertyBounded = false; } 
                if (this.__cdIspushedActionCodePropertyConstrained === undefined) { this.__cdIspushedActionCodePropertyConstrained = false; } 
                if (this.__cdIspushedActionCodePropertyBounded === undefined) { this.__cdIspushedActionCodePropertyBounded = false; } 
                if (this.closeMode === undefined) { this.closeMode = false; } 
                if (this.JCFActionListenerList === undefined) { this.JCFActionListenerList = null; } 
                if (this.__cdIsextendmodeBackgroundPropertyConstrained === undefined) { this.__cdIsextendmodeBackgroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeBackgroundPropertyBounded === undefined) { this.__cdIsextendmodeBackgroundPropertyBounded = false; } 
                if (this.__cdIsextendmodeForegroundPropertyConstrained === undefined) { this.__cdIsextendmodeForegroundPropertyConstrained = false; } 
                if (this.__cdIsextendmodeForegroundPropertyBounded === undefined) { this.__cdIsextendmodeForegroundPropertyBounded = false; } 
                if (this.__cdIsselectionBackgroundPropertyConstrained === undefined) { this.__cdIsselectionBackgroundPropertyConstrained = false; } 
                if (this.__cdIsselectionBackgroundPropertyBounded === undefined) { this.__cdIsselectionBackgroundPropertyBounded = false; } 
                if (this.__cdIsselectionForegroundPropertyConstrained === undefined) { this.__cdIsselectionForegroundPropertyConstrained = false; } 
                if (this.__cdIsselectionForegroundPropertyBounded === undefined) { this.__cdIsselectionForegroundPropertyBounded = false; } 
                if (this.__cdIslineSelectionPropertyConstrained === undefined) { this.__cdIslineSelectionPropertyConstrained = false; } 
                if (this.__cdIslineSelectionPropertyBounded === undefined) { this.__cdIslineSelectionPropertyBounded = false; } 
                if (this.__cdIsclientBackgroundPropertyConstrained === undefined) { this.__cdIsclientBackgroundPropertyConstrained = false; } 
                if (this.__cdIsclientBackgroundPropertyBounded === undefined) { this.__cdIsclientBackgroundPropertyBounded = false; } 
                if (this.__cdIsclientForegroundPropertyConstrained === undefined) { this.__cdIsclientForegroundPropertyConstrained = false; } 
                if (this.__cdIsclientForegroundPropertyBounded === undefined) { this.__cdIsclientForegroundPropertyBounded = false; } 
                if (this.semaphore === undefined) { this.semaphore = null; } 
                if (this.__cdIszeroSuppressPropertyConstrained === undefined) { this.__cdIszeroSuppressPropertyConstrained = false; } 
                if (this.__cdIszeroSuppressPropertyBounded === undefined) { this.__cdIszeroSuppressPropertyBounded = false; } 
                if (this.__cdIslockModePropertyConstrained === undefined) { this.__cdIslockModePropertyConstrained = false; } 
                if (this.__cdIslockModePropertyBounded === undefined) { this.__cdIslockModePropertyBounded = false; } 
                if (this.lockMode === undefined) { this.lockMode = 0; } 
                if (this.wheelScrollingEnabled === undefined) { this.wheelScrollingEnabled = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyConstrained === undefined) { this.__cdIswheelScrollingEnabledPropertyConstrained = false; } 
                if (this.__cdIswheelScrollingEnabledPropertyBounded === undefined) { this.__cdIswheelScrollingEnabledPropertyBounded = false; } 
                if (this.__cdIshiddenSupportPropertyConstrained === undefined) { this.__cdIshiddenSupportPropertyConstrained = false; } 
                if (this.__cdIshiddenSupportPropertyBounded === undefined) { this.__cdIshiddenSupportPropertyBounded = false; } 
                if (this.__cdIscheckRoutineIDPropertyConstrained === undefined) { this.__cdIscheckRoutineIDPropertyConstrained = false; } 
                if (this.__cdIscheckRoutineIDPropertyBounded === undefined) { this.__cdIscheckRoutineIDPropertyBounded = false; } 
                if (this.__cdIsretryOnErrorPropertyConstrained === undefined) { this.__cdIsretryOnErrorPropertyConstrained = false; } 
                if (this.__cdIsretryOnErrorPropertyBounded === undefined) { this.__cdIsretryOnErrorPropertyBounded = false; } 
                this.__cdEnableEventDispatch = false;
                this.sequentialNumber = 0;
                this.panelID = "";
                this.itemID = "";
                this.tag = "";
                this.initialized = false;
                this.textValueChangedActionCode = "";
                this.rowsStateChangedActionCode = "";
                this.itemStateChangedActionCode = "";
                this.pushedActionCode = "";
                this.initSpreadData = null;
                this.valueOnOpen = "";
                this.editvalueOnOpen = "";
                this.statusOnOpen = 0;
                this.inputAreaOpened = false;
                this.commaEditAllowedArray = [];
                this.decimalpointAllowedArray = [];
                this.enableInputNegativeValueArray = [];
                this.itemArrays = <any> (function(dims) { let allocate = function(dims) { if (dims.length === 0) { return null; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([0, 0]);
                this.envBackgroundEnabled = false;
                this.envFontEnabled = false;
                this.defaultProperties = null;
                this.errorCode = "ERROR_NOTHING";
                this.inputAreaKeyListener = new JCFSpread.InputAreaKeyListener(this);
                this.__rowSelected = false;
                this.inputAreaOpenedPosition = null;
                this.actionCodeInfo = null;
                this.keyAdapter = null;
                this.mouseAdapter = null;
                this.lineSelection = 0;
                this.recordInfo = null;
                this.zeroSuppress = 0;
                this.selectedRowPositions = null;
                this.deselectedRowPositions = null;
                this.hiddenSupport = 1;
                this.checkRoutineID = "";
                this.retryOnError = false;
                this.lockedByGUI = false;
                this.lockedByCJF = false;
                this.refocusable = true;
                this.needSetErrorAttributes = false;
                this.errorAttributesBackup = false;
                this.__cdIsheaderAndColumnPropertyPropertyConstrained = false;
                this.__cdIsheaderAndColumnPropertyPropertyBounded = true;
                this.__cdIsitemIDPropertyConstrained = false;
                this.__cdIsitemIDPropertyBounded = false;
                this.__cdIstagPropertyConstrained = false;
                this.__cdIstagPropertyBounded = false;
                this.__cdIsenvBackgroundEnabledPropertyConstrained = false;
                this.__cdIsenvBackgroundEnabledPropertyBounded = false;
                this.__cdIsenvFontEnabledPropertyConstrained = false;
                this.__cdIsenvFontEnabledPropertyBounded = false;
                this.__cdIsselectionVisiblePropertyConstrained = false;
                this.__cdIsselectionVisiblePropertyBounded = false;
                this.__cdIstextValueChangedActionCodePropertyConstrained = false;
                this.__cdIstextValueChangedActionCodePropertyBounded = false;
                this.__cdIsitemStateChangedActionCodePropertyConstrained = false;
                this.__cdIsitemStateChangedActionCodePropertyBounded = false;
                this.__cdIsrowsStateChangedActionCodePropertyConstrained = false;
                this.__cdIsrowsStateChangedActionCodePropertyBounded = false;
                this.__cdIspushedActionCodePropertyConstrained = false;
                this.__cdIspushedActionCodePropertyBounded = false;
                this.closeMode = false;
                this.__cdIsextendmodeBackgroundPropertyConstrained = false;
                this.__cdIsextendmodeBackgroundPropertyBounded = false;
                this.__cdIsextendmodeForegroundPropertyConstrained = false;
                this.__cdIsextendmodeForegroundPropertyBounded = false;
                this.__cdIsselectionBackgroundPropertyConstrained = false;
                this.__cdIsselectionBackgroundPropertyBounded = false;
                this.__cdIsselectionForegroundPropertyConstrained = false;
                this.__cdIsselectionForegroundPropertyBounded = false;
                this.__cdIslineSelectionPropertyConstrained = false;
                this.__cdIslineSelectionPropertyBounded = false;
                this.__cdIsclientBackgroundPropertyConstrained = false;
                this.__cdIsclientBackgroundPropertyBounded = false;
                this.__cdIsclientForegroundPropertyConstrained = false;
                this.__cdIsclientForegroundPropertyBounded = false;
                this.semaphore = null;
                this.__cdIszeroSuppressPropertyConstrained = false;
                this.__cdIszeroSuppressPropertyBounded = false;
                this.__cdIslockModePropertyConstrained = false;
                this.__cdIslockModePropertyBounded = false;
                this.lockMode = 0;
                this.wheelScrollingEnabled = false;
                this.__cdIswheelScrollingEnabledPropertyConstrained = false;
                this.__cdIswheelScrollingEnabledPropertyBounded = false;
                this.__cdIshiddenSupportPropertyConstrained = false;
                this.__cdIshiddenSupportPropertyBounded = false;
                this.__cdIscheckRoutineIDPropertyConstrained = false;
                this.__cdIscheckRoutineIDPropertyBounded = false;
                this.__cdIsretryOnErrorPropertyConstrained = false;
                this.__cdIsretryOnErrorPropertyBounded = false;
                this.__cdInitBean();
                this.initBeanUser();
            } else throw new Error('invalid overload');
        }

        initBeanUser() {
        }

        public addVetoableChangeListener(listener: com.java.VetoableChangeListener) {
        }

        public removeVetoableChangeListener(listener: com.java.VetoableChangeListener) {
        }

        public addPropertyChangeListener(listener: com.java.PropertyChangeListener) {
        }

        public removePropertyChangeListener(listener: com.java.PropertyChangeListener) {
        }

        fireEvent(eventName: string, listenerMethodName: string, param: any, listeners: com.java.Vector, isMulticast: boolean) {
        }

        public getHeaderAndColumnProperty(): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderAndColumnProperty {
            return null;
        }

        public setHeaderAndColumnProperty(newValue: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderAndColumnProperty) {
        }

        getDefaultHeaderCellProperty(): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty {
            return null;
        }

        getHeaderProperty(): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderProperty {
            return null;
        }

        setHeaderProperty(newValue: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderProperty) {
        }

        getColumnsProperty(): lib.com.fujitsu.jcf.gui.JCFSpreadColumnsProperty {
            return null;
        }

        getDefaultHeaderColumnInfo(): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty {
            return null;
        }

        getDefaultColumnInfo(): lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty {
            return null;
        }

        setColumnsProperty(newValue: lib.com.fujitsu.jcf.gui.JCFSpreadColumnsProperty) {
        }

        public getPanelID(): string {
            return this.panelID;
        }

        public isFocusable(type: number): boolean {
            return false;
        }

        public requestFocus() {
        }

        public hasLogicalFocus(): boolean {
            return false;
        }

        public fireOthersClick(jcfEvent: lib.com.fujitsu.jcf.gui.JCFActionEvent, mouseEvent: com.java.MouseEvent) {
        }

        public fireKey(jcfEvent: lib.com.fujitsu.jcf.gui.JCFActionEvent, keyEvent: com.java.KeyEvent): boolean {
            return false;
        }

        public canFireKey(actionCode: string, keyEvent: com.java.KeyEvent): boolean {
            return true;
        }

        public setFocus$() {
        }

        public focusGained(focusevent: com.java.FocusEvent) {
        }

        public focusLost(focusevent: com.java.FocusEvent) {
        }

        public setFocus$int(type: number) {
        }

        public setFocus(type?: any) {
            if (((typeof type === 'number') || type === null)) {
                return <any>this.setFocus$int(type);
            } else if (type === undefined) {
                return <any>this.setFocus$();
            } else throw new Error('invalid overload');
        }

        public getSequentialNumber(): number {
            return this.sequentialNumber;
        }

        public setSequentialNumber(newSequentialNumber: number) {
        }

        public checkData(): lib.com.fujitsu.jcf.gui.JCFGUIErrorInfo {
            return null;
        }

        setDefaultProperties(defaultProperties: lib.com.fujitsu.jcf.gui.JCFGUIDefaultProperties) {
        }

        public isRuntimeChangeAllowed(): boolean {
            return true;
        }

        public isInputable(): boolean {
            return false;
        }

        public lock() {
        }

        public unlock() {
        }

        public locked() {
        }

        public unlocked() {
        }

        public isModified(): boolean {
            return true;
        }

        public setModified(flag: boolean) {
        }

        public initialize(defaultProperties: lib.com.fujitsu.jcf.gui.JCFGUIDefaultProperties, panelID: string, actionCodeInfo: lib.com.fujitsu.jcf.gui.JCFActionCode, keyAdapter: lib.com.fujitsu.jcf.gui.JCFKeyAdapter, mouseAdapter: lib.com.fujitsu.jcf.gui.JCFMouseAdapter) {
        }

        public saveInitialStatus(jcfguidefaultproperties: lib.com.fujitsu.jcf.gui.JCFGUIDefaultProperties) {
        }

        public restoreInitialStatus() {
        }

        public createDataBean(): lib.com.fujitsu.jcf.gui.JCFItemData {
            return null;
        }

        public setDataAndAttributes(itemlDataBean: lib.com.fujitsu.jcf.gui.JCFItemData) {
        }

        public setData(itemlDataBean: lib.com.fujitsu.jcf.gui.JCFItemData) {
        }

        public getDataAndAttributes(itemlDataBean: lib.com.fujitsu.jcf.gui.JCFItemData, unconditional: boolean): lib.com.fujitsu.jcf.gui.JCFItemData {
            return null;
        }

        public getData(itemlDataBean: lib.com.fujitsu.jcf.gui.JCFItemData, unconditional: boolean): lib.com.fujitsu.jcf.gui.JCFItemData {
            return null;
        }

        initializeCellsString() {
        }

        initializeDataBean(spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData) {
        }

        setSpreadDataBean(dataBean: lib.com.fujitsu.jcf.gui.JCFItemData, attribute: boolean) {
        }

        setCellDataToStringCell(cell: lib.com.fujitsu.caa.CJCell, cellData: lib.com.fujitsu.jcf.gui.JCFSpreadCellData, attribute: number) {
        }

        setCellDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public setCellDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
        }

        public setCellDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.setCellDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.setCellDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        setCellDataToCheckboxCell(cell: lib.com.fujitsu.caa.CJCell, cellData: lib.com.fujitsu.jcf.gui.JCFSpreadCellData, attribute: number) {
        }

        setCellCheckboxDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public setCellCheckboxDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
        }

        public setCellCheckboxDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.setCellCheckboxDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.setCellCheckboxDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        setCellDataToNumberCell(cell: lib.com.fujitsu.caa.CJCell, cellData: lib.com.fujitsu.jcf.gui.JCFSpreadCellData, attribute: number, commaedit: number, maxDecimalDigit: number) {
        }

        setCellNumberDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public setCellNumberDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
        }

        public setCellNumberDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.setCellNumberDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.setCellNumberDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        setCellDataToComboboxCell(cell: lib.com.fujitsu.caa.CJCell, cellData: lib.com.fujitsu.jcf.gui.JCFSpreadCellData, attribute: number) {
        }

        setCellComboboxDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public setCellComboboxDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
        }

        public setCellComboboxDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.setCellComboboxDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.setCellComboboxDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        setCellDataToButtonCell(cell: lib.com.fujitsu.caa.CJCell, cellData: lib.com.fujitsu.jcf.gui.JCFSpreadCellData, attribute: number) {
        }

        setCellButtonDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public setCellButtonDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
        }

        public setCellButtonDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.setCellButtonDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.setCellButtonDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        setCellDataToDateCell(cell: lib.com.fujitsu.caa.CJCell, cellData: lib.com.fujitsu.jcf.gui.JCFSpreadCellData, attribute: number, dateFormatter: lib.com.fujitsu.jcf.gui.JCFSpreadCellDateFormatter) {
        }

        setCellDateDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public setCellDateDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
        }

        public setCellDateDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.setCellDateDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.setCellDateDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        setRowHeaderCellDataAndAttributes(rhcolumn: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        setColumnHeaderCellDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(chcolumn: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public setColumnHeaderCellDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
        }

        public setColumnHeaderCellDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.setColumnHeaderCellDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.setColumnHeaderCellDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        getSpreadDataBean(dataBean: lib.com.fujitsu.jcf.gui.JCFItemData, unconditional: boolean, attribute: boolean): lib.com.fujitsu.jcf.gui.JCFItemData {
            return null;
        }

        setStringCellToCellData(celldata: lib.com.fujitsu.jcf.gui.JCFSpreadCellData, cell: lib.com.fujitsu.caa.CJCell, attribute: number) {
        }

        getCellDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public getCellDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
        }

        public getCellDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.getCellDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.getCellDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        setCheckboxCellToCellData(celldata: lib.com.fujitsu.jcf.gui.JCFSpreadCellData, cell: lib.com.fujitsu.caa.CJCell, attribute: number) {
        }

        getCellCheckboxDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public getCellCheckboxDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
        }

        public getCellCheckboxDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.getCellCheckboxDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.getCellCheckboxDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        setNumberCellToCellData(celldata: lib.com.fujitsu.jcf.gui.JCFSpreadCellData, cell: lib.com.fujitsu.caa.CJCell, attribute: number) {
        }

        getCellNumberDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public getCellNumberDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
        }

        public getCellNumberDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.getCellNumberDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.getCellNumberDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        setComboboxCellToCellData(celldata: lib.com.fujitsu.jcf.gui.JCFSpreadCellData, cell: lib.com.fujitsu.caa.CJCell, attribute: number) {
        }

        getCellComboboxDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public getCellComboboxDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
        }

        public getCellComboboxDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.getCellComboboxDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.getCellComboboxDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        setButtonCellToCellData(cellData: lib.com.fujitsu.jcf.gui.JCFSpreadCellData, cell: lib.com.fujitsu.caa.CJCell, attribute: number) {
        }

        getCellButtonDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public getCellButtonDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
        }

        public getCellButtonDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.getCellButtonDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.getCellButtonDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        setDateCellToCellData(celldata: lib.com.fujitsu.jcf.gui.JCFSpreadCellData, cell: lib.com.fujitsu.caa.CJCell, attribute: number, dateFormatter: lib.com.fujitsu.jcf.gui.JCFSpreadCellDateFormatter) {
        }

        getCellDateDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public getCellDateDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
        }

        public getCellDateDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.getCellDateDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.getCellDateDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        public getRowIndex(row: number): number {
            const recinf: lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo = this.recordInfo;
            if (recinf == null)return row; else return recinf.getRowIndex(this, row);
        }

        public getColumnIndex(column: string): number {
            const recinf: lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo = this.recordInfo;
            if (recinf == null)return /* parseInt */parseInt(column); else return recinf.getColumnIndex(column);
        }

        getRowHeaderCellDataAndAttributes(rhcolumn: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        getColumnHeaderCellDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(chcolumn: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public getColumnHeaderCellDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
        }

        public getColumnHeaderCellDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.getColumnHeaderCellDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.getColumnHeaderCellDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        insertNumberSeparator$int$java_lang_String(commaedit: number, value: string): string {
            return null;
        }

        public insertNumberSeparator$int$int$java_lang_String(commaedit: number, maxDecimalDigit: number, value: string): string {
            return null;
        }

        public insertNumberSeparator(commaedit?: any, maxDecimalDigit?: any, value?: any): string {
            if (((typeof commaedit === 'number') || commaedit === null) && ((typeof maxDecimalDigit === 'number') || maxDecimalDigit === null) && ((typeof value === 'string') || value === null)) {
                return <any>this.insertNumberSeparator$int$int$java_lang_String(commaedit, maxDecimalDigit, value);
            } else if (((typeof commaedit === 'number') || commaedit === null) && ((typeof maxDecimalDigit === 'string') || maxDecimalDigit === null) && value === undefined) {
                return <any>this.insertNumberSeparator$int$java_lang_String(commaedit, maxDecimalDigit);
            } else throw new Error('invalid overload');
        }

        insertSeparator$int$java_lang_String(column: number, value: string): string {
            return null;
        }

        public insertSeparator$java_lang_String$java_lang_String(column: string, value: string): string {
            return null;
        }

        public insertSeparator(column?: any, value?: any): string {
            if (((typeof column === 'string') || column === null) && ((typeof value === 'string') || value === null)) {
                return <any>this.insertSeparator$java_lang_String$java_lang_String(column, value);
            } else if (((typeof column === 'number') || column === null) && ((typeof value === 'string') || value === null)) {
                return <any>this.insertSeparator$int$java_lang_String(column, value);
            } else throw new Error('invalid overload');
        }

        removeSeparator(value: string): string {
            return null;
        }

        public getItemID(): string {
            return this.itemID;
        }

        public setItemID(newValue: string) {
        }

        public getTag(): string {
            return this.tag;
        }

        public setTag(newValue: string) {
        }

        public isEnvBackgroundEnabled(): boolean {
            return this.envBackgroundEnabled;
        }

        public setEnvBackgroundEnabled(newValue: boolean) {
        }

        public isEnvFontEnabled(): boolean {
            return this.envFontEnabled;
        }

        public setEnvFontEnabled(newValue: boolean) {
        }

        public isSelectionVisible(): boolean {
            return false;
        }

        public setSelectionVisible(visible: boolean) {
        }

        public getTextValueChangedActionCode(): string {
            return this.textValueChangedActionCode;
        }

        public setTextValueChangedActionCode(code: string) {
        }

        public getItemStateChangedActionCode(): string {
            return this.itemStateChangedActionCode;
        }

        public setItemStateChangedActionCode(code: string) {
        }

        public getRowsStateChangedActionCode(): string {
            return this.rowsStateChangedActionCode;
        }

        public setRowsStateChangedActionCode(code: string) {
        }

        public getPushedActionCode(): string {
            return this.pushedActionCode;
        }

        public setPushedActionCode(code: string) {
        }

        getViewport(): lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition {
            return null;
        }

        setViewport(pos: lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition) {
        }

        changeAllColumnsInputStyleToOverTheSpot() {
        }

        changeColumnInputStyleToOverTheSpot(column: number) {
        }

        public setColumnCount(column: number) {
        }

        createColumnProperties(column: number) {
        }

        public setHeaderColumns(hcolumn: number) {
        }

        createHeaderColumnProperties(hcolumn: number) {
        }

        public getColumnInformationBackground(column: number): com.java.Color {
            return null;
        }

        public setColumnInformationBackground$int$com_java_Color(column: number, color: com.java.Color) {
        }

        jcfSetColumnInformationBackground(column: string, background: com.java.Color) {
        }

        public setColumnInformationBackground$java_lang_String$com_java_Color(column: string, background: com.java.Color) {
        }

        public setColumnInformationBackground(column?: any, background?: any) {
            if (((typeof column === 'string') || column === null) && ((background != null && background instanceof <any>com.java.Color) || background === null)) {
                return <any>this.setColumnInformationBackground$java_lang_String$com_java_Color(column, background);
            } else if (((typeof column === 'number') || column === null) && ((background != null && background instanceof <any>com.java.Color) || background === null)) {
                return <any>this.setColumnInformationBackground$int$com_java_Color(column, background);
            } else throw new Error('invalid overload');
        }

        public getColumnInformationForeground(column: number): com.java.Color {
            return null;
        }

        public setColumnInformationForeground$int$com_java_Color(column: number, color: com.java.Color) {
        }

        jcfSetColumnInformationForeground(column: string, foreground: com.java.Color) {
        }

        public setColumnInformationForeground$java_lang_String$com_java_Color(column: string, foreground: com.java.Color) {
        }

        public setColumnInformationForeground(column?: any, foreground?: any) {
            if (((typeof column === 'string') || column === null) && ((foreground != null && foreground instanceof <any>com.java.Color) || foreground === null)) {
                return <any>this.setColumnInformationForeground$java_lang_String$com_java_Color(column, foreground);
            } else if (((typeof column === 'number') || column === null) && ((foreground != null && foreground instanceof <any>com.java.Color) || foreground === null)) {
                return <any>this.setColumnInformationForeground$int$com_java_Color(column, foreground);
            } else throw new Error('invalid overload');
        }

        jcfSetColumnInformationFont(column: string, font: com.java.Font) {
        }

        public setColumnInformationFont(column: string, font: com.java.Font) {
        }

        jcfSetColumnInformationEditable(column: string, editable: boolean) {
        }

        public setColumnInformationEditable(column: string, editable: boolean) {
        }

        jcfSetColumnInformationAlignmentHorizontal(column: string, align: number) {
        }

        public setColumnInformationAlignmentHorizontal(column: string, align: number) {
        }

        jcfSetColumnInformationAlignmentVertical(column: string, align: number) {
        }

        public setColumnInformationAlignmentVertical(column: string, align: number) {
        }

        public getHeaderColumnInformationBackground(hcolumn: number): com.java.Color {
            return null;
        }

        public setHeaderColumnInformationBackground(hcolumn: number, color: com.java.Color) {
        }

        public getHeaderColumnInformationForeground(hcolumn: number): com.java.Color {
            return null;
        }

        public setHeaderColumnInformationForeground(hcolumn: number, color: com.java.Color) {
        }

        public getColumnType$int(column: number): number {
            return 0;
        }

        public setColumnType$int$int(column: number, type: number) {
        }

        jcfSetColumnType(column: string, type: number) {
        }

        public getColumnType$java_lang_String(column: string): number {
            return 0;
        }

        public getColumnType(column?: any): number {
            if (((typeof column === 'string') || column === null)) {
                return <any>this.getColumnType$java_lang_String(column);
            } else if (((typeof column === 'number') || column === null)) {
                return <any>this.getColumnType$int(column);
            } else throw new Error('invalid overload');
        }

        public setColumnType$java_lang_String$int(column: string, type: number) {
        }

        public setColumnType(column?: any, type?: any) {
            if (((typeof column === 'string') || column === null) && ((typeof type === 'number') || type === null)) {
                return <any>this.setColumnType$java_lang_String$int(column, type);
            } else if (((typeof column === 'number') || column === null) && ((typeof type === 'number') || type === null)) {
                return <any>this.setColumnType$int$int(column, type);
            } else throw new Error('invalid overload');
        }

        isColumnInformationInvalidValueEnable(column: number): boolean {
            switch((this.getColumnType$int(column))) {
            case 1:
            case 2:
            case 3:
            }
            return false;
        }

        setColumnInformationInvalidValueEnable(column: number, newValue: boolean) {
            switch((this.getColumnType$int(column))) {
            case 1:
            case 2:
            case 3:
                break;
            }
        }

        getColumnInformationMaxByteLength$int(column: number): number {
            switch((this.getColumnType$int(column))) {
            case 1:
            case 2:
            }
            return -1;
        }

        public getColumnInformationMaxByteLength$java_lang_String(column: string): number {
            switch((this.getColumnType$java_lang_String(column))) {
            case 1:
            case 2:
            }
            return -1;
        }

        public getColumnInformationMaxByteLength(column?: any): number {
            if (((typeof column === 'string') || column === null)) {
                return <any>this.getColumnInformationMaxByteLength$java_lang_String(column);
            } else if (((typeof column === 'number') || column === null)) {
                return <any>this.getColumnInformationMaxByteLength$int(column);
            } else throw new Error('invalid overload');
        }

        setColumnInformationMaxByteLength$int$int(column: number, newValue: number) {
            switch((this.getColumnType$int(column))) {
            case 1:
            case 2:
                break;
            }
        }

        jcfSetColumnInformationMaxByteLength(column: string, newValue: number) {
            switch((this.getColumnType$java_lang_String(column))) {
            case 1:
            case 2:
                break;
            }
        }

        public setColumnInformationMaxByteLength$java_lang_String$int(column: string, newValue: number) {
            this.jcfSetColumnInformationMaxByteLength(column, newValue);
            const recinfo: lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo = this.recordInfo;
            if (recinfo != null){
                const colinfo: lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty = recinfo.getColumnInfo(column);
                if (colinfo != null && colinfo.getMaxByteLength() !== newValue)colinfo.setMaxByteLength(newValue);
            }
        }

        public setColumnInformationMaxByteLength(column?: any, newValue?: any) {
            if (((typeof column === 'string') || column === null) && ((typeof newValue === 'number') || newValue === null)) {
                return <any>this.setColumnInformationMaxByteLength$java_lang_String$int(column, newValue);
            } else if (((typeof column === 'number') || column === null) && ((typeof newValue === 'number') || newValue === null)) {
                return <any>this.setColumnInformationMaxByteLength$int$int(column, newValue);
            } else throw new Error('invalid overload');
        }

        getColumnInformationLabel(column: number): string {
            switch((this.getColumnType$int(column))) {
            case 8:
            case 10:
            case 7:
            case 9:
            default:
                return null;
            }
        }

        setColumnInformationLabel$int$java_lang_String(column: number, label: string) {
        }

        jcfSetColumnInformationLabel(column: string, label: string) {
        }

        public setColumnInformationLabel$java_lang_String$java_lang_String(column: string, label: string) {
            this.jcfSetColumnInformationLabel(column, label);
            const recinfo: lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo = this.recordInfo;
            if (recinfo != null && label != null){
                const colinfo: lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty = recinfo.getColumnInfo(column);
                if (colinfo != null && !(colinfo.getLabel() === label))colinfo.setLabel(label);
            }
        }

        public setColumnInformationLabel(column?: any, label?: any) {
            if (((typeof column === 'string') || column === null) && ((typeof label === 'string') || label === null)) {
                return <any>this.setColumnInformationLabel$java_lang_String$java_lang_String(column, label);
            } else if (((typeof column === 'number') || column === null) && ((typeof label === 'string') || label === null)) {
                return <any>this.setColumnInformationLabel$int$java_lang_String(column, label);
            } else throw new Error('invalid overload');
        }

        getColumnInformationSelectableElements$int(column: number): lib.com.fujitsu.jcf.gui.JCFSelectableElement[] {
            const recinfo: lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo = this.recordInfo;
            if (recinfo != null){
                const colname: string = recinfo.getColumnName(column);
                if (colname != null)return this.getColumnInformationSelectableElements$java_lang_String(colname);
            }
            switch((this.getColumnType$int(column))) {
            case 5:
            case 11:
                return this.itemArrays[column];
            }
            return null;
        }

        public getColumnInformationSelectableElements$java_lang_String(column: string): lib.com.fujitsu.jcf.gui.JCFSelectableElement[] {
            return null;
        }

        public getColumnInformationSelectableElements(column?: any): lib.com.fujitsu.jcf.gui.JCFSelectableElement[] {
            if (((typeof column === 'string') || column === null)) {
                return <any>this.getColumnInformationSelectableElements$java_lang_String(column);
            } else if (((typeof column === 'number') || column === null)) {
                return <any>this.getColumnInformationSelectableElements$int(column);
            } else throw new Error('invalid overload');
        }

        setColumnInformationSelectableElements$int$com_fujitsu_jcf_gui_JCFSelectableElement_A(column: number, items: lib.com.fujitsu.jcf.gui.JCFSelectableElement[]) {
        }

        jcfSetColumnInformationSelectableElements(column: string, items: lib.com.fujitsu.jcf.gui.JCFSelectableElement[]) {
        }

        public setColumnInformationSelectableElements$java_lang_String$com_fujitsu_jcf_gui_JCFSelectableElement_A(column: string, items: lib.com.fujitsu.jcf.gui.JCFSelectableElement[]) {
            this.jcfSetColumnInformationSelectableElements(column, items);
            const recinfo: lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo = this.recordInfo;
            if (recinfo != null){
                const colinfo: lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty = recinfo.getColumnInfo(column);
                if (colinfo != null && colinfo.getSelectableElements() !== items)colinfo.setSelectableElements(items);
            }
        }

        public setColumnInformationSelectableElements(column?: any, items?: any) {
            if (((typeof column === 'string') || column === null) && ((items != null && items instanceof <any>Array && (items.length == 0 || items[0] == null ||(items[0] != null && items[0] instanceof <any>lib.com.fujitsu.jcf.gui.JCFSelectableElement))) || items === null)) {
                return <any>this.setColumnInformationSelectableElements$java_lang_String$com_fujitsu_jcf_gui_JCFSelectableElement_A(column, items);
            } else if (((typeof column === 'number') || column === null) && ((items != null && items instanceof <any>Array && (items.length == 0 || items[0] == null ||(items[0] != null && items[0] instanceof <any>lib.com.fujitsu.jcf.gui.JCFSelectableElement))) || items === null)) {
                return <any>this.setColumnInformationSelectableElements$int$com_fujitsu_jcf_gui_JCFSelectableElement_A(column, items);
            } else throw new Error('invalid overload');
        }

        isColumnInformationCommaEditAllowed(column: number): boolean {
            if (this.getColumnType$int(column) === 2)return this.commaEditAllowedArray[column]; else return false;
        }

        setColumnInformationCommaEditAllowed$int$boolean(column: number, allowed: boolean) {
            if (this.getColumnType$int(column) === 2){
                this.commaEditAllowedArray[column] = allowed;
            }
        }

        jcfSetColumnInformationCommaEditAllowed(column: string, allowed: boolean) {
            if (this.getColumnType$java_lang_String(column) === 2){
            }
        }

        public setColumnInformationCommaEditAllowed$java_lang_String$boolean(column: string, allowed: boolean) {
            this.jcfSetColumnInformationCommaEditAllowed(column, allowed);
            const recinfo: lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo = this.recordInfo;
            if (recinfo != null){
                const colinfo: lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty = recinfo.getColumnInfo(column);
                if (colinfo != null && colinfo.isCommaEditAllowed() !== allowed)colinfo.setCommaEditAllowed(allowed);
            }
        }

        public setColumnInformationCommaEditAllowed(column?: any, allowed?: any) {
            if (((typeof column === 'string') || column === null) && ((typeof allowed === 'boolean') || allowed === null)) {
                return <any>this.setColumnInformationCommaEditAllowed$java_lang_String$boolean(column, allowed);
            } else if (((typeof column === 'number') || column === null) && ((typeof allowed === 'boolean') || allowed === null)) {
                return <any>this.setColumnInformationCommaEditAllowed$int$boolean(column, allowed);
            } else throw new Error('invalid overload');
        }

        isColumnInformationEnableInputNegativeValue(column: number): boolean {
            if (this.getColumnType$int(column) === 2)return this.enableInputNegativeValueArray[column]; else return false;
        }

        setColumnInformationEnableInputNegativeValue$int$boolean(column: number, allowed: boolean) {
            if (this.getColumnType$int(column) === 2){
                this.enableInputNegativeValueArray[column] = allowed;
            }
        }

        jcfSetColumnInformationEnableInputNegativeValue(column: string, allowed: boolean) {
        }

        public setColumnInformationEnableInputNegativeValue$java_lang_String$boolean(column: string, allowed: boolean) {
            this.jcfSetColumnInformationEnableInputNegativeValue(column, allowed);
            const recinfo: lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo = this.recordInfo;
            if (recinfo != null){
                const colinfo: lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty = recinfo.getColumnInfo(column);
                if (colinfo != null && colinfo.isEnableInputNegativeValue() !== allowed)colinfo.setEnableInputNegativeValue(allowed);
            }
        }

        public setColumnInformationEnableInputNegativeValue(column?: any, allowed?: any) {
            if (((typeof column === 'string') || column === null) && ((typeof allowed === 'boolean') || allowed === null)) {
                return <any>this.setColumnInformationEnableInputNegativeValue$java_lang_String$boolean(column, allowed);
            } else if (((typeof column === 'number') || column === null) && ((typeof allowed === 'boolean') || allowed === null)) {
                return <any>this.setColumnInformationEnableInputNegativeValue$int$boolean(column, allowed);
            } else throw new Error('invalid overload');
        }

        isColumnInformationDecimalpointAllowed(column: number): boolean {
            if (this.getColumnType$int(column) === 2)return this.decimalpointAllowedArray[column]; else return false;
        }

        setColumnInformationDecimalpointAllowed$int$boolean(column: number, allowed: boolean) {
        }

        jcfSetColumnInformationDecimalpointAllowed(column: string, allowed: boolean) {
        }

        public setColumnInformationDecimalpointAllowed$java_lang_String$boolean(column: string, allowed: boolean) {
            this.jcfSetColumnInformationDecimalpointAllowed(column, allowed);
            const recinfo: lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo = this.recordInfo;
            if (recinfo != null){
                const colinfo: lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty = recinfo.getColumnInfo(column);
                if (colinfo != null && colinfo.isDecimalpointAllowed() !== allowed)colinfo.setDecimalpointAllowed(allowed);
            }
        }

        public setColumnInformationDecimalpointAllowed(column?: any, allowed?: any) {
            if (((typeof column === 'string') || column === null) && ((typeof allowed === 'boolean') || allowed === null)) {
                return <any>this.setColumnInformationDecimalpointAllowed$java_lang_String$boolean(column, allowed);
            } else if (((typeof column === 'number') || column === null) && ((typeof allowed === 'boolean') || allowed === null)) {
                return <any>this.setColumnInformationDecimalpointAllowed$int$boolean(column, allowed);
            } else throw new Error('invalid overload');
        }

        adjustEnableChars(numfield: lib.com.fujitsu.caa.CJFieldNumericalValue, adjustChar: string, allowed: boolean) {
        }

        getSelectedSelectableElement$int$java_lang_String(column: number, selectedStr: string): lib.com.fujitsu.jcf.gui.JCFSelectableElement {
            const selectedIndex: number = -1;
            const items: lib.com.fujitsu.jcf.gui.JCFSelectableElement[] = this.itemArrays[column];
            for(let i: number = 0; i < items.length; i++) {{
            };}
            return items[selectedIndex];
        }

        public getSelectedSelectableElement$java_lang_String$java_lang_String(column: string, selectedStr: string): lib.com.fujitsu.jcf.gui.JCFSelectableElement {
            return null;
        }

        public getSelectedSelectableElement(column?: any, selectedStr?: any): lib.com.fujitsu.jcf.gui.JCFSelectableElement {
            if (((typeof column === 'string') || column === null) && ((typeof selectedStr === 'string') || selectedStr === null)) {
                return <any>this.getSelectedSelectableElement$java_lang_String$java_lang_String(column, selectedStr);
            } else if (((typeof column === 'number') || column === null) && ((typeof selectedStr === 'string') || selectedStr === null)) {
                return <any>this.getSelectedSelectableElement$int$java_lang_String(column, selectedStr);
            } else throw new Error('invalid overload');
        }

        getSelectedCellsPosition(): lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition[] {
            return null;
        }

        jcfGetSelectedCellsIndexPosition(): lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition[] {
            return null;
        }

        getSelectedRowsPosition(): lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition[] {
            return null;
        }

        jcfGetSelectedRowsIndexPosition(): lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition[] {
            return null;
        }

        getRealRowCount(): number {
            return 0;
        }

        public getRowCount(): number {
            const METHOD_NAME: string = "getRowCount()";
            const rowCount: number = super.getRecordCount();
            return rowCount;
        }

        public setRowCount(row: number) {
        }

        public setRecordCount(record: number) {
        }

        jcfSetRecordCount(record: number) {
        }

        checkNumericalValue$int$com_fujitsu_caa_CJFieldNumericalValue(column: number, numField: lib.com.fujitsu.caa.CJFieldNumericalValue) {
        }

        public checkNumericalValue$java_lang_String$com_fujitsu_caa_CJFieldNumericalValue$com_java_AWTEvent(column: string, numField: lib.com.fujitsu.caa.CJFieldNumericalValue, event: com.java.AWTEvent) {
        }

        public checkNumericalValue(column?: any, numField?: any, event?: any) {
            if (((typeof column === 'string') || column === null) && ((numField != null && numField instanceof <any>lib.com.fujitsu.caa.CJFieldNumericalValue) || numField === null) && ((event != null && event instanceof <any>com.java.AWTEvent) || event === null)) {
                return <any>this.checkNumericalValue$java_lang_String$com_fujitsu_caa_CJFieldNumericalValue$com_java_AWTEvent(column, numField, event);
            } else if (((typeof column === 'number') || column === null) && ((numField != null && numField instanceof <any>lib.com.fujitsu.caa.CJFieldNumericalValue) || numField === null) && event === undefined) {
                return <any>this.checkNumericalValue$int$com_fujitsu_caa_CJFieldNumericalValue(column, numField);
            } else throw new Error('invalid overload');
        }

        jcfGetColumnName(pos: lib.com.fujitsu.caa.CJPosition): string {
            return null;
        }

        public itemStateChanged(event: lib.com.fujitsu.caa.CJCellItemEvent) {
        }

        public actionPerformed(event: lib.com.fujitsu.caa.CJCellActionEvent) {
        }

        public inputAreaClosed(event: lib.com.fujitsu.caa.event.CJCellEditEvent) {
        }

        public inputAreaOpen(event: lib.com.fujitsu.caa.CJSpreadActionEvent) {
        }

        public inputAreaClose(event: lib.com.fujitsu.caa.CJSpreadActionEvent) {
        }

        public rowSelected(event: lib.com.fujitsu.caa.CJSpreadActionEvent) {
        }

        public rowDeselected(event: lib.com.fujitsu.caa.CJSpreadActionEvent) {
        }

        public static getInputTrigger(event: lib.com.fujitsu.caa.CJSpreadActionEvent): com.java.InputEvent {
            return null;
        }

        public allDeselected(event: lib.com.fujitsu.caa.CJSpreadActionEvent) {
        }

        public allSelected(event: lib.com.fujitsu.caa.CJSpreadActionEvent) {
        }

        public columnDeselected(event: lib.com.fujitsu.caa.CJSpreadActionEvent) {
        }

        public columnSelected(event: lib.com.fujitsu.caa.CJSpreadActionEvent) {
        }

        public cursorMoved(event: lib.com.fujitsu.caa.CJSpreadActionEvent) {
        }

        public keyPressed(event: com.java.KeyEvent) {
        }

        static isSameInputOperation(event1: com.java.InputEvent, event2: com.java.InputEvent): boolean {
            return false;
        }

        public keyReleased(event: com.java.KeyEvent) {
        }

        public keyTyped(keyevent: com.java.KeyEvent) {
        }

        public mouseClicked(event: com.java.MouseEvent) {
        }

        public mouseEntered(mouseevent: com.java.MouseEvent) {
        }

        public mouseExited(mouseevent: com.java.MouseEvent) {
        }

        public mousePressed(event: com.java.MouseEvent) {
            const METHOD_NAME: string = "mousePressed(MouseEvent)";
        }

        public mouseReleased(event: com.java.MouseEvent) {
            const METHOD_NAME: string = "mouseReleased(MouseEvent)";
        }

        jcfRowSelected() {
            const METHOD_NAME: string = "jcfRowSelected()";
            if (this.__rowSelected){
                const selRowsList: Array<any> = this.selectedRowPositions;
                const deselRowsList: Array<any> = this.deselectedRowPositions;
                const additionalInfo: lib.com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo = null;
                this.__rowSelected = false;
                this.selectedRowPositions = null;
                this.deselectedRowPositions = null;
                try {
                } catch(ignore) {
                }
                if (additionalInfo != null){
                }
            }
        }

        callJCFListener(actionCode: string, additionalInfo: lib.com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo) {
            const METHOD_NAME: string = "callJCFListener(String, JCFSpreadAdditionalInfo)";
            if (actionCode == null || actionCode.length === 0){
            }
            const jcfEvent: lib.com.fujitsu.jcf.gui.JCFActionEvent = new lib.com.fujitsu.jcf.gui.JCFActionEvent(this, this.getSequentialNumber(), actionCode, this.getItemID(), this.getPanelID(), null);
            this.fireJCFAction(jcfEvent);
        }

        public destroy() {
        }

        public addJCFActionListener(listener: lib.com.fujitsu.jcf.gui.JCFActionListener) {
        }

        public removeJCFActionListener(listener: lib.com.fujitsu.jcf.gui.JCFActionListener) {
        }

        fireJCFAction(event: lib.com.fujitsu.jcf.gui.JCFActionEvent) {
        }

        public canFireOthersClick(): boolean {
            return true;
        }

        public getActionCodeInfo(): lib.com.fujitsu.jcf.gui.JCFActionCode {
            return this.actionCodeInfo;
        }

        public getKeyAdapter(): lib.com.fujitsu.jcf.gui.JCFKeyAdapter {
            return this.keyAdapter;
        }

        public getMouseAdapter(): lib.com.fujitsu.jcf.gui.JCFMouseAdapter {
            return this.mouseAdapter;
        }

        jcfSetRowColumnCount(rows: number, columns: number) {
        }

        public getExtendmodeBackground(): com.java.Color {
            return null;
        }

        public getExtendmodeForeground(): com.java.Color {
            return null;
        }

        public setExtendmodeBackground(newValue: com.java.Color) {
        }

        public setExtendmodeForeground(newValue: com.java.Color) {
        }

        public getSelectionBackground(): com.java.Color {
            return null;
        }

        public getSelectionForeground(): com.java.Color {
            return null;
        }

        public setSelectionBackground(newValue: com.java.Color) {
        }

        public setSelectionForeground(newValue: com.java.Color) {
        }

        public getLineSelection(): number {
            const value: number = this.lineSelection;
            return value;
        }

        public setLineSelection(newValue: number) {
        }

        changeLineSelection(newValue: number) {
            switch((newValue)) {
            default:
                break;
            case 0:
            case 1:
                break;
            case 2:
            }
        }

        public setGridDrag(newValue: number) {
        }

        public getCellString(record: number, column: string): string {
            return null;
        }

        public setCellString(record: number, column: string, string: string) {
        }

        public getCellObject(record: number, column: string): any {
            return null;
        }

        public setCellObject(record: number, column: string, object: any) {
        }

        getColumnInformationButtonAction(column: string): string {
            return null;
        }

        setColumnInformationButtonAction(column: string, code: string) {
        }

        getColumnInformationItemAction(column: string): string {
            return null;
        }

        setColumnInformationItemAction(column: string, code: string) {
        }

        getColumnInformationTextAction(column: string): string {
            return null;
        }

        setColumnInformationTextAction(column: string, code: string) {
        }

        jcfAddRecord() {
        }

        initRow(row: number) {
        }

        public addRow() {
        }

        public addRecord() {
        }

        jcfInsertRecord(record: number) {
        }

        public insertRow(row: number) {
        }

        public insertRecord(record: number) {
        }

        jcfRemoveRecord(record: number) {
        }

        public removeRow(row: number) {
        }

        public removeRecord(record: number) {
        }

        jcfGetColumnInformationDateFormatter(column: string, flag: number): lib.com.fujitsu.jcf.gui.JCFSpreadCellDateFormatter {
            return null;
        }

        getColumnInformationDatePattern(column: string): string {
            return null;
        }

        jcfSetColumnInformationDatePattern(column: string, pattern: string) {
        }

        setColumnInformationDatePattern(column: string, pattern: string) {
        }

        public getClientBackground(): com.java.Color {
            return this.clientBackground;
        }

        public setClientBackground(newValue: com.java.Color) {
        }

        public getClientForeground(): com.java.Color {
            return this.clientForeground;
        }

        public setClientForeground(newValue: com.java.Color) {
        }

        jcfGetHeaderColumns(): number {
            return 0;
        }

        jcfGetColumnInformationNumberFormatter(column: string, flag: number): lib.com.fujitsu.jcf.gui.JCFSpreadCellNumberFormatter {
            return null;
        }

        getColumnInformationNumberPattern(column: string): string {
            const formatter: lib.com.fujitsu.jcf.gui.JCFSpreadCellNumberFormatter = this.jcfGetColumnInformationNumberFormatter(column, 0);
            if (formatter == null)return "#,##0.####;-#,##0.####"; else return formatter.getPattern();
        }

        jcfSetColumnInformationNumberPattern(column: string, pattern: string) {
        }

        setColumnInformationNumberPattern(column: string, pattern: string) {
            this.jcfSetColumnInformationNumberPattern(column, pattern);
        }

        jcfGetColumnInformationMaxIntegerDigit(column: string): number {
            const formatter: lib.com.fujitsu.jcf.gui.JCFSpreadCellNumberFormatter = this.jcfGetColumnInformationNumberFormatter(column, 0);
            if (formatter != null)return formatter.getColumnMaxIntegerDigit(); else return -1;
        }

        getColumnInformationMaxIntegerDigit(column: string): number {
            return 0;
        }

        jcfSetColumnInformationMaxIntegerDigit(column: string, integerDigit: number) {
        }

        setColumnInformationMaxIntegerDigit(column: string, integerDigit: number) {
        }

        jcfGetColumnInformationMaxDecimalDigit(column: string): number {
            return -1;
        }

        getColumnInformationMaxDecimalDigit(column: string): number {
            return 0;
        }

        jcfSetColumnInformationMaxDecimalDigit(column: string, decimalDigit: number) {
        }

        setColumnInformationMaxDecimalDigit(column: string, decimalDigit: number) {
        }

        public isInputAreaOpened(): boolean {
            return this.inputAreaOpened;
        }

        public getInputAreaOpenedPosition(): lib.com.fujitsu.caa.CJPosition {
            return this.inputAreaOpenedPosition;
        }

        public getLastSorted(): string {
            return null;
        }

        public getLastSortOrder(): number {
            return 0;
        }

        public setLastSorted(column: string, order: number) {
        }

        static getDisplayPos(spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, row: number): number {
            const vr: number = -1;
            return vr;
        }

        public setEnabled(enabled: boolean) {
        }

        createIndexPos(dispPos: lib.com.fujitsu.caa.CJPosition): lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition {
            return null;
        }

        setDigitLength(field: lib.com.fujitsu.caa.CJFieldNumericalValue, pos: lib.com.fujitsu.caa.CJCellPosition) {
        }

        static setDigitLength(field: lib.com.fujitsu.caa.CJFieldNumericalValue, maxInt: number, maxFra: number) {
        }

        createSemaphore() {
            this.semaphore = new JCFSpread.JCFSpreadSemaphore(this);
        }

        getSemaphore(): JCFSpread.JCFSpreadSemaphore {
            return this.semaphore;
        }

        clearSemaphore() {
            this.semaphore = null;
        }

        isCursorMove(e: lib.com.fujitsu.caa.event.CJCellEditEvent, trigger: com.java.AWTEvent): boolean {
            return false;
        }

        static getClickedCellPosition(spread: lib.com.fujitsu.caa.CJSpread, x: number, y: number): lib.com.fujitsu.caa.CJPosition {
            return null;
        }

        isRowSelect(trigger: com.java.AWTEvent): boolean {
            return false;
        }

        static isOtherSelectedRow(spread: lib.com.fujitsu.caa.CJSpread, row: number): boolean {
            return false;
        }

        static getClickedHeaderCellPosition(spread: lib.com.fujitsu.caa.CJSpread, x: number, y: number): lib.com.fujitsu.caa.CJPosition {
            return null;
        }

        memorySelected() {
        }

        getSelectedDataBean(spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData) {
        }

        public getZeroSuppress(): number {
            return this.zeroSuppress;
        }

        public setZeroSuppress(newValue: number) {
        }

        public processRetryMouseClickEvent(e: com.java.MouseEvent) {
        }

        public getLockMode(): number {
            const value: number = this.lockMode;
            return value;
        }

        public setLockMode(lockMode: number) {
        }

        isChild(comp: com.java.Component): boolean {
            return false;
        }

        public isWheelScrollingEnabled(): boolean {
            return this.wheelScrollingEnabled;
        }

        public setWheelScrollingEnabled(wheelScrollingEnabled: boolean) {
            if (this.wheelScrollingEnabled){
            } else {
            }
        }

        public isColumnVisible(column: string): boolean {
            return true;
        }

        public setColumnVisible(column: string, visible: boolean) {
        }

        jcfIsRecordVisible(record: number): boolean {
            if (this.recordInfo == null)return true; else return this.isRecordVisible(record);
        }

        public isRecordVisible(record: number): boolean {
            return true;
        }

        public setRecordVisible(record: number, visible: boolean) {
        }

        public getHiddenSupport(): number {
            const value: number = this.hiddenSupport;
            return value;
        }

        public setHiddenSupport(hiddenSupport: number) {
        }

        public getCheckRoutineID(): string {
            return this.checkRoutineID;
        }

        public setCheckRoutineID(newValue: string) {
        }

        public isRetryOnError(): boolean {
            return this.retryOnError;
        }

        public setRetryOnError(newValue: boolean) {
        }

        public getCheckValue(): string {
            return "";
        }

        getInputAreaString(inputAreaPos: lib.com.fujitsu.caa.CJPosition): string {
            return null;
        }

        public checkDataByRoutinesID(): lib.com.fujitsu.jcf.gui.JCFGUIErrorInfo {
            return null;
        }

        setErrorAttributes$boolean(error: boolean) {
        }

        public setErrorAttributes$com_fujitsu_caa_CJCellPosition$com_fujitsu_caa_CJCell$boolean(pos: lib.com.fujitsu.caa.CJCellPosition, cell: lib.com.fujitsu.caa.CJCell, error: boolean) {
        }

        public setErrorAttributes(pos?: any, cell?: any, error?: any) {
            if (((pos != null && pos instanceof <any>lib.com.fujitsu.caa.CJCellPosition) || pos === null) && ((cell != null && cell instanceof <any>lib.com.fujitsu.caa.CJCell) || cell === null) && ((typeof error === 'boolean') || error === null)) {
                return <any>this.setErrorAttributes$com_fujitsu_caa_CJCellPosition$com_fujitsu_caa_CJCell$boolean(pos, cell, error);
            } else if (((pos != null && pos instanceof <any>lib.com.fujitsu.caa.CJCell) || pos === null) && ((typeof cell === 'boolean') || cell === null) && error === undefined) {
                return <any>this.setErrorAttributes$com_fujitsu_caa_CJCell$boolean(pos, cell);
            } else if (((typeof pos === 'boolean') || pos === null) && cell === undefined && error === undefined) {
                return <any>this.setErrorAttributes$boolean(pos);
            } else throw new Error('invalid overload');
        }

        setErrorAttributes$com_fujitsu_caa_CJCell$boolean(cell: lib.com.fujitsu.caa.CJCell, error: boolean) {
        }

        lockOwner() {
        }

        unlockOwner(refocus: boolean) {
        }

        isOwnerLocked(): boolean {
            return this.lockedByGUI;
        }

        ownerLocked() {
        }

        ownerUnlocked() {
        }

        getOwnerWindow(): com.java.Window {
            return null;
        }

        public hierarchyChanged(e: com.java.HierarchyEvent) {
        }

        public doLayout() {
        }

        public setMultipleMode(multipleMode: boolean) {
        }

        __cdEnableEventDispatch: boolean;

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpread.java 170   12/09/18 14:52 Kura $";

        static Modtime: string = "$Modtime: 12/09/18 14:50 $";

        static Workfile: string = "$Workfile: JCFSpread.java $";

        static Revision: string = "$Revision: 170 $";

        static serialVersionUID: number = 1744511020028495819;

        public static CLASS_VERSION: string = "V2L10C";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2011";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static __com_fujitsu_jcf_gui_JCFSpread_CLASS_NAME: string = "JCFSpread";

        static LOG_CLASS_NAME: string = "lib.com.fujitsu.jcf.gui.JCFSpread";

        static logstr_null: string = "";

        static NUMBER_COLUMN_INITIAL_VALUE: string = "";

        static STR_COMMA_DECIMALPOINT_ALLOWED: string = "#,##0.####;-#,##0.####";

        static STR_DECIMALPOINT_ALLOWED: string = "##0.####;-##0.####";

        sequentialNumber: number;

        panelID: string;

        itemID: string;

        tag: string;

        initialized: boolean;

        textValueChangedActionCode: string;

        rowsStateChangedActionCode: string;

        itemStateChangedActionCode: string;

        pushedActionCode: string;

        initSpreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData;

        valueOnOpen: string;

        editvalueOnOpen: string;

        statusOnOpen: number;

        inputAreaOpened: boolean;

        inputArea: com.java.Component[];

        columnInfoBackgroundArray: com.java.Color[];

        columnInfoForegroundArray: com.java.Color[];

        commaEditAllowedArray: boolean[];

        decimalpointAllowedArray: boolean[];

        enableInputNegativeValueArray: boolean[];

        itemArrays: lib.com.fujitsu.jcf.gui.JCFSelectableElement[][];

        headerColumnInfoBackgroundArray: com.java.Color[];

        headerColumnInfoForegroundArray: com.java.Color[];

        envBackgroundEnabled: boolean;

        envFontEnabled: boolean;

        defaultProperties: lib.com.fujitsu.jcf.gui.JCFGUIDefaultProperties;

        errorCode: string;

        inputAreaKeyListener: JCFSpread.InputAreaKeyListener;

        __rowSelected: boolean;

        static __com_fujitsu_jcf_gui_JCFSpread_nameCounter: number = 0;

        inputAreaOpenedPosition: lib.com.fujitsu.caa.CJPosition;

        /*private*/ actionCodeInfo: lib.com.fujitsu.jcf.gui.JCFActionCode;

        /*private*/ keyAdapter: lib.com.fujitsu.jcf.gui.JCFKeyAdapter;

        /*private*/ mouseAdapter: lib.com.fujitsu.jcf.gui.JCFMouseAdapter;

        public static NO_LINESELECT: number = 0;

        public static SINGLE_LINE: number = 1;

        public static MULTI_LINES: number = 2;

        lineSelection: number;

        recordInfo: lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo;

        static BUTTONACTION_KEY: string = "lib.com.fujitsu.jcf.gui.JCFSpread.BUTTONACTION";

        static ITEMACTION_KEY: string = "lib.com.fujitsu.jcf.gui.JCFSpread.ITEMACTION";

        static TEXTACTION_KEY: string = "lib.com.fujitsu.jcf.gui.JCFSpread.TEXTACTION";

        static SELECTABLE_ELEMENTS_KEY: string = "lib.com.fujitsu.jcf.gui.JCFSpread.SELECTABLE_ELEMENTS";

        static DATE_FORMATTER_KEY: string = "lib.com.fujitsu.jcf.gui.JCFSpread.DATE_FORMATTER";

        static NUMBER_FORMATTER_KEY: string = "lib.com.fujitsu.jcf.gui.JCFSpread.NUMBER_FORMATTER";

        clientBackground: com.java.Color;

        clientForeground: com.java.Color;

        public static STRING: number = 1;

        public static NUMBER: number = 2;

        public static DATE: number = 3;

        public static COMBOBOX: number = 5;

        public static COMBOBOX2: number = 11;

        public static CHECKBOX: number = 7;

        public static PUSHBUTTON: number = 8;

        public static TOGGLEBUTTON: number = 10;

        public static FRACTION_ZEROSUPPRESS: number = 0;

        public static FRACTION_ZEROFILL: number = 1;

        zeroSuppress: number;

        selectedRowPositions: Array<any>;

        deselectedRowPositions: Array<any>;

        rowSelectingTrigger: com.java.InputEvent;

        static COLUMN_VISIBLE_KEY: string = "lib.com.fujitsu.jcf.gui.JCFSpread.COLUMN_VISIBLE";

        static RECORD_VISIBLE_KEY: string = "__RECORD_VISIBLE";

        public static COLUMN_HIDDENSUPPORT: number = 1;

        public static RECORD_HIDDENSUPPORT: number = 2;

        public static HIDDEN_NOSUPPORT: number = 0;

        public static COLUMNRECORD_HIDDENSUPPORT: number = 3;

        hiddenSupport: number;

        checkRoutineID: string;

        retryOnError: boolean;

        /*private*/ lockedByGUI: boolean;

        /*private*/ lockedByCJF: boolean;

        /*private*/ refocusable: boolean;

        /*private*/ needSetErrorAttributes: boolean;

        /*private*/ errorAttributesBackup: boolean;

        /*private*/ __cdIsheaderAndColumnPropertyPropertyConstrained: boolean;

        /*private*/ __cdIsheaderAndColumnPropertyPropertyBounded: boolean;

        static COMMAND_LOCK: string = "lib.com.fujitsu.jcf.gui.JCFSpread.lock()";

        initCursorRow: number;

        initCursorCol: number;

        static SETDATABEAN_DATA: number = 1;

        static SETDATABEAN_ATTRIBUTE: number = 2;

        static GETDATABEAN_DATA: number = 1;

        static GETDATABEAN_ATTRIBUTE: number = 2;

        static GETDATABEAN_SELMODIFIED: number = 16;

        static DISABLED_COMMA_EDIT: number = 0;

        static ENABLED_COMMA_EDIT: number = 1;

        static DISABLED_DECIMALPOINT_EDIT: number = 0;

        static ENABLED_DECIMALPOINT_EDIT: number = 2;

        static DISABLED_ZEROFILL: number = 0;

        static ENABLED_ZEROFILL: number = 4;

        /*private*/ __cdIsitemIDPropertyConstrained: boolean;

        /*private*/ __cdIsitemIDPropertyBounded: boolean;

        /*private*/ __cdIstagPropertyConstrained: boolean;

        /*private*/ __cdIstagPropertyBounded: boolean;

        /*private*/ __cdIsenvBackgroundEnabledPropertyConstrained: boolean;

        /*private*/ __cdIsenvBackgroundEnabledPropertyBounded: boolean;

        /*private*/ __cdIsenvFontEnabledPropertyConstrained: boolean;

        /*private*/ __cdIsenvFontEnabledPropertyBounded: boolean;

        /*private*/ __cdIsselectionVisiblePropertyConstrained: boolean;

        /*private*/ __cdIsselectionVisiblePropertyBounded: boolean;

        /*private*/ __cdIstextValueChangedActionCodePropertyConstrained: boolean;

        /*private*/ __cdIstextValueChangedActionCodePropertyBounded: boolean;

        /*private*/ __cdIsitemStateChangedActionCodePropertyConstrained: boolean;

        /*private*/ __cdIsitemStateChangedActionCodePropertyBounded: boolean;

        /*private*/ __cdIsrowsStateChangedActionCodePropertyConstrained: boolean;

        /*private*/ __cdIsrowsStateChangedActionCodePropertyBounded: boolean;

        /*private*/ __cdIspushedActionCodePropertyConstrained: boolean;

        /*private*/ __cdIspushedActionCodePropertyBounded: boolean;

        /*private*/ closeMode: boolean;

        /*private*/ JCFActionListenerList: com.java.Vector;

        /*private*/ __cdIsextendmodeBackgroundPropertyConstrained: boolean;

        /*private*/ __cdIsextendmodeBackgroundPropertyBounded: boolean;

        /*private*/ __cdIsextendmodeForegroundPropertyConstrained: boolean;

        /*private*/ __cdIsextendmodeForegroundPropertyBounded: boolean;

        /*private*/ __cdIsselectionBackgroundPropertyConstrained: boolean;

        /*private*/ __cdIsselectionBackgroundPropertyBounded: boolean;

        /*private*/ __cdIsselectionForegroundPropertyConstrained: boolean;

        /*private*/ __cdIsselectionForegroundPropertyBounded: boolean;

        /*private*/ __cdIslineSelectionPropertyConstrained: boolean;

        /*private*/ __cdIslineSelectionPropertyBounded: boolean;

        static DATE_FORMATTER_CREATE: number = 1;

        static DATE_FORMATTER_NOCREATE: number = 0;

        /*private*/ __cdIsclientBackgroundPropertyConstrained: boolean;

        /*private*/ __cdIsclientBackgroundPropertyBounded: boolean;

        /*private*/ __cdIsclientForegroundPropertyConstrained: boolean;

        /*private*/ __cdIsclientForegroundPropertyBounded: boolean;

        static NUMBER_FORMATTER_CREATE: number = 1;

        static NUMBER_FORMATTER_NOCREATE: number = 0;

        /*private*/ semaphore: JCFSpread.JCFSpreadSemaphore;

        static dragRange: number = 3;

        /*private*/ __cdIszeroSuppressPropertyConstrained: boolean;

        /*private*/ __cdIszeroSuppressPropertyBounded: boolean;

        /*private*/ __cdIslockModePropertyConstrained: boolean;

        /*private*/ __cdIslockModePropertyBounded: boolean;

        public static LOCKMODE_COMBOBOX2_NOTHING: number = 0;

        public static LOCKMODE_COMBOBOX2_CLOSE: number = 1;

        lockMode: number;

        wheelScrollingEnabled: boolean;

        /*private*/ __cdIswheelScrollingEnabledPropertyConstrained: boolean;

        /*private*/ __cdIswheelScrollingEnabledPropertyBounded: boolean;

        public static WHEELSCROLLING_ENABLE: boolean = true;

        public static WHEELSCROLLING_DISABLE: boolean = false;

        static COMMAND_HIDECOLUMN: string = "lib.com.fujitsu.jcf.gui.JCFSpread.setColumnVisible(false)";

        /*private*/ __cdIshiddenSupportPropertyConstrained: boolean;

        /*private*/ __cdIshiddenSupportPropertyBounded: boolean;

        /*private*/ __cdIscheckRoutineIDPropertyConstrained: boolean;

        /*private*/ __cdIscheckRoutineIDPropertyBounded: boolean;

        /*private*/ __cdIsretryOnErrorPropertyConstrained: boolean;

        /*private*/ __cdIsretryOnErrorPropertyBounded: boolean;
    }
    JCFSpread["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpread";


    export namespace JCFSpread {

        export class InputAreaKeyListener {
            public __parent: any;
            public keyPressed(event: com.java.KeyEvent) {
            }

            public keyReleased(event: com.java.KeyEvent) {
            }

            public keyTyped(keyevent: com.java.KeyEvent) {
            }

            static serialVersionUID: number = 670439919323560678;

            public static CLASS_VERSION: string = "V2L10";

            public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

            public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        InputAreaKeyListener["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpread.InputAreaKeyListener";


        export class InputAreaTextListener {
            public __parent: any;
            public textValueChanged(evt: com.java.TextEvent) {
            }

            static serialVersionUID: number = -6964725565017770485;

            public static CLASS_VERSION: string = "V2L10";

            public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

            public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

            this$0: lib.com.fujitsu.jcf.gui.JCFSpread;

            constructor(__parent: any) {
                this.__parent = __parent;
                if (this.this$0 === undefined) { this.this$0 = null; }
                this.this$0 = __parent;
            }
        }
        InputAreaTextListener["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpread.InputAreaTextListener";


        export class JCFSpreadSemaphore {
            public __parent: any;
            initializeSemaphore() {
                this.semaphore = 0;
            }

            decrementSemaphore() {
            }

            incrementSemaphore() {
            }

            static serialVersionUID: number = 2430101811202661871;

            public static CLASS_VERSION: string = "V2L10";

            public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

            public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

            semaphore: number;

            this$0: lib.com.fujitsu.jcf.gui.JCFSpread;

            constructor(__parent: any) {
                this.__parent = __parent;
                if (this.semaphore === undefined) { this.semaphore = 0; }
                if (this.this$0 === undefined) { this.this$0 = null; }
                this.this$0 = __parent;
                this.semaphore = 0;
            }
        }
        JCFSpreadSemaphore["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpread.JCFSpreadSemaphore";


        export class Util extends lib.com.fujitsu.caa.CJSpreadUtil {
            static setEnableSupplementaryCharacter(value: number) {
            }

            public static ENABLE_SUPPLEMENTARY_CHARACTER_TRUE: number = 1;

            public static ENABLE_SUPPLEMENTARY_CHARACTER_FALSE: number = 0;

            public static ENABLE_SUPPLEMENTARY_CHARACTER_RELOAD: number = -1;

            constructor() {
                super();
            }
        }
        Util["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpread.Util";

    }

}

