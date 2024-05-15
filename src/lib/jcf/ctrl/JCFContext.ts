import type { JCFScreenData } from './JCFScreenData'
import { KeySet, type NativeSet } from '@/lib/native/util/Set'
import type { NativeMap } from '@/lib/native/util/Map'
import type { IGlobalData, IViewData } from '@/lib/adapter/interface'
import type { JCFMessageOnWindow } from './JCFMessageOnWindow'
import { JCFMessage } from './JCFMessage'
import { useView } from '@/routes/view/useView'
import { closeBrowser } from '@/utils/browser'

interface IJCFContextOptions {}

// 🟢　基本完成

export class JCFContext {
  // ----- view -----
  view: ReturnType<typeof useView>

  // ----- single instance data -----
  userData: Map<any, any> = new Map()
  applicationData: Map<any, any> = new Map()
  succeedData: Map<any, any> = new Map()
  // communicationData: Map<any, any> = new Map()

  // ----- vue view data -----
  globalData: IGlobalData = {}
  viewData: IViewData

  // ----- other info -----
  subsystemID: string

  // ----- origin fields -----
  currentScreenId: string

  constructor(options?: IJCFContextOptions) {
    this.viewData = { frameIdToPanelIdMap: {} }

    // view
    this.view = useView()
  }

  getCurrentScreenData(): JCFScreenData {
    return this.globalData[this.currentScreenId]
  }

  getMessageUtil(): JCFMessageOnWindow {
    const msgWindow = JCFMessage.getMessageForWindowID()
    return msgWindow
  }

  // ----- succeed data -----
  getSucceedData(key: any): any {
    return this.succeedData.get(key)
  }
  putSucceedData(key: any, value: any): any {
    this.succeedData.set(key, value)
    return value
  }
  removeSucceedData(key: any): any {
    return this.succeedData.delete(key)
  }
  clearSucceedData(): void {
    this.succeedData.clear()
  }
  containsSucceedDataKey(key: any): boolean {
    return this.succeedData.has(key)
  }
  isSucceedDataEmpty(): boolean {
    return this.succeedData.size === 0
  }
  userSucceedKeySet(): NativeSet {
    const ret = new KeySet([...this.succeedData])
    return ret
  }
  userSucceedSize(): number {
    return this.succeedData.size
  }

  // ----- application data -----
  getApplicationData(key: any): any {
    return this.applicationData.get(key)
  }
  putApplicationData(key: any, value: any): any {
    this.applicationData.set(key, value)
    return value
  }
  removeApplicationData(key: any): any {
    return this.applicationData.delete(key)
  }
  applicationDataKeySet(): NativeSet {
    const ret = new KeySet([...this.applicationData.keys()])
    return ret
  }
  applicationDataSize(): number {
    return [...this.applicationData.keys()].length
  }
  clearApplicationData(): void {
    this.applicationData.clear()
  }
  isApplicationDataEmpty(): boolean {
    return this.applicationData.size === 0
  }
  containsApplicationDataKey(key: any): boolean {
    return this.applicationData.has(key)
  }
  putApplicationDataAll(map: NativeMap) {
    map.forEach((key, value) => {
      this.applicationData.set(key, value)
    })
  }

  // ----- user data -----
  getUserData(key: any): any {
    return this.userData.get(key)
  }
  putUserData(key: any, value: any): any {
    this.userData.set(key, value)
    return value
  }
  removeUserData(key: any): any {
    return this.userData.delete(key)
  }
  userDataKeySet(): NativeSet {
    const ret = new KeySet([...this.userData.keys()])
    return ret
  }
  userDataSize(): number {
    return [...this.userData.keys()].length
  }
  clearUserData(): void {
    this.userData.clear()
  }
  containsUserDataKey(key: any): boolean {
    return this.userData.has(key)
  }
  isUserDataEmpty(): boolean {
    return this.userData.size === 0
  }

  exit(): void {
    // dispatch exit system event
    this.view.system.action.event.onSystemEnd()
  }

  callScript(methodName: string, args: any | any[]) {
    if (methodName === 'close') {
      closeBrowser()
    } else {
      throw new Error(`Not implemented: ${methodName}`)
    }
  }

  _getName(): string {
    return 'JCFContext'
  }

  static _getName(): string {
    return 'JCFContext'
  }

  _getType() {
    return JCFContext as any
  }

  _getFullName(): string {
    return 'jcf.ctrl.JCFContext'
  }

  static _getFullName(): string {
    return 'jcf.ctrl.JCFContext'
  }
}
