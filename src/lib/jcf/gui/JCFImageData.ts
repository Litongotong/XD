/******************************************************************************
 * jcf.gui.JCFImageData
 *
 * プログラム名     : jcf.gui.JCFImageData
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/26 | itac）佐藤亮之介  | JCFImageData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ref, type Ref } from 'vue'
import { JCFItemData } from './JCFItemData'
import { bindThis } from '@/utils/class/bind'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { Image } from '@/lib/native/awt/Image'
import { isNil } from '@/utils/useful'

export class JCFImageData extends JCFItemData {
  private image: Ref<Image | null> = ref(null)
  private imageURL = ref('')
  private scrollbarDisplayPolicy = ref(0)
  private alignmentHorizontal = ref(0)
  private alignmentVertical = ref(0)
  private scalable = ref(false)
  private aspectKept = ref(false)
  private magnification = ref(0)

  constructor(id: string) {
    super(id)

    bindThis(this)
  }

  getValue(): string {
    return this.imageURL.value
  }

  setValue(newValue: string): void
  setValue(newValue: Image): void
  setValue(newURL: string, newImage: Image): void
  setValue(...args: any[]) {
    if (args.length === 1) {
      const [newValue] = args
      if (typeof newValue === 'string') {
        return this.__setValueWithString(newValue)
      } else if (newValue instanceof Image) {
        return this.__setValueWithImage(newValue)
      } else {
        throw new Error('Invalid argument')
      }
    } else if (args.length === 2) {
      const [newURL, newImage] = args
      return this.__setValueWithUrlAndImage(newURL, newImage)
    } else {
      throw new Error('Invalid argument')
    }
  }

  private __setValueWithString(newValue: string) {
    if (isNil(this.imageURL.value) && isNil(newValue)) {
      return
    }
    if (
      !isNil(this.imageURL.value) &&
      !isNil(newValue) &&
      this.imageURL.value.equals(newValue)
    ) {
      return
    } else {
      this.imageURL.value = newValue
      this.image.value = null
      return
    }
  }

  getImageValue(): Image {
    return this.image.value!
  }

  private __setValueWithImage(newValue: Image) {
    if (this.image.value === newValue) {
      return
    } else {
      this.imageURL.value = null!
      this.image.value = newValue
      return
    }
  }

  private __setValueWithUrlAndImage(newURL: string, newImage: Image) {
    this.imageURL.value = newURL
    this.image.value = newImage
  }

  /**
   * @deprecated Method getScrollbarDisplayPolicy is deprecated
   */
  getScrollbarDisplayPolicy(): number {
    return this.scrollbarDisplayPolicy.value
  }

  /**
   * @deprecated Method setScrollbarDisplayPolicy is deprecated
   */
  setScrollbarDisplayPolicy(newValue: number) {
    if (this.scrollbarDisplayPolicy.value === newValue) {
      return
    } else {
      this.scrollbarDisplayPolicy.value = newValue
      return
    }
  }

  getAlignmentHorizontal(): number {
    return this.alignmentHorizontal.value
  }

  setAlignmentHorizontal(newValue: number) {
    if (this.alignmentHorizontal.value === newValue) {
      return
    } else {
      this.alignmentHorizontal.value = newValue
      return
    }
  }

  getAlignmentVertical(): number {
    return this.alignmentVertical.value
  }

  setAlignmentVertical(newValue: number) {
    if (this.alignmentVertical.value === newValue) {
      return
    } else {
      this.alignmentVertical.value = newValue
      return
    }
  }

  isScalable(): boolean {
    return this.scalable.value
  }

  setScalable(newValue: boolean) {
    if (this.scalable.value === newValue) {
      return
    } else {
      this.scalable.value = newValue
      return
    }
  }

  isAspectKept(): boolean {
    return this.aspectKept.value
  }

  setAspectKept(newValue: boolean) {
    if (this.aspectKept.value === newValue) {
      return
    } else {
      this.aspectKept.value = newValue
      return
    }
  }

  /**
   * @deprecated Method getMagnification is deprecated
   */
  getMagnification(): number {
    return this.magnification.value
  }

  /**
   * @deprecated Method setMagnification is deprecated
   */

  setMagnification(newValue: number) {
    if (this.magnification.value === newValue) {
      return
    } else {
      this.magnification.value = newValue
      return
    }
  }

  setDataAndAttributes(itemData: JCFItemData) {
    if (!itemData) {
      return
    }
    if (!(itemData?._getType() === JCFImageData)) {
      return
    } else {
      let imageData: JCFImageData = itemData as JCFImageData
      this.setScrollbarDisplayPolicy(imageData.getScrollbarDisplayPolicy())
      this.setAlignmentHorizontal(imageData.getAlignmentHorizontal())
      this.setAlignmentVertical(imageData.getAlignmentVertical())
      this.setScalable(imageData.isScalable())
      this.setAspectKept(imageData.isAspectKept())
      this.setMagnification(imageData.getMagnification())
      this.setData(itemData)
      super.setDataAndAttributes(itemData)
      return
    }
  }

  setData(itemData: JCFItemData) {
    if (!itemData) {
      return
    }
    if (!(itemData?._getType() === JCFImageData)) {
      return
    } else {
      let imageData: JCFImageData = itemData as JCFImageData
      this.setValue(imageData.getValue(), imageData.getImageValue())
      return
    }
  }

  getCommunicationData(): any {
    return this.getValue()
  }

  setCommunicationData(newValue: any) {
    this.setValue(newValue as string)
  }

  protected undo(itemData: JCFItemData) {
    if (!itemData) {
      return
    }

    if (!(itemData?._getType() === JCFImageData)) {
      return
    } else {
      let imageData: JCFImageData = itemData as JCFImageData
      this.setScrollbarDisplayPolicy(imageData.getScrollbarDisplayPolicy())
      this.setAlignmentHorizontal(imageData.getAlignmentHorizontal())
      this.setAlignmentVertical(imageData.getAlignmentVertical())
      this.setScalable(imageData.isScalable())
      this.setAspectKept(imageData.isAspectKept())
      this.setMagnification(imageData.getMagnification())
      this.imageURL.value = imageData.getValue()
      super.setDataAndAttributes(itemData)
      return
    }
  }

  _getComponentName(): string {
    return EComponentName.JCFImage
  }

  _getName(): string {
    return 'JCFImageData'
  }

  static _getName(): string {
    return 'JCFImageData'
  }

  _getType() {
    return JCFImageData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFImageData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFImageData'
  }
}
