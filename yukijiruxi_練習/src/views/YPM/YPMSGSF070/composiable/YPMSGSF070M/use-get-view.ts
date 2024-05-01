import type { APIYPMCommon } from '@/services/modules/YPM/types'
import { ColorStatus, MSGPositions, MSGTypes, Message } from '@/enums'
import { useYPMSGSF070MStore } from '../../YPMSGSF070M-store'
import { getMonthEnd, handlerMessage } from '@/utils'
import { interpolateMessage } from '@/utils/message'
import { YPMCommonConst } from '@/config/common-const'
import { useBeforeDisplay } from '.'
import { useButtonConfig } from '@/stores/button-config'

/** 「表示」ボタン処理 */
export function useGetView() {
  const viewStore = useYPMSGSF070MStore()
  const { setEnable, setInitFocus } = useBeforeDisplay()
  const layoutButtons = useButtonConfig()

  /** 「表示」ボタン押下 */
  const handlePressDisplay = async () => {
    viewStore.initColor()

    // TODO: 初期表示時などは0件なので内部でnullが応答される為、呼び出し側にてチェックする

    // 入力条件確認
    if (!conditionPassed()) {
      return
    }

    // TODO: マスタ情報取得

    const parameter: APIYPMCommon.InProcessItemAccountingListMessage = {
      // FIXME: ユーザー情報から工場コードを取得
      cdKojoZaikoBasho: '1001',
      stNyuryokuHinmoku: viewStore.hinmokuCmb,
      cdHinmoku: viewStore.cdHinmoku,
      // TODO: 検索機能実装が必要
      nmHinmoku: '',
      cdKanrikotei: viewStore.kanriCmb,
      // FIXME: ユーザー情報から上位損益管理組織を取得
      cdJoisonekikanriSoshiki: undefined,
      dtDenpyo:
        viewStore.dtDenyoHiduke.replace(/[/\-]/g, '') +
        getMonthEnd(viewStore.dtDenyoHiduke),
      dtNengetsu: viewStore.dtDenyoHiduke.replace(/[/\-]/g, ''),
      fgGenzairyoAdd: viewStore.chkGenzairyoAdd ? '1' : '0',
    }

    // スプレッドシートデータ取得
    await viewStore.querySpreadData(parameter)

    if (!viewStore.businessData) {
      viewStore.clearSpreadData()

      // TODO: 共通情報をクリアする

      // 登録ボタン、初期化ボタンを押せなくする
      layoutButtons.footerButtonConfigs
        .filter((item) => /F1|F5|F9/.test(item.title))
        .forEach((item) => (item.disabled = true))

      return
    }

    // サーバー取得値をスプレッドにセットする前に編集します。
    viewStore.prepareSpreadData()

    // 追加可能な原材料とは
    // �@追加対象の原材料（汎用分類マスタより取得）が市乳月間実績配合比トランに存在しない場合
    // �A追加対象の原材料が原料乳で仕掛品品目の原料乳用途コードが標準乳価マスタに存在する場合
    parameter.fgGenzairyoAdd = YPMCommonConst.FLG_0

    /** fgGenzairyoAddNashi */
    const noAdditionalIngredients = viewStore.businessData.fgGenzairyoAddNashi

    if (noAdditionalIngredients === YPMCommonConst.FLG_1) {
      handlerMessage(
        MSGPositions.FOOTER,
        MSGTypes.ERROR,
        interpolateMessage(Message.YCSCMNMCW219, ['追加可能な原材料']),
      )
    }

    viewStore.createSpreadData(
      viewStore.businessData.shikakarihinMeisaiCBMMsgList,
    )

    viewStore.setBusinessDataBackup(viewStore.businessData)

    // TODO: 検索条件を保存する

    setEnable()
    setInitFocus()
  }

  /** 入力必須項目確認 */
  const conditionPassed = (): boolean => {
    let passed: boolean = true

    // 品目入力必須確認
    if (!viewStore.cdHinmoku) {
      handleEmptyCatalogCode()
      return (passed = false)
    }

    // 重量入力必須確認
    const weightLessThanOrEqualToZero: boolean =
      !isNaN(Number(viewStore.qtJuryo)) && Number(viewStore.qtJuryo) <= 0

    if (!viewStore.qtJuryo || weightLessThanOrEqualToZero) {
      handleWrongWeight(Message.SMSCMNMCA002, ['仕掛品重量'])
      return (passed = false)
    }

    const weightExceeds12Characters = viewStore.qtJuryo.length > 12
    if (weightExceeds12Characters) {
      handleWrongWeight(Message.YCSCMNMCW170, ['仕掛品重量', '12桁'])
      return (passed = false)
    }

    return passed
  }

  /** 品目コード未入力時の処理 */
  const handleEmptyCatalogCode = () => {
    handlerMessage(
      MSGPositions.FOOTER,
      MSGTypes.ERROR,
      interpolateMessage(Message.SMSCMNMCA002, ['品目コード']),
    )

    const catalogCode = document.querySelectorAll<HTMLInputElement>(
      'input[type="text" i]',
    )[0]

    catalogCode.style.background = ColorStatus.WARNING
    catalogCode.focus()
  }

  /**
   * 重量入力不正時の処理
   * @param messageTemplate 警告メッセージ可変文字列
   * @param interpolator 挿入用文字列配列
   */
  const handleWrongWeight = (
    messageTemplate: string,
    interpolator: string[],
  ) => {
    handlerMessage(
      MSGPositions.FOOTER,
      MSGTypes.ERROR,
      interpolateMessage(messageTemplate, interpolator),
    )

    const weight = document.querySelectorAll<HTMLInputElement>(
      'input[type="text" i]',
    )[1]

    weight.style.background = ColorStatus.WARNING
    weight.focus()
  }

  return { handlePressDisplay }
}
