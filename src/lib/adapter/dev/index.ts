import { getGlobalContext } from '@/lib/adapter/hooks'
import { HashMap } from '@/lib/native/util/HashMap'
import { SMSHashKeyConst } from '@/lib/sms/sol/sys/SMSHashKeyConst'
import { SMSLoginInfoImpl } from '@/lib/sms/sol/sys/SMSLoginInfoImpl'
import { MsisDebug } from '@/utils/debug/log'

export class Dev {
  constructor() {
    const context = getGlobalContext().context
    MsisDebug.log('context: ', context)
  }

  login() {
    if (!import.meta.env.DEV) {
      return
    }

    MsisDebug.log('mock login')

    const context = getGlobalContext().context
    const loginHash = new HashMap()
    const commonMsgMock = new HashMap()

    const mockCommonMsg = {
      cdUser: 'caz38741',
      nmUserMyoji: '',
      nmUserNamae: '富士通 太郎',
      nmUserKana: '',
      cdJugyoin: '000000001',
      cdKaisha: '1001',
      nmKaisha: 'テスト',
      cdSonekiKanriSoshiki3: '000001',
      cdSonekiKanriSoshiki4: '000001',
      nmBusho: '損益組織000001 損益組織000001',
      stYakuwari: '001',
      nmHost: '719A1673',
      nmClientIP: '113.154.22.115',
      tmLogin: '20240425135252809',
      dtUnyo: '20231001',
    }

    commonMsgMock.put('cdUser', mockCommonMsg.cdUser) // ユーザID
    commonMsgMock.put('nmUserMyoji', mockCommonMsg.nmUserMyoji) // ユーザ名（苗字）
    commonMsgMock.put('nmUserNamae', mockCommonMsg.nmUserNamae) // ユーザ名（名前）
    commonMsgMock.put('nmUserKana', mockCommonMsg.nmUserKana) // ユーザ名（カナ）
    commonMsgMock.put('cdJugyoin', mockCommonMsg.cdJugyoin) // 従業員コード
    commonMsgMock.put('cdKaisha', mockCommonMsg.cdKaisha) // 会社コード
    commonMsgMock.put('nmKaisha', mockCommonMsg.nmKaisha) // 会社名
    commonMsgMock.put(
      'cdSonekiKanriSoshiki3',
      mockCommonMsg.cdSonekiKanriSoshiki3,
    ) // 損益管理組織コード(レベル3)
    commonMsgMock.put(
      'cdSonekiKanriSoshiki4',
      mockCommonMsg.cdSonekiKanriSoshiki4,
    ) // 損益管理組織コード(レベル4)
    commonMsgMock.put('nmBusho', mockCommonMsg.nmBusho) // 部署名
    commonMsgMock.put('stYakuwari', mockCommonMsg.stYakuwari) // 役割区分
    commonMsgMock.put('nmHost', mockCommonMsg.nmHost) // 自ホスト名
    commonMsgMock.put('nmClientIP', mockCommonMsg.nmClientIP) // クライアントIPアドレス
    commonMsgMock.put('tmLogin', mockCommonMsg.tmLogin) // ログイン日時
    commonMsgMock.put('dtUnyo', mockCommonMsg.dtUnyo) // 運用日
    loginHash.put('commonMsg', commonMsgMock)

    // ログイン情報を取得
    let commonMsg: HashMap = loginHash.get('commonMsg') as HashMap

    let loginInfo: SMSLoginInfoImpl = new SMSLoginInfoImpl()

    loginInfo.setUserId(commonMsg.get('cdUser') as string)
    loginInfo.setNmUserMyoji(commonMsg.get('nmUserMyoji') as string)
    loginInfo.setNmUserNamae(commonMsg.get('nmUserNamae') as string)
    if (''.equals(commonMsg.get('nmUserMyoji') as string)) {
      loginInfo.setUserName(commonMsg.get('nmUserNamae') as string)
    } else {
      loginInfo.setUserName(
        (commonMsg.get('nmUserMyoji') as string) +
          ' ' +
          (commonMsg.get('nmUserNamae') as string),
      )
    }
    loginInfo.setNmUserKana(commonMsg.get('nmUserKana') as string)
    loginInfo.setCdJugyoin(commonMsg.get('cdJugyoin') as string)
    loginInfo.setCdKaisha(commonMsg.get('cdKaisha') as string)
    loginInfo.setNmKaisha(commonMsg.get('nmKaisha') as string)
    loginInfo.setCdSonekiKanriSoshiki3(
      commonMsg.get('cdSonekiKanriSoshiki3') as string,
    )
    loginInfo.setCdSonekiKanriSoshiki4(
      commonMsg.get('cdSonekiKanriSoshiki4') as string,
    )
    loginInfo.setBushoName(commonMsg.get('nmBusho') as string)
    loginInfo.setStYakuwari(commonMsg.get('stYakuwari') as string)
    loginInfo.setNmHost(commonMsg.get('nmHost') as string)
    loginInfo.setNmClientIP(commonMsg.get('nmClientIP') as string)
    loginInfo.setTmLogin(commonMsg.get('tmLogin') as string)
    loginInfo.setCdGamen('')
    loginInfo.setNmGamen('')
    loginInfo.setQtSaidaiHyouji('100') //最大表示件数
    loginInfo.setQtSaidaiKensaku('100') //最大検索件数
    loginInfo.setQtHyoujiZumi('') //表示済位置
    loginInfo.setStKensakuHoukou('') //検索方向区分
    loginInfo.setStDirectory('') //ディレクトリ区分
    loginInfo.setNmFile('') //ファイル名
    loginInfo.setFgInline('') //インラインフラグ
    loginInfo.setStError('') //エラー種別
    loginInfo.setCdErrorKoumoku('') //エラー項目ID
    loginInfo.setQtErrorRecordPosition('') //エラー発生レコード位置
    loginInfo.setNmErrorColumn('') //エラー発生列項目名
    loginInfo.setCdMessage('') //メッセージID
    loginInfo.setDtUnyo(commonMsg.get('dtUnyo')) //運 as string用日
    loginInfo.setTmKoshin('') //更新日時

    // アプリケーションデータ領域に共通情報を設定
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }
}
