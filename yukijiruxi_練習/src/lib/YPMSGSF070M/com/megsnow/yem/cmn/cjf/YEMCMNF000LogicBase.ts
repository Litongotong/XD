/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.megsnow.yem.cmn.cjf {
    /**
     * 逕滓�舌＆繧後ｋ繧ｳ繝｡繝ｳ繝医ｒ螟画峩縺励◆縺�蝣ｴ蜷医�ｯ縲√え繧｣繝ｳ繝峨え>險ｭ螳�>Java>繝�繝ｳ繝励Ξ繝ｼ繝�
     * 縺ｮ"typecomment"繝�繝ｳ繝励Ξ繝ｼ繝亥､画焚繧堤ｷｨ髮�縺励※縺上□縺輔＞縲�
     * 繧ｳ繝｡繝ｳ繝医ｒ逕滓�舌☆繧九°縺ｩ縺�縺九↓縺､縺�縺ｦ縺ｯ縲√え繧｣繝ｳ繝峨え>險ｭ螳�>Java>繧ｳ繝ｼ繝臥函謌�
     * 縺ｧ險ｭ螳壹＠縺ｦ縺上□縺輔＞縲�
     * @class
     * @extends com.fujitsu.sms.sol.sys.cjf.SMSCjfLogicBase
     */
    export abstract class YEMCMNF000LogicBase extends com.fujitsu.sms.sol.sys.cjf.SMSCjfLogicBase implements lib.com.megsnow.yem.cmn.cjf.YEMCMNF000ItemDefines, lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines {
        /**
         * 繝ｦ繝ｼ繧ｹ繧ｱ繝ｼ繧ｹID繧偵そ繝�繝医＠縺ｾ縺吶��<BR>
         * 豢ｾ逕溷�医〒縺ｯ
         * 莉･荳九�ｮ逕ｨ縺ｫ螳溯｣�縺励※縺上□縺輔＞縲�<BR>
         * <pre>
         * protected void setUseCaseID() {
         * super.useCaseID = USECASE;
         * }
         * </pre>
         */
        abstract setUseCaseID();

        /**
         * 繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹMsg繧ｭ繝ｼ 縺ｧ縺吶��
         * 繝�繝ｼ繧ｿ縺ｯString縺ｧ菫晄戟縺励∪縺吶��
         */
        public CD_HANYO: string;

        /**
         * 繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹMsg蜷咲ｧｰ 縺ｧ縺吶��
         * 繝�繝ｼ繧ｿ縺ｯString縺ｧ菫晄戟縺励∪縺吶��
         */
        public NM_NAIYO1: string;

        /**
         * 繝√ぉ繝�繧ｯ繝懊ャ繧ｯ繧ｹ縺ｮ驕ｸ謚槫庄蜷ｦ繧呈枚蟄怜､画鋤縺励※霑斐☆<BR>
         * @param  {boolean} chkState:繝√ぉ繝�繧ｯ繝懊ャ繧ｯ繧ｹ縺ｮ驕ｸ謚樒憾諷� 驕ｸ謚橸ｼ嗾rue縲�髱樣∈謚橸ｼ喃alse
         * @return {string} String: 繝√ぉ繝�繧ｯ邨先棡縺ｮ譁�蟄�(true:縲�1縲阪��false:縲�0縲�)
         */
        public crvtBooleanToZeroOneStr(chkState: boolean): string {
            return (chkState === true) ? lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.STR_ONE : lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.STR_ZERO;
        }

        /**
         * 繝√ぉ繝�繧ｯ繝懊ャ繧ｯ繧ｹ縺ｮ驕ｸ謚槫庄蜷ｦ繧呈枚蟄怜､画鋤縺励※霑斐☆<BR>
         * @param  {string} chkState:繝√ぉ繝�繧ｯ繝懊ャ繧ｯ繧ｹ縺ｮ驕ｸ謚樒憾諷� 驕ｸ謚橸ｼ嗾rue縲�髱樣∈謚橸ｼ喃alse
         * @return {string} String: 繝√ぉ繝�繧ｯ邨先棡縺ｮ譁�蟄�(true:縲�1縲阪��false:縲�0縲�)
         */
        public chkStateToZeroOne(chkState: string): string {
            return (chkState === lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.STR_TRUE) ? lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.STR_ONE : lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.STR_ZERO;
        }

        public static isNullOrEmpty$java_lang_String(value: string): boolean {
            if (value == null || (value === lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.STR_BLANK)){
                return true;
            }
            return false;
        }

        public static isNullOrEmpty$java_lang_String$boolean(value: string, trimFlg: boolean): boolean {
            if (trimFlg === true){
                if (YEMCMNF000LogicBase.isNullOrEmpty$java_lang_String(value) === false){
                    value = /* replaceAll */value.trim().replace(new RegExp(" ", 'g'),"");
                }
            }
            return YEMCMNF000LogicBase.isNullOrEmpty$java_lang_String(value);
        }

        /**
         * 譁�蟄怜�励′Null繧ゅ＠縺上�ｯ遨ｺ縺ｧ縺ゅｋ縺薙→繧貞愛蛻･縺励∪縺吶��
         * 
         * @param {string} value String
         * @param {boolean} trimFlg 	譁�蟄怜�励�ｮ繝医Μ繝�繧定｡後≧縺句凄縺九ｒ險ｭ螳壹＠縺ｾ縺吶��<br>
         * True:Trim繧定｡後≧縲：alse:Trim縺励↑縺�
         * @return {boolean} boolean True:Null繧ゅ＠縺上�ｯ遨ｺ縲�False:蛟､縺ゅｊ
         */
        public static isNullOrEmpty(value?: any, trimFlg?: any): boolean {
            if (((typeof value === 'string') || value === null) && ((typeof trimFlg === 'boolean') || trimFlg === null)) {
                return <any>lib.com.megsnow.yem.cmn.cjf.YEMCMNF000LogicBase.isNullOrEmpty$java_lang_String$boolean(value, trimFlg);
            } else if (((typeof value === 'string') || value === null) && trimFlg === undefined) {
                return <any>lib.com.megsnow.yem.cmn.cjf.YEMCMNF000LogicBase.isNullOrEmpty$java_lang_String(value);
            } else throw new Error('invalid overload');
        }

        public nullToBlank(value: string): string {
            return (value == null || (value === (" "))) ? lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.STR_BLANK : value;
        }

        public blankToZeroStr(value: string): string {
            return (value.length === 0) ? lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.STR_ZERO : value;
        }

        public blankToNull(value: string): string {
            return (value.length === 0) ? null : value;
        }

        /**
         * SPREAD蜀�縺ｮ蜈ｨ驕ｸ謚槭�∝�ｨ隗｣髯､繝懊ち繝ｳ謚ｼ荳区凾縺ｮ蜃ｦ逅�繧定｡後≧
         * 
         * 縲�<br>
         * @param	SMSJCFSpreadData spread  SPREAD縺ｮOBJ<br>
         * @param	int  indexColum縲�spread蜀�縺ｮCheckBox縺ｮ蛻悠ndex<br>
         * @param {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} spread
         * @param {number} columIndex
         * @param {boolean} stateFlag
         */
        public checkAllInSprdCheckBox(spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData, columIndex: number, stateFlag: boolean) {
            for(let i: number = 0; i < spread.getRowCount(); i++) {{
                spread.setCellValue$int$int$boolean(i, columIndex, stateFlag);
            };}
        }

        /**
         * Spread縺ｫ縺ｦ繧､繝吶Φ繝医′陦後▲縺溽樟蝨ｨCell縺ｮ諠�蝣ｱ繧呈戟縺｣縺ｦ縺�繧徽CFSpreadCellPosition繧貞叙蠕�
         * @param JCFEvent event
         * @param MorinagaJCFSpreadData spreadData
         * @return {com.fujitsu.jcf.gui.JCFSpreadCellPosition} JCFSpreadCellPosition
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event
         */
        public getSpreadCellPosition(event: com.fujitsu.jcf.ctrl.JCFEvent): com.fujitsu.jcf.gui.JCFSpreadCellPosition {
            const eventInfo: com.fujitsu.jcf.ctrl.JCFEventAdditionalInfo = event.getEventAdditionalInfo();
            const spreadInfo: com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo = <com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo>eventInfo.getAdditionalInfo();
            if (spreadInfo == null){
                return null;
            } else {
                return spreadInfo.getCellPosition();
            }
        }

        /**
         * <dd>繝｡繧ｽ繝�繝牙錐�ｼ�       initSpreadBackgroundCollor
         * <dd>繝｡繧ｽ繝�繝芽ｪｬ譏趣ｼ�     繧ｹ繝励Ξ繝�繝峨そ繝ｫ縺ｮ繝舌ャ繧ｯ繧ｰ繝ｩ繧ｦ繝ｳ繝峨き繝ｩ繝ｼ繧貞�晄悄蛹悶＠縺ｾ縺�
         * @param  {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} spreadData   SMSJCFSpreadData
         * 
         */
        public initSpreadBackgroundCollor(spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData) {
            for(let i: number = 0; i < spreadData.getRowCount(); i++) {{
                for(let j: number = 0; j < spreadData.getColumnCount(); j++) {{
                    this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData$int$int(false, spreadData, j, i);
                };}
            };}
        }

        public initSprdCellPosition(spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData) {
            spreadData.setPosition$int$java_lang_String(lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.NUM_MINUS_ONE, lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.STR_BLANK);
        }

        public getSpreadCheckedCnt(spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData): number {
            let count: number = 0;
            if (spread.getRowCount() === 0)return count;
            for(let i: number = 0; i < spread.getRowCount(); i++) {{
                if (spread.getCellBooleanValue(i, 0)){
                    count = count + 1;
                }
            };}
            return count;
        }

        /**
         * 騾∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ縺ｫ蟇ｾ蠢懊＠縺溘せ繝励Ξ繝�繝牙�礼分蜿ｷ繧貞叙蠕励☆繧�<br>
         * <pre>
         * 謖�螳壹＠縺滄�∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ縺九ｉ縲∝ｯｾ蠢懊☆繧九せ繝励Ξ繝�繝牙�礼分蜿ｷ繧貞叙蠕励＠縺ｾ縺吶��<br>
         * 
         * [蠑墓焚]
         * spreadFieldKey 騾∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ縺ｨ繧ｹ繝励Ξ繝�繝牙�励�ｮ蟇ｾ蠢懆｡ｨ
         * 繝ｻ繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ縺ｨ繧ｹ繝励Ξ繝�繝牙�礼分蜿ｷ縺ｮ蟇ｾ蠢�(1, 2)
         * 繝ｻ繧ｹ繝励Ξ繝�繝牙�励°繧蛾�∽ｿ｡蟇ｾ雎｡繝輔ぅ繝ｼ繝ｫ繝峨�ｮ蟇ｾ蠢�(2, 3)
         * 繝ｻ繝ｬ繧ｳ繝ｼ繝峨ｒ隴伜挨縺吶ｋ縺溘ａ縺ｮ邨�縺ｿ蜷医ｏ縺帙く繝ｼ縺ｮ蟇ｾ蠢�(2, 4)
         * String[][] spreadFieldKey 騾∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ縺ｨ繧ｹ繝励Ξ繝�繝牙�励�ｮ蟇ｾ蠢懆｡ｨ
         * + [][0] 騾∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ(CBSMsg繧ｹ繧ｭ繝ｼ繝�)
         * + [][1] 蛻礼分蜿ｷ
         * + [][2] 繧ｵ繝ｼ繝宣�∽ｿ｡繝｡繝�繧ｻ繝ｼ繧ｸ縺ｫ蜿肴丐縺吶ｋ縺九←縺�縺�
         * + [][3] 繧ｹ繝励Ξ繝�繝峨ョ繝ｼ繧ｿ縺九ｉ繝ｬ繧ｳ繝ｼ繝峨ｒ隴伜挨縺吶ｋ縺溘ａ縺ｮ邨�縺ｿ蜷医ｏ縺帙く繝ｼ鬆�逶ｮ
         * </pre>
         * 
         * @param {java.lang.String[][]} spreadFieldKey 騾∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ縺ｨ繧ｹ繝励Ξ繝�繝牙�励�ｮ蟇ｾ蠢懆｡ｨ<br>
         * @param {string} colName 騾∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ<br>
         * @return {number} 騾∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ縺ｫ蟇ｾ蠢懊＠縺溘せ繝励Ξ繝�繝牙�礼分蜿ｷ<br>
         * -1: 蟇ｾ蠢懊＠縺溷�礼分蜿ｷ縺後↑縺�<br>
         */
        public getSpreadColNumber(spreadFieldKey: string[][], colName: string): number {
            let colNum: number = -1;
            for(let row: number = 0; row < spreadFieldKey.length; row++) {{
                if (spreadFieldKey[row][0] === colName){
                    colNum = /* parseInt */parseInt(spreadFieldKey[row][1]);
                    break;
                }
            };}
            return colNum;
        }

        /**
         * 繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ縺ｮ驕ｸ謚槭＆繧後※縺�繧九さ繝ｼ繝峨ｒ蜿門ｾ励☆繧�<br>
         * 
         * @param {com.fujitsu.jcf.gui.JCFSelectableElement[]} cellElement 繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ驕ｸ謚槭Μ繧ｹ繝�<br>
         * @return {string} 驕ｸ謚槭＆繧後※縺�繧九さ繝ｼ繝�<br>
         */
        public getComboboxSelectedId(cellElement: com.fujitsu.jcf.gui.JCFSelectableElement[]): string {
            let selectedId: string = "";
            for(let cnt: number = 0; cnt < cellElement.length; cnt++) {{
                if (cellElement[cnt].isSelected()){
                    selectedId = cellElement[cnt].getID();
                    break;
                }
            };}
            return selectedId;
        }

        /**
         * 繧ｹ繝励Ξ繝�繝峨そ繝ｫ縺ｮ繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ繧定ｨｭ螳壹☆繧�<br>
         * 
         * @param {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} spreadData 繧ｹ繝励Ξ繝�繝吋ataBean<br>
         * @param {number} rowNum 陦檎分蜿ｷ<br>
         * @param {number} colNum 蛻礼分蜿ｷ<br>
         * @param {string} selectedCode 繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ驕ｸ謚槭さ繝ｼ繝�<br>
         * @exception Exception CJF縺ｧ萓句､悶′逋ｺ逕溘＠縺溷�ｴ蜷医↓繧ｹ繝ｭ繝ｼ縺輔ｌ繧倶ｾ句､悶が繝悶ず繧ｧ繧ｯ繝�<br>
         */
        public setSelectedSprdCombo(spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData, rowNum: number, colNum: number, selectedCode: string) {
            const cellElement: com.fujitsu.jcf.gui.JCFSelectableElement[] = spreadData.getColumnInformationSelectableElements(colNum);
            for(let cnt: number = 0; cnt < cellElement.length; cnt++) {{
                cellElement[cnt].setSelected(cellElement[cnt].getID() === selectedCode);
            };}
            spreadData.setCellValue$int$int$com_fujitsu_jcf_gui_JCFSelectableElement_A(rowNum, colNum, cellElement);
        }

        /**
         * yyyyMM蠖｢蠑上ｒString蠖｢蠑上�ｮ譌･莉麓yyyy/MM]縺ｫ螟画鋤縺吶ｋ
         * Spread蜀�縺ｮDateField縺ｫ譌･莉倥ｒ繧ｻ繝�繝医☆繧句�ｴ蜷医↓菴ｿ縺�
         * @param strDate : yyyyMM蠖｢縺ｮ譌･莉倥�ｮ譁�蟄怜��
         * @return {string} String date : yyyy/MM縺ｮ譁�蟄怜��
         * @param {string} dateStr
         */
        public addSlashYYMM(dateStr: string): string {
            if (dateStr == null || ((dateStr.trim()) === ("")))return lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.STR_BLANK;
            const sb: { str: string, toString: Function } = { str: dateStr, toString: function() { return this.str; } };
            /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 4, '/');
            return /* toString */sb.str;
        }

        /**
         * String蠖｢蠑上�ｮ譌･莉�(yyyymmdd)繧�(yyyy/mm/dd)蠖｢蠑上↓螟画鋤縺吶ｋ
         * @param String dateStr�ｼ噐yyy/mm/dd
         * @return {string} String
         * @param {string} dateStr
         */
        public addSlashYYMMDD(dateStr: string): string {
            if (dateStr == null || ((dateStr.trim()) === ("")))return lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.STR_BLANK;
            if (dateStr.indexOf("/") < 0){
                const tempYear: string = dateStr.substring(0, 4);
                const tempMonth: string = dateStr.substring(4, 6);
                const tempDay: string = dateStr.substring(6, 8);
                dateStr = tempYear + "/" + tempMonth + "/" + tempDay;
            }
            return dateStr;
        }

        /**
         * 99991231縺ｮ譌･莉倥ｒ繝悶Λ繝ｳ繧ｯ縺ｫ螟画鋤縺吶ｋ
         * @param String dateStr�ｼ噐yyy/mm/dd
         * @return {string} String
         * @param {string} dateStr
         */
        public chgMaxDateToBlank(dateStr: string): string {
            if (dateStr === lib.com.megsnow.yem.cmn.cjf.YEMCMNF000ItemDefines.DT_TEKIYOSHURYO_MAX){
                return lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.STR_BLANK;
            }
            return dateStr;
        }

        /**
         * Spread蜀�縺ｮDateFiled繧医ｊ蜿悶▲縺溘��/縲堺ｻ倥″蠖｢蠑上ｒ縲�/縲肴栢縺阪〒霑斐☆
         * @param String slashDate �ｼ壹�軽yyy/MM/dd縲榊ｽ｢蠑上�ｮ譌･莉俶枚蟄怜��
         * @return {string} String �ｼ壹�軽yyyMMdd縲榊ｽ｢蠑上�ｮ譌･莉俶枚蟄怜��
         * @param {string} slashDate
         */
        public delSlashDate(slashDate: string): string {
            if (slashDate.length === 0){
                return slashDate;
            } else {
                return /* replaceAll */slashDate.replace(new RegExp("/", 'g'),"");
            }
        }

        /**
         * Spread縺ｫ縺ｦ邱ｨ髮�蜿ｯ蜷ｦCell繧呈欠螳壹☆繧�
         * @param {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} spreadData�ｼ� SMSJCFSpreadDataObj
         * @param {int[]} colIdArray[] �ｼ夂ｷｨ髮�荳榊庄縺ｫ縺吶ｋ陦後�ｮColumIndex繧呈欠螳壹＠縺殃nt蝙矩�榊��
         * @return {void} void
         */
        public addRowSprAndCellEditableFalse(spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData, colIdArray: number[]) {
            spreadData.addRow$();
            const lastRow: number = spreadData.getRowCount() - 1;
            for(let i: number = 0; i < colIdArray.length; i++) {{
                spreadData.setCellEditable(lastRow, colIdArray[i], false);
            };}
        }

        /**
         * 繧ｹ繝励Ξ繝�繝峨そ繝ｫ縺ｮ繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ繧定ｨｭ螳壹☆繧�<br>
         * 
         * @param {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} spreadData 繧ｹ繝励Ξ繝�繝吋ataBean<br>
         * @param {number} rowNum 陦檎分蜿ｷ<br>
         * @param {number} colNum 蛻礼分蜿ｷ<br>
         * @param {string} selectedCode 繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ驕ｸ謚槭さ繝ｼ繝�<br>
         * @exception Exception CJF縺ｧ萓句､悶′逋ｺ逕溘＠縺溷�ｴ蜷医↓繧ｹ繝ｭ繝ｼ縺輔ｌ繧倶ｾ句､悶が繝悶ず繧ｧ繧ｯ繝�<br>
         */
        public setSprdComboboxId(spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData, rowNum: number, colNum: number, selectedCode: string) {
            const cellElement: com.fujitsu.jcf.gui.JCFSelectableElement[] = spreadData.getColumnInformationSelectableElements(colNum);
            for(let cnt: number = 0; cnt < cellElement.length; cnt++) {{
                cellElement[cnt].setSelected(cellElement[cnt].getID() === selectedCode);
            };}
        }

        /**
         * 繧ｵ繝ｼ繝仙女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ縺九ｉSPREAD蜀�縺ｫ繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ險ｭ螳�<br>
         * @param {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} spreadData 繧ｹ繝励Ξ繝�繝吋ataBean<br>
         * @param {java.util.HashMap[]} comboList combobox縺ｮ繝ｪ繧ｹ繝医↓隧ｲ蠖薙☆繧稀ashMap縺ｮ驟榊��<br>
         * @param {java.util.HashMap[]} comboList 繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ縺ｨ陦ｨ遉ｺ縺吶ｋ繝輔ぅ繝ｼ繝ｫ繝峨ョ繝ｼ繧ｿ縺ｮ蟇ｾ蠢懆｡ｨ<br>
         * @param {number} columIndex 繧ｹ繝励Ξ繝�繝牙��縺ｧcomboBox縺悟�･繧句�励�ｮ逡ｪ蜿ｷ<br>
         * @param {boolean} addBlankRow 遨ｺ逋ｽ陦後ｒ蜷ｫ繧�縺句凄縺九ｒ驕ｸ謚槭☆繧九��true�ｼ壼性繧�縲�false�ｼ壼性縺ｾ縺ｪ縺�<br>
         * @return {void} void<br>
         */
        public setSprdComboboxFromMessage(spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData, comboList: any[], columIndex: number, addBlankRow: boolean) {
            if (spreadData == null || comboList == null){
                return;
            }
            const cellElement: com.fujitsu.jcf.gui.JCFSelectableElement[] = this.convertToSelectableElements(comboList, addBlankRow);
            spreadData.setColumnInformationSelectableElements(columIndex, cellElement);
        }

        /**
         * 繧ｵ繝ｼ繝仙女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ縺九ｉ繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ險ｭ螳�<br>
         * @param {com.fujitsu.jcf.gui.JCFComboBoxData} comboItem JCFComboBoxDataObj<br>
         * @param {java.util.HashMap[]} comboList combobox縺ｮ繝ｪ繧ｹ繝医↓隧ｲ蠖薙☆繧稀ashMap縺ｮ驟榊��<br>
         * @param {boolean} addBlankRow 遨ｺ逋ｽ陦後ｒ蜷ｫ繧�縺句凄縺九ｒ驕ｸ謚槭☆繧九��true�ｼ壼性繧�縲�false�ｼ壼性縺ｾ縺ｪ縺�<br>
         * @return {void} void<br>
         */
        public setComboboxFromMessage(comboItem: com.fujitsu.jcf.gui.JCFComboBoxData, comboList: any[], addBlankRow: boolean) {
            if (comboItem == null || comboList == null){
                return;
            }
            const cellElement: com.fujitsu.jcf.gui.JCFSelectableElement[] = this.convertToSelectableElements(comboList, addBlankRow);
            comboItem.setValue$com_fujitsu_jcf_gui_JCFSelectableElement_A(cellElement);
        }

        /**
         * 蜷咲ｧｰ繝槭せ繧ｿ縺ｮ隕∫ｴ�繧偵さ繝ｳ繝懊�懊ャ繧ｯ繧ｹ繝�繝ｼ繧ｿ縺ｫ螟画鋤縺吶ｋ<br>
         * 
         * @param {java.util.HashMap[]} elementMapList 蜷咲ｧｰ繝槭せ繧ｿ繝ｬ繧ｳ繝ｼ繝峨Μ繧ｹ繝�<br>
         * @param blankRow 遨ｺ逋ｽ陦後ｒ蜷ｫ繧√ｋ縺九←縺�縺具ｼ�true:蜷ｫ繧√ｋ�ｼ�<br>
         * @return {com.fujitsu.jcf.gui.JCFSelectableElement[]} JCFSelectableElement[] 繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ縺ｮ繝�繝ｼ繧ｿ<br>
         * @param {boolean} addBlankRow
         */
        public convertToSelectableElements(elementMapList: any[], addBlankRow: boolean): com.fujitsu.jcf.gui.JCFSelectableElement[] {
            let comboElements: com.fujitsu.jcf.gui.JCFSelectableElement[] = null;
            if (addBlankRow){
                comboElements = (s => { let a=[]; while(s-->0) a.push(null); return a; })(elementMapList.length + 1);
                comboElements[0] = new com.fujitsu.jcf.gui.JCFSelectableElement("", "", false);
                for(let row: number = 1; row < comboElements.length; row++) {{
                    const elementMap: any = <any>elementMapList[row - 1];
                    const comboKey: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>elementMap, this.CD_HANYO);
                    const comboValue: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>elementMap, this.NM_NAIYO1);
                    comboElements[row] = new com.fujitsu.jcf.gui.JCFSelectableElement(comboValue, comboKey, false);
                };}
            } else {
                comboElements = (s => { let a=[]; while(s-->0) a.push(null); return a; })(elementMapList.length);
                for(let row: number = 0; row < comboElements.length; row++) {{
                    const elementMap: any = <any>elementMapList[row];
                    const comboKey: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>elementMap, this.CD_HANYO);
                    const comboValue: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>elementMap, this.NM_NAIYO1);
                    comboElements[row] = new com.fujitsu.jcf.gui.JCFSelectableElement(comboValue, comboKey, false);
                };}
            }
            return comboElements;
        }

        public creatComoboHashMap(comboList: string[][]): any[] {
            const comboMapList: any[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(comboList.length);
            for(let i: number = 0; i < comboMapList.length; i++) {{
                const comboMap: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>comboMap, "key", comboList[i][0]);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>comboMap, "value", comboList[i][1]);
                comboMapList[i] = comboMap;
            };}
            return comboMapList;
        }

        public showHashMapKey(inMap: any) {
            const irt: any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>inMap));
            while((irt.hasNext())) {{
                const key: string = <string>irt.next();
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showHashMapKey:key\ufffd\uff7c\ufffd" + key);
            }};
        }

        public setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(err_flg: boolean, itemdata: com.fujitsu.jcf.gui.JCFItemData) {
            if (err_flg === true){
                itemdata.setBackground(lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.CL_ERR_ON_COLOR_$LI$());
            } else {
                itemdata.setBackground(lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.CL_ERR_OFF_COLOR_$LI$());
            }
        }

        public setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData$int$int(err_flg: boolean, itemdata: com.fujitsu.jcf.gui.JCFItemData, column: number, row: number) {
            const spdData: com.fujitsu.jcf.gui.JCFSpreadData = <com.fujitsu.jcf.gui.JCFSpreadData>itemdata;
            if (err_flg === true){
                spdData.setCellBackground(row, column, lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.CL_ERR_ON_COLOR_$LI$());
            } else {
                spdData.setCellBackground(row, column, lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.CL_ERR_OFF_COLOR_$LI$());
            }
        }

        /**
         * 繧ｨ繝ｩ繝ｼ繧ｳ繝ｳ繝昴�ｼ繝阪Φ繝医�ｮ閭梧勹濶ｲ繧定ｨｭ螳壹☆繧�
         * 繧ｹ繝励Ξ繝�繝�
         * @param {boolean} err_flg
         * @param {com.fujitsu.jcf.gui.JCFItemData} itemdata
         * @param {number} column
         * @param {number} row
         */
        public setCompErrColor(err_flg?: any, itemdata?: any, column?: any, row?: any) {
            if (((typeof err_flg === 'boolean') || err_flg === null) && ((itemdata != null && itemdata instanceof <any>com.fujitsu.jcf.gui.JCFItemData) || itemdata === null) && ((typeof column === 'number') || column === null) && ((typeof row === 'number') || row === null)) {
                return <any>this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData$int$int(err_flg, itemdata, column, row);
            } else if (((typeof err_flg === 'boolean') || err_flg === null) && ((itemdata != null && itemdata instanceof <any>com.fujitsu.jcf.gui.JCFItemData) || itemdata === null) && column === undefined && row === undefined) {
                return <any>this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(err_flg, itemdata);
            } else throw new Error('invalid overload');
        }

        /**
         * 繧ｹ繝励Ξ繝�繝峨そ繝ｫ縺ｮ驕ｸ謚槭＆繧後◆繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ縺ｮ繧ｳ繝ｼ繝峨ｒ蜿門ｾ励☆繧�<br>
         * 
         * @param {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} spreadData 繧ｹ繝励Ξ繝�繝吋ataBean<br>
         * @param {number} rowNum 陦檎分蜿ｷ<br>
         * @param {number} colNum 蛻礼分蜿ｷ<br>
         * @param selectedCode 繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ驕ｸ謚槭さ繝ｼ繝�<br>
         * @exception Exception CJF縺ｧ萓句､悶′逋ｺ逕溘＠縺溷�ｴ蜷医↓繧ｹ繝ｭ繝ｼ縺輔ｌ繧倶ｾ句､悶が繝悶ず繧ｧ繧ｯ繝�<br>
         * @return {string}
         */
        public getSelectedSprdComboId(spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData, rowNum: number, colNum: number): string {
            const cellElement: com.fujitsu.jcf.gui.JCFSelectableElement[] = spreadData.getCellSelectableElementValue(rowNum, colNum);
            let selectedId: string = "";
            for(let cnt: number = 0; cnt < cellElement.length; cnt++) {{
                if (cellElement[cnt].isSelected()){
                    selectedId = cellElement[cnt].getID();
                    break;
                }
            };}
            return selectedId;
        }

        /**
         * 騾∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ縺ｫ蟇ｾ蠢懊＠縺溘せ繝励Ξ繝�繝牙�湧AME繧貞叙蠕励☆繧�<br>
         * <pre>
         * 謖�螳壹＠縺滄�∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ縺九ｉ縲∝ｯｾ蠢懊☆繧九せ繝励Ξ繝�繝牙�湧AME繧貞叙蠕励＠縺ｾ縺吶��<br>
         * 
         * [蠑墓焚]
         * spreadFieldKey 騾∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ縺ｨ繧ｹ繝励Ξ繝�繝牙�励�ｮ蟇ｾ蠢懆｡ｨ
         * 繝ｻ繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ縺ｨ繧ｹ繝励Ξ繝�繝牙�礼分蜿ｷ縺ｮ蟇ｾ蠢�(1, 2)
         * 繝ｻ繧ｹ繝励Ξ繝�繝牙�励°繧蛾�∽ｿ｡蟇ｾ雎｡繝輔ぅ繝ｼ繝ｫ繝峨�ｮ蟇ｾ蠢�(2, 3)
         * 繝ｻ繝ｬ繧ｳ繝ｼ繝峨ｒ隴伜挨縺吶ｋ縺溘ａ縺ｮ邨�縺ｿ蜷医ｏ縺帙く繝ｼ縺ｮ蟇ｾ蠢�(2, 4)
         * String[][] spreadFieldKey 騾∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ縺ｨ繧ｹ繝励Ξ繝�繝牙�励�ｮ蟇ｾ蠢懆｡ｨ
         * + [][0] 騾∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ(CBSMsg繧ｹ繧ｭ繝ｼ繝�)
         * + [][1] 蛻礼分蜿ｷ
         * + [][2] 繧ｵ繝ｼ繝宣�∽ｿ｡繝｡繝�繧ｻ繝ｼ繧ｸ縺ｫ蜿肴丐縺吶ｋ縺九←縺�縺�
         * + [][3] 繧ｹ繝励Ξ繝�繝峨ョ繝ｼ繧ｿ縺九ｉ繝ｬ繧ｳ繝ｼ繝峨ｒ隴伜挨縺吶ｋ縺溘ａ縺ｮ邨�縺ｿ蜷医ｏ縺帙く繝ｼ鬆�逶ｮ
         * </pre>
         * 
         * @param colID 騾∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ縺ｨ繧ｹ繝励Ξ繝�繝牙�励�ｮ蟇ｾ蠢懆｡ｨ<br>
         * @param colName 繧ｹ繝励Ξ繝�繝牙�励�ｮID<br>
         * @return {string} 騾∝女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ繧ｭ繝ｼ縺ｫ蟇ｾ蠢懊＠縺溘せ繝励Ξ繝�繝牙�湧AME<br>
         * NULL: 蟇ｾ蠢懊＠縺溷�湧AME縺後↑縺�<br>
         * @param {java.lang.String[][]} spreadFieldKey
         * @param {string} colId
         */
        public getSpreadColName(spreadFieldKey: string[][], colId: string): string {
            let colName: string = null;
            for(let row: number = 0; row < spreadFieldKey.length; row++) {{
                if (spreadFieldKey[row][1] === colId){
                    colName = spreadFieldKey[row][0];
                    break;
                }
            };}
            return colName;
        }

        /**
         * -n譛医�ｮ蟷ｴ譛郁ｨ育ｮ励��
         * @param  {string} unyobi  驕狗畑譌･
         * @param縲�before縲�菴輔Ω譛亥燕 萓�:  -12
         * @return {java.util.HashMap[]} mapList[]  before 譛磯俣縺ｮHashMap[]
         * @param {number} before
         */
        public getBeforeMonth(unyobi: string, before: number): any[] {
            const mapList: any[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(1 - before);
            let count: number = 0;
            for(let i: number = before; i <= 0; i++) {{
                const cal: com.java.Calendar = com.java.Calendar.getInstance();
                cal.set(/* parseInt */parseInt(unyobi.substring(0, 4)), /* parseInt */parseInt(unyobi.substring(4, 6)) - 1, 1);
                cal.add(com.java.Calendar.MONTH, i);
                const date: string = new com.java.SimpleDateFormat("yyyyMM").format(cal.getTime());
                const dateSlash: string = new com.java.SimpleDateFormat("yyyy/MM").format(cal.getTime());
                const comboMap: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>comboMap, this.CD_HANYO, date);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>comboMap, this.NM_NAIYO1, dateSlash);
                mapList[count] = comboMap;
                count++;
            };}
            return mapList;
        }

        /**
         * -n譛医�ｮ蟷ｴ譛郁ｨ育ｮ�(迴ｾ蝨ｨ譛医ｈ繧願｡ｨ遉ｺ譎�)縲�
         * @param  {string} unyobi  驕狗畑譌･
         * @param縲�before縲�菴輔Ω譛亥燕 萓�:  -12
         * @return {java.util.HashMap[]} mapList[]  before 譛磯俣縺ｮHashMap[]
         * @param {number} before
         */
        public getBeforeInverseMonth(unyobi: string, before: number): any[] {
            const mapList: any[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(1 - before);
            let count: number = 0;
            for(let i: number = 0; i >= before; i--) {{
                const cal: com.java.Calendar = com.java.Calendar.getInstance();
                cal.set(/* parseInt */parseInt(unyobi.substring(0, 4)), /* parseInt */parseInt(unyobi.substring(4, 6)) - 1, 1);
                cal.add(com.java.Calendar.MONTH, i);
                const date: string = new com.java.SimpleDateFormat("yyyyMM").format(cal.getTime());
                const dateSlash: string = new com.java.SimpleDateFormat("yyyy/MM").format(cal.getTime());
                const comboMap: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>comboMap, this.CD_HANYO, date);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>comboMap, this.NM_NAIYO1, dateSlash);
                mapList[count] = comboMap;
                count++;
            };}
            return mapList;
        }

        /**
         * -n譛医�ｮ蟷ｴ譛郁ｨ育ｮ�(蜑肴怦繧医ｊ陦ｨ遉ｺ譎�)縲�
         * @param  {string} unyobi  驕狗畑譌･
         * @param縲�before縲�菴輔Ω譛亥燕 萓�:  -12
         * @return {java.util.HashMap[]} mapList[]  before 譛磯俣縺ｮHashMap[]
         * @param {number} before
         */
        public getBeforeInverseMonth2(unyobi: string, before: number): any[] {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("getBeforeInverseMonth2:start");
            const mapList: any[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(-before);
            let count: number = 0;
            for(let i: number = -1; i >= before; i--) {{
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("getBeforeInverseMonth2:for start");
                const cal: com.java.Calendar = com.java.Calendar.getInstance();
                cal.set(/* parseInt */parseInt(unyobi.substring(0, 4)), /* parseInt */parseInt(unyobi.substring(4, 6)) - 1, 1);
                cal.add(com.java.Calendar.MONTH, i);
                const date: string = new com.java.SimpleDateFormat("yyyyMM").format(cal.getTime());
                const dateSlash: string = new com.java.SimpleDateFormat("yyyy/MM").format(cal.getTime());
                const comboMap: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>comboMap, this.CD_HANYO, date);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>comboMap, this.NM_NAIYO1, dateSlash);
                mapList[count] = comboMap;
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("getBeforeInverseMonth2:comboMap=" + comboMap);
                count++;
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("getBeforeInverseMonth2:for end");
            };}
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("getBeforeInverseMonth2:end");
            return mapList;
        }

        /**
         * +n譛医�ｮ蟷ｴ譛郁ｨ育ｮ励��
         * @param  {string} unyobi  驕狗畑譌･
         * @param縲�after	菴輔Ω譛亥ｾ� 萓�:  12
         * @return {java.util.HashMap[]} mapList[]  after 譛磯俣縺ｮHashMap[]
         * @param {number} after
         */
        public getMonth(unyobi: string, after: number): any[] {
            const mapList: any[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(after + 1);
            for(let j: number = 0; j <= after; j++) {{
                const cal: com.java.Calendar = com.java.Calendar.getInstance();
                cal.set(/* parseInt */parseInt(unyobi.substring(0, 4)), /* parseInt */parseInt(unyobi.substring(4, 6)) - 1, 1);
                cal.add(com.java.Calendar.MONTH, j);
                const date: string = new com.java.SimpleDateFormat("yyyyMM").format(cal.getTime());
                const dateSlash: string = new com.java.SimpleDateFormat("yyyy/MM").format(cal.getTime());
                const comboMap: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>comboMap, this.CD_HANYO, date);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>comboMap, this.NM_NAIYO1, dateSlash);
                mapList[j] = comboMap;
            };}
            return mapList;
        }

        /**
         * 謨ｰ蛟､繝√ぉ繝�繧ｯ繝｡繧ｽ繝�繝峨��
         * <p>
         * 蠑墓焚縺ｧ貂｡縺輔ｌ繧九メ繧ｧ繝�繧ｯ繧定｡後＞縺ｾ縺吶��
         * <p>
         * @param {string} data 蛟､ String
         * @return {boolean} true:豁｣蟶ｸ false:繝√ぉ繝�繧ｯ繧ｨ繝ｩ繝ｼ boolean
         */
        public numck(data: string): boolean {
            if (data == null || ("" === data)){
                return false;
            }
            let result: boolean = true;
            const pattern: com.java.Pattern = com.java.Pattern.compile("[0-9]+");
            result = pattern.matcher(data).matches();
            return result;
        }

        /**
         * 繧ｳ繝ｼ繝峨メ繧ｧ繝�繧ｯ繝｡繧ｽ繝�繝峨��
         * <p>
         * 蠑墓焚縺ｧ貂｡縺輔ｌ繧九メ繧ｧ繝�繧ｯ繧定｡後＞縺ｾ縺吶��
         * <p>
         * @param {string} data 蛟､ String
         * @param {boolean} flgAlphabet boolean縲�True�ｼ壹い繝ｫ繝輔ぃ繝吶ャ繝域ｷｷ蝨ｨ縲：alse�ｼ壽焚蟄励�ｮ縺ｿ
         * @return {boolean} true:豁｣蟶ｸ false:繝√ぉ繝�繧ｯ繧ｨ繝ｩ繝ｼ boolean
         */
        public static checkCodeChara(data: string, flgAlphabet: boolean): boolean {
            if (YEMCMNF000LogicBase.isNullOrEmpty$java_lang_String$boolean(data, true)){
                return false;
            }
            let pattern: com.java.Pattern;
            if (flgAlphabet === true){
                pattern = com.java.Pattern.compile("[0-9A-Z]+");
            } else {
                pattern = com.java.Pattern.compile("[0-9]+");
            }
            return pattern.matcher(data).matches();
        }

        /**
         * 繧ｵ繝ｼ繝仙女菫｡繝｡繝�繧ｻ繝ｼ繧ｸ縺九ｉ繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ險ｭ螳�<br>
         * @param {com.fujitsu.jcf.gui.JCFComboBoxData} comboItem JCFComboBoxDataObj<br>
         * @param {java.util.HashMap[]} comboList combobox縺ｮ繝ｪ繧ｹ繝医↓隧ｲ蠖薙☆繧稀ashMap縺ｮ驟榊��<br>
         * @param {boolean} addBlankRow 遨ｺ逋ｽ陦後ｒ蜷ｫ繧�縺句凄縺九ｒ驕ｸ謚槭☆繧九��true�ｼ壼性繧�縲�false�ｼ壼性縺ｾ縺ｪ縺�<br>
         * @return {void} void<br>
         * @param {number} selIndex
         */
        public setComboboxSelected(comboItem: com.fujitsu.jcf.gui.JCFComboBoxData, comboList: any[], addBlankRow: boolean, selIndex: number) {
            if (comboItem == null || comboList == null){
                return;
            }
            const cellElement: com.fujitsu.jcf.gui.JCFSelectableElement[] = this.convertToSelectableElements(comboList, addBlankRow);
            cellElement[selIndex].setSelected(true);
            comboItem.setValue$com_fujitsu_jcf_gui_JCFSelectableElement_A(cellElement);
        }

        /**
         * 繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ繧定｡ｨ遉ｺ險ｭ螳壹☆繧�<br>
         * 
         * @param {com.fujitsu.jcf.gui.JCFComboBoxData} comObj 繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹDataBean<br>
         * @param {string} selectedCode 繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ驕ｸ謚槭さ繝ｼ繝�<br>
         * @exception Exception CJF縺ｧ萓句､悶′逋ｺ逕溘＠縺溷�ｴ蜷医↓繧ｹ繝ｭ繝ｼ縺輔ｌ繧倶ｾ句､悶が繝悶ず繧ｧ繧ｯ繝�<br>
         */
        public setComboboxId(comObj: com.fujitsu.jcf.gui.JCFComboBoxData, selectedCode: string) {
            const cellElement: com.fujitsu.jcf.gui.JCFSelectableElement[] = comObj.getSelectableElementValue();
            for(let cnt: number = 0; cnt < cellElement.length; cnt++) {{
                cellElement[cnt].setSelected(cellElement[cnt].getID() === selectedCode);
            };}
            comObj.setValue$com_fujitsu_jcf_gui_JCFSelectableElement_A(cellElement);
        }

        public showHashMap$java_util_HashMap(inMap: any) {
            this.showHashMap$java_util_HashMap$int(inMap, 0);
        }

        public showHashMap$java_util_HashMap$int(inMap: any, nest: number) {
            let nestStr: string = "";
            for(let n: number = 0; n < nest; n++) {nestStr += "  ";}
            const irt: any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>inMap));
            while((irt.hasNext())) {{
                const key: string = <string>irt.next();
                const o: any = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>inMap, key);
                if (o != null && o instanceof <any>Array && (o.length == 0 || o[0] == null ||o[0] != null)){
                    const ol: any[] = <any[]>o;
                    for(let i: number = 0; i < ol.length; i++) {{
                        com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showHashMap:" + nestStr + ":ArrayList\ufffd\uff7c\ufffd" + key + " is Array  " + (i + 1) + " of " + ol.length + " START");
                        if (ol[i] != null && (ol[i] instanceof Object)){
                            this.showHashMap$java_util_HashMap$int(<any>ol[i], nest + 1);
                        } else {
                            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showHashMap:" + nestStr + "key\ufffd\uff7c\ufffd" + key + ", value:" + ((o == null) ? "(NULL)" : o.toString()));
                        }
                        com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showHashMap:" + nestStr + "ArrayList\ufffd\uff7c\ufffd" + key + " is Array  " + (i + 1) + " of " + ol.length + " END");
                    };}
                } else if (o != null && (o instanceof Object)){
                    com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showHashMap:" + nestStr + "HashMap\ufffd\uff7c\ufffd" + key + " is HashMap START");
                    this.showHashMap$java_util_HashMap$int(<any>o, nest + 1);
                    com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showHashMap:" + nestStr + "HashMap\ufffd\uff7c\ufffd" + key + " is HashMap END");
                } else {
                    com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showHashMap:" + nestStr + "key\ufffd\uff7c\ufffd" + key + ", value:" + ((o == null) ? "(NULL)" : o.toString()));
                }
            }};
        }

        public showHashMap(inMap?: any, nest?: any) {
            if (((inMap != null && (inMap instanceof Object)) || inMap === null) && ((typeof nest === 'number') || nest === null)) {
                return <any>this.showHashMap$java_util_HashMap$int(inMap, nest);
            } else if (((inMap != null && (inMap instanceof Object)) || inMap === null) && nest === undefined) {
                return <any>this.showHashMap$java_util_HashMap(inMap);
            } else throw new Error('invalid overload');
        }

        /**
         * 蠑墓焚縺ｮBigDecimal陦ｨ迴ｾ繧定ｿ斐☆縲�<br>
         * 蠑墓焚縺沓igDecimal 縺ｮ陦ｨ迴ｾ縺ｨ縺励※縺ｯ辟｡蜉ｹ縺ｧ縺ゅｋ蝣ｴ蜷�null繧定ｿ斐☆
         * 
         * @param  {string} val 謨ｰ蛟､
         * @return {com.java.BigDecimal} 蠑墓焚縺ｮBigDecimal陦ｨ迴ｾ
         * 
         */
        public static createBigDecimal(val: string): com.java.BigDecimal {
            let ret: com.java.BigDecimal = null;
            if (val == null){
                return null;
            }
            try {
                ret = new com.java.BigDecimal(val);
            } catch(e) {
            }
            return ret;
        }

        /**
         * 謨ｰ蟄励�ｮ蜑阪ぞ繝ｭ縺ｨ蟆乗焚轤ｹ邨らｫｯ縺ｮ繧ｼ繝ｭ繧偵メ繧ｧ繝�繧ｯ
         * <p>
         * @param {string} charstr String 邱ｨ髮�蟇ｾ雎｡縺ｮ譁�蟄怜��
         * @return {string} resule        邱ｨ髮�蠕後�ｮ譁�蟄怜��
         */
        public zerock(charstr: string): string {
            let resule: string = null;
            if (charstr != null && !(" " === charstr) && !("" === charstr) && !("0" === charstr)){
                if (charstr.indexOf(".") > 0){
                    const len: number = charstr.length;
                    for(let i: number = len; i > 0; i--) {{
                        if (charstr.lastIndexOf("0") === i - 1){
                            charstr = charstr.substring(0, i - 1);
                        } else {
                            break;
                        }
                    };}
                }
                const tmpNum: com.java.BigDecimal = new com.java.BigDecimal(charstr);
                resule = tmpNum.toString();
            } else {
                resule = charstr;
            }
            return resule;
        }

        /**
         * 謨ｰ蟄励�ｮ蜑阪ぞ繝ｭ縺ｨ蟆乗焚轤ｹ邨らｫｯ縺ｮ繧ｼ繝ｭ繧偵メ繧ｧ繝�繧ｯ
         * <p>
         * @param {string} charstr String 邱ｨ髮�蟇ｾ雎｡縺ｮ譁�蟄怜��
         * @return {string} resule        邱ｨ髮�蠕後�ｮ譁�蟄怜��
         */
        public zerock2(charstr: string): string {
            let resule: string = null;
            if (charstr != null && !(" " === charstr) && !("" === charstr) && !("0" === charstr)){
                if (charstr.indexOf(".") > 0){
                    const len: number = charstr.length;
                    for(let i: number = len; i > 0; i--) {{
                        if (charstr.lastIndexOf("0") === i - 1){
                            charstr = charstr.substring(0, i - 1);
                        } else {
                            break;
                        }
                    };}
                }
                const tmpNum: com.java.BigDecimal = new com.java.BigDecimal(charstr);
                if (tmpNum.compareTo(new com.java.BigDecimal(0)) > 0 && tmpNum.compareTo(new com.java.BigDecimal(1)) < 0){
                    resule = tmpNum.toString();
                    resule = resule.substring(1, resule.length);
                } else if (tmpNum.compareTo(new com.java.BigDecimal(0)) < 0 && tmpNum.compareTo(new com.java.BigDecimal(-1)) > 0){
                    resule = tmpNum.toString();
                    resule = "-" + resule.substring(2, resule.length);
                } else {
                    resule = tmpNum.toString();
                }
            } else {
                resule = charstr;
            }
            return resule;
        }

        /**
         * 繝輔ぃ繝ｳ繧ｯ繧ｷ繝ｧ繝ｳ繧ｭ繝ｼ謚ｼ荳区凾縺ｮ繝輔ャ繧ｿ繝懊ち繝ｳ謚ｼ荳句庄蜷ｦ繧貞愛螳壹☆繧�
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                �ｼ｣�ｼｪ�ｼｦ繧､繝吶Φ繝医が繝悶ず繧ｧ繧ｯ繝�
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              �ｼ｣�ｼｪ�ｼｦ繧ｳ繝ｳ繝�繧ｭ繧ｹ繝医が繝悶ず繧ｧ繧ｯ繝�
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           �ｼ｣�ｼｪ�ｼｦ蠕ｩ蟶ｰ諠�蝣ｱ繧ｪ繝悶ず繧ｧ繧ｯ繝�
         * @return {boolean} 繝√ぉ繝�繧ｯ邨先棡
         * @exception JCFException     �ｼ｣�ｼｪ�ｼｦ縺ｧ萓句､悶′逋ｺ逕溘＠縺溷�ｴ蜷医↓繧ｹ繝ｭ繝ｼ縺輔ｌ繧倶ｾ句､悶が繝悶ず繧ｧ繧ｯ繝�
         * @exception JCFDataException �ｼ｣�ｼｪ�ｼｦ縺ｧ萓句､悶′逋ｺ逕溘＠縺溷�ｴ蜷医↓繧ｹ繝ｭ繝ｼ縺輔ｌ繧倶ｾ句､悶が繝悶ず繧ｧ繧ｯ繝�
         */
        isEnabledFuncbtn(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo): boolean {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("isEnabledfuncbtn Logic start :");
            const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
            const footerPanelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.FRAME_FOOTER);
            let isEnabled: boolean = true;
            const actionCode: string = event.getActionCode();
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("String actionCode :[" + actionCode + "]");
            if (/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(actionCode, "SYSF")){
                const func: string = actionCode.substring(5, 6);
                const check: string = func.charAt(0);
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("char check :[" + check + "]");
                switch((check).charCodeAt(0)) {
                case 49 /* '1' */:
                    const itemFuncbtn1: com.fujitsu.jcf.gui.JCFItemData = footerPanelData.getItemData(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN1);
                    isEnabled = itemFuncbtn1.isEnabled();
                    break;
                case 50 /* '2' */:
                    const itemFuncbtn2: com.fujitsu.jcf.gui.JCFItemData = footerPanelData.getItemData(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN2);
                    isEnabled = itemFuncbtn2.isEnabled();
                    break;
                case 51 /* '3' */:
                    const itemFuncbtn3: com.fujitsu.jcf.gui.JCFItemData = footerPanelData.getItemData(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN3);
                    isEnabled = itemFuncbtn3.isEnabled();
                    break;
                case 52 /* '4' */:
                    const itemFuncbtn4: com.fujitsu.jcf.gui.JCFItemData = footerPanelData.getItemData(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN4);
                    isEnabled = itemFuncbtn4.isEnabled();
                    break;
                case 53 /* '5' */:
                    const itemFuncbtn5: com.fujitsu.jcf.gui.JCFItemData = footerPanelData.getItemData(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN5);
                    isEnabled = itemFuncbtn5.isEnabled();
                    break;
                case 54 /* '6' */:
                    const itemFuncbtn6: com.fujitsu.jcf.gui.JCFItemData = footerPanelData.getItemData(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN6);
                    isEnabled = itemFuncbtn6.isEnabled();
                    break;
                case 55 /* '7' */:
                    const itemFuncbtn7: com.fujitsu.jcf.gui.JCFItemData = footerPanelData.getItemData(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN7);
                    isEnabled = itemFuncbtn7.isEnabled();
                    break;
                case 56 /* '8' */:
                    const itemFuncbtn8: com.fujitsu.jcf.gui.JCFItemData = footerPanelData.getItemData(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN8);
                    isEnabled = itemFuncbtn8.isEnabled();
                    break;
                case 57 /* '9' */:
                    const itemFuncbtn9: com.fujitsu.jcf.gui.JCFItemData = footerPanelData.getItemData(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN9);
                    isEnabled = itemFuncbtn9.isEnabled();
                    break;
                default:
                    break;
                }
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("boolean isEnabled :[" + isEnabled + "]");
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("isEnabledfuncbtn Logic end :");
            return isEnabled;
        }

        public isValidFilledDate$com_fujitsu_jcf_ctrl_JCFEvent$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFReturnInfo$java_lang_String$java_lang_String$java_lang_String$boolean(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo, frameID: string, itemID: string, itemName: string, required: boolean): boolean {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMCMNF000LogicBase.isValidFilledDate Logic start : ");
            if (frameID == null || (frameID === (""))){
                frameID = this.getIdFrameMain();
            }
            const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
            const mainPanelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(frameID);
            const item: com.fujitsu.jcf.gui.JCFItemData = mainPanelData.getItemData(itemID);
            let isValidFilledDate: boolean = true;
            if (!required && (item.getValue() === lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.STR_DATE_ZERO)){
                item.setBackground(com.fujitsu.sms.sol.sys.SMSColor.DEFAULT);
                isValidFilledDate = true;
            } else {
                if (!super.isValidFilledDate$java_lang_String(item.getValue())){
                    item.setBackground(com.fujitsu.sms.sol.sys.SMSColor.ERROR);
                    if (item.isEnabled()){
                        returnInfo.setFocus$java_lang_String$java_lang_String(frameID, itemID);
                    }
                    returnInfo.cancelScreenTransition();
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.SMSCMNMCA104, super.getValidDatesMessage(itemName));
                    isValidFilledDate = false;
                } else {
                    item.setBackground(com.fujitsu.sms.sol.sys.SMSColor.DEFAULT);
                    isValidFilledDate = true;
                }
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("String frameID            : [" + frameID + "]");
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("String itemID             : [" + itemID + "]");
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("String value              : [" + item.getValue() + "]");
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("boolean isValidFilledDate : [" + isValidFilledDate + "]");
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMCMNF000LogicBase.isValidFilledDate Logic end : ");
            return isValidFilledDate;
        }

        /**
         * 譌･莉倥�ｮ蠖｢蠑上メ繧ｧ繝�繧ｯ繧定｡後≧.
         * 
         * 讌ｭ蜍吶お繝ｩ繝ｼ譎ゅΓ繝�繧ｻ繝ｼ繧ｸ
         * [SMSCMNMCA104]縲�$縲阪�ｯ$縲�$縺ｮ遽�蝗ｲ縺ｧ蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event			�ｼ｣�ｼｪ�ｼｦ繧､繝吶Φ繝医が繝悶ず繧ｧ繧ｯ繝�
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context			�ｼ｣�ｼｪ�ｼｦ繧ｳ繝ｳ繝�繧ｭ繧ｹ繝医が繝悶ず繧ｧ繧ｯ繝�
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo		�ｼ｣�ｼｪ�ｼｦ蠕ｩ蟶ｰ諠�蝣ｱ繧ｪ繝悶ず繧ｧ繧ｯ繝�
         * @param {string} frameID			繝輔Ξ繝ｼ繝�ID
         * @param {string} itemID			繧ｳ繝ｳ繝懊�懊ャ繧ｯ繧ｹ縺ｮ繧｢繧､繝�繝�ID
         * @param {string} itemName			繧｢繧､繝�繝�蜷�
         * @param {boolean} required			蠢�鬆医ヵ繝ｩ繧ｰ
         * @return {boolean} boolean			繧ｨ繝ｩ繝ｼ縺後≠繧句�ｴ蜷�false
         * @exception Exception	�ｼ｣�ｼｪ�ｼｦ縺ｧ萓句､悶′逋ｺ逕溘＠縺溷�ｴ蜷医↓繧ｹ繝ｭ繝ｼ縺輔ｌ繧倶ｾ句､悶が繝悶ず繧ｧ繧ｯ繝�
         */
        public isValidFilledDate(event?: any, context?: any, returnInfo?: any, frameID?: any, itemID?: any, itemName?: any, required?: any): boolean {
            if (((event != null && event instanceof <any>com.fujitsu.jcf.ctrl.JCFEvent) || event === null) && ((context != null && context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) || context === null) && ((returnInfo != null && returnInfo instanceof <any>com.fujitsu.jcf.ctrl.JCFReturnInfo) || returnInfo === null) && ((typeof frameID === 'string') || frameID === null) && ((typeof itemID === 'string') || itemID === null) && ((typeof itemName === 'string') || itemName === null) && ((typeof required === 'boolean') || required === null)) {
                return <any>this.isValidFilledDate$com_fujitsu_jcf_ctrl_JCFEvent$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFReturnInfo$java_lang_String$java_lang_String$java_lang_String$boolean(event, context, returnInfo, frameID, itemID, itemName, required);
            } else if (((typeof event === 'boolean') || event === null) && ((typeof context === 'string') || context === null) && returnInfo === undefined && frameID === undefined && itemID === undefined && itemName === undefined && required === undefined) {
                return super.isValidFilledDate(event, context);
            } else if (((typeof event === 'string') || event === null) && context === undefined && returnInfo === undefined && frameID === undefined && itemID === undefined && itemName === undefined && required === undefined) {
                return <any>this.isValidFilledDate$java_lang_String(event);
            } else throw new Error('invalid overload');
        }

        /**
         * 譌･莉倥�ｮ蠖｢蠑上メ繧ｧ繝�繧ｯ繧定｡後≧.
         * 
         * 讌ｭ蜍吶お繝ｩ繝ｼ譎ゅΓ繝�繧ｻ繝ｼ繧ｸ
         * [SMSCMNMCA104]縲�$縲阪�ｯ$縲�$縺ｮ遽�蝗ｲ縺ｧ蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event			�ｼ｣�ｼｪ�ｼｦ繧､繝吶Φ繝医が繝悶ず繧ｧ繧ｯ繝�
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context			�ｼ｣�ｼｪ�ｼｦ繧ｳ繝ｳ繝�繧ｭ繧ｹ繝医が繝悶ず繧ｧ繧ｯ繝�
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo		�ｼ｣�ｼｪ�ｼｦ蠕ｩ蟶ｰ諠�蝣ｱ繧ｪ繝悶ず繧ｧ繧ｯ繝�
         * @param {string} itemID			繧｢繧､繝�繝�ID
         * @param {string} itemName			繧｢繧､繝�繝�蜷�
         * @param {boolean} required			蠢�鬆医ヵ繝ｩ繧ｰ
         * @return {boolean} boolean			繧ｨ繝ｩ繝ｼ縺後≠繧句�ｴ蜷�false
         * @exception Exception	�ｼ｣�ｼｪ�ｼｦ縺ｧ萓句､悶′逋ｺ逕溘＠縺溷�ｴ蜷医↓繧ｹ繝ｭ繝ｼ縺輔ｌ繧倶ｾ句､悶が繝悶ず繧ｧ繧ｯ繝�
         */
        isValidFilledDateNengetsu(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo, itemID: string, itemName: string, required: boolean): boolean {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMCMNF000LogicBase.isValidFilledDateNengetsu Logic start : ");
            const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
            const mainPanelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(this.getIdFrameMain());
            const item: com.fujitsu.jcf.gui.JCFItemData = mainPanelData.getItemData(itemID);
            let isValidFilledDate: boolean = true;
            if (!required && (item.getValue() === lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.STR_DATE_ZERO)){
                item.setBackground(com.fujitsu.sms.sol.sys.SMSColor.DEFAULT);
                isValidFilledDate = true;
            } else {
                if (!super.isValidFilledDate$java_lang_String(item.getValue())){
                    item.setBackground(com.fujitsu.sms.sol.sys.SMSColor.ERROR);
                    if (item.isEnabled()){
                        returnInfo.setFocus$java_lang_String$java_lang_String(this.getIdFrameMain(), itemID);
                    }
                    returnInfo.cancelScreenTransition();
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.SMSCMNMCA104, [itemName, lib.com.megsnow.yem.cmn.cjf.YEMCMNF000ItemDefines.DT_NEN_MIN + "/01", lib.com.megsnow.yem.cmn.cjf.YEMCMNF000ItemDefines.DT_NEN_MAX + "/12"]);
                    isValidFilledDate = false;
                } else {
                    item.setBackground(com.fujitsu.sms.sol.sys.SMSColor.DEFAULT);
                    isValidFilledDate = true;
                }
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("String itemID             : [" + itemID + "]");
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("String value              : [" + item.getValue() + "]");
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("boolean isValidFilledDate : [" + isValidFilledDate + "]");
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMCMNF000LogicBase.isValidFilledDateNengetsu Logic end : ");
            return isValidFilledDate;
        }

        /**
         * 縺薙�ｮ繝ｭ繧ｸ繝�繧ｯ縺ｧ荳ｻ縺ｫ菴ｿ縺�繝代ロ繝ｫ縺ｮID繧定ｿ斐☆<br>
         * 繝�繝輔か繝ｫ繝医〒縺ｯSMSHeaderFooterManager.FRAME_MAIN繧定ｿ斐＠縺ｾ縺�<br>
         * 髫主ｱ､縺ｪ縺ｩ縲√ヱ繝阪Ν縺ｮID縺檎焚縺ｪ繧句�ｴ蜷医�ｯ繧ｪ繝ｼ繝舌�ｼ繝ｩ繧､繝峨＠縺ｦ縺上□縺輔＞縲�<br>
         * 繧ｪ繝ｼ繝舌�ｼ繝ｩ繧､繝峨☆繧九→縺薙�ｮYCMCjfLogicBase縺ｮ蟇ｾ雎｡繝代ロ繝ｫ縺後％縺ｮ繝｡繧ｽ繝�繝峨〒謖�螳壹＠縺溘ｂ縺ｮ縺ｨ縺ｪ繧翫∪縺�<br>
         * 
         * @return {string} 騾壼ｸｸ繝槭せ繧ｿ逕ｻ髱｢縺ｮ繝｡繧､繝ｳ繝代ロ繝ｫ縺ｮID�ｼ�SMSHeaderFooterManager.FRAME_MAIN�ｼ�
         */
        getIdFrameMain(): string {
            return com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.FRAME_MAIN;
        }

        /**
         * 驥鷹｡肴ｬ�逕ｨ縺ｮ邱ｨ髮�蜃ｦ逅�
         * 陦ｨ遉ｺ髯千阜縺ｮ譯∵焚繧偵が繝ｼ繝舌�ｼ縺励※縺�縺溷�ｴ蜷医�∬｡ｨ遉ｺ縺ｧ縺阪ｋ遽�蝗ｲ蜀�縺ｮ驥鷹｡阪↓螟画峩縺吶ｋ縲�
         * 
         * @param {string} val 驥鷹｡�
         * @param {number} length 譛牙柑譯∵焚
         * @return {string} 譯∝､画峩蠕後�ｮ蛟､
         */
        public chkOverFlow(val: string, length: number): string {
            if (val == null || val.length === 0){
                return val;
            }
            if (val.length > length){
                const sb: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
                for(let i: number = 0; i <= length; i++) {{
                    /* append */(sb => { sb.str += <any>"9"; return sb; })(sb);
                };}
                return /* toString */sb.str;
            } else {
                return val;
            }
        }

        /**
         * 蟾ｮ蛻�縺ｮ譛域焚蜿門ｾ�
         * date1縺ｮ蟷ｴ譛医→date2縺ｮ蟷ｴ譛医�ｮ蟾ｮ縺ｧ縺ゅｋ譛域焚繧定ｿ斐☆縲�
         * 窶ｻdate1縲‥ate2縺ｮDD縺ｯ辟｡隕悶☆繧九��
         * @param {string} date1 譌･莉假ｼ托ｼ�YYYYMMDD�ｼ�
         * @param yyyyMm 譌･莉假ｼ抵ｼ�YYYYMMDD�ｼ�
         * @return {number} 蟾ｮ縺ｮ譛域焚�ｼ�date1<date2縺ｮ蝣ｴ蜷医�ｯ繝槭う繝翫せ蛟､�ｼ�
         * @param {string} date2
         */
        public calMonth(date1: string, date2: string): number {
            const cal1: com.java.Calendar = com.java.Calendar.getInstance();
            const cal2: com.java.Calendar = com.java.Calendar.getInstance();
            let val: number = 0;
            cal1.set(/* parseInt */parseInt(date1.substring(0, 4)), /* parseInt */parseInt(date1.substring(4, 6)) - 1, 1);
            cal2.set(/* parseInt */parseInt(date2.substring(0, 4)), /* parseInt */parseInt(date2.substring(4, 6)) - 1, 1);
            if (!/* equals */(<any>((o1: any, o2: any) => { if (o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(cal1,cal2))){
                if (cal1.before(cal2)){
                    while((cal1.before(cal2))) {{
                        cal1.add(com.java.Calendar.MONTH, 1);
                        val++;
                    }};
                    val = val * -1;
                } else {
                    while((cal2.before(cal1))) {{
                        cal2.add(com.java.Calendar.MONTH, 1);
                        val++;
                    }};
                }
            }
            return val;
        }

        /**
         * 蜈ｨ隗堤ｩｺ逋ｽ譁�蟄励ｒ譁�蟄怜�励°繧牙炎髯､縺吶ｋ縲�
         * 
         * @param	String 蜃ｦ逅�蟇ｾ雎｡縺ｮ譁�蟄怜��
         * @return {string} String 遨ｺ逋ｽ蜑企勁蠕後�ｮ譁�蟄怜��
         * @param {string} val
         */
        public static trimSpaces(val: string): string {
            if (val == null || val.length === 0){
                return val;
            }
            return /* replaceAll */val.replace(new RegExp("\u7e32\ufffd", 'g'),"");
        }

        public setLoginInfo$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(context: com.fujitsu.jcf.ctrl.JCFContext, idGamen: string) {
            super.setCdGamen(context, this.nullToBlank(idGamen));
            super.setNmGamen(context, this.nullToBlank(com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.SUBSYS_ID, idGamen + lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.PROP_KEY_SCREEN_NAME_SURFIX)));
            super.setQtSaidaiHyouji(context, this.nullToBlank(com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.SUBSYS_ID, idGamen + lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.PROP_KEY_MAXDISPLAYCNT_SURFIX)));
            super.setQtSaidaiKensaku(context, this.nullToBlank(com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.SUBSYS_ID, idGamen + lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.PROP_KEY_MAXSELECTCNT_SURFIX)));
            super.setCdProgram(context, this.nullToBlank(com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.SUBSYS_ID, idGamen + lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines.PROP_KEY_PROGRAM_ID_SURFIX)));
        }

        /**
         * <dd>繝｡繧ｽ繝�繝牙錐�ｼ�       setLoginInfo
         * <dd>繝｡繧ｽ繝�繝芽ｪｬ譏趣ｼ�     蜈ｱ騾壽ュ蝣ｱ縺ｫ逕ｻ髱｢縺ｮ諠�蝣ｱ繧偵そ繝�繝医＠縺ｾ縺�
         * @param  {com.fujitsu.jcf.ctrl.JCFContext} context   �ｼ｣�ｼｪ�ｼｦ繧ｳ繝ｳ繝�繧ｭ繧ｹ繝医が繝悶ず繧ｧ繧ｯ繝�
         * @param  {string} idGamen   逕ｻ髱｢�ｼｩ�ｼ､
         */
        public setLoginInfo(context?: any, idGamen?: any) {
            if (((context != null && context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) || context === null) && ((typeof idGamen === 'string') || idGamen === null)) {
                return <any>this.setLoginInfo$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(context, idGamen);
            } else if (((context != null && context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) || context === null) && ((idGamen != null && idGamen instanceof <any>com.fujitsu.sms.sol.sys.SMSLoginInfoImpl) || idGamen === null)) {
                super.setLoginInfo(context, idGamen);
            } else throw new Error('invalid overload');
        }

        /**
         * 謖�螳壹＆繧後◆譌･莉倥�ｮ譖ｸ蠑上メ繧ｧ繝�繧ｯ繧定｡後≧縲�
         * 
         * @param {string} value  			繝√ぉ繝�繧ｯ蟇ｾ雎｡縺ｮ譌･莉俶枚蟄怜��
         * @param {string} format			譌･莉俶嶌蠑�(yyyyMMdd遲�)
         * @return {boolean} boolean			繧ｨ繝ｩ繝ｼ縺後≠繧句�ｴ蜷�false
         * @exception Exception	�ｼ｣�ｼｪ�ｼｦ縺ｧ萓句､悶′逋ｺ逕溘＠縺溷�ｴ蜷医↓繧ｹ繝ｭ繝ｼ縺輔ｌ繧倶ｾ句､悶が繝悶ず繧ｧ繧ｯ繝�
         */
        isValidDateFormat(value: string, format: string): boolean {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMCMNF000LogicBase.isValidDateFormat Logic start : ");
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("String value             : [" + value + "]");
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("String format              : [" + format + "]");
            try {
                const dateFormat: com.java.SimpleDateFormat = new com.java.SimpleDateFormat(format);
                dateFormat.setLenient(false);
                try {
                    dateFormat.parse(value);
                } catch(e) {
                    com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMCMNF000LogicBase.isValidDateFormat Logic end : ");
                    return false;
                }
            } catch(e) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("YEMESSF020MLogic.isValidDateFormat() \u8413\u53e5\uff64\u4e5f\u5331\u9015\ufffd");
                throw Object.defineProperty(new Error("\u8b4c\uff65\u8389\u4ff6\u5d8c\u8811\u4e0a\u2032\u8f9f\uff61\u8709\uff79\u7e3a\uff67\u7e3a\u5436\ufffd\ufffd"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMCMNF000LogicBase.isValidDateFormat Logic end : ");
            return true;
        }

        public static getMonthDiff$java_lang_String$java_lang_String$java_lang_String(strDtFrom: string, strDtTo: string, format: string): number {
            const sdf: com.java.SimpleDateFormat = new com.java.SimpleDateFormat(format);
            const dtFrom: com.java.Date = sdf.parse(strDtFrom);
            const dtTo: com.java.Date = sdf.parse(strDtTo);
            return YEMCMNF000LogicBase.getMonthDiff$com_java_Date$com_java_Date(dtFrom, dtTo);
        }

        /**
         * 譛亥ｷｮ險育ｮ�
         * @param dtFrom 髢句ｧ句ｹｴ譛�
         * @param dtTo   邨ゆｺ�蟷ｴ譛�
         * @param {string} format Date繝代�ｼ繧ｹ逕ｨ繝輔か繝ｼ繝槭ャ繝�
         * @return {number} cnt   譛亥ｷｮ謨ｰ
         * @throws ParseException Date螟画鋤譎ゅ�ｮ萓句､�
         * @param {string} strDtFrom
         * @param {string} strDtTo
         */
        public static getMonthDiff(strDtFrom?: any, strDtTo?: any, format?: any): number {
            if (((typeof strDtFrom === 'string') || strDtFrom === null) && ((typeof strDtTo === 'string') || strDtTo === null) && ((typeof format === 'string') || format === null)) {
                return <any>lib.com.megsnow.yem.cmn.cjf.YEMCMNF000LogicBase.getMonthDiff$java_lang_String$java_lang_String$java_lang_String(strDtFrom, strDtTo, format);
            } else if (((strDtFrom != null && strDtFrom instanceof <any>com.java.Date) || strDtFrom === null) && ((strDtTo != null && strDtTo instanceof <any>com.java.Date) || strDtTo === null) && format === undefined) {
                return <any>lib.com.megsnow.yem.cmn.cjf.YEMCMNF000LogicBase.getMonthDiff$com_java_Date$com_java_Date(strDtFrom, strDtTo);
            } else throw new Error('invalid overload');
        }

        public static getMonthDiff$com_java_Date$com_java_Date(dtFrom: com.java.Date, dtTo: com.java.Date): number {
            let cnt: number = 0;
            const calFrom: com.java.Calendar = com.java.Calendar.getInstance();
            const calTo: com.java.Calendar = com.java.Calendar.getInstance();
            calFrom.setTime(dtFrom);
            calTo.setTime(dtTo);
            if (dtFrom.compareTo(dtTo) === -1){
                return cnt;
            }
            while((calFrom.compareTo(calTo) === 1)) {{
                calTo.add(com.java.Calendar.MONTH, 1);
                cnt++;
            }};
            return cnt;
        }

        public static numericPatternMatch$int$int$java_lang_String$boolean(numInt: number, numDec: number, val: string, flgMinus: boolean): boolean {
            if (flgMinus === true){
                if ((val.substring(0, 1) === ("-")) === true){
                    val = val.substring(1);
                }
            }
            return YEMCMNF000LogicBase.numericPatternMatch$int$int$java_lang_String(numInt, numDec, val);
        }

        /**
         * 豁｣隕剰｡ｨ迴ｾ縺ｫ繧医ｋ謨ｰ蛟､繝√ぉ繝�繧ｯ繧定｡後＞縺ｾ縺�
         * 窶ｻ繧ｫ繝ｳ繝槭ｒ蜷ｫ縺ｾ縺ｪ縺�
         * 窶ｻ謨ｴ謨ｰ驛ｨ縺ｮ縺ｿ縲√∪縺溘�ｯ謨ｴ謨ｰ驛ｨ蟆乗焚驛ｨ縺ｫ繧医ｊ讒区�舌＆繧後◆謨ｰ蛟､縺ｮ縺ｿ
         * 
         * @param {number} numInt	謨ｴ謨ｰ驛ｨ譯∵焚
         * @param {number} numDec	蟆乗焚驛ｨ譯∵焚
         * @param {string} val		蛟､
         * @param {boolean} flgMinus	�ｾ擾ｽｲ�ｾ��ｽｽ險ｱ蜿ｯ繝輔Λ繧ｰ(true�ｼ夲ｾ擾ｽｲ�ｾ��ｽｽ險ｱ蜿ｯ縲’alse�ｼ夲ｾ擾ｽｲ�ｾ��ｽｽ荳崎ｨｱ蜿ｯ)
         * @return			{boolean} 蛻､螳夂ｵ先棡(true�ｼ壹�槭ャ繝√☆繧九�’alse�ｼ壹�槭ャ繝√＠縺ｪ縺�)
         */
        public static numericPatternMatch(numInt?: any, numDec?: any, val?: any, flgMinus?: any): boolean {
            if (((typeof numInt === 'number') || numInt === null) && ((typeof numDec === 'number') || numDec === null) && ((typeof val === 'string') || val === null) && ((typeof flgMinus === 'boolean') || flgMinus === null)) {
                return <any>lib.com.megsnow.yem.cmn.cjf.YEMCMNF000LogicBase.numericPatternMatch$int$int$java_lang_String$boolean(numInt, numDec, val, flgMinus);
            } else if (((typeof numInt === 'number') || numInt === null) && ((typeof numDec === 'number') || numDec === null) && ((typeof val === 'string') || val === null) && flgMinus === undefined) {
                return <any>lib.com.megsnow.yem.cmn.cjf.YEMCMNF000LogicBase.numericPatternMatch$int$int$java_lang_String(numInt, numDec, val);
            } else throw new Error('invalid overload');
        }

        public static numericPatternMatch$int$int$java_lang_String(numInt: number, numDec: number, val: string): boolean {
            let regex: string = "";
            if (numDec === 0 || val.indexOf(".") < 0){
                regex = "\\d{1,&1}";
                regex = /* replace */regex.split("&1").join(/* valueOf */String(numInt).toString());
            } else {
                regex = "\\d{1,&1}.\\d{1,&2}";
                regex = /* replace */regex.split("&1").join(/* valueOf */String(numInt).toString());
                regex = /* replace */regex.split("&2").join(/* valueOf */String(numDec).toString());
            }
            return com.java.Pattern.matches(regex, val);
        }

        constructor() {
            super();
            this.CD_HANYO = "cdHanyo";
            this.NM_NAIYO1 = "nmNaiyo1";
        }
    }
    YEMCMNF000LogicBase["__class"] = "lib.com.megsnow.yem.cmn.cjf.YEMCMNF000LogicBase";
    YEMCMNF000LogicBase["__interfaces"] = ["lib.com.megsnow.yem.cmn.cjf.YEMCMNF000ItemDefines","lib.com.megsnow.yem.cmn.cjf.YEMCMNF000Defines"];


}

