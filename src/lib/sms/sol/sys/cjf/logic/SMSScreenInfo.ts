import { HashMap } from '@/lib/native/util/HashMap'
import { SMSCLLog } from '../SMSCLLog'
import { Integer } from '@/lib/native/lang/Integer'
import { SMSGeneralPurposeSearchScreenPropsInfos } from '../../SMSGeneralPurposeSearchScreenPropsInfos'

/**
 * 汎用検索画面データ処理クラスです。
 * @author 富士通)宇津宮
 * @version
 */
export class SMSScreenInfo {
  //　汎用検索画面の条件項目HASHMAP
  screenInfoCondition: HashMap = new HashMap()
  //　汎用検索画面の検索結果項目HASHMAP
  screenInfoResult: HashMap = new HashMap()
  //　汎用検索画面の条件項目数HASHMAP
  conditionCntInfo: HashMap = new HashMap()
  //　汎用検索画面の検索結果項目数HASHMAP
  resultCntInfo: HashMap = new HashMap()

  /** コンストラクタ*/
  constructor(searchID: string) {
    let scrMap: HashMap = new HashMap()

    let conditionCnt: number = 1

    SMSCLLog.debug(
      '汎用検索画面プロパティファイルの条件項目の情報を取得します。',
    )

    //　プロパティファイルの条件項目の画面情報を取得する。
    while (true) {
      //　ラベル値を取得
      let labelValue: string = ''

      //　フィールドタイプを取得
      let fieldType: string = ''

      labelValue = this.getProperties(
        searchID,
        '.' + 'condition',
        '.' + conditionCnt,
        '.' + 'labelValue',
      )

      if (labelValue == null || labelValue.equals('')) {
        labelValue = this.getProperties(
          searchID,
          '.' + 'condition',
          '.' + (conditionCnt + 1),
          '.' + 'labelValue',
        )
        fieldType = this.getProperties(
          searchID,
          '.' + 'condition',
          '.' + conditionCnt,
          '.' + 'fieldType',
        )

        if (labelValue != null && !labelValue.equals('')) {
          SMSCLLog.error(
            conditionCnt +
              ' 番目の必須項目ラベル値がプロパティファイルに' +
              '入力されていないか、取得出来ませんでした。',
          )
        } else {
          if (fieldType != null && !fieldType.equals('')) {
            SMSCLLog.error(
              conditionCnt +
                ' 番目の必須項目ラベル値がプロパティファイルに' +
                '入力されていないか、取得出来ませんでした。',
            )
          }
        }

        break
      }

      SMSCLLog.debug(conditionCnt + ' 番目の必須項目ラベル値を取得しました。')

      //　取得したラベル値をマップに格納
      scrMap.put(conditionCnt + '.' + 'labelValue', labelValue)

      fieldType = this.getProperties(
        searchID,
        '.' + 'condition',
        '.' + conditionCnt,
        '.' + 'fieldType',
      )

      if (fieldType == null || fieldType.equals('')) {
        fieldType = this.getProperties(
          searchID,
          '.' + 'condition',
          '.' + (conditionCnt + 1),
          '.' + 'fieldType',
        )

        if (fieldType != null && !fieldType.equals('')) {
          SMSCLLog.error(
            conditionCnt +
              ' 番目の必須項目フィールドタイプ値がプロパティファイルに' +
              '入力されていないか、取得出来ませんでした。',
          )
        } else {
          if (labelValue != null && !labelValue.equals('')) {
            SMSCLLog.error(
              conditionCnt +
                ' 番目の必須項目フィールドタイプ値がプロパティファイルに' +
                '入力されていないか、取得出来ませんでした。',
            )
          }
        }

        break
      }

      SMSCLLog.debug(
        conditionCnt + ' 番目の必須項目フィールドタイプ値を取得しました。',
      )

      //　取得したフィールドタイプ値をマップに格納
      scrMap.put(conditionCnt + '.' + 'fieldType', fieldType)

      //　フィールドタイプが”4”(YUKIFieldFilledDateが2個ある)場合、
      if (fieldType.equals('4')) {
        //　前のdateフィールドのアイテム名を取得
        let paramNameFrom: string = ''
        paramNameFrom = this.getProperties(
          searchID,
          '.' + 'condition',
          '.' + conditionCnt,
          '.' + 'paramNameFrom',
        )

        if (paramNameFrom != null && !paramNameFrom.equals('')) {
          SMSCLLog.debug(
            conditionCnt +
              ' 番目のdateフィールドの前のアイテム名を取得しました。',
          )

          scrMap.put(conditionCnt + '.' + 'paramNameFrom', paramNameFrom)
        }

        //　後のdateフィールドのアイテム名を取得
        let paramNameTo: string = ''
        paramNameTo = this.getProperties(
          searchID,
          '.' + 'condition',
          '.' + conditionCnt,
          '.' + 'paramNameTo',
        )

        if (paramNameTo != null && !paramNameTo.equals('')) {
          SMSCLLog.debug(
            conditionCnt +
              ' 番目のdateフィールドの後のアイテム名を取得しました。',
          )

          scrMap.put(conditionCnt + '.' + 'paramNameTo', paramNameTo)
        }
      } else {
        // アイテム名を取得
        let paramName: string = ''
        paramName = this.getProperties(
          searchID,
          '.' + 'condition',
          '.' + conditionCnt,
          '.' + 'paramName',
        )

        if (paramName != null && !paramName.equals('')) {
          SMSCLLog.debug(conditionCnt + ' 番目のアイテム名を取得しました。')

          scrMap.put(conditionCnt + '.' + 'paramName', paramName)
        }
      }

      //ラベル幅値を取得
      let labelWidth: string = ''
      labelWidth = this.getProperties(
        searchID,
        '.' + 'condition',
        '.' + conditionCnt,
        '.' + 'labelWidth',
      )

      if (labelWidth != null && !labelWidth.equals('')) {
        SMSCLLog.debug(conditionCnt + ' 番目のラベル幅値を取得しました。')

        scrMap.put(conditionCnt + '.' + 'labelWidth', labelWidth)
      } else {
        SMSCLLog.debug(
          conditionCnt + ' 番目のディフォルトラベル幅値を取得しました。',
        )

        //ディフォルトラベル幅値をセット
        scrMap.put(conditionCnt + '.' + 'labelWidth', '128')
      }

      //フィールド幅値を取得
      let fieldWidth: string = ''
      fieldWidth = this.getProperties(
        searchID,
        '.' + 'condition',
        '.' + conditionCnt,
        '.' + 'fieldWidth',
      )

      if (fieldWidth != null && !fieldWidth.equals('')) {
        SMSCLLog.debug(conditionCnt + ' 番目のフィールド幅値を取得しました。')

        scrMap.put(conditionCnt + '.' + 'fieldWidth', fieldWidth)
      } else {
        SMSCLLog.debug(
          conditionCnt + ' 番目のディフォルトフィールド幅値を取得しました。',
        )

        //　ディフォルトフィールド幅値をセット
        //　フィールドタイプが”2”、”4”(YUKIFieldFilledDate)の場合、
        if (fieldType.equals('2') || fieldType.equals('4')) {
          scrMap.put(conditionCnt + '.' + 'fieldWidth', '80')
        } else {
          scrMap.put(conditionCnt + '.' + 'fieldWidth', '250')
        }
      }

      //　フィールドのMaxLength値を取得
      let fieldMaxLength: string = ''
      fieldMaxLength = this.getProperties(
        searchID,
        '.' + 'condition',
        '.' + conditionCnt,
        '.' + 'fieldMaxLength',
      )

      if (fieldType.equals('1')) {
        if (fieldMaxLength != null && fieldMaxLength.length > 0) {
          SMSCLLog.debug(
            conditionCnt + ' 番目のフィールドのMaxLength値を取得しました。',
          )

          scrMap.put(conditionCnt + '.' + 'fieldMaxLength', fieldMaxLength)
        } else {
          SMSCLLog.debug(
            conditionCnt +
              ' 番目のフィールドのディフォルトMaxLength値を取得しました。',
          )

          //　ディフォルトフィールドのMaxLength値を取得
          scrMap.put(conditionCnt + '.' + 'fieldMaxLength', '15')
        }
        //日付、日付指定項目の場合は、MaxLengthを8固定とする
      } else if (fieldType.equals('2') || fieldType.equals('4')) {
        scrMap.put(conditionCnt + '.' + 'fieldMaxLength', '8')
        //コンボボックスの場合
      } else if (fieldType.equals('3')) {
        if (fieldMaxLength != null && fieldMaxLength.length > 0) {
          SMSCLLog.debug(
            conditionCnt + ' 番目のフィールドのMaxLength値を取得しました。',
          )
          scrMap.put(conditionCnt + '.' + 'fieldMaxLength', fieldMaxLength)
        } else {
          SMSCLLog.debug(
            conditionCnt +
              ' 番目のフィールドのディフォルトMaxLength値を取得しました。',
          )
          //デフォルト値『40』をセット
          scrMap.put(conditionCnt + '.' + 'fieldMaxLength', '40')
        }
      }

      //　画面のラベルの前部分に"＊"を付けるかの判断値を取得
      let required: string = ''
      required = this.getProperties(
        searchID,
        '.' + 'condition',
        '.' + conditionCnt,
        '.' + 'required',
      )

      if (required != null && !required.equals('')) {
        SMSCLLog.debug(
          conditionCnt +
            ' 番目のフィールドの必須項目かを判断する設定値を取得しました。',
        )

        scrMap.put(conditionCnt + '.' + 'required', required)
      } else {
        scrMap.put(conditionCnt + '.' + 'required', 'false')
      }

      //　フィールドの入力文字初期設定のIME値を取得
      let imeFlg: string = ''
      imeFlg = this.getProperties(
        searchID,
        '.' + 'condition',
        '.' + conditionCnt,
        '.' + 'imeFlg',
      )

      if (imeFlg != null && !imeFlg.equals('')) {
        SMSCLLog.debug(
          conditionCnt +
            ' 番目のフィールドの入力文字初期設定のIME値を取得しました。',
        )

        scrMap.put(conditionCnt + '.' + 'imeFlg', imeFlg)
      }

      //　コンボボックスの値を取得
      let comboText: string = ''
      let comboId: string = ''
      let comboCnt: number = 1

      if (fieldType.equals('3')) {
        while (true) {
          comboText = this.getProperties(
            searchID,
            '.' + 'condition',
            '.' + conditionCnt,
            '.' + 'combo' + '.' + 'text' + '.' + comboCnt,
          )

          comboId = this.getProperties(
            searchID,
            '.' + 'condition',
            '.' + conditionCnt,
            '.' + 'combo' + '.' + 'id' + '.' + comboCnt,
          )

          if (comboText == null || comboId == null) {
            break
          }

          SMSCLLog.debug(
            conditionCnt +
              ' 番目のフィールドのコンボボックスの値を取得しました。',
          )

          scrMap.put(
            conditionCnt + '.' + 'combo' + '.' + 'text' + '.' + comboCnt,
            comboText,
          )

          scrMap.put(
            conditionCnt + '.' + 'combo' + '.' + 'id' + '.' + comboCnt,
            comboId,
          )

          comboCnt++
        }
      }

      conditionCnt++
    }

    SMSCLLog.debug(
      '汎用検索画面プロパティファイルの条件項目の情報を取得しました。',
    )

    //　取得した条件項目の画面情報を画面情報クラスにセットする。
    this.setScreenInfoCondition(searchID, scrMap)
    //　取得した条件項目の数を画面情報クラスにセットする。
    this.setScreenCnt(searchID, String(conditionCnt))

    let scrResultMap: HashMap = new HashMap()

    let resultCnt: number = 1

    SMSCLLog.debug(
      '汎用検索画面プロパティファイルの結果項目の情報を取得します。',
    )

    //　プロパティファイルの結果項目の画面情報を取得する。
    while (true) {
      //　ヘッダタイトルを取得
      let headerTitle: string = ''

      //　結果リストのカラム値を取得
      let columnWidth: string = ''

      headerTitle = this.getProperties(
        searchID,
        '.' + 'result',
        '.' + resultCnt,
        '.' + 'headerTitle',
      )

      if (headerTitle == null || headerTitle.equals('')) {
        headerTitle = this.getProperties(
          searchID,
          '.' + 'result',
          '.' + (resultCnt + 1),
          '.' + 'headerTitle',
        )

        columnWidth = this.getProperties(
          searchID,
          '.' + 'result',
          '.' + resultCnt,
          '.' + 'columnWidth',
        )

        if (headerTitle != null && !headerTitle.equals('')) {
          SMSCLLog.error(
            resultCnt +
              ' 番目の結果リストの必須項目ヘッダタイトルがプロパティファイルに' +
              '入力されていないか、取得出来ませんでした。',
          )
        } else {
          if (columnWidth != null && !columnWidth.equals('')) {
            SMSCLLog.error(
              resultCnt +
                ' 番目の結果リストの必須項目ヘッダタイトルがプロパティファイルに' +
                '入力されていないか、取得出来ませんでした。',
            )
          }
        }

        break
      }

      SMSCLLog.debug(
        resultCnt + ' 番目の結果リストの必須項目ヘッダタイトルを取得しました。',
      )

      scrResultMap.put(resultCnt + '.' + 'headerTitle', headerTitle)

      columnWidth = this.getProperties(
        searchID,
        '.' + 'result',
        '.' + resultCnt,
        '.' + 'columnWidth',
      )

      if (columnWidth == null || columnWidth.equals('')) {
        columnWidth = this.getProperties(
          searchID,
          '.' + 'result',
          '.' + (resultCnt + 1),
          '.' + 'columnWidth',
        )
        if (columnWidth != null && !columnWidth.equals('')) {
          SMSCLLog.error(
            resultCnt +
              ' 番目の結果リストの必須項目カラム値がプロパティファイルに' +
              '入力されていないか、取得出来ませんでした。',
          )
        } else {
          if (headerTitle != null && !headerTitle.equals('')) {
            SMSCLLog.error(
              resultCnt +
                ' 番目の結果リストの必須項目カラム値がプロパティファイルに' +
                '入力されていないか、取得出来ませんでした。',
            )
          }
        }

        break
      }

      SMSCLLog.debug(
        resultCnt + ' 番目の結果リストの必須項目カラム値を取得しました。',
      )

      scrResultMap.put(resultCnt + '.' + 'columnWidth', columnWidth)

      //　結果リストに表示する項目値を取得
      let paramName: string = ''
      paramName = this.getProperties(
        searchID,
        '.' + 'result',
        '.' + resultCnt,
        '.' + 'resultName',
      )

      if (paramName != null && !paramName.equals('')) {
        SMSCLLog.debug(
          resultCnt + ' 番目の結果リストに表示する項目値を取得しました。',
        )

        scrResultMap.put(resultCnt + '.' + 'resultName', paramName)
      }

      resultCnt++
    }

    SMSCLLog.debug(
      '汎用検索画面プロパティファイルの結果項目の情報を取得しました。',
    )

    //　取得した結果項目の画面情報を画面情報クラスにセットする。
    this.setScreenInfoResult(searchID, scrResultMap)
    //　取得した結果項目の数を画面情報クラスにセットする。
    this.setScreenResultCnt(searchID, String(resultCnt))

    SMSCLLog.trace('YCSCMNF060SLogic:getScreenInfo() end')
  }

  /**
   * 汎用検索画面の条件項目HASHMAPを検索IDをキーとして設定します。
   * @param kensakuID 検索ID
   * @param param 汎用検索画面の条件項目マップ
   */
  setScreenInfoCondition(kensakuID: string, param: HashMap) {
    this.screenInfoCondition.put(kensakuID, param)
  }

  /**
   * 汎用検索画面の条件項目をHASHMAPに返します。
   * @param  kensakuID 検索ID
   * @return obj 汎用検索画面の条件項目マップ
   */
  getScreenInfoCondition(kensakuID: string): HashMap {
    let obj: any = this.screenInfoCondition.get(kensakuID)

    if (obj instanceof HashMap) {
      return obj as HashMap
    }
    return null!
  }

  /**
   * 汎用検索画面の検索結果項目HASHMAPを検索IDをキーとして設定します。
   * @param kensakuID 検索ID
   * @param param 汎用検索画面の検索結果項目マップ
   */
  setScreenInfoResult(kensakuID: string, param: HashMap) {
    this.screenInfoResult.put(kensakuID, param)
  }

  /**
   * 汎用検索画面の検索結果項目をHASHMAPに返します。
   * @param kensakuID 検索ID
   * @return obj 汎用検索画面の検索結果項目マップ
   * @exception Throwable
   */
  getScreenInfoResult(kensakuID: string): HashMap {
    let obj: any = this.screenInfoResult.get(kensakuID)

    if (obj instanceof HashMap) {
      return obj as HashMap
    }
    return null!
  }

  /**
   * 汎用検索画面の条件項目数を検索IDをキーとして設定します。
   * @param kensakuID 検索ID
   * @param conditionCnt 汎用検索画面の条件項目数
   */
  setScreenCnt(kensakuID: string, conditionCnt: string) {
    this.conditionCntInfo.put(kensakuID, conditionCnt)
  }

  /**
   * 汎用検索画面の条件項目数を返します。
   * @param kensakuID 検索ID
   * @return int 汎用検索画面の条件項目数
   */
  getConditionCnt(kensakuID: string): number {
    return Integer.parseInt(String(this.conditionCntInfo.get(kensakuID)))
  }

  /**
   * 汎用検索画面の検索結果項目数を検索IDをキーとして設定します。
   * @param kensakuID 検索ID
   * @param resultCnt 汎用検索画面の検索結果項目数
   */
  setScreenResultCnt(kensakuID: string, resultCnt: string) {
    this.resultCntInfo.put(kensakuID, resultCnt)
  }

  /**
   * 汎用検索画面の検索結果項目数を返します。
   * @param kensakuID 検索ID
   * @return int 汎用検索画面の検索結果項目数
   */
  getResultCnt(kensakuID: string): number {
    return Integer.parseInt(String(this.resultCntInfo.get(kensakuID)))
  }

  /**
   * プロパティ値を取得します。
   * @param searchID
   * @param condition
   * @param cnt
   * @param value
   * @return	propertiesのの値の文字列
   * @exception Throwable
   */
  private getProperties(
    searchID: string,
    condition: string,
    cnt: string,
    value: string,
  ): string {
    let str: string = ''

    str = SMSGeneralPurposeSearchScreenPropsInfos.getInfo(
      searchID,
    ).getProperties(searchID + condition + cnt + value)
    //				SMSGeneralPurposeSearchScreenPropsInfo.getProperties( searchID + condition + cnt + value );

    return str
  }

  _getName(): string {
    return 'SMSScreenInfo'
  }

  static _getName(): string {
    return 'SMSScreenInfo'
  }

  _getType() {
    return SMSScreenInfo as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.logic.SMSScreenInfo'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.logic.SMSScreenInfo'
  }
}
