import type { CSSProperties } from 'vue'
import { MsisDebug } from '@/utils/debug/log'
import { FONT_UNIT } from '@/styles/design'

const fontFamilyMap: Record<string, string> = {
  Monospaced: 'monospace',
  'ＭＳ ゴシック': 'MS Gothic',
  'MS Gothic': 'MS Gothic',
  Dialog:
    'Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, apple color emoji, segoe ui emoji, Segoe UI Symbol, noto color emoji, sans-serif;',
}

export class Font {
  private name: string
  private style: number
  private size: number

  constructor(name: string, style: number, size: number) {
    this.name = name
    this.style = style
    this.size = size
  }

  static PLAIN = 0
  static BOLD = 1
  static ITALIC = 2

  isPlain() {
    return this.style === Font.PLAIN
  }

  isBold() {
    return (this.style & Font.BOLD) !== 0
  }

  isItalic() {
    return (this.style & Font.ITALIC) !== 0
  }

  /** フォントの CSS オブジェクトを返す */
  _getFontCSS(): CSSProperties {
    const fontFamily = fontFamilyMap[this.name]

    if (!fontFamily?.length) {
      MsisDebug.warn(`Font family not found: ${this.name}`)
    }

    const css: CSSProperties = {
      fontFamily: fontFamily || this.name,
      fontSize: `${this.size / 10}${FONT_UNIT}`,
    }

    if (this.isBold()) {
      css.fontWeight = 'bold'
    }

    if (this.isItalic()) {
      css.fontStyle = 'italic'
    }

    return css
  }
}
