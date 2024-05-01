import type { Button } from '@/types/components/button'

import { useButtonConfig } from '@/stores/button-config'
import { useMessage } from '@/stores/message'
import { usePageInfoStore } from '@/stores/page-info'
import { useYEMTSSF470MStore } from './YEMTSSF470M-store'
import { computed, onBeforeMount } from 'vue'
import { checkFile, downloadToLocal } from '@/utils/file'
import {
  checkClientUpload,
  checkDownload,
  downloadFile,
  getUploadRireki,
} from '@/services/modules/file'
import { formatDate } from '@/utils/date-format'
import { useDialog } from '@/stores/dialog'
import { MSGPositions, MSGTypes } from '@/enums'
import { handlerMessage } from '@/utils'

// 画面YEMTSSF470Mのロジックを定義する。
// ロジックを vueファイルのsetup script 内に実行させる為に画面モジュールを関数で定義しなければならない。
// setup script 以外に画面モジュールを使うと実行エラーが発生する。
export default function useYEMTSSF470MLogic() {
  // 定義済みの画面YEMTSSF470Mのstore。画面の状態をstoreから導入する。
  // メソードは分割代入できますが、リアクティビティが失われるため、変数は分割代入できない。
  // 変数を使用したい場合、下記方法でstoreを導入してください。
  const store = useYEMTSSF470MStore()
  const { setShowDialog } = useDialog()

  // 初期化データ取得apiの呼び出し、データ初期化はonBeforeMountに書く。
  onBeforeMount(() => {
    //TODO:画面初期化データ取得apiの呼び出し
    // 画面データを設定する。
    store.setTxtCountDisp(0)
    store.setSpdSpread([])
    store.setTableData([])
    setShowDialog(false)
  })

  // 定義済みのヘッダ、フッター設定方法とリセット方法。
  const { setHeaderButtonConfigs, setFooterButtonConfigs } = useButtonConfig()
  // 定義済みのフッターに表示する成功・エラーメーセージの設定方法。
  const { setPageErrorMessage, setPageSuccessMessage, clearPageMessages } =
    useMessage()

  onBeforeMount(() => {
    //ヘッダのボタン表示及びロジックを設定する。
    const headerButtonConfigs: Button.Config[] = [
      {
        title: '戻る(F10)',
        disabled: false,
        onClick: () => {
          clearPageMessages()
          window.close()
        },
      },
      {
        title: 'メニュー(F11)',
        disabled: false,
        onClick: () => {
          clearPageMessages()
          window.close()
        },
      },
      {
        title: '業務終了(F12)',
        disabled: false,
        onClick: () => {
          clearPageMessages()
          window.close()
        },
      },
    ]
    setHeaderButtonConfigs(headerButtonConfigs)

    //フッターのボタン表示及びロジックを設定する。
    const footerButtonConfigs: Button.Config[] = [
      {
        title: '(F1)',
        disabled: true,
        onClick: () => {},
      },
      {
        title: '(F2)',
        disabled: true,
        onClick: () => {},
      },
      {
        title: '(F3)',
        disabled: true,
        onClick: () => {},
      },
      {
        title: '(F4)',
        disabled: true,
        onClick: () => {},
      },
      {
        title: '(F5)',
        disabled: true,
        onClick: () => {},
      },
      {
        title: '(F6)',
        disabled: true,
        onClick: () => {},
      },
      {
        title: 'CSVﾀﾞｳﾝﾛｰﾄﾞ(F7)',
        disabled: false,
        onClick: () => openDialog(F7, 'CSVﾀﾞｳﾝﾛｰﾄﾞ'),
      },
      {
        title: '帳票印刷(F8)',
        disabled: true,
        onClick: () => {
          clearPageMessages()
          console.log('click帳票印刷(F8)')
        },
      },
      {
        title: '登録(F9)',
        disabled: false,
        onClick: () => openDialog(uploadToDB, '登録'),
      },
    ]
    setFooterButtonConfigs(footerButtonConfigs)
  })

  // 定義済みの画面ヘッダ表示設定方法。
  const pageInfo = usePageInfoStore()

  onBeforeMount(() => {
    //ヘッダデータ設定する。
    //画面名
    pageInfo.setPageName('手動精算CSVアップロード')
    //画面ID
    pageInfo.setPageId('YEMTSSF470M')
    //会社名表示否
    pageInfo.setShowCompanyName(true)
    // 部署名表示否
    pageInfo.setShowDepartmentName(true)
    // ログイン日時表示否
    pageInfo.setShowLoginDate(true)
    // ユーザー名表示否
    pageInfo.setShowUserName(true)
    // 運用日表示否
    pageInfo.setShowUseDate(false)
  })

  function uploadFile(file: File): void {
    clearPageMessages()

    const checkResult = checkFile(file)
    if (checkResult) {
      store.setUploadFile(file)
    } else {
      setPageErrorMessage('ファイルチェック失敗しました。')
    }
  }

  async function uploadToDB(): Promise<void> {
    //登録(F9)
    clearPageMessages()
    const file = store.uploadFile
    const fgTitleUmu = store.chkTitleGyoUmu ? '1' : '0'

    if (!file) {
      setPageErrorMessage('ファイルを選択してください。')
    } else {
      const response = await checkClientUpload(file, fgTitleUmu)
      if (response.status && response.status === 200) {
        setPageSuccessMessage('登録成功しました。')
      } else {
        setPageErrorMessage('登録失敗しました。')
      }
    }
  }

  function gene054(search: string): void {
    clearPageMessages()
    //TODO:ユーザ検索
    if (search && search.length > 0) {
      store.setTxtUserNm('富士通　太郎')
      setPageSuccessMessage('ユーザ検出しました。')
    } else {
      store.setTxtUserNm('')
      setPageErrorMessage('ユーザIDを入力してください。')
    }
  }

  onBeforeMount(() => {
    clearPageMessages()
    store.setDatTorikomiKaishi('2022/12/14 10:00:00')
    store.setDatTorikomiShuryo('2023/12/30 10:23:54')
  })

  async function body_button01(): Promise<void> {
    clearPageMessages()
    store.setTxtCountDisp(0)
    store.setSpdSpread([])
    //TODO:テーブルデータ表示
    const params = {
      txtUserId: store.txtUserId,
      txtUserNm: store.txtUserNm,
      datTorikomiKaishi: formatDate(store.datTorikomiKaishi, 'yyyyMMDDHHmmss'),
      datTorikomiSyuryo: formatDate(store.datTorikomiShuryo, 'yyyyMMDDHHmmss'),
    }

    // アップロード履歴取得
    const result = await getUploadRireki(params)

    if (result && result.UploadRirekiIchiranCBMMsgList.length > 0) {
      //アップロード履歴ある場合、データを画面表示用変数に保存する。
      const data: any = []

      result.UploadRirekiIchiranCBMMsgList.forEach((item: any) => {
        //stUploadShoriJokyo = 30 が正常、以外は異常
        const success = '30'
        data.push([
          { id: 'select', disabled: item.stUploadShoriJokyo === success },
          { id: 'nmUserShimei', datum: item.nmUserShimei },
          { id: 'nmFile', datum: item.nmFile },
          { id: 'ifTirikomiKekka', datum: item.ifTirikomiKekka },
          {
            id: 'tmTorikomi',
            datum: formatDate(item.tmTorikomi, 'YYYY/MM/DD HH:mm:ss'),
          },
          { id: 'nuTorikomiKensu', datum: item.nuTorikomiKensu },
          { id: 'ifBiko', datum: item.ifBiko },
        ])
      })
      store.setSpdSpread(data)
      store.setTxtCountDisp(data.length)
      store.setTableData(result.UploadRirekiIchiranCBMMsgList)
      setPageSuccessMessage('対象データを表示しました。')
    }
  }

  function openDialog(callBack: Function, text: string) {
    handlerMessage(
      MSGPositions.POPUP,
      MSGTypes.WARNNING,
      text + '実行しますか？',
      [
        {
          title: 'はい',
          disabled: false,
          width: '80',
          height: '15',
          onClick: callBack,
        },
        {
          title: 'いいえ',
          disabled: false,
          width: '80',
          height: '15',
          onClick: () => setShowDialog(false),
        },
      ],
    )
  }

  async function F7() {
    clearPageMessages()
    let checkedIndexs = [] as any
    const tableDatas = store.tableData
    const displayData = store.spdSpread

    displayData.forEach((row: any, rowIndex) => {
      row.forEach((cell: any) => {
        if (cell.id === 'select' && cell.datum) {
          checkedIndexs.push(rowIndex)
        }
      })
    })

    if (checkedIndexs.length === 1) {
      const index = checkedIndexs[0]
      const noSentakuUpload = tableDatas[index].noUpload
      const result = await checkDownload(noSentakuUpload)

      const data = {
        nmFile: (result as any).commonMsg.nmFile,
        cdDirectory: (result as any).commonMsg.stDirectory,
      }

      const csv = await downloadFile(data)
      downloadToLocal(csv)
      setPageSuccessMessage('ＣＳＶファイルのダウンロードが正常終了しました。')
    } else if (checkedIndexs.length > 1) {
      setPageErrorMessage(
        '明細は複数選択できません。１つのみ選択してください。',
      )
    } else {
      setPageErrorMessage('明細を選択してください。')
    }
  }

  //リアクティビティを保つため、computedを使用する。
  return {
    chkTitleGyoUmu: computed({
      get: () => store.chkTitleGyoUmu,
      set: (status: boolean) => store.setChkTitleGyoUmu(status),
    }),

    txtUserId: computed({
      get: () => store.txtUserId,
      set: (value: string) => store.setTxtUserId(value),
    }),
    txtUserNm: computed({
      get: () => store.txtUserNm,
      set: (value: string) => store.setTxtUserNm(value),
    }),

    datTorikomiKaishi: computed({
      get: () => store.datTorikomiKaishi,
      set: (value: string) => store.setDatTorikomiKaishi(value),
    }),
    datTorikomiShuryo: computed({
      get: () => store.datTorikomiShuryo,
      set: (value: string) => store.setDatTorikomiShuryo(value),
    }),

    txtCountDisp: computed(() => store.txtCountDisp),
    spdSpread: computed(() => store.spdSpread),
    uploadFile,
    gene054,
    body_button01,
    clearPageMessages,
  }
}
