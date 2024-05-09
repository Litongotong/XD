// panelID
export const SYSTEM_PANEL_ID = {
  _ALL: '_ALL',
} as const
export type SystemPanelID = keyof typeof SYSTEM_PANEL_ID
export type PanelID = SystemPanelID | string // e.g. PNL_YCSCMNF060_HEAD

// screenID
export const SYSTEM_SCREEN_ID = {
  _BACKWARDSCREENID: '_BACKWARDSCREENID',
} as const
export type SystemScreenID = keyof typeof SYSTEM_SCREEN_ID
export type ScreenID = SystemScreenID | string // e.g. SCR_YBMKKSF620M01

// layoutID
export type LayoutID = string // e.g. LAYOUT01

// frameID
export type FrameID = string // e.g. FLM_MAIN_BODY

// we auto trim `com.xxx` prefix
// e.g. `com.megsnow.ybm.kks.cjf.logic.YBMKKSF620MLogic`
//      => `ybm.kks.cjf.logic.YBMKKSF620MLogic`
export type ClassName = `${string}.${string}`

export interface IAction {
  screenID?: ScreenID // from `screenID`, maybe empty, (e.g. exit system)
  itemID?: ScreenID // to `screenID`, e.g. run method before open dialog
  panelID?: PanelID // maybe empty
  className: ClassName
  methodName: string
}

export interface IActionMap {
  [actionID: ActionID]: IAction[]
}

export interface IPanelMap {
  [panelID: PanelID]: ClassName
}

export const SYSTEM_ACTION_CODE_PREFIX = 'SYS'
// `F01` ... `FXX` button on device (shortcut key)
const SYSTEM_ACTION_CODE_SHORTCUT_KEYS = {
  F1: {
    SYSF01000: 'SYSF01000',
    SYSF010C0: 'SYSF010C0', // F1 EX ? what's this ?
  },
  F2: {
    SYSF02000: 'SYSF02000',
    SYSF020C0: 'SYSF020C0', // F2 EX ? what's this ?
  },
  F3: {
    SYSF03000: 'SYSF03000',
  },
  F4: {
    SYSF04000: 'SYSF04000',
  },
  F5: {
    SYSF05000: 'SYSF05000',
    SYSF050C0: 'SYSF050C0', // F5 EX1 ? what's this ?
    SYSF0500A: 'SYSF0500A', // F5 EX2 ? what's this ?
  },
  F6: {
    SYSF06000: 'SYSF06000',
    SYSF060C0: 'SYSF060C0', // F6 EX ? what's this ?
  },
  F7: {
    SYSF07000: 'SYSF07000',
    SYSF070C0: 'SYSF070C0', // F7 EX ? what's this ?
  },
  F8: {
    SYSF08000: 'SYSF08000',
    SYSF080C0: 'SYSF080C0', // F8 EX ? what's this ?
  },
  F9: {
    SYSF09000: 'SYSF09000',
  },
  F10: {
    SYSF10000: 'SYSF10000',
  },
  F11: {
    SYSF11000: 'SYSF11000',
  },
  F12: {
    SYSF12000: 'SYSF12000',
  },
  ENTER: {
    SYSENTER000: 'SYSENTER000', // I think it's currently not used
  },
} as const
const SYSTEM_ACTION_CODE_COMMON = {
  // dialog close
  // e.g. ACT_CLOSE_WINDOW / ACT_DIALOG_CLOSE -> maybe not call method, maybe call method
  SYSDIALOGCLOSE: 'SYSDIALOGCLOSE',
  // window close
  // e.g. ACT_CLOSE_WINDOW -> not call method
  SYSWINDOWCLOSE: 'SYSWINDOWCLOSE',
  // router back
  // e.g. ACT_PRESHOW_BACK -> call method
  SYSBACKWARDPRE: 'SYSBACKWARDPRE',
  // system exit
  // e.g. ACT_LOST_FOCUS / ACT_ES00 -> call `focusout` / `lostFocus` / ...
  SYSITEMEXIT: 'SYSITEMEXIT',
  // system error
  // e.g. ACT_SYSTEM_ERROR -> not call method
  SYSERROR: 'SYSERROR',
  // input before
  // e.g. ACT_BEFORE_INPUT -> call method
  SYSINPUTPRE: 'SYSINPUTPRE',
  // パネル生成後
  // e.g. ACT_AFTER_CREATE -> call method
  SYSCRTPNL: 'SYSCRTPNL',
  // system end
  // e.g. ACT_SYS_EXIT -> call `closeBrowser`
  SYSEND: 'SYSEND',
  // item click
  // e.g. ACT_ITEM_CLICK -> call `itemClick` / ...
  SYSITEMCLICK: 'SYSITEMCLICK',
  // before create
  // e.g. ACT_BEFORE_DISPLAY -> call `beforeDisplay` / ...
  SYSSCREENPRE: 'SYSSCREENPRE',
  // system init
  // e.g. ACT_INIT -> maybe not call method (e.g. `init`)
  SYSSTART: 'SYSSTART', // if not set, trigger `ACT_INIT` by default
} as const
const SYSTEM_ACTION_CODE_OPTIONAL = {
  // shortcut key
  ...SYSTEM_ACTION_CODE_SHORTCUT_KEYS.F1,
  ...SYSTEM_ACTION_CODE_SHORTCUT_KEYS.F2,
  ...SYSTEM_ACTION_CODE_SHORTCUT_KEYS.F3,
  ...SYSTEM_ACTION_CODE_SHORTCUT_KEYS.F4,
  ...SYSTEM_ACTION_CODE_SHORTCUT_KEYS.F5,
  ...SYSTEM_ACTION_CODE_SHORTCUT_KEYS.F6,
  ...SYSTEM_ACTION_CODE_SHORTCUT_KEYS.F7,
  ...SYSTEM_ACTION_CODE_SHORTCUT_KEYS.F8,
  ...SYSTEM_ACTION_CODE_SHORTCUT_KEYS.F9,
  ...SYSTEM_ACTION_CODE_SHORTCUT_KEYS.F10,
  ...SYSTEM_ACTION_CODE_SHORTCUT_KEYS.F11,
  ...SYSTEM_ACTION_CODE_SHORTCUT_KEYS.F12,
  // enter key
  ...SYSTEM_ACTION_CODE_SHORTCUT_KEYS.ENTER,
  // common
  ...SYSTEM_ACTION_CODE_COMMON,
} as const
export const SYSTEM_ACTION_CODE = {
  ...SYSTEM_ACTION_CODE_OPTIONAL,
} as const
export type SystemActionCode = keyof typeof SYSTEM_ACTION_CODE
export type ActionCode = SystemActionCode | string

export const SYSTEM_ACTION = {
  ACT_INIT: 'ACT_INIT',
} as const
export type SystemAction = keyof typeof SYSTEM_ACTION
export type ActionID = SystemAction | string // e.g. ACT_INIT

export interface IActionIDInfo {
  actionID: ActionID
  dataSet?: boolean
}

export interface IActionCodeMap {
  [actionCode: ActionCode]: IActionIDInfo
}

export type Position = `${number}` | '*'

export interface ILayout {
  // common info
  frameID: FrameID

  // frameName: string // empty
  defaultPanelID: PanelID
  // defaultLayoutID: string // empty

  // meta info
  startX: Position
  startY: Position
  sizeX: Position
  sizeY: Position
  width: Position
  height: Position

  // other meta info
  [key: string]: string | undefined
  // e.g.
  // main: string // TRUE
}

export interface ILayoutMap {
  [layoutID: LayoutID]: ILayout[]
}

export const SYSTEM_TRANSITION_TARGET = {
  _TOP: '_TOP',
  _DIALOG: '_DIALOG',
  _OPENER: '_OPENER',
  _BACK: '_BACK',
  _SELF: '_SELF', // backward to self
} as const
export type SystemTransitionTarget = keyof typeof SYSTEM_TRANSITION_TARGET
export type TransitionTarget = SystemTransitionTarget | string

export interface ITransitionToFramePanel {
  panelID?: PanelID // maybe empty when system target (e.g. `_DIALOG`)

  // meta info
  // e.g.
  // inheritance: string // `DATA` | `NO`
  [key: string]: any
}
export type TransitionToFrame = {
  [frameID: FrameID]: ITransitionToFramePanel
}

export interface ITransitionTo {
  // to `screenID`
  // special case: if `screenID` is empty, it's behavior depends on the `target`
  screenID?: ScreenID

  // new layout info
  layoutID?: LayoutID

  // new frame info
  frame: TransitionToFrame

  // meta info
  target: TransitionTarget

  // back info
  backward?: string // e.g. `TRUE`, currently, if has value, it's always `TRUE`

  // dialog info
  width?: string // for dialog
  height?: string // for dialog
  // if not has `width` and `height`, use `positionX` and `positionY` instead
  positionX?: string // for dialog
  positionY?: string // for dialog

  // other meta info
  [key: string]: any
}

export interface ITransition {
  screenID?: ScreenID // from `screenID`, is empty when default screen (ACT)
  to: ITransitionTo
}

export interface ITransitionMap {
  [actionID: ActionID]: ITransition[]
}

export interface IPanelConfig {
  panelMap: IPanelMap
  actionCodeMap: IActionCodeMap
  actionMap: IActionMap
  layoutMap: ILayoutMap
  transitionMap: ITransitionMap
}
