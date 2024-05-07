export class SMSJFTreeColumnData {
  /**
   *	変数
   */
  //列番号
  private columnNo: number
  //列幅
  private columnWidth: number
  //ヘッダ文字列
  private headerString: string

  /**
   * ディフォルトコンストラクタ
   * 空の列情報定義オブジェクトを生成します。
   */
  constructor()
  /**
   * コンストラクタ
   *
   * @param	columnNo		列番号
   * @param	columnWidth		列幅
   * @param	headerString	ヘッダ文字列
   */
  constructor(columnNo: number, columnWidth: number, headerString: string)
  constructor(...args: any[]) {
    if (args.length === 0) {
      this.columnWidth = 0
      this.headerString = ''
    } else {
      this.columnNo = args[0]
      this.columnWidth = args[1]
      this.headerString = args[2]
    }
  }

  /**
   * 列番号を取得します。
   *
   * @return 列番号
   */
  public getColumnNo(): number {
    return this.columnNo
  }

  /**
   * 列番号を設定します。
   *
   * @param columnNo 列番号
   */
  public setColumnNo(columnNo: number): void {
    this.columnNo = columnNo
  }

  /**
   * 列幅を取得します。
   *
   * @return 列幅
   */
  public getColumnWidth(): number {
    return this.columnWidth
  }

  /**
   * 列幅を設定します。
   *
   * @param columnWidth 列幅
   */
  public setColumnWidth(columnWidth: number): void {
    this.columnWidth = columnWidth
  }

  /**
   * ヘッダ文字列を取得します。
   *
   * @return ヘッダ文字列
   */
  public getHeaderString(): string {
    return this.headerString
  }

  /**
   * ヘッダ文字列を設定します。
   *
   * @param headerString ヘッダ文字列
   */
  public setHeaderString(headerString: string): void {
    this.headerString = headerString
  }

  _getName(): string {
    return 'SMSJFTreeColumnData'
  }

  static _getName(): string {
    return 'SMSJFTreeColumnData'
  }

  _getType() {
    return SMSJFTreeColumnData as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSJFTreeColumnData'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSJFTreeColumnData'
  }
}
