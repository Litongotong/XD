import type { RouteRecordRaw } from 'vue-router'

import { DEFAULT_LAYOUT } from '@/router/constant'
import YPM from './YPM'
import YEM from './YEM'
import YSD from './YSD'
import FWC from './FWC'
import YCM from './YCM'
import YBM from './YBM'



const pages: RouteRecordRaw = {
  path: '/',
  component: DEFAULT_LAYOUT,
  children: [...YPM, ...YEM, ...YSD, ...FWC, ...YCM, ...YBM],
}

export default pages
