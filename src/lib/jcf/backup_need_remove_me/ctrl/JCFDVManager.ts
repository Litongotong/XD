import { JCFDTManager } from './JCFDTManager'
import { JCFEVController } from './JCFEVController'
import { JCFCMReference } from './JCFCMReference'
import { JCFLogicalDevice } from './JCFLogicalDevice'
import type { JCFMainInterface } from './JCFMainInterface'
import { JCFSCWindowController } from './JCFSCWindowController'
import { JCFCMMessageProperties } from './JCFCMMessageProperties'
import { JCFIllegalArgumentException } from './JCFIllegalArgumentException'
import { JCFDebug } from './JCFDebug'
import { JCFAdapterInfo } from '../conf/JCFAdapterInfo'
import { HashMap } from '@/lib/native/util/HashMap'

export class JCFDVManager {
  private dataManager: JCFDTManager
  private eventController: JCFEVController
  private reference: JCFCMReference
  private logicalDeviceTable: HashMap = new HashMap()
  private deviceManagerStarted: boolean = false
  private container: JCFMainInterface
  private windowCtrl: JCFSCWindowController

  constructor(
    dataManager: JCFDTManager,
    eventController: JCFEVController,
    reference: JCFCMReference,
    container: JCFMainInterface,
    windowCtrl: JCFSCWindowController,
  ) {
    this.dataManager = dataManager
    this.eventController = eventController
    this.reference = reference
    this.container = container
    this.windowCtrl = windowCtrl
    this.setDeviceManagerStarted(true)
  }

  private setDeviceManagerStarted(b: boolean): void {
    this.deviceManagerStarted = b
  }

  getLogicalDevice(logicalName: string): JCFLogicalDevice {
    if (logicalName !== null && logicalName.length !== 0) {
      let device = this.logicalDeviceTable.get(logicalName) as JCFLogicalDevice
      if (device === null) {
        let adapterInfo = this.getAdapterInfo(logicalName)
        if (adapterInfo === null) {
          const msg =
            JCFCMMessageProperties.getExceptionMessage('E1164') +
            '[' +
            JCFCMMessageProperties.getMessage('M0033') +
            ':' +
            logicalName +
            ']'
          const e = new JCFIllegalArgumentException(msg)
          JCFDebug.write(
            'JCFDVManager',
            'getLogicalDevice',
            e,
            1282,
            '',
            this.reference.getSubsystemID(),
            this.reference.getWindowID(),
          )
          throw e
        }

        device = new JCFLogicalDevice(
          this.dataManager,
          this.eventController,
          adapterInfo,
          this.reference,
          this,
          this.container,
          this.windowCtrl,
        )
        this.logicalDeviceTable.put(logicalName, device)
      }

      return device
    } else {
      const msg = JCFCMMessageProperties.getExceptionMessage('E1163')
      const e = new JCFIllegalArgumentException(msg)
      JCFDebug.write(
        'JCFDVManager',
        'getLogicalDevice',
        e,
        1282,
        '',
        this.reference.getSubsystemID(),
        this.reference.getWindowID(),
      )
      throw e
    }
  }

  private getAdapterInfo(logicalName: string): JCFAdapterInfo | null {
    const info = this.reference.getDefReference().getAdapterInfo(logicalName)
    return info
  }
}
