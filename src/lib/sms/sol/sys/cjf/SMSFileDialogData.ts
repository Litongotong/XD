/******************************************************************************
 * sms.sol.sys.cjf.SMSFileDialogData
 *
 * プログラム名     : sms.sol.sys.cjf.SMSFileDialogData
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | SMSFileDialogData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { SMSFilenameFilter } from './SMSFilenameFilter'
import { NativeFile } from '@/lib/native/io/File'
import { ArrayList } from '@/lib/native/util/ArrayList'
import { Character } from '@/lib/native/lang/Character'
import { ref, type Ref } from 'vue'
import { bindThis } from '@/utils/class/bind'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

/**
 * ファイルダイアログデータクラスです。
 */
export class SMSFileDialogData extends JCFItemData {
  //選択モード 0:ファイル選択  1:ディレクトリ選択
  chooseMode = ref(0)
  /** ファイルダイアログタイトル */
  title = ref('')
  /** 選択ファイルタイプ */
  filetype = ref('')
  //2014/06/30 システム統合開発プロジェクト Add Start
  /** デフォルトパス */
  defaultPath = ref('')
  //2014/06/30 システム統合開発プロジェクト Add Start

  fullPath: Ref<string | null> = ref(null)
  file: Ref<NativeFile | null> = ref(null)

  constructor(itemID: string) {
    super(itemID)

    bindThis(this)
  }

  static MODE_FILE = 0
  static MODE_FOLDER = 1

  setModified(modified: boolean) {
    super.setModified(modified)
  }

  setErrorCode(errorCode: string) {
    super.setErrorCode(errorCode)
  }

  getCommunicationData(): any {
    return this.getValue()
  }

  setCommunicationData(newValue: any) {
    this.setValue(newValue as string)
  }

  setData(itemData: JCFItemData) {
    if (!itemData) {
      return
    }

    if (!(itemData?._getType() === SMSFileDialogData)) {
      return
    }

    let data: SMSFileDialogData = itemData as any as SMSFileDialogData
  }

  setValue(newValue: string) {
    this.fullPath.value = newValue
  }

  getValue(): string {
    return this.fullPath.value!
  }

  /****************************************************************************************
   * ファイルを取得します。
   * @return File
   ****************************************************************************************/
  getFile(): NativeFile {
    return this.file.value!
  }

  /****************************************************************************************
   * ファイルを設定します。
   * @param newValue
   ****************************************************************************************/
  protected setFile(newValue: NativeFile) {
    this.file.value = newValue
  }

  /**
   * 選択モードを設定します
   * @param chooseMode The chooseMode to set
   */
  setChooseMode(chooseMode: number) {
    this.chooseMode.value = chooseMode
  }

  /**
   * 選択モードを取得します
   */
  getChooseMode(): number {
    return this.chooseMode.value
  }

  /**
   * 選択したファイルと同じフォルダに存在するファイル名をString[]で返します。
   * @return String[]
   */
  getFileNameList(): string[] {
    let directoryName: string = this.getValue()
    //選択されていなければnull
    if (
      directoryName === null ||
      directoryName === undefined ||
      directoryName.equals('')
    ) {
      return []
    }
    //ファイル選択モードならnull
    if (this.getChooseMode() == SMSFileDialogData.MODE_FILE) {
      return []
    }

    //ファイル名のリストを取得する
    let fileNames: string[] = this.getFile().list()

    //ファイルタイプの指定があれば、フィルターにかける
    let fileType: string = this.getFiletype()
    if (SMSFileDialogData.isNotBlank(fileType)) {
      let filter: SMSFilenameFilter = new SMSFilenameFilter(this.getExtension())
      let nameList: ArrayList = new ArrayList()
      for (let i = 0; i < fileNames.length; i++) {
        if (filter.accept(this.getFile(), fileNames[i])) {
          nameList.add(fileNames[i])
        }
      }
      fileNames = nameList.toArray() as string[]
    }

    return fileNames
  }

  /**
   * ファイル選択モードの場合のみ、選択したファイル名をパス抜きで返します。
   * フォルダ選択モードの場合nullを返します。
   * @return String
   */
  getFileName(): string {
    let directoryName: string = this.getValue()
    //フォルダ選択モードならnull
    if (this.getChooseMode() == SMSFileDialogData.MODE_FOLDER) {
      return null!
    }
    //選択されていなければnull
    if (
      directoryName === null ||
      directoryName === undefined ||
      directoryName.equals('')
    ) {
      return null!
    }

    return this.getFile().getName()
  }

  /**
   * 選択したファイルのディレクトリを返します。
   * @return String
   */
  getDirectory(): string {
    let directoryName: string = this.getValue()
    //フォルダ選択モードならnそのまま返す
    if (this.getChooseMode() == SMSFileDialogData.MODE_FOLDER) {
      return directoryName
    }
    //選択されていなければnull
    if (
      directoryName === null ||
      directoryName === undefined ||
      directoryName.equals('')
    ) {
      return null!
    }
    // 2007/11/22 Mod start
    // ファイルパスにドライブ直下が指定された場合に、
    // A:\\filenameとファイルセパレータが"\\"となってしまうため、
    // 取得したディレクトリの最終文字列が"\"で終る場合にはセパレータを追加しないよう
    // 処理を改善する。
    // また、ファイルセパレータは"\\"固定とせず、File.separatorへと変更する。
    // ※Javaが扱うMS Windows OS上でのファイルセパレータは"\"である、とサポートより回答あり(2007/11/21)。

    //winだけですが追加
    //		return getFile().getParent() + "\\";
    let dir: string = this.getFile().getParent()
    // 1文字目の"\"はエスケープシーケンス

    if (dir.endsWith('/') || dir.endsWith('\\')) {
      return dir
    }
    if (dir.includes('/') && !dir.endsWith('/')) {
      return `${dir}/`
    }
    if (dir.includes('\\') && !dir.endsWith('\\')) {
      return `${dir}\\`
    }
    return dir
    // 2007/11/22 Mod end
  }

  /**
   * ファイルタイプを取得します.
   * @return String
   */
  getFiletype(): string {
    return this.filetype.value
  }

  /**
   * タイトルを取得します.
   * @return String
   */
  getTitle(): string {
    return this.title.value
  }

  /**
   * ファイルタイプを設定します。
   * @param filetype The filetype to set
   */
  setFiletype(filetype: string) {
    this.filetype.value = filetype
  }

  /**
   * タイトルを設定します。
   * @param title The title to set
   */
  setTitle(title: string) {
    this.title.value = title
  }

  //2014/06/30 システム統合開発プロジェクト Add Start
  /**
   * デフォルトパスを設定します
   * @param defaultPath The defaultPath to set
   */
  setDefaultPath(defaultPath: string) {
    this.defaultPath.value = defaultPath
  }

  /**
   * デフォルトパスを取得します
   * @return String
   */
  getDefaultPath(): string {
    return this.defaultPath.value
  }
  //2014/06/30 システム統合開発プロジェクト Add End

  /**
   * プロパティに指定されたファイルタイプの拡張子を取得します。
   */
  private getExtension(): string {
    let strFileType: string = this.getFiletype()
    let extension: string = ''
    if (SMSFileDialogData.isNotBlank(strFileType)) {
      extension = strFileType.substring(
        strFileType.lastIndexOf('.'),
        strFileType.length,
      )
    }
    return extension
  }

  /**
   * 指定の文字列が空文字("")もしくはnullもしくは空白文字列("   ")ではないかチェックします。
   */
  private static isNotBlank(str: string): boolean {
    let strLen: number
    if (str === null || str === undefined || (strLen = str.length) == 0) {
      return false
    }
    for (let i = 0; i < strLen; i++) {
      if (Character.isWhitespace(str.charAt(i)) == false) {
        return true
      }
    }
    return false
  }

  _getComponentName(): string {
    return EComponentName.SMSFileDialog
  }

  _getName(): string {
    return 'SMSFileDialogData'
  }

  static _getName(): string {
    return 'SMSFileDialogData'
  }

  _getType() {
    return SMSFileDialogData as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSFileDialogData'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSFileDialogData'
  }
}
