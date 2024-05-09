import { Color } from '@/lib/native/awt/Color'

/**
 * スプレッドの背景色を変更するクラスです。border-type
 */
export class SMSSpreadColorUtil {
  //SMSJCFSpreadモード
  private mode: number

  //static boolean initColorFlg;

  private static initColorFlg: boolean

  /**
   * 拡張）背景色を変更します。border-type
   * @param spread
   * @param color
   */
  evenRowBackColorChange(spread: SMSJCFSpread, color: Color) {
    let columns: string[] = spread.column_names

    //TODO:プロパティファイルより取得
    let bgcolor: Color
    let iMode: number = this.getSetSpreadMode()

    if (iMode == 1 && this.isSetInitColorFlg()) {
      //偶数行の背景色を変える。
      for (let row = 0; row < spread.getRowCount(); row++) {
        for (let i = 0; i < columns.length; i++) {
          if (row % 2 == 0) {
            bgcolor = Color.WHITE
            spread.setCellBackground(row, columns[i], bgcolor)
          } else {
            bgcolor = color
            spread.setCellBackground(row, columns[i], bgcolor)
          }
        }
      }
    } else if (this.mode == 2) {
      // 何もしない！
    }
  }

  /**
   * コンボボックスにチェックされている場合、
   * チェックされたrecordの行の色を変更します。border-type
   * @param extendSpread
   * @param row
   * @param value	変更後の色
   * @param target	変更の対象になる色
   */
  //	checkedRowColorChange( SMSJCFSpreadExtend extendSpread,
  checkedRowColorChange(
    extendSpread: SMSJCFSpread,
    row: number,
    value: Color,
    target: Color,
  ) {
    // SMSJCFSpreadの拡張モード(SMSJCFSpreadExtend)
    //mode = 2;

    //Color bgcolor = color;

    if (this.getSetSpreadMode() === 2) {
      for (let i = 0; i < extendSpread.getColumnCount(); i++) {
        if (
          extendSpread.getCellBackground(row, i).getRGB() == target.getRGB()
        ) {
          extendSpread.setCellBackground(row, i, value)
        }
      }
    }
  }

  /**
   * setInitColorFlgプロパティを取得します。
   */
  isSetInitColorFlg(): boolean {
    //System.out.println("SMSSpreadColorUtil#isSetInitColorFlg ()   initColorFlg = " + initColorFlg );
    return SMSSpreadColorUtil.initColorFlg
  }

  /**
   * setInitColorFlgプロパティを設定します。
   */
  setSetInitColorFlg(newValue: boolean) {
    //System.out.println("SMSSpreadColorUtil#setSetInitColorFlg()   newValue = " + newValue );
    SMSSpreadColorUtil.initColorFlg = newValue
    //System.out.println("SMSSpreadColorUtil#setSetInitColorFlg()   initColorFlg = " + initColorFlg );
  }

  /**
   * setSpreadModeプロパティを取得します。
   */
  getSetSpreadMode(): number {
    return this.mode
  }

  /**
   * setSpreadModeプロパティを設定します。
   */
  setSetSpreadMode(newValue: number) {
    this.mode = newValue
  }
}
