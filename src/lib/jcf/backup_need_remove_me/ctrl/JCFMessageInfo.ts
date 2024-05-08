import { JCFCMConfigInfoBase } from './JCFCMConfigInfoBase'
import { HashMap } from '@/lib/native/util/HashMap'

export class JCFMessageInfo extends JCFCMConfigInfoBase {
  private static fieldFromKeyChangeMap: HashMap = new HashMap()
  private static btnTypeChangeMap: HashMap = new HashMap()
  private static iconTypeChangeMap: HashMap = new HashMap()
  public msg: string = ''
  public msgID: string = ''
  public btnType: string = '1'
  public iconType: string = 'NO'
  public className: string = ''
  public addValue: string = ''

  getMsgID(): string {
    return this.msgID
  }

  getBtnType(): string {
    let ret: string = '1'
    if (this.btnType != null && this.btnType.length > 0)
      if (JCFMessageInfo.btnTypeChangeMap.containsKey(this.btnType))
        ret = JCFMessageInfo.btnTypeChangeMap.get(this.btnType) as string
      else ret = this.btnType
    return ret
  }

  getIconType(): string {
    let ret: string = 'NO'
    if (this.iconType && this.iconType.length > 0) {
      if (JCFMessageInfo.iconTypeChangeMap.containsKey(this.iconType)) {
        ret = JCFMessageInfo.iconTypeChangeMap.get(this.iconType) as string
      } else {
        ret = this.iconType
      }
    }
    return ret
  }

  getClassName(): string {
    return this.className
  }

  getMsg(): string {
    return this.msg
  }

  getAddValue(): string {
    return this.addValue
  }

  static initializeMaps(): void {
    JCFMessageInfo.fieldFromKeyChangeMap.put('msg-id', 'msgID')
    JCFMessageInfo.fieldFromKeyChangeMap.put('button', 'btnType')
    JCFMessageInfo.fieldFromKeyChangeMap.put('type', 'iconType')
    JCFMessageInfo.fieldFromKeyChangeMap.put('add-value', 'addValue')
    JCFMessageInfo.btnTypeChangeMap.put('_OK', '1')
    JCFMessageInfo.btnTypeChangeMap.put('_YES_NO', '2')
    JCFMessageInfo.btnTypeChangeMap.put('_YES_NO_CNCL', '3')
    JCFMessageInfo.btnTypeChangeMap.put('_OK_CNCL', '4')
    JCFMessageInfo.btnTypeChangeMap.put('_YES', '5')
    JCFMessageInfo.btnTypeChangeMap.put('_NO', '6')
    JCFMessageInfo.btnTypeChangeMap.put('_CNCL', '7')
    JCFMessageInfo.iconTypeChangeMap.put('_NO', 'NO')
    JCFMessageInfo.iconTypeChangeMap.put('_ERROR', 'ERROR')
    JCFMessageInfo.iconTypeChangeMap.put('_INFO', 'INFO')
    JCFMessageInfo.iconTypeChangeMap.put('_ALERT', 'ALERT')
    JCFMessageInfo.iconTypeChangeMap.put('_QUESTION', 'QUESTION')
    JCFMessageInfo.iconTypeChangeMap.put('_PROCESSING', 'PROCESSING')
  }
}

JCFMessageInfo.initializeMaps()
