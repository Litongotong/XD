import type { IClassMap } from './interface'

const SMS = {
  SMSCommonHeaderPanel: {
    panel: 'sms.sol.sys.cjf.panel.SMSCommonHeaderPanel',
  },
  SMSCommonFooterPanel: {
    panel: 'sms.sol.sys.cjf.panel.SMSCommonFooterPanel',
  },
  SMSSystemErrorPanel: {
    panel: 'sms.sol.sys.cjf.panel.SMSSystemErrorPanel',
    logic: 'ycs.cmn.cjf.logic.YCSCMNF070MLogic'
  }
} as const satisfies IClassMap

const YCSCMNF010 = {
  YCSCMNF010MPanel: {
    panel: 'ycs.cmn.cjf.panel.YCSCMNF010MPanel',
    logic: 'ycs.cmn.cjf.logic.YCSCMNF010MLogic'
  }
} as const satisfies IClassMap

const YCSCMNF030 = {
  YCSCMNF030MPanel: {
    panel: 'ycs.cmn.cjf.panel.YCSCMNF030MPanel',
    logic: 'ycs.cmn.cjf.logic.YCSCMNF030MLogic',
  }
} as const satisfies IClassMap

const YBMCMNF000 = {
  YBMCommonHeaderPanel: {
    panel: 'ybm.cmn.cjf.panel.YBMCommonHeaderPanel',
  },
  YBMCommonFooterPanel: {
    panel: 'ybm.cmn.cjf.panel.YBMCommonFooterPanel',
  },
} as const satisfies IClassMap

const YBMKKSF580 = {
  YBMKKSF580SPanel: {
    panel: 'ybm.kks.cjf.panel.YBMKKSF580SPanel',
    logic: 'ybm.kks.cjf.logic.YBMKKSF580SLogic'
  }
} as const satisfies IClassMap

const YBMKKSF590 = {
  YBMKKSF590SPanel: {
    panel: 'ybm.kks.cjf.panel.YBMKKSF590SPanel',
    logic: 'ybm.kks.cjf.panel.YBMKKSF590SLogic',
  }
} as const satisfies IClassMap

const YBMKKSF610 = {
  YBMKKSF610SPanel: {
    panel: 'ybm.kks.cjf.panel.YBMKKSF610SPanel',
    logic: 'ybm.kks.cjf.logic.YBMKKSF610SLogic',
  },
} as const satisfies IClassMap

const YBMKKSF620 = {
  YBMKKSF620MPanel: {
    panel: 'ybm.kks.cjf.panel.YBMKKSF620MPanel',
    logic: 'ybm.kks.cjf.logic.YBMKKSF620MLogic',
  },
  YBMKKSF621SPanel: {
    panel: 'ybm.kks.cjf.panel.YBMKKSF621SPanel',
    logic: 'ybm.kks.cjf.logic.YBMKKSF621SLogic',
  },
  YBMKKSF624SPanel: {
    panel: 'ybm.kks.cjf.panel.YBMKKSF624SPanel',
    logic: 'ybm.kks.cjf.logic.YBMKKSF624SLogic',
  },
  YBMKKSF625SPanel: {
    panel: 'ybm.kks.cjf.panel.YBMKKSF625SPanel',
    logic: 'ybm.kks.cjf.logic.YBMKKSF625SLogic',
  },
  YBMKKSF626SPanel: {
    panel: 'ybm.kks.cjf.panel.YBMKKSF626SPanel',
    logic: 'ybm.kks.cjf.logic.YBMKKSF626SLogic',
  },
  YBMKKSF627SPanel: {
    panel: 'ybm.kks.cjf.panel.YBMKKSF627SPanel',
    logic: 'ybm.kks.cjf.logic.YBMKKSF627SLogic',
  },
} as const satisfies IClassMap

export const CLASSNAME = {
  // FWC
  ...SMS,
  // YIN
  ...YCSCMNF010,
  ...YCSCMNF030,
  // YBM
  ...YBMCMNF000,
  ...YBMKKSF580,
  ...YBMKKSF590,
  ...YBMKKSF610,
  ...YBMKKSF620,
} as const satisfies IClassMap
