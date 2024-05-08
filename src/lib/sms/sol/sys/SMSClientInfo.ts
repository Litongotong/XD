import { SMSProperties } from './SMSProperties'

/**
 * システム情報取得クラスです。
 * SMSClient.propertiesを参照してシステム設定情報を通知します。
 * @author  販売管理WG
 */
export class SMSClientInfo extends SMSProperties {
  /** 読み込むプロパティファイル名 */
  private static FILE_NAME = 'SMSClient.properties'

  /** ファイルアップロードMAXサイズキー */
  private static F_U_MAXSIZE = 'F_U_MAXSIZE'

  /** コンテキストルート用キー */
  private static CONTEXT_ROOT_NAME = 'CONTEXT_ROOT_NAME'

  /** プロトコル用キー */
  private static PROTCOL_NAME = 'PROTCOL_NAME'

  //-------------2014.01.31 富士通)大平 システム統合開発プロジェクト DLT START-------
  //	/** DWH名称用キー */
  //	private static DWH_NAME = "DWH_NAME";
  //
  //	/** ListWorks名称用キー */
  //	private static LIST_NAME = "LIST_NAME";
  //-------------2014.01.31 富士通)大平 システム統合開発プロジェクト DLT END-------

  /** ログインCBS用キー */
  private static LOGIN_CBS_NAME = 'LOGIN_CBS_NAME'

  //2014/01/24 システム統合開発プロジェクト Add Start
  /** タイトル色取得用キー */
  private static TITLE_COLOR = 'TITLE_COLOR'

  /** タイトル文字色取得用キー */
  private static TITLE_CHARACTER_COLOR = 'TITLE_CHARACTER_COLOR'
  //2014/01/24 システム統合開発プロジェクト Add End

  /**
   * コンストラクタです。
   * 外部へは公開しません。
   */
  private constructor() {
    super()
    //プロパティファイル読み込み
    super.load()
  }

  /**
   * インスタンス取得メソッドです。
   * (singletoneパターン仕様)
   */
  private static getInstance(): SMSClientInfo {
    return this.info
  }

  /**
   * ファイル名を通知します。
   * @return String ファイル名
   */
  getFileName(): string {
    return SMSClientInfo.FILE_NAME
  }

  /** このクラスのインスタンス */
  private static info: SMSClientInfo = new SMSClientInfo()

  /**
   * ファイルアップロード時のファイル最大サイズを取得する
   * @return String 最大サイズ
   */
  static getFileUploadMaxSize(): string {
    return this.getInstance().getProperty().getString(this.F_U_MAXSIZE)
  }

  /**
   * コンテキストルートを取得する
   * @return String コンテキストルート
   */
  static getContextRoot(): string {
    return this.getInstance()
      .getProperty()
      .getString(SMSClientInfo.CONTEXT_ROOT_NAME)
  }

  /**
   * プロトコルを取得する
   * @return String プロトコル
   */
  static getProtcol(): string {
    return this.getInstance().getProperty().getString(this.PROTCOL_NAME)
  }

  //-------------2014.01.31 富士通)大平 システム統合開発プロジェクト DLT START-------
  //	/**
  //	 * DWH名称を取得する
  //	 * @return String DWH名称
  //	 */
  //	static String getDWHName(){
  //		return getInstance().getProperty().getString(DWH_NAME);
  //	}
  //
  //	/**
  //	 * ListWorks名称を取得する
  //	 * @return String ListWorks名称
  //	 */
  //	static String getLisWorksName(){
  //		return getInstance().getProperty().getString(LIST_NAME);
  //	}
  //-------------2014.01.31 富士通)大平 システム統合開発プロジェクト DLT END-------

  /**
   * ログインCBS名を取得する
   * @return String ログインCBS名
   */
  static getLoginCBSName(): string {
    return this.getInstance().getProperty().getString(this.LOGIN_CBS_NAME)
  }

  //2014/01/24 システム統合開発プロジェクト Add Start
  /**
   * タイトル色を取得する
   * @return String タイトル色
   */
  static getTitleColor(): string {
    return this.getInstance().getProperty().getString(this.TITLE_COLOR)
  }

  /**
   * タイトル文字色を取得する
   * @return String タイトル文字色
   */
  static getTitleCharacterColor(): string {
    return this.getInstance()
      .getProperty()
      .getString(this.TITLE_CHARACTER_COLOR)
  }
  //	2014/01/24 システム統合開発プロジェクト Add End

  _getName(): string {
    return 'SMSClientInfo'
  }

  static _getName(): string {
    return 'SMSClientInfo'
  }

  _getType() {
    return SMSClientInfo as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSClientInfo'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSClientInfo'
  }
}
