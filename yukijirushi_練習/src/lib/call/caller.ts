import { HashMap } from '@/lib/native/util/HashMap'
import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog'
import { MsisDebug } from '@/utils/debug/log'
import { SMSHashKeyConst } from '../sms/sol/sys/SMSHashKeyConst'
import { SMSLoginInfoImpl } from '../sms/sol/sys/SMSLoginInfoImpl'
import { syncHttp } from '@/services/syncRequest'
import { HTTPMethods, type ISyncResponse } from '@/services/interface'
import { API_GAMEN_ID } from './constants'
import { JCFAdapterOutParam } from '../jcf/ctrl/JCFAdapterOutParam'
import type { JCFAdapterInParam } from '../jcf/ctrl/JCFAdapterInParam'
import { SMSMessageMgr } from '../sms/sol/sys/SMSMessageMgr'
import { SMSSubSystemInfo } from '../sms/sol/sys/SMSSubSystemInfo'
import { SMSSystemDateUtil } from '../sms/sol/sys/SMSSystemDateUtil'
import { EVerb } from './types'
import { objectifyInstance, setInstanceValue, toHashMap } from './utils/class'
import { JCFAdapterException } from '../jcf/ctrl/JCFAdapterException'
import { checkApiParams } from './utils/check'

export class CallerAdapter {
  execute(inParam: JCFAdapterInParam): JCFAdapterOutParam {
    SMSCLLog.debug('サーブレット連携アダプタが呼ばれました（execute）')

    const outParam = new JCFAdapterOutParam()

    //画面に返すJCFAdapterOutParamに、EJBからの返り値を詰める
    const paramMap = new HashMap()

    // 2007/08/30 add
    let outMap: HashMap = null!
    try {
      //サーブレットに処理を渡す
      outMap = this.callServer(inParam, EVerb.VERB_COMMON)
    } catch (th) {
      SMSCLLog.debug('Servlet連携時、システムエラー(' + th + ')発生')
      SMSCLLog.debug('inParam:' + inParam.toString())
      MsisDebug.error(th)
    }

    // 2007/08/30 add

    const loginInfo = outMap.get(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl

    //エラーがないかチェック
    if (outMap.get(SMSHashKeyConst.PARAM_KEY_THROWABLE)) {
      SMSCLLog.debug('システムエラー発生')
      const th = outMap.get(SMSHashKeyConst.PARAM_KEY_THROWABLE)
      // th.printStackTrace();
      paramMap.put(
        SMSHashKeyConst.PARAM_KEY_ERROR_FLG,
        SMSHashKeyConst.IS_ERROR,
      )
      paramMap.put(SMSHashKeyConst.PARAM_KEY_THROWABLE, th)
      outParam.setCommunicationData(paramMap)
    } else {
      //警告がないかチェック
      if (loginInfo.getCdMessage() !== '') {
        SMSCLLog.debug('警告発生')
        //警告があれば警告メッセージ
        paramMap.put(SMSHashKeyConst.PARAM_KEY_DATA, outMap)
        paramMap.put(SMSHashKeyConst.WARNING_MSG_KEY, loginInfo.getCdMessage())
        paramMap.put(
          SMSHashKeyConst.WARNING_MSG_PARAM_KEY,
          loginInfo.getNmMessageChikan(),
        )
        paramMap.put(
          SMSHashKeyConst.WARNING_POPUP_PARAM_KEY,
          loginInfo.getFgPopup(),
        )
        paramMap.put(
          SMSHashKeyConst.PARAM_KEY_ERROR_FLG,
          SMSHashKeyConst.IS_WARNING,
        )
        paramMap.put(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
        outParam.setCommunicationData(paramMap)
      } else {
        SMSCLLog.debug('成功')
        //成功
        paramMap.put(SMSHashKeyConst.PARAM_KEY_DATA, outMap)
        paramMap.put(
          SMSHashKeyConst.PARAM_KEY_ERROR_FLG,
          SMSHashKeyConst.IS_SUCCESS,
        )
        //頁制御部分編集
        //calcPage(loginInfo);
        paramMap.put(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
        outParam.setCommunicationData(paramMap)
      }
    }
    //ログ記述
    // 2006/11/27 Delete start
    //		postprocess(inParam, loginInfo);
    // 2006/11/27 Delete end

    return outParam
  }

  login(inParam: JCFAdapterInParam): JCFAdapterOutParam {
    SMSCLLog.debug('サーブレット連携アダプタが呼ばれました（login）')

    const outParam = new JCFAdapterOutParam()

    //画面に返すJCFAdapterOutParamに、EJBからの返り値を詰める
    const paramMap = new HashMap()

    //サーブレットに処理を渡す
    const outMap = this.callServer(inParam, EVerb.VERB_LOGIN)

    //エラーがないかチェック
    if (outMap.get(SMSHashKeyConst.PARAM_KEY_THROWABLE)) {
      SMSCLLog.debug('システムエラー発生')
      let th = outMap.get(SMSHashKeyConst.PARAM_KEY_THROWABLE)
      paramMap.put(
        SMSHashKeyConst.PARAM_KEY_ERROR_FLG,
        SMSHashKeyConst.IS_ERROR,
      )
      paramMap.put(SMSHashKeyConst.PARAM_KEY_THROWABLE, th)
      outParam.setCommunicationData(paramMap)
    } else {
      if (outMap.get(SMSHashKeyConst.WARNING_MSG_KEY) === null) {
        SMSCLLog.debug('成功')
        //警告がなければ成功をセットする
        outMap.put(
          SMSHashKeyConst.PARAM_KEY_ERROR_FLG,
          SMSHashKeyConst.IS_SUCCESS,
        )
        outParam.setCommunicationData(outMap)
      } else {
        SMSCLLog.debug('警告発生')
        //警告があればそのまま返す
        outParam.setCommunicationData(outMap)
      }
    }

    return outParam
  }

  callServer(inParam: JCFAdapterInParam, verb: EVerb) {
    const isLoginVerb = verb === EVerb.VERB_LOGIN
    const isLogoutVerb = verb === EVerb.VERB_LOGOUT
    const isCommonVerb = verb === EVerb.VERB_COMMON

    // 2006/11/27 Add start
    //ログ出力用にクラスとメソッド名称を取得する
    let className = ''
    let methodName = ''

    // TODO: we cannot get classname and method name from error stack, becasue js output is compressed
    // try {
    //   throw new Error("メソッド取得用");
    // } catch (e: any) {
    //   const traces = e.getStackTrace()
      // StackTraceElement[] traces = e.getStackTrace();
      // className = traces[ERROR_DEPTH].getClassName();
      // methodName = traces[ERROR_DEPTH].getMethodName();
    // }

    let inParamMap = inParam.getCommunicationData()

    let inLoginInfo = inParamMap.get(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    //共通情報に呼び出しクラス名、メソッド名をセット
    inLoginInfo.setNmClass(className)
    inLoginInfo.setNmMethod(methodName)
    //上り時エラー情報をクリアする
    inLoginInfo.setStError('')
    inLoginInfo.setCdErrorKoumoku('')
    inLoginInfo.setQtErrorRecordPosition('')
    inLoginInfo.setNmErrorColumn('')
    inLoginInfo.setCdMessage('')
    // inLoginInfo.setNmMessageChikan(null)
    inLoginInfo.setFgPopup(true)

    //ログ記述
    this.preprocess(inParam)
    // 2006/11/27 Add end

    let outMap = new HashMap()
    let paramMap = inParam.getCommunicationData()

    //業務ロジックから渡されたデータ（HashMap）を取り出す

    let data = paramMap.get(SMSHashKeyConst.PARAM_KEY_DATA) as HashMap
    let cbsName = paramMap.get(SMSHashKeyConst.PARAM_KEY_CBS_NAME)
    let cbsVerb = paramMap.get(SMSHashKeyConst.PARAM_KEY_CBS_VERB)
    let gamenID = paramMap.get(API_GAMEN_ID)

    MsisDebug.log(`callEJB > CallerAdapter > params:`, {
      cbsName,
      cbsVerb,
      data,
      gamenID,
    })
    //2014/01/24 システム統合開発プロジェクト Add Start
    data.put(
      SMSHashKeyConst.PARAM_KEY_JCFEVENT_SUBSYSTEM,
      paramMap.get(SMSHashKeyConst.PARAM_KEY_JCFEVENT_SUBSYSTEM),
    )
    //2014/01/24 システム統合開発プロジェクト Add End

    //Servletに投げるDataBeanに，cbsName,cbsVerb,dataを詰める。

    const splitVerb = cbsVerb.split('.')
    if (!gamenID?.length) {
      throw new Error('gamenID is required')
    }

    // url replace
    // e.g. YMBKKSF620M_init3
    let url = `/${gamenID}_${splitVerb[splitVerb.length - 1]}`
    if (isLoginVerb) {
      url = '/login'
    }

    // stringify when send api before
    const params = data._toObject()
    params.commonMsg = objectifyInstance(inLoginInfo)

    // send api
    let response: ISyncResponse | undefined
    const checkedParams = checkApiParams(params)
    try {
      SMSCLLog.debug('verbの確認：' + verb)
      response = syncHttp({
        url,
        method: HTTPMethods.POST,
        data: checkedParams,
      })
      MsisDebug.log(
        'callEJB > CallerAdapter > syncHttp > Request response:',
        response,
      )
    } catch (e: any) {
      // 2007/08/30 add
      e.printStackTrace()
      // 2007/08/30 add
      throw new JCFAdapterException('サーバの通信に失敗しました', e)
    }
    if (!response) {
      throw new JCFAdapterException('サーバの通信に失敗しました')
    }

    // instantiation when send api after
    // make sure response `SMSHashKeyConst.PARAM_KEY_COMMON` value is Instance of `SMSLoginInfoImpl`
    const outLoginInfo = new SMSLoginInfoImpl()
    if (isLoginVerb) {
      setInstanceValue(outLoginInfo, response.data.payload.commonMsg)
      outMap = toHashMap(response.data.payload)
    } else {
      setInstanceValue(outLoginInfo, response.data?.riyoSeigenMsg?.commonMsg)
      outMap = toHashMap(response.data)
    }
    outMap.put(SMSHashKeyConst.PARAM_KEY_COMMON, outLoginInfo)

    // 2006/11/27 Add start
    //ログ記述
    let loginInfo: SMSLoginInfoImpl = outMap.get(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    this.postprocess(inParam, loginInfo)
    // 2006/11/27 Add end

    return outMap
  }

  /**
   * 前処理です。トレースログ出力します。<br>
   * @param inParam パラメータ
   */
  private preprocess(inParam: JCFAdapterInParam) {
    //ここにログを書く　アダプタ開始
    let paramMap: HashMap = inParam.getCommunicationData()

    let loginInfo: SMSLoginInfoImpl = paramMap.get(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    //ログインID
    let loginId: string = loginInfo != null ? loginInfo.getUserId() : ''
    //ホスト名
    let hostName: string = loginInfo != null ? loginInfo.getNmHost() : ''
    //IPアドレス
    let address: string = loginInfo != null ? loginInfo.getNmClientIP() : ''
    // 2006/11/28 Add start
    //サーバ名
    let serverHostName: string =
      loginInfo != null ? loginInfo.getNmServer() : ''
    //サーバIPアドレス
    let serverAddress: string =
      loginInfo != null ? loginInfo.getNmServerIP() : ''
    // 2006/11/28 Add end
    //クラス名
    let className: string = loginInfo != null ? loginInfo.getNmClass() : ''
    //サブシステムID
    let subsystemId: string = SMSSubSystemInfo.getSubSystemID(className)
    //イベント名(verb)
    let verb: string = paramMap.get(
      SMSHashKeyConst.PARAM_KEY_CBS_VERB,
    ) as string
    //クラス名
    className = className
    //メソッド名
    let method: string = loginInfo != null ? loginInfo.getNmMethod() : ''
    //メッセージID
    let messageId: string = ''
    //レベル
    let level: string = SMSMessageMgr.getMessageLevel(messageId)
    //メッセージ
    let message: string = ''

    // 2006/11/27 Mod start
    //		SMSCLLog.trace(
    SMSCLLog.traceForParts(
      // 2006/11/27 Mod start
      '"' +
        SMSSystemDateUtil.getTimeStamp() +
        '","' +
        hostName +
        '","' +
        address +
        '","' +
        // 2006/11/28 Add start
        serverHostName +
        '","' +
        serverAddress +
        '","' +
        // 2006/11/28 Add end
        subsystemId +
        '","' +
        loginId +
        '","' +
        verb +
        '","' +
        className +
        '","' +
        method +
        '","' +
        level +
        '","' +
        messageId +
        '","' +
        message +
        '"',
    )
  }

  /**
   * 後処理です。トレースログ出力します。
   * @param inParam   パラメータ
   * @param loginInfo 共通情報
   * @param outParam
   */
  private postprocess(inParam: JCFAdapterInParam, loginInfo: SMSLoginInfoImpl) {
    //ここにログを書く　アダプタ終了

    //2006/09/15 add
    if (loginInfo == null) {
      SMSCLLog.trace('ログイン情報がありません')
      return
    }
    //2006/09/15 add

    let inParamMap: HashMap = inParam.getCommunicationData()
    //		HashMap outParamMap = outParam.getCommunicationData();
    //ログインID
    let loginId: string = loginInfo.getUserId()

    //ホスト名
    let hostName: string = loginInfo.getNmHost()
    //IPアドレス
    let address: string = loginInfo.getNmClientIP()
    // 2006/11/28 Add start
    //サーバ名
    let serverHostName: string = loginInfo.getNmServer()
    //サーバIPアドレス
    let serverAddress: string = loginInfo.getNmServerIP()
    // 2006/11/28 Add end

    //クラス名
    let className: string = loginInfo.getNmClass()

    //サブシステムID
    let subsystemId: string = SMSSubSystemInfo.getSubSystemID(className)

    //イベント名(verb)
    let verb: string = inParamMap.get(
      SMSHashKeyConst.PARAM_KEY_CBS_VERB,
    ) as string

    //メソッド名
    let method: string = loginInfo.getNmMethod()
    //メッセージID
    let messageId: string = loginInfo.getCdMessage()
    //レベル
    let level: string = SMSMessageMgr.getMessageLevel(messageId)
    //メッセージ
    let messageDetails: string[] = loginInfo.getNmMessageChikan()
    let message: string = ''
    if (messageDetails != null) {
      message = SMSMessageMgr.getMessage(messageId, messageDetails)
    }

    // 2006/11/27 Mod start
    //		SMSCLLog.trace(
    SMSCLLog.traceForParts(
      // 2006/11/27 Mod start
      '"' +
        SMSSystemDateUtil.getTimeStamp() +
        '","' +
        hostName +
        '","' +
        address +
        '","' +
        // 2006/11/28 Add start
        serverHostName +
        '","' +
        serverAddress +
        '","' +
        // 2006/11/28 Add end
        subsystemId +
        '","' +
        loginId +
        '","' +
        verb +
        '","' +
        className +
        '","' +
        method +
        '","' +
        level +
        '","' +
        messageId +
        '","' +
        message +
        '"',
    )
  }
}
