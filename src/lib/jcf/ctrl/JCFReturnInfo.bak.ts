// 🟡 参考用

/******************************************************************************
 * jcf.ctrl.JCFReturnInfo
 *
 * プログラム名     : jcf.ctrl.JCFReturnInfo
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | JCFReturnInfo を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ArrayList } from '@/lib/native/util/ArrayList'
import { HashMap } from '@/lib/native/util/HashMap'
import { JCFException } from './JCFException'
import { JCFIllegalArgumentException } from './JCFIllegalArgumentException'
import { JCFIllegalStateException } from './JCFIllegalStateException'
import { JCFIllegalConfigurationException } from './JCFIllegalConfigurationException'
import { JCFCMMessageProperties } from './JCFCMMessageProperties'
import { JCFDebug } from './JCFDebug'

class JCFReturnInfo {
  public static readonly FOCUS_CONTINUE = 0
  public static readonly FOCUS_POINT = 1
  public static readonly FOCUS_TOP = 2
  public static readonly FOCUS_BOTTOM = 3
  public static readonly FOCUS_NEXT = 4
  public static readonly FOCUS_PREVIOUS = 5
  public static readonly FOCUS_DEFAULT = -1
  public static readonly BACKWARD = '_BACKWARDSCREENID'

  private transitionPatternID: string = ''
  private screenID: string | null = null
  private transitionFlag: boolean = false
  private focusFrameID: string = ''
  private focusItemID: string = ''
  private deterrenceUnlockFlag: boolean = false
  private initFocusFrameID: string = ''
  private initFocusItemID: string = ''
  private initDeterrenceUnlockFlag: boolean = false
  private screenIDException: JCFException | null = null
  private focusType: number = -1
  private backwardData: any = null
  private subsystemID: string = ''
  private openWindow: boolean = false
  private changeConfiguration: boolean = true
  private isCloseEnabled: boolean = true
  private subsystemList: ArrayList
  private eventType: number = 0
  private debugSubsystemID: string = ''
  private debugWindowID: string = ''
  private title: string | null = null
  private isSetTitle: boolean = false
  private dialogTitle: string | null = null
  private isSetDialogTitle: boolean = false
  private setTitleFlg: boolean = false
  private setDialogTitleFlg: boolean = false
  private setPanelIDFlg: boolean = false
  private cancelTransitionEnableFlg: boolean = false
  private isReflect: boolean = false
  private retryMouseClick: boolean = false
  private systemName: string = ''
  private continuedLock: boolean = false
  private screenKeywordMap: HashMap

  constructor(
    focusFrameID: string,
    focusItemID: string,
    transitionFlag: boolean,
    deterrenceUnlockFlag: boolean,
    screenKeywordMap: HashMap,
    defaultScreenID: string,
    subsystemList: ArrayList,
    defaultsubsystemID: string,
    openWindow: boolean,
    title: string,
    isSetTitle: boolean,
    dialogTitle: string,
    isSetDialogTitle: boolean,
    debugSubsystemID: string,
    debugWindowID: string,
  ) {
    this.focusFrameID = focusFrameID
    this.initFocusFrameID = focusFrameID
    this.focusItemID = focusItemID
    this.initFocusItemID = focusItemID
    this.transitionFlag = transitionFlag
    this.deterrenceUnlockFlag = deterrenceUnlockFlag
    this.initDeterrenceUnlockFlag = deterrenceUnlockFlag
    this.screenKeywordMap = screenKeywordMap
    this.transitionPatternID = defaultScreenID
    this.debugSubsystemID = debugSubsystemID
    this.debugWindowID = debugWindowID
    this.subsystemList = subsystemList
    this.subsystemID = defaultsubsystemID
    this.openWindow = openWindow
    this.title = title
    this.isSetTitle = isSetTitle
    this.dialogTitle = dialogTitle
    this.isSetDialogTitle = isSetDialogTitle
    this.systemName = defaultsubsystemID
  }

  /**
   * jcf.ctrl.JCFReturnInfo::setTransitionScreenID(String screenID)
   * @param screenID
   */
  setTransitionScreenID(screenID: string): void {
    if (this.setPanelIDFlg) {
      const e = new JCFIllegalStateException(
        JCFCMMessageProperties.getExceptionMessage('E1101'),
      )
      JCFDebug.write(
        'JCFReturnInfo',
        'setTransitionScreenID',
        e,
        1282,
        JCFCMMessageProperties.getExceptionMessage('E1297'),
        this.debugSubsystemID,
        this.debugWindowID,
      )
      throw e
    } else if (screenID === null) {
      const e = new JCFIllegalArgumentException(
        JCFCMMessageProperties.getExceptionMessage('E1194'),
      )
      JCFDebug.write(
        'JCFReturnInfo',
        'setTransitionScreenID',
        e,
        1282,
        JCFCMMessageProperties.getExceptionMessage('E1298'),
        this.debugSubsystemID,
        this.debugWindowID,
      )
      throw e
    } else if (!this.screenKeywordMap.containsKey(screenID)) {
      const e = new JCFIllegalConfigurationException(
        JCFCMMessageProperties.getExceptionMessage('E1105'),
      )
      JCFDebug.write(
        'JCFReturnInfo',
        'setTransitionScreenID',
        e,
        1282,
        JCFCMMessageProperties.getExceptionMessage('E1299') + screenID,
        this.debugSubsystemID,
        this.debugWindowID,
      )
      throw e
    } else {
      this.transitionPatternID = screenID
    }
  }

  /**
   * jcf.ctrl.JCFReturnInfo::cancelScreenTransition()
   */
  cancelScreenTransition(): void {
    if (this.cancelTransitionEnableFlg) {
      this.transitionFlag = true
    }
  }

  /**
   * jcf.ctrl.JCFReturnInfo::setFocusItemID(String itemID)
   * @param itemID
   */
  setFocusItemID(itemID: string): void {
    if (itemID == null) {
      const e = new JCFIllegalArgumentException(
        JCFCMMessageProperties.getExceptionMessage('E1194'),
      )
      JCFDebug.write(
        'JCFReturnInfo',
        'setFocusItemID',
        e,
        1282,
        'itemID = ' + itemID,
        this.debugSubsystemID,
        this.debugWindowID,
      )
      throw e
    } else {
      this.setFocus(1, itemID)
    }
  }

  /**
   * jcf.ctrl.JCFReturnInfo::setFocus(String frameID, String itemID)
   * @param frameID
   * @param itemID
   */
  setFocus(frameID: string, itemID: string | null): void
  /**
   * jcf.ctrl.JCFReturnInfo::setFocus(int focusType)
   * @param focusType
   */
  setFocus(focusType: number): void
  /**
   * jcf.ctrl.JCFReturnInfo::setFocus(int focusType, String id)
   * @param focusType
   * @param id
   */
  setFocus(focusType: number, id: string | null): void
  /**
   * jcf.ctrl.JCFReturnInfo::setFocus(int focusType, String frameID, String itemID)
   * @param focusType
   * @param frameID
   * @param itemID
   */
  setFocus(
    focusType: number,
    frameID: string | null,
    itemID: string | null,
  ): void

  setFocus(
    focusTypeOrFrameID: string | number,
    idOrItemID?: string | null,
    itemID?: string | null,
  ): void {
    if (typeof focusTypeOrFrameID === 'string' && idOrItemID !== undefined) {
      // setFocus(String frameID, String itemID)
      this.__setFocusByIds(focusTypeOrFrameID, idOrItemID)
    } else {
      if (idOrItemID === undefined && itemID === undefined) {
        // setFocus(int focusType)
        this.__setFocusByType(focusTypeOrFrameID as number)
      } else if (idOrItemID !== undefined && itemID === undefined) {
        // setFocus(int focusType, String id)
        this.__setFocusByTypeAndId(focusTypeOrFrameID as number, idOrItemID)
      } else {
        // setFocus(int focusType, String frameID, String itemID)
        this.__setFocusByTypeAndIds(
          focusTypeOrFrameID as number,
          idOrItemID ?? null,
          itemID ?? null,
        )
      }
    }
  }

  /**
   * jcf.ctrl.JCFReturnInfo::setFocus(String frameID, String itemID)
   * @param frameID
   * @param itemID
   */
  private __setFocusByIds(frameID: string, itemID: string | null): void {
    if (frameID === null || itemID === null) {
      const e: JCFIllegalArgumentException = new JCFIllegalArgumentException(
        JCFCMMessageProperties.getExceptionMessage('E1194'),
      )
      JCFDebug.write(
        'JCFReturnInfo',
        'setFocus',
        e,
        1282,
        `frameID = ${frameID}  itemID = ${itemID}`,
        this.debugSubsystemID,
        this.debugWindowID,
      )
      throw e
    } else {
      this.setFocus(1, frameID, itemID)
      return
    }
  }

  /**
   * jcf.ctrl.JCFReturnInfo::setFocus(int focusType)
   * @param focusType
   */
  private __setFocusByType(focusType: number): void {
    if (![0, 2, 3, 4, 5].includes(focusType)) {
      const e: JCFIllegalArgumentException = new JCFIllegalArgumentException(
        JCFCMMessageProperties.getExceptionMessage('E1106'),
      )
      JCFDebug.write(
        'JCFReturnInfo',
        'setFocus',
        e,
        1282,
        `${JCFCMMessageProperties.getExceptionMessage('E1300')}${focusType}`,
        this.debugSubsystemID,
        this.debugWindowID,
      )
      throw e
    } else {
      this.focusType = focusType
      this.focusFrameID = ''
      this.focusItemID = ''
    }
  }

  /**
   * jcf.ctrl.JCFReturnInfo::setFocus(int focusType, String id)
   * @param focusType
   * @param id
   */
  private __setFocusByTypeAndId(focusType: number, id: string | null): void {
    if (![1, 2, 3].includes(focusType)) {
      const e: JCFIllegalArgumentException = new JCFIllegalArgumentException(
        JCFCMMessageProperties.getExceptionMessage('E1106'),
      )
      JCFDebug.write(
        'JCFReturnInfo',
        'setFocus',
        e,
        1282,
        `${JCFCMMessageProperties.getExceptionMessage('E1300')}${focusType}`,
        this.debugSubsystemID,
        this.debugWindowID,
      )
      throw e
    }

    if (id === null) {
      const e: JCFIllegalArgumentException = new JCFIllegalArgumentException(
        JCFCMMessageProperties.getExceptionMessage('E1194'),
      )
      JCFDebug.write(
        'JCFReturnInfo',
        'setFocus',
        e,
        1282,
        JCFCMMessageProperties.getExceptionMessage('E1301'),
        this.debugSubsystemID,
        this.debugWindowID,
      )
      throw e
    }

    this.focusType = focusType
    if (focusType !== 1) {
      this.focusFrameID = id
      this.focusItemID = ''
    } else {
      this.focusFrameID = ''
      this.focusItemID = id
    }
  }

  /**
   * jcf.ctrl.JCFReturnInfo::setFocus(int focusType, String frameID, String itemID)
   * @param focusType
   * @param frameID
   * @param itemID
   */
  private __setFocusByTypeAndIds(
    focusType: number,
    frameID: string | null,
    itemID: string | null,
  ): void {
    if (this.focusType !== -1) {
      const e: JCFIllegalArgumentException = new JCFIllegalArgumentException(
        JCFCMMessageProperties.getExceptionMessage('E1106'),
      )
      JCFDebug.write(
        'JCFReturnInfo',
        'setFocus',
        e,
        1282,
        `${JCFCMMessageProperties.getExceptionMessage('E1300')}${focusType}`,
        this.debugSubsystemID,
        this.debugWindowID,
      )
      throw e
    }

    if (frameID === null || itemID === null) {
      const e: JCFIllegalArgumentException = new JCFIllegalArgumentException(
        JCFCMMessageProperties.getExceptionMessage('E1106'),
      )
      JCFDebug.write(
        'JCFReturnInfo',
        'setFocus',
        e,
        1282,
        `${JCFCMMessageProperties.getExceptionMessage(
          'E1302',
        )}${frameID} itemID=${itemID}`,
        this.debugSubsystemID,
        this.debugWindowID,
      )
      throw e
    } else {
      this.focusType = focusType
      this.focusFrameID = frameID
      this.focusItemID = itemID
      return
    }
  }

  /**
   * jcf.ctrl.JCFReturnInfo::setUnlockDeterrent(boolean deterrenceUnlockFlag)
   * @param deterrenceUnlockFlag
   */
  setUnlockDeterrent(deterrenceUnlockFlag: boolean): void {
    this.deterrenceUnlockFlag = deterrenceUnlockFlag
  }

  /**
   * jcf.ctrl.JCFReturnInfo::getFocusItemID()
   */
  getFocusItemID(): string {
    return this.focusItemID
  }

  /**
   * jcf.ctrl.JCFReturnInfo::setSubsystemID(String subsystemID)
   * jcf.ctrl.JCFReturnInfo::setSubsystemID(String subsystemID, boolean isOpenWindow)
   * jcf.ctrl.JCFReturnInfo::setSubsystemID(String subsystemID, String systemName)
   * jcf.ctrl.JCFReturnInfo::setSubsystemID(String subsystemID, boolean isOpenWindow, String systemName)
   */
  setSubsystemID(subsystemID: string): void
  setSubsystemID(subsystemID: string, isOpenWindow: boolean): void
  setSubsystemID(subsystemID: string, systemName: string): void
  setSubsystemID(
    subsystemID: string,
    isOpenWindowOrSystemName?: boolean | string,
    systemName?: string,
  ): void {
    if (isOpenWindowOrSystemName === undefined) {
      // setSubsystemID(String subsystemID)
      this.__setSubsystemID(subsystemID, false, subsystemID)
    } else if (
      // setSubsystemID(String subsystemID, boolean isOpenWindow)
      typeof isOpenWindowOrSystemName === 'boolean' &&
      systemName === undefined
    ) {
      this.__setSubsystemID(subsystemID, isOpenWindowOrSystemName, subsystemID)
    } else if (
      // setSubsystemID(String subsystemID, String systemName)
      typeof isOpenWindowOrSystemName === 'string' &&
      systemName === undefined
    ) {
      this.__setSubsystemID(subsystemID, false, isOpenWindowOrSystemName)
    } else {
      // setSubsystemID(String subsystemID, boolean isOpenWindow, String systemName)
      this.__setSubsystemID(
        subsystemID,
        isOpenWindowOrSystemName as boolean,
        subsystemID,
      )
    }
  }

  private __setSubsystemID(
    subsystemID: string,
    isOpenWindow: boolean,
    systemName: string,
  ): void {
    switch (this.eventType) {
      case 1:
      case 2:
      case 16:
        if (systemName === null) {
          const e = new JCFIllegalArgumentException(
            JCFCMMessageProperties.getExceptionMessage('E1194'),
          )
          JCFDebug.write(
            'JCFReturnInfo',
            'setSubsystemID',
            e,
            1282,
            JCFCMMessageProperties.getExceptionMessage('E1254'),
            this.debugSubsystemID,
            this.debugWindowID,
          )
          throw e
        } else if (subsystemID === null) {
          const e = new JCFIllegalArgumentException(
            JCFCMMessageProperties.getExceptionMessage('E1194'),
          )
          JCFDebug.write(
            'JCFReturnInfo',
            'setSubsystemID',
            e,
            1282,
            JCFCMMessageProperties.getExceptionMessage('E1313'),
            this.debugSubsystemID,
            this.debugWindowID,
          )
          throw e
        } else {
          // TODO ArrayList.tsにcontainsメソッドが存在しない
          // if (!this.subsystemList.contains(subsystemID)) {
          //   const e = new JCFIllegalConfigurationException(
          //     JCFCMMessageProperties.getExceptionMessage('E1218'),
          //   )
          //   JCFDebug.write(
          //     'JCFReturnInfo',
          //     'setSubsystemID',
          //     e,
          //     1282,
          //     JCFCMMessageProperties.getExceptionMessage('E1314'),
          //     this.debugSubsystemID,
          //     this.debugWindowID,
          //   )
          //   throw e
          // }

          this.subsystemID = subsystemID
          this.openWindow = isOpenWindow
          this.systemName = systemName
          return
        }
      default:
        const e = new JCFIllegalStateException(
          JCFCMMessageProperties.getExceptionMessage('E1219'),
        )
        JCFDebug.write(
          'JCFReturnInfo',
          'setSubsystemID',
          e,
          1282,
          JCFCMMessageProperties.getExceptionMessage('E1312'),
          this.debugSubsystemID,
          this.debugWindowID,
        )
        throw e
    }
  }

  /**
   * jcf.ctrl.JCFReturnInfo::cancelChangeConfiguration()
   */
  cancelChangeConfiguration(): void {
    this.changeConfiguration = false
    this.subsystemID = ''
    this.openWindow = false
  }
}
