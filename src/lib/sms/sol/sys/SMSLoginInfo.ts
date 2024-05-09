/******************************************************************************
 * sms.sol.sys.SMSLoginInfo
 *
 * プログラム名     : sms.sol.sys.SMSLoginInfo
 * 担当者           : itac）郭澤宇
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/03 | itac）郭澤宇  | SMSLoginInfo を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 **/

/**
 * 共通上りメッセージクラスです。
 * Servletが設定し、EJBが参照します。
 * @author  販売管理WG
 */
export abstract class SMSLoginInfo {
  /** 会社コードです。 */
  private kaishaCode: string = ''

  /** 会社名です。 */
  private kaishaName: string = ''

  /** 部署コードです。 */
  private bushoCode: string = ''

  /** 部署名です。 */
  private bushoName: string = ''

  /** ユーザIDです。 */
  private userId: string = ''

  /** ユーザ名です。 */
  private userName: string = ''

  //雪印乳業追加：権限情報 20050803
  /** 権限情報です。 */
  //del aoki 20051008
  //	private SMSAuthorityInfo auth;

  /**
   * 会社コードを取得します。
   * @return String 会社コード
   */
  getKaishaCode(): string {
    return this.kaishaCode
  }

  /**
   * 会社名を取得します。
   * @return String 会社名
   */
  getKaishaName(): string {
    return this.kaishaName
  }

  /**
   * 部署コードを取得します。
   * @return String 部署コード
   */
  getBushoCode(): string {
    return this.bushoCode
  }

  /**
   * 部署名を取得します。
   * @return String 部署名
   */
  getBushoName(): string {
    return this.bushoName
  }

  /**
   * ユーザIDを取得します。
   * @return String ユーザID
   */
  getUserId(): string {
    return this.userId
  }

  /**
   * ユーザ名を取得します。
   * @return String ユーザ名
   */
  getUserName(): string {
    return this.userName
  }

  /**
   * 会社コードを設定します。
   * @param String 会社コード
   */
  setKaishaCode(kaishaCode: string) {
    this.kaishaCode = kaishaCode
  }

  /**
   * 会社名を設定します。
   * @param String 会社名
   */
  setKaishaName(kaishaName: string) {
    this.kaishaName = kaishaName
  }

  /**
   * 部署コードを設定します。
   * @param String 部署コード
   */
  setBushoCode(bushoCode: string) {
    this.bushoCode = bushoCode
  }

  /**
   * 部署名を設定します。
   * @param String 部署名
   */
  setBushoName(bushoName: string) {
    this.bushoName = bushoName
  }

  /**
   * ユーザIDを設定します。
   * @param String ユーザID
   */
  setUserId(userId: string) {
    this.userId = userId
  }

  /**
   * ユーザ名を設定します。
   * @param String ユーザ名
   */
  setUserName(userName: string) {
    this.userName = userName
  }

  //	/**
  //	 * <pre>
  //	 * 権限情報を取得する
  //	 * </pre>
  //	 * @return SMSAuthorityInfo
  //	 */
  //	SMSAuthorityInfo getAuth() {
  //		return auth;
  //	}

  //	/**
  //	 * <pre>
  //	 * 権限情報を設定する
  //	 * </pre>
  //	 * @param auth The auth to set
  //	 */
  //	setAuth(SMSAuthorityInfo auth) {
  //		this.auth = auth;
  //	}

  _getName(): string {
    return 'SMSLoginInfo'
  }

  static _getName(): string {
    return 'SMSLoginInfo'
  }

  _getType() {
    return SMSLoginInfo as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSLoginInfo'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSLoginInfo'
  }
}
