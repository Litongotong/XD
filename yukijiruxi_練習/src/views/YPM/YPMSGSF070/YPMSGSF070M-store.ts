import type { Dropdown, Table } from '@/types/components'
import type { YPMSGSF070M } from './types'

import { ColorStatus, Message, ViewMode } from '@/enums'
import {
  initYPMSGSF070M,
  queryInProcessItemInputList,
  updateInProcesssItems,
} from '@/services/modules/YPM/YPMSGSF070'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserInfoStore } from '@/stores/user-info'
import type { APIYPMCommon } from '@/services/modules/YPM/types'
import { getMonthEnd } from '@/utils'
import { useMessage } from '@/stores/message'
import { useRoute, useRouter } from 'vue-router'
import { PAGES } from '@/router/constant'
import Big from 'big.js'

export const useYPMSGSF070MStore = defineStore('YPMSGSF070M', () => {
  /** 編集可能ヘッダ色 */
  const EDITABLE_COLOR = 'rgb(123, 149, 251)'
  /** 編集不可能ヘッダ色 */
  const DISEDITABLE_COLOR = 'rgb(182, 198, 250)'
  /** 単位 */
  const UNIT = 'G'
  /** 原価要素(通常)(00) */
  const ST_SEIBUN_NML = '00'
  /** 原価要素(FAT)(01) */
  const ST_SEIBUN_FAT = '01'
  /** 原価要素(SNF)(01) */
  const ST_SEIBUN_SNF = '02'
  /** ゼロ */
  const ZERO_VALUE = '0'
  /** 製造日 */
  const DT_SEIZO = 'dtSeizo'
  /** 製造ロット */
  const IF_SEIZO_LOT = 'ifSeizoLot'
  /** 原材料コード */
  const CD_GENZAIRYO = 'cdGenzairyo'
  /** 原材料略式名称 */
  const NM_GENZAIRYO_RYAKUSHIKI = 'nmGenzairyoRyakushiki'
  /** 単位 */
  const IF_TANI = 'ifTani'
  /** 数量 */
  const QT_SHIYO = 'qtShiyo'
  /** 単価 */
  const MN_TANKA = 'mnTanka'
  /** 金額 */
  const MN_SHIYO = 'mnShiyo'
  /** TS数量 */
  const QT_TS = 'qtTs'
  /** TS単価 */
  const MN_TS_TANKA = 'mnTsTanka'
  /** 修正数量(TS) */
  const QT_SHUSEI_TS = 'qtShuseiTs'
  /** 修正金額(TS) */
  const MN_SHUSEI_TS = 'mnShuseiTs'
  /** TS金額 */
  const MN_TS = 'mnTs'
  /** 修正数量 */
  const QT_SHUSEI_SHIYO = 'qtShuseiShiyo'
  /** 修正金額 */
  const MN_SHUSEI_SHIYO = 'mnShuseiShiyo'
  /** FAT単価 */
  const MN_FAT_TANKA = 'mnFatTanka'
  /** FAT数量 */
  const QT_FAT = 'qtFat'
  /** FAT金額 */
  const MN_FAT = 'mnFat'
  /** 修正数量(FAT) */
  const QT_SHUSEI_FAT = 'qtShuseiFat'
  /** 修正金額(FAT) */
  const MN_SHUSEI_FAT = 'mnShuseiFat'
  /** SNF単価 */
  const MN_SNF_TANKA = 'mnSnfTanka'
  /** SNF数量 */
  const QT_SNF = 'qtSnf'
  /** SNF金額 */
  const MN_SNF = 'mnSnf'
  /** 修正数量(SNF) */
  const QT_SHUSEI_SNF = 'qtShuseiSnf'
  /** 修正金額(SNF) */
  const MN_SHUSEI_SNF = 'mnShuseiSnf'

  /** 数量インデックス */
  const IDX_QT_SHIYO = 6
  /** 単価インデックス */
  const IDX_QT_TANKA = 7
  /** 金額インデックス */
  const IDX_MN_SHIYO = 8
  /** 修正数量インデックス */
  const IDX_QT_SHUSEI_SHIYO = 9
  /** 修正金額インデックス */
  const IDX_MN_SHUSEI_SHIYO = 10
  /** 元修正数量インデックス */
  const IDX_QT_MOTOSHUSEI_SHIYO = 11
  /** 再計算区分インデックス */
  const IDX_SAIKEISAN = 12
  /** 修正数量、修正金額インデックス(デフォルト) */
  const IDX_SHUSEI_DEF = 0
  /** 修正数量、修正金額区分 */
  const ST_SHUSEI_DEF = ''
  /** 修正数量、修正金額インデックス(FAT) */
  const IDX_SHUSEI_FAT = 1
  /** 修正数量、修正金額区分(FAT) */
  const ST_SHUSEI_FAT = 'F'
  /** 修正数量、修正金額インデックス(SNF) */
  const IDX_SHUSEI_SNF = 2
  /** 修正数量、修正金額区分(SNF) */
  const ST_SHUSEI_SNF = 'S'
  /** 修正数量、修正金額インデックス(TS) */
  const IDX_SHUSEI_TS = 3
  /** 修正数量、修正金額区分(TS) */
  const ST_SHUSEI_TS = 'T'
  /** 乳・ＦＡＴ・ＳＮＦ・ＴＳ区分インデックス */
  const IDX_ST_NYU_FAT_SNF_TS = 4
  /** 乳市区分 */
  const HM_KEY_ST_NYUSHI = 'stNyushi'
  /** 乳市区分(乳食)(01) */
  const ST_NYUSHI_NYUSHOKU = '01'
  /** 乳市区分(市乳)(02) */
  const ST_NYUSHI_SHINYU = '02'

  /** 処理モード */
  const HM_KEY_MODE = 'mode'

  const MODE_U = '2'
  /** 工場コード */
  const HM_KEY_CD_KOJO_ZAIKO = 'cdKojoZaikoBasho'
  /** 対応組織コード */
  const HM_KEY_CD_TAIOUSOSHIKI = 'cdTaiousoshiki'
  /** 損益管理組織コード */
  const HM_KEY_CD_SONEKIKANRI_SOSHIKI = 'cdSonekikanriSoshiki'

  /** 製造ロット */
  const HM_KEY_IF_SEIZO_LOT = 'ifSeizoLot'
  /** スプレッド内の製造ロットの列位置 */
  const IDX_IF_SEIZO_LOT = 1
  /** 品目コード */
  const HM_KEY_CD_GENZAIRYO = 'cdGenzairyo'
  /** シーケンス番号 */
  const KEY_SEQ = 'noSeq'

  /** 画面スプレッド表示情報 */
  const COLUMNKEY: string[][] = [
    /** デフォルト */
    [
      DT_SEIZO,
      IF_SEIZO_LOT,
      CD_GENZAIRYO,
      NM_GENZAIRYO_RYAKUSHIKI,
      '',
      IF_TANI,
      QT_SHIYO,
      MN_TANKA,
      MN_SHIYO,
      QT_SHUSEI_SHIYO,
      MN_SHUSEI_SHIYO,
    ],
    /** FAT */
    [
      DT_SEIZO,
      IF_SEIZO_LOT,
      CD_GENZAIRYO,
      NM_GENZAIRYO_RYAKUSHIKI,
      '',
      IF_TANI,
      QT_FAT,
      MN_FAT_TANKA,
      MN_FAT,
      QT_SHUSEI_FAT,
      MN_SHUSEI_FAT,
    ],
    /** SNF */
    [
      DT_SEIZO,
      IF_SEIZO_LOT,
      CD_GENZAIRYO,
      NM_GENZAIRYO_RYAKUSHIKI,
      '',
      IF_TANI,
      QT_SNF,
      MN_SNF_TANKA,
      MN_SNF,
      QT_SHUSEI_SNF,
      MN_SHUSEI_SNF,
    ],
    /** TS */
    [
      DT_SEIZO,
      IF_SEIZO_LOT,
      CD_GENZAIRYO,
      NM_GENZAIRYO_RYAKUSHIKI,
      '',
      IF_TANI,
      QT_TS,
      MN_TS_TANKA,
      MN_TS,
      QT_SHUSEI_TS,
      MN_SHUSEI_TS,
    ],
  ]

  const userInfo = useUserInfoStore()
  const route = useRoute()

  const viewMode = computed<ViewMode | undefined>(
    () => (route.query.mode as ViewMode) ?? ViewMode.NEW,
  )

  const isCreateMode = computed<boolean>(() => viewMode.value === ViewMode.NEW)

  const message = useMessage()
  const router = useRouter()

  /** 業務データ */
  const businessData = ref<YPMSGSF070M.BusinessData>()
  /** 業務データを設置 */
  const setBusinessData = (data: YPMSGSF070M.BusinessData) =>
    (businessData.value = data)

  /** 業務データバックアップ */
  const businessDataBackup = ref<YPMSGSF070M.BusinessData>()

  /**
   * 業務データバックアップを設置
   * @param data
   */
  const setBusinessDataBackup = (data?: YPMSGSF070M.BusinessData) => {
    if (!data) {
      businessDataBackup.value = data
      return
    }

    const newDataString = JSON.stringify(data)
    businessDataBackup.value = JSON.parse(newDataString)
  }

  /** @description 業務データを取得する */
  async function queryBusinessData() {
    const response = await initYPMSGSF070M({
      commonMsg: {
        // TODO: ユーザー情報取得実装の待ち
        // cdUser: userInfo.userInfo?.userId ?? '',
        // cdKaisha: userInfo.userInfo?.companyCode ?? '',

        // NOTE: 一時データ
        cdUser: '1234    ',
        cdKaisha: '1001',
      },

      mode: viewMode.value!,
    })

    if (response) {
      setBusinessData({ ...businessData.value, ...response })
      setBusinessDataBackup({ ...businessData.value, ...response })
    }
  }

  /** 重量と単位を業務データに設置 */
  const setWeightAndUnitToBusinessData = () => {
    if (businessData.value) {
      businessData.value.qtShikakariJuryo = qtJuryo.value
      businessData.value.ifTani = ifTani.value
    }
  }

  /** 仕掛情報を更新 */
  const updateStoreInProcesssItems = async () => {
    try {
      //「表示」時の検索条件
      let inMsg = [] as any
      //データ
      let updateMap = [] as any

      if (isCreateMode.value) {
        updateMap = changeData(true, false, true)
      } else {
        //元は updateMap = changeData(true)
        updateMap = changeData(true, true, true)
      }

      if (updateMap === null) {
        //NULLの場合は、内部の値のデータ形式エラー時、メッセージはchangeDataにて出力
        return
      }

      // if (updateMap.length === 0 && !IsChangeJuryo()) {
      //   //変更された項目はありません。
      //   message.setPageErrorMessage('変更された項目はありません。')
      //   return;
      // }

      //todo:
      // if (getStNyushi()===ST_NYUSHI_SHINYU) {
      //   // 重量の差異チェックを行う。
      //   if (!checkIsOverThanJuryo()) {
      //     this.getReturnInfo().cancelChangeConfiguration();
      //     return;
      //   }

      //   // 数量の関連チェックを行う。
      //   if (!checkisQtDetail()) {
      //     this.getReturnInfo().cancelChangeConfiguration();
      //     return;
      //   }
      // }

      //todo:
      //キー項目変更チェック
      // if (!isChkJokenData()) {
      //   this.jokenDataChange();
      // }

      //メッセージクリア
      message.clearPageMessages()

      //削除の確認
      //todo:message
      // const ret = message.setPageErrorMessage("SMSMessageConst.YCSCMNMSC003")

      // if (ret !== JCFMessageOnWindow.BTN_YES) {
      //   //削除キャンセル
      //   return;
      // }

      inMsg = [
        ...inMsg,
        {
          //検索条件
          shikakarihinMeisaiCBMMsgList: updateMap,
          //在庫場所コード
          cdKojoZaikoBasho: getCdKojoZaikoBasho(),
          //損益管理組織コード
          // cdJoisonekikanriSoshiki: getCdSonekikanriSoshiki(),
          cdJoisonekikanriSoshiki: '123456',
          //対応組織コード
          cdTaiousoshiki: getCdTaiouSoshiki(),
          //管理工程コード
          // cdKanrikotei: kanriCmb.value,
          cdKanrikotei: '123',
          //製品コード
          // cdSeihin: cdHinmoku.value,
          cdSeihin: '123456',
          //品目区分
          stNyuryokuHinmoku: hinmokuCmb.value,
          //仕掛品重量
          // nuShikakariJuryo: qtJuryo.value,
          nuShikakariJuryo: '1',
          //モード
          mode: getMode(),
          //乳市区分
          // stNyushi: getStNyushi(),
          stNyushi: '02',
          // dtDenpyo: businessDataBackup.value?.dtDenpyo ?? '',
          dtDenpyo: '20240111',
          // ifSeizoLot: businessDataBackup.value?.ifSeizoLot ?? '',
          ifSeizoLot: '231031-1-000331',
          //commonMsg
          commonMsg: {
            // cdUser: businessDataBackup.value?.commonMsg?.cdUser ?? '',
            cdUser: 'shuaijun',
            // cdKaisha: businessDataBackup.value?.commonMsg?.cdKaisha ?? '',
            cdKaisha: '1001',
            // cdProgram: businessDataBackup.value?.commonMsg?.cdProgram ?? '',
            cdProgram: 'YPMSGSF070M',
            // nmHost: businessDataBackup.value?.commonMsg?.nmHost ?? '',
            nmHost: 'wangxin',
            dtUnyo: businessDataBackup.value?.commonMsg?.dtUnyo ?? '',
            // dtUnyo: '20240111',
            ifYPM: businessDataBackup.value?.commonMsg?.ifYPM ?? {},
            // ifYPM: {
            //   cdKaisha: "1001",
            //   cdUser: "99999999",
            //   cdSonekiKanriSoshiki3: "000001",
            //   qtSaidaiKensaku: "100",
            //   qtSaidaiHyouji: "50",
            //   qtHyoujiPage: "1",
            //   qtHyoujiZumi: "1",
            //   dtUnyo: "20011010",
            //   cdKojoZaikoBasho: "000001",
            //   errorRecordPositionList: [
            //     "1",
            //     "2",
            //     "3"
            //   ],
            //   stKojoZaikoBasho: "001"
            // },
            qtSaidaiKensaku:
              businessDataBackup.value?.commonMsg?.qtSaidaiKensaku ?? '',
            qtSaidaiHyouji:
              businessDataBackup.value?.commonMsg?.qtSaidaiHyouji ?? '',
            qtHyoujiPage:
              businessDataBackup.value?.commonMsg?.qtHyoujiPage ?? '',
            qtHyoujiZumi:
              businessDataBackup.value?.commonMsg?.qtHyoujiZumi ?? '',
          },
        },
      ]

      if (isShinyu()) {
        let containsKey = false
        inMsg.forEach((data: any, index: any, key: any) => {
          if (key === HM_KEY_IF_SEIZO_LOT) {
            containsKey = true
          }
        })

        if (!containsKey) {
          inMsg = [
            ...inMsg,
            {
              HM_KEY_IF_SEIZO_LOT: body_spread01.value[0][IDX_IF_SEIZO_LOT],
            },
          ]
        }
      }

      const result = await updateInProcesssItems(inMsg[0])

      if (result && result.ifSeizoLot) {
        if (isCreateMode.value) {
          // 新規の場合は、登録後は更新モードとする。
          let newData = businessData.value
          if (newData) {
            newData.mode = MODE_U
            setBusinessData(newData)
            setBusinessDataBackup(newData)
          }

          // ヘッダ部を入力不可
          // this.setHeaderControl(false);

          // 削除ボタンを有効化
          // SMSHeaderFooterManager.setEnabledFooterButton(getContext(), SMSHeaderFooterManager.ITEM_FUNCBTN4, true);
        }

        //業務データハッシュマップの取得
        // const gyomuMap = getGyomuData(returnMap)

        //todo:画面表示
        // createSpreadData(gyomuMap)

        //todo：画面状態制御
        // setEnable()

        //正常終了のメッセージ
        message.clearFooterMessage()
        message.setPageSuccessMessage(Message.MSGID_REGIST_OK)
      } else {
        // SMSCLLog.trace("YPMSGSF070MLogic:register() CALLEJB ERROR");
      }
    } catch (e) {
      //TODO:
      //臨時動き:エラーへ遷移
      router.push(PAGES.YCSCMNF070M)
    }
  }

  const changeData = (
    fgRegist: boolean,
    fgModify: boolean,
    fgCheck: boolean,
  ): any => {
    //データ
    const spread = body_spread01.value
    //元データ
    const motoData = businessDataBackup.value ?? {}
    //送信データ
    let arSendList = [] as any
    //区分
    let stKubun = null
    //データ変更有無
    let fgChange = false

    let map = [] as any

    if (!isCreateMode.value) {
      spread.forEach((rowData: Table.DatumRow) => {
        //乳 or FAT or SNF or TSの区分を取得
        stKubun = rowData[IDX_ST_NYU_FAT_SNF_TS].datum
        let qtKey = null
        let mnKey = null

        if (stKubun === ST_SHUSEI_DEF) {
          //乳
          qtKey = QT_SHUSEI_SHIYO
          mnKey = MN_SHUSEI_SHIYO
        } else if (stKubun === ST_SHUSEI_FAT) {
          //ＦＡＴ
          qtKey = QT_SHUSEI_FAT
          mnKey = MN_SHUSEI_FAT
        } else if (stKubun === ST_SHUSEI_SNF) {
          //ＳＮＦ
          qtKey = QT_SHUSEI_SNF
          mnKey = MN_SHUSEI_SNF
        } else if (stKubun === ST_SHUSEI_TS) {
          //ＴＳ
          qtKey = QT_SHUSEI_TS
          mnKey = MN_SHUSEI_TS
        }

        //数量
        const dbJuryo = ''
        const crtJuryo = rowData[IDX_QT_SHUSEI_SHIYO].datum
        //金額
        const dbKingaku = ''
        const crtKingaku = rowData[IDX_MN_SHUSEI_SHIYO].datum

        if (fgRegist) {
          //異常値チェック
          // if (ischeckSpreadData(spread, dbJuryo, crtJuryo, dbKingaku, crtKingaku, row) === false) {
          //   return null;
          // }
        }

        //重量
        let saveJuryo = ''
        let nowJuryo = qtJuryo.value

        if (
          dbJuryo !== crtJuryo ||
          dbKingaku !== crtKingaku ||
          fgModify === false ||
          (isShinyu() && saveJuryo !== nowJuryo) ||
          '2' === rowData[IDX_SAIKEISAN].datum
        ) {
          let mapSend = null
          //送信用の配列より同一のレコードのデータが存在するかチェックする。
          for (let j = 0; j < arSendList.length; j++) {
            const tmp = arSendList[j]
            const noSeq = tmp[KEY_SEQ]
            //エラーの場合は例外で落すため値チェックしない。
            if (noSeq === motoData[KEY_SEQ]) {
              mapSend = tmp
            }
          }

          if (mapSend === null) {
            mapSend = [motoData]

            if (isCreateMode.value) {
              mapSend.push({
                ...mapSend,
                [QT_SHUSEI_SHIYO]: ZERO_VALUE,
                [QT_SHIYO]: ZERO_VALUE,
                [MN_TANKA]: ZERO_VALUE,
                [MN_SHIYO]: ZERO_VALUE,
                [MN_SHUSEI_SHIYO]: ZERO_VALUE,
                [QT_SHUSEI_FAT]: ZERO_VALUE,
                [QT_FAT]: ZERO_VALUE,
                [MN_FAT_TANKA]: ZERO_VALUE,
                [MN_FAT]: ZERO_VALUE,
                [MN_SHUSEI_FAT]: ZERO_VALUE,
                [QT_SNF]: ZERO_VALUE,
                [QT_SHUSEI_SNF]: ZERO_VALUE,
                [QT_SHUSEI_TS]: ZERO_VALUE,
                [QT_TS]: ZERO_VALUE,
                [MN_TS_TANKA]: ZERO_VALUE,
                [MN_SNF_TANKA]: ZERO_VALUE,
                [MN_SNF]: ZERO_VALUE,
                [MN_SHUSEI_SNF]: ZERO_VALUE,
                [MN_SHUSEI_TS]: ZERO_VALUE,
                [MN_TS]: ZERO_VALUE,
              })

              // arSendList = [...mapSend]
            }
          }

          mapSend = [
            ...mapSend,
            {
              //修正数量
              qtKey: crtJuryo,
              //修正金額
              mnKey: crtKingaku,
            },
          ]

          arSendList = [...arSendList, ...mapSend]
        }

        //todo
        saveJuryo = ''
        nowJuryo = qtJuryo.value

        if (!fgModify || (isShinyu() && saveJuryo === nowJuryo)) {
          // todo  ??
          map = []
        }
      })
    } else {
      map = createData(fgRegist, fgModify)
    }

    //一時的コメントアウト
    // if (fgRegist && fgCheck) {
    //   // 管理工程が変更されているかチェックを行う。
    //   if (!isDiffKanriKotei()) {
    //     return null;
    //   }

    //   // 品目区分が変更されているかチェックを行う。
    //   if (!isDiffStHinmoku()) {
    //     return null;
    //   }

    //   // 品目の必須入力チェック
    //   if (!checkRequiredCdHinmoku()) {
    //     return null;
    //   }

    //   // 品目コードが変更されているかチェックを行う。
    //   if (!isDiffCdHinmoku()) {
    //     return null;
    //   }

    //   // 重量の必須入力チェック
    //   if (!checkRequiredCdJuryo()) {
    //     return null;
    //   }

    //   // 修正数量×単価≠修正金額の行が一行でも存在しないかチェックする。
    //   if (!CheckIsShuseiKingaku()) {
    //     return null;
    //   }

    //   /** 登録データの値の項目間チェックを行う */
    //   for (let i = 0; i < map.length; i++) {
    //     let qtShiyo = map[i][QT_SHUSEI_SHIYO].toString() ?? ''
    //     let qtFat = map[i][QT_SHUSEI_SHIYO].toString() ?? ''
    //     let qtSnf = map[i][QT_SHUSEI_SHIYO].toString() ?? ''
    //     let qtTs = map[i][QT_SHUSEI_SHIYO].toString() ?? ''

    //     if ('' === qtShiyo) {
    //       qtShiyo = "0"
    //     }

    //     if ('' === qtFat) {
    //       qtFat = "0"
    //     }

    //     if ('' === qtSnf) {
    //       qtSnf = "0"
    //     }

    //     if ('' === qtTs) {
    //       qtTs = "0"
    //     }

    //     //修正数量が0の場合は、FAT、SNF、TSの修正数量、修正金額も0で無いといけない。
    //     if ("0" === qtShiyo) {
    //       if ("0" !== qtFat || "0" !== qtSnf || '0' !== qtTs) {
    //         //色変えを行うか？

    //         //デフォルトが0の時は、その下の3つ（FAT、SNF、TS）も0で無ければいけない。
    //         message.setPageErrorMessage('???????')
    //         return null
    //       }
    //     }
    //   }
    // }

    return map
  }

  const createData = (fgRegist: boolean, fgModify: boolean): any => {
    const spread = body_spread01.value
    const motoData = businessDataBackup.value ?? {}
    //送信データ
    let arSendList = [] as any
    //区分
    let stKubun = ''

    spread.forEach((rowData: any, index: number) => {
      //行番号に対応するサーバからの取得データ（元データ）

      //乳 or FAT or SNF or TSの区分を取得
      stKubun = rowData[IDX_ST_NYU_FAT_SNF_TS].datum?.toString() ?? ''

      let qtKey = ''
      let mnKey = ''
      let tnkKey = ''
      let qtSKey = ''
      let mnSKey = ''

      if (stKubun === ST_SHUSEI_DEF) {
        //乳
        tnkKey = MN_TANKA
        qtKey = QT_SHIYO
        mnKey = MN_SHIYO
        qtSKey = QT_SHUSEI_SHIYO
        mnSKey = MN_SHUSEI_SHIYO
      } else if (stKubun === ST_SHUSEI_FAT) {
        //ＦＡＴ
        tnkKey = MN_FAT_TANKA
        qtKey = QT_FAT
        mnKey = MN_FAT
        qtSKey = QT_SHUSEI_FAT
        mnSKey = MN_SHUSEI_FAT
      } else if (stKubun === ST_SHUSEI_SNF) {
        //ＳＮＦ
        tnkKey = MN_SNF_TANKA
        qtKey = QT_SNF
        mnKey = MN_SNF
        qtSKey = QT_SHUSEI_SNF
        mnSKey = MN_SHUSEI_SNF
      } else if (stKubun === ST_SHUSEI_TS) {
        //ＴＳ
        tnkKey = MN_TS_TANKA
        qtKey = QT_TS
        mnKey = MN_TS
        qtSKey = QT_SHUSEI_TS
        mnSKey = MN_SHUSEI_TS
      }

      //数量
      const dbJuryo = ''
      const crtJuryo = rowData[IDX_QT_SHUSEI_SHIYO].datum?.toString() ?? ''

      //金額
      const dbKingaku = ''
      const crtKingaku = rowData[IDX_MN_SHUSEI_SHIYO].datum?.toString() ?? ''

      //異常値チェック
      // if ( ischeckSpreadData( spread, dbJuryo, crtJuryo, dbKingaku, crtKingaku, row ) == false ) {
      // 	return null;
      // }

      if (
        dbJuryo !== crtJuryo ||
        dbKingaku !== crtKingaku ||
        fgModify == false
      ) {
        let mapSend = null as any

        for (let j = 0; j < arSendList.length; j++) {
          const tmp = arSendList[j]

          const key = tmp[HM_KEY_CD_GENZAIRYO]
          const motoKey = rowData[HM_KEY_CD_GENZAIRYO]

          // 原材料コードが同じ場合は、同一レコードのデータ
          if (key === motoKey) {
            mapSend = tmp
          }
        }

        if (mapSend === null) {
          const shikakarihinMeisaiCBMMsgList =
            motoData.shikakarihinMeisaiCBMMsgList
          if (shikakarihinMeisaiCBMMsgList) {
            mapSend = shikakarihinMeisaiCBMMsgList[index]
          }

          if (isCreateMode.value) {
            mapSend = {
              ...mapSend,
              [QT_SHUSEI_SHIYO]: ZERO_VALUE,
              [QT_SHIYO]: ZERO_VALUE,
              [MN_TANKA]: ZERO_VALUE,
              [MN_SHIYO]: ZERO_VALUE,
              [MN_SHUSEI_SHIYO]: ZERO_VALUE,
              [QT_SHUSEI_FAT]: ZERO_VALUE,
              [QT_FAT]: ZERO_VALUE,
              [MN_FAT_TANKA]: ZERO_VALUE,
              [MN_FAT]: ZERO_VALUE,
              [MN_SHUSEI_FAT]: ZERO_VALUE,
              [QT_SNF]: ZERO_VALUE,
              [QT_SHUSEI_SNF]: ZERO_VALUE,
              [QT_SHUSEI_TS]: ZERO_VALUE,
              [QT_TS]: ZERO_VALUE,
              [MN_TS_TANKA]: ZERO_VALUE,
              [MN_SNF_TANKA]: ZERO_VALUE,
              [MN_SNF]: ZERO_VALUE,
              [MN_SHUSEI_SNF]: ZERO_VALUE,
              [MN_SHUSEI_TS]: ZERO_VALUE,
              [MN_TS]: ZERO_VALUE,
              //temp data
              // dtNengetsu:'202401',
              cdJoisonekikanriSoshiki: '123456',
              cdKanrikotei: '123',
              stKoutei: '1',
              cdSeihin: '123456',
              stShikakariSiyou: '1',
              tmKoshin: '20200813114428610',
              TB_TGETSUJ_SHIKAKE_tmKoshin: '20240111',
              tmKoshin1: '20240111',
              tmKoshin2: '20240111',
              tmKoshin3: '20240111',
              stNyuryokuHinmoku: '01',
              qtJyuryoZan: '12344',
            }
          }
          //登録データ1行を詰める
          // arSendList.push(mapSend)
        }

        mapSend = {
          ...mapSend,
          //数量
          qtKey: rowData[IDX_QT_SHIYO].datum?.toString(),
          //単価
          tnkKey: rowData[IDX_QT_TANKA].datum?.toString(),
          //金額
          mnKey: rowData[IDX_MN_SHIYO].datum?.toString(),
          //修正数量
          qtSKey: crtJuryo,
          //修正金額
          mnSKey: crtKingaku,
        }

        //データ調整し、登録できるように
        if (index === 0) {
          mapSend.dtNengetsu = '202312'
        }

        if (index === 1) {
          mapSend.dtNengetsu = '202401'
        }
        mapSend.cdShikakari = '001106'
        mapSend.dtNengetsuhi = '20240111'
        mapSend.ifSeizoLot = '231031-1-000331'

        arSendList.push(mapSend)
      }
    })

    return arSendList
  }

  // 乳市区分を取得する。
  const getStNyushi = (): string => {
    let stNyushi = ''
    //??
    const map = businessDataBackup.value
    if (map) {
      stNyushi = map[HM_KEY_ST_NYUSHI] ?? ''
    }
    return stNyushi
  }

  //工場在庫場所コードを取得する。
  const getCdKojoZaikoBasho = (): string => {
    let cdKojoZaikoBasho = ''
    //??
    const map = businessDataBackup.value
    if (map) {
      cdKojoZaikoBasho = map[HM_KEY_CD_KOJO_ZAIKO] ?? ''
    }
    return cdKojoZaikoBasho
  }

  //損益管理組織コード
  const getCdSonekikanriSoshiki = (): string => {
    let cdSonekikanriSoshiki = ''
    //??
    const map = businessDataBackup.value
    const cdKanriKotei = kanriCmb.value

    if (map) {
      cdSonekikanriSoshiki = map[HM_KEY_CD_SONEKIKANRI_SOSHIKI] ?? ''
    }

    // const kanri = getUserData(getContext(), SAVE_KEY_KANRI_KOTEI_ICHIRAN);
    // for(int ix=0; ix<kanri.length; ix++)
    // {
    // 	if(cdKanriKotei.equals((String)kanri[ix].get(HM_KEY_CD_KANRI_KOTEI)))
    // 	{
    // 		cdSonekikanriSoshiki = (String)kanri[ix].get(HM_KEY_CD_SONEKIKANRI_SOSHIKI);
    // 		break;
    // 	}
    // }
    return cdSonekikanriSoshiki
  }

  // 対応組織コードを取得する。
  const getCdTaiouSoshiki = (): string => {
    let cdTaiouSoshiki = ''
    //??
    const map = businessDataBackup.value
    if (map) {
      cdTaiouSoshiki = map[HM_KEY_CD_TAIOUSOSHIKI] ?? ''
    }
    return cdTaiouSoshiki
  }

  //モードを取得する。
  const getMode = (): string => {
    let mode = ''
    //??
    const map = businessDataBackup.value
    if (map) {
      mode = map[HM_KEY_MODE] ?? ''
    }
    return mode
  }

  // 重量に変更があったか判定する。
  const IsChangeJuryo = (): boolean => {
    let isChange = false

    if (!isShinyu()) {
      return isChange
    }

    const newValue = qtJuryo.value
    //note: temp value
    const oldValue = ''

    if (newValue !== oldValue) {
      isChange = true
    }

    return isChange
  }

  /**
   * 市乳であるか判定する。
   * @return true:市乳/false:以外
   */
  const isShinyu = (): boolean => {
    let ret = false

    if (
      businessDataBackup.value &&
      ST_NYUSHI_SHINYU === businessDataBackup.value.HM_KEY_ST_NYUSHI
    ) {
      ret = true
    }

    return ret
  }

  // 管理工程の入力に変更があったかチェックする。
  const isDiffKanriKotei = (): boolean => {
    let isCheck = true

    const nowValue = kanriCmb.value
    //note:temp value
    const oldValue = ''

    if (nowValue !== oldValue) {
      // message.setPageErrorMessage("管理工程が変更されています。")

      // 管理工程・品目ドロップダウンの背景色をエラー色に設定
      const selectors = document.querySelectorAll('select')
      selectors.forEach((item) => (item.style.background = ColorStatus.WARNING))
      //todo: focus
      isCheck = false
    }

    return isCheck
  }

  // 品目区分の入力に変更があったかチェックする。
  const isDiffStHinmoku = (): boolean => {
    let isCheck = true

    const nowValue = hinmokuCmb.value
    //note:temp value
    const oldValue = ''

    if (nowValue !== oldValue) {
      // message.setPageErrorMessage("品目区分が変更されています。")

      //todo: 品目区分の背景色をエラー色に設定

      isCheck = false
    }

    return isCheck
  }

  const checkRequiredCdHinmoku = (): boolean => {
    let isCheck = true

    try {
      if (cdHinmoku.value === null || '' === cdHinmoku.value) {
        const catalogCode = document.querySelectorAll<HTMLInputElement>(
          'input[type="text" i]',
        )[0]

        catalogCode.style.background = ColorStatus.WARNING
        catalogCode.focus()

        isCheck = false
      }
    } catch (e) {
      //TODO: 例外画面に遷移
      router.push(PAGES.YCSCMNF070M)
    }

    return isCheck
  }

  // 品目コードの入力に変更があったかチェックする。
  const isDiffCdHinmoku = (): boolean => {
    let isCheck = true

    const nowValue = cdHinmoku.value
    const oldValue = ''

    if (nowValue !== oldValue) {
      message.setPageErrorMessage('品目コードが変更されています。')
      // 背景色を設定
      const catalogCode = document.querySelectorAll<HTMLInputElement>(
        'input[type="text" i]',
      )[0]

      catalogCode.style.background = ColorStatus.WARNING
      catalogCode.focus()

      isCheck = false
    }

    return isCheck
  }

  // 重量の必須チェック
  const checkRequiredCdJuryo = (): boolean => {
    let isCheck = true

    try {
      // 重量
      const juryo = qtJuryo.value

      if (juryo === null || juryo === '' || Number(juryo) <= 0) {
        // message.setPageErrorMessage('仕掛品重量')

        const weight = document.querySelectorAll<HTMLInputElement>(
          'input[type="text" i]',
        )[1]

        weight.style.background = ColorStatus.WARNING
        weight.focus()

        isCheck = false
      } else {
        if (juryo.length > 12) {
          // message.setPageErrorMessage('仕掛品重量','12')
          const weight = document.querySelectorAll<HTMLInputElement>(
            'input[type="text" i]',
          )[1]

          weight.style.background = ColorStatus.WARNING
          weight.focus()

          isCheck = false
        }
      }
    } catch (e) {
      //TODO: 例外画面に遷移
      router.push(PAGES.YCSCMNF070M)
    }

    return isCheck
  }

  const CheckIsShuseiKingaku = (): boolean => {
    let isCheck = true

    // スプレッド
    const spread = body_spread01.value

    //todo:
    const saveData = [] as any

    for (let ix = 0; ix < spread.length; ix++) {
      // 表示、再計算を最後に押下した際と内容が変わっているかチェックする
      const beforeQt = saveData[ix][IDX_QT_SHUSEI_SHIYO].toString()
      const beforeMn = saveData[ix][IDX_MN_SHUSEI_SHIYO].toString()

      const afterQt = spread[ix][IDX_QT_SHUSEI_SHIYO].toString()
      const afterMn = spread[ix][IDX_QT_SHUSEI_SHIYO].toString()

      if (beforeQt !== afterQt || beforeMn !== afterMn) {
        isCheck = false
        message.setPageErrorMessage('再計算を行ってください。')
        const ERROR_BACKGROUD = 'rgb(255, 175, 175)'
        body_spread01.value[ix][IDX_MN_SHUSEI_SHIYO].datumBackground =
          ERROR_BACKGROUD
        break
      }
    }

    return isCheck
  }

  /** @description 工場 */
  const nmJoisonekiSoshikiRyaku = ref<string>('')

  /**
   * @description 工場を設定
   * @param value
   */
  function setNmJoisonekiSoshikiRyaku(value: string) {
    nmJoisonekiSoshikiRyaku.value = value
  }

  /** @description 管理工程選択肢 */
  const kanriCmbOptions = ref<Dropdown.Option[]>([])

  /**
   * @description 管理工程選択肢を設定
   * @param options
   */
  function setKanriCmbOptions(options: Dropdown.Option[]) {
    kanriCmbOptions.value = options
  }

  /** @description 管理工程 */
  const kanriCmb = ref<string>('')

  /**
   * @description 管理工程を設定
   * @param value
   */
  function setKanriCmb(value: string) {
    kanriCmb.value = value
  }

  /** @description 品目選択肢 */
  const hinmokuOptions = ref<Dropdown.Option[]>([])

  function setHinmokuOptions(options: Dropdown.Option[]) {
    hinmokuOptions.value = options
  }

  /** @description 品目 */
  const hinmokuCmb = ref<string>('')

  /**
   * @description 品目を設定
   * @param value
   */
  function setHinmokuCmb(value: string) {
    hinmokuCmb.value = value
  }

  /** @description 品目入力値 */
  const cdHinmoku = ref<string>('')

  /**
   * @description 品目入力値を設定
   * @param value
   */
  function setCdHinmoku(value: string) {
    cdHinmoku.value = value
  }

  /** @description 品目入力値 */
  const nmHinmoku = ref<string>('')

  /**
   * @description 品目入力値を設定
   * @param value
   */
  function setNmHinmoku(value: string) {
    nmHinmoku.value = value
  }

  /** @description 計上年月 */
  const dtDenyoHiduke = ref<string>('')

  /**
   * @description 計上年月を設定
   * @param value
   */
  function setDtDenyoHiduke(value: string) {
    dtDenyoHiduke.value = value
  }

  /** @description 原材料追加 */
  const chkGenzairyoAdd = ref<boolean>(false)

  /**
   * @description 原材料追加を設定
   * @param value
   */
  function setChkGenzairyoAdd(status: boolean) {
    chkGenzairyoAdd.value = status
  }

  /** @description 仕掛品重量 */
  const qtJuryo = ref<string>('')

  /**
   * @description 仕掛品重量を設定
   * @param value
   */
  function setQtJuryo(value: string) {
    qtJuryo.value = value
  }

  /** @description 仕掛品重量単位 */
  const ifTani = ref<string>('')

  /**
   * @description 仕掛品重量単位を設定
   * @param value
   */
  function setIfTani(value: string) {
    ifTani.value = value
  }

  /** スプレッドシート */
  const body_spread01 = ref<Table.DatumRow[]>([])

  /**
   * スプレッドシートデータを設定
   * @param value
   */
  function setbody_spread01(data: Table.DatumRow[]) {
    body_spread01.value = data
  }

  const spread01Heads = ref<Table.HeadRow[]>([
    [
      { id: '1', head: '製造日', width: 74 },
      { id: '2', head: '製造ロット', width: 144 },
      { id: '3', head: 'コード', width: 48, textAlign: 'start' },
      { id: '4', head: '原材料略式名称', width: 214 },
      { id: '5', head: '区\n分', width: 20 },
      { id: '6', head: '単\n位', textAlign: 'end', width: 20 },
      { id: '7', head: '数量', commaNumber: true, width: 80 },
      {
        id: '8',
        head: '単価',
        commaNumber: true,
        minimumFractionDigits: 3,
        width: 80,
      },
      { id: '9', head: '金額（円）', commaNumber: true, width: 95 },
      {
        id: '10',
        head: '修正数量',
        width: 80,
        datumType: 'input-number',
        textAlign: 'right',
        headBackground: EDITABLE_COLOR,
      },
      {
        id: '11',
        head: '修正金額（円）',
        width: 100,
        datumType: 'input-number',
        textAlign: 'right',
      },
    ],
  ])

  /** スプレッドシートデータをクリア */
  const clearSpreadData = () => setbody_spread01([])

  /** スプレッドシートデータを取得 */
  const querySpreadData = async (
    parameter: APIYPMCommon.InProcessItemAccountingListMessage,
  ) => {
    const response = await queryInProcessItemInputList({
      commonMsg: {
        // TODO: ユーザー情報取得実装の待ち
        // cdUser: userInfo.userInfo?.userId ?? '',
        // cdKaisha: userInfo.userInfo?.companyCode ?? '',

        // NOTE: 一時データ
        cdUser: '1234    ',
        cdKaisha: '1001',
      },
      ...parameter,

      // FIXME: 以下はダミーデータ、本番の際に削除が必要
      cdKanrikotei: '123',
      stNyuryokuHinmoku: '01',
      cdHinmoku: '123456',
      cdKojoZaikoBasho: '123456',
      dtDenpyo: '20231025',
      fgGenzairyoAdd: '1',
    })

    if (response) {
      setBusinessData({ ...businessData.value, ...response })
      setBusinessDataBackup({ ...businessData.value, ...response })
    }
  }

  /** サーバー取得値をスプレッドにセットする前に編集します。 */
  const prepareSpreadData = () => {
    let total = new Big(qtJuryo.value)
    let mTotal = new Big(0)
    let maxIndex = -1
    let maxQt = new Big(0)

    businessData.value?.shikakarihinMeisaiCBMMsgList?.forEach((item, index) => {
      // 月末を付け加える
      const fullDate = item.dtNengetsu
        ? item.dtNengetsu + getMonthEnd(item.dtNengetsu)
        : item.dtNengetsu

      item.dtSeizo = fullDate

      // ロットを設定
      const lot = `${fullDate?.substring(2, 8)}-${cdHinmoku.value}-${
        item.ifSeizoLot
      }`

      item.ifSeizoLot = lot

      item.nmGenzairyoRyakushiki = item.nmGenzairyo
      item.ifTani = UNIT

      /** nuHaigouhi */
      const combinationRatio = new Big(item.nuHaigouhi ?? '')
      /** qtJuryo */
      const weight = new Big(qtJuryo.value)
      /** qtShikakari */
      const count = weight.times(combinationRatio).round(0, 0)

      // 原価要素 - 通常
      switch (item.stSeibun) {
        case ST_SEIBUN_NML:
          item.mnTanka = ZERO_VALUE
          item.qtShiyo = count.toString()
          item.qtShuseiShiyo = count.toString()
          item.mnShiyo = ZERO_VALUE
          item.mnShuseiShiyo = ZERO_VALUE

          mTotal = mTotal.add(count)

          if (maxQt < count) {
            maxIndex = index
            maxQt = count
          }

          break

        case ST_SEIBUN_FAT:
          item.qtFat = count.toString()
          item.qtShuseiFat = count.toString()
          item.mnFat = ZERO_VALUE
          item.mnFatTanka = ZERO_VALUE
          item.mnShuseiFat = ZERO_VALUE
          break

        case ST_SEIBUN_SNF:
          item.qtSnf = count.toString()
          item.qtShuseiSnf = count.toString()
          item.mnSnf = ZERO_VALUE
          item.mnSnfTanka = ZERO_VALUE
          item.mnShuseiSnf = ZERO_VALUE
          break
      }
    })

    if (mTotal !== total) {
      const difference = total.sub(mTotal).round(0, 0)

      const target =
        businessData.value?.shikakarihinMeisaiCBMMsgList?.[maxIndex]

      if (target?.qtShuseiShiyo) {
        target.qtShiyo = new Big(target.qtShiyo!).add(difference).toString()

        target.qtShuseiShiyo = new Big(target.qtShuseiShiyo)
          .add(difference)
          .toString()
      }
    }

    setBusinessDataBackup(businessData.value)
  }

  /** スプレッドシートデータ作成 */
  const createSpreadData = (
    list?: APIYPMCommon.InProcessItemAccountingDetailCBMMessage[],
  ) => {
    clearSpreadData()

    if (!list) {
      return
    }

    setWeightAndUnitToBusinessData()

    /** noSeq */
    let numberSequence = 0
    /** 数量（使用量） */
    let quantity
    /** 金額 */
    let amount
    /** 修正数量 */
    let editQuantity
    /** 修正金額 */
    let editAmount

    body_spread01.value = list.map<Table.DatumRow>((item) => {
      const row: Table.DatumRow = []
      let nonDisplayCount = 0

      item.noSeq = ++numberSequence

      if (isCreateMode.value) {
        setCreateModeFillData()
      }

      /**
       * 数量、金額をタイプ分けする？
       * 0:修正数量、修正金額(DEF)
       * 1:修正数量、修正金額(FAT)
       * 2:修正数量、修正金額(SNF)
       * 3:修正数量、修正金額(TS)
       */
      for (let i = 0; i < COLUMNKEY.length; i++) {
        quantity = item[COLUMNKEY[i][IDX_QT_SHIYO]] ?? ''
        amount = item[COLUMNKEY[i][IDX_MN_SHIYO]] ?? ''
        editQuantity = item[COLUMNKEY[i][IDX_QT_SHUSEI_SHIYO]] ?? ''
        editAmount = item[COLUMNKEY[i][IDX_MN_SHUSEI_SHIYO]] ?? ''

        const allEmpty = [quantity, amount, editQuantity, editAmount].every(
          (item) => item === '',
        )

        if (allEmpty) {
          quantity = ZERO_VALUE
          amount = ZERO_VALUE
          editQuantity = ZERO_VALUE
          editAmount = ZERO_VALUE

          if (isCreateMode.value) {
            continue
          }
        }

        const allZero = [quantity, amount, editQuantity, editAmount].every(
          (item) => item === ZERO_VALUE,
        )

        if (allZero && !isCreateMode.value) {
          nonDisplayCount++
          continue
        }

        for (let j = 0; j < COLUMNKEY[0].length; j++) {
          let cellValue: string = item[COLUMNKEY[i][j]]

          // 製造日をフォーマット
          if (COLUMNKEY[i][j] === DT_SEIZO) {
            const regexArray = cellValue.match(/^(\d{4})(\d{2})(\d{2})$/)
            cellValue = regexArray?.slice(1).join('/') ?? cellValue
          }

          // 区分
          if (j === IDX_ST_NYU_FAT_SNF_TS) {
            cellValue = [
              ST_SHUSEI_DEF,
              ST_SHUSEI_FAT,
              ST_SHUSEI_SNF,
              ST_SHUSEI_TS,
            ][i]
          }

          const isEditColumn = [
            IDX_QT_SHUSEI_SHIYO,
            IDX_MN_SHUSEI_SHIYO,
          ].includes(j)

          row.push({
            id: (j + 1).toString(),
            datum: cellValue,
            datumBackground: isEditColumn ? ColorStatus.DEFAULT : undefined,
          })

          // 修正数量のバックアップを取る
          if (COLUMNKEY[i][j] === QT_SHUSEI_SHIYO) {
            row.push({
              id: IDX_QT_MOTOSHUSEI_SHIYO.toString(),
              datum: cellValue,
            })
          }
        }

        // TODO: サーバーデータを設定

        // 一覧に表示しないサーバーデータを設定
        if (nonDisplayCount > COLUMNKEY.length) {
          // TODO: 非表示設定方法
        }

        // TODO: サーバーデータの仕掛品残数を設定
      }

      return row
    })

    // 仕掛品重量が無ければ仕掛品重量（日次）から取得
    const weight =
      businessData.value?.qtShikakariJuryo || businessData.value?.qtShikakari

    // 仕掛品重量の表示状態を切り替える
    const inputs =
      document.querySelectorAll<HTMLInputElement>('input[type=text]')
    inputs[1].style.opacity = weight ? '1' : '0'
    qtJuryo.value = weight ?? ''

    // 単位
    ifTani.value = businessData.value?.ifTani ?? ''

    // TODO: スプレッド明細データの保存
    // TODO: 明細の数量と金額を保持する
  }

  /** DB からの不十分なデータを補完する */
  const setCreateModeFillData = () => {
    // 対応組織
    businessData.value!.cdTaiousoshiki = userInfo.userInfo?.departmentName
    // 上位損益管理組織コード
    businessData.value!.cdJoisonekikanriSoshiki =
      userInfo.userInfo?.departmentName
    // 品目区分
    businessData.value!.stNyuryokuHinmoku = hinmokuCmb.value
    // 製品コード
    businessData.value!.cdSeihin = cdHinmoku.value
    // 管理工程
    businessData.value!.cdKanrikotei = kanriCmb.value
  }

  /**
   * 指定したスプレッドシートの列を非活性化
   * @param columnIDList 列 ID
   * @param editabled 列編集可否
   */
  const setSpreadColumnEditableStatus = (
    columnIDList: (string | number)[],
    editabled: boolean,
  ) => {
    columnIDList = columnIDList.map<string>((element: string | number) =>
      element.toString(),
    )

    // 列ヘッダ背景色変更
    spread01Heads.value.forEach((row: Table.HeadRow) => {
      row.forEach((head: Table.Head) => {
        columnIDList.includes(head.id!) &&
          (head.headBackground = editabled ? EDITABLE_COLOR : DISEDITABLE_COLOR)
      })
    })

    // 列編集可否変更
    body_spread01.value.forEach((row: Table.DatumRow) => {
      row.forEach((datum: Table.Datum) => {
        columnIDList.includes(datum.id!) && (datum.disabled = !editabled)
      })
    })
  }

  /** スプレッドシート体背景色を初期化 */
  const resetSpreadBodyBackground = () => {
    body_spread01.value.forEach((row: Table.DatumRow) => {
      row.forEach((datum: Table.Datum) => {
        datum.datumBackground = ColorStatus.DEFAULT
      })
    })
  }

  /** @description 全件数 */
  const qtKensu = computed(() => body_spread01.value.length)

  /** 変更条件データの確認 */
  const isChkJokenData = computed<boolean>(() => {
    // 下記各々のチェックはデータに変化があったかどうかのためのもの
    // 管理工程
    if (!(getCDKanriKotei(false) === getCDKanriKotei(true))) {
      return false
    }

    // 品目区分
    if (!(getStHinmoku(false) === getStHinmoku(true))) {
      return false
    }

    // 品目コード
    if (!(getCdHinmoku(false) === getCdHinmoku(true))) {
      return false
    }

    // 伝票日付
    if (!(getDtDenpyo(false) === getDtDenpyo(true))) {
      return false
    }

    return true
  })

  /**
   * 管理工程取得
   * @param saved 保存されたか
   * @returns 管理工程 ID
   */
  const getCDKanriKotei = (saved: boolean) => {
    let ret: string = ''

    if (saved) {
      // TODO: 保存データを取得し、ret に設置
    } else {
      // 画面表示データを取得
      ret = kanriCmb.value
    }

    return ret
  }

  /**
   * 品目区分取得
   * @param saved 保存されたか
   * @returns 品目区分
   */
  const getStHinmoku = (saved: boolean) => {
    let ret: string = ''

    if (saved) {
      // TODO: 保存データを取得し、ret に設置
    } else {
      // 画面表示データを取得
      ret = hinmokuCmb.value
    }

    return ret
  }

  /**
   * 品目コード
   * @param saved 保存されたか
   * @returns 品目コード ID
   */
  const getCdHinmoku = (saved: boolean) => {
    let ret: string = ''

    if (saved) {
      // TODO: 保存データを取得し、ret に設置
    } else {
      // 画面表示データを取得
      ret = cdHinmoku.value
    }

    return ret
  }

  /**
   * 伝票日付
   * @param saved 保存されたか
   * @returns 伝票日付 ID
   */
  const getDtDenpyo = (saved: boolean) => {
    let ret: string = ''

    if (saved) {
      // TODO: 保存データを取得し、ret に設置
    } else {
      // 画面表示データを取得
      ret = dtDenyoHiduke.value
    }

    return ret
  }

  /** 条件データの変更 */
  const jokenDataChange = () => {
    setKanriCmb(getCDKanriKotei(true))
    setHinmokuCmb(getStHinmoku(true))
    setCdHinmoku(getCdHinmoku(true))
    // TODO: 汎用検査実装待ち
    // setNmHinmoku(getNmhinmoku(true))
    setDtDenyoHiduke(getDtDenpyo(true))
  }

  /** アクション前処理 */
  const preAction = () => {
    // フッタ部のメッセージ領域をクリアする
    message.clearFooterMessage()

    initColor()
  }

  /** 画面上元素の背景色を初期化 */
  const initColor = () => {
    // 管理工程・品目ドロップダウンの背景色を初期化
    const selectors = document.querySelectorAll('select')
    selectors.forEach((item) => (item.style.background = ColorStatus.DEFAULT))

    // 品目コード・重量の背景色を初期化
    const inputs = document.querySelectorAll<HTMLInputElement>(
      'input[type="text" i]',
    )

    inputs.forEach((item) => (item.style.background = ColorStatus.DEFAULT))

    // スプレッドシートの背景色を初期化
    resetSpreadBodyBackground()
  }

  /** 仕掛情報を削除 */
  const DeleteStoreInProcesssItems = async (
    data: APIYPMCommon.InProcessItemAccountingListMessage,
  ) => {
    data = {
      // FIXME: dummy data
      commonMsg: {
        cdUser: '1234    ',
        cdKaisha: '1001',
        cdProgram: 'YPMSGSF070M',
        nmHost: 'ZHANG_PC',
        dtUnyo: '20231026',
      },

      ...data,
    }
    return await updateInProcesssItems(data)
  }

  return {
    viewMode,
    isCreateMode,
    businessData,
    setBusinessData,
    queryBusinessData,
    setWeightAndUnitToBusinessData,
    nmJoisonekiSoshikiRyaku,
    updateStoreInProcesssItems,
    setNmJoisonekiSoshikiRyaku,
    kanriCmbOptions,
    setKanriCmbOptions,
    kanriCmb,
    setKanriCmb,
    hinmokuOptions,
    setHinmokuOptions,
    hinmokuCmb,
    setHinmokuCmb,
    cdHinmoku,
    setCdHinmoku,
    nmHinmoku,
    setNmHinmoku,
    dtDenyoHiduke,
    setDtDenyoHiduke,
    chkGenzairyoAdd,
    setChkGenzairyoAdd,
    qtJuryo,
    setQtJuryo,
    ifTani,
    setIfTani,
    body_spread01,
    setbody_spread01,
    businessDataBackup,
    setBusinessDataBackup,
    spread01Heads,
    clearSpreadData,
    querySpreadData,
    prepareSpreadData,
    createSpreadData,
    setSpreadColumnEditableStatus,
    resetSpreadBodyBackground,
    qtKensu,
    isChkJokenData,
    jokenDataChange,
    preAction,
    initColor,
    DeleteStoreInProcesssItems,
  }
})
