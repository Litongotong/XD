import { JCFMessageInfo } from './JCFMessageInfo'
import { JCFUTUtilProperties } from './JCFUTUtilProperties'
import { JCFSYProperties } from './JCFSYProperties'
import { JCFSYDefInfoManager } from './JCFSYDefInfoManager'
import { JCFAdapterInfo } from '../conf/JCFAdapterInfo'

export class JCFCMDefReference {
  private properties: JCFSYProperties
  private static utilProperties: JCFUTUtilProperties | null = null
  private systemXML: JCFSYDefInfoManager
  private subsystemXML: JCFSYDefInfoManager | null
  private snapshotLogActionCode: string | null

  constructor(
    properties: JCFSYProperties,
    systemXML: JCFSYDefInfoManager,
    subXml?: JCFSYDefInfoManager,
  ) {
    this.properties = properties
    this.systemXML = systemXML
    this.subsystemXML = subXml ?? null
    this.snapshotLogActionCode = null
    this.setSnapshotLogActionCode()
  }

  getProperties(): JCFSYProperties {
    return this.properties
  }

  getSystemDefInfo(): JCFSYDefInfoManager {
    return this.systemXML
  }

  getSubsystemDefInfo(): JCFSYDefInfoManager | null {
    return this.subsystemXML
  }

  getUtilProperties(): JCFUTUtilProperties {
    return JCFCMDefReference.utilProperties as JCFUTUtilProperties
  }

  getMessageInfo(messageID: string): JCFMessageInfo {
    let msg = null
    if (this.getSubsystemDefInfo() !== null) {
      msg = this.getSubsystemDefInfo()?.getMessageInfo(messageID)
    }
    if (msg === null) {
      msg = this.getSystemDefInfo().getMessageInfo(messageID)
    }
    return msg as JCFMessageInfo
  }

  private setSnapshotLogActionCode(): void {}

  getAdapterInfo(adapterName: string): JCFAdapterInfo | null {
    let adapter = null
    if (this.getSubsystemDefInfo() !== null) {
      adapter = this.getSubsystemDefInfo()?.getAdapterInfo(adapterName)
    }

    if (adapter == null) {
      adapter = this.getSystemDefInfo().getAdapterInfo(adapterName)
    }

    return adapter
  }
}
