/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcc.util {
    /**
     * 日付演算を行うユーティリティクラスです。<br>
     * ８桁の日付(yyyyMMdd)と６桁/９桁の時刻(HHmmss)/(HHmmssSSS)を文字列で保有する場合の演算に使用できます。<br>
     * HHは0〜23で使用します。
     * @class
     */
    export class JCCDateUtil {
        static errMsg1: string; public static errMsg1_$LI$(): string { if (JCCDateUtil.errMsg1 == null) { JCCDateUtil.errMsg1 = <string>new String("incompatible digits"); }  return JCCDateUtil.errMsg1; }

        static errMsg2: string; public static errMsg2_$LI$(): string { if (JCCDateUtil.errMsg2 == null) { JCCDateUtil.errMsg2 = <string>new String("incorrect characters"); }  return JCCDateUtil.errMsg2; }

        static errMsg3: string; public static errMsg3_$LI$(): string { if (JCCDateUtil.errMsg3 == null) { JCCDateUtil.errMsg3 = <string>new String("result < 0"); }  return JCCDateUtil.errMsg3; }

        static errMsg4: string; public static errMsg4_$LI$(): string { if (JCCDateUtil.errMsg4 == null) { JCCDateUtil.errMsg4 = <string>new String("date = 0"); }  return JCCDateUtil.errMsg4; }

        constructor() {
        }

        /**
         * 日付に対し、日数の加減算を行い、結果の日付を返します。
         * @param　　　date　加減算する日付 （８桁、１４桁、１７桁）
         * @param　　　day　 加算する日数 （負値は減算）
         * @return　　       加減算された日付
         * @param {string} date
         * @param {number} day
         * @return {string}
         */
        public static addDay(date: string, day: number): string {
            return null;
        }

        /**
         * 日付に対し、時間の加減算を行い、結果の日付を返します。
         * @param      {string} date  加減算する日付 （８桁、１４桁、１７桁）
         * @param      {string} time  加減算する時間 （６桁、９桁）
         * @param      {boolean} flag  加算、減算の選択 （true：加算　false：減算）
         * @return           {string} 加減算された日付
         */
        public static addTime(date: string, time: string, flag: boolean): string {
            return null;
        }

        /**
         * 日付を比較し、差分の日数を返します。（時刻は切り捨て）
         * @param        {string} date1　比較する日付 （８桁、１４桁、１７桁）
         * @param	      {string} date2  比較する日付 （８桁、１４桁、１７桁）
         * @return       {number} date1 - date2 の結果日数
         */
        public static subtractDay(date1: string, date2: string): number {
            return 0;
        }

        /**
         * ミリ秒を８桁の日付(yyyyMMdd)に変換します。
         * @param        {number} msec  変換するミリ秒
         * @return       {string} ８桁の日付(yyyyMMdd)文字列
         */
        public static toyyyyMMdd(msec: number): string {
            return null;
        }

        /**
         * ミリ秒を１４桁の日付(yyyyMMddHHmmss)に変換します。
         * @param        {number} msec  変換するミリ秒
         * @return       {string} １４桁の日付(yyyyMMddHHmmss)文字列
         */
        public static toyyyyMMddHHmmss(msec: number): string {
            return null;
        }

        /**
         * ミリ秒を１７桁の日付(yyyyMMddHHmmssSSS)に変換します。
         * @param        {number} msec  変換するミリ秒
         * @return       {string} １７桁の日付(yyyyMMddHHmmssSSS)文字列
         */
        public static toyyyyMMddHHmmssSSS(msec: number): string {
            return null;
        }

        /**
         * 日付をミリ秒に変換します。
         * @param       {string} date  変換する日付 （８桁、１４桁、１７桁）
         * @return      {number} 変換されたミリ秒
         */
        public static toTimeMinute(date: string): number {
            return 0;
        }

        /**
         * 日付の妥当性をチェックします。<br>
         * @param        {string} date  チェックする日付 （８桁、１４桁、１７桁）または時刻（６桁、９桁）
         * @return       {boolean} 判定結果 （true：妥当　false：妥当ではない）
         */
        public static check(date: string): boolean {
            if (date.indexOf('-') !== -1 || date.indexOf('.') !== -1)return false;
            const date_length: number = date.length;
            if (date_length === 8 || date_length === 14 || date_length === 17 || date_length === 6 || date_length === 9){
            } else {
                return false;
            }
            try {
                if (date_length === 6 || date_length === 9){
                    if (date_length === 9 && /* parseInt */parseInt(date.substring(6, 9)) < 0){
                        return false;
                    }
                    if (/* parseInt */parseInt(date.substring(4, 6)) > 59 || /* parseInt */parseInt(date.substring(4, 6)) < 0){
                        return false;
                    } else if (/* parseInt */parseInt(date.substring(2, 4)) > 59 || /* parseInt */parseInt(date.substring(2, 4)) < 0){
                        return false;
                    } else if (/* parseInt */parseInt(date.substring(0, 2)) > 23 || /* parseInt */parseInt(date.substring(0, 2)) < 0){
                        return false;
                    } else return true;
                } else if (date_length === 8 || date_length === 14 || date_length === 17){
                    const y: number = /* parseInt */parseInt(date.substring(0, 4));
                    const m: number = /* parseInt */parseInt(date.substring(4, 6));
                    const d: number = /* parseInt */parseInt(date.substring(6, 8));
                    if (y < 0){
                        return false;
                    } else if (m > 12 || m < 1){
                        return false;
                    } else if (d > 31 || d < 1){
                        return false;
                    } else if (m === 4 && d === 31){
                        return false;
                    } else if (m === 6 && d === 31){
                        return false;
                    } else if (m === 9 && d === 31){
                        return false;
                    } else if (m === 11 && d === 31){
                        return false;
                    } else if (m === 2 && d > 29){
                        return false;
                    } else if (m === 2 && d === 29 && y % 4 !== 0){
                        return false;
                    } else if (m === 2 && d === 29 && y % 100 === 0 && y % 400 !== 0){
                        return false;
                    } else if (date.length !== 8){
                        const flag: boolean = JCCDateUtil.check(date.substring(8, 14));
                        if (flag === false){
                            return false;
                        } else return true;
                    } else return true;
                } else return false;
            } catch(__e) {
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.NumberFormatException") >= 0)) {
                    const nfe: Error = <Error>__e;
                    return false;

                }
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.StringIndexOutOfBoundsException") >= 0)) {
                    const sob: Error = <Error>__e;
                    return false;

                }
            }
        }

        /*private*/ static transCalendar(date: string, length: number): com.java.Calendar {
            return null;
        }

        /*private*/ static transFormat(length: number): com.java.SimpleDateFormat {
            return null;
        }
    }
    JCCDateUtil["__class"] = "lib.com.fujitsu.jcc.util.JCCDateUtil";

}

