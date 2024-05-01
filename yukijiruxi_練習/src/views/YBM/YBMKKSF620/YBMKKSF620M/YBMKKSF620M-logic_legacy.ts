import { JCFContext, JCFEvent, JCFReturnInfo } from '@/lib/sms/jcf'
import YPMLogicBase from '@/lib/sms/logic-base'

export class YBMKKSF620MLogic extends YPMLogicBase {
spread(spread: any) {
throw new Error('Method not implemented.')
}
cdKanjokamoku(cdKanjokamoku: any) {
throw new Error('Method not implemented.')
}
cdSoshiki(cdSoshiki: any) {
throw new Error('Method not implemented.')
}
cdHojokamoku(cdHojokamoku: any) {
throw new Error('Method not implemented.')
}
nmHojokamoku(nmHojokamoku: any) {
throw new Error('Method not implemented.')
}
sumYosanHiritsu(sumYosanHiritsu: any) {
throw new Error('Method not implemented.')
}
dtNendo(dtNendo: any) {
throw new Error('Method not implemented.')
}
dtNendoOptions(dtNendoOptions: any) {
throw new Error('Method not implemented.')
}
jigyoTorokuHiritsu(jigyoTorokuHiritsu: any) {
throw new Error('Method not implemented.')
}
lineHiritsu(lineHiritsu: any) {
throw new Error('Method not implemented.')
}
fukusya(fukusya: any) {
throw new Error('Method not implemented.')
}
body_button03(body_button03: any) {
throw new Error('Method not implemented.')
}
body_button05(body_button05: any) {
throw new Error('Method not implemented.')
}
body_button06(body_button06: any) {
throw new Error('Method not implemented.')
}
addRow(addRow: any) {
throw new Error('Method not implemented.')
}

  static cdKanjokamoku = 'cdKanjokamoku'

  static cdSoshiki = 'cdSoshiki'

  static cdHojokamoku = 'cdHojokamoku'

  static nmHojokamoku = 'nmHojokamoku'

  static dtNendoOptions = 'dtNendoOptions'

  /**
   * @see com.megsnow.ypm.cmn.cjf.logic.YPMLogicBaseRel#getView(JCFEvent, JCFContext,
   * JCFReturnInfo)
   * @param {JCFEvent} event
   * @param {JCFContext} context
   * @param {JCFReturnInfo} returnInfo
   */
  public getView = (
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) => {
    super.setJCFParameter(event, context, returnInfo)
    this.initColor()
  }

  /*private*/ initColor = () => {
    const random255 = () => Math.floor(Math.random() * 256)
    const color = `rgb(${random255()},${random255()},${random255()})`

    super.getItemData(YBMKKSF620MLogic.cdKanjokamoku).setBackground(color)
  }

  

  constructor() {
    super()

    // NOTE: 下記が文法フォーマット以外に新規追加したもの
    this.extra.setupItem(YBMKKSF620MLogic.cdKanjokamoku, 'cdKanjokamoku')
    this.extra.setupItem(YBMKKSF620MLogic.cdSoshiki, 'cdSoshiki')
    this.extra.setupItem(YBMKKSF620MLogic.cdHojokamoku, 'cdHojokamoku')
    this.extra.setupItem(YBMKKSF620MLogic.nmHojokamoku, 'nmHojokamoku')
    this.extra.setupItem(YBMKKSF620MLogic.dtNendoOptions, [
        {display: 'option1',
        disabled: false,
        value: 'option1'}
    ])
  }
}

export default YBMKKSF620MLogic
