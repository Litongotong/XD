import type { JCFAdapterInParam } from '../jcf/ctrl/JCFAdapterInParam'
import type { JCFAdapterOutParam } from '../jcf/ctrl/JCFAdapterOutParam'

export enum CallFunctionID {
  EXECUTE = 'EXECUTE',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export enum CallAsyncFunctionID {
  ERROR = 'ERROR',
  ERRORSUB = 'ERRORSUB',
}

export enum ErrorActionCode {
  errorscreen = 'errorscreen',
  errorsubscreen = 'errorsubscreen',
}

export enum EVerb {
  /** 共通verb*/
  VERB_COMMON = 'execute',
  /** ログインverb*/
  VERB_LOGIN = 'login',
  /** ログアウトverb*/
  VERB_LOGOUT = 'logout',
}

export type ApiCallFunc = (inParam: JCFAdapterInParam) => JCFAdapterOutParam
