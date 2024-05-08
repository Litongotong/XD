import type {
  IComponent,
  IComponentMap,
  IComponentMapWithoutConfig,
  IClassInfo,
} from './interface'
import { configs, type IConfigJsonLoader } from './config/configs'
import { CLASSNAME } from './className'

const SMS = createClasses([
  {
    class: CLASSNAME.SMSCommonHeaderPanel,
    component: () =>
      import('@/lib/sms/sol/sys/cjf/panel/SMSCommonHeaderPanel.vue'),
  },
  {
    class: CLASSNAME.SMSCommonFooterPanel,
    component: () =>
      import('@/lib/sms/sol/sys/cjf/panel/SMSCommonFooterPanel.vue'),
  },
  {
    class: CLASSNAME.SMSSystemErrorPanel,
    component: () =>
      import('@/lib/sms/sol/sys/cjf/panel/SMSSystemErrorPanel.vue'),
  },
])

const YCSCMNF010 = createClasses([
  {
    class: CLASSNAME.YCSCMNF010MPanel,
    component: () =>
      import('@/views/YIN/YCSCMNF010/panel/YCSCMNF010MPanel.vue'),
  },
])

const YCSCMNF030 = createClasses([
  {
    class: CLASSNAME.YCSCMNF030MPanel,
    component: () =>
      import('@/views/YIN/YCSCMNF030/panel/YCSCMNF030MPanel.vue'),
  }
])

const YBMCMNF000 = createClasses([
  {
    class: CLASSNAME.YBMCommonHeaderPanel,
    component: () =>
      import('@/views/YBM/YBMCMNF000/panel/YBMCommonHeaderPanel.vue'),
  },
  {
    class: CLASSNAME.YBMCommonFooterPanel,
    component: () =>
      import('@/views/YBM/YBMCMNF000/panel/YBMCommonFooterPanel.vue'),
  },
])

const YBMKKSF580 = createClasses([
  {
    class: CLASSNAME.YBMKKSF580SPanel,
    component: () =>
      import('@/views/YBM/YBMKKSF580/panel/YBMKKSF580SPanel.vue'),
  },
])

const YBMKKSF590 = createClasses([
  {
    class: CLASSNAME.YBMKKSF590SPanel,
    component: () =>
      import('@/views/YBM/YBMKKSF590/panel/YBMKKSF590SPanel.vue'),
  },
])

const YBMKKSF610 = createClasses([
  {
    class: CLASSNAME.YBMKKSF610SPanel,
    component: () =>
      import('@/views/YBM/YBMKKSF610/panel/YBMKKSF610SPanel.vue'),
  },
])
const YCMKMSFB30 = createClasses([
  {
    class: CLASSNAME.YCMKMSFB30MPanel,
    component: () =>
      import('@/views/YCM/YCMKMSFB30/panel/YCMKMSFB30MPanel.vue'),
  },
  // {
  //   class: CLASSNAME.YCMKMSFB31SPanel,
  //   component: () =>
  //     import('@/views/YCM/YCMKMSFB30/panel/YCMKMSFB31SPanel.vue'),
  // },
])
const YBMKKSF620 = createClasses([
  {
    class: CLASSNAME.YBMKKSF620MPanel,
    component: () =>
      import('@/views/YBM/YBMKKSF620/panel/YBMKKSF620MPanel.vue'),
  },
  {
    class: CLASSNAME.YBMKKSF621SPanel,
    component: () =>
      import('@/views/YBM/YBMKKSF620/panel/YBMKKSF621SPanel.vue'),
  },
  {
    class: CLASSNAME.YBMKKSF624SPanel,
    component: () =>
      import('@/views/YBM/YBMKKSF620/panel/YBMKKSF624SPanel.vue'),
  },
  {
    class: CLASSNAME.YBMKKSF625SPanel,
    component: () =>
      import('@/views/YBM/YBMKKSF620/panel/YBMKKSF625SPanel.vue'),
  },
  {
    class: CLASSNAME.YBMKKSF626SPanel,
    component: () =>
      import('@/views/YBM/YBMKKSF620/panel/YBMKKSF626SPanel.vue'),
  },
  {
    class: CLASSNAME.YBMKKSF627SPanel,
    component: () =>
      import('@/views/YBM/YBMKKSF620/panel/YBMKKSF627SPanel.vue'),
  },

])

export const componentsMap: IComponentMap = {
  // FWC
  ...withConfig(SMS, configs.SMS),
  // YIN
  ...withConfig(YCSCMNF010, configs.YCSCMNF010),
  ...withConfig(YCSCMNF030, configs.YCSCMNF030),
  // YBM
  ...withConfig(YBMCMNF000, configs.YBMCMNF000),
  ...withConfig(YBMKKSF580, configs.YBMKKSF580),
  ...withConfig(YBMKKSF590, configs.YBMKKSF590),
  ...withConfig(YBMKKSF610, configs.YBMKKSF610),
  ...withConfig(YBMKKSF620, configs.YBMKKSF620),
  //YCM
  ...withConfig(YCMKMSFB30, configs.YCMKMSFB30),
  

}

interface ICreateClass {
  class: IClassInfo
  component: IComponent['component']
}

function createClasses(classList: ICreateClass[]) {
  const map: IComponentMapWithoutConfig = {}
  classList.forEach((cls) => {
    map[cls.class.panel] = {
      panel: cls.class.panel,
      logic: cls.class.logic,
      component: cls.component,
    }
  })
  return map
}

function withConfig(
  map: IComponentMapWithoutConfig,
  config: IConfigJsonLoader,
) {
  const newMap: IComponentMap = {}
  Object.entries(map).forEach(([key, value]) => {
    newMap[key] = {
      ...value,
      config,
    }
  })
  return newMap
}
