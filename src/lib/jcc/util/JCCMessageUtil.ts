import { Character } from '@/lib/native/lang/Character'
import { IllegalArgumentException } from '@/lib/native/lang/IllegalArgumentException'
import { StringBuffer } from '@/lib/native/lang/StringBuffer'
import type { NativeMap } from '@/lib/native/util/Map'

/**
 * 各種メッセージを管理、取得するためのAPIを提供<br>
 * @author 窪田智子
 * @version 1.0.0
 */
export class JCCMessageUtil {
  /**
   * Mapより、メッセージの管理及び取得を行う
   */
  private static messageUtil: JCCMessageUtil

  /**
   * エラー時の復帰方法を指定<br>
   * checkModeがtureの場合、例外を返し復帰する<br>
   * checkModeがfalseの場合、エラーメッセージを表示もしくは指定メッセージを表示し復帰する<br>
   */
  private checkMode: boolean

  /**
   * エラー復帰方法選択を設定
   * @param checkMode エラー復帰方法選択
   */
  setCheckMode(pcheckMode: boolean) {
    this.checkMode = pcheckMode
  }

  /**
   * メッセージIDをキーに、値にマッピングするオブジェクト<br>
   * マップには、同一のキーを複数登録することできない<br>
   * 各キーは 1 つの値にしかマッピングできない
   */
  map: NativeMap

  /**
   * コンストラクタ
   */
  constructor(map?: NativeMap) {
    if (map) {
      this.map = map
    }
  }

  getMessage(msgID: string): string
  getMessage(msgID: string, detail: string): string
  getMessage(msgID: string, details: string[]): string
  getMessage(...args: any[]) {
    if (args.length === 1) {
      return this.__getMessage(args[0])
    } else if (args.length === 2) {
      if (typeof args[1] === 'string') {
        return this.__getMessageWithDetail(args[0], args[1])
      } else {
        return this.__getMessageWithDetails(args[0], args[1])
      }
    } else {
      throw new IllegalArgumentException('Illegal arguments')
    }
  }

  /**
   * メッセージIDを指定してメッセージ文字列を取得
   * @param msgID メッセージID
   * @return      メッセージ文字列
   */
  private __getMessage(msgID: string): string {
    return this.getMessage(msgID, null!)
  }

  /**
   * メッセージIDと置換文字列を指定してメッセージ文字列を取得
   * @param msgID  メッセージID
   * @param detail 置換する詳細情報
   * @return       メッセージ文字列
   */
  private __getMessageWithDetail(msgID: string, detail: string): string {
    return this.getMessage(msgID, [detail])
  }

  /**
   * メッセージIDと置換文字列を複数指定してメッセージ文字列を取得
   * @param msgID   メッセージID
   * @param details 置換する詳細情報の文字列配列
   * @return        メッセージ文字列
   * @exception     IllegalArgumentException checkModeがtrueの場合
   */
  private __getMessageWithDetails(msgID: string, details: string[]): string {
    //メッセージIDをキーにメッセージを取得
    let msg: string = this.map.get(msgID) as string
    if (msg == null) {
      //メッセージIDが存在しない場合
      if (this.checkMode) {
        throw new IllegalArgumentException('msgID not found. msgID：' + msgID)
      }

      //チェックモードfalse時はmsgIDで復帰
      return msgID
    }

    //出力用メッセージ域
    let outMsg: StringBuffer = new StringBuffer()

    //入力のメッセージより'&'を順次見つけるループ
    for (let i = 0; i < msg.length; ) {
      //'&'文字を検索
      let pos = msg.indexOf('&', i)
      if (pos < 0) {
        //以降に'&'が見つからない場合ループ脱出
        outMsg.append(msg.substring(i))
        break
      }

      //'&'の直前までを出力編集域はコピー
      outMsg.append(msg.substring(i, pos))
      if (pos + 1 >= msg.length) {
        //メッセージ末端に'&'がある場合
        if (this.checkMode) {
          throw new IllegalArgumentException(
            ' message format illegal. msgID： ' + msgID,
          )
        }
        outMsg.append(msg.substring(pos))
        break
      }

      //'&'の次の文字を取り出す
      let c: string = msg.charAt(pos + 1)

      //'&'と続いて出現した場合は、1つの'&'とみなす
      if (c == '&') {
        outMsg.append('&')
        i = pos + 2
        continue
      }

      //'&'の次の文字を取り出して数値へ変換
      let j = Character.getNumericValue(c)
      if (j - 1 < 0) {
        //'&'の次の文字が０〜９でない場合
        if (this.checkMode) {
          throw new IllegalArgumentException(
            ' message format illegal. msgID： ' + msgID,
          )
        }
        outMsg.append('&')
        i = pos + 1
        continue
      }

      //渡された引数と&要素数が一致しているか
      if (details == null || j - 1 >= details.length) {
        //要素数が一致しない場合
        if (this.checkMode) {
          throw new IllegalArgumentException(
            ' detail index short. msgID： ' + msgID,
          )
        }

        //チェックモードfalse時は&のまま編集
        outMsg.append(msg.substring(pos, pos + 2))
        i = pos + 2
        continue
      }

      //置換編集
      outMsg.append(details[j - 1])
      i = pos + 2
    }
    return outMsg.toString()
  }

  _getName(): string {
    return 'JCCMessageUtil'
  }

  static _getName(): string {
    return 'JCCMessageUtil'
  }

  _getType() {
    return JCCMessageUtil as any
  }

  _getFullName(): string {
    return 'jcc.util.JCCMessageUtil'
  }

  static _getFullName(): string {
    return 'jcc.util.JCCMessageUtil'
  }
}
