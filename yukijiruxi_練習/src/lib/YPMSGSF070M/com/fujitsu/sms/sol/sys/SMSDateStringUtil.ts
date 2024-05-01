/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.sms.sol.sys {
    /**
     * <pre>
     * 譌･譎よ枚蟄怜�礼ｷｨ髮�繧ｯ繝ｩ繧ｹ縺ｧ縺吶��<br>
     * </pre>
     * @author  雋ｩ螢ｲ邂｡逅�WG
     * @class
     */
    export class SMSDateStringUtil {
        /**
         * 繝輔か繝ｼ繝槭ャ繝育ｨｮ蛻･�ｼ�YYYYMMDD)
         */
        public static YYYYMMDD: number = 0;

        /**
         * 繝輔か繝ｼ繝槭ャ繝育ｨｮ蛻･�ｼ�YYMMDD)
         */
        public static YYMMDD: number = 1;

        /**
         * 繝輔か繝ｼ繝槭ャ繝育ｨｮ蛻･�ｼ�YYYYMM)
         */
        public static YYYYMM: number = 2;

        /**
         * 繝輔か繝ｼ繝槭ャ繝育ｨｮ蛻･�ｼ�MMDD)
         */
        public static MMDD: number = 3;

        /**
         * 繝輔か繝ｼ繝槭ャ繝育ｨｮ蛻･�ｼ�YYYYMMDDHH)
         */
        public static YYYYMMDDHH: number = 4;

        /**
         * 繝輔か繝ｼ繝槭ャ繝育ｨｮ蛻･�ｼ�YYYYMMDDHHmm)
         */
        public static YYYYMMDDHHmm: number = 5;

        /**
         * 繝輔か繝ｼ繝槭ャ繝育ｨｮ蛻･�ｼ�YYYYMMDDHHmmss)
         */
        public static YYYYMMDDHHmmss: number = 6;

        /**
         * 繝輔か繝ｼ繝槭ャ繝育ｨｮ蛻･�ｼ�YYYYMMDDHHmmssSSS)
         */
        public static YYYYMMDDHHmmssSSS: number = 7;

        static CURRENT_MONTH: string = "yyyyMM";

        static CURRENT_DATE: string = "yyyyMMdd";

        static TIMESTAMP: string = "yyyyMMddHHmmssSSS";

        static CURRENT_DATE_SEC: string = "yyyyMMddHHmmss";

        /**
         * <pre>
         * 譌･譎よ枚蟄怜�励↓繧ｹ繝ｩ繝�繧ｷ繝･縲√さ繝ｭ繝ｳ縲√ラ繝�繝医ｒ霑ｽ蜉�縺励�∬ｿ泌唆縺吶ｋ<br>
         * 謖�螳壹＠縺溘ヵ繧ｩ繝ｼ繝槭ャ繝育ｨｮ蛻･繧偵ｂ縺ｨ縺ｫ邱ｨ髮�縺吶ｋ
         * </pre>
         * @param {string} value 蛹ｺ蛻�繧頑枚蟄礼┌縺玲律莉俶枚蟄怜��
         * @param {number} flag  繝輔か繝ｼ繝槭ャ繝育ｨｮ蛻･
         * @return {string} String 蛹ｺ蛻�繧頑枚蟄嶺ｻ倥″譌･莉俶枚蟄怜��
         * @throws Exception 繝輔か繝ｼ繝槭ャ繝医お繝ｩ繝ｼ
         */
        public static conversion(value: string, flag: number): string {
            switch((flag)) {
            case SMSDateStringUtil.YYYYMMDD:
                return SMSDateStringUtil.addSlashForYYYYMMDD(value);
            case SMSDateStringUtil.YYMMDD:
                return SMSDateStringUtil.addSlashForYYMMDD(value);
            case SMSDateStringUtil.YYYYMM:
                return SMSDateStringUtil.addSlashForYYYYMM(value);
            case SMSDateStringUtil.MMDD:
                return SMSDateStringUtil.addSlashForMMDD(value);
            case SMSDateStringUtil.YYYYMMDDHH:
                return SMSDateStringUtil.addSlashForYYYYMMDDHH(value);
            case SMSDateStringUtil.YYYYMMDDHHmm:
                return SMSDateStringUtil.addSlashForYYYYMMDDHHmm(value);
            case SMSDateStringUtil.YYYYMMDDHHmmss:
                return SMSDateStringUtil.addSlashForYYYYMMDDHHmmss(value);
            case SMSDateStringUtil.YYYYMMDDHHmmssSSS:
                return SMSDateStringUtil.addSlashForYYYYMMDDHHmmssSSS(value);
            default:
                throw Object.defineProperty(new Error("\u7e5d\u8f14\u304b\u7e5d\uff7c\u7e5d\u69ed\u30e3\u7e5d\u80b2\uff68\uff6e\u86fb\uff65\u7e3a\u7881\u4fe3\u9a55\u8f14\u25b2\u7e3a\uff66\u7e3a\ufffd\u7e3a\uff7e\u7e3a\ufffd"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            }
        }

        /**
         * <pre>
         * 蜈･蜉帶枚蟄怜��(YYYYMMDD)縺ｫ繧ｹ繝ｩ繝�繧ｷ繝･繧定ｿｽ蜉�縺励�∬ｿ泌唆縺吶ｋ
         * </pre>
         * @param {string} value 繧ｹ繝ｩ繝�繧ｷ繝･辟｡縺玲律莉俶枚蟄怜��
         * @return {string} String 繧ｹ繝ｩ繝�繧ｷ繝･莉倥″譌･莉俶枚蟄怜��
         * @throws Exception 繝輔か繝ｼ繝槭ャ繝医お繝ｩ繝ｼ
         * @private
         */
        /*private*/ static addSlashForYYYYMMDD(value: string): string {
            if (value.length !== 8){
                throw Object.defineProperty(new Error("\u8b4c\uff65\u8389\u4f1c\u689b\u8b41\ufffd\u87c4\u601c\ufffd\u52b1\u3012\u7e3a\uff6f\u7e3a\u3085\uff4a\u7e3a\uff7e\u7e3a\u5e19\uff53"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            }
            const sb: { str: string, toString: Function } = { str: value, toString: function() { return this.str; } };
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 4, '/');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 7, '/');
            return /* toString */sb.str;
        }

        /**
         * <pre>
         * 蜈･蜉帶枚蟄怜��(YYMMDD)縺ｫ繧ｹ繝ｩ繝�繧ｷ繝･繧定ｿｽ蜉�縺励�∬ｿ泌唆縺吶ｋ
         * </pre>
         * @param {string} value 繧ｹ繝ｩ繝�繧ｷ繝･辟｡縺玲律莉俶枚蟄怜��
         * @return {string} String 繧ｹ繝ｩ繝�繧ｷ繝･莉倥″譌･莉俶枚蟄怜��
         * @throws Exception 繝輔か繝ｼ繝槭ャ繝医お繝ｩ繝ｼ
         * @private
         */
        /*private*/ static addSlashForYYMMDD(value: string): string {
            if (value.length !== 6){
                throw Object.defineProperty(new Error("\u8b4c\uff65\u8389\u4f1c\u689b\u8b41\ufffd\u87c4\u601c\ufffd\u52b1\u3012\u7e3a\uff6f\u7e3a\u3085\uff4a\u7e3a\uff7e\u7e3a\u5e19\uff53"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            }
            const sb: { str: string, toString: Function } = { str: value, toString: function() { return this.str; } };
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 2, '/');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 5, '/');
            return /* toString */sb.str;
        }

        /**
         * <pre>
         * 蜈･蜉帶枚蟄怜��(YYYYMM)縺ｫ繧ｹ繝ｩ繝�繧ｷ繝･繧定ｿｽ蜉�縺励�∬ｿ泌唆縺吶ｋ
         * </pre>
         * @param {string} value 繧ｹ繝ｩ繝�繧ｷ繝･辟｡縺玲律莉俶枚蟄怜��
         * @return {string} String 繧ｹ繝ｩ繝�繧ｷ繝･莉倥″譌･莉俶枚蟄怜��
         * @throws Exception 繝輔か繝ｼ繝槭ャ繝医お繝ｩ繝ｼ
         * @private
         */
        /*private*/ static addSlashForYYYYMM(value: string): string {
            if (value.length !== 6){
                throw Object.defineProperty(new Error("\u8b4c\uff65\u8389\u4f1c\u689b\u8b41\ufffd\u87c4\u601c\ufffd\u52b1\u3012\u7e3a\uff6f\u7e3a\u3085\uff4a\u7e3a\uff7e\u7e3a\u5e19\uff53"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            }
            const sb: { str: string, toString: Function } = { str: value, toString: function() { return this.str; } };
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 4, '/');
            return /* toString */sb.str;
        }

        /**
         * <pre>
         * 蜈･蜉帶枚蟄怜��(YYMMDD)縺ｫ繧ｹ繝ｩ繝�繧ｷ繝･繧定ｿｽ蜉�縺励�∬ｿ泌唆縺吶ｋ
         * </pre>
         * @param {string} value 繧ｹ繝ｩ繝�繧ｷ繝･辟｡縺玲律莉俶枚蟄怜��
         * @return {string} String 繧ｹ繝ｩ繝�繧ｷ繝･莉倥″譌･莉俶枚蟄怜��
         * @throws Exception 繝輔か繝ｼ繝槭ャ繝医お繝ｩ繝ｼ
         * @private
         */
        /*private*/ static addSlashForMMDD(value: string): string {
            if (value.length !== 4){
                throw Object.defineProperty(new Error("\u8b4c\uff65\u8389\u4f1c\u689b\u8b41\ufffd\u87c4\u601c\ufffd\u52b1\u3012\u7e3a\uff6f\u7e3a\u3085\uff4a\u7e3a\uff7e\u7e3a\u5e19\uff53"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            }
            const sb: { str: string, toString: Function } = { str: value, toString: function() { return this.str; } };
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 2, '/');
            return /* toString */sb.str;
        }

        /**
         * <pre>
         * 蜈･蜉帶枚蟄怜��(YYYYMMDDHH)縺ｫ繧ｹ繝ｩ繝�繧ｷ繝･縲√せ繝壹�ｼ繧ｹ繧定ｿｽ蜉�縺励�∬ｿ泌唆縺吶ｋ
         * </pre>
         * @param {string} value 繧ｹ繝ｩ繝�繧ｷ繝･辟｡縺玲律莉俶枚蟄怜��
         * @return {string} String 繧ｹ繝ｩ繝�繧ｷ繝･莉倥″譌･莉俶枚蟄怜��
         * @throws Exception 繝輔か繝ｼ繝槭ャ繝医お繝ｩ繝ｼ
         * @private
         */
        /*private*/ static addSlashForYYYYMMDDHH(value: string): string {
            if (value.length !== 10){
                throw Object.defineProperty(new Error("\u8b4c\uff65\u8b4e\u3087\u689b\u8b41\ufffd\u87c4\u601c\ufffd\u52b1\u3012\u7e3a\uff6f\u7e3a\u3085\uff4a\u7e3a\uff7e\u7e3a\u5e19\uff53"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            }
            const sb: { str: string, toString: Function } = { str: value, toString: function() { return this.str; } };
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 4, '/');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 7, '/');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 10, ' ');
            return /* toString */sb.str;
        }

        /**
         * <pre>
         * 蜈･蜉帶枚蟄怜��(YYYYMMDDHHmm)縺ｫ繧ｹ繝ｩ繝�繧ｷ繝･縲√せ繝壹�ｼ繧ｹ縲√さ繝ｭ繝ｳ繧定ｿｽ蜉�縺励�∬ｿ泌唆縺吶ｋ
         * </pre>
         * @param {string} value 繧ｹ繝ｩ繝�繧ｷ繝･辟｡縺玲律莉俶枚蟄怜��
         * @return {string} String 繧ｹ繝ｩ繝�繧ｷ繝･莉倥″譌･莉俶枚蟄怜��
         * @throws Exception 繝輔か繝ｼ繝槭ャ繝医お繝ｩ繝ｼ
         * @private
         */
        /*private*/ static addSlashForYYYYMMDDHHmm(value: string): string {
            if (value.length !== 12){
                throw Object.defineProperty(new Error("\u8b4c\uff65\u8b4e\u3087\u689b\u8b41\ufffd\u87c4\u601c\ufffd\u52b1\u3012\u7e3a\uff6f\u7e3a\u3085\uff4a\u7e3a\uff7e\u7e3a\u5e19\uff53"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            }
            const sb: { str: string, toString: Function } = { str: value, toString: function() { return this.str; } };
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 4, '/');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 7, '/');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 10, ' ');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 13, ':');
            return /* toString */sb.str;
        }

        /**
         * <pre>
         * 蜈･蜉帶枚蟄怜��(YYYYMMDDHHmmss)縺ｫ繧ｹ繝ｩ繝�繧ｷ繝･縲√せ繝壹�ｼ繧ｹ縲√さ繝ｭ繝ｳ繧定ｿｽ蜉�縺励�∬ｿ泌唆縺吶ｋ
         * </pre>
         * @param {string} value 繧ｹ繝ｩ繝�繧ｷ繝･辟｡縺玲律莉俶枚蟄怜��
         * @return {string} String 繧ｹ繝ｩ繝�繧ｷ繝･莉倥″譌･莉俶枚蟄怜��
         * @throws Exception 繝輔か繝ｼ繝槭ャ繝医お繝ｩ繝ｼ
         * @private
         */
        /*private*/ static addSlashForYYYYMMDDHHmmss(value: string): string {
            if (value.length !== 14){
                throw Object.defineProperty(new Error("\u8b4c\uff65\u8b4e\u3087\u689b\u8b41\ufffd\u87c4\u601c\ufffd\u52b1\u3012\u7e3a\uff6f\u7e3a\u3085\uff4a\u7e3a\uff7e\u7e3a\u5e19\uff53"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            }
            const sb: { str: string, toString: Function } = { str: value, toString: function() { return this.str; } };
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 4, '/');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 7, '/');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 10, ' ');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 13, ':');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 16, ':');
            return /* toString */sb.str;
        }

        /**
         * <pre>
         * 蜈･蜉帶枚蟄怜��(YYYYMMDDHHmmssSSS)縺ｫ繧ｹ繝ｩ繝�繧ｷ繝･縲√せ繝壹�ｼ繧ｹ縲√さ繝ｭ繝ｳ繧定ｿｽ蜉�縺励�∬ｿ泌唆縺吶ｋ
         * </pre>
         * @param {string} value 繧ｹ繝ｩ繝�繧ｷ繝･辟｡縺玲律莉俶枚蟄怜��
         * @return {string} String 繧ｹ繝ｩ繝�繧ｷ繝･莉倥″譌･莉俶枚蟄怜��
         * @throws Exception 繝輔か繝ｼ繝槭ャ繝医お繝ｩ繝ｼ
         * @private
         */
        /*private*/ static addSlashForYYYYMMDDHHmmssSSS(value: string): string {
            if (value.length !== 17){
                throw Object.defineProperty(new Error("\u8b4c\uff65\u8b4e\u3087\u689b\u8b41\ufffd\u87c4\u601c\ufffd\u52b1\u3012\u7e3a\uff6f\u7e3a\u3085\uff4a\u7e3a\uff7e\u7e3a\u5e19\uff53"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            }
            const sb: { str: string, toString: Function } = { str: value, toString: function() { return this.str; } };
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 4, '/');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 7, '/');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 10, ' ');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 13, ':');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 16, ':');
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 19, '.');
            return /* toString */sb.str;
        }

        /**
         * <pre>
         * 譌･譎よ枚蟄怜�励°繧牙玄蛻�繧頑枚蟄励ｒ蜑企勁縺励�∬ｿ泌唆縺吶ｋ
         * </pre>
         * @param {string} value 蛹ｺ蛻�繧頑枚蟄嶺ｻ倥″譌･莉俶枚蟄怜��
         * @return {string} String 蛹ｺ蛻�繧頑枚蟄礼┌縺玲律莉俶枚蟄怜��
         * @throws Exception 繝輔か繝ｼ繝槭ャ繝医お繝ｩ繝ｼ
         */
        public static reverse(value: string): string {
            const sb: { str: string, toString: Function } = { str: value, toString: function() { return this.str; } };
            const length: number = /* length */sb.str.length;
            const ret: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
            for(let i: number = 0; length > i; i++) {{
                if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(/* charAt */sb.str.charAt(i)) == '/'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(/* charAt */sb.str.charAt(i)) == ':'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(/* charAt */sb.str.charAt(i)) == '.'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(/* charAt */sb.str.charAt(i)) == ' '.charCodeAt(0)){
                } else {
                    /* append */(sb => { sb.str += <any>/* charAt */sb.str.charAt(i); return sb; })(ret);
                }
            };}
            return /* toString */ret.str;
        }

        /**
         * <pre>
         * 譌･莉倥↓蟇ｾ縺励�∵律謨ｰ縺ｮ蜉�貂帷ｮ励ｒ陦後＞縲∫ｵ先棡縺ｮ譌･莉倥ｒ霑斐＠縺ｾ縺吶��
         * 隨ｬ�ｼ貞ｼ墓焚縺瑚ｲ�謨ｰ縺ｪ繧峨�ｰ縲�驕主悉縺ｮ譌･莉倥ｒ霑泌唆縺吶ｋ縲�
         * �ｼ俶｡�ｼ�20050101
         * �ｼ托ｼ疲｡�ｼ�20050101999999
         * �ｼ托ｼ玲｡�ｼ�20050101999999999
         * 縺ｫ蟇ｾ蠢懊＠縺ｦ縺�縺ｾ縺吶��
         * </pre>
         * @param {string} date 蜉�貂帷ｮ励☆繧区律莉� �ｼ茨ｼ俶｡√��ｼ托ｼ疲｡√��ｼ托ｼ玲｡�ｼ�
         * @param {number} day 蜉�邂励☆繧区律謨ｰ �ｼ郁ｲ�蛟､縺ｯ貂帷ｮ暦ｼ�
         * @return {string} String 蜉�貂帷ｮ励＆繧後◆譌･莉�
         */
        public static add(date: string, day: number): string {
            return lib.com.fujitsu.jcc.util.JCCDateUtil.addDay(date, day);
        }

        /**
         * <pre>
         * 譌･莉倥ｒ豈碑ｼ�縺励�∝ｷｮ蛻�縺ｮ譌･謨ｰ繧定ｿ斐＠縺ｾ縺吶�ゑｼ域凾蛻ｻ縺ｯ蛻�繧頑昏縺ｦ�ｼ�
         * �ｼ俶｡�ｼ�20050101
         * �ｼ托ｼ疲｡�ｼ�200501019999
         * �ｼ托ｼ玲｡�ｼ�200501019999999
         * 縺ｫ蟇ｾ蠢懊＠縺ｦ縺�縺ｾ縺吶��
         * </pre>
         * @param {string} date1 蟷ｴ譛域律譁�蟄怜�暦ｼ茨ｼ俶｡√��ｼ托ｼ疲｡√��ｼ托ｼ玲｡�ｼ�
         * @param {string} date2 蟷ｴ譛域律譁�蟄怜�暦ｼ茨ｼ俶｡√��ｼ托ｼ疲｡√��ｼ托ｼ玲｡�ｼ�
         * @return {number} String 蟾ｮ譌･謨ｰ(date1 - date2)
         */
        public static diff(date1: string, date2: string): number {
            return lib.com.fujitsu.jcc.util.JCCDateUtil.subtractDay(date1, date2);
        }

        /**
         * <pre>
         * 繧ｷ繧ｹ繝�繝�縺九ｉ繧ｿ繧､繝�繧ｹ繧ｿ繝ｳ繝�(YYYYMMDDHHmmssSSS)繧貞叙蠕励☆繧�
         * </pre>
         * @return {string} String 繧ｿ繧､繝�繧ｹ繧ｿ繝ｳ繝�(YYYYMMDDHHmmssSSS)
         */
        public static getTimeStamp(): string {
            return null;
        }

        /**
         * <pre>
         * 繧ｷ繧ｹ繝�繝�縺九ｉ迴ｾ蝨ｨ譌･譎�(YYYYMMDDHHmmss)繧貞叙蠕励☆繧�
         * </pre>
         * @return {string} String 譌･譎�(YYYYMMDDHHmmss)
         */
        public static getCurrentTime(): string {
            return null;
        }

        /**
         * <pre>
         * 繧ｷ繧ｹ繝�繝�縺九ｉ迴ｾ蝨ｨ譌･莉�(YYYYMMDD)繧貞叙蠕励☆繧�
         * </pre>
         * @return {string} String 譌･莉�(YYYYMMDD)
         */
        public static getCurrentDate(): string {
            return null;
        }

        /**
         * <pre>
         * 繧ｷ繧ｹ繝�繝�縺九ｉ蟷ｴ譛�(YYYYMM)繧貞叙蠕励☆繧�
         * </pre>
         * @return {string} String 譌･莉�(YYYYMMDD)
         */
        public static getCurrentMonth(): string {
            return null;
        }

        /**
         * <pre>
         * 謨ｰ蛟､蝙九�ｮ隨ｬ�ｼ大ｼ墓焚�ｼ亥ｹｴ�ｼ峨�∫ｬｬ�ｼ貞ｼ墓焚�ｼ域怦�ｼ峨�∫ｬｬ�ｼ灘ｼ墓焚�ｼ域律�ｼ峨°繧画律莉俶枚蟄怜��(YYYYMMDD)繧貞叙蠕励☆繧�
         * </pre>
         * @param {number} year 蟷ｴ�ｼ茨ｼ疲｡�ｼ�
         * @param {number} month 譛茨ｼ茨ｼ撰ｽ橸ｼ托ｼ托ｼ�
         * @param {number} date 譌･�ｼ茨ｼ托ｽ橸ｼ難ｼ托ｼ�
         * @return {string} String 譌･莉�(YYYYMMDD)
         */
        public static getDateString(year: number, month: number, date: number): string {
            return null;
        }

        /**
         * <pre>
         * 繧ｵ繝ｼ繝先凾蛻ｻ縺壹ｌ蟇ｾ遲悶→縺励※縲�
         * 譖ｴ譁ｰ譌･譎ゅ→繧ｿ繧､繝�繧ｹ繧ｿ繝ｳ繝励�ｮ蟾ｮ蛻�繝√ぉ繝�繧ｯ繧定｡後＞縺ｾ縺吶��
         * </pre>
         * @param {string} updateDate 譖ｴ譁ｰ譌･譎�(�ｼ托ｼ疲｡�)
         * @param {string} timeStamp 繧ｿ繧､繝�繧ｹ繧ｿ繝ｳ繝暦ｼ茨ｼ托ｼ疲｡�ｼ�
         * @return {boolean} 譖ｴ譁ｰ譌･譎ゑｼ槭ち繧､繝�繧ｹ繧ｿ繝ｳ繝励↑繧峨�ｰ逵�(true)/譖ｴ譁ｰ譌･譎ゑｼ懶ｼ昴ち繧､繝�繧ｹ繧ｿ繝ｳ繝励↑繧峨�ｰ蛛ｽ(false)
         */
        public static checkKoshinNichiji(updateDate: string, timeStamp: string): boolean {
            const updateDateNum: number = /* parseLong */parseInt(updateDate);
            const timeStampNum: number = /* parseLong */parseInt(timeStamp);
            if (updateDateNum - timeStampNum > 0)return true;
            return false;
        }

        /**
         * <pre>
         * 譌･莉倥�ｮ蟄伜惠繝√ぉ繝�繧ｯ繧定｡後＞縺ｾ縺�
         * </pre>
         * @param {string} param 譌･莉假ｼ茨ｼ俶｡�ｼ�
         * @param {string} messageCodeInError 繧ｨ繝ｩ繝ｼ逋ｺ逕滓凾縺ｮ繧ｨ繝ｩ繝ｼ繧ｳ繝ｼ繝�
         * @param {java.lang.String[]} messageDetailInError 繧ｨ繝ｩ繝ｼ逋ｺ逕滓凾縺ｮ繧ｨ繝ｩ繝ｼ繝｡繝�繧ｻ繝ｼ繧ｸ縺ｸ縺ｮ繝代Λ繝｡繝ｼ繧ｿ
         * @throws SMSCheckException 繝√ぉ繝�繧ｯ萓句､悶′逋ｺ逕溘＠縺溷�ｴ蜷�
         */
        public static checkExistDay(param: string, messageCodeInError: string, messageDetailInError: string[]) {
        }

        /**
         * 繝溘Μ遘偵ｒ�ｼ俶｡√�ｮ譌･莉�(yyyyMMdd)縺ｫ螟画鋤縺励∪縺吶��
         * @param        {number} msec  螟画鋤縺吶ｋ繝溘Μ遘�
         * @return       {string} �ｼ俶｡√�ｮ譌･莉�(yyyyMMdd)譁�蟄怜��
         */
        public static toyyyyMMdd(msec: number): string {
            return lib.com.fujitsu.jcc.util.JCCDateUtil.toyyyyMMdd(msec);
        }

        /**
         * 繝溘Μ遘偵ｒ�ｼ托ｼ疲｡√�ｮ譌･莉�(yyyyMMddHHmmss)縺ｫ螟画鋤縺励∪縺吶��
         * @param        {number} msec  螟画鋤縺吶ｋ繝溘Μ遘�
         * @return       {string} �ｼ托ｼ疲｡√�ｮ譌･莉�(yyyyMMddHHmmss)譁�蟄怜��
         */
        public static toyyyyMMddHHmmss(msec: number): string {
            return lib.com.fujitsu.jcc.util.JCCDateUtil.toyyyyMMddHHmmss(msec);
        }

        /**
         * 繝溘Μ遘偵ｒ�ｼ托ｼ玲｡√�ｮ譌･莉�(yyyyMMddHHmmssSSS)縺ｫ螟画鋤縺励∪縺吶��
         * @param        {number} msec  螟画鋤縺吶ｋ繝溘Μ遘�
         * @return       {string} �ｼ托ｼ玲｡√�ｮ譌･莉�(yyyyMMddHHmmssSSS)譁�蟄怜��
         */
        public static toyyyyMMddHHmmssSSS(msec: number): string {
            return lib.com.fujitsu.jcc.util.JCCDateUtil.toyyyyMMddHHmmssSSS(msec);
        }

        /**
         * 譌･莉倥ｒ繝溘Μ遘偵↓螟画鋤縺励∪縺吶��
         * @param       {string} date  螟画鋤縺吶ｋ譌･莉� �ｼ茨ｼ俶｡√��ｼ托ｼ疲｡√��ｼ托ｼ玲｡�ｼ�
         * @return      {number} 螟画鋤縺輔ｌ縺溘Α繝ｪ遘�
         */
        public static toTimeMinute(date: string): number {
            return lib.com.fujitsu.jcc.util.JCCDateUtil.toTimeMinute(date);
        }

        /**
         * 譌･莉倥↓蟇ｾ縺励�∵凾髢薙�ｮ蜉�貂帷ｮ励ｒ陦後＞縲∫ｵ先棡縺ｮ譌･莉倥ｒ霑斐＠縺ｾ縺吶��
         * @param      {string} date  蜉�貂帷ｮ励☆繧区律莉� �ｼ茨ｼ俶｡√��ｼ托ｼ疲｡√��ｼ托ｼ玲｡�ｼ�
         * @param      {string} time  蜉�貂帷ｮ励☆繧区凾髢� �ｼ茨ｼ匁｡√��ｼ呎｡�ｼ�
         * @param      {boolean} flag  蜉�邂励�∵ｸ帷ｮ励�ｮ驕ｸ謚� �ｼ�true�ｼ壼刈邂励��false�ｼ壽ｸ帷ｮ暦ｼ�
         * @return           {string} 蜉�貂帷ｮ励＆繧後◆譌･莉�
         */
        public static addTime(date: string, time: string, flag: boolean): string {
            return lib.com.fujitsu.jcc.util.JCCDateUtil.addTime(date, time, flag);
        }

        /**
         * 譌･莉倥�ｮ螯･蠖捺�ｧ繧偵メ繧ｧ繝�繧ｯ縺励∪縺吶��<br>
         * @param        {string} date  繝√ぉ繝�繧ｯ縺吶ｋ譌･莉� �ｼ茨ｼ俶｡√��ｼ托ｼ疲｡√��ｼ托ｼ玲｡�ｼ峨∪縺溘�ｯ譎ょ綾�ｼ茨ｼ匁｡√��ｼ呎｡�ｼ�
         * @return       {boolean} 蛻､螳夂ｵ先棡 �ｼ�true�ｼ壼ｦ･蠖薙��false�ｼ壼ｦ･蠖薙〒縺ｯ縺ｪ縺�ｼ�
         */
        public static check(date: string): boolean {
            return lib.com.fujitsu.jcc.util.JCCDateUtil.check(date);
        }
    }
    SMSDateStringUtil["__class"] = "lib.com.fujitsu.sms.sol.sys.SMSDateStringUtil";

}

