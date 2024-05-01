/******************************************************************************
 * jcf.gui.JCFToggleButtonData
 *
 * プログラム名     : jcf.gui.JCFToggleButtonData
 * 担当者           : itac）岩澤武
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）岩澤武  | JCFToggleButtonData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
 import { ref } from 'vue'
 import { LanguageNativeType } from '@/lib/native/config/enums'
 import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
 
 export class JCFToggleButtonData extends JCFItemData {
   private value = ref<string | boolean>(false)
   private label = ref<string>('')
 
   /**
    * JCFToggleButtonData インスタンスを作成する。
    * @param itemID itemID
    */
   constructor(itemID: string) {
     super(itemID)
     this.value.value = false
     this.label.value = ''
   }
 
   /**
    * jcf.gui.JCFToggleButtonData::getValue()
    * @see {@link JCFItemData#getValue()}
    */
   getValue = (): string => {
     return this.value.value.toString();
   }
 
   // [[setValue]]
   /**
    * jcf.gui.c::setValue(string newValue)
    * @param newValue newValue for appends
    */
   setValue(newValue: string): void
 
   /**
    * jcf.gui.JCFToggleButtonData::setValue(boolean newValue)
    * @param newValue newValue for appends
    * @see {@link JCFItemData#setValue(boolean)}
    */
   setValue(newValue: boolean): void
 
   setValue(newValue: string | boolean): void {
 
     if (newValue == null || newValue == undefined) {
       this.value.value = false
       return
     }
     if (typeof newValue === LanguageNativeType.STRING) {
       this.value.value = (newValue as string).toLowerCase() === 'true';
       return
     } else {
       this.value.value = newValue as boolean;
     }
   }
 
   /**
    * jcf.gui.JCFToggleButtonData::getBooleanValue()
    */
   getBooleanValue = (): boolean => {
     return this.value.value as boolean;
   }


   /**
    * jcf.gui.JCFToggleButtonData::setData(JCFItemData itemData)
    * @param JCFItemData itemData for appends
    * @see {@link JCFItemData#setData(JCFItemData)}
    */
   setData = (itemData: JCFItemData): void => {
    if (itemData == null) {
      return
    }
    if (!(itemData instanceof JCFToggleButtonData)) {
      return
    } else {
      const toggleButtonData: JCFToggleButtonData = itemData as JCFToggleButtonData
      this.setValue(toggleButtonData.getBooleanValue())
      return
    }
  }
 
   /**
    * jcf.gui.JCFToggleButtonData::getCommunicationData()
    * @see {@link JCFItemData#getCommunicationData()}
    */
   getCommunicationData = (): Object => {
     return Object(this.getValue())
   }
 
   /**
    * jcf.gui.JCFToggleButtonData::setCommunicationData(Object newValue)
    * @param newValue CommunicationData for appends
    * @see {@link setCommunicationData(Object)}
    */
   setCommunicationData = (newValue: Object): void => {
     this.setValue(newValue.toString())
   }
 }