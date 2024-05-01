/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export interface JCFItemInterface {
        getPanelID(): string;

        getItemID(): string;

        initialize(jcfguidefaultproperties: lib.com.fujitsu.jcf.gui.JCFGUIDefaultProperties, s: string, jcfactioncode: lib.com.fujitsu.jcf.gui.JCFActionCode, jcfkeyadapter: lib.com.fujitsu.jcf.gui.JCFKeyAdapter, jcfmouseadapter: lib.com.fujitsu.jcf.gui.JCFMouseAdapter);

        createDataBean(): lib.com.fujitsu.jcf.gui.JCFItemData;

        getDataAndAttributes(jcfitemdata: lib.com.fujitsu.jcf.gui.JCFItemData, flag: boolean): lib.com.fujitsu.jcf.gui.JCFItemData;

        setDataAndAttributes(jcfitemdata: lib.com.fujitsu.jcf.gui.JCFItemData);

        getData(jcfitemdata: lib.com.fujitsu.jcf.gui.JCFItemData, flag: boolean): lib.com.fujitsu.jcf.gui.JCFItemData;

        setData(jcfitemdata: lib.com.fujitsu.jcf.gui.JCFItemData);

        checkData(): lib.com.fujitsu.jcf.gui.JCFGUIErrorInfo;

        addJCFActionListener(jcfactionlistener: lib.com.fujitsu.jcf.gui.JCFActionListener);

        removeJCFActionListener(jcfactionlistener: lib.com.fujitsu.jcf.gui.JCFActionListener);

        isRuntimeChangeAllowed(): boolean;

        isInputable(): boolean;

        isModified(): boolean;

        setModified(flag: boolean);

        getSequentialNumber(): number;

        setSequentialNumber(i: number);

        requestFocus();

        hasLogicalFocus(): boolean;

        fireOthersClick(jcfactionevent: lib.com.fujitsu.jcf.gui.JCFActionEvent, mouseevent: com.java.MouseEvent);

        fireKey(jcfactionevent: lib.com.fujitsu.jcf.gui.JCFActionEvent, keyevent: com.java.KeyEvent): boolean;

        destroy();

        setFocus(i?: any);

        isFocusable(i?: any): boolean;
    }

    export namespace JCFItemInterface {

        export const CLASS_VERSION: string = "V2L10";

        export const COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";

        export const FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        export const CLASS_NAME: string = "JCFItemInterface";

        export const FOCUS_POINT: number = 0;

        export const FOCUS_NEXT: number = 1;

        export const FOCUS_PREVIOUS: number = 2;

        export const FOCUS_CONTINUE: number = 3;
    }

}

