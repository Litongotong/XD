import { BufferedOutputStream } from '@/lib/native/io/BufferedOutputStream'
import { NativeFile } from '@/lib/native/io/File'
import { FileInputStream } from '@/lib/native/io/FileInputStream'
import { FileOutputStream } from '@/lib/native/io/FileOutputStream'
import { IOException } from '@/lib/native/io/IOException'
import type { byte } from '@/lib/native/lang/byte'
import { Long } from '@/lib/native/lang/Long'
import { createNumberArray } from '@/utils/array/1D'

/**
 * ファイルの操作を行うUtilクラスです。
 * @author 販売管理WG
 */
export class SMSFileUtil {
  /** サブシステムID */
  //	private final String SUB_SYSTEM_ID = SMSSubSystemInfo.getSubSystemID( this.getClass().getName() );

  /**
   * 指定されたファイルを入力します。
   * @param infile ファイル名(フルパス)
   * @return 読み込んだファイルデータ
   * @throws FileNotFoundException ファイルが存在しなかった場合
   * @throws IOException 入出力エラーが発生した場合
   */
  public readFile(infile: string): byte[] {
    //		SMSEJBLog.getDebugLog(this.SUB_SYSTEM_ID).println( infile + "の読み込みを開始します。");

    //System.out.println("SMSFileUtil#readFile() infile = " + infile);

    //指定されたパス名文字列を抽象パス名に変換して、新しい File のインスタンスを生成します。
    let file: NativeFile = new NativeFile(infile)

    //指定された long の引数を表す、新しく割り当てられた Long オブジェクトを構築します。
    let ln: Long = new Long(file.length())

    let out: byte[] = createNumberArray(ln.intValue())

    let fis: FileInputStream = null!

    try {
      //ファイルシステムの実際のファイル (File オブジェクト file により指定) に接続することにより、FileInputStream を作成します。
      fis = new FileInputStream(infile)

      //入力ストリームから最大 out.length バイトをバイト配列に読み込みます。
      fis.read(out)

      fis.close()

      return out
    } finally {
      if (fis != null) {
        fis.close()
      }
    }
  }

  /**
   * 指定されたファイルを出力します。
   * @param infile ファイル名(フルパス)
   * @param file ファイルデータ
   * @throws FileNotFoundException ファイルが存在しなかった場合
   * @throws IOException 入出力エラーが発生した場合
   */
  public writeFile(infile: string, file: byte[]) {
    //		SMSEJBLog.getDebugLog(this.SUB_SYSTEM_ID).println( infile + "の作成を開始します。");

    let fos: FileOutputStream = null!

    let bos: BufferedOutputStream = null!

    try {
      fos = new FileOutputStream(infile)

      bos = new BufferedOutputStream(fos)

      bos.write(file)
    } finally {
      if (bos != null) {
        bos.close()
      }
    }
  }

  /**
   * 指定されたファイル名のファイルデータを削除するメソッドです。
   *@param filepath 削除するファイル名(フルパス)
   *@exception IOException 入出力エラーが発生した場合
   */
  public deleteFile(infile: string) {
    //		SMSEJBLog.getDebugLog(this.SUB_SYSTEM_ID).println( infile + "の削除を開始します。");

    //Fileオブジェクトを取得する
    let file: NativeFile = new NativeFile(infile)

    //削除した結果をbooleanで取得
    let b: boolean = file.delete()

    if (b == false) {
      //			SMSEJBLog.getDebugLog(this.SUB_SYSTEM_ID).println( "ファイルの削除処理に失敗しました。" );
      // ファイルの削除に失敗した場合、IOExceptionを発生させる。
      throw new IOException()
    }
  }

  /**
   * 指定したディレクトリに格納されているファイル名のリストを取得します。
   * @param DirectoryName ディレクトリ名(フルパス)
   * @return ファイル名リスト
   */
  public getFileNameList(DirectoryName: string): string[] {
    //		SMSEJBLog.getDebugLog(this.SUB_SYSTEM_ID).println( DirectoryName + "内のファイル一覧取得を開始します。");

    let file: NativeFile = new NativeFile(DirectoryName)

    let fileNameList: string[] = file.list()

    return fileNameList
  }

  /**
   * 指定されたファイルのサイズを取得します。
   * 指定されたファイルが存在しない場合は、0が返却されます。
   * 2005/04/12追加
   * @param inFile ファイル名(フルパス)
   * @return ファイルサイズ
   */
  public getFileSize(inFile: string): number {
    //System.out.println("SMSFileUtil#getFileSize() inFile = " + inFile);

    let file: NativeFile = new NativeFile(inFile)

    //System.out.println("SMSFileUtil#getFileSize() file.length() = " + file.length());

    // ファイルサイズ返却
    return file.length()
  }

  _getName(): string {
    return 'SMSFileUtil'
  }

  static _getName(): string {
    return 'SMSFileUtil'
  }

  _getType() {
    return SMSFileUtil as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSFileUtil'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSFileUtil'
  }
}
