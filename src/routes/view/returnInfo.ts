import { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'

export const useReturnInfo = () => {
  const buildReturnInfo = () => {
    const ins = new JCFReturnInfo()
    return ins
  }

  return {
    buildReturnInfo,
  }
}
