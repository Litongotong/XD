/******************************************************************************
 * sms.sol.sys.SMSCheckField
 *
 * プログラム名     : sms.sol.sys.SMSCheckField
 * 担当者           : itac）郭澤宇
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/03 | itac）郭澤宇  | SMSCheckField を新規作成，isValidString，CheckLength　メソッドを実装します。
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/

import { Pattern } from '@/lib/native/util/regex/Pattern'
import { SMSProperties } from './SMSProperties'
import { StringBuffer } from '@/lib/native/lang/StringBuffer'
import { IVSDetector } from './IVSDetector'
import type { Matcher } from '@/lib/native/util/regex/Matcher'
import { SMSCheckException } from './SMSCheckException'
import { SMSDateStringUtil } from './SMSDateStringUtil'

/**
 * フィールドチェッククラスです。<br>
 * @author  販売管理WG
 */
export class SMSCheckField extends SMSProperties {
  /** 半角文字チェック */
  static FIELD_A = 'FIELD_A'
  /** 普通文字チェック */
  static FIELD_B = 'FIELD_B'
  /** 日付チェック */
  static FIELD_D = 'FIELD_D'
  /** E-mailアドレスチェック */
  static FIELD_E = 'FIELD_E'
  /** フリーチェック */
  static FIELD_F = 'FIELD_F'
  /** 英数字チェック */
  static FIELD_H = 'FIELD_H'
  /** 英字チェック */
  static FIELD_I = 'FIELD_I'
  /** 数字（カンマNG)チェック */
  static FIELD_N = 'FIELD_N'
  /** 数値（カンマOK)チェック */
  static FIELD_S = 'FIELD_S'
  /** 数値（カンマOK、マイナスOK)チェック */
  static FIELD_M = 'FIELD_M'
  /** 自然数チェック */
  static FIELD_NA = 'FIELD_NA'
  /** 数値（カンマNG、0チェック)チェック */
  static FIELD_SO = 'FIELD_SO'
  /** 電話番号チェック */
  static FIELD_T = 'FIELD_T'
  /** 郵便番号チェック */
  static FIELD_Y = 'FIELD_Y'
  /** 全角チェック */
  static FIELD_Z = 'FIELD_Z'
  /** 英大文字チェック */
  static FIELD_O = 'FIELD_O'
  /** 0-9,A-Zチェック */
  static FIELD_P = 'FIELD_P'
  /** 0-9,半角空白チェック */
  static FIELD_NS = 'FIELD_NS'

  // 2007/04/09 Add start
  /** 数値（カンマOK、ピリオドOK) */
  static FIELD_SP = 'FIELD_SP'
  /** 半角カタカナ */
  static FIELD_K = 'FIELD_K'
  /** 単位（製品) */
  static FIELD_TS = 'FIELD_TS'
  /** 単位（原材料) */
  static FIELD_TG = 'FIELD_TG'
  /** 単位（貯蔵品) */
  static FIELD_TC = 'FIELD_TC'
  /** 英数字（ハイフン(マイナス)OK） */
  static FIELD_HH = 'FIELD_HH'
  // 2007/04/09 Add end

  // 2007/06/06 Add start
  /** 禁則文字（指定文字以外：true　指定文字：false） */
  static FIELD_DISABLE = 'FIELD_DISABLE'
  // 2007/06/06 Add end

  /** 禁止文字です。 */
  private static DISABLECHARS: string

  /** 禁止文字の置換文字です。 */
  private static REPLACECHAR: string

  /** 外字の開始です。 */
  private static GAIJI_START: string = String.fromCharCode(0xe000)

  /** 外字の終了です。 */
  private static GAIJI_END: string = String.fromCharCode(0xe757)

  /** 読込むプロパティファイル名 */
  private static FILE_NAME = 'SMSCheckField.properties'

  //2012/03/21 Add start
  /** JIS2004追加文字をチェックするための正規表現 */
  static JIS2004_CHK_PATTERN_NUM = Pattern.compile('.*&#[0-9]{3,6};.*')

  /** JIS2004追加文字をチェックするための正規表現 */
  static JIS2004_CHK_PATTERN_CHAR = Pattern.compile('.*&[A-Za-z0-9]{2,6};.*')
  //2012/03/21 Add end

  /**
   * コンストラクタです。（外部からは生成できません）
   */
  private constructor() {
    super()
    // プロパティファイルを読込みます
    super.load()
    SMSCheckField.DISABLECHARS =
      this.getProperty().getString('DISABLECHARS1', '') +
      this.getProperty().getString('DISABLECHARS2', '') +
      this.getProperty().getString('DISABLECHARS3', '') +
      this.getProperty().getString('DISABLECHARS4', '') +
      this.getProperty().getString('DISABLECHARS5', '') +
      this.getProperty().getString('DISABLECHARS6', '')
    SMSCheckField.REPLACECHAR = this.getProperty()
      .getString('REPLACE_CHAR', '')
      .charAt(0)
  }

  /**
   * ファイル名を通知します。
   * @return String ファイル名
   */
  getFileName(): string {
    return SMSCheckField.FILE_NAME
  }

  /** このクラスのインスタンス(singletonパターン仕様) */
  private static ins: SMSCheckField = new SMSCheckField()

  /**
   * インスタンス取得メソッドです。
   */
  static getInstance(): SMSCheckField {
    return this.ins
  }

  /**
   * 文字列に禁止文字が含まれているかを通知します。
   * @param inStr String 走査を行う文字列
   * @return boolean 禁止文字が含まれている場合はtrue,含まれていない場合はfalse
   */
  static hasDisableChars(inStr: string): boolean {
    return this.indexofDisableChar(inStr, 0) == -1 ? false : true
  }

  /**
   * 文字列内の禁止文字を置換します。
   * @param inStr String 走査を行う文字列
   * @return String 禁止文字置換後の文字列
   */
  static replaceChar(inStr: string): string {
    // 禁止文字を置換しない場合は、文字列をそのまま返却
    if (!this.getInstance().getProperty().getBoolean('REPLACE', true))
      return inStr

    let pos: number = 0
    let outStr: StringBuffer = new StringBuffer(inStr)
    while (pos != -1) {
      pos = this.indexofDisableChar(outStr.toString(), pos)
      if (pos != -1) {
        this.strBufReplace(outStr, inStr.charAt(pos), SMSCheckField.REPLACECHAR)
      }
    }

    return outStr.toString()
  }

  /**
   * 文字列バッファに現れる文字を、指定された置換文字に置換します。<br>
   * @param buffer StringBuffer 文字列バッファ
   * @param fromChar char 文字列バッファ
   * @param toChar char 置換文字
   */
  static strBufReplace(buffer: StringBuffer, fromChar: string, toChar: string) {
    let len: number = buffer.length()
    for (let i = 0; i < len; ++i) {
      if (buffer.charAt(i) == fromChar) {
        buffer.setCharAt(i, toChar)
      }
    }
  }

  static indexofDisableChar(inStr: string): number
  static indexofDisableChar(inStr: string, pos: number): number
  static indexofDisableChar(...params: any[]) {
    if (params.length == 1) {
      return this.__indexofDisableChar(params[0])
    } else {
      return this.__indexofDisableCharWithPos(params[0], params[1])
    }
  }

  /**
   * 文字列内の禁止文字の位置を通知します。
   * @param inStr String 走査を行う文字列
   * @return int 禁止文字が出現した位置、出現しない場合は-1
   */
  static __indexofDisableChar(inStr: string): number {
    return this.indexofDisableChar(inStr, 0)
  }

  /**
   * 文字列内の禁止文字の位置を通知します。
   * @param inStr String 走査を行う文字列
   * @param pos int 走査を行う文字列の開始位置
   * @return int 禁止文字が出現した位置、出現しない場合は-1
   */
  static __indexofDisableCharWithPos(inStr: string, pos: number): number {
    // チェック対象の文字列がnullまたは、空文字の場合は、禁止文字がないと判断します。
    if (inStr == null || inStr.equals('')) {
      return -1
    }

    // チェック開始位置のチェック
    let inStrLen: number = inStr.length
    if (pos >= inStrLen) {
      return -1
    }

    // 指定された走査位置からチェック対象の文字列長分、チェックを行います。
    for (let len = pos; len < inStrLen; len++) {
      let ch: string = inStr.charAt(len)

      // 外字の場合は、禁止文字と判断します。
      if (SMSCheckField.GAIJI_START <= ch && ch <= SMSCheckField.GAIJI_END) {
        return len // 外字の位置を通知します
      }

      // 禁止文字の文字列長分、チェックを行います。
      for (let cnt = 0; cnt < SMSCheckField.DISABLECHARS.length; cnt++) {
        if (ch == SMSCheckField.DISABLECHARS.charAt(cnt)) {
          return len // 禁止文字の位置を通知します
        }
      }
    }
    return -1
  }

  static checkField(fieldType: string, inStr: string): boolean
  static checkField(
    param: string,
    type: string,
    messageCodeInError: string,
    messageDetailInError: string[],
  ): void
  static checkField(...params: any[]) {
    if (params.length == 2) {
      return this.__checkField(params[0], params[1])
    } else if (params.length == 4) {
      return this.__checkFieldWithMessage(
        params[0],
        params[1],
        params[2],
        params[3],
      )
    } else {
      throw new Error('Illegal arguments')
    }
  }

  /**
   * 正規表現を利用して文字列のチェックを行います。
   * @param fieldType
   * @param inStr
   * @param boolean チェック結果 true:正常、false：異常
   */
  static __checkField(fieldType: string, inStr: string): boolean {
    // 2007/06/06 Add start
    // チェック対象文字列がnullの場合、falseを返却
    if (inStr == null) {
      return false
    }
    // 2007/06/06 Add end

    //2012/03/21 Add start
    //フリーチェック、全角チェック、禁則文字チェックの場合、
    //JIS2004追加文字チェックを行う。
    if (
      (SMSCheckField.FIELD_F.equals(fieldType) ||
        SMSCheckField.FIELD_Z.equals(fieldType) ||
        SMSCheckField.FIELD_DISABLE.equals(fieldType)) &&
      //2018/06/05 Delete start
      //  && !checkJis2004(inStr)){
      //2018/06/05 Delete end

      //2018/06/05 Add start
      (!this.checkJis2004(inStr) ||
        IVSDetector.NO_IVS_CHARACTERS != IVSDetector.containsIVS(inStr))
    ) {
      //2018/06/05 Add end

      return false
    }
    //2012/03/21 Add end

    // プロパティから文字種のチェックパターンを取得
    let ptStr: string = this.getInstance()
      .getProperty()
      .getString(fieldType, null!)
    if (ptStr == null) {
      return true
    }

    let pt: Pattern = Pattern.compile(ptStr)

    let inStrWrk: string = inStr
    let mt: Matcher = pt.matcher(inStrWrk)
    return mt.matches()
  }

  /**
   * 汎用入力値チェックを行う、アダプタメソッドです。
   * @param param 入力パラメータ
   * @param type チェックタイプ(SMSCheckField.FIELD_Aなどの定数です)
   * @param messageCodeInError エラー発生時のエラーコード
   * @param messageDetailInError エラー発生時のエラーメッセージへのパラメータ
   * @throws SMSCheckException チェック例外が発生した場合
   */
  static __checkFieldWithMessage(
    param: string,
    type: string,
    messageCodeInError: string,
    messageDetailInError: string[],
  ) {
    //20050324 日付妥当性チェック
    if (SMSCheckField.FIELD_D.equals(type)) {
      SMSDateStringUtil.checkExistDay(
        param,
        messageCodeInError,
        messageDetailInError,
      )
    } else if (SMSCheckField.checkField(type, param) == false) {
      throw new SMSCheckException(messageCodeInError, messageDetailInError)
    }
  }

  /**
   * 文字列の領域長をチェックします。
   * 長さは文字列内の 16 ビット Unicode 文字の数で比較します。
   * @param inStr 文字列
   * @param len チェックするサイズ
   * @return 文字列のサイズとlenが一致した場合true、それ以外の場合falseです。
   * inStrがnullの場合、必ずfalseが返されます。
   */
  static checkLength(inStr: string, len: number): boolean {
    if (inStr != null) {
      let length: number = inStr.length
      return length == len
    } else {
      return false
    }
  }

  /**
   * 必須チェックを行う、アダプタメソッドです。
   * @param param 入力パラメータ
   * @param messageCodeInError エラー発生時のエラーコード
   * @param messageDetailInError エラー発生時のエラーメッセージへのパラメータ
   * @throws SMSCheckException チェック例外が発生した場合
   */
  static checkNull(
    param: string,
    messageCodeInError: string,
    messageDetailInError: string[],
  ) {
    if (param == null || ''.equals(param.trim())) {
      throw new SMSCheckException(messageCodeInError, messageDetailInError)
    }
  }

  /**
   * フル桁チェックを行う、アダプタメソッドです。
   * @param param 入力パラメータ
   * @param length 長さ
   * @param messageCodeInError エラー発生時のエラーコード
   * @param messageDetailInError エラー発生時のエラーメッセージへのパラメータ
   * @throws SMSCheckException チェック例外が発生した場合
   */
  static checkFullLength(
    param: string,
    length: number,
    messageCodeInError: string,
    messageDetailInError: string[],
  ) {
    if (SMSCheckField.checkLength(param, length) == false) {
      throw new SMSCheckException(messageCodeInError, messageDetailInError)
    }
  }

  /**
   * 最大桁数チェックを行う、アダプタメソッドです。
   * @param param 入力パラメータ
   * @param maxlength 最大桁数
   * @param messageCodeInError エラー発生時のエラーコード
   * @param messageDetailInError エラー発生時のエラーメッセージへのパラメータ
   * @throws SMSCheckException チェック例外が発生した場合
   */
  static checkMaxLength(
    param: string,
    maxlength: number,
    messageCodeInError: string,
    messageDetailInError: string[],
  ) {
    if (param.length > maxlength) {
      throw new SMSCheckException(messageCodeInError, messageDetailInError)
    }
  }

  /**
   * 有効な文字列(nullではなく、空文字列でない)かどうかをチェックします。
   * @param param 文字列
   * @return 指定された文字列がnullまたは空文字列の場合は、false。それ以外の場合、true
   */
  static isValidString(param: string): boolean {
    if (param == null || ''.equals(param.trim())) {
      return false
    } else {
      return true
    }
  }

  //2012/03/21 Add start
  /**
   * JIS2004の追加文字が含まれているかどうかをチェックします。
   * @param value 文字列
   * @return 指定された文字列にJIS2004追加文字が含まれている場合は、false。それ以外の場合、true。
   */
  static checkJis2004(value: string): boolean {
    let encodedText: string = ''
    try {
      // FIXME: why need use same encoding?
      // encodedText = new String(value.getBytes("Windows-31J"),"Windows-31J");
      encodedText = value.slice()
    } catch (uee: any) {
      return false
    }

    if (!value.equals(encodedText)) {
      return false
    } else {
      return true
    }
  }
  //2012/03/21 Add end

  _getName(): string {
    return 'SMSCheckField'
  }

  static _getName(): string {
    return 'SMSCheckField'
  }

  _getType() {
    return SMSCheckField as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSCheckField'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSCheckField'
  }
}
