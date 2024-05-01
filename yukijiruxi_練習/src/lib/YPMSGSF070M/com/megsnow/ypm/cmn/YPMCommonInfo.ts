/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.megsnow.ypm.cmn {
    /**
     * コンストラクタ
     * @param {*} inMsg
     * @class
     * @author Sora
     */
    export class YPMCommonInfo {
        /**
         * 生産管理共通メッセージ取得ハッシュキー
         */
        /*private*/ IF_YPM: string;

        /**
         * 工場・在庫場所コード取得ハッシュキー
         */
        /*private*/ CD_KOJO_ZAIKO_BASHO: string;

        /**
         * 工場・在庫場所コード
         */
        /*private*/ cdKojoZaikoBasho: string;

        /**
         * 工場・在庫場所名称取得ハッシュキー
         */
        /*private*/ NM_KOJO_ZAIKO_BASHO: string;

        /**
         * 工場・在庫場所名称
         */
        /*private*/ nmKojoZaikoBasho: string;

        /**
         * 工場・在庫場所略式名称取得ハッシュキー
         */
        /*private*/ NM_KOJO_ZAIKO_BASHO_RYAKU: string;

        /**
         * 工場・在庫場所略式名称
         */
        /*private*/ nmKojoZaikoBashoRyaku: string;

        /**
         * 管理工程コード取得ハッシュキー
         */
        /*private*/ CD_KANRI_KOTEI: string;

        /**
         * 管理工程コード
         */
        /*private*/ cdKanriKotei: string;

        /**
         * 管理工程名称取得ハッシュキー
         */
        /*private*/ NM_KANRI_KOTEI: string;

        /**
         * 管理工程名称
         */
        /*private*/ nmKanriKotei: string;

        /**
         * 倉庫コード取得ハッシュキー
         */
        /*private*/ CD_SOKO: string;

        /**
         * 倉庫コード
         */
        /*private*/ cdSoko: string;

        /**
         * 倉庫名称取得ハッシュキー
         */
        /*private*/ NM_SOKO: string;

        /**
         * 倉庫名称
         */
        /*private*/ nmSoko: string;

        /**
         * 倉庫略式名称取得ハッシュキー
         */
        /*private*/ NM_SOKO_RYAKU: string;

        /**
         * 倉庫略式名称
         */
        /*private*/ nmSokoRyaku: string;

        /**
         * エリアコード取得ハッシュキー
         */
        /*private*/ CD_AREA: string;

        /**
         * エリアコード
         */
        /*private*/ cdArea: string;

        /**
         * エリア名称取得ハッシュキー
         */
        /*private*/ NM_AREA: string;

        /**
         * エリア名称
         */
        /*private*/ nmArea: string;

        /**
         * エリア略式名称取得ハッシュキー
         */
        /*private*/ NM_AREA_RYAKU: string;

        /**
         * エリア略式名称
         */
        /*private*/ nmAreaRyaku: string;

        /**
         * ゾーンコード取得ハッシュキー
         */
        /*private*/ CD_ZONE: string;

        /**
         * ゾーンコード
         */
        /*private*/ cdZone: string;

        /**
         * ゾーン名称取得ハッシュキー
         */
        /*private*/ NM_ZONE: string;

        /**
         * ゾーン名称
         */
        /*private*/ nmZone: string;

        /**
         * ゾーン略式名称取得ハッシュキー
         */
        /*private*/ NM_ZONE_RYAKU: string;

        /**
         * ゾーン略式名称
         */
        /*private*/ nmZoneRyaku: string;

        /**
         * プリンタID取得ハッシュキー
         */
        /*private*/ CD_PRINTER_ID: string;

        /**
         * プリンタIDー
         */
        /*private*/ cdPrinterId: string;

        /**
         * プリンタ名称取得ハッシュキー
         */
        /*private*/ NM_RONRI: string;

        /**
         * プリンタ名称
         */
        /*private*/ nmRonri: string;

        /**
         * ケース管理フラグ取得ハッシュキー
         */
        /*private*/ FG_CASE_KANRI: string;

        /**
         * ケース管理フラグー
         */
        /*private*/ fgCaseKanri: boolean;

        /**
         * 損益管理組織コード取得ハッシュキー
         */
        /*private*/ CD_SONEKIKANRI_SOSHIKI: string;

        /**
         * 損益管理組織コード
         */
        /*private*/ cdSonekikanriSoshiki: string;

        /**
         * 損益管理組織略式名称レベル３取得ハッシュキー
         */
        /*private*/ NM_SONEKI_SOSHIKI_RYAKU3: string;

        /**
         * 損益管理組織略式名称レベル３
         */
        /*private*/ nmSonekiSoshikiRyaku3: string;

        /**
         * 生産管理共通メッセージハッシュ
         */
        ifYPM: any;

        public constructor(inMsg: any) {
            this.IF_YPM = "ifYPM";
            this.CD_KOJO_ZAIKO_BASHO = "cdKojoZaikoBasho";
            this.cdKojoZaikoBasho = null;
            this.NM_KOJO_ZAIKO_BASHO = "nmKojoZaikoBasho";
            this.nmKojoZaikoBasho = null;
            this.NM_KOJO_ZAIKO_BASHO_RYAKU = "nmKojoZaikoBashoRyaku";
            this.nmKojoZaikoBashoRyaku = null;
            this.CD_KANRI_KOTEI = "cdKanriKotei";
            this.cdKanriKotei = null;
            this.NM_KANRI_KOTEI = "nmKanriKotei";
            this.nmKanriKotei = null;
            this.CD_SOKO = "cdSoko";
            this.cdSoko = null;
            this.NM_SOKO = "nmSoko";
            this.nmSoko = null;
            this.NM_SOKO_RYAKU = "nmSokoRyaku";
            this.nmSokoRyaku = null;
            this.CD_AREA = "cdArea";
            this.cdArea = null;
            this.NM_AREA = "nmArea";
            this.nmArea = null;
            this.NM_AREA_RYAKU = "nmAreaRyaku";
            this.nmAreaRyaku = null;
            this.CD_ZONE = "cdZone";
            this.cdZone = null;
            this.NM_ZONE = "nmZone";
            this.nmZone = null;
            this.NM_ZONE_RYAKU = "nmZoneRyaku";
            this.nmZoneRyaku = null;
            this.CD_PRINTER_ID = "cdPrinterId";
            this.cdPrinterId = null;
            this.NM_RONRI = "nmRonri";
            this.nmRonri = null;
            this.FG_CASE_KANRI = "fgCaseKanri";
            this.fgCaseKanri = false;
            this.CD_SONEKIKANRI_SOSHIKI = "cdSonekikanriSoshiki";
            this.cdSonekikanriSoshiki = null;
            this.NM_SONEKI_SOSHIKI_RYAKU3 = "nmSonekiSoshikiRyaku3";
            this.nmSonekiSoshikiRyaku3 = null;
            this.ifYPM = <any>({});
            this.ifYPM = inMsg;
            if (this.ifYPM == null){
                this.ifYPM = <any>({});
                return;
            }
            this.setKojoZaikoBashoCode(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.CD_KOJO_ZAIKO_BASHO));
            this.setKojoZaikoBashoName(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.NM_KOJO_ZAIKO_BASHO));
            this.setKojoZaikoBashoRyaku(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.NM_KOJO_ZAIKO_BASHO_RYAKU));
            this.setKanriKotei(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.CD_KANRI_KOTEI));
            this.setKanriKoteiName(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.NM_KANRI_KOTEI));
            this.setSoko(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.CD_SOKO));
            this.setSokoName(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.NM_SOKO));
            this.setSokoRyaku(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.NM_SOKO_RYAKU));
            this.setArea(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.CD_AREA));
            this.setAreaName(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.NM_AREA));
            this.setAreaRyaku(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.NM_AREA_RYAKU));
            this.setZone(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.CD_ZONE));
            this.setZoneName(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.NM_ZONE));
            this.setZoneRyaku(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.NM_ZONE_RYAKU));
            this.setPriterID(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.CD_PRINTER_ID));
            this.setPriterName(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.NM_RONRI));
            this.setCaseKanri(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.FG_CASE_KANRI));
            this.setSonekiKanriSoshiki(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.CD_SONEKIKANRI_SOSHIKI));
            this.setNmSonekiSoshikiRyaku3(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.ifYPM, this.NM_SONEKI_SOSHIKI_RYAKU3));
        }

        /**
         * 工場在庫場所コード設定
         * @param {string} arg
         */
        public setKojoZaikoBashoCode(arg: string) {
            this.cdKojoZaikoBasho = arg;
        }

        /**
         * 工場在庫場所コード取得
         * @return {string}
         */
        public getKojoZaikoBashoCode(): string {
            return this.cdKojoZaikoBasho;
        }

        /**
         * 工場・在庫場所名称設定
         * @param {string} arg
         */
        public setKojoZaikoBashoName(arg: string) {
            this.nmKojoZaikoBasho = arg;
        }

        /**
         * 工場・在庫場所名称取得
         * @return {string}
         */
        public getKojoZaikoBashoName(): string {
            return this.nmKojoZaikoBasho;
        }

        /**
         * 工場・在庫場所略式名称設定
         * @param {string} arg
         */
        public setKojoZaikoBashoRyaku(arg: string) {
            this.nmKojoZaikoBashoRyaku = arg;
        }

        /**
         * 工場・在庫場所略式名称取得
         * @return {string}
         */
        public getKojoZaikoBashoRyaku(): string {
            return this.nmKojoZaikoBashoRyaku;
        }

        /**
         * 管理工程コード設定
         * @param {string} arg
         */
        public setKanriKotei(arg: string) {
            this.cdKanriKotei = arg;
        }

        /**
         * 管理工程コード取得
         * @return {string}
         */
        public getKanriKotei(): string {
            return this.cdKanriKotei;
        }

        /**
         * 管理工程名称設定
         * @param {string} arg
         */
        public setKanriKoteiName(arg: string) {
            this.nmKanriKotei = arg;
        }

        /**
         * 管理工程名称取得
         * @return {string}
         */
        public getKanriKoteiName(): string {
            return this.nmKanriKotei;
        }

        /**
         * 倉庫コード設定
         * @param {string} arg
         */
        public setSoko(arg: string) {
            this.cdSoko = arg;
        }

        /**
         * 倉庫コード取得
         * @return {string}
         */
        public getSoko(): string {
            return this.cdSoko;
        }

        /**
         * 倉庫名称設定
         * @param {string} arg
         */
        public setSokoName(arg: string) {
            this.nmSoko = arg;
        }

        /**
         * 倉庫名称取得
         * @return {string}
         */
        public getSokoName(): string {
            return this.nmSoko;
        }

        /**
         * 倉庫略式名称取得
         * @return {string}
         */
        public getSokoRyaku(): string {
            return this.nmSokoRyaku;
        }

        /**
         * 倉庫略式名称設定
         * @param {string} arg
         */
        public setSokoRyaku(arg: string) {
            this.nmSokoRyaku = arg;
        }

        /**
         * エリアコード設定
         * @param {string} arg
         */
        public setArea(arg: string) {
            this.cdArea = arg;
        }

        /**
         * エリアコード取得
         * @return {string}
         */
        public getArea(): string {
            return this.cdArea;
        }

        /**
         * エリア名称設定
         * @param {string} arg
         */
        public setAreaName(arg: string) {
            this.nmArea = arg;
        }

        /**
         * エリア名称取得
         * @return {string}
         */
        public getAreaName(): string {
            return this.nmArea;
        }

        /**
         * エリア略式名称設定
         * @param {string} arg
         */
        public setAreaRyaku(arg: string) {
            this.nmAreaRyaku = arg;
        }

        /**
         * エリア略式名称取得
         * @return {string}
         */
        public getAreaRyaku(): string {
            return this.nmAreaRyaku;
        }

        /**
         * ゾーンコード設定
         * @param {string} arg
         */
        public setZone(arg: string) {
            this.cdZone = arg;
        }

        /**
         * ゾーンコード取得
         * @return {string}
         */
        public getZone(): string {
            return this.cdZone;
        }

        /**
         * ゾーン名称設定
         * @param {string} arg
         */
        public setZoneName(arg: string) {
            this.nmZone = arg;
        }

        /**
         * ゾーン名称取得
         * @return {string}
         */
        public getZoneName(): string {
            return this.nmZone;
        }

        /**
         * ゾーン略式名称設定
         * @param {string} arg
         */
        public setZoneRyaku(arg: string) {
            this.nmZoneRyaku = arg;
        }

        /**
         * ゾーン略式名称設定
         * @return {string}
         */
        public getZoneRyaku(): string {
            return this.nmZoneRyaku;
        }

        /**
         * プリンターＩＤ設定
         * @param {string} arg
         */
        public setPriterID(arg: string) {
            this.cdPrinterId = arg;
        }

        /**
         * プリンターＩＤ取得
         * @return {string}
         */
        public getPriterID(): string {
            return this.cdPrinterId;
        }

        /**
         * プリンタ名称設定
         * @param {string} arg
         */
        public setPriterName(arg: string) {
            this.nmRonri = arg;
        }

        /**
         * プリンタ名称取得
         * @return {string}
         */
        public getPriterName(): string {
            return this.nmRonri;
        }

        /**
         * ケース管理フラグ設定
         * @param {string} arg
         */
        public setCaseKanri(arg: string) {
            if (arg == null){
                this.fgCaseKanri = false;
                return;
            }
            this.fgCaseKanri = arg === /* valueOf */String(1).toString() ? true : false;
        }

        /**
         * ケース管理フラグ取得
         * @return {boolean}
         */
        public isCaseKanri(): boolean {
            return this.fgCaseKanri;
        }

        /**
         * 損益管理組織コード設定(工場)
         * @param {string} arg
         */
        public setSonekiKanriSoshiki(arg: string) {
            this.cdSonekikanriSoshiki = arg;
        }

        /**
         * 損益管理組織コード取得(工場)
         * @return {string}
         */
        public getSonekiKanriSoshiki(): string {
            return this.cdSonekikanriSoshiki;
        }

        /**
         * 損益管理組織名称レベル３設定(工場)
         * @param {string} arg
         */
        public setNmSonekiSoshikiRyaku3(arg: string) {
            this.nmSonekiSoshikiRyaku3 = arg;
        }

        /**
         * 損益管理組織略式名称レベル３取得(工場)
         * @return {string}
         */
        public getNmSonekiSoshikiRyaku3(): string {
            return this.nmSonekiSoshikiRyaku3;
        }
    }
    YPMCommonInfo["__class"] = "lib.com.megsnow.ypm.cmn.YPMCommonInfo";

}

