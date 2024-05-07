import { MsisDebug } from '@/utils/debug/log'
import type { JCFAdapterInParam } from '../jcf/ctrl/JCFAdapterInParam'
import type { JCFContext } from '../jcf/ctrl/JCFContext'
import { CallAsyncFunctionID, ErrorActionCode } from './types'

export function callASync(
  functionID: string,
  inParam: JCFAdapterInParam,
  context: JCFContext,
) {
  // TODO: use `inParam` report error to server

  const view = context.view

  if (import.meta.env.DEV) {
    MsisDebug.error(`(OPEN ERROR PAGE) Error: `, functionID, `inParam: `, inParam)
    return
  }

  if (functionID === CallAsyncFunctionID.ERROR) {
    view.system.action.dispatch({ actionCode: ErrorActionCode.errorscreen })
    return
  }

  if (functionID === CallAsyncFunctionID.ERRORSUB) {
    view.system.action.dispatch({ actionCode: ErrorActionCode.errorsubscreen })
    return
  }

  throw new Error('Unknown functionID: ' + functionID)
}
