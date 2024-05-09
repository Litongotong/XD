/******************************************************************************
 * sms.sol.sys.SMSLoginInfoImpl
 *
 * プログラム名     : sms.sol.sys.SMSLoginInfoImpl
 * 担当者           : itac）郭澤宇
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/03 | itac）郭澤宇  | SMSLoginInfoImpl を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 *
 */
import { HashMap } from '@/lib/native/util/HashMap'
import { SMSLoginInfo } from './SMSLoginInfo'
import type { byte } from '@/lib/native/lang/byte'
import { Throwable } from '@/lib/native/lang/Throwable'

/**
 * 共通情報保持オブジェクトクラスです。
 * @author aoki
 */
export class SMSLoginInfoImpl extends SMSLoginInfo {
  //	//テスト用に追加
  //	public	static final long serialVersionUID = 42L;

  /** ユーザ名（苗字） */
  private nmUserMyoji: string = ''
  /** ユーザ名（名前） */
  private nmUserNamae: string = ''
  /** ユーザ名（カナ） */
  private nmUserKana: string = ''
  /** 従業員コード */
  private cdJugyoin: string = ''
  /** 会社コード */
  private cdKaisha: string = ''
  /** 会社名 */
  private nmKaisha: string = ''
  /** 生産管理共通 */
  private ifYPM: HashMap = null!
  /** 損益管理組織コード（レベル3） */
  private cdSonekiKanriSoshiki3: string = ''
  /** 損益管理組織コード（レベル4） */
  private cdSonekiKanriSoshiki4: string = ''
  /** 役割区分 */
  private stYakuwari: string = ''
  /** 自ホスト名 */
  private nmHost: string = ''
  /** クライアントIPアドレス */
  private nmClientIP: string = ''
  /** ログイン日時 */
  private tmLogin: string = ''
  /** プログラムID */
  private cdProgram: string = ''
  /** 画面ID */
  private cdGamen: string = ''
  /** 画面名 */
  private nmGamen: string = ''
  /** 最大検索件数 */
  private qtSaidaiKensaku: string = ''
  /** 最大表示件数 */
  private qtSaidaiHyouji: string = ''
  /** 表示済位置 */
  private qtHyoujiZumi: string = ''
  /** 検索数 */
  private qtKensaku: string = ''
  /** 検索方向区分 */
  private stKensakuHoukou: string = ''
  /** 前頁区分 */
  private stZenPage: boolean = null!
  /** 次頁区分 */
  private stJiPage: boolean = null!
  /** 表示頁 */
  private qtHyoujiPage: string = ''
  /** 頁数 */
  private qtPage: string = ''
  /** ディレクトリ区分 */
  private stDirectory: string = ''
  /** ファイル名 */
  private nmFile: string = ''
  /** インラインフラグ */
  private fgInline: string = ''
  /** ファイルデータ */
  private file: byte[] = null!
  /** エラー種別 */
  private stError: string = ''
  /** エラー発生項目ID */
  private cdErrorKoumoku: string = ''
  /** エラー発生レコード位置 */
  private qtErrorRecordPosition: string = ''
  /** エラー発生列項目名 */
  private nmErrorColumn: string = ''
  /** エラーオブジェクト */
  private exErrorObject: Throwable = null!
  /** メッセージID */
  private cdMessage: string = ''
  /** メッセージ置換文字 */
  private nmMessageChikan: string[] = null!
  /** ポップアップフラグ */
  private fgPopup: boolean = true
  /** 更新日時 */
  private tmKoshin: string = ''
  /** 運用日時 */
  private dtUnyo: string = ''
  /** 呼び出しクラス名 */
  private nmClass: string = ''
  /** 呼び出しメソッド名 */
  private nmMethod: string = ''
  // 2006/11/28 Add start
  /** サーバ名 */
  private nmServer: string = ''
  /** サーバIPアドレス */
  private nmServerIP: string = ''
  // 2006/11/28 Add end

  /**
   * Returns the cdErrorKoumoku.
   * @return String
   */
  public getCdErrorKoumoku(): string {
    return this.cdErrorKoumoku
  }

  /**
   * Returns the cdGamen.
   * @return String
   */
  public getCdGamen(): string {
    return this.cdGamen
  }

  /**
   * Returns the cdJugyoin.
   * @return String
   */
  public getCdJugyoin(): string {
    return this.cdJugyoin
  }

  /**
   * Returns the cdKaisha.
   * @return String
   */
  public getCdKaisha(): string {
    return this.cdKaisha
  }

  /**
   * Returns the cdMessage.
   * @return String
   */
  public getCdMessage(): string {
    return this.cdMessage
  }

  /**
   * Returns the cdSonekiKanriSoshoki.
   * @return String
   */
  public getCdSonekiKanriSoshiki3(): string {
    return this.cdSonekiKanriSoshiki3
  }

  /**
   * Returns the cdSonekiKanriSoshoki.
   * @return String
   */
  public getCdSonekiKanriSoshiki4(): string {
    return this.cdSonekiKanriSoshiki4
  }

  /**
   * Returns the exErrorObject.
   * @return Throwable
   */
  public getExErrorObject(): Throwable {
    return this.exErrorObject
  }

  /**
   * Returns the fgInline.
   * @return String
   */
  public getFgInline(): string {
    return this.fgInline
  }

  /**
   * Returns the qtHyoujiZumi.
   * @return String
   */
  public getQtHyoujiZumi(): string {
    return this.qtHyoujiZumi
  }

  /**
   * Returns the nmClientIP.
   * @return String
   */
  public getNmClientIP(): string {
    return this.nmClientIP
  }

  /**
   * Returns the nmFile.
   * @return String
   */
  public getNmFile(): string {
    return this.nmFile
  }

  /**
   * Returns the nmGamen.
   * @return String
   */
  public getNmGamen(): string {
    return this.nmGamen
  }

  /**
   * Returns the nmHost.
   * @return String
   */
  public getNmHost(): string {
    return this.nmHost
  }

  /**
   * Returns the nmKaisha.
   * @return String
   */
  public getNmKaisha(): string {
    return this.nmKaisha
  }

  /**
   * Returns the nmMessageChikan.
   * @return String
   */
  public getNmMessageChikan(): string[] {
    return this.nmMessageChikan
  }

  /**
   * Returns the nmUserKana.
   * @return String
   */
  public getNmUserKana(): string {
    return this.nmUserKana
  }

  /**
   * Returns the nmUserMyoji.
   * @return String
   */
  public getNmUserMyoji(): string {
    return this.nmUserMyoji
  }

  /**
   * Returns the nmUserNamae.
   * @return String
   */
  public getNmUserNamae(): string {
    return this.nmUserNamae
  }

  /**
   * Returns the qtSaidaiHyouji.
   * @return String
   */
  public getQtSaidaiHyouji(): string {
    return this.qtSaidaiHyouji
  }

  /**
   * Returns the stDirectory.
   * @return String
   */
  public getStDirectory(): string {
    return this.stDirectory
  }

  /**
   * Returns the stError.
   * @return String
   */
  public getStError(): string {
    return this.stError
  }

  /**
   * Returns the stKensakuHoukou.
   * @return String
   */
  public getStKensakuHoukou(): string {
    return this.stKensakuHoukou
  }

  /**
   * Returns the stYakuwari.
   * @return String
   */
  public getStYakuwari(): string {
    return this.stYakuwari
  }

  /**
   * Returns the tmLogin.
   * @return String
   */
  public getTmLogin(): string {
    return this.tmLogin
  }

  /**
   * Sets the cdErrorKoumoku.
   * @param cdErrorKoumoku The cdErrorKoumoku to set
   */
  public setCdErrorKoumoku(cdErrorKoumoku: string) {
    this.cdErrorKoumoku = cdErrorKoumoku
  }

  /**
   * Sets the cdGamen.
   * @param cdGamen The cdGamen to set
   */
  public setCdGamen(cdGamen: string) {
    this.cdGamen = cdGamen
  }

  /**
   * Sets the cdJugyoin.
   * @param cdJugyoin The cdJugyoin to set
   */
  public setCdJugyoin(cdJugyoin: string) {
    this.cdJugyoin = cdJugyoin
  }

  /**
   * Sets the cdKaisha.
   * @param cdKaisha The cdKaisha to set
   */
  public setCdKaisha(cdKaisha: string) {
    this.cdKaisha = cdKaisha
  }

  /**
   * Sets the cdMessage.
   * @param cdMessage The cdMessage to set
   */
  public setCdMessage(cdMessage: string) {
    this.cdMessage = cdMessage
  }

  /**
   * Sets the cdSonekiKanriSoshoki.
   * @param cdSonekiKanriSoshoki The cdSonekiKanriSoshoki to set
   */
  public setCdSonekiKanriSoshiki3(cdSonekiKanriSoshiki3: string) {
    this.cdSonekiKanriSoshiki3 = cdSonekiKanriSoshiki3
  }

  /**
   * Sets the cdSonekiKanriSoshoki.
   * @param cdSonekiKanriSoshoki The cdSonekiKanriSoshoki to set
   */
  public setCdSonekiKanriSoshiki4(cdSonekiKanriSoshiki4: string) {
    this.cdSonekiKanriSoshiki4 = cdSonekiKanriSoshiki4
  }

  /**
   * Sets the exErrorObject.
   * @param exErrorObject The exErrorObject to set
   */
  public setExErrorObject(exErrorObject: Throwable) {
    this.exErrorObject = exErrorObject
  }

  /**
   * Sets the fgInline.
   * @param fgInline The fgInline to set
   */
  public setFgInline(fgInline: string) {
    this.fgInline = fgInline
  }

  /**
   * Sets the qtHyoujiZumi.
   * @param qtHyoujiZumi The qtHyoujiZumi to set
   */
  public setQtHyoujiZumi(qtHyoujiZumi: string) {
    this.qtHyoujiZumi = qtHyoujiZumi
  }

  /**
   * Sets the nmClientIP.
   * @param nmClientIP The nmClientIP to set
   */
  public setNmClientIP(nmClientIP: string) {
    this.nmClientIP = nmClientIP
  }

  /**
   * Sets the nmFile.
   * @param nmFile The nmFile to set
   */
  public setNmFile(nmFile: string) {
    this.nmFile = nmFile
  }

  /**
   * Sets the nmGamen.
   * @param nmGamen The nmGamen to set
   */
  public setNmGamen(nmGamen: string) {
    this.nmGamen = nmGamen
  }

  /**
   * Sets the nmHost.
   * @param nmHost The nmHost to set
   */
  public setNmHost(nmHost: string) {
    this.nmHost = nmHost
  }

  /**
   * Sets the nmKaisha.
   * @param nmKaisha The nmKaisha to set
   */
  public setNmKaisha(nmKaisha: string) {
    this.nmKaisha = nmKaisha
  }

  /**
   * Sets the nmMessageChikan.
   * @param nmMessageChikan The nmMessageChikan to set
   */
  public setNmMessageChikan(nmMessageChikan: string[]) {
    this.nmMessageChikan = nmMessageChikan
  }

  /**
   * Sets the nmUserKana.
   * @param nmUserKana The nmUserKana to set
   */
  public setNmUserKana(nmUserKana: string) {
    this.nmUserKana = nmUserKana
  }

  /**
   * Sets the nmUserMyoji.
   * @param nmUserMyoji The nmUserMyoji to set
   */
  public setNmUserMyoji(nmUserMyoji: string) {
    this.nmUserMyoji = nmUserMyoji
  }

  /**
   * Sets the nmUserNamae.
   * @param nmUserNamae The nmUserNamae to set
   */
  public setNmUserNamae(nmUserNamae: string) {
    this.nmUserNamae = nmUserNamae
  }

  /**
   * Sets the qtSaidaiHyouji.
   * @param qtSaidaiHyouji The qtSaidaiHyouji to set
   */
  public setQtSaidaiHyouji(qtSaidaiHyouji: string) {
    this.qtSaidaiHyouji = qtSaidaiHyouji
  }

  /**
   * Sets the stDirectory.
   * @param stDirectory The stDirectory to set
   */
  public setStDirectory(stDirectory: string) {
    this.stDirectory = stDirectory
  }

  /**
   * Sets the stError.
   * @param stError The stError to set
   */
  public setStError(stError: string) {
    this.stError = stError
  }

  /**
   * Sets the stKensakuHoukou.
   * @param stKensakuHoukou The stKensakuHoukou to set
   */
  public setStKensakuHoukou(stKensakuHoukou: string) {
    this.stKensakuHoukou = stKensakuHoukou
  }

  /**
   * Sets the stYakuwari.
   * @param stYakuwari The stYakuwari to set
   */
  public setStYakuwari(stYakuwari: string) {
    this.stYakuwari = stYakuwari
  }

  /**
   * Sets the tmLogin.
   * @param tmLogin The tmLogin to set
   */
  public setTmLogin(tmLogin: string) {
    this.tmLogin = tmLogin
  }

  /**
   * Returns the nmClass.
   * @return String
   */
  public getNmClass(): string {
    return this.nmClass
  }

  /**
   * Returns the nmMethod.
   * @return String
   */
  public getNmMethod(): string {
    return this.nmMethod
  }

  /**
   * Sets the nmClass.
   * @param nmClass The nmClass to set
   */
  public setNmClass(nmClass: string) {
    this.nmClass = nmClass
  }

  /**
   * Sets the nmMethod.
   * @param nmMethod The nmMethod to set
   */
  public setNmMethod(nmMethod: string) {
    this.nmMethod = nmMethod
  }

  /**
   * Returns the file.
   * @return byte[]
   */
  public getFile(): byte[] {
    return this.file
  }

  /**
   * Sets the file.
   * @param file The file to set
   */
  public setFile(file: byte[]) {
    this.file = file
  }

  /**
   * Returns the ifYPM.
   * @return HashMap
   */
  public getIfYPM(): HashMap {
    return this.ifYPM
  }

  /**
   * Returns the nmErrorColumn.
   * @return String
   */
  public getNmErrorColumn(): string {
    return this.nmErrorColumn
  }

  /**
   * Returns the qtErrorRecordPosition.
   * @return String
   */
  public getQtErrorRecordPosition(): string {
    return this.qtErrorRecordPosition
  }

  /**
   * Returns the qtKensaku.
   * @return String
   */
  public getQtKensaku(): string {
    return this.qtKensaku
  }

  /**
   * Returns the tmKoshin.
   * @return String
   */
  public getTmKoshin(): string {
    return this.tmKoshin
  }

  /**
   * Sets the ifYPM.
   * @param ifYPM The ifYPM to set
   */
  public setIfYPM(ifYPM: HashMap) {
    this.ifYPM = ifYPM
  }

  /**
   * Sets the nmErrorColumn.
   * @param nmErrorColumn The nmErrorColumn to set
   */
  public setNmErrorColumn(nmErrorColumn: string) {
    this.nmErrorColumn = nmErrorColumn
  }

  /**
   * Sets the qtErrorRecordPosition.
   * @param qtErrorRecordPosition The qtErrorRecordPosition to set
   */
  public setQtErrorRecordPosition(qtErrorRecordPosition: string) {
    this.qtErrorRecordPosition = qtErrorRecordPosition
  }

  /**
   * Sets the qtKensaku.
   * @param qtKensaku The qtKensaku to set
   */
  public setQtKensaku(qtKensaku: string) {
    this.qtKensaku = qtKensaku
  }

  /**
   * Sets the tmKoshin.
   * @param tmKoshin The tmKoshin to set
   */
  public setTmKoshin(tmKoshin: string) {
    this.tmKoshin = tmKoshin
  }

  /**
   * Returns the stJiPage.
   * @return Boolean
   */
  public getStJiPage(): boolean {
    return this.stJiPage
  }

  /**
   * Returns the stZenPage.
   * @return Boolean
   */
  public getStZenPage(): boolean {
    return this.stZenPage
  }

  /**
   * Sets the stJiPage.
   * @param stJiPage The stJiPage to set
   */
  public setStJiPage(stJiPage: boolean) {
    this.stJiPage = stJiPage
  }

  /**
   * Sets the stZenPage.
   * @param stZenPage The stZenPage to set
   */
  public setStZenPage(stZenPage: boolean) {
    this.stZenPage = stZenPage
  }

  /**
   * Returns the fgPopup.
   * @return Boolean
   */
  public getFgPopup(): boolean {
    return this.fgPopup
  }

  /**
   * Sets the fgPopup.
   * @param fgPopup The fgPopup to set
   */
  public setFgPopup(fgPopup: boolean) {
    this.fgPopup = fgPopup
  }

  /**
   * Returns the cdProgram.
   * @return String
   */
  public getCdProgram(): string {
    return this.cdProgram
  }

  /**
   * Returns the qtSaidaiKensaku.
   * @return String
   */
  public getQtSaidaiKensaku(): string {
    return this.qtSaidaiKensaku
  }

  /**
   * Sets the cdProgram.
   * @param cdProgram The cdProgram to set
   */
  public setCdProgram(cdProgram: string) {
    this.cdProgram = cdProgram
  }

  /**
   * Sets the qtSaidaiKensaku.
   * @param qtSaidaiKensaku The qtSaidaiKensaku to set
   */
  public setQtSaidaiKensaku(qtSaidaiKensaku: string) {
    this.qtSaidaiKensaku = qtSaidaiKensaku
  }

  /**
   * Returns the dtUnyo.
   * @return String
   */
  public getDtUnyo(): string {
    return this.dtUnyo
  }

  /**
   * Returns the qtHyoujiPage.
   * @return String
   */
  public getQtHyoujiPage(): string {
    return this.qtHyoujiPage
  }

  /**
   * Returns the qtPage.
   * @return String
   */
  public getQtPage(): string {
    return this.qtPage
  }

  /**
   * Sets the dtUnyo.
   * @param dtUnyo The dtUnyo to set
   */
  public setDtUnyo(dtUnyo: string) {
    this.dtUnyo = dtUnyo
  }

  /**
   * Sets the qtHyoujiPage.
   * @param qtHyoujiPage The qtHyoujiPage to set
   */
  public setQtHyoujiPage(qtHyoujiPage: string) {
    this.qtHyoujiPage = qtHyoujiPage
  }

  /**
   * Sets the qtPage.
   * @param qtPage The qtPage to set
   */
  public setQtPage(qtPage: string) {
    this.qtPage = qtPage
  }

  // 2006/11/28 Add start
  /**
   * Returns the nmServer.
   * @return String
   */
  public getNmServer(): string {
    return this.nmServer
  }

  /**
   * Sets the nmServer.
   * @param nmServer The nmServer to set
   */
  public setNmServer(nmServer: string) {
    this.nmServer = nmServer
  }

  /**
   * Returns the nmServerIP.
   * @return String
   */
  public getNmServerIP(): string {
    return this.nmServerIP
  }

  /**
   * Sets the nmServerIP.
   * @param nmServerIP The nmServerIP to set
   */
  public setNmServerIP(nmServerIP: string) {
    this.nmServerIP = nmServerIP
  }
  // 2006/11/28 Add end

  /**
   * クライアントに返すメッセージより、ファイル情報を削除。<BR>
   * セッション上のファイル情報まで消さないように注意。<BR>
   */
  public removeFileInfo() {
    this.setStDirectory('')
    this.setNmFile('')
    this.setFgInline('')
    this.setFile(null!)
  }

  /**
   * このオブジェクトのディープコピーを返却します。
   */
  public clone(): any {
    let retLoginInfo: SMSLoginInfoImpl = new SMSLoginInfoImpl()

    //※このオブジェクトにメンバを追加した場合は，このクローンメソッドもメンテしてください。
    retLoginInfo.setUserId(String(this.getUserId())) //ユーザID
    retLoginInfo.setUserName(String(this.getUserName())) //ユーザ名
    retLoginInfo.setNmUserMyoji(String(this.nmUserMyoji)) //ユーザ名（苗字）
    retLoginInfo.setNmUserNamae(String(this.nmUserNamae)) //ユーザ名（名前）
    retLoginInfo.setNmUserKana(String(this.nmUserKana)) //ユーザ名（カナ）
    if (this.cdJugyoin != null) {
      retLoginInfo.setCdJugyoin(String(this.cdJugyoin)) //従業員コード
    }
    retLoginInfo.setCdKaisha(String(this.cdKaisha)) //会社コード
    retLoginInfo.setNmKaisha(String(this.nmKaisha)) //会社名
    retLoginInfo.setBushoName(String(this.getBushoName())) //部署名
    if (this.getIfYPM() != null) {
      retLoginInfo.setIfYPM(new HashMap(this.getIfYPM())) //生産管理共通
    }
    retLoginInfo.setCdSonekiKanriSoshiki3(String(this.cdSonekiKanriSoshiki3)) //損益管理組織コード（レベル3）
    retLoginInfo.setCdSonekiKanriSoshiki4(String(this.cdSonekiKanriSoshiki4)) //損益管理組織コード（レベル4）
    retLoginInfo.setStYakuwari(String(this.stYakuwari)) //役割区分
    retLoginInfo.setNmHost(String(this.nmHost)) //自ホスト名
    retLoginInfo.setNmClientIP(String(this.nmClientIP)) //クライアントIPアドレス
    retLoginInfo.setTmLogin(String(this.tmLogin)) //ログイン日時
    retLoginInfo.setCdProgram(String(this.cdProgram)) //プログラムID
    retLoginInfo.setCdGamen(String(this.cdGamen)) //画面ID
    retLoginInfo.setNmGamen(String(this.nmGamen)) //画面名
    retLoginInfo.setQtSaidaiKensaku(String(this.qtSaidaiKensaku)) //最大検索件数
    retLoginInfo.setQtSaidaiHyouji(String(this.qtSaidaiHyouji)) //最大表示件数
    retLoginInfo.setQtHyoujiZumi(String(this.qtHyoujiZumi)) //表示済位置
    retLoginInfo.setQtKensaku(String(this.qtKensaku)) //検索数
    retLoginInfo.setStKensakuHoukou(String(this.stKensakuHoukou)) //検索方向区分
    if (this.stZenPage != null) {
      retLoginInfo.setStZenPage(Boolean(this.stZenPage)) //前頁区分
    }
    if (this.stJiPage != null) {
      retLoginInfo.setStJiPage(Boolean(this.stJiPage)) //次頁区分
    }
    retLoginInfo.setQtHyoujiPage(String(this.qtHyoujiPage)) //表示頁
    retLoginInfo.setQtPage(String(this.qtPage)) //頁数
    retLoginInfo.setStDirectory(String(this.stDirectory)) //ディレクトリ区分
    retLoginInfo.setNmFile(String(this.nmFile)) //ファイル名
    retLoginInfo.setFgInline(String(this.fgInline)) //インラインフラグ
    if (this.file != null) {
      retLoginInfo.setFile(this.file.slice() as byte[]) //ファイルデータ
    }
    retLoginInfo.setStError(String(this.stError)) //エラー種別
    retLoginInfo.setCdErrorKoumoku(String(this.cdErrorKoumoku)) //エラー項目ID
    retLoginInfo.setQtErrorRecordPosition(String(this.qtErrorRecordPosition)) //エラー発生レコード位置
    retLoginInfo.setNmErrorColumn(String(this.nmErrorColumn)) //エラー発生列項目名
    if (this.exErrorObject != null) {
      retLoginInfo.setExErrorObject(new Throwable(this.exErrorObject)) //エラーオブジェクト
    }
    retLoginInfo.setCdMessage(String(this.cdMessage)) //メッセージID
    if (this.nmMessageChikan != null) {
      retLoginInfo.setNmMessageChikan(this.nmMessageChikan.slice() as string[]) //メッセージ置換文字
    }
    retLoginInfo.setFgPopup(Boolean(this.fgPopup)) //ポップアップフラグ
    retLoginInfo.setTmKoshin(String(this.tmKoshin)) //更新日時
    retLoginInfo.setDtUnyo(String(this.dtUnyo)) //運用日
    retLoginInfo.setNmClass(String(this.nmClass)) //呼び出しクラス名
    retLoginInfo.setNmMethod(String(this.nmMethod)) //呼び出しメソッド名

    // 2006/11/28 Add start
    retLoginInfo.setNmServer(String(this.nmServer)) //サーバ名
    retLoginInfo.setNmServerIP(String(this.nmServerIP)) //サーバIPアドレス
    // 2006/11/28 Add end

    return retLoginInfo
  }

  _getName(): string {
    return 'SMSLoginInfoImpl'
  }

  static _getName(): string {
    return 'SMSLoginInfoImpl'
  }

  _getType() {
    return SMSLoginInfoImpl as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSLoginInfoImpl'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSLoginInfoImpl'
  }
}
