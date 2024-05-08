import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import { Long } from '@/lib/native/lang/Long'
import { SMSCjfLogicBase } from '@/lib/sms/sol/sys/cjf/SMSCjfLogicBase'
import { SMSFileUtil } from '@/lib/sms/sol/sys/SMSFileUtil'
import { SMSPropsInfos } from '@/lib/sms/sol/sys/SMSPropsInfos'
import { YBMKKSCjfConst } from './YBMKKSCjfConst'
import { SMSRuntimeException } from '@/lib/sms/sol/sys/SMSRuntimeException'
import { SMSMessageConst } from '@/lib/sms/sol/sys/SMSMessageConst'
import { StringBuffer } from '@/lib/native/lang/StringBuffer'
import { createStringArray } from '@/utils/array/1D'
import { SMSHeaderFooterManager } from '@/lib/sms/sol/sys/cjf/logic/SMSHeaderFooterManager'
import { SMSCheckField } from '@/lib/sms/sol/sys/SMSCheckField'
import { Integer } from '@/lib/native/lang/Integer'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import type { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'
import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog'
import { BigDecimal } from '@/lib/native/math/BigDecimal'
import { DecimalFormat } from '@/lib/native/text/DecimalFormat'
import { Double } from '@/lib/native/lang/Double'
import { SMSColor } from '@/lib/sms/sol/sys/SMSColor'

/**
 *	管理会計共通ロジッククラスです。
 */
export abstract class YBMKKSCjfLogicBase extends SMSCjfLogicBase {
  /**
   * ファイルサイズが制限値より大きくないかチェックを行います。
   * ファイルサイズが制限値を超えていた場合はメッセージの表示も行います。
   * @return boolean チェック結果　true:制限値未満　false:制限値以上
   */
  protected checkFileSize(context: JCFContext, fileName: string): boolean {
    let fileUtil: SMSFileUtil = new SMSFileUtil()
    let size: number = 0
    let max: number = 0

    // プロパティより制限値を取得
    try {
      max = Long.parseLong(
        SMSPropsInfos.getProperty(
          YBMKKSCjfConst.SUB_SYSTEM_ID,
          YBMKKSCjfConst.MAX_FILE_SIZE,
        ),
      )
    } catch (e: any) {
      throw new SMSRuntimeException(
        context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
      )
    }

    // ファイルサイズ取得
    size = fileUtil.getFileSize(fileName)

    if (size > max) {
      let sb: StringBuffer = new StringBuffer()
      sb.append(max)
      sb.append('bytes')
      let params: string[] = createStringArray(1)
      params[0] = sb.toString()
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YBMYHSMCW005,
        params,
      )
      return false
    } else {
      return true
    }
  }

  /**
   * 年度のチェックです。
   * nullチェック、空文字チェック、数値チェック、桁数チェック、負数チェックを行います。
   */
  protected checkNendo(dtNendo: string): boolean {
    // null 空文字チェック
    if (dtNendo == null || dtNendo.trim().equals('')) {
      return false
    }

    // 数値以外
    if (!SMSCheckField.checkField(SMSCheckField.FIELD_N, dtNendo)) {
      return false
    }

    // 桁数チェック
    if (dtNendo.length != 4) {
      return false
    }

    // 負数チェック
    if (Integer.parseInt(dtNendo) < 0) {
      return false
    }

    return true
  }
  /**
   * 入力値のチェックです。
   * @param context      コンテキスト
   * @param back         背景色を変更する部品
   * @param focus        フォーカス移動する部品
   * @param msgFlg       エラーの種類(1:必須入力、2:フル桁、3:型)
   * @param errMsg       エラーメッセージに表示する文字列
   * @param returnInfo   業務ロジック復帰情報クラス
   */
  protected checkInput(
    context: JCFContext,
    back: JCFItemData,
    focus: string,
    msgFlg: number,
    errMsg: string[],
    returnInfo: JCFReturnInfo,
  ) {
    try {
      // 背景（エラー）色を設定
      back.setBackground(SMSColor.WARNING)
      //フォーカスを設定
      returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, focus)
      //画面遷移制御
      returnInfo.cancelScreenTransition()
      //警告メッセージを設定(1:必須入力、2:フル桁、3:型)
      if (msgFlg == 1) {
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.SMSCMNMCA001,
          errMsg,
        )
      } else if (msgFlg == 2) {
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.SMSCMNMCA016,
          errMsg,
        )
      } else if (msgFlg == 3) {
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.SMSCMNMCA004,
          errMsg,
        )
      }
    } catch (ia: any) {
      SMSCLLog.error(ia.toString())
    }
  }

  /**
   * 実数の四捨五入を行います。
   * @param value 四捨五入値を得たい実数
   * @param digit 小数部有効桁数
   * @exception ArithmeticException 小数部有効桁数がマイナス値の場合
   */
  protected static round(value: number, digit: number): number {
    let bd: BigDecimal = new BigDecimal(value.toString())
    let scale: number = bd
      .setScale(digit, BigDecimal.ROUND_HALF_UP)
      .doubleValue()
    return scale
  }

  /**
   * String型で表現された数値の小数部を0埋めし、Stringで返します。
   * @param dbl 対象の数値
   * @param i 小数部の有効桁数
   */
  protected static zeroPadding(dbl: string, i: number): string {
    if (i < 0) {
      return null!
    }
    let format: StringBuffer = new StringBuffer('#,##0')
    if (i == 0) {
    } else {
      format.append('.')
      for (let j = 0; j < i; j++) {
        format.append('0')
      }
    }
    let df: DecimalFormat = new DecimalFormat(format.toString())
    return df.format(this.round(Double.parseDouble(dbl), i))
  }

  /**
   * String型で表現された整数にカンマを付加します。
   */
  protected static addComma(val: string): string {
    return this.zeroPadding(val, 0)
  }
}
