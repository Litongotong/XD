/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.sms.sol.sys.cjf {
    /**
     * Constructor for SampleSpreadCellData.
     * @class
     * @extends lib.com.fujitsu.jcf.gui.JCFSpreadCellData
     */
    export class SMSJCFSpreadCellData extends lib.com.fujitsu.jcf.gui.JCFSpreadCellData {
        public constructor() {
            super();
        }

        /**
         * セルの値を取得します。<p>
         * 編集型が日付項目のときの日付を取得します。<br>
         * 基底がprotectedの為、オーバライド
         * 
         * @return {com.java.Date} 日付
         */
        getDateValue(): com.java.Date {
            return super.getDateValue();
        }
    }
    SMSJCFSpreadCellData["__class"] = "lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadCellData";

}

