import { LogicBaseRel } from '@/lib/ypm/cmn/cjf/logic/YPMLogicBaseRel'

export default class YPMLogicBase extends LogicBaseRel {
  constructor() {
    super()
  }

  _getName(): string {
    return 'YPMLogicBase'
  }

  static _getName(): string {
    return 'YPMLogicBase'
  }

  _getType() {
    return YPMLogicBase as any
  }

  _getFullName(): string {
    return 'ypm.cmn.cjf.logic.YPMLogicBase'
  }

  static _getFullName(): string {
    return 'ypm.cmn.cjf.logic.YPMLogicBase'
  }
}
