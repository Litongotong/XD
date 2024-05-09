import { Color } from '@/lib/native/awt/Color'
import { HashMap } from '@/lib/native/util/HashMap'
import { JCFLockAdapter } from './JCFLockAdapter'

export class JCFGUIDefaultProperties {
  public static FILE_PATH_TYPE_ABSOLUTENESS: number = 0
  public static FILE_PATH_TYPE_RELATIVITY: number = 1
  public static MODEL_TYPE_APPLICATION: number = 0
  public static MODEL_TYPE_APPLET: number = 1
  public static MOUSE_CLICK_FOCUS_MODE_GUI: number = 0
  public static MOUSE_CLICK_FOCUS_MODE_FALSE: number = 1
  public static MOUSE_CLICK_FOCUS_MODE_TRUE: number = 2

  private defaultBackground: Color
  private defaultFont: any // TODO java.awt.Font
  private errorForeground: Color
  private errorBackground: Color
  private errorReverse: boolean
  private resourceFolder: string
  private filePathType: number
  private caretStyleInsert: string
  private caretStyleOverwrite: string
  private focusMovementEnter: boolean
  private focusMovementTab: boolean
  private focusMovementBackTab: boolean
  private focusMovementUp: boolean
  private focusMovementDown: boolean
  private focusMovementLeft: boolean
  private focusMovementRight: boolean
  private focusMovementHome: boolean
  private focusMovementEnd: boolean
  private focusMovementOthersClick: boolean
  private retryMouseClick: boolean
  private modelType: number
  private mainSystem: boolean
  private lockAdapter: JCFLockAdapter | null
  private mouseClickFocusModeForPushButton: number
  private mouseClickFocusModeForSwitchButton: number
  private mouseClickFocusModeForBoardButton: number
  private checkRoutineInfo: HashMap

  public constructor(
    defaultBackground: Color,
    defaultFont: any, // TODO java.awt.Font
    errorForeground: Color,
    errorBackground: Color,
    errorReverse: boolean,
    resourceFolder: string,
    filePathType: number,
    caretStyleInsert: string,
    caretStyleOverwrite: string,
    focusMovementEnter: boolean,
    focusMovementTab: boolean,
    focusMovementBackTab: boolean,
    focusMovementUp: boolean,
    focusMovementDown: boolean,
    focusMovementLeft: boolean,
    focusMovementRight: boolean,
    focusMovementHome: boolean,
    focusMovementEnd: boolean,
    focusMovementOthersClick: boolean,
    retryMouseClick: boolean,
    checkRoutineInfo: HashMap,
    modelType: number,
    mainSystem: boolean,
    lockAdapter: JCFLockAdapter | null,
    mouseClickFocusModeForPushButton: number,
    mouseClickFocusModeForSwitchButton: number,
    mouseClickFocusModeForBoardButton: number,
  ) {
    this.errorReverse = false
    this.resourceFolder = ''
    this.filePathType = 0
    this.focusMovementEnter = false
    this.focusMovementTab = true
    this.focusMovementBackTab = true
    this.focusMovementUp = false
    this.focusMovementDown = false
    this.focusMovementLeft = false
    this.focusMovementRight = false
    this.focusMovementHome = false
    this.focusMovementEnd = false
    this.focusMovementOthersClick = true
    this.retryMouseClick = true
    this.modelType = 0
    this.mainSystem = true
    this.mouseClickFocusModeForPushButton = 0
    this.mouseClickFocusModeForSwitchButton = 0
    this.mouseClickFocusModeForBoardButton = 0
    this.checkRoutineInfo = new HashMap()
    this.defaultBackground = defaultBackground
    this.defaultFont = defaultFont
    this.errorForeground = errorForeground
    this.errorBackground = errorBackground
    this.errorReverse = errorReverse
    this.resourceFolder = resourceFolder
    this.filePathType = filePathType
    this.caretStyleInsert = caretStyleInsert
    this.caretStyleOverwrite = caretStyleOverwrite
    this.focusMovementEnter = focusMovementEnter
    this.focusMovementTab = focusMovementTab
    this.focusMovementBackTab = focusMovementBackTab
    this.focusMovementUp = focusMovementUp
    this.focusMovementDown = focusMovementDown
    this.focusMovementLeft = focusMovementLeft
    this.focusMovementRight = focusMovementRight
    this.focusMovementHome = focusMovementHome
    this.focusMovementEnd = focusMovementEnd
    this.focusMovementOthersClick = focusMovementOthersClick
    this.retryMouseClick = retryMouseClick
    this.checkRoutineInfo = checkRoutineInfo
    this.modelType = modelType
    this.mainSystem = mainSystem
    this.lockAdapter = lockAdapter
    this.mouseClickFocusModeForPushButton = mouseClickFocusModeForPushButton
    this.mouseClickFocusModeForSwitchButton = mouseClickFocusModeForSwitchButton
    this.mouseClickFocusModeForBoardButton = mouseClickFocusModeForBoardButton
  }

  public getDefaultBackground(): Color {
    return this.defaultBackground
  }

  public getDefaultFont(): any {
    // TODO java.awt.Font
    return this.defaultFont
  }

  public getErrorForeground(): Color {
    return this.errorForeground
  }

  public getErrorBackground(): Color {
    return this.errorBackground
  }

  public isErrorReverse(): boolean {
    return this.errorReverse
  }

  public getResourceFolder(): string {
    return this.resourceFolder
  }

  public getFilePathType(): number {
    return this.filePathType
  }

  public getCaretStyleInsert(): string {
    return this.caretStyleInsert
  }

  public getCaretStyleOverwrite(): string {
    return this.caretStyleOverwrite
  }

  public isFocusMovementEnter(): boolean {
    return this.focusMovementEnter
  }

  public isFocusMovementTab(): boolean {
    return this.focusMovementTab
  }

  public isFocusMovementBackTab(): boolean {
    return this.focusMovementBackTab
  }

  public isFocusMovementUp(): boolean {
    return this.focusMovementUp
  }

  public isFocusMovementDown(): boolean {
    return this.focusMovementDown
  }

  public isFocusMovementLeft(): boolean {
    return this.focusMovementLeft
  }

  public isFocusMovementRight(): boolean {
    return this.focusMovementRight
  }

  public isFocusMovementHome(): boolean {
    return this.focusMovementHome
  }

  public isFocusMovementEnd(): boolean {
    return this.focusMovementEnd
  }

  public isFocusMovementOthersClick(): boolean {
    return this.focusMovementOthersClick
  }

  public isRetryMouseClick(): boolean {
    return this.retryMouseClick
  }

  public getCheckRoutineInfo(): HashMap {
    return this.checkRoutineInfo
  }

  public getModelType(): number {
    return this.modelType
  }

  public isMainSystem(): boolean {
    return this.mainSystem
  }

  public getLockAdapter(): JCFLockAdapter {
    return this.lockAdapter as JCFLockAdapter
  }

  public getMouseClickFocusModeForPushButton(): number {
    return this.mouseClickFocusModeForPushButton
  }

  public getMouseClickFocusModeForSwitchButton(): number {
    return this.mouseClickFocusModeForSwitchButton
  }

  public getMouseClickFocusModeForBoardButton(): number {
    return this.mouseClickFocusModeForBoardButton
  }
}
