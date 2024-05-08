/**
 * 頁検索用クラスです。
 * @author  販売管理WG
 */

import { SMSHashKeyConst } from './SMSHashKeyConst'

export class SMSPageTranUtil {
  /**
   * 検索方向、表示済みレコード位置、最大表示数、検索数から
   * 表示開始位置と表示終了位置を求めます。
   * 検索方向がSMSHashKeyConst.PARAM_KEY_FORWARD、表示済み位置が100、最大表示数が100なら
   * 表示開始位置は101,表示終了位置は200になります。
   * @param SMSHashKeyConstのキーを使用
   * @param hyoujizumi 表示済みレコード位置
   * @param maxHyoji 最大表示数
   * @param kensakuCnt 検索数
   * @return int[] [0]:表示開始位置　[1]:表示終了位置
   */
  static recordPositionCalc(
    kensakuHoukou: string,
    hyojiZumi: number,
    maxHyoji: number,
    kensakuCnt: number,
  ): number[] {
    let rtn: number[] = [0, 0]
    let fromNumber: number = 0
    let toNumber: number = 0

    if (kensakuHoukou.equals(SMSHashKeyConst.PARAM_KEY_FORWARD)) {
      //次へ
      fromNumber = hyojiZumi < 1 ? 1 : hyojiZumi + 1
      toNumber =
        fromNumber + maxHyoji - 1 > kensakuCnt
          ? kensakuCnt
          : fromNumber + maxHyoji - 1
    } else if (kensakuHoukou.equals(SMSHashKeyConst.PARAM_KEY_REVERSE)) {
      //前へ
      if (hyojiZumi == kensakuCnt) {
        //最終から戻る場合
        let hasu: number = kensakuCnt % maxHyoji
        if (hasu != 0) {
          toNumber =
            maxHyoji * ((kensakuCnt - (kensakuCnt % maxHyoji)) / maxHyoji)
          fromNumber = toNumber - maxHyoji + 1
        } else {
          toNumber = maxHyoji * ((kensakuCnt - maxHyoji) / maxHyoji)
          fromNumber = toNumber - maxHyoji + 1
        }
      } else {
        //					toNumber = (hyojiZumi - maxHyoji) < maxHyoji ? maxHyoji :hyojiZumi - maxHyoji;
        toNumber = hyojiZumi - maxHyoji
        fromNumber = toNumber - maxHyoji < 1 ? 1 : toNumber - maxHyoji + 1
      }
    } else if (kensakuHoukou.equals(SMSHashKeyConst.PARAM_KEY_TOP)) {
      //先頭
      fromNumber = 1
      toNumber = maxHyoji
    } else if (kensakuHoukou.equals(SMSHashKeyConst.PARAM_KEY_LAST)) {
      //最終
      fromNumber =
        maxHyoji * ((kensakuCnt - (kensakuCnt % maxHyoji)) / maxHyoji) + 1
      toNumber = kensakuCnt
    } else if (kensakuHoukou.equals('')) {
      fromNumber = 1
      toNumber = maxHyoji
    }

    rtn[0] = fromNumber
    rtn[1] = toNumber
    return rtn
  }

  /**
   * 次頁遷移可否を判断します。
   * 表示済み情報と最大表示から判断します。
   * @param hyojiZumi表示済み情報
   * @param kensakuKensu 検索件数
   * @return boolean
   */
  static chkForward(hyojiZumi: number, kensakuKensu: number): boolean {
    let rtn: boolean = false

    if (hyojiZumi < kensakuKensu) {
      rtn = true
    }

    return rtn
  }

  /**
   * 前頁遷移可否を判断します。
   * 表示済み情報と検索件数から判断します。
   * @param hyojiZumi表示済み情報
   * @param maxHyouji 最大表示
   * @return boolean
   */
  static chkReverse(hyojiZumi: number, maxHyouji: number): boolean {
    let rtn: boolean = false

    if (hyojiZumi - maxHyouji > 0) {
      rtn = true
    }

    return rtn
  }

  /**
   * 表示済み件数と最大画面表示数から表示開始件数を返します。
   * @param hyojiZumi表示済み情報
   * @param maxHyouji 最大表示
   * @param cnt 検索数
   * @return long 表示開始件数
   */
  static getHyoujiKaishi(
    hyojiZumi: number,
    maxHyouji: number,
    cnt: number,
  ): number {
    let rtn: number = 0

    if (hyojiZumi - maxHyouji < 1) {
      rtn = 1
    } else {
      rtn = hyojiZumi - maxHyouji + 1
    }

    //表示済みが最大件数なら
    if (hyojiZumi == cnt) {
      if (cnt % maxHyouji == 0) {
        rtn = cnt - maxHyouji + 1
      } else {
        rtn = cnt - (cnt % maxHyouji) + 1
      }
    }

    return rtn
  }

  /**
   * 表示済みレコード位置、最大表示数、検索数から
   * 表示頁と頁数を求めます。
   * @param hyoujizumi 表示済みレコード位置
   * @param maxHyoji 最大表示数
   * @param kensakuCnt 検索数
   * @return int[] [0]:表示頁　[1]:頁数
   */
  static pagePositionCalc(
    hyojiZumi: number,
    maxHyoji: number,
    kensakuCnt: number,
  ): number[] {
    let rtn: number[] = [0, 0]
    rtn[0] =
      hyojiZumi % maxHyoji == 0
        ? hyojiZumi / maxHyoji
        : hyojiZumi / maxHyoji + 1
    rtn[1] =
      kensakuCnt % maxHyoji == 0
        ? kensakuCnt / maxHyoji
        : kensakuCnt / maxHyoji + 1
    return rtn
  }

  /**
   * 表示頁、最大表示数、検索数から
   * 表示開始位置と表示終了位置を求めます。
   * @param hyoujiPage 表示頁
   * @param maxHyoji 最大表示数
   * @param kensakuCnt 検索数
   * @return int[] [0]:表示開始位置　[1]:表示終了位置
   */
  static recordPositionCalcByPage(
    hyojiPage: number,
    maxHyoji: number,
    kensakuCnt: number,
  ): number[] {
    let rtn: number[] = [0, 0]
    rtn[0] = hyojiPage * maxHyoji - maxHyoji + 1
    rtn[1] =
      rtn[0] + maxHyoji - 1 > kensakuCnt ? kensakuCnt : rtn[0] + maxHyoji - 1
    return rtn
  }

  _getName(): string {
    return 'SMSPageTranUtil'
  }

  static _getName(): string {
    return 'SMSPageTranUtil'
  }

  _getType() {
    return SMSPageTranUtil as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSPageTranUtil'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSPageTranUtil'
  }
}
