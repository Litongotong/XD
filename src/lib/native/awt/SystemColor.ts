import { Color } from './Color'

export class SystemColor extends Color {
  static desktop = new Color(0, 92, 92)
  static activeCaption = new Color(0, 0, 128)
  static activeCaptionText = Color.white
  static activeCaptionBorder = Color.lightGray
  static inactiveCaption = Color.gray
  static inactiveCaptionText = Color.lightGray
  static inactiveCaptionBorder = Color.lightGray
  static window = Color.white
  static windowBorder = Color.black
  static windowText = Color.black
  static menu = Color.lightGray
  static menuText = Color.black
  static text = Color.lightGray
  static textText = Color.black
  static textHighlight = new Color(0, 0, 128)
  static textHighlightText = Color.white
  static textInactiveText = Color.gray
  static control = Color.lightGray
  static controlText = Color.black
  static controlHighlight = Color.white
  static controlLtHighlight = new Color(224, 224, 224)
  static controlShadow = Color.gray
  static controlDkShadow = Color.black
  static scrollbar = new Color(224, 224, 224)
  static info = new Color(224, 224, 0)
  static infoText = Color.black
}
