/*
 * システム名（ＪＣＣＣ共通）	業務区分（コンポーネント）
 * クラス一覧：
 *	JCCCalendarCommon			和暦クラス
 * <修正履歴>
 * (1)新規作成                   2000         富士通JCCC
 * (2)マルチスレッド障害修正     2004.12.24   SOLUTIONBANK A812
 * (3)雪印乳業PJ）JCCCompo.properties外出し対応　2007.04.04　WT)松永
 *    S-JIS(Splaris)、EUC(Linux)それぞれのサーバ上で動作させるため
 */

import { Hashtable } from '@/lib/native/util/Hashtable'
import { JCCProperties } from './JCCProperties'
import type { Enumeration } from '@/lib/native/lang/Enumeration'
import { create2DStringArray } from '@/utils/array/2D'
import { GregorianCalendar } from '@/lib/native/util/GregorianCalendar'
import { createChar } from '@/utils/array/char'
import { createStringArray, createNumberArray } from '@/utils/array/1D'
import { Integer } from '@/lib/native/lang/Integer'
import { SimpleDateFormat } from '@/lib/native/text/SimpleDateFormat'
import type { NativeMap } from '@/lib/native/util/Map'
import { Calendar } from '@/lib/native/util/Calendar'

/**
 * クラス名：暦共通クラス.
 * クラス説明：暦クラスに共通な機能を提供するクラスです。
 * @version V1.0L20 2004/12/24
 * @author SOLUTIONBANK A812
 */
export abstract class JCCCalendarCommon {
  // *******(20030626 ST)
  /** 和暦年号の英字略称情報です。*/
  static JA_CAL_SYMBOL: string[] = []
  /** 和暦年号の日本語表記情報です。*/
  static JA_CAL_CHINESE_CHARACTOR: string[] = []
  /** 和暦開始日に対応する西暦年月日の情報です。*/
  static WE_CAL_STANDARD_DATE: string[] = []
  /** 和暦開始日と最終日の情報です。*/
  static JA_CAL_STANDARD_DATE: string[] = []

  // 年号シンボルの日本語表記情報プレフィックス
  private static KANJI = 'JCCCalendarCommon.kanji_'

  // 和暦開始日に対応する西暦年月日情報プレフィックス
  private static START = 'JCCCalendarCommon.start_'

  // JCCCompo.properties
  private static PROP_FILE = 'JCCCompo.properties'
  // プロパティクラス
  // start(1):マルチスレッドでの障害修正(2004.12.24)
  private static prop: JCCProperties = new JCCProperties()
  static jaNewCalSymbol: string = ' '
  static jaNewCalChineseCharactor: string = ' '
  // end(1):マルチスレッドでの障害修正(2004.12.24)

  /**
   * デフォルトフラグ(プロパティファイルが存在しない)
   */
  // start(1):マルチスレッドでの障害修正(2004.12.24)
  private static defaultFlag = false
  // end(1):マルチスレッドでの障害修正(2004.12.24)

  // start(1):マルチスレッドでの障害修正(2004.12.24)
  /**
   * スタティックイニシャライザ
   */
  static {
    // プロパティファイルの読込み
    this.read()

    if (!this.defaultFlag) {
      // プロパティファイルが存在する場合
      const hash: Hashtable = new Hashtable(this.prop.getMap())
      let _enum: Enumeration<string> = hash.keys()
      let key: string = ''
      let kanjiPos: number = this.KANJI.indexOf('_')
      let startPos: number = this.START.indexOf('_')

      // 年号シンボルの日本語表記情報をカウントします
      // 和暦開始日に対応する西暦年月日情報をカウントします
      let kanjiCnt = 0
      let startCnt = 0
      while (_enum.hasMoreElements()) {
        key = String(_enum.nextElement())
        if (key.startsWith(this.KANJI)) {
          hash.put(key, this.prop.getString(key, ''))
          kanjiCnt++
        }
        if (key.startsWith(this.START)) {
          hash.put(key, this.prop.getString(key, ''))
          startCnt++
        }
      }

      // 並び替え
      _enum = hash.keys()
      let temp: string = ''
      let temp1: string[][] = create2DStringArray(2, startCnt)
      let temp2: string[][] = create2DStringArray(2, startCnt)
      let ct: number = 0
      let dt: number = 0
      while (_enum.hasMoreElements()) {
        key = String(_enum.nextElement())
        if (key.startsWith(this.START)) {
          // キーの格納
          temp1[0][ct] = key
          temp1[1][ct] = String(hash.get(key))
          ct++
        }
        if (key.startsWith(this.KANJI)) {
          // キーの格納
          temp2[0][dt] = key
          temp2[1][dt] = String(hash.get(key))
          dt++
        }
      }
      for (let h = 1; h < startCnt; h++) {
        for (let i = 0; i < startCnt; i++) {
          if (temp1[1][h].compareTo(temp1[1][i]) < 0) {
            // 入替え
            temp = temp1[1][i]
            temp1[1][i] = temp1[1][h]
            temp1[1][h] = temp
            temp = temp1[0][i]
            temp1[0][i] = temp1[0][h]
            temp1[0][h] = temp
          }
        }
      }

      const cal: GregorianCalendar = new GregorianCalendar()
      let y = 0,
        m = 0,
        d = 0
      this.JA_CAL_SYMBOL = createChar(startCnt)
      this.WE_CAL_STANDARD_DATE = createStringArray(startCnt)
      this.JA_CAL_CHINESE_CHARACTOR = createStringArray(startCnt)
      for (let j = 0; j < startCnt; j++) {
        // テーブルへの格納
        // 英字シンボルの格納
        this.JA_CAL_SYMBOL[j] = temp1[0][j].charAt(kanjiPos + 1)
        // 最新年号
        if (j == startCnt - 1) {
          this.jaNewCalSymbol = this.JA_CAL_SYMBOL[j]
        }

        // 和暦シンボルの格納
        // 入替え
        for (let jj = 0; jj < startCnt; jj++) {
          if (this.JA_CAL_SYMBOL[j] == temp2[0][jj].charAt(kanjiPos + 1)) {
            this.JA_CAL_CHINESE_CHARACTOR[j] = temp2[1][jj]
          }
        }
        // 最新年号
        if (j == startCnt - 1) {
          this.jaNewCalChineseCharactor = this.JA_CAL_CHINESE_CHARACTOR[j]
        }

        // 和暦開始日の格納
        this.WE_CAL_STANDARD_DATE[j] = ''
        this.WE_CAL_STANDARD_DATE[j] = temp1[1][j]
      }

      // 和暦年間算出
      let div: number[] = createNumberArray(startCnt)
      for (let mm = 0; mm < startCnt; mm++) {
        if (mm < startCnt - 1) {
          div[mm] =
            Integer.valueOf(
              this.WE_CAL_STANDARD_DATE[mm + 1].substring(0, 4),
            ).intValue() -
            Integer.valueOf(
              this.WE_CAL_STANDARD_DATE[mm].substring(0, 4),
            ).intValue()
          ++div[mm]
        } else if (mm == startCnt - 1) {
          div[mm] = 0
        }
      }

      this.JA_CAL_STANDARD_DATE = createStringArray(startCnt * 2)
      // 初期化
      for (let kk = 0; kk < this.JA_CAL_STANDARD_DATE.length; kk++) {
        this.JA_CAL_STANDARD_DATE[kk] = ''
        this.JA_CAL_STANDARD_DATE[kk] = '991231'
      }
      for (let k = 0; k < startCnt; k++) {
        if (this.WE_CAL_STANDARD_DATE.length == 1) {
          this.JA_CAL_STANDARD_DATE[k * 2] = ''
          this.JA_CAL_STANDARD_DATE[k * 2] =
            '01' + this.WE_CAL_STANDARD_DATE[k].substring(4)

          this.JA_CAL_STANDARD_DATE[k * 2 + 1] = ''
          this.JA_CAL_STANDARD_DATE[k * 2 + 1] = '991231'
        }
        // 和暦開始
        this.JA_CAL_STANDARD_DATE[k * 2] = ''
        this.JA_CAL_STANDARD_DATE[k * 2] =
          '01' + this.WE_CAL_STANDARD_DATE[k].substring(4)

        y = new Integer(this.WE_CAL_STANDARD_DATE[k].substring(0, 4)).intValue()
        m = new Integer(this.WE_CAL_STANDARD_DATE[k].substring(4, 6)).intValue()
        d = new Integer(this.WE_CAL_STANDARD_DATE[k].substring(6, 8)).intValue()
        cal.set(y, m - 1, d)
        cal.add(Calendar.DAY_OF_YEAR, -1)

        let form1: SimpleDateFormat = new SimpleDateFormat('yyyyMMdd')

        if (k == 0) {
          this.JA_CAL_STANDARD_DATE[1] = ''
          this.JA_CAL_STANDARD_DATE[1] = form1.format(cal.getTime())
        } else {
          this.JA_CAL_STANDARD_DATE[k * 2 - 1] = ''
          this.JA_CAL_STANDARD_DATE[k * 2 - 1] = form1.format(cal.getTime())
          this.JA_CAL_STANDARD_DATE[k * 2 - 1] =
            new Integer(div[k - 1]).toString() +
            this.JA_CAL_STANDARD_DATE[k * 2 - 1].substring(4)
        }
      }
    } else {
      // プロパティファイルが存在しない場合(互換性を保つため)

      this.JA_CAL_SYMBOL = createChar(4)
      this.JA_CAL_SYMBOL[0] = 'M'
      this.JA_CAL_SYMBOL[1] = 'T'
      this.JA_CAL_SYMBOL[2] = 'S'
      this.JA_CAL_SYMBOL[3] = 'H'

      this.JA_CAL_CHINESE_CHARACTOR = createStringArray(4)
      this.JA_CAL_CHINESE_CHARACTOR[0] = '明治'
      this.JA_CAL_CHINESE_CHARACTOR[1] = '大正'
      this.JA_CAL_CHINESE_CHARACTOR[2] = '昭和'
      this.JA_CAL_CHINESE_CHARACTOR[3] = '平成'

      this.WE_CAL_STANDARD_DATE = createStringArray(4)
      this.WE_CAL_STANDARD_DATE[0] = '18680827'
      this.WE_CAL_STANDARD_DATE[1] = '19120730'
      this.WE_CAL_STANDARD_DATE[2] = '19261225'
      this.WE_CAL_STANDARD_DATE[3] = '19890108'

      this.JA_CAL_STANDARD_DATE = createStringArray(8)
      this.JA_CAL_STANDARD_DATE[0] = '010827'
      this.JA_CAL_STANDARD_DATE[1] = '450729'
      this.JA_CAL_STANDARD_DATE[2] = '010730'
      this.JA_CAL_STANDARD_DATE[3] = '151224'
      this.JA_CAL_STANDARD_DATE[4] = '011225'
      this.JA_CAL_STANDARD_DATE[5] = '640107'
      this.JA_CAL_STANDARD_DATE[6] = '010108'
      this.JA_CAL_STANDARD_DATE[7] = '991231'

      // 最新年号シンボル
      this.jaNewCalSymbol = 'H'
      // 最新年号
      this.jaNewCalChineseCharactor = '平成'
    }
  }
  // end(2):マルチスレッドでの障害修正(2004.12.24)

  /**
   * デフォルトコンストラクタ
   * 何もしない
   */
  constructor() {
    /*      start(2)CommentOut:マルチスレッド対応のためstaticイニシャライザへ移動
        // プロパティファイルの読込み
        this.read();

        if(!defaultFlag) {  // プロパティファイルが存在する場合

            Hashtable hash = new Hashtable(prop.getMap());
            Enumeration enum = hash.keys();
            String key = "";
            int kanjiPos = KANJI.indexOf("_");
            int startPos = START.indexOf("_");

            // 年号シンボルの日本語表記情報をカウントします
            // 和暦開始日に対応する西暦年月日情報をカウントします
            int kanjiCnt = 0;
            int startCnt = 0;
            while(_enum.hasMoreElements()) {
                key = (String)_enum.nextElement();
                if(key.startsWith(KANJI)) {
                    hash.put(key, prop.getString(key,""));
                    kanjiCnt++;
                }
                if(key.startsWith(START)) {
                    hash.put(key, prop.getString(key,""));
                    startCnt++;
                }
            }

            // 並び替え
            enum = hash.keys();
            String temp = "";
            String[][] temp1 = new String[2][startCnt];
            String[][] temp2 = new String[2][startCnt];
            int ct = 0;
            int dt = 0;
            while(_enum.hasMoreElements()) {
                key = (String)_enum.nextElement();
                if(key.startsWith(START)){
                    // キーの格納
                    temp1[0][ct] = key;
                    temp1[1][ct] = (String)hash.get(key);
                    ct++;
                }
                if(key.startsWith(KANJI)){
                    // キーの格納
                    temp2[0][dt] = key;
                    temp2[1][dt] = (String)hash.get(key);
                    dt++;
                }

            }
            for(int h = 1;h < startCnt;h++) {
                for(int i = 0;i < startCnt;i++) {
                    if(temp1[1][h].compareTo(temp1[1][i]) < 0) {
                        // 入替え
                        temp = temp1[1][i];
                        temp1[1][i] = temp1[1][h];
                        temp1[1][h] = temp;
                        temp = temp1[0][i];
                        temp1[0][i] = temp1[0][h];
                        temp1[0][h] = temp;
                    }
                }
            }

            GregorianCalendar cal = new GregorianCalendar();
            int y=0,m=0,d=0;
            JA_CAL_SYMBOL = new char[startCnt];
            WE_CAL_STANDARD_DATE = new String[startCnt];
            JA_CAL_CHINESE_CHARACTOR = new String[startCnt];
            for(int j = 0;j < startCnt;j++) {
                // テーブルへの格納
                // 英字シンボルの格納
                JA_CAL_SYMBOL[j] = temp1[0][j].charAt(kanjiPos + 1);
                // 最新年号
                if(j == startCnt-1) {
                    jaNewCalSymbol = JA_CAL_SYMBOL[j];
                }

                // 和暦シンボルの格納
                // 入替え
                for(int jj = 0;jj < startCnt;jj++) {
                    if(JA_CAL_SYMBOL[j] == temp2[0][jj].charAt(kanjiPos + 1)) {
                        JA_CAL_CHINESE_CHARACTOR[j] = temp2[1][jj];
                    }
                }
                // 最新年号
                if(j == startCnt-1) {
                    jaNewCalChineseCharactor = JA_CAL_CHINESE_CHARACTOR[j];
                }

                // 和暦開始日の格納
                WE_CAL_STANDARD_DATE[j] = new String();
                WE_CAL_STANDARD_DATE[j] = temp1[1][j];
            }

            // 和暦年間算出
            int div[] = new int[startCnt];
            for(int mm = 0;mm < startCnt;mm++) {
                if(mm < startCnt - 1) {
                    div[mm] = Integer.valueOf(WE_CAL_STANDARD_DATE[mm+1].substring(0,4)).intValue() 
                            - Integer.valueOf(WE_CAL_STANDARD_DATE[mm].substring(0,4)).intValue();
                    ++div[mm];
                }
                else if(mm == startCnt-1){
                    div[mm] = 0;
                }
            }


            JA_CAL_STANDARD_DATE = new String[startCnt*2];
            // 初期化
            for(int kk = 0;kk < JA_CAL_STANDARD_DATE.length;kk++) {
                JA_CAL_STANDARD_DATE[kk] = new String();
                JA_CAL_STANDARD_DATE[kk] = "991231";
            }
            for(int k = 0;k < startCnt;k++) {

                if(WE_CAL_STANDARD_DATE.length == 1) {
                    JA_CAL_STANDARD_DATE[k*2] = new String();
                    JA_CAL_STANDARD_DATE[k*2] = "01" + (WE_CAL_STANDARD_DATE[k].substring(4));

                    JA_CAL_STANDARD_DATE[k*2+1] = new String();
                    JA_CAL_STANDARD_DATE[k*2+1] = "991231";
                }
                // 和暦開始
                JA_CAL_STANDARD_DATE[k*2] = new String();
                JA_CAL_STANDARD_DATE[k*2] = "01" + (WE_CAL_STANDARD_DATE[k].substring(4));

                y = (new Integer(WE_CAL_STANDARD_DATE[k].substring(0,4))).intValue();
                m = (new Integer(WE_CAL_STANDARD_DATE[k].substring(4,6))).intValue();
                d = (new Integer(WE_CAL_STANDARD_DATE[k].substring(6,8))).intValue();
                cal.set(y,m-1,d);
                cal.add(Calendar.DAY_OF_YEAR,-1);

                SimpleDateFormat form1 = new SimpleDateFormat("yyyyMMdd");

                if(k == 0) {
                    JA_CAL_STANDARD_DATE[1] = new String();
                    JA_CAL_STANDARD_DATE[1] = form1.format(cal.getTime());

                }else{
                    JA_CAL_STANDARD_DATE[k*2-1] = new String();
                    JA_CAL_STANDARD_DATE[k*2-1] = form1.format(cal.getTime());
                    JA_CAL_STANDARD_DATE[k*2-1] = (new Integer(div[k-1])).toString() + (JA_CAL_STANDARD_DATE[k*2-1].substring(4));

                }
            }


        } else {  // プロパティファイルが存在しない場合(互換性を保つため)

            JA_CAL_SYMBOL = new char[4];
            JA_CAL_SYMBOL[0] = 'M';
            JA_CAL_SYMBOL[1] = 'T';
            JA_CAL_SYMBOL[2] = 'S';
            JA_CAL_SYMBOL[3] = 'H';

            JA_CAL_CHINESE_CHARACTOR = new String[4];
            JA_CAL_CHINESE_CHARACTOR[0] = new String("明治");
            JA_CAL_CHINESE_CHARACTOR[1] = new String("大正");
            JA_CAL_CHINESE_CHARACTOR[2] = new String("昭和");
            JA_CAL_CHINESE_CHARACTOR[3] = new String("平成");

            WE_CAL_STANDARD_DATE = new String[4];
            WE_CAL_STANDARD_DATE[0] = new String("18680827");
            WE_CAL_STANDARD_DATE[1] = new String("19120730");
            WE_CAL_STANDARD_DATE[2] = new String("19261225");
            WE_CAL_STANDARD_DATE[3] = new String("19890108");

            JA_CAL_STANDARD_DATE = new String[8];
            JA_CAL_STANDARD_DATE[0] = new String("010827");
            JA_CAL_STANDARD_DATE[1] = new String("450729");
            JA_CAL_STANDARD_DATE[2] = new String("010730");
            JA_CAL_STANDARD_DATE[3] = new String("151224");
            JA_CAL_STANDARD_DATE[4] = new String("011225");
            JA_CAL_STANDARD_DATE[5] = new String("640107");
            JA_CAL_STANDARD_DATE[6] = new String("010108");
            JA_CAL_STANDARD_DATE[7] = new String("991231");

            // 最新年号シンボル
            jaNewCalSymbol = 'H';
            // 最新年号
            jaNewCalChineseCharactor = "平成";

        }
end(2)CommentOut:マルチスレッド対応のためstaticイニシャライザへ移動
*/
    /* デバッグ
        for(int xx = 0;xx < JA_CAL_SYMBOL.length;xx++) {
            System.out.println("JA_CAL_SYMBOL[" + xx + "]=" + JA_CAL_SYMBOL[xx]);
        }
        for(int yy = 0;yy < JA_CAL_CHINESE_CHARACTOR.length;yy++) {
            System.out.println("JA_CAL_CHINESE_CHARACTOR[" + yy + "]=" + JA_CAL_CHINESE_CHARACTOR[yy]);
        }
        for(int zz = 0;zz < WE_CAL_STANDARD_DATE.length;zz++) {
            System.out.println("WE_CAL_STANDARD_DATE[" + zz + "]=" + WE_CAL_STANDARD_DATE[zz]);
        }
        for(int ww = 0;ww < JA_CAL_STANDARD_DATE.length;ww++) {
            System.out.println("JA_CAL_STANDARD_DATE[" + ww + "]=" + JA_CAL_STANDARD_DATE[ww]);
        }
*/
    // *******(20030626 ED)
  }

  /**
   * 年
   */
  private calYear: number = undefined!
  /**
   * 月
   */
  private calMonth: number = undefined!
  /**
   * 日
   */
  private calDay: number = undefined!
  /**
   * 標準文字列
   */
  private stdStr: string = undefined!

  /**
   * メソッド名：	年取得処理.
   * メソッド説明：設定されている年を参照します。
   * 備考：
   * @return int	年
   */
  getYear(): number {
    return this.calYear
  }

  /**
   * メソッド名：	月取得処理.
   * メソッド説明：設定されている月を参照します。
   * 備考：
   * @return int	月
   */
  getMonth(): number {
    return this.calMonth
  }

  /**
   * メソッド名：	日取得処理.
   * メソッド説明：設定されている日を参照します。
   * 備考：
   * @return int	日
   */
  getDay(): number {
    return this.calDay
  }

  /**
   * メソッド名：	標準文字列取得処理.
   * メソッド説明：設定されている標準文字列を参照します。
   * 備考：
   * @return String	標準文字列
   */
  getStdString(): string {
    return this.stdStr
  }

  /**
   * メソッド名：	年設定処理.
   * メソッド説明：年を設定します。
   * 備考：
   * @param int	年
   */
  setYear(year: number) {
    this.calYear = year
  }

  /**
   * メソッド名：	月設定処理.
   * メソッド説明：月を設定します。
   * 備考：
   * @param int	月
   */
  setMonth(month: number) {
    this.calMonth = month
  }

  /**
   * メソッド名：	日設定処理.
   * メソッド説明：日を設定します。
   * 備考：
   * @param int	日
   */
  setDay(day: number) {
    this.calDay = day
  }

  /**
   * メソッド名：	標準文字列設定処理.
   * メソッド説明：標準文字列を設定します。
   * 備考：
   * @param String	標準文字列
   */
  setStdString(stdstr: string) {
    this.stdStr = stdstr
  }

  // start(1)update:マルチスレッド対応によりstaticメソッドに変更
  // **** 20030709(ST)
  private static read() {
    // end(1)update:マルチスレッド対応によりstaticメソッドに変更

    this.prop = new JCCProperties()
    // **** 20070404(ST)
    try {
      // プロパティファイル読み込み
      this.prop.load(this.PROP_FILE)
      // プロパティファイルの読み込み判定
      const map: NativeMap = this.prop.getMap()
      if (map == null || map.isEmpty()) {
        // プロパティファイル読み込み失敗の場合
        this.defaultFlag = true
        return
      }
    } catch (ex: any) {
      ex.printStackTrace()
      this.defaultFlag = true
    }
    // **** 20070404(ED)
  }
  // **** 20030709(ED)

  _getName(): string {
    return 'JCCCalendarCommon'
  }

  static _getName(): string {
    return 'JCCCalendarCommon'
  }

  _getType() {
    return JCCCalendarCommon as any
  }

  _getFullName(): string {
    return 'jcc.util.JCCCalendarCommon'
  }

  static _getFullName(): string {
    return 'jcc.util.JCCCalendarCommon'
  }
}
