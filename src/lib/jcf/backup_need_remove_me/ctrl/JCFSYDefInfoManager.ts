import { JCFMessageInfo } from './JCFMessageInfo'
import { JCFSYProperties } from './JCFSYProperties'
import { JCFAdapterInfo } from '../conf/JCFAdapterInfo'

export class JCFSYDefInfoManager {
  private messageInfo: JCFMessageInfo[]
  private adapterInfo: JCFAdapterInfo[] = []

  constructor(properties?: JCFSYProperties) {
    this.messageInfo = []
  }

  getMessageInfo(): JCFMessageInfo[]
  getMessageInfo(messageID: string): JCFMessageInfo | null
  getMessageInfo(messageID?: string): JCFMessageInfo[] | JCFMessageInfo | null {
    if (messageID === undefined) {
      return this.messageInfo
    }

    let ret = null
    for (let count = 0; count < this.messageInfo.length; count++) {
      if (this.messageInfo[count].getMsgID() === messageID) {
        ret = this.messageInfo[count]
      }
    }

    return ret
  }

  getAdapterInfo(): JCFAdapterInfo[]
  getAdapterInfo(adapterName: string): JCFAdapterInfo | null
  getAdapterInfo(
    adapterName?: string,
  ): JCFAdapterInfo[] | JCFAdapterInfo | null {
    if (adapterName === undefined) {
      return this.adapterInfo
    } else {
      let ret = null

      for (let count = 0; count < this.adapterInfo.length; count++) {
        if (this.adapterInfo[count].getLogicalName() === adapterName) {
          ret = this.adapterInfo[count]
          break
        }
      }

      return ret
    }
  }
}
