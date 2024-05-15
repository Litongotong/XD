import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog'
import YBMKKSF620MLogic from './YBMKKSF620MLogic'
import type { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import type { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'
import type { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import type { JCFComboBoxData } from '@/lib/jcf/gui/JCFComboBoxData'
import { SMSHeaderFooterManager } from '@/lib/sms/sol/sys/cjf/logic/SMSHeaderFooterManager'
import { YBMKKSCjfConst } from '../../YBMKKSF000/logic/YBMKKSCjfConst'
import type { SMSJCFSpreadData } from '@/lib/sms/sol/sys/cjf/SMSJCFSpreadData'
import type { JCFSpreadCellPosition } from '@/lib/jcf/gui/JCFSpreadCellPosition'
import { SMSHashKeyConst } from '@/lib/sms/sol/sys/SMSHashKeyConst'
import type { JCFFieldStringData } from '@/lib/jcf/gui/JCFFieldStringData'
import { HashMap } from '@/lib/native/util/HashMap'
import type { SMSLoginInfoImpl } from '@/lib/sms/sol/sys/SMSLoginInfoImpl'
import type { JCFEventAdditionalInfo } from '@/lib/jcf/ctrl/JCFEventAdditionalInfo'
import type { JCFSpreadAdditionalInfo } from '@/lib/jcf/gui/JCFSpreadAdditionalInfo'
import { SMSCheckField } from '@/lib/sms/sol/sys/SMSCheckField'
import type { List } from '@/lib/native/util/List'
import { ArrayList } from '@/lib/native/util/ArrayList'

/**
 * 配賦マスタ画面ロジッククラスです。
 */
// @ts-expect-error
export default class YBMKKSF624SLogic extends YBMKKSF620MLogic {
  /** 画面ID */
  private static CD_GAMEN_ID: string = 'YBMKKSF624S'

  /** 画面名取得キー */
  private static NM_GAMEN: string = 'YBMKKSF624S_SCREEN_NAME'

  /** 最大表示数取得キー */
  private static MAX_DISPLAY_CNT: string = 'YBMKKSF624S_MAX_DISPLAY_CNT'

  /** 最大検索数取得キー */
  private static MAX_SELECT_CNT: string = 'YBMKKSF624S_MAX_SELECT_CNT'

  /** コマンド(verb) 初期表示 */
  private static COMMAND_INIT: string = 'YBMHaifuCBSHandler.init3'

  /** コマンド(verb) ライン比率取得 */
  private static COMMAND_GET_LINE_HIRITSU: string =
    'YBMHaifuCBSHandler.getLineHiritsu'

  /** コマンド(verb) ライン比率CSVダウンロード */
  private static COMMAND_GET_LINE_HIRITSU_CSV: string =
    'YBMHaifuCBSHandler.getLineHiritsuCSV'

  /** コマンド(verb) ライン比率登録 */
  private static COMMAND_RGS_LINE_HIRITSU: string =
    'YBMHaifuCBSHandler.rgsLineHiritsu'

  /** 初期表示イベントハンドラです。 */
  beforeDisplay(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF624SLogic.beforeDisplay start')
    try {
      super.checkDialogException(context)
      super.beforeDisplay2(
        event,
        context,
        returnInfo,
        YBMKKSF624SLogic.CD_GAMEN_ID,
        YBMKKSF624SLogic.NM_GAMEN,
        YBMKKSF624SLogic.ITEM_LINE_HIRITSU,
        YBMKKSF624SLogic.MAX_DISPLAY_CNT,
      )
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSFLogic.beforeDisplay catch')
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF624SLogic.beforeDisplay end')
  }

  /** 行追加ボタン押下イベントハンドラです。 */
  addRow(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF624MLogic.addRow start')
    try {
      super.addRow2(
        event,
        context,
        returnInfo,
        YBMKKSF624SLogic.MAX_DISPLAY_CNT,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF624MLogic.addRow end')
  }

  /** 表示ボタン押下イベントハンドラです。 */
  showLineHiritsu(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF624MLogic.showLineHiritsu start')
    try {
      this.show(
        event,
        context,
        returnInfo,
        YBMKKSF624SLogic.COMMAND_GET_LINE_HIRITSU,
        YBMKKSF624SLogic.NM_GAMEN,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF624MLogic.showLineHiritsu end')
  }

  /** 組織検索ボタン押下イベントハンドラです。*/
  showShokuba(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF624MLogic.showShokuba start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let dtNendo: JCFComboBoxData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF624SLogic.ITEM_DT_NENDO,
      ) as JCFComboBoxData

      // 個別検索呼び出し
      context.putSucceedData(
        YBMKKSCjfConst.SEARCH_ST_MODE,
        YBMKKSCjfConst.ST_MODE_SOSHIKI,
      )
      context.putSucceedData(
        YBMKKSCjfConst.DT_TAISHO,
        super.getDtKijun(super.getComboID(dtNendo)),
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF624MLogic.showShokuba end')
  }

  /** 組織検索後表示前イベントハンドラです。*/
  setShokuba(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF624MLogic.setShokuba start')
    try {
      super.checkDialogException(context)
      let current: JCFScreenData = context.getCurrentScreenData()

      let spread: SMSJCFSpreadData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF624SLogic.ITEM_SPREAD,
      ) as SMSJCFSpreadData
      let position: JCFSpreadCellPosition = null!
      position = super.getUserData(
        context,
        SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION,
      ) as JCFSpreadCellPosition

      if (position == null) {
        // スプレッドの位置情報がない場合はヘッダ部の組織(職場)
        let cdSoshiki: JCFFieldStringData = current.getItemData(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF624SLogic.ITEM_CD_SOSHIKI,
        ) as JCFFieldStringData
        let nmSoshiki: JCFFieldStringData = current.getItemData(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF624SLogic.ITEM_NM_SOSHIKI,
        ) as JCFFieldStringData

        if (
          (context.getSucceedData(
            YBMKKSCjfConst.SEARCH_CD_SOSHIKI,
          ) as string) != null
        ) {
          cdSoshiki.setValue(
            context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_SOSHIKI) as string,
          )
          nmSoshiki.setValue(
            context.getSucceedData(
              YBMKKSCjfConst.SEARCH_NM_SOSHIKI_RYAKU,
            ) as string,
          )
        }

        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF624SLogic.ITEM_CD_SOSHIKI,
        )
        return
      } else {
        if (
          (context.getSucceedData(
            YBMKKSCjfConst.SEARCH_CD_SOSHIKI,
          ) as string) != null
        ) {
          spread.setCellValue(
            position.row,
            YBMKKSF624SLogic.SPREAD_CD_HAIFU,
            context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_SOSHIKI) as string,
          )
          spread.setCellValue(
            position.row,
            YBMKKSF624SLogic.SPREAD_NM_HAIFU,
            context.getSucceedData(
              YBMKKSCjfConst.SEARCH_NM_SOSHIKI_RYAKU,
            ) as string,
          )
          spread.setCellValue(
            position.row,
            YBMKKSF624SLogic.SPREAD_NO_KAISOLEVEL,
            context.getSucceedData(
              YBMKKSCjfConst.SEARCH_SOSHIKI_NO_KAISO_LEVEL,
            ) as string,
          )
        }
        super.removeUserDataWithObject(
          context,
          SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION as any,
        )
        super.removeUserDataWithObject(context, YBMKKSCjfConst.SEARCH_ST_MODE as any)

        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF624SLogic.ITEM_SPREAD,
        )
        spread.setPosition(
          position.row,
          spread.getColumnInformationName(position.column),
        )

        return
      }
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('YBMKKSF624MLogic.setShokuba end')
  }

  /** 科目検索ボタン押下イベントハンドラです。 */
  showKamoku(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF624MLogic.showKamoku start')
    try {
      // 個別検索呼び出し
      context.putSucceedData(
        YBMKKSCjfConst.SEARCH_ST_MODE,
        YBMKKSCjfConst.ST_MODE_KAMOKU_HOJOKAMOKU,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF624MLogic.showKamoku end')
  }

  /** 科目検索後表示前イベントハンドラです。 */
  setKamoku(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF624MLogic.setKamoku start')
    try {
      super.checkDialogException(context)
      // 画面項目部品取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdKamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF624SLogic.ITEM_CD_KAMOKU,
      ) as JCFFieldStringData
      let cdHojokamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF624SLogic.ITEM_CD_HOJOKAMOKU,
      ) as JCFFieldStringData
      let nmKamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF624SLogic.ITEM_NM_KAMOKU,
      ) as JCFFieldStringData
      let nmHojokamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF624SLogic.ITEM_NM_HOJOKAMOKU,
      ) as JCFFieldStringData

      // コンテキストより検索結果情報取得
      if (
        (context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_KAMOKU) as string) !=
        null
      ) {
        cdKamoku.setValue(
          context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_KAMOKU) as string,
        )
        cdHojokamoku.setValue(
          context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_HOJOKAMOKU) as string,
        )
        nmKamoku.setValue(
          context.getSucceedData(
            YBMKKSCjfConst.SEARCH_NM_KAMOKU_RYAKU,
          ) as string,
        )
        nmHojokamoku.setValue(
          context.getSucceedData(
            YBMKKSCjfConst.SEARCH_NM_HOJOKAMOKU_RYAKU,
          ) as string,
        )
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF624SLogic.ITEM_CD_KAMOKU,
        )
      }
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF624MLogic.setKamoku end')
  }

  /** 職場検索ボタン押下イベントハンドラです。 */
  showShokuba2(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF624MLogic.showShokuba2 start')
    try {
      let cdKaisha: string = null!
      let dtKijun: string = null!
      let inData: HashMap = new HashMap()

      // 共通情報取得から会社コード取得
      let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
        context,
      ) as SMSLoginInfoImpl
      cdKaisha = loginInfo.getCdKaisha()

      // 画面情報取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let spread: SMSJCFSpreadData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF624SLogic.ITEM_SPREAD,
      ) as SMSJCFSpreadData
      let eventInfo: JCFEventAdditionalInfo = event.getEventAdditionalInfo()
      let spreadAdditionalInfo: JCFSpreadAdditionalInfo =
        eventInfo.getAdditionalInfo() as JCFSpreadAdditionalInfo
      let position: JCFSpreadCellPosition =
        spreadAdditionalInfo.getCellPosition()
      let dtNendo: JCFComboBoxData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF624SLogic.ITEM_DT_NENDO,
      ) as JCFComboBoxData

      // スプレッド対象行をユーザ領域に格納
      super.putUserData(
        context,
        SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION,
        spreadAdditionalInfo.getCellPosition(),
      )

      // 対象配賦コード取得
      let cdShokuba: string = spread.getCellValue(
        position.row,
        YBMKKSF624SLogic.SPREAD_CD_HAIFU,
      )

      // スプレッド対象行をユーザ領域に格納
      super.putUserData(
        context,
        SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION,
        spreadAdditionalInfo.getCellPosition(),
      )

      if (
        SMSCheckField.isValidString(cdShokuba) &&
        SMSCheckField.checkLength(cdShokuba, 6)
      ) {
        let literalCondition: List = new ArrayList()
        // リテラル条件にセットするパラメタ
        literalCondition.add(cdKaisha)

        inData.put(YBMKKSCjfConst.HANYO_CONDITION_1, cdShokuba)
        inData.put(
          YBMKKSCjfConst.HANYO_CONDITION_2,
          super.getDtKijun(super.getComboID(dtNendo)),
        )
        let nmShokuba: string = null!
        let noKaisoLevel: string = null!
        if (SMSCheckField.isValidString(cdShokuba)) {
          nmShokuba = super.getNameByGeneralSearch(
            context,
            YBMKKSCjfConst.HANYO_SEARCH_SOSHIKI_3,
            inData,
            literalCondition,
            YBMKKSCjfConst.HANYO_RESULT_3,
          )
          noKaisoLevel = super.getNameByGeneralSearch(
            context,
            YBMKKSCjfConst.HANYO_SEARCH_SOSHIKI_3,
            inData,
            literalCondition,
            YBMKKSCjfConst.HANYO_RESULT_5,
          )
        }
        if (SMSCheckField.isValidString(nmShokuba)) {
          spread.setCellValue(
            position.row,
            YBMKKSF624SLogic.SPREAD_NM_HAIFU,
            nmShokuba,
          )
          spread.setCellValue(
            position.row,
            YBMKKSF624SLogic.SPREAD_NO_KAISOLEVEL,
            noKaisoLevel,
          )
          returnInfo.cancelScreenTransition()
          spread.setPosition(
            position.row,
            spread.getColumnInformationName(YBMKKSF624SLogic.SPREAD_CD_HAIFU),
          )
          return
        }
      }

      // 個別検索呼び出し
      context.putSucceedData(
        YBMKKSCjfConst.SEARCH_ST_MODE,
        YBMKKSCjfConst.ST_MODE_SOSHIKI,
      )
      context.putSucceedData(
        YBMKKSCjfConst.DT_TAISHO,
        super.getDtKijun(super.getComboID(dtNendo)),
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF624MLogic.showJigyo end')
  }

  /** 計算ボタン押下イベントハンドラです。*/
  calcGokei(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF624MLogic.calcGokei start')
    try {
      super.calcGokei2(event, context, returnInfo, YBMKKSF624SLogic.NM_GAMEN)
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF624MLogic.calcGokei end')
  }

  /** CSVﾀﾞｳﾝﾛｰﾄﾞボタン押下イベントハンドラです。*/
  csvDownload(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF624MLogic.csvDownload start')
    try {
      super.csvDownload2(
        event,
        context,
        returnInfo,
        YBMKKSF624SLogic.COMMAND_GET_LINE_HIRITSU_CSV,
        YBMKKSF624SLogic.NM_GAMEN,
        YBMKKSF624SLogic.CD_GAMEN_ID,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF624MLogic.csvDownload end')
  }

  /** 登録ボタン押下イベントハンドラです。 */
  register(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF624MLogic.register start')
    try {
      this.register2(
        event,
        context,
        returnInfo,
        YBMKKSF624SLogic.COMMAND_RGS_LINE_HIRITSU,
        YBMKKSF624SLogic.ITEM_LINE_HIRITSU,
        YBMKKSF624SLogic.NM_GAMEN,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF624MLogic.register end')
  }

  /**
   * 初期表示実行済フラグクリアイベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  removeInitFlag(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF624SLogic.removeInitFlag start')

    let fgInit: any = null
    try {
      // 共有領域から初期化実行判定フラグを取得
      fgInit = super.getUserData(context, YBMKKSCjfConst.FG_INIT)
      // Initフラグがnullでなければキー削除
      if (fgInit != null) {
        super.removeUserDataWithObject(context, YBMKKSCjfConst.FG_INIT as any)
      }
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF624SLogic.removeInitFlag end')
  }

  /**
   * 初期表示実行済フラグクリアイベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  removeInitFlag1(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF624SLogic.removeInitFlag start')

    let fgInit: any = null
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      if (
        super.isHeaderConditionChanged(context, current, returnInfo, [
          '複写',
          '複写',
        ])
      ) {
        returnInfo.cancelScreenTransition()
        return
      }

      // 共有領域から初期化実行判定フラグを取得
      fgInit = super.getUserData(context, YBMKKSCjfConst.FG_INIT)
      // Initフラグがnullでなければキー削除
      if (fgInit != null) {
        super.removeUserDataWithObject(context, YBMKKSCjfConst.FG_INIT as any)
      }
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF624SLogic.removeInitFlag end')
  }
}
