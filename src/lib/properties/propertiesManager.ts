import JCCCompo from './configs/JCCCompo'
import SMSMessage from './configs/SMSMessage'
import SMSCheckField from './configs/SMSCheckField'
import YBMKKS from './configs/YBMKKS'
import SMSClient from './configs/SMSClient'
import YCSCMN from './configs/YCSCMN'
import SMSSubSystem from './configs/SMSSubSystem'
import SMSCalender from './configs/SMSCalender'
import generalSearchConfigs from './configs/generalSearch'
import SMSSystem from './configs/SMSSystem'

import { MsisDebug } from '@/utils/debug/log'
import type { ConfigProperties, ConfigPropertiesMap } from './interface'

const propertiesMap: ConfigPropertiesMap = {
  'JCCCompo.properties': JCCCompo,
  'SMSMessage.properties': SMSMessage,
  'SMSCheckField.properties': SMSCheckField,
  'YBMKKS.properties': YBMKKS,
  'SMSClient.properties': SMSClient,
  'YCSCMN.properties': YCSCMN,
  'SMSSubSystem.properties': SMSSubSystem,
  'SMSCalender.properties': SMSCalender,
  'SMSSystem.properties': SMSSystem,

  // general search
  ...generalSearchConfigs,
}

export class PropertiesManager {
  static getPropertieConfig(filename: string): ConfigProperties | undefined {
    const config = propertiesMap[filename]
    if (!config) {
      MsisDebug.error(`Failed to read properties file: ${filename}`)
      return
    }
    return config
  }
}
