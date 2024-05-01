import { useMessage } from '@/stores/message'
import { useYPMSGSF070MStore } from '../../YPMSGSF070M-store'

/** 「製品／共通配合検索」処理 */
export function useShowGeneHinmoku() {
  /** 品目区分(共通配合)(10) */
  const VALUE_HINMOKU_KUBUN_KYOTSU_HAIGO = '10'
  /** 汎用検索ID（製品検索） */
  const GENERAL_SEARCH_016 = 'GeneralSearch016'
  /** 汎用検索ID（共通配合検索） */
  const GENERAL_SEARCH_133 = 'GeneralSearch133'

  const { clearFooterMessage } = useMessage()
  const viewStore = useYPMSGSF070MStore()

  /** 「製品／共通配合検索」処理メソッド */
  const handlePressSearch = () => {
    viewStore.preAction()
    clearFooterMessage()

    // TODO: context.getCurrentScreenData()

    const isNotCommonClassification =
      viewStore.hinmokuCmb === VALUE_HINMOKU_KUBUN_KYOTSU_HAIGO

    /** 汎用検索 ID */
    const startUpId = getGeneralSearchStartUpID(isNotCommonClassification)

    /** 汎用検索条件一覧 */
    const condition: string[] = getGeneralSearchCondition(
      isNotCommonClassification,
    )

    /** 汎用検索条件入力可否一覧 */
    const availableConditions: boolean[] = getAvailableConditions(
      isNotCommonClassification,
    )

    // TODO:
    // ArrayList literalCondition = new ArrayList();
    // literalCondition.add(loginInfo.getCdKaisha()); // 会社コード

    // TODO: 汎用検索を呼び出し、初期化する

    alert(`
      TODO: 汎用検索
      
      startUpId: ${startUpId}
      condition: ${condition}
      availableConditions: ${availableConditions}
    `)
  }

  /**
   * 汎用検索 ID を取得
   * @param isNotCommonClassification 共通配合の品目であるかどうか
   * @returns 汎用検索 ID
   */
  const getGeneralSearchStartUpID = (
    isNotCommonClassification: boolean,
  ): string => {
    return isNotCommonClassification ? GENERAL_SEARCH_016 : GENERAL_SEARCH_133
  }

  /**
   * 汎用検索条件を取得
   * @param isNotCommonClassification 共通配合の品目であるかどうか
   * @returns 汎用検索条件一覧
   */
  const getGeneralSearchCondition = (
    isNotCommonClassification: boolean,
  ): string[] => {
    let condition: string[]

    if (isNotCommonClassification) {
      condition = [
        '',
        '',
        viewStore.cdHinmoku,
        '',
        '',
        '',
        '',
        '',
        '',
        // TODO: loginfo 待ち
        'loginInfo.getDtUnyo',
      ]
    } else {
      condition = [
        // TODO: 親クラス確認待ち
        'cdKojoZaikoBasho',
        viewStore.cdHinmoku,
        '',
      ]
    }

    return condition
  }

  /**
   * 汎用検索条件の入力可否一覧を取得
   * @param isNotCommonClassification 共通配合の品目であるかどうか
   */
  const getAvailableConditions = (
    isNotCommonClassification: boolean,
  ): boolean[] => {
    let list: boolean[]

    if (isNotCommonClassification) {
      list = Array.from({ length: 10 }, () => true)
    } else {
      list = [false, true, true]
    }

    return list
  }

  return { handlePressSearch }
}
