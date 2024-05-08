/******************************************************************************
 * jcf.ctrl.JCFAdapterParam
 *
 * プログラム名     : jcf.ctrl.JCFAdapterParam
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | JCFAdapterParam を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import type { Serializable } from '@/lib/native/io/Serializable'
import { HashMap } from '@/lib/native/util/HashMap'
import type { NativeMap } from '@/lib/native/util/Map'
import { JCFIllegalArgumentException } from './JCFIllegalArgumentException'
import type { NativeSet } from '@/lib/native/util/Set'

// 🟢 完成

export class JCFAdapterParam implements Serializable {
  private data: HashMap
  private communicationData: HashMap
  private logicalName: string
  private functionID: string
  private callType: number

  private static CALLTYPE_SYNC = 0
  protected static CALLTYPE_ASYNC_EVENT = 1
  protected static CALLTYPE_ASYNC_WAIT = 2

  constructor() {
    this.data = new HashMap()
    this.communicationData = new HashMap()
    this.callType = JCFAdapterParam.CALLTYPE_SYNC
  }

  putData(key: any, value: any): any {
    let ret: any = this.data.put(key, value)
    return ret
  }

  putDataAll(values: NativeMap) {
    if (!values) {
      throw new JCFIllegalArgumentException()
    } else {
      this.data.putAll(values)
      return
    }
  }

  getData(key: any): any {
    let ret: any = this.data.get(key)
    return ret
  }

  clearData() {
    this.data.clear()
  }

  containsDataKey(key: any): boolean {
    return this.data.containsKey(key)
  }

  isDataEmpty(): boolean {
    return this.data.isEmpty()
  }

  dataKeySet(): NativeSet {
    return this.data.keySet()
  }

  removeData(key: any): any {
    let ret: any = this.data.remove(key)
    return ret
  }

  dataSize(): number {
    return this.data.size()
  }

  setCommunicationData(data: HashMap) {
    this.communicationData = data
  }

  getCommunicationData(): HashMap {
    return this.communicationData
  }

  getDataInAllData(key: any): any {
    let ret: any = null
    if (this.data.containsKey(key)) {
      ret = this.data.get(key)
    } else if (this.communicationData != null) {
      ret = this.communicationData.get(key)
    }

    return ret
  }

  protected setLogicalName(logicalName: string) {
    this.logicalName = logicalName
  }

  getLogicalName(): string {
    return this.logicalName
  }

  protected setFunctionID(functionID: string) {
    this.functionID = functionID
  }

  getFunctionID(): string {
    return this.functionID
  }

  protected setCallType(callType: number) {
    this.callType = callType
  }

  protected getCallType(): number {
    return this.callType
  }

  toString(): string {
    return `JCFAdapterParam{data=${this.data}, communicationData=${this.communicationData}, logicalName='${this.logicalName}', functionID='${this.functionID}', callType=${this.callType}}`
  }

  _getName(): string {
    return 'JCFAdapterParam'
  }

  static _getName(): string {
    return 'JCFAdapterParam'
  }

  _getType() {
    return JCFAdapterParam as any
  }

  _getFullName(): string {
    return 'jcf.ctrl.JCFAdapterParam'
  }

  static _getFullName(): string {
    return 'jcf.ctrl.JCFAdapterParam'
  }
}
