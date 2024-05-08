import { JCFContext } from '@/lib/jcf/ctrl/JCFContext'

let context: JCFContext

export interface IGlobalInstance {
  context: JCFContext
}

export const createContext = (
  opts?: ConstructorParameters<typeof JCFContext>[0],
) => {
  if (!context) {
    context = new JCFContext(opts)
  }
  const insMap: IGlobalInstance = {
    context,
  }
  return insMap
}

export const getGlobalContext = () => {
  if (!context) {
    throw new Error('Context is not initialized')
  }
  const insMap: IGlobalInstance = {
    context,
  }
  return insMap
}
