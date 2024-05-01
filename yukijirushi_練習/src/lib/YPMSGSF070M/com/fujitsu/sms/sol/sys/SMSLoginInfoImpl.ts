/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { lib as SMSLoginInfoLib } from '@/lib/YPMSGSF070M/com/fujitsu/sms/sol/sys/SMSLoginInfo'

export namespace lib.com.fujitsu.sms.sol.sys {
  /**
   * <PRE>
   * 共通情報保持オブジェクトクラスです。
   * </PRE>
   * @author aoki
   * @class
   * @extends lib.com.fujitsu.sms.sol.sys.SMSLoginInfo
   */
  export class SMSLoginInfoImpl extends SMSLoginInfoLib.com.fujitsu.sms.sol.sys
    .SMSLoginInfo {
    /**
     * ユーザ名（苗字）
     */
    /*private*/ nmUserMyoji: string

    /**
     * ユーザ名（名前）
     */
    /*private*/ nmUserNamae: string

    /**
     * ユーザ名（カナ）
     */
    /*private*/ nmUserKana: string

    /**
     * 従業員コード
     */
    /*private*/ cdJugyoin: string

    /**
     * 会社コード
     */
    /*private*/ cdKaisha: string

    /**
     * 会社名
     */
    /*private*/ nmKaisha: string

    /**
     * 生産管理共通
     */
    /*private*/ ifYPM: any

    /**
     * 損益管理組織コード（レベル3）
     */
    /*private*/ cdSonekiKanriSoshiki3: string

    /**
     * 損益管理組織コード（レベル4）
     */
    /*private*/ cdSonekiKanriSoshiki4: string

    /**
     * 役割区分
     */
    /*private*/ stYakuwari: string

    /**
     * 自ホスト名
     */
    /*private*/ nmHost: string

    /**
     * クライアントIPアドレス
     */
    /*private*/ nmClientIP: string

    /**
     * ログイン日時
     */
    /*private*/ tmLogin: string

    /**
     * プログラムID
     */
    /*private*/ cdProgram: string

    /**
     * 画面ID
     */
    /*private*/ cdGamen: string

    /**
     * 画面名
     */
    /*private*/ nmGamen: string

    /**
     * 最大検索件数
     */
    /*private*/ qtSaidaiKensaku: string

    /**
     * 最大表示件数
     */
    /*private*/ qtSaidaiHyouji: string

    /**
     * 表示済位置
     */
    /*private*/ qtHyoujiZumi: string

    /**
     * 検索数
     */
    /*private*/ qtKensaku: string

    /**
     * 検索方向区分
     */
    /*private*/ stKensakuHoukou: string

    /**
     * 前頁区分
     */
    /*private*/ stZenPage: boolean

    /**
     * 次頁区分
     */
    /*private*/ stJiPage: boolean

    /**
     * 表示頁
     */
    /*private*/ qtHyoujiPage: string

    /**
     * 頁数
     */
    /*private*/ qtPage: string

    /**
     * ディレクトリ区分
     */
    /*private*/ stDirectory: string

    /**
     * ファイル名
     */
    /*private*/ nmFile: string

    /**
     * インラインフラグ
     */
    /*private*/ fgInline: string

    /**
     * ファイルデータ
     */
    /*private*/ file: number[]

    /**
     * エラー種別
     */
    /*private*/ stError: string

    /**
     * エラー発生項目ID
     */
    /*private*/ cdErrorKoumoku: string

    /**
     * エラー発生レコード位置
     */
    /*private*/ qtErrorRecordPosition: string

    /**
     * エラー発生列項目名
     */
    /*private*/ nmErrorColumn: string

    /**
     * エラーオブジェクト
     */
    /*private*/ exErrorObject: Error

    /**
     * メッセージID
     */
    /*private*/ cdMessage: string

    /**
     * メッセージ置換文字
     */
    /*private*/ nmMessageChikan: string[]

    /**
     * ポップアップフラグ
     */
    /*private*/ fgPopup: boolean

    /**
     * 更新日時
     */
    /*private*/ tmKoshin: string

    /**
     * 運用日時
     */
    /*private*/ dtUnyo: string

    /**
     * 呼び出しクラス名
     */
    /*private*/ nmClass: string

    /**
     * 呼び出しメソッド名
     */
    /*private*/ nmMethod: string

    /**
     * サーバ名
     */
    /*private*/ nmServer: string

    /**
     * サーバIPアドレス
     */
    /*private*/ nmServerIP: string

    /**
     * Returns the cdErrorKoumoku.
     * @return {string} String
     */
    public getCdErrorKoumoku(): string {
      return this.cdErrorKoumoku
    }

    /**
     * Returns the cdGamen.
     * @return {string} String
     */
    public getCdGamen(): string {
      return this.cdGamen
    }

    /**
     * Returns the cdJugyoin.
     * @return {string} String
     */
    public getCdJugyoin(): string {
      return this.cdJugyoin
    }

    /**
     * Returns the cdKaisha.
     * @return {string} String
     */
    public getCdKaisha(): string {
      return this.cdKaisha
    }

    /**
     * Returns the cdMessage.
     * @return {string} String
     */
    public getCdMessage(): string {
      return this.cdMessage
    }

    /**
     * Returns the cdSonekiKanriSoshoki.
     * @return {string} String
     */
    public getCdSonekiKanriSoshiki3(): string {
      return this.cdSonekiKanriSoshiki3
    }

    /**
     * Returns the cdSonekiKanriSoshoki.
     * @return {string} String
     */
    public getCdSonekiKanriSoshiki4(): string {
      return this.cdSonekiKanriSoshiki4
    }

    /**
     * Returns the exErrorObject.
     * @return {Error} Throwable
     */
    public getExErrorObject(): Error {
      return this.exErrorObject
    }

    /**
     * Returns the fgInline.
     * @return {string} String
     */
    public getFgInline(): string {
      return this.fgInline
    }

    /**
     * Returns the qtHyoujiZumi.
     * @return {string} String
     */
    public getQtHyoujiZumi(): string {
      return this.qtHyoujiZumi
    }

    /**
     * Returns the nmClientIP.
     * @return {string} String
     */
    public getNmClientIP(): string {
      return this.nmClientIP
    }

    /**
     * Returns the nmFile.
     * @return {string} String
     */
    public getNmFile(): string {
      return this.nmFile
    }

    /**
     * Returns the nmGamen.
     * @return {string} String
     */
    public getNmGamen(): string {
      return this.nmGamen
    }

    /**
     * Returns the nmHost.
     * @return {string} String
     */
    public getNmHost(): string {
      return this.nmHost
    }

    /**
     * Returns the nmKaisha.
     * @return {string} String
     */
    public getNmKaisha(): string {
      return this.nmKaisha
    }

    /**
     * Returns the nmMessageChikan.
     * @return {java.lang.String[]} String
     */
    public getNmMessageChikan(): string[] {
      return this.nmMessageChikan
    }

    /**
     * Returns the nmUserKana.
     * @return {string} String
     */
    public getNmUserKana(): string {
      return this.nmUserKana
    }

    /**
     * Returns the nmUserMyoji.
     * @return {string} String
     */
    public getNmUserMyoji(): string {
      return this.nmUserMyoji
    }

    /**
     * Returns the nmUserNamae.
     * @return {string} String
     */
    public getNmUserNamae(): string {
      return this.nmUserNamae
    }

    /**
     * Returns the qtSaidaiHyouji.
     * @return {string} String
     */
    public getQtSaidaiHyouji(): string {
      return this.qtSaidaiHyouji
    }

    /**
     * Returns the stDirectory.
     * @return {string} String
     */
    public getStDirectory(): string {
      return this.stDirectory
    }

    /**
     * Returns the stError.
     * @return {string} String
     */
    public getStError(): string {
      return this.stError
    }

    /**
     * Returns the stKensakuHoukou.
     * @return {string} String
     */
    public getStKensakuHoukou(): string {
      return this.stKensakuHoukou
    }

    /**
     * Returns the stYakuwari.
     * @return {string} String
     */
    public getStYakuwari(): string {
      return this.stYakuwari
    }

    /**
     * Returns the tmLogin.
     * @return {string} String
     */
    public getTmLogin(): string {
      return this.tmLogin
    }

    /**
     * Sets the cdErrorKoumoku.
     * @param {string} cdErrorKoumoku The cdErrorKoumoku to set
     */
    public setCdErrorKoumoku(cdErrorKoumoku: string) {
      this.cdErrorKoumoku = cdErrorKoumoku
    }

    /**
     * Sets the cdGamen.
     * @param {string} cdGamen The cdGamen to set
     */
    public setCdGamen(cdGamen: string) {
      this.cdGamen = cdGamen
    }

    /**
     * Sets the cdJugyoin.
     * @param {string} cdJugyoin The cdJugyoin to set
     */
    public setCdJugyoin(cdJugyoin: string) {
      this.cdJugyoin = cdJugyoin
    }

    /**
     * Sets the cdKaisha.
     * @param {string} cdKaisha The cdKaisha to set
     */
    public setCdKaisha(cdKaisha: string) {
      this.cdKaisha = cdKaisha
    }

    /**
     * Sets the cdMessage.
     * @param {string} cdMessage The cdMessage to set
     */
    public setCdMessage(cdMessage: string) {
      this.cdMessage = cdMessage
    }

    /**
     * Sets the cdSonekiKanriSoshoki.
     * @param cdSonekiKanriSoshoki The cdSonekiKanriSoshoki to set
     * @param {string} cdSonekiKanriSoshiki3
     */
    public setCdSonekiKanriSoshiki3(cdSonekiKanriSoshiki3: string) {
      this.cdSonekiKanriSoshiki3 = cdSonekiKanriSoshiki3
    }

    /**
     * Sets the cdSonekiKanriSoshoki.
     * @param cdSonekiKanriSoshoki The cdSonekiKanriSoshoki to set
     * @param {string} cdSonekiKanriSoshiki4
     */
    public setCdSonekiKanriSoshiki4(cdSonekiKanriSoshiki4: string) {
      this.cdSonekiKanriSoshiki4 = cdSonekiKanriSoshiki4
    }

    /**
     * Sets the exErrorObject.
     * @param {Error} exErrorObject The exErrorObject to set
     */
    public setExErrorObject(exErrorObject: Error) {
      this.exErrorObject = exErrorObject
    }

    /**
     * Sets the fgInline.
     * @param {string} fgInline The fgInline to set
     */
    public setFgInline(fgInline: string) {
      this.fgInline = fgInline
    }

    /**
     * Sets the qtHyoujiZumi.
     * @param {string} qtHyoujiZumi The qtHyoujiZumi to set
     */
    public setQtHyoujiZumi(qtHyoujiZumi: string) {
      this.qtHyoujiZumi = qtHyoujiZumi
    }

    /**
     * Sets the nmClientIP.
     * @param {string} nmClientIP The nmClientIP to set
     */
    public setNmClientIP(nmClientIP: string) {
      this.nmClientIP = nmClientIP
    }

    /**
     * Sets the nmFile.
     * @param {string} nmFile The nmFile to set
     */
    public setNmFile(nmFile: string) {
      this.nmFile = nmFile
    }

    /**
     * Sets the nmGamen.
     * @param {string} nmGamen The nmGamen to set
     */
    public setNmGamen(nmGamen: string) {
      this.nmGamen = nmGamen
    }

    /**
     * Sets the nmHost.
     * @param {string} nmHost The nmHost to set
     */
    public setNmHost(nmHost: string) {
      this.nmHost = nmHost
    }

    /**
     * Sets the nmKaisha.
     * @param {string} nmKaisha The nmKaisha to set
     */
    public setNmKaisha(nmKaisha: string) {
      this.nmKaisha = nmKaisha
    }

    /**
     * Sets the nmMessageChikan.
     * @param {java.lang.String[]} nmMessageChikan The nmMessageChikan to set
     */
    public setNmMessageChikan(nmMessageChikan: string[]) {
      this.nmMessageChikan = nmMessageChikan
    }

    /**
     * Sets the nmUserKana.
     * @param {string} nmUserKana The nmUserKana to set
     */
    public setNmUserKana(nmUserKana: string) {
      this.nmUserKana = nmUserKana
    }

    /**
     * Sets the nmUserMyoji.
     * @param {string} nmUserMyoji The nmUserMyoji to set
     */
    public setNmUserMyoji(nmUserMyoji: string) {
      this.nmUserMyoji = nmUserMyoji
    }

    /**
     * Sets the nmUserNamae.
     * @param {string} nmUserNamae The nmUserNamae to set
     */
    public setNmUserNamae(nmUserNamae: string) {
      this.nmUserNamae = nmUserNamae
    }

    /**
     * Sets the qtSaidaiHyouji.
     * @param {string} qtSaidaiHyouji The qtSaidaiHyouji to set
     */
    public setQtSaidaiHyouji(qtSaidaiHyouji: string) {
      this.qtSaidaiHyouji = qtSaidaiHyouji
    }

    /**
     * Sets the stDirectory.
     * @param {string} stDirectory The stDirectory to set
     */
    public setStDirectory(stDirectory: string) {
      this.stDirectory = stDirectory
    }

    /**
     * Sets the stError.
     * @param {string} stError The stError to set
     */
    public setStError(stError: string) {
      this.stError = stError
    }

    /**
     * Sets the stKensakuHoukou.
     * @param {string} stKensakuHoukou The stKensakuHoukou to set
     */
    public setStKensakuHoukou(stKensakuHoukou: string) {
      this.stKensakuHoukou = stKensakuHoukou
    }

    /**
     * Sets the stYakuwari.
     * @param {string} stYakuwari The stYakuwari to set
     */
    public setStYakuwari(stYakuwari: string) {
      this.stYakuwari = stYakuwari
    }

    /**
     * Sets the tmLogin.
     * @param {string} tmLogin The tmLogin to set
     */
    public setTmLogin(tmLogin: string) {
      this.tmLogin = tmLogin
    }

    /**
     * Returns the nmClass.
     * @return {string} String
     */
    public getNmClass(): string {
      return this.nmClass
    }

    /**
     * Returns the nmMethod.
     * @return {string} String
     */
    public getNmMethod(): string {
      return this.nmMethod
    }

    /**
     * Sets the nmClass.
     * @param {string} nmClass The nmClass to set
     */
    public setNmClass(nmClass: string) {
      this.nmClass = nmClass
    }

    /**
     * Sets the nmMethod.
     * @param {string} nmMethod The nmMethod to set
     */
    public setNmMethod(nmMethod: string) {
      this.nmMethod = nmMethod
    }

    /**
     * Returns the file.
     * @return {byte[]} byte[]
     */
    public getFile(): number[] {
      return this.file
    }

    /**
     * Sets the file.
     * @param {byte[]} file The file to set
     */
    public setFile(file: number[]) {
      this.file = file
    }

    /**
     * Returns the ifYPM.
     * @return {*} HashMap
     */
    public getIfYPM(): any {
      return this.ifYPM
    }

    /**
     * Returns the nmErrorColumn.
     * @return {string} String
     */
    public getNmErrorColumn(): string {
      return this.nmErrorColumn
    }

    /**
     * Returns the qtErrorRecordPosition.
     * @return {string} String
     */
    public getQtErrorRecordPosition(): string {
      return this.qtErrorRecordPosition
    }

    /**
     * Returns the qtKensaku.
     * @return {string} String
     */
    public getQtKensaku(): string {
      return this.qtKensaku
    }

    /**
     * Returns the tmKoshin.
     * @return {string} String
     */
    public getTmKoshin(): string {
      return this.tmKoshin
    }

    /**
     * Sets the ifYPM.
     * @param {*} ifYPM The ifYPM to set
     */
    public setIfYPM(ifYPM: any) {
      this.ifYPM = ifYPM
    }

    /**
     * Sets the nmErrorColumn.
     * @param {string} nmErrorColumn The nmErrorColumn to set
     */
    public setNmErrorColumn(nmErrorColumn: string) {
      this.nmErrorColumn = nmErrorColumn
    }

    /**
     * Sets the qtErrorRecordPosition.
     * @param {string} qtErrorRecordPosition The qtErrorRecordPosition to set
     */
    public setQtErrorRecordPosition(qtErrorRecordPosition: string) {
      this.qtErrorRecordPosition = qtErrorRecordPosition
    }

    /**
     * Sets the qtKensaku.
     * @param {string} qtKensaku The qtKensaku to set
     */
    public setQtKensaku(qtKensaku: string) {
      this.qtKensaku = qtKensaku
    }

    /**
     * Sets the tmKoshin.
     * @param {string} tmKoshin The tmKoshin to set
     */
    public setTmKoshin(tmKoshin: string) {
      this.tmKoshin = tmKoshin
    }

    /**
     * Returns the stJiPage.
     * @return {boolean} Boolean
     */
    public getStJiPage(): boolean {
      return this.stJiPage
    }

    /**
     * Returns the stZenPage.
     * @return {boolean} Boolean
     */
    public getStZenPage(): boolean {
      return this.stZenPage
    }

    /**
     * Sets the stJiPage.
     * @param {boolean} stJiPage The stJiPage to set
     */
    public setStJiPage(stJiPage: boolean) {
      this.stJiPage = stJiPage
    }

    /**
     * Sets the stZenPage.
     * @param {boolean} stZenPage The stZenPage to set
     */
    public setStZenPage(stZenPage: boolean) {
      this.stZenPage = stZenPage
    }

    /**
     * Returns the fgPopup.
     * @return {boolean} Boolean
     */
    public getFgPopup(): boolean {
      return this.fgPopup
    }

    /**
     * Sets the fgPopup.
     * @param {boolean} fgPopup The fgPopup to set
     */
    public setFgPopup(fgPopup: boolean) {
      this.fgPopup = fgPopup
    }

    /**
     * Returns the cdProgram.
     * @return {string} String
     */
    public getCdProgram(): string {
      return this.cdProgram
    }

    /**
     * Returns the qtSaidaiKensaku.
     * @return {string} String
     */
    public getQtSaidaiKensaku(): string {
      return this.qtSaidaiKensaku
    }

    /**
     * Sets the cdProgram.
     * @param {string} cdProgram The cdProgram to set
     */
    public setCdProgram(cdProgram: string) {
      this.cdProgram = cdProgram
    }

    /**
     * Sets the qtSaidaiKensaku.
     * @param {string} qtSaidaiKensaku The qtSaidaiKensaku to set
     */
    public setQtSaidaiKensaku(qtSaidaiKensaku: string) {
      this.qtSaidaiKensaku = qtSaidaiKensaku
    }

    /**
     * Returns the dtUnyo.
     * @return {string} String
     */
    public getDtUnyo(): string {
      return this.dtUnyo
    }

    /**
     * Returns the qtHyoujiPage.
     * @return {string} String
     */
    public getQtHyoujiPage(): string {
      return this.qtHyoujiPage
    }

    /**
     * Returns the qtPage.
     * @return {string} String
     */
    public getQtPage(): string {
      return this.qtPage
    }

    /**
     * Sets the dtUnyo.
     * @param {string} dtUnyo The dtUnyo to set
     */
    public setDtUnyo(dtUnyo: string) {
      this.dtUnyo = dtUnyo
    }

    /**
     * Sets the qtHyoujiPage.
     * @param {string} qtHyoujiPage The qtHyoujiPage to set
     */
    public setQtHyoujiPage(qtHyoujiPage: string) {
      this.qtHyoujiPage = qtHyoujiPage
    }

    /**
     * Sets the qtPage.
     * @param {string} qtPage The qtPage to set
     */
    public setQtPage(qtPage: string) {
      this.qtPage = qtPage
    }

    /**
     * Returns the nmServer.
     * @return {string} String
     */
    public getNmServer(): string {
      return this.nmServer
    }

    /**
     * Sets the nmServer.
     * @param {string} nmServer The nmServer to set
     */
    public setNmServer(nmServer: string) {
      this.nmServer = nmServer
    }

    /**
     * Returns the nmServerIP.
     * @return {string} String
     */
    public getNmServerIP(): string {
      return this.nmServerIP
    }

    /**
     * Sets the nmServerIP.
     * @param {string} nmServerIP The nmServerIP to set
     */
    public setNmServerIP(nmServerIP: string) {
      this.nmServerIP = nmServerIP
    }

    /**
     * クライアントに返すメッセージより、ファイル情報を削除。<BR>
     * セッション上のファイル情報まで消さないように注意。<BR>
     */
    public removeFileInfo() {
      this.setStDirectory('')
      this.setNmFile('')
      this.setFgInline('')
      this.setFile(null)
    }

    /**
     * このオブジェクトのディープコピーを返却します。
     * @see java.lang.Object#clone()
     * @return {*}
     */
    public clone(): any {
      const retLoginInfo: SMSLoginInfoImpl = new SMSLoginInfoImpl()
      retLoginInfo.setUserId(<string>new String(this.getUserId()))
      retLoginInfo.setUserName(<string>new String(this.getUserName()))
      retLoginInfo.setNmUserMyoji(<string>new String(this.nmUserMyoji))
      retLoginInfo.setNmUserNamae(<string>new String(this.nmUserNamae))
      retLoginInfo.setNmUserKana(<string>new String(this.nmUserKana))
      if (this.cdJugyoin != null) {
        retLoginInfo.setCdJugyoin(<string>new String(this.cdJugyoin))
      }
      retLoginInfo.setCdKaisha(<string>new String(this.cdKaisha))
      retLoginInfo.setNmKaisha(<string>new String(this.nmKaisha))
      retLoginInfo.setBushoName(<string>new String(this.getBushoName()))
      if (this.getIfYPM() != null) {
        retLoginInfo.setIfYPM(<any>{})
      }
      retLoginInfo.setCdSonekiKanriSoshiki3(
        <string>new String(this.cdSonekiKanriSoshiki3),
      )
      retLoginInfo.setCdSonekiKanriSoshiki4(
        <string>new String(this.cdSonekiKanriSoshiki4),
      )
      retLoginInfo.setStYakuwari(<string>new String(this.stYakuwari))
      retLoginInfo.setNmHost(<string>new String(this.nmHost))
      retLoginInfo.setNmClientIP(<string>new String(this.nmClientIP))
      retLoginInfo.setTmLogin(<string>new String(this.tmLogin))
      retLoginInfo.setCdProgram(<string>new String(this.cdProgram))
      retLoginInfo.setCdGamen(<string>new String(this.cdGamen))
      retLoginInfo.setNmGamen(<string>new String(this.nmGamen))
      retLoginInfo.setQtSaidaiKensaku(<string>new String(this.qtSaidaiKensaku))
      retLoginInfo.setQtSaidaiHyouji(<string>new String(this.qtSaidaiHyouji))
      retLoginInfo.setQtHyoujiZumi(<string>new String(this.qtHyoujiZumi))
      retLoginInfo.setQtKensaku(<string>new String(this.qtKensaku))
      retLoginInfo.setStKensakuHoukou(<string>new String(this.stKensakuHoukou))
      if (this.stZenPage != null) {
        retLoginInfo.setStZenPage(
          <boolean>new Boolean(/* booleanValue */ this.stZenPage),
        )
      }
      if (this.stJiPage != null) {
        retLoginInfo.setStJiPage(
          <boolean>new Boolean(/* booleanValue */ this.stJiPage),
        )
      }
      retLoginInfo.setQtHyoujiPage(<string>new String(this.qtHyoujiPage))
      retLoginInfo.setQtPage(<string>new String(this.qtPage))
      retLoginInfo.setStDirectory(<string>new String(this.stDirectory))
      retLoginInfo.setNmFile(<string>new String(this.nmFile))
      retLoginInfo.setFgInline(<string>new String(this.fgInline))
      if (this.file != null) {
        retLoginInfo.setFile(<number[]>/* clone */ this.file.slice(0))
      }
      retLoginInfo.setStError(<string>new String(this.stError))
      retLoginInfo.setCdErrorKoumoku(<string>new String(this.cdErrorKoumoku))
      retLoginInfo.setQtErrorRecordPosition(
        <string>new String(this.qtErrorRecordPosition),
      )
      retLoginInfo.setNmErrorColumn(<string>new String(this.nmErrorColumn))
      if (this.exErrorObject != null) {
        retLoginInfo.setExErrorObject(
          Object.defineProperty(
            new Error(this.exErrorObject.message),
            '__classes',
            {
              configurable: true,
              value: ['java.lang.Throwable', 'java.lang.Object'],
            },
          ),
        )
      }
      retLoginInfo.setCdMessage(<string>new String(this.cdMessage))
      if (this.nmMessageChikan != null) {
        retLoginInfo.setNmMessageChikan(
          <string[]>/* clone */ this.nmMessageChikan.slice(0),
        )
      }
      retLoginInfo.setFgPopup(
        <boolean>new Boolean(/* booleanValue */ this.fgPopup),
      )
      retLoginInfo.setTmKoshin(<string>new String(this.tmKoshin))
      retLoginInfo.setDtUnyo(<string>new String(this.dtUnyo))
      retLoginInfo.setNmClass(<string>new String(this.nmClass))
      retLoginInfo.setNmMethod(<string>new String(this.nmMethod))
      retLoginInfo.setNmServer(<string>new String(this.nmServer))
      retLoginInfo.setNmServerIP(<string>new String(this.nmServerIP))
      return retLoginInfo
    }

    constructor() {
      super()
      this.nmUserMyoji = ''
      this.nmUserNamae = ''
      this.nmUserKana = ''
      this.cdJugyoin = ''
      this.cdKaisha = ''
      this.nmKaisha = ''
      this.ifYPM = null
      this.cdSonekiKanriSoshiki3 = ''
      this.cdSonekiKanriSoshiki4 = ''
      this.stYakuwari = ''
      this.nmHost = ''
      this.nmClientIP = ''
      this.tmLogin = ''
      this.cdProgram = ''
      this.cdGamen = ''
      this.nmGamen = ''
      this.qtSaidaiKensaku = ''
      this.qtSaidaiHyouji = ''
      this.qtHyoujiZumi = ''
      this.qtKensaku = ''
      this.stKensakuHoukou = ''
      this.stZenPage = null
      this.stJiPage = null
      this.qtHyoujiPage = ''
      this.qtPage = ''
      this.stDirectory = ''
      this.nmFile = ''
      this.fgInline = ''
      this.file = null
      this.stError = ''
      this.cdErrorKoumoku = ''
      this.qtErrorRecordPosition = ''
      this.nmErrorColumn = ''
      this.exErrorObject = null
      this.cdMessage = ''
      this.nmMessageChikan = null
      this.fgPopup = true
      this.tmKoshin = ''
      this.dtUnyo = ''
      this.nmClass = ''
      this.nmMethod = ''
      this.nmServer = ''
      this.nmServerIP = ''
    }
  }
  SMSLoginInfoImpl['__class'] = 'lib.com.fujitsu.sms.sol.sys.SMSLoginInfoImpl'
}
