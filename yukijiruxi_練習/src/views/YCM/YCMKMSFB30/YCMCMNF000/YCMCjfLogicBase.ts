
export  class YCMCjfLogicBase  {
    
    private isPerformance: boolean = false;


    public getScreenName(): string {
        
        // logic.SMSCLLog.debug("getScreenName Logic start : ");
        //const gamenID: string = <string>this.getUserData(context, logic.YCMCjfConstant.GAMEN_ID);
        // logic.SMSCLLog.debug("String gamenID : " + gamenID + "]");
        //const screenName: string = logic.SMSPropsInfos.getProperty(YCMKMSFB30M.YCMKMSFB30M-logic.YCMCjfConstant.NM_SUBSYSTEM_PROP_NAME, gamenID + logic.YCMCjfConstant.SCREEN_NAME_KEY);
        // logic.SMSCLLog.debug("getScreenName Logic end : ");
        return screenName;
      
    }


    protected getScreenName$JCFEvent$JCFContext$JCFReturnInfo(): string {
        return "";
    }
    protected getMaxDisplay(): string {
        return "";
    }
    protected getMaxSelect(): string {
        return "";
    }
    protected getButtonLabels(): string[] {
        return [];
    }
    protected getEnableButton(): string[] {
        return [];
    }
    protected setZero(inStr: string, length: number): string {
        return "";
    }
    protected setDataSelectMenu(): void {
    }
    protected setItemsSelectMenu(): void {
         
    }

    protected setDataAppException(): void {
    }
    protected setData(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, inMap: Map): void {
    }
    protected setItems(event: JCFEvent, current: JCFScreenData, returnInfo: JCFReturnInfo, inMap: Map): void {
    }
    protected getData(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): Map {
        return null;
    }
    protected putData(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, key: string): void {
    }
    protected getEmptyData(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): Map {
        return null;
    }
    protected getSearchData$JCFEvent$JCFContext$JCFReturnInfo(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): Map {
        return null;
    }
    protected getSearchData$JCFEvent$JCFContext$JCFReturnInfo$boolean(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, convert: boolean): Map {
        return null;
    }
    protected convertSearchDataKey(map: Map): Map {
        return null;
    }
    protected setPrevNext(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected preProcessNotes(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, gamenId: string, usecaseId: string): void {
    }
    protected preProcessI(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, gamenId: string, usecaseId: string): void {
    }
    protected preProcessIKubun(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, gamenId: string, usecaseId: string, map: Map): void {
    }
    protected preProcessIKubunMust(): void { }
    protected checkMust(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, checkList: string[]): boolean {
        return false;
    }
    protected checkLength(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, checkMap: Map): boolean {
        return false;
    }
    protected checkTankaKakoHiduke(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, itemID: string, dtShiyokaishi: string): boolean {
        return false;
    }
    protected checkMustI(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, checkList: string[]): boolean {
        return false;
    }
    protected preProcessSKubun(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, gamenId: string, usecaseId: string, keyList: string[], otherList: string[], map: Map): void {
    }
    public preProcessSKubunMust(): any {
      return""
    }
    public preProcessCreate(): any {
      return""
    }
    public preProcessCreateSequence(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    public preProcessCreateTenTorihikisaki(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected preProcessSakihizuke(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map): void {
    }
    protected preProcessUpdateMirai(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected preProcessSelect(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map): void {
    }
    protected preProcessUpdate$JCFEvent$JCFContext$JCFReturnInfo(): any {
      return""
    }
    protected preProcessUpdate$JCFEvent$JCFContext$JCFReturnInfo$Map(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map): void {
    }
    public preProcessCancel(): any {
      return""
    }
    public preProcessUpdate(): any {
      return""
    }
    protected preProcessCancelForDetailedScreens(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected preProcessCopy(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected preProcessCopyForDetailedScreens(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected preProcessCopySequence(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected preProcessDelete$JCFEvent$JCFContext$JCFReturnInfo(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected preProcessDelete$JCFEvent$JCFContext$JCFReturnInfo$Map(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map): void {
    }
    protected preProcessDeleteForDetailedScreens(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map): void {
    }
    protected setEnabled$JCFEvent$JCFContext$JCFReturnInfo$stringArray$boolean(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, itemList: string[], isEnabled: boolean): void {
    }
    protected setEnabled$JCFEvent$JCFContext$JCFReturnInfo$string$boolean(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, itemId: string, isEnabled: boolean): void {
    }
    protected setCellValue(spreadData: SMSJCFSpreadData, row: number, column: number, value: string): void {
    }
    protected setSakihizukeCellEditable(context: JCFContext, spreadData: SMSJCFSpreadData, row: number, column: number, map: Map): void {
    }
    protected checkUpdate(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, beforeMap: Map, afterMap: Map): boolean {
        return false;
    }
    protected checkUpdateMultiDisplay(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, beforeMap: Map, afterMap: Map): boolean {
        return false;
    }
    protected getRgsMsg$JCFEvent$JCFContext$JCFReturnInfo(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): boolean {
        return false;
    }
    protected getRgsMsg$JCFEvent$JCFContext$JCFReturnInfo$Map(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map): boolean {
        return false;
    }
    protected setRgsMsg(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    private toDate(str: string): Date {
        return null;
    }
    protected getKubun$JCFEvent$JCFContext$JCFReturnInfo$Map(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map): Map[] {
        return [];
    }
    protected getKubun$JCFEvent$JCFContext$JCFReturnInfo$string$Map(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, cdSubsystemShubetu: string, map: Map): Map[] {
        return [];
    }
    protected getKubun$JCFEvent$JCFContext$JCFReturnInfo$string$string$string$Map(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, cdSubsystemShubetu: string, cdHanyo: string, stKubun1: string, map: Map): Map[] {
        return [];
    }
    protected setComboBoxBeforeEnp(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map[]): void {
    }
    protected setComboBox$JCFEvent$JCFContext$JCFReturnInfo$string$JCFSelectableElementArray(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, itemId: string, elements: JCFSelectableElement[]): void {
    }
    protected setComboBox$JCFEvent$JCFContext$JCFReturnInfo$MapArray(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map[]): void {
    }
    protected setComboBox$JCFEvent$JCFContext$JCFReturnInfo$MapArray$boolean(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map[], isMust: boolean): void {
    }
    protected setComboBoxTani(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map[], isMust: boolean): void {
    }
     setComboSelected(comboBoxData: JCFComboBoxData, selectedItemId: string): void {
    }
    protected preProcessS(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, gamenId: string, usecaseId: string, keyList: string[], otherList: string[]): void {
    }
    protected setDefaultColor(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
     focusout(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected checkPattern$JCFEvent$JCFContext$JCFReturnInfo$Map(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, checkMap: Map): boolean {
        return false;
    }
    protected checkPattern$JCFEvent$JCFContext$JCFReturnInfo$Map$string(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, checkMap: Map, frameID: string): boolean {
        return false;
    }
    protected checkField$JCFEvent$JCFContext$JCFReturnInfo$Map(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, checkMap: Map): boolean {
        return false;
    }
    protected checkField$JCFEvent$JCFContext$JCFReturnInfo$Map$string(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, checkMap: Map, frameID: string): boolean {
        return false;
    }
    protected checkDtTekiyokaishi(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): boolean {
        return false;
    }
    protected checkDtYukoKigen(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): boolean {
        return false;
    }
    protected postProcessBeforeDisplay(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map, key: string): void {
    }
    protected postProcessBeforeDisplayMultiDisplay(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map, key: string): void {
    }
    protected postProcessPrevNext(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map, key: string, lQtRow: number): void {
    }
    protected postProcessRgsData(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, map: Map, key: string): void {
    }
    protected putDisabledItem(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected getComboID(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, itemID: string): string {
        return "";
    }
    protected getComboElementMap(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, itemID: string): Map {
        return null;
    }
    protected setErrorCell(spreadData: SMSJCFSpreadData, row: number, column: number): void {
    }
    protected initSpreadColor(spreadData: SMSJCFSpreadData): void {
    }
    protected clearName$JCFEvent$JCFContext$JCFReturnInfo(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected clearName$JCFEvent$JCFContext$JCFReturnInfo$List(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, noList: List): void {
    }
    protected isEnabledFuncbtn(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): boolean {
        return false;
    }
    protected setWarningFocus$JCFEvent$JCFContext$JCFReturnInfo$HashMap(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, outData: HashMap): void {
    }
    protected setWarningFocus$JCFEvent$JCFContext$JCFReturnInfo$HashMap$Map(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, outData: HashMap, shosaiMap: Map): void {
    }
    protected getIdFrameMain(): string {
        return "";
    }
    protected preProcessCheckUpdate(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, key: string): void {
    }
    protected getSubsystemInfo(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): string {
        return "";
    }
    protected addUserData(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, key: string, inMap: Map): void {
    }
     createSeihinTankaTaniComboBox(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, combo: JCFComboBoxData, stFuteikan: string, ifSuryoTani1: string, ifSuryoTani2: string, taniList: Map[]): void {
    }
     createGenzairyoTankaTaniComboBox(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, combo: JCFComboBoxData, ifUkeharai: string, ifSuryoTani1: string, ifSuryoTani2: string, taniList: Map[]): void {
    }
     createGenzairyoTankaTaniComboBoxExtension(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, combo: JCFComboBoxData, ifUkeharai: string, ifSuryoTani1: string, ifSuryoTani2: string, taniList: Map[]): void {
    }
     createGenzairyoTankaTaniComboBoxExtensionMod(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, combo: JCFComboBoxData, ifUkeharai: string, ifSuryoTani1: string, ifSuryoTani2: string, taniList: Map[]): void {
    }
     exitSystem(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
     returnSubMenu(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
     returnMainMenu(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected checkHyojiJun(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, itemID: string): boolean {
        return false;
    }
     chkCorrelateRequired(errHash: HashMap, chkitem1: JCFItemData, chkitem2: JCFItemData, messageCode: string): HashMap {
        return null;
    }
     chkRequired(errHash: HashMap, item: JCFItemData, messageCode: string): HashMap {
        return null;
    }
     chkRequiredItems(errHash: HashMap, items: JCFItemData[], messageCode: string): HashMap {
        return null;
    }
     chkDateRange(errHash: HashMap, item1: JCFItemData, item2: JCFItemData, messageCode: string): HashMap {
        return null;
    }
     getDispVal(item: JCFItemData): string {
        return "";
    }
     getErrHash(): HashMap {
        return null;
    }
     getErrHash$HashMap$string$JCFItemDataArray$string(errHash: HashMap, errId: string, items: JCFItemData[], messageCode: string): HashMap {
        return null;
    }
     getErrHash$HashMap$string$string(errHash: HashMap, errId: string, messageCode: string): HashMap {
        return null;
    }
     isChkSuccess(context: JCFContext, returnInfo: JCFReturnInfo, errHash: HashMap): boolean {
        return false;
    }
     getMainPanelData(context: JCFContext): JCFPanelData {
        return null;
    }
    protected isValidFilledDate(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, frameID: string, itemID: string, itemName: string, required: boolean): boolean {
        return false;
    }
    protected isValidFilledDateNen(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, itemID: string, itemName: string, required: boolean): boolean {
        return false;
    }
    protected isValidFilledDateNengetsu(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, itemID: string, itemName: string, required: boolean): boolean {
        return false;
    }
    protected checkTaniPattern(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, pattern: string, ifSuryotani1: string, ifSuryotani2: string, ifUkeharaitani: string, ifYoryotani: string): boolean {
        return false;
    }
    protected setSpace(inStr: string, length: number): string {
        return "";
    }
    protected setPerformanceLog(context: JCFContext): void {
    }
    protected getPerformanceLog(context: JCFContext, inStr: string): void {
    }
    protected centuplicate(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, inDouble: string, numberOfDecimals: number): string {
        return "";
    }
    protected centesimal(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, inDouble: string, numberOfDecimals: number): string {
        return "";
    }
    protected clearPageInfo(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected initPageInfo(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected initPageInfoShowData(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected initPageInfoJumpPage(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected initPageInfoReversePage(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected initPageInfoForwardPage(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected jumpPage(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, gamenId: string, usecaseId: string, keyShosaiMsg: string, keyIchiranMsg: string, keyVerb: string, focusItemId: string): boolean {
        return false;
    }
    protected reversePage(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, gamenId: string, usecaseId: string, keyShosaiMsg: string, keyIchiranMsg: string, keyVerb: string, focusItemId: string): boolean {
        return false;
    }
     forwardPage(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, gamenId: string, usecaseId: string, keyShosaiMsg: string, keyIchiranMsg: string, keyVerb: string, focusItemId: string): boolean {
        return false;
    }
    protected createEmptyComboBox(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, itemId: string): void {
    }
     authentication(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, gamenId: string, usecaseId: string, keyList: string[], otherList: string[], targetItemId: string, targetItemName: string, shosaiHashKey: string, verb: string): HashMap {
        return null;
    }
    protected setImaginableFocus(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected getNameByGeneralSearch(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, spreadName: string, jouken: string[], enableCons: boolean[], literalCondition: List, targetCd: string, generalSearchId: string, resultName: string, conditionIndex: number, resultIndex: number, usecase: string): void {
    }
    protected prev(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, gamenId: string, usecaseId: string, keyList: string[], otherList: string[], shosaiMsgKey: string, verb: string): void {
    }
    protected next(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, gamenId: string, usecaseId: string, keyList: string[], otherList: string[], shosaiMsgKey: string, verb: string): void {
    }
    private createInDataGeneralSearch(jouken: string[]): HashMap {
        return null;
    }
    protected calcSekisai(inYoryo1: string, inYoryo2: string, inYoryo3: string, inKansan: string, inMinakakejuryo: string): string[] {
        return [];
    }
    protected createSelectableElement(combo: string[][]): JCFSelectableElement[] {
        return [];
    }
    protected getFooterPanelData(context: JCFContext): JCFPanelData {
        return null;
    }
    protected changeTimeFormat(time: string): string {
        return "";
    }
    protected changeDateFormat(date: string): string {
        return "";
    }
    protected changeDateTimeFormat(datetime: string): string {
        return "";
    }
    protected setFocusItem(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo): void {
    }
    protected checkFileSize(context: JCFContext, fileName: string): boolean {
        return false;
    }
}


