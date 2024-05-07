import { HashMap } from '@/lib/native/util/HashMap'
import { Vector } from '@/lib/native/util/Vector'
import { createStringArray } from '@/utils/array/1D'

export class SMSSpreadTools {
  smsSpread: SMSJCFSpread

  /** 一つ結合行の中で、含めている行数 */
  unionCellCnt: number
  /** 列名のレコードセット */
  private recordSet: string[][]
  /** 前回セルレコード内上下位置 */
  cellRecordRowPosition: number

  /**
   * 初期化処理をします。(コンストラクト)<BR>
   * @param spread スプレッドオブジェクト
   */
  constructor(spread: SMSJCFSpread) {
    this.smsSpread = spread

    //結合している行数を取得する
    this.unionCellCnt = spread.getRecordRows()
    this.unionCellCnt = this.unionCellCnt == 0 ? 1 : this.unionCellCnt
  }

  /**
   * 部品のプロパティーcolumn_namesを初期化します。<BR>
   * 結合していないスプレット用です。<BR>
   */
  initColumnNames() {
    let hm_temp: HashMap = new HashMap()
    let vc: Vector = new Vector()
    let idx: number = 0

    for (let j = 0; j < this.unionCellCnt; j++) {
      for (let i = 0; i < this.smsSpread.getColumnCount(); i++) {
        let column_name: string = this.smsSpread.getColumnName(j, i)

        if (!hm_temp.containsKey(column_name)) {
          hm_temp.put(column_name, column_name)
          vc.add(idx++, column_name)
        }
      }
    }

    this.smsSpread.column_names = createStringArray(hm_temp.size())

    for (let i = 0; i < this.smsSpread.column_names.length; i++) {
      this.smsSpread.column_names[i] = vc.get(i) as string
    }
  }

  /**
   * 部品のプロパティーcolumn_namesを初期化します。<BR>
   * 結合しているスプレット用です。<BR>
   */
  initUnionColumnNames() {
    let hm_temp: HashMap = new HashMap()
    let vc: Vector = new Vector()
    let idx: number = 0

    let recordSet: string[][] = this.smsSpread.getRecordSet()

    for (let i = 0; i < recordSet.length; i++) {
      for (let j = 0; j < recordSet[i].length; j++) {
        let column_name: string = recordSet[i][j]

        if (!hm_temp.containsKey(column_name)) {
          hm_temp.put(column_name, column_name)
          vc.add(idx++, column_name)
        }
      }
    }

    this.smsSpread.column_names = createStringArray(hm_temp.size())

    for (let i = 0; i < this.smsSpread.column_names.length; i++) {
      this.smsSpread.column_names[i] = vc.get(i) as string
    }
  }

  /**
   * 最後から、入力できる列の番号を探し、見つからないと、−１戻します。<BR>
   * @return	serial
   */
  getLastEditableColumn(): number {
    let serial: number = -1
    for (let i = this.smsSpread.column_names.length - 1; i >= 0; i--) {
      if (this.getColumnEditable(i)) {
        serial = i
        break
      }
    }
    return serial
  }

  /**
   * 列の編集可否を取得します。<BR>
   * @param idx
   * @return	ret
   */
  getColumnEditable(idx: number): boolean {
    let ret: boolean = true
    ret = this.smsSpread
      .getHeaderAndColumnProperty()
      .getColumns()
      .getColumnInfo(idx)
      .isEditable()
    return ret
  }

  /**
   * 右に移動します。<BR>
   */
  rightMoveFocus() {
    this.moveFocus(1)
  }

  /**
   * フォーカスを移動します。<BR>
   * @param int direction 1:右 2:
   */
  private moveFocus(direction: number) {
    //遷移元カーソルの選択解除
    // 2007.08.01 Mod start
    //smsSpread.deselectCell(smsSpread.getPosition().row , smsSpread.getPosition().column);
    // 2007.08.01 Mod end

    //カーソル遷移
    let row: number = this.smsSpread.getPosition().row
    let column: number = this.smsSpread.getPosition().column
    let posi: number[] = [row, column]

    //編集不可なら未処理
    if (!this.getSpreadEditable()) {
      return
    }

    // 2007.08.01 Mod start
    // Enterキーによるカーソル移動時に、選択状態のセルを解除する
    this.smsSpread.allCellDeselect()
    // 2007.08.01 Mod end

    //2007.01.18 change start
    //ループ終了条件を追加
    //break条件の見直しに伴い、現在のセル位置までセル移動判定処理が続いた場合に
    //終了するように変更(スプレッド内のセルが全て編集不可状態の場合の無限ループ回避)
    //セル移動ループ処理実行フラグ
    let loopFlag: boolean = false

    for (;;) {
      //ループ処理を実行した際に、trueに変更
      if (!loopFlag) {
        loopFlag = true
      } else {
        //同じセルまでチェックが続いた場合、
        //強制的にループ処理を終了
        if (posi[0] == row && posi[1] == column) {
          return
        }
      }
      //2007.01.18 change end

      posi = this.getNextCell(direction, posi[0], posi[1])

      //2007.01.18 change start
      //break実行前に、編集可能セルか確認が必要
      //その実装を追加した場合、下記ロジックは不必要な為、コメントアウト。
      /*
			//最終チェック
			//右移動
			if(direction == 1){
				//左端先頭行
				if(posi[0]==0 && posi[1]==0){
					break;
				}
			//左移動
			}else{
				if(smsSpread.isRecordMode()){
					//右端最終行
					if(posi[0] == smsSpread.getRowCount() * smsSpread.getRecordRows() -1 && posi[1]==recordSet[0].length-1){
						break;
					}
				}else{
					//右端最終行
					if(posi[0] == smsSpread.getRowCount() -1 && posi[1]==smsSpread.getColumnCount()-1){
						break;
					}
				}
			}
*/
      //2007.01.18 change end

      let nextCell: CJCell = this.smsSpread.getCell(posi[0], posi[1])

      //上下同一セルなら上段セルを取得
      if (this.smsSpread.isRecordMode()) {
        if (this.recordSet[0][posi[1]].equals(this.recordSet[1][posi[1]])) {
          nextCell = this.smsSpread.getCell(
            this.getUpperRowNumber(posi[0]),
            posi[1],
          )
        }
      }

      //2007.01.18 change start
      //RuntimeExceptionをcatchしないように変更
      /*
			//編集可能なら終了
			try {
				if(nextCell.isEditable()){
					break;
				}
			} catch (RuntimeException ignore) {
			}
*/
      //編集可能なら終了
      if (nextCell.isEditable()) {
        break
      }
      //2007.01.18 change end
    }

    //フォーカス移動
    if (this.smsSpread.isRecordMode()) {
      this.smsSpread.setPosition(
        this.getRecordNumber(posi[0]),
        this.recordSet[this.getRecordRowNumber(posi[0])][posi[1]],
      )
    } else {
      this.smsSpread.setPosition(posi[0], this.smsSpread.getColumnName(posi[1]))
    }

    this.smsSpread.selectCell(
      this.smsSpread.getPosition().row,
      this.smsSpread.getPosition().column,
    )
    //thisSpread.setCellBackground(rowI,column_name,new Color(0,0,0));

    // 2007.08.01 Mod start
    //		if (!smsSpread.isInside(smsSpread.getPosition().row, smsSpread.getPosition().column)) {
    //			smsSpread.jump(smsSpread.getPosition().row, smsSpread.getPosition().column);
    //		}
    this.smsSpread.jump(
      this.smsSpread.getPosition().row,
      this.smsSpread.getPosition().column,
    )
    // 2007.08.01 Mod end
  }

  /**
   * 左に移動します。<BR>
   */
  leftMoveFocus() {
    this.moveFocus(2)
  }

  /**
   * 次行の先頭に行きます。<BR>
   */
  nextRowFirstCell() {
    let new_row: number = 0
    let new_columnName: string = ''

    //カーソル遷移
    if (
      this.smsSpread.getPosition().row / this.unionCellCnt <
      this.smsSpread.getRecordCount() - 1
    ) {
      this.smsSpread.deselectCell(
        this.smsSpread.getPosition().row,
        this.smsSpread.getPosition().column,
      )

      // 段組時の対応 #2006.06.12修正
      new_row = this.smsSpread.getPosition().row + this.unionCellCnt
      //			this.smsSpread.setPosition(new_row , new_columnName);
      this.smsSpread.setPosition(new_row, 0)
      this.smsSpread.selectCell(
        this.smsSpread.getPosition().row,
        this.smsSpread.getPosition().column,
      )
      this.smsSpread.jump(
        this.smsSpread.getPosition().row,
        this.smsSpread.getPosition().column,
      )
    }
  }

  /**
   * Ctrl+Homeキーを押下した場合、<BR>
   * セルフォーカスを一行の最初セルに移動します。<BR>
   */
  initFirstCell() {
    this.smsSpread.deselectCell(
      this.smsSpread.getPosition().row,
      this.smsSpread.getPosition().column,
    )

    this.smsSpread.setPosition(0, 0)
    this.smsSpread.selectCell(
      this.smsSpread.getPosition().row,
      this.smsSpread.getPosition().column,
    )
    this.smsSpread.jump(
      this.smsSpread.getPosition().row,
      this.smsSpread.getPosition().column,
    )
  }

  /**
   * 列の編集可否を取得します。<BR>
   * @return	ret
   */
  getSpreadEditable(): boolean {
    let ret: boolean = false
    let column_: boolean = false

    for (let i = 0; i < this.smsSpread.column_names.length; i++) {
      column_ = this.smsSpread
        .getHeaderAndColumnProperty()
        .getColumns()
        .getColumnInfo(this.smsSpread.column_names[i])
        .isEditable()
      ret = ret || column_
      if (ret) break
    }

    return ret
  }

  /**
   * 上に移動します。<BR>
   */
  upMoveFocus() {
    //カーソル遷移
    if (this.smsSpread.getPosition().row > 0) {
      //遷移元カーソルの選択解除
      this.smsSpread.deselectCell(
        this.smsSpread.getPosition().row,
        this.smsSpread.getPosition().column,
      )
      this.smsSpread.setPosition(
        this.smsSpread.getPosition().row - 1,
        this.smsSpread.getPosition().column,
      )
      this.smsSpread.selectCell(
        this.smsSpread.getPosition().row,
        this.smsSpread.getPosition().column,
      )
    }
  }

  /**
   * 列名を戻します。<BR>
   * @return	column_names[]
   */
  getsetColumnNamesMap(): string[] {
    return this.smsSpread.column_names
  }

  /**
   * 遷移先行番号、列番号を返します。<BR>
   * @param direction 1： 右移動  2： 左移動
   * @param row 行番号
   * @param column 列番号
   * @return	int[] 0:行番号、1:列番号
   */
  private getNextCell(
    direction: number,
    row: number,
    column: number,
  ): number[] {
    //レコードモード（段組か）チェック
    if (this.smsSpread.isRecordMode()) {
      return this.getNextCellRecordMode(direction, row, column)
    } else {
      return this.getNextCellSingleMode(direction, row, column)
    }
  }

  /**
   * 遷移先行番号、列番号を返します。<BR>
   * @param direction 1： 右移動  2： 左移動
   * @param row 行番号
   * @param column 列番号
   * @return	int[] 0:行番号、1:列番号
   */
  private getNextCellRecordMode(
    direction: number,
    row: number,
    column: number,
  ): number[] {
    let rtn: number[] = [row, column]

    //段組の場合
    if (this.smsSpread.isRecordMode()) {
      //列名レコードセット取得
      this.recordSet = this.smsSpread.getRecordSet()
      //レコード行位置を保持する
      if (!this.recordSet[0][column].equals(this.recordSet[1][column])) {
        this.cellRecordRowPosition = this.getRecordRowNumber(row)
      } else {
        //上下同一セルの場合、前回のレコード行位置を加算する
        rtn[0] = this.getUpperRowNumber(rtn[0]) + this.cellRecordRowPosition
      }
    }

    //右移動
    if (direction == 1) {
      //右端なら
      if (column == this.recordSet[0].length - 1) {
        //改行処理
        rtn = this.getNextRecordCellPosition(direction, rtn[0], rtn[1])
      } else {
        //左右同一セルチェック前
        let beforeCheckColumn: number = rtn[1]
        //左右同一セルチェック
        rtn = this.getHorizontallyMatchCellPosition(direction, rtn[0], rtn[1])
        //左右同一セルで右端なら
        if (
          beforeCheckColumn != rtn[1] &&
          rtn[1] == this.recordSet[0].length - 1
        ) {
          rtn = this.getNextRecordCellPosition(direction, rtn[0], rtn[1])
        } else {
          //右移動
          rtn[1]++
        }
      }
    } else {
      //左端なら
      if (column == 0) {
        //改行処理
        rtn = this.getNextRecordCellPosition(direction, rtn[0], rtn[1])
      } else {
        //左移動
        rtn[1]--
        //左右同一セルチェック前
        let beforeCheckColumn: number = rtn[1]
        //左右同一セルチェック
        rtn = this.getHorizontallyMatchCellPosition(direction, rtn[0], rtn[1])
      }
    }

    return rtn
  }

  /**
   * 遷移先行番号、列番号を返します。<BR>
   * @param direction 1： 右移動  2： 左移動
   * @param row 行番号
   * @param column 列番号
   * @return	int[] 0:行番号、1:列番号
   */
  private getNextCellSingleMode(
    direction: number,
    row: number,
    column: number,
  ): number[] {
    let rtn: number[] = [row, column]

    //右移動
    if (direction == 1) {
      //右端なら
      if (column == this.smsSpread.getColumnCount() - 1) {
        rtn[0]++ //1行下に移動
        //最終行
        if (rtn[0] > this.smsSpread.getRecordCount() - 1) {
          rtn[0] = 0
        }
        rtn[1] = 0 //先頭列
      } else {
        rtn[1]++
      }
    } else {
      //左端なら
      if (column == 0) {
        rtn[0]-- //1行上に移動
        //先頭行
        if (rtn[0] < 0) {
          rtn[0] = this.smsSpread.getRecordCount() - 1
        }
        rtn[1] = this.smsSpread.getColumnCount() - 1 //最終列
      } else {
        rtn[1]-- //左へ
      }
    }
    return rtn
  }

  /**
   * 上下同一セルの場合の有効な行番号を返します。<BR>
   * @param row
   * @return	int 行番号
   */
  private getUpperRowNumber(row: number): number {
    return row - (row % this.recordSet.length)
  }

  /**
   * 行番号からレコード番号を返します。<BR>
   * @param row　行番号
   * @return	int レコード番号
   */
  private getRecordNumber(row: number): number {
    //レコードモードなら
    if (this.smsSpread.isRecordMode()) {
      return row / this.recordSet.length
    } else {
      return row
    }
  }

  /**
   * 現在行がレコード中何行目かを返します。<BR>
   * 2段組のスプレッドの場合、0-1が返ってきます。
   * @param row　行番号
   * @return	int レコード番号
   */
  private getRecordRowNumber(row: number): number {
    //レコードモードなら
    if (this.smsSpread.isRecordMode()) {
      return row % this.recordSet.length
    } else {
      return 0
    }
  }

  /**
   * 改行後のセル位置を返します。<BR>
   * @param direction 1： 右移動  2： 左移動
   * @param row 行番号
   * @param column 列番号
   * @return	int[] 0:行番号、1:列番号
   */
  private getNextRecordCellPosition(
    direction: number,
    row: number,
    column: number,
  ): number[] {
    let rtn: number[] = [row, column]

    if (direction == 1) {
      //レコード行位置加算
      this.cellRecordRowPosition =
        this.cellRecordRowPosition + 1 > this.recordSet.length - 1
          ? 0
          : ++this.cellRecordRowPosition

      rtn[0]++ //1行下に移動
      //最終行
      if (
        rtn[0] >
        this.smsSpread.getRecordCount() * this.recordSet.length - 1
      ) {
        rtn[0] = 0
      }
      rtn[1] = 0 //先頭列
    } else {
      //レコード行位置減算
      this.cellRecordRowPosition =
        this.cellRecordRowPosition - 1 < 0
          ? this.recordSet.length - 1
          : --this.cellRecordRowPosition

      rtn[0]-- //1行上に移動

      //先頭行
      if (rtn[0] < 0) {
        rtn[0] = this.smsSpread.getRecordCount() * this.recordSet.length - 1
      }
      rtn[1] = this.recordSet[0].length - 1 //最終列

      //左端セルの場合左右同一セルの端位置を取得
      rtn = this.getHorizontallyMatchCellPosition(direction, rtn[0], rtn[1])
    }

    return rtn
  }

  /**
   * 左右同一セルの端位置を返します。<BR>
   * @param direction 1： 右移動  2： 左移動
   * @param row 行番号
   * @param column 列番号
   * @return	int[] 0:行番号、1:列番号
   */
  private getHorizontallyMatchCellPosition(
    direction: number,
    row: number,
    column: number,
  ): number[] {
    let rtn: number[] = [row, column]

    if (direction == 1) {
      for (let i = rtn[1] + 1; i < this.recordSet[0].length; i++) {
        //右セルも同じ名前なら移動
        if (
          this.recordSet[this.getRecordRowNumber(rtn[0])][rtn[1]].equals(
            this.recordSet[this.getRecordRowNumber(rtn[0])][i],
          )
        ) {
          rtn[1] = i
        } else {
          break
        }
      }
    } else {
      for (let i = rtn[1] - 1; i > -1; i--) {
        //左セルも同じ名前なら移動
        if (
          this.recordSet[this.getRecordRowNumber(rtn[0])][rtn[1]].equals(
            this.recordSet[this.getRecordRowNumber(rtn[0])][i],
          )
        ) {
          rtn[1] = i
        } else {
          break
        }
      }
    }
    return rtn
  }
}
