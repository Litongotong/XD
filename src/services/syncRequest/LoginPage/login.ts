import { HTTPMethods } from '@/services/interface'
import { syncHttp } from '../commonRequest'
import { storage } from '@/utils/browser/storage'
import { router } from '@/routes'

/**
 * @description ログイン画面 ログインAPI
 * @param cdUserId
 * @param ifPassword
 * @param nmHost
 * @param  stTammatsu
 * @param  commonMsg
 * @returns
 */
export function loginPage_login(opts: {
  cdUserId: string
  ifPassword: string
  nmHost: string
  stTammatsu: string
  commonMsg: { unyobi: string }
}) {
  const { cdUserId, ifPassword, nmHost, stTammatsu, commonMsg } = opts
  const response = syncHttp({
    url: '/login',
    method: HTTPMethods.POST,
    data: {
      cdUserId: cdUserId,
      ifPassword: ifPassword,
      nmHost: nmHost,
      stTammatsu: stTammatsu,
      unyobi: commonMsg.unyobi,
    },
  })

  // const result = {
  //   result: {
  //     completed: true,
  //     message: [''],
  //   },
  //   payload: {
  //     authorityCBMMsgList: [],
  //     fgJugyoin: '0',
  //     commonMsg: {
  //       nmClientIP: '113.154.22.115',
  //       nmUserMyoji: '',
  //       tmLogin: '20240425135252809',
  //       nmBusho: '損益組織000001 損益組織000001',
  //       nmHost: '719A1673',
  //       stYakuwari: '001',
  //       dtUnyo: '20231001',
  //       cdJugyoin: '000000001',
  //       cdSonekiKanriSoshiki4: '000001',
  //       nmUserNamae: '富士通 太郎',
  //       nmKaisha: 'テスト',
  //       cdUser: 'caz38741',
  //       cdSonekiKanriSoshiki3: '000001',
  //       nmUserKana: '',
  //       cdKaisha: '1001',
  //     },
  //     topicInfoCBMMsg: {
  //       ifTopicContent: '',
  //       ifTopicTitle: '',
  //       dtTopicKoshin: '',
  //     },
  //     stLogin: 0,
  //     fgLogin: true,
  //     stTammatsu: '01',
  //     menuItemInfoCBMMsgList: [],
  //     nmHost: '719A1673',
  //     cdUserId: 'caz38741',
  //     tmZenkaiLogin: '20240425135048587',
  //     fgPasswordYukoKigen: false,
  //     nuShippaiKaisu: 0,
  //     ifPassword: 'password',
  //     cdLoginTanmatsu: '113.154.22.115',
  //   },
  // }
  // return result

  return response
}

/**
 * @description ログイン画面 ログアウトAPI
 * @param  commonMsg
 * @returns
 */
export function loginPage_logout(opts: {
  commonMsg: {
    cdUser: string
    cdKaisha: string
  }
  stTammatsu: string
}) {
  const { commonMsg, stTammatsu } = opts
  const response = syncHttp({
    url: '/logout',
    method: HTTPMethods.POST,
    data: {
      commonMsg,
      stTammatsu,
    },
  })

  if (response.status == 200) {
    storage.clearSessionData()
    router.push('/')
  }

  return response.data
}
