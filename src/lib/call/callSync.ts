import { CallFunctionID } from './types'
import { JCFAdapterOutParam } from '../jcf/ctrl/JCFAdapterOutParam'
import type { JCFAdapterInParam } from '../jcf/ctrl/JCFAdapterInParam'
import { CallerAdapter } from './caller'

export function callSync(
  functionID: string,
  inParam: JCFAdapterInParam,
): JCFAdapterOutParam {
  const caller = new CallerAdapter()

  if (functionID === CallFunctionID.EXECUTE) {
    return caller.execute(inParam)
  }
  if (functionID === CallFunctionID.LOGIN) {
    return caller.login(inParam)
  }
  if (functionID === CallFunctionID.LOGOUT) {
    throw new Error('Not implemented')
  }

  throw new Error('Unknown functionID: ' + functionID)
}

