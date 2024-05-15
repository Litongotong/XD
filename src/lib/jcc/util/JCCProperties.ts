import { BufferedReader } from '@/lib/native/io/BufferedReader'
import { BufferedWriter } from '@/lib/native/io/BufferedWriter'
import { FileInputStream } from '@/lib/native/io/FileInputStream'
import { FileNotFoundException } from '@/lib/native/io/FileNotFoundException'
import { FileOutputStream } from '@/lib/native/io/FileOutputStream'
import { InputStream } from '@/lib/native/io/InputStream'
import { InputStreamReader } from '@/lib/native/io/InputStreamReader'
import { IOException } from '@/lib/native/io/IOException'
import type { OutputStream } from '@/lib/native/io/OutputStream'
import { OutputStreamWriter } from '@/lib/native/io/OutputStreamWriter'
import { NativeBoolean } from '@/lib/native/lang/Boolean'
import { ClassCastException } from '@/lib/native/lang/ClassCastException'
import { Double } from '@/lib/native/lang/Double'
import type { Enumeration } from '@/lib/native/lang/Enumeration'
import { Integer } from '@/lib/native/lang/Integer'
import { Long } from '@/lib/native/lang/Long'
import { NullPointerException } from '@/lib/native/lang/NullPointerException'
import { RuntimeException } from '@/lib/native/lang/RuntimeException'
import { StringIndexOutOfBoundsException } from '@/lib/native/lang/StringIndexOutOfBoundsException'
import { System } from '@/lib/native/lang/System'
import { Hashtable } from '@/lib/native/util/Hashtable'
import type { NativeMap } from '@/lib/native/util/Map'
import type { Properties } from '@/lib/native/util/Properties'
import { NativeClassAdapter } from '@/lib/properties/class'
import { PropertiesManager } from '@/lib/properties/propertiesManager'

export class JCCProperties {
  cutTrim: boolean = true
  filename: string = ''
  propList: Hashtable

  private encoding: string | null = null

  constructor(props?: Properties) {
    this.propList = new Hashtable(props)
  }

  set(key: string, value: boolean): void
  set(key: string, value: number): void
  set(key: string, value: string): void
  set(key: any, value: any) {
    const isKeyAsString = typeof key === 'string'
    const isValueAsString = typeof value === 'string'
    const isValueAsNumber = typeof value === 'number'
    const isValueAsBoolean = typeof value === 'boolean'
    if (isKeyAsString && isValueAsString) {
      return this.__setWithString(key, value)
    }
    if (isKeyAsString && isValueAsNumber) {
      return this.__setWithNumber(key, value)
    }
    if (isKeyAsString && isValueAsBoolean) {
      return this.__setWithBoolean(key, value)
    }
  }
  __setWithString(key: string, value: string) {
    // 以下に必要な手続きを記述してください。

    let isEmpty = false
    try {
      isEmpty = key.equals('')
    } catch (e) {
      throw new NullPointerException('key is null')
    }

    //キーが空文字→NullPointerException("key is empty")
    //その他→強制トリムを行います
    if (isEmpty) {
      throw new NullPointerException('key is empty')
    } else {
      // FIXME: ?
      key.trim()
    }

    //キーが空列でなければsetします

    try {
      this.propList.put(key, value)
    } catch (e) {
      throw new NullPointerException('value is null')
    }
  }
  __setWithNumber(key: string, value: number) {
    // 以下に必要な手続きを記述してください。
    this.__setWithString(key, value.toString())
  }
  __setWithBoolean(key: string, value: boolean) {
    // 以下に必要な手続きを記述してください。
    this.__setWithString(key, String(value))
  }

  getString(key: string): string
  getString(key: string, defaultValue: string): string
  getString(key: string, defaultValue?: string): string {
    if (defaultValue === undefined) {
      return this.__getString(key)
    }
    return this.__getStringWithDefaultValue(key, defaultValue)
  }
  __getString(key: string): string {
    // 以下に必要な手続きを記述してください。
    if (key == null) throw new NullPointerException('key is null')
    if (key.equals('')) throw new NullPointerException('key is empty')
    return String(this.propList.get(key) || '')
  }
  __getStringWithDefaultValue(key: string, defaultValue: string): string {
    let value: string = this.getString(key)

    //値が空列ならdefaultValueを適用します
    if (value == null) {
      value = defaultValue
    } else if (value.equals('')) {
      value = defaultValue
    }

    return value
  }

  getInt(key: string): number
  getInt(key: string, defaultValue: number): number
  getInt(key: string, defaultValue?: number): number {
    if (defaultValue === undefined) {
      return this.__getInt(key)
    }
    return this.__getIntWithDefaultValue(key, defaultValue)
  }
  __getInt(key: string): number {
    // 以下に必要な手続きを記述してください。
    return Integer.parseInt(this.getProperty(key))
  }
  __getIntWithDefaultValue(key: string, defaultValue: number): number {
    //JCCプロパティの文字列を取得します
    let tempStr: string = this.getProperty(key)

    /*空列ならデフォルト値を、そうでなければ
     *intに変換したものを返します
     *(NumberFormatExceptionがありえます)
     */

    return tempStr.equals('') ? defaultValue : Integer.parseInt(tempStr)
  }

  getBoolean(key: string): boolean
  getBoolean(key: string, defaultValue: boolean): boolean
  getBoolean(key: string, defaultValue?: boolean) {
    if (defaultValue === undefined) {
      return this.__getBoolean(key)
    }
    return this.__getBooleanWithDefaultValue(key, defaultValue)
  }
  __getBoolean(key: string): boolean {
    // 以下に必要な手続きを記述してください。
    if (key == null) throw new NullPointerException('key is null')

    const tempStr: string = String(this.propList.get(key))

    if (tempStr == null)
      throw new NullPointerException('key [' + key + '] is not found')

    let valueAsBoolean = NativeBoolean.valueOf(tempStr).booleanValue()

    /* 判定がfalseのとき、文字列も"false"だったらfalseと判断します
     * それ以外はデフォルトに従います
     */
    if (!valueAsBoolean) {
      if (tempStr.equals('false')) {
        valueAsBoolean = false
      } else {
        throw new ClassCastException('value [' + tempStr + '] is not boolean')
      }
    }

    return NativeBoolean.valueOf(this.getProperty(key)).booleanValue()
  }
  __getBooleanWithDefaultValue(key: string, defaultValue: boolean): boolean {
    // 以下に必要な手続きを記述してください。
    //JCCプロパティの文字列を取得して、trueかを判断します
    let tempStr: string = String(this.propList.get(key))

    if (tempStr == null)
      throw new NullPointerException('key [' + key + '] is not found')

    let valueAsBoolean: boolean = NativeBoolean.valueOf(tempStr).booleanValue()

    /* 判定がfalseのとき、文字列も"false"だったらfalseと判断します
     * それ以外はデフォルトに従います
     */
    if (!valueAsBoolean) {
      if (tempStr.equals('false')) {
        valueAsBoolean = false
      } else {
        valueAsBoolean = defaultValue
      }
    }

    return valueAsBoolean
  }

  getCharacter(key: string): string
  getCharacter(key: string, defaultValue: string): string
  getCharacter(key: string, defaultValue?: string): string {
    if (defaultValue === undefined) {
      return this.__getCharacter(key)
    }
    return this.__getCharacterWithDefaultValue(key, defaultValue)
  }
  __getCharacter(key: string): string {
    // 以下に必要な手続きを記述してください。
    if (this.getProperty(key).length == 0)
      throw new StringIndexOutOfBoundsException('value is empty')
    return this.getProperty(key).charAt(0)
  }
  __getCharacterWithDefaultValue(key: string, defaultValue: string): string {
    // 以下に必要な手続きを記述してください。
    let tempStr: string = this.getProperty(key)

    return tempStr.length != 0 ? tempStr.charAt(0) : defaultValue
  }

  getLong(key: string): number
  getLong(key: string, defaultValue: number): number
  getLong(key: string, defaultValue?: number): number {
    if (defaultValue === undefined) {
      return this.__getLong(key)
    }
    return this.__getLongWithDefaultValue(key, defaultValue)
  }
  __getLong(key: string): number {
    // 以下に必要な手続きを記述してください。
    // valueAsLong = Long.parseLong(getString(key));
    return Long.parseLong(this.getProperty(key))
  }
  __getLongWithDefaultValue(key: string, defaultValue: number): number {
    //JCCプロパティの文字列を取得します
    let tempStr: string = this.getProperty(key)

    /*空列ならデフォルト値を、そうでなければ
     *longに変換したものを返します
     *(NumberFormatExceptionがありえます)
     */
    return tempStr.equals('') ? defaultValue : Long.parseLong(tempStr)
  }

  getDouble(key: string): number
  getDouble(key: string, defaultValue: number): number
  getDouble(key: string, defaultValue?: number): number {
    if (defaultValue === undefined) {
      return this.__getDouble(key)
    }
    return this.__getDoubleWithDefaultValue(key, defaultValue)
  }
  __getDouble(key: string): number {
    // 以下に必要な手続きを記述してください。
    //double valueAsDouble = Double.parseDouble(getString(key));
    return Double.parseDouble(this.getProperty(key))
  }
  __getDoubleWithDefaultValue(key: string, defaultValue: number): number {
    //JCCプロパティの文字列を取得します
    let tempStr: string = this.getProperty(key)

    /*空列ならデフォルト値を、そうでなければ
     *doubleに変換したものを返します
     *(NumberFormatExceptionがありえます)
     */
    return tempStr.equals('') ? defaultValue : Double.parseDouble(tempStr)
  }

  private _initPropertiesFromObject(filename: any) {
    if (typeof filename !== 'string') {
      throw new Error('filename must be a string')
    }
    const config = PropertiesManager.getPropertieConfig(filename) || {}
    Object.entries(config).forEach(([key, value]) => {
      this.propList.put(key, value)
    })
  }

  load(inStream: InputStream): void
  load(inStream: InputStream, cutTrim: boolean): void
  load(url: string): void
  load(url: string, cutTrim: boolean): void
  load(arg: InputStream | string, cutTrim?: boolean) {
    // =====   PERF   =====
    // ===== new code =====
    //  Read config from TS object.
    return this._initPropertiesFromObject(arg)

    // ===== legacy code =====
    //  Read file from plain text and parse it.
    // const isArgAsString = typeof arg === 'string'
    // const isCutTrimAsBoolean = typeof cutTrim === 'boolean'
    // const isCutTrimAsUndefined = typeof cutTrim === 'undefined'
    // if (isArgAsString && isCutTrimAsUndefined) {
    //   return this.__load(arg)
    // }
    // if (isArgAsString && isCutTrimAsBoolean) {
    //   return this.__loadWithCutTrim(arg, cutTrim)
    // }
    // const argAsStream = arg as InputStream
    // if (!argAsStream) {
    //   throw new NullPointerException('InputStream is null')
    // }
    // if (isCutTrimAsBoolean) {
    //   return this.__loadWithInputStreamAndCutTrim(argAsStream, cutTrim)
    // }
    // return this.__loadWithInputStream(argAsStream)
  }
  __loadWithInputStream(inStream: InputStream) {
    this.load(inStream, true)
  }
  __loadWithInputStreamAndCutTrim(inStream: InputStream, cutTrim: boolean) {
    // 以下に必要な手続きを記述してください。

    //行単位のデータを格納するメンバです
    let lineMsg: string | undefined
    let lineDataSet: string[] = []

    /****************
     * Streamの確保
     ****************/

    let isReader: InputStreamReader
    let buffReader: BufferedReader

    try {
      //渡されたInputStreamからInputStreamReaderを作成します。
      if (this.encoding == null) {
        isReader = new InputStreamReader(inStream)
      } else {
        isReader = new InputStreamReader(inStream, this.encoding)
      }
      //さらにInputStreamReaderからBufferedReaderを作成します。
      buffReader = new BufferedReader(isReader)
    } catch (e) {
      throw new NullPointerException('File may not found')
    }

    /***************
     * Hashtableの初期化
     ***************/
    this.propList.clear()

    /***************
     * 行レベルでの取り出し
     ***************/
    try {
      while ((lineMsg = buffReader.readLine()) != null) {
        //System.out.println(lineMsg);

        //コメント行を無視します
        if (lineMsg.startsWith('#')) continue
        //System.out.println(lineMsg);

        //エスケープシーケンスを有効化します
        lineMsg = this.enableEscapeSeq(lineMsg)
        //System.out.println(lineMsg);

        //キーと値を取得します
        lineDataSet = this.getDataSet(lineMsg)

        //値にトリムを行います
        if (cutTrim) lineDataSet[1] = lineDataSet[1].trim()

        //Hashtableにsetします
        this.setFromFile(lineDataSet[0], lineDataSet[1])
      }
    } catch (e) {
      throw new IOException('cannot read file')
    }
    buffReader.close()
  }
  __load(url: string) {
    this.load(url, true)
  }
  __loadWithCutTrim(url: string, cutTrim: boolean) {
    if (url == null || url.equals(''))
      throw new NullPointerException('String url is empty or null')
    const inVar: InputStream = NativeClassAdapter.from(JCCProperties)
      .class.getClassLoader()
      .getResourceAsStream(url)
    if (inVar == null) {
      throw new RuntimeException('url not found.')
    }
    this.load(inVar, cutTrim)
  }

  loadFile(path: string): void
  loadFile(path: string, cutTrim: boolean): void
  loadFile(arg: string, cutTrim?: boolean) {
    const isArgAsString = typeof arg === 'string'
    const isCutTrimAsBoolean = typeof cutTrim === 'boolean'
    if (isArgAsString && isCutTrimAsBoolean) {
      return this.__loadFileWithCutTrim(arg, cutTrim)
    }
    if (isArgAsString) {
      return this.__loadFile(arg)
    }
  }
  __loadFile(path: string) {
    this.loadFile(path, true)
  }
  __loadFileWithCutTrim(path: string, cutTrim: boolean) {
    let fis: FileInputStream
    try {
      fis = new FileInputStream(path)
    } catch (e) {
      throw new FileNotFoundException('cannot find the file in this path')
    }
    this.load(fis, cutTrim)
  }

  getMap(): NativeMap {
    // 以下に必要な手続きを記述してください。
    return this.propList.clone()._toHashMap()
  }

  store(out: OutputStream): void
  store(filename: string): void
  store(arg: OutputStream | string) {
    const isArgAsString = typeof arg === 'string'
    if (isArgAsString) {
      return this.__storeWithFilename(arg)
    }
    return this.__storeWithOutputStream(arg)
  }
  __storeWithOutputStream(out: OutputStream) {
    // 以下に必要な手続きを記述してください。
    //メンバ変数の宣言
    let tempKey: string
    let tempValue: string

    //OutputStreamWriterを作成します
    //OutputStreamWriter osWriter = new OutputStreamWriter(out);
    const buffWriter: BufferedWriter = new BufferedWriter(
      new OutputStreamWriter(out),
    )

    /***********************
     * データの書き込み
     ***********************/

    //JCCプロパティリストのキー一覧を作成します
    const keyList: Enumeration = this.propList.keys()

    //KeyListからJCCプロパティを取り出し、書き込んでいきます
    while (keyList.hasMoreElements()) {
      //keyListからキーと値を一組ずつ取り出します
      tempKey = keyList.nextElement().toString()
      tempValue = this.getString(tempKey)

      //出力準備を行います
      tempKey = this.disableEscapeSeq(tempKey)
      tempValue = this.disableEscapeSeq(tempValue)

      //書き込み処理を行います
      buffWriter.write(tempKey + '=' + tempValue)
      buffWriter.newLine()
    }
    buffWriter.close()
  }
  __storeWithFilename(filename: string) {
    if (filename.equals('') || filename == null)
      throw new NullPointerException('String filename is empty or null')

    const fos: FileOutputStream = new FileOutputStream(filename)
    this.store(fos)
  }

  containsKey(key: string): boolean {
    return this.getString(key) != null ? true : false
  }

  remove(key: string): string {
    return this.propList.remove(key)
  }

  setEncoding(enc: string) {
    this.encoding = enc
  }

  /***************************************************************
   *                    内部メソッド
   ***************************************************************/

  private getProperty(key: string): string {
    // 以下に必要な手続きを記述してください。
    if (key == null) throw new NullPointerException('key is null')
    if (key.equals('')) throw new NullPointerException('key is empty')

    const value: string = String(this.propList.get(key))

    if (value == null)
      throw new NullPointerException('key [' + key + '] is not found')

    return value
  }

  /**
   * 内部メソッドです
   * 渡された文字列からキーと値を取り出します。
   */
  private getDataSet(msg: string): string[] {
    const DataSet: string[] = []

    //1行ずつ呼び出します
    //'='で区切る個所を探します
    const eqindex: number = msg.indexOf('=')

    //'='が見つからなかった時の振る舞い
    if (eqindex == -1) {
      DataSet[0] = msg
      DataSet[1] = ''
    } else {
      //区切り以前と以後で分けます
      DataSet[0] = msg.substring(0, eqindex)
      DataSet[1] = msg.substring(eqindex + 1)
    }
    return DataSet
  }

  /**
   * 内部メソッドです
   * 渡された文字列のエスケープシーケンスを無効にします。
   */
  private disableEscapeSeq(msg: string): string {
    return msg

    // StringBuffer tempMsg= new StringBuffer(32);
    // char tempChar;

    // /********************
    //  * エスケープシーケンス無効化
    //  ********************/

    // for(int index=0 ;index<msg.length(); index++){
    //     //Msgの1文字目を取り出します
    //     tempChar = msg.charAt(index);

    //     /*
    //      * '\'文字を探して、無効化を行います
    //      */
    //     switch(tempChar){
    //         case '\\' :
    //             tempMsg.append("\\\\");
    //             break;
    //         case '\n' :
    //             tempMsg.append("\\n");
    //             break;
    //         case '\t' :
    //             tempMsg.append("\\t");
    //             break;
    //             default   : tempMsg.append(tempChar);
    //     }
    // }
    // return new String(tempMsg);
  }

  /**
   * 内部メソッドです
   * エスケープシーケンスを有効にします。
   */
  private enableEscapeSeq(msg: string): string {
    return msg
    // StringBuffer tempMsg= new StringBuffer(32);
    // char tempChar;

    // /********************
    //  * エスケープシーケンス有効化
    //  ********************/
    // LABEL:
    //     for(int index = 0 ;index < msg.length(); ){

    //         //Msgの1文字目を取り出します
    //         tempChar = msg.charAt(index++);

    //     /*
    //      * '\'があったらその後ろを見て
    //      * エスケープシーケンスに置き換えます
    //      */
    //         if(tempChar == '\\'){

    //             //'\'の次の文字を読み込みます
    //             //もし文字列の最後だった場合は'\'とみなします
    //             tempChar = (index == msg.length()) ?
    //             '\\' :msg.charAt(index++);

    //             switch(tempChar){
    //                 case '\\' : tempChar='\\'; break;
    //                 case 'n' : tempChar='\n'; break;
    //                 case 't' : tempChar='\t'; break;
    //                 default  : tempMsg.append('\\'); break;
    //             }
    //         }
    //         tempMsg.append(tempChar);
    //     }
    //     return new String(tempMsg);
  }

  /**
   * 内部メソッドです
   * loadのときにJCCプロパティをセットします。
   * キーが空のときは例外を投げず処理も行いません
   */
  private setFromFile(key: string, value: string) {
    // 以下に必要な手続きを記述してください。

    //空文字でないキーに強制トリムを行います
    key = key !== '' ? key.trim() : key

    //キーが空列でなければsetします
    if (key?.length && !key.equals('')) this.propList.put(key, value)
  }

  /***************************************************************
   *             テスト用メソッド(完成時には削除)
   ***************************************************************/

  /**
   * テスト用のメソッドです。
   * キーの一覧を表示します
   */
  printKeys() {
    const keyList: Enumeration = this.propList.keys()

    System.out.println('#------Key List------#')
    while (keyList.hasMoreElements()) {
      //keyListからキーと値をひとつずつ取り出します
      System.out.println(keyList.nextElement())
    }
    System.out.println('#--------------------#')
  }

  /**
   * テスト用のメソッドです。
   * JCCプロパティセットの一覧を表示します
   */
  printAll() {
    const keyList: Enumeration = this.propList.keys()
    let tempKey: string
    let tempValue: string
    System.out.println('#--------Properties List-----------#')
    while (keyList.hasMoreElements()) {
      //keyListからキーと値をひとつずつ取り出します
      tempKey = keyList.nextElement().toString()
      tempValue = this.getString(tempKey)

      //書き込み処理を行います
      System.out.println(tempKey + '=' + tempValue)
    }
    System.out.println('#----------------------------------#')
  }

  _getName(): string {
    return 'JCCProperties'
  }

  static _getName(): string {
    return 'JCCProperties'
  }

  _getType() {
    return JCCProperties as any
  }

  _getFullName(): string {
    return 'jcc.util.JCCProperties'
  }

  static _getFullName(): string {
    return 'jcc.util.JCCProperties'
  }
}
