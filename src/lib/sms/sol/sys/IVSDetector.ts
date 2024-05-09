/**
 * IVSを含む可能性のある文字列に関する以下のメソッドを提供する。<br>
 *  ・IVS存在チェック<br>
 *  ・IVS置換<br>
 *  ・IVS削除<br>
 *  ・IVS一覧出力<br>
 *  ・IVS基底変換<br>
 *  ・文字数獲得<br>
 * 提供メソッド詳細については後述のメソッド概要を参照。
 * <p>
 * 本機能でIVSの検出対象とする入力文字は以下の通りである。
 *<table border=4 width=50 align=left>
 * <caption>【IVSチェック対象文字】  </caption>
 * <tr bgcolor="#b0e0e6" align=left>
 *  <th>文字</th>
 *  <th>コードポイント</th>
 * </tr>
 * <tr align=left>
 *  <td>CJK統合漢字拡張A</td>
 *  <td>U+3400〜U+4DBF</td>
 * </tr>
 * <tr align=left>
 *  <td>CJK統合漢字</td>
 *  <td>U+4E00〜U+9FCF</td>
 * </tr>
 * <tr align=left>
 *  <td>追加面(2面)のCJK統合漢字拡張Bの一部</td>
 *  <td>Unicode3.1で追加された303文字</td>
 * </tr>
 *</table>
 * <p>
 * CJK漢字には日本語以外の文字も定義されている。IVSの基底文字と見なせるかどうかを
 * 判別するにあたり、日本の規格の文字であるかどうかは区別しない。
 * それぞれのブロックの範囲内にあるかどうかで判断する。
 * <br>ただしCJK統合漢字拡張Bについては例外で、個別に日本の規格の文字
 * であるかどうかを判断している。
 *
 * @version IVS操作プログラム v1.1
 */

import { Character } from '@/lib/native/lang/Character'
import { UnicodeBlock } from '@/lib/native/lang/Character/UnicodeBlock'
import { IllegalArgumentException } from '@/lib/native/lang/IllegalArgumentException'
import { NullPointerException } from '@/lib/native/lang/NullPointerException'
import { NativeString } from '@/lib/native/lang/String'
import { StringBuffer } from '@/lib/native/lang/StringBuffer'
import { ArrayList } from '@/lib/native/util/ArrayList'
import { Arrays } from '@/lib/native/util/Arrays'
import type { List } from '@/lib/native/util/List'
import { createNumberArray } from '@/utils/array/1D'

/**CJK統合漢字拡張Bに属する、Unicode3.1で追加された303文字を
 * 扱うための内部クラス
 */
class IVSCodePointChecker {
  /**
   * 追加面2面に収容されたCJK統合漢字拡張Bの一部のコードポイント（303文字分）の配列。<p>
   * 追加等変更する場合はコードポイントが昇順になるように留意すること
   */
  private static Plane2TaisyoKanji: number[] = [
    0x2000b, 0x20089, 0x200a2, 0x200a4, 0x201a2, 0x20213, 0x2032b, 0x20371,
    0x20381, 0x203f9, 0x2044a, 0x20509, 0x205d6, 0x20628, 0x2074f, 0x20807,
    0x2083a, 0x208b9, 0x2097c, 0x2099d, 0x20ad3, 0x20b1d, 0x20b9f, 0x20d45,
    0x20de1, 0x20e64, 0x20e6d, 0x20e95, 0x20f5f, 0x21201, 0x2123d, 0x21255,
    0x21274, 0x2127b, 0x212d7, 0x212e4, 0x212fd, 0x2131b, 0x21336, 0x21344,
    0x213c4, 0x2146d, 0x2146e, 0x215d7, 0x21647, 0x216b4, 0x21706, 0x21742,
    0x218bd, 0x219c3, 0x21c56, 0x21d2d, 0x21d45, 0x21d62, 0x21d78, 0x21d92,
    0x21d9c, 0x21da1, 0x21db7, 0x21de0, 0x21e33, 0x21e34, 0x21f1e, 0x21f76,
    0x21ffa, 0x2217b, 0x22218, 0x2231e, 0x223ad, 0x226f3, 0x2285b, 0x228ab,
    0x2298f, 0x22ab8, 0x22b46, 0x22b4f, 0x22b50, 0x22ba6, 0x22c1d, 0x22c24,
    0x22de1, 0x231b6, 0x231c3, 0x231c4, 0x231f5, 0x23372, 0x233d0, 0x233d2,
    0x233d3, 0x233d5, 0x233da, 0x233df, 0x233e4, 0x2344a, 0x2344b, 0x23451,
    0x23465, 0x234e4, 0x2355a, 0x23594, 0x235c4, 0x23638, 0x23639, 0x2363a,
    0x23647, 0x2370c, 0x2371c, 0x2373f, 0x23763, 0x23764, 0x237e7, 0x237ff,
    0x23824, 0x2383d, 0x23a98, 0x23c7f, 0x23cfe, 0x23d00, 0x23d0e, 0x23d40,
    0x23dd3, 0x23df9, 0x23dfa, 0x23f7e, 0x24096, 0x24103, 0x241c6, 0x241fe,
    0x243bc, 0x24629, 0x246a5, 0x247f1, 0x24896, 0x24a4d, 0x24b56, 0x24b6f,
    0x24c16, 0x24d14, 0x24e0e, 0x24e37, 0x24e6a, 0x24e8b, 0x2504a, 0x25055,
    0x25122, 0x251a9, 0x251cd, 0x251e5, 0x2521e, 0x2524c, 0x2542e, 0x2548e,
    0x254d9, 0x2550e, 0x255a7, 0x25771, 0x257a9, 0x257b4, 0x259c4, 0x259d4,
    0x25ae3, 0x25ae4, 0x25af1, 0x25bb2, 0x25c4b, 0x25c64, 0x25da1, 0x25e2e,
    0x25e56, 0x25e62, 0x25e65, 0x25ec2, 0x25ed8, 0x25ee8, 0x25f23, 0x25f5c,
    0x25fd4, 0x25fe0, 0x25ffb, 0x2600c, 0x26017, 0x26060, 0x260ed, 0x26270,
    0x26286, 0x2634c, 0x26402, 0x2667e, 0x266b0, 0x2671d, 0x268dd, 0x268ea,
    0x26951, 0x2696f, 0x269dd, 0x26a1e, 0x26a58, 0x26a8c, 0x26ab7, 0x26aff,
    0x26c29, 0x26c73, 0x26cdd, 0x26e40, 0x26e65, 0x26f94, 0x26ff6, 0x26ff7,
    0x26ff8, 0x270f4, 0x2710d, 0x27139, 0x273da, 0x273db, 0x273fe, 0x27410,
    0x27449, 0x27614, 0x27615, 0x27631, 0x27684, 0x27693, 0x2770e, 0x27723,
    0x27752, 0x27985, 0x27a84, 0x27bb3, 0x27bbe, 0x27bc7, 0x27cb8, 0x27da0,
    0x27e10, 0x27fb7, 0x2808a, 0x280bb, 0x28277, 0x28282, 0x282f3, 0x283cd,
    0x2840c, 0x28455, 0x2856b, 0x285c8, 0x285c9, 0x286d7, 0x286fa, 0x28946,
    0x28949, 0x2896b, 0x28987, 0x28988, 0x289ba, 0x289bb, 0x28a1e, 0x28a29,
    0x28a43, 0x28a71, 0x28a99, 0x28acd, 0x28add, 0x28ae4, 0x28bc1, 0x28bef,
    0x28d10, 0x28d71, 0x28dfb, 0x28e1f, 0x28e36, 0x28e89, 0x28eeb, 0x28f32,
    0x28ff8, 0x292a0, 0x292b1, 0x29490, 0x295cf, 0x2967f, 0x296f0, 0x29719,
    0x29750, 0x298c6, 0x29a72, 0x29ddb, 0x29e15, 0x29e3d, 0x29e49, 0x29e8a,
    0x29ec4, 0x29edb, 0x29ee9, 0x29fce, 0x2a01a, 0x2a02f, 0x2a082, 0x2a0f9,
    0x2a190, 0x2a38c, 0x2a437, 0x2a5f1, 0x2a602, 0x2a61a, 0x2a6b2,
  ]

  /**入力されたコードポイントがUnicode3.1で追加面2面に追加された303文字であるかどうかを判定する。
   *
   * @param CodePoint　検査対象となるコードポイント
   * @return Unicode3.1で追加されたサロゲートペア文字であればtrue。そうでなければfalse。
   */
  static isPlane2TaisyoKanji(CodePoint: number): boolean {
    if (Arrays.binarySearch(this.Plane2TaisyoKanji, CodePoint) < 0) {
      //発見できず
      return false
    }
    return true
  }

  _getName(): string {
    return 'IVSCodePointChecker'
  }

  static _getName(): string {
    return 'IVSCodePointChecker'
  }

  _getType() {
    return IVSCodePointChecker as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.IVSDetector'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.IVSDetector'
  }
}

export class IVSDetector {
  /**
   * IVSを含む。
   */
  static CONTAINS_IVS_CHARACTERS = 1
  /**
   * IVSを含まない。
   */
  static NO_IVS_CHARACTERS = 0
  /**
   * 先頭がVSで始まる不正な文字列である。
   */
  static ERROR_VSCODEPOINT_AT_LEADING_ELEMENT = -1
  /**
   * VSが連続している不正な文字列である。
   */
  static ERROR_CONSECUTIVE_VSCODEPOINT = -2
  /**
   * CJK統合漢字、CJK統合漢字拡張A、または特定のCJK統合漢字拡張Bのいずれでもない文字である。
   */
  static ERROR_VSCODEPOINT_NOT_WITH_CJK = -3

  /**
   * 文字列にIVSを含むかどうかを判定する。<br>
   * IVSを含む場合、基底文字がCJK統合漢字、CJK統合漢字拡張A、追加面(2面)の
   * CJK統合漢字拡張Bの一部（Unicode3.1で追加された303文字)であるかどうかを判定する。
   * 不正なIVSを検出した場合は、値が0未満の戻り値を返す。
   * @param text 判定対象の文字列。
   * @return 入力文字列に対して、以下の戻り値を返す。<p>
   * CONTAINS_IVS_CHARACTERS・・・IVSを含む<p>
   * NO_IVS_CHARACTERS・・・IVSを含まない<p>
   * ERROR_VSCODEPOINT_AT_LEADING_ELEMENT・・・文字列の先頭がVSで始まる<p>
   * ERROR_CONSECUTIVE_VSCODEPOINT・・・VSが連続している<p>
   * ERROR_VSCODEPOINT_NOT_WITH_CJK・・・基底文字がCJK統合漢字、CJK統合漢字拡張A、
   * CJK統合漢字拡張Bの一部でない<p>
   * @throws NullPointerException 引数がnullのとき。
   */
  static containsIVS(text: string): number {
    if (text == null) throw new NullPointerException('text')

    let IVSflag: boolean = false

    if (text.length == 0) {
      return IVSDetector.NO_IVS_CHARACTERS
    }

    let cpArray: number[] = this.getCodePointArray(text)
    let cpSupl: IVSCodePointChecker = new IVSCodePointChecker()

    if (
      UnicodeBlock.of(cpArray[0]) == UnicodeBlock.VARIATION_SELECTORS_SUPPLEMENT
    ) {
      //先頭要素がVS文字
      return this.ERROR_VSCODEPOINT_AT_LEADING_ELEMENT
    }

    //VSの存在有無を判定する
    for (let i = 1; i < cpArray.length; i++) {
      //VS17〜VS256の検出
      //VS17:U+E0100 VS256:U+E01EF
      if (
        UnicodeBlock.of(cpArray[i]) ==
        UnicodeBlock.VARIATION_SELECTORS_SUPPLEMENT
      ) {
        IVSflag = true
        //VSが連続した場合はエラー
        if (
          UnicodeBlock.of(cpArray[i - 1]) ==
          UnicodeBlock.VARIATION_SELECTORS_SUPPLEMENT
        ) {
          return this.ERROR_CONSECUTIVE_VSCODEPOINT
        }

        //基底文字がCJK統合漢字拡張A、CJK統合漢字、CJK統合漢字拡張Bの一部
        //以外の場合、不正なIVS文字としてエラーとする
        if (
          UnicodeBlock.of(cpArray[i - 1]) !=
            UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS &&
          UnicodeBlock.of(cpArray[i - 1]) !=
            UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A &&
          IVSCodePointChecker.isPlane2TaisyoKanji(cpArray[i - 1]) != true
        ) {
          return this.ERROR_VSCODEPOINT_NOT_WITH_CJK
        }
      }
    }

    if (IVSflag == true) {
      //IVSを含む
      return this.CONTAINS_IVS_CHARACTERS
    } else {
      //IVSを含まない
      return this.NO_IVS_CHARACTERS
    }
  }

  /**
   * 文字列中のIVSを一覧として取り出す。
   *
   * @param text 入力文字列。
   * @return IVS文字の一覧。IVSを一つも含まない場合はnullを返す。
   * @throws NullPointerException 引数がnullのとき。
   */
  static listIVS(text: string): List<string> | null {
    if (text == null) throw new NullPointerException('text')

    if (text.length == 0) {
      return null
    }

    let list: List<string> = new ArrayList<string>()
    let cpArray: number[] = this.getCodePointArray(text)

    //コードポイント配列要素の先頭からlength-2番目までが探索対象
    //最終要素がVSでなければ異字形でないためリスト化対象外である
    for (let i = 0; i < cpArray.length - 1; i++) {
      //VS判定
      if (
        UnicodeBlock.of(cpArray[i]) ==
        UnicodeBlock.VARIATION_SELECTORS_SUPPLEMENT
      ) {
        //異字体は基底文字＋VSであるため、対象配列要素がVSである場合は処理しない。
        continue
      }

      if (
        UnicodeBlock.of(cpArray[i + 1]) ==
        UnicodeBlock.VARIATION_SELECTORS_SUPPLEMENT
      ) {
        //直前が基底文字となるため、VS文字と基底文字セットでIVSを生成
        let str: string = NativeString.fromIntArrayAndOffsetAndLength(
          cpArray,
          i,
          2,
        )
        list.add(str)
      }
    }

    if (list.isEmpty() == true) {
      return null
    } else {
      return list
    }
  }

  /**
   * 文字列中のIVSを削除する。基底文字も削除する。<br>
   * VSのみ削除したい場合は、{@link degenerateIVS}を使用する。
   * 入力文字列がIVSを含まない場合の戻り値は、入力文字列に等しい。
   *
   * @param text 入力文字列。
   * @return 入力文字列から、IVSを削除した文字列。
   * @throws NullPointerException 引数がnullのとき。
   */
  static removeIVS(text: string): string {
    return this.replaceIVS(text, '')
  }

  /**
   * 文字列中のIVSを他の文字に置換する。<br>
   * 入力文字列に複数のIVSが存在した場合は、
   * 指定した置換文字で 全てのIVSを置換する。<br>
   * 置換文字は2文字以上の文字列でも可能とする。
   *
   * @param text 入力文字列。
   * @param filler 置換文字列。
   * @return　IVSを置換した後の文字列。
   * @throws NullPointerException text,fillerとも引数がnullのとき。
   * @throws IllegalArgumentException fillerにIVSを含むとき。
   */
  static replaceIVS(text: string, filler: string): string {
    if (text == null) throw new NullPointerException('text')
    if (filler == null) throw new NullPointerException('filler')

    if (text.length == 0) {
      return ''
    }

    if (this.containsIVS(filler) != this.NO_IVS_CHARACTERS) {
      //引数例外
      throw new IllegalArgumentException()
    }

    let cpArray: number[] = this.getCodePointArray(text)
    let cpSubst: number[] = this.getCodePointArray(filler)
    let strbuf: StringBuffer = new StringBuffer()

    let cpReplaced: ArrayList<number> = new ArrayList<number>(0)

    //コードポイント配列要素の次要素のコードポイントがVSであれば置換する
    for (let i = 0; i < cpArray.length - 1; i++) {
      //VS判定
      if (
        UnicodeBlock.of(cpArray[i]) ==
        UnicodeBlock.VARIATION_SELECTORS_SUPPLEMENT
      ) {
        //異体字は基底文字＋VSであるため、対象配列要素がVSである場合は処理しない。
        continue
      }
      //VSを検出した場合、基底文字位置から代用とするコードポイントを追加する
      if (
        UnicodeBlock.of(cpArray[i + 1]) ==
        UnicodeBlock.VARIATION_SELECTORS_SUPPLEMENT
      ) {
        //代用とする文字のコードポイントを追加
        for (let j = 0; j < cpSubst.length; j++) {
          cpReplaced.add(cpSubst[j])
        }
      } else {
        cpReplaced.add(cpArray[i])
      }
    }
    //末尾のコードポイント判定(VS以外ならそのまま追加)
    if (
      UnicodeBlock.of(cpArray[cpArray.length - 1]) !=
      UnicodeBlock.VARIATION_SELECTORS_SUPPLEMENT
    ) {
      cpReplaced.add(cpArray[cpArray.length - 1])
    }

    //VSのリストをcharに変換して文字列連結する
    let iend: number = cpReplaced.size()
    for (let i = 0; i < iend; i++) {
      strbuf.append(Character.toChars(cpReplaced.get(i)))
    }

    return strbuf.toString()
  }

  /**
   * 文字列中のVSを削除する。基底文字は削除しない。<br>
   * 入力文字列がIVSを含まない場合の戻り値は、入力文字列に等しい。
   *
   * @param text 入力文字列。
   * @return 入力文字列から、VSを削除した後の文字列。
   * @throws NullPointerException 引数がnullのとき。
   */
  static degenerateIVS(text: string): string {
    if (text == null) throw new NullPointerException('text')

    if (text.length == 0) {
      return ''
    }

    let cpArray: number[] = this.getCodePointArray(text)
    let strbuf: StringBuffer = new StringBuffer()

    let cpReplaced: ArrayList<number> = new ArrayList<number>(0)

    //コードポイント配列要素のVS以外をArrayListに追加する
    for (let i = 0; i < cpArray.length; i++) {
      if (
        UnicodeBlock.of(cpArray[i]) ==
        UnicodeBlock.VARIATION_SELECTORS_SUPPLEMENT
      ) {
        //異体字は基底文字＋VSであるため、対象配列要素がVSである場合は処理しない。
        continue
      } else {
        cpReplaced.add(cpArray[i])
      }
    }

    //VSのリストをcharに直し、文字列連結する
    let iend: number = cpReplaced.size()
    for (let i = 0; i < iend; i++) {
      strbuf.append(Character.toChars(cpReplaced.get(i)))
    }

    return strbuf.toString()
  }

  /**入力文字列の文字数を数える。
   * IVSは1文字として正しく数える。
   *
   * @param text
   * @return IVSを含む文字列の文字数を返す
   * @throws UnsupportedEncodingException
   * @throws NullPointerException 引数がnullのとき。
   */
  static getCharacterLength(text: string): number {
    if (text == null) throw new NullPointerException('text')

    let cpArray: number[] = this.getCodePointArray(text)

    //VSの存在有無を判定する
    let num_of_cp: number = cpArray.length
    let num_of_vs: number = 0
    for (let i = 0; i < num_of_cp; i++) {
      //VS17〜VS256の検出
      //VS17:U+E0100 VS256:U+E01EF
      if (
        UnicodeBlock.of(cpArray[i]) ==
        UnicodeBlock.VARIATION_SELECTORS_SUPPLEMENT
      ) {
        num_of_vs++
      }
    }

    //コードポイントの数からVSの数を差し引く
    return num_of_cp - num_of_vs
  }

  /**入力文字列の各文字をコードポイント配列に変換する。
   *
   * @param text 入力文字列
   * @return String文字列をコードポイント化したint型配列。
   */
  private static getCodePointArray(text: string): number[] {
    let len: number = text.length
    let cpArray: number[] = createNumberArray(text.codePointCount(0, len))

    for (
      let i: number = 0, j: number = 0, cp: number;
      i < len;
      i += Character.charCount(cp)
    ) {
      cp = text.codePointAt(i)!
      cpArray[j++] = cp
    }

    return cpArray
  }

  _getName(): string {
    return 'IVSDetector'
  }

  static _getName(): string {
    return 'IVSDetector'
  }

  _getType() {
    return IVSDetector as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.IVSDetector'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.IVSDetector'
  }
}
