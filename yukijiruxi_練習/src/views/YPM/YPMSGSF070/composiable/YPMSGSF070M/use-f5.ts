import type { Button } from '@/types/components'
import { useButtonConfig } from '@/stores/button-config'
import { ColorStatus, MSGPositions, MSGTypes, Message } from '@/enums'
import { handlerMessage, interpolateMessage } from '@/utils'
import { useYPMSGSF070MStore } from '../../YPMSGSF070M-store'
import { useDialog } from '@/stores/dialog'
import Big from 'big.js'

/** F5 「再計算」ボタン処理 */
export function useF5() {
  /** ゼロ */
  const ZERO_VALUE = '0'
  /** 原材料コードインデックス */
  const IDX_CD_GENZAIRYO = 3
  /** 修正数量インデックス */
  const IDX_QT_SHUSEI_SHIYO = 9
  /** 元修正数量インデックス */
  const IDX_QT_MOTOSHUSEI_SHIYO = 11
  /** 再計算区分インデックス */
  const IDX_SAIKEISAN = 12
  /** スプレッド内の製造ロットの列位置 */
  const IDX_IF_SEIZO_LOT = 1
  /** 数量インデックス */
  const IDX_QT_SHIYO = 6
  /** 修正金額インデックス */
  const IDX_MN_SHUSEI_SHIYO = 10
  /** 単価インデックス */
  const IDX_QT_TANKA = 7

  const layoutButtons = useButtonConfig()

  const handleF5 = (): void => {
    const F5_TITLE = '(F5)'
    const buttons: Button.Config[] = layoutButtons.footerButtonConfigs
    const target = buttons.find((item) => item.title.includes(F5_TITLE))
    const viewStore = useYPMSGSF070MStore()
    const { setShowDialog } = useDialog()

    if (target && target.disabled) {
      return
    }

    const reCompute = () => {
      viewStore.preAction()

      if (!checkIsMinusChek()) {
        // TODO: 実装には仕様の確認が必要
        // this.getReturnInfo().cancelScreenTransition()
        return
      }

      handlerMessage(
        MSGPositions.POPUP,
        MSGTypes.WARNNING,
        interpolateMessage(Message.YSDCMNMSC033, [
          '修正数量をもとに修正金額を再計算します',
        ]),
        [
          {
            title: 'はい',
            disabled: false,
            width: '80',
            height: '15',
            onClick: okClick,
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

    const okClick = () => {
      setTimeout(() => {
        alert(`
          FIXME: 再計算後のデータ未更新問題
          TODO: 隠し列の隠す処理
        `)
      }, 500)

      let noErr: boolean = true

      // 再計算チェック：再計算するロットの行にチェック付加
      saikeisanCheck()

      viewStore.body_spread01.forEach((row) => {
        // 数量
        let suryo = row[IDX_QT_SHIYO]?.datum as string
        // 修正数量
        let suryo_s = row[IDX_QT_SHUSEI_SHIYO].datum as string

        let kingaku_s_before = row[IDX_MN_SHUSEI_SHIYO].datum as string

        // 修正数量になにも入力しない場合は、0とみなす。
        if (suryo_s === '') {
          suryo_s = '0'
        }

        let calcTanka = new Big(row[IDX_QT_TANKA]?.datum as string)
        let calcSuryo = new Big(suryo_s)

        let calcKingaku = calcTanka.times(calcSuryo)
        let kingaku_c = calcKingaku.toFixed(0).toString()

        // 修正数量に変更があった場合、再計算を行う。
        // 再計算区分 1:再計算、2:再計算（金額変更なし）
        if (
          '1' === row[IDX_SAIKEISAN].datum ||
          '2' === row[IDX_SAIKEISAN].datum
        ) {
          let tmpKingaku = calcTanka.times(calcSuryo)
          let kingaku_s = tmpKingaku.toFixed(0).toString()

          if (kingaku_s.length > 12) {
            handlerMessage(
              MSGPositions.FOOTER,
              MSGTypes.ERROR,
              interpolateMessage(Message.YCSCMNMCW170, ['修正金額', '12桁']),
            )

            row[IDX_QT_SHUSEI_SHIYO].datumBackground = ColorStatus.WARNING

            // TODO: 実装には仕様の確認が必要
            // this.getReturnInfo().cancelScreenTransition();

            noErr = false
            setShowDialog(false)
            return
          }

          if (
            !row[IDX_QT_SHUSEI_SHIYO]?.datum &&
            row[IDX_QT_SHUSEI_SHIYO]?.datum != '0'
          ) {
            row[IDX_QT_SHUSEI_SHIYO].datum = ZERO_VALUE
          }

          if (row[IDX_SAIKEISAN].datum === '1') {
            row[IDX_MN_SHUSEI_SHIYO].datum = kingaku_s
          }
        }
      })

      if (noErr) {
        setSpreadQtMuData()
      }

      setShowDialog(false)
    }

    /**
     * 明細の数量と金額を保持する。
     */
    const setSpreadQtMuData = () => {
      // TODO: ユーザーデータの実装待ち
      // スプレッド
      // JCFSpreadData spread = super.getSpreadData(ITEM_SPREAD);
      // HashMap[] saveData = new HashMap[spread.getRowCount()];
      // for(int ix=0; ix<spread.getRowCount(); ix++)
      // {
      // 	HashMap map = new HashMap(10);
      //
      // 	map.put(String.valueOf(IDX_QT_SHUSEI_SHIYO), emptyToZero(spread.getCellValue(ix, IDX_QT_SHUSEI_SHIYO)));
      // 	map.put(String.valueOf(IDX_MN_SHUSEI_SHIYO), emptyToZero(spread.getCellValue(ix, IDX_MN_SHUSEI_SHIYO)));
      //
      // 	saveData[ix] = map;
      // }
      //
      // putUserData(this.getContext(), SAVE_KEY_SPREAD_QTMU, saveData);
    }

    /**
     * マイナス入力チェックを行う。
     * @return boolean
     */
    const checkIsMinusChek = () => {
      let isCheck: boolean = true
      const qtShikakariJuryo = new Big(viewStore.qtJuryo)

      // マイナスチェック（"0"の場合のみ対象とする。)
      let isMunusCheck: string = '1'
      let checkCdGenzairyo: string = ''

      let isSetFocus: boolean = false

      for (let ix = 0; ix < viewStore.body_spread01.length; ix++) {
        // TODO: マイナスチェックを取得
        // HashMap saveData = this.getServerMap(ix);

        // TODO: 判定値を取得する。(一覧検索時に汎用分類マスタより取得済み)
        // isMunusCheck = (String)saveData.get(HM_KEY_MINUS_CHECK);

        const cdGenzairyo =
          viewStore.body_spread01[ix][IDX_CD_GENZAIRYO].datum?.toString()

        if (isMunusCheck === '1') {
          continue
        }

        // 同じ原材料のグループでは１回チェックする。
        if (checkCdGenzairyo === cdGenzairyo) {
          continue
        }

        // TODO: fix Java to TypeScript
        // 		BigDecimal qtShikakari = new BigDecimal(0);
        // 		BigDecimal qtFat = new BigDecimal(0);
        // 		BigDecimal qtSnf = new BigDecimal(0);
        // 		BigDecimal qtTs = new BigDecimal(0);
        //
        // 		int ixQtShikakari = -1;
        // 		int ixQtFat = -1;
        // 		int ixQtSnf = -1;
        // 		int ixQtTs = -1;
        //
        // 		int groupCount = 0;
        //
        // 		for (int iy = 0; iy < spread.getRowCount(); iy++)
        // 		{
        // 			String cdGenzairyo2 = spread.getCellValue(iy, IDX_CD_GENZAIRYO);
        // 			String stSeibun = spread.getCellValue(iy, IDX_ST_NYU_FAT_SNF_TS);
        //
        // 			// 同じ原材料のグループを対象とする。
        // 			if(!cdGenzairyo.equals(cdGenzairyo2))
        // 			{
        // 				continue;
        // 			}
        //
        // 			if(stSeibun.equals(ST_SHUSEI_DEF))
        // 			{
        // 				qtShikakari = new BigDecimal(emptyToZero(spread.getCellValue(iy, IDX_QT_SHUSEI_SHIYO)));
        // 				ixQtShikakari = iy;
        // 			}
        // 			else if(stSeibun.equals(ST_SHUSEI_FAT))
        // 			{
        // 				qtFat = new BigDecimal(emptyToZero(spread.getCellValue(iy, IDX_QT_SHUSEI_SHIYO)));
        // 				ixQtFat = iy;
        // 			}
        // 			else if(stSeibun.equals(ST_SHUSEI_SNF))
        // 			{
        // 				qtSnf = new BigDecimal(emptyToZero(spread.getCellValue(iy, IDX_QT_SHUSEI_SHIYO)));
        // 				ixQtSnf = iy;
        // 			}
        // 			else
        // 			{
        // 				qtTs = new BigDecimal(emptyToZero(spread.getCellValue(iy, IDX_QT_SHUSEI_SHIYO)));
        // 				ixQtTs = iy;
        // 			}
        //
        // 			groupCount++;
        // 		}
        //
        // 		// 仕掛重量＜０、または、ＦＡＴ量、ＳＮＦ量＜０の場合
        // 		if(qtShikakari.compareTo(BD_ZERO_VALUE) < 0
        // 			|| qtFat.compareTo(BD_ZERO_VALUE) < 0
        // 			|| qtSnf.compareTo(BD_ZERO_VALUE) < 0
        // 			|| qtTs.compareTo(BD_ZERO_VALUE) < 0)
        // 		{
        // 			int focusRow = -1;
        //
        // 			super.showMessage(SMSMessageConst.YPMGSSMCW116, null, false);
        // 			// 背景色を設定
        // 			if(qtShikakari.compareTo(BD_ZERO_VALUE) < 0)
        // 			{
        // 				spread.setCellBackground(ixQtShikakari, IDX_QT_SHUSEI_SHIYO, SMSColor.WARNING);
        // 				if(focusRow < 0)
        // 				{
        // 					focusRow = ixQtShikakari;
        // 				}
        // 			}
        // 			if(qtFat.compareTo(BD_ZERO_VALUE) < 0)
        // 			{
        // 				spread.setCellBackground(ixQtFat, IDX_QT_SHUSEI_SHIYO, SMSColor.WARNING);
        // 				if(focusRow < 0)
        // 				{
        // 					focusRow = ixQtFat;
        // 				}
        // 			}
        // 			if(qtSnf.compareTo(BD_ZERO_VALUE) < 0)
        // 			{
        // 				spread.setCellBackground(ixQtSnf, IDX_QT_SHUSEI_SHIYO, SMSColor.WARNING);
        // 				if(focusRow < 0)
        // 				{
        // 					focusRow = ixQtSnf;
        // 				}
        // 			}
        // 			if(qtTs.compareTo(BD_ZERO_VALUE) < 0)
        // 			{
        // 				spread.setCellBackground(ixQtTs, IDX_QT_SHUSEI_SHIYO, SMSColor.WARNING);
        // 				if(focusRow < 0)
        // 				{
        // 					focusRow = ixQtTs;
        // 				}
        // 			}
        //
        // 			if(!isSetFocus && focusRow >= 0)
        // 			{
        // 				super.getSpreadData(ITEM_SPREAD).setFocusRow(focusRow);
        // 				super.getSpreadData(ITEM_SPREAD).setFocusColumnName("__COL_9");
        // 				isSetFocus = true;
        // 			}
        //
        // 			isCheck = false;
        // 			break;
        // 		}
        //
        // 		checkCdGenzairyo = cdGenzairyo;
      }

      return isCheck
    }

    /**
     * TODO: サーバデータ取得</br>
     * 行番号に対応するサーバからの取得データを取得</br>
     * @param row スプレッド行番号
     * @return サーバより取得したハッシュマップ
     */
    const getServerMap = (row: number) => {
      // HashMap map = super.getUserData(KEY_SERVER_MAP);
      //
      // if ( map == null ) {
      // 	return null;
      // }
      //
      // return (HashMap)map.get(String.valueOf(row));
    }

    /** 再計算チェック */
    const saikeisanCheck = () => {
      viewStore.body_spread01.forEach((row) => {
        let lot_no: string

        // 修正数量
        let suryo_s = row[IDX_QT_SHUSEI_SHIYO].datum?.toString()

        // 修正数量になにも入力しない場合は、0とみなす。
        if (!suryo_s) {
          suryo_s = '0'
        }

        // 修正数量は元修正数量と不一致
        if (!(suryo_s === row[IDX_QT_MOTOSHUSEI_SHIYO]?.datum?.toString())) {
          // 再計算区分：１を立てる
          if (!row[IDX_SAIKEISAN]) {
            row.push({ id: (IDX_SAIKEISAN + 1).toString() })
          }

          row.find(
            (cell) => cell.id === (IDX_SAIKEISAN + 1).toString(),
          )!.datum = '1'

          // // フラグを立てた行のロット番号取得
          lot_no = row[IDX_IF_SEIZO_LOT].datum as string

          // 同一ロット番号は全て再計算にする（区分：２）
          viewStore.body_spread01.forEach((row1) => {
            if (lot_no === (row1[IDX_IF_SEIZO_LOT].datum as string)) {
              if (!row1[IDX_SAIKEISAN]) {
                row1.push({ id: (IDX_SAIKEISAN + 1).toString() })
              }

              const target = row1.find(
                (cell) => cell.id === (IDX_SAIKEISAN + 1).toString(),
              )

              if (target?.datum === '') {
                target!.datum = '2'
              }
            }
          })
        }
      })
    }

    target!.onClick = reCompute
  }

  return { handleF5 }
}
