import { JCFDTManager } from './JCFDTManager'
import { JCFEVController } from './JCFEVController'
import { JCFCMReference } from './JCFCMReference'
import type { JCFMainInterface } from './JCFMainInterface'
import { JCFSCWindowController } from './JCFSCWindowController'
import { JCFAdapterInfo } from '../conf/JCFAdapterInfo'
import { JCFDVManager } from './JCFDVManager'

export class JCFLogicalDevice {
  private dataManager: JCFDTManager
  private eventController: JCFEVController
  private reference: JCFCMReference
  private logicalName: string
  private adapterInfo: JCFAdapterInfo
  private deviceManager: JCFDVManager
  private container: JCFMainInterface
  private windowCtrl: JCFSCWindowController

  constructor(
    dataManager: JCFDTManager,
    eventController: JCFEVController,
    adapterInfo: JCFAdapterInfo,
    reference: JCFCMReference,
    deviceManager: JCFDVManager,
    container: JCFMainInterface,
    windowCtrl: JCFSCWindowController,
  ) {
    this.dataManager = dataManager
    this.eventController = eventController
    this.adapterInfo = adapterInfo
    this.setLogicalName(adapterInfo.getLogicalName())
    this.reference = reference
    this.deviceManager = deviceManager
    this.container = container
    this.windowCtrl = windowCtrl
    this.start()
  }

  private start(): void {}

  private setLogicalName(name: string): void {
    this.logicalName = name
  }

  getLogicalName(): string {
    return this.logicalName
  }
}
