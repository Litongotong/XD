/******************************************************************************
 * java.awt.Color
 *
 * プログラム名     : java.awt.Color
 * 担当者           : itac）郭澤宇
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/02 | itac）郭澤宇      | Color クラスを新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
export class Color {
  /**
   * The color white.  In the default sRGB space.
   */
  static white = new Color(255, 255, 255)

  /**
   * The color white.  In the default sRGB space.
   * @since 1.4
   */
  static WHITE = Color.white

  /**
   * The color light gray.  In the default sRGB space.
   */
  static lightGray = new Color(192, 192, 192)

  /**
   * The color light gray.  In the default sRGB space.
   * @since 1.4
   */
  static LIGHT_GRAY = Color.lightGray

  /**
   * The color gray.  In the default sRGB space.
   */
  static gray = new Color(128, 128, 128)

  /**
   * The color gray.  In the default sRGB space.
   * @since 1.4
   */
  static GRAY = Color.gray

  /**
   * The color dark gray.  In the default sRGB space.
   */
  static darkGray = new Color(64, 64, 64)

  /**
   * The color dark gray.  In the default sRGB space.
   * @since 1.4
   */
  static DARK_GRAY = Color.darkGray

  /**
   * The color black.  In the default sRGB space.
   */
  static black = new Color(0, 0, 0)

  /**
   * The color black.  In the default sRGB space.
   * @since 1.4
   */
  static BLACK = Color.black

  /**
   * The color red.  In the default sRGB space.
   */
  static red = new Color(255, 0, 0)

  /**
   * The color red.  In the default sRGB space.
   * @since 1.4
   */
  static RED = Color.red

  /**
   * The color pink.  In the default sRGB space.
   */
  static pink = new Color(255, 175, 175)

  /**
   * The color pink.  In the default sRGB space.
   * @since 1.4
   */
  static PINK = Color.pink

  /**
   * The color orange.  In the default sRGB space.
   */
  static orange = new Color(255, 200, 0)

  /**
   * The color orange.  In the default sRGB space.
   * @since 1.4
   */
  static ORANGE = Color.orange

  /**
   * The color yellow.  In the default sRGB space.
   */
  static yellow = new Color(255, 255, 0)

  /**
   * The color yellow.  In the default sRGB space.
   * @since 1.4
   */
  static YELLOW = Color.yellow

  /**
   * The color green.  In the default sRGB space.
   */
  static green = new Color(0, 255, 0)

  /**
   * The color green.  In the default sRGB space.
   * @since 1.4
   */
  static GREEN = Color.green

  /**
   * The color magenta.  In the default sRGB space.
   */
  static magenta = new Color(255, 0, 255)

  /**
   * The color magenta.  In the default sRGB space.
   * @since 1.4
   */
  static MAGENTA = Color.magenta

  /**
   * The color cyan.  In the default sRGB space.
   */
  static cyan = new Color(0, 255, 255)

  /**
   * The color cyan.  In the default sRGB space.
   * @since 1.4
   */
  static CYAN = Color.cyan

  /**
   * The color blue.  In the default sRGB space.
   */
  static blue = new Color(0, 0, 255)

  /**
   * The color blue.  In the default sRGB space.
   * @since 1.4
   */
  static BLUE = Color.blue

  /**
   * The color value.
   * @serial
   * @see #getRGB
   */
  value: number = 0x00000000

  constructor(rgb: number)
  constructor(r: number, g: number, b: number)
  constructor(rOrRGB: number, g?: number, b?: number) {
    if (typeof g === 'number' && typeof b === 'number') {
      let r = rOrRGB
      let a: any = 255

      this.value =
        ((a & 255) << 24) |
        ((r & 255) << 16) |
        ((g & 255) << 8) |
        ((b & 255) << 0)
    }
    // rgb
    else {
      this.value = rOrRGB
    }
  }

  getRGB(): number {
    return this.value
  }

  equals(obj: any): boolean {
    return obj != null && obj instanceof Color && obj.getRGB() === this.getRGB()
  }

  static getHSBColor(h: number, s: number, b: number): Color {
    return new Color(Color.HSBtoRGB(h, s, b))
  }

  static HSBtoRGB(hue: number, saturation: number, brightness: number): number {
    // Ensure hue is within the range [0, 360]
    hue = ((hue % 360) + 360) % 360

    // Normalize saturation and brightness to [0, 1]
    saturation = Math.max(0, Math.min(1, saturation))
    brightness = Math.max(0, Math.min(1, brightness))

    // Calculate chroma (color intensity)
    const chroma = brightness * saturation

    // Calculate hue segment
    const hueSegment = hue / 60
    const x = chroma * (1 - Math.abs((hueSegment % 2) - 1))

    // Initialize RGB components
    let r = 0,
      g = 0,
      b = 0

    if (0 <= hueSegment && hueSegment < 1) {
      r = chroma
      g = x
    } else if (1 <= hueSegment && hueSegment < 2) {
      r = x
      g = chroma
    } else if (2 <= hueSegment && hueSegment < 3) {
      g = chroma
      b = x
    } else if (3 <= hueSegment && hueSegment < 4) {
      g = x
      b = chroma
    } else if (4 <= hueSegment && hueSegment < 5) {
      r = x
      b = chroma
    } else {
      r = chroma
      b = x
    }

    // Calculate lightness adjustment
    const m = brightness - chroma

    // Convert RGB components to 8-bit integers
    const red = Math.round((r + m) * 255)
    const green = Math.round((g + m) * 255)
    const blue = Math.round((b + m) * 255)

    // Pack RGB values into a single integer (0xRRGGBB)
    return (red << 16) | (green << 8) | blue
  }

  static RGBtoHSB(
    r: number,
    g: number,
    b: number,
    hsbvals: number[],
  ): number[] {
    const hue =
      ((Math.atan2(Math.sqrt(3) * (g - b), 2 * r - g - b) * 180) / Math.PI +
        360) %
      360

    const saturation = Math.max(0, Math.min(1, (r - Math.min(r, g, b)) / r))
    const brightness = Math.max(0, Math.min(1, r / 255))

    if (hsbvals) {
      hsbvals[0] = hue
      hsbvals[1] = saturation
      hsbvals[2] = brightness
    } else {
      hsbvals = [hue, saturation, brightness]
    }

    return hsbvals
  }

  getRed(): number {
    return (this.getRGB() >> 16) & 0xff
  }

  getGreen(): number {
    return (this.getRGB() >> 8) & 0xff
  }

  getBlue(): number {
    return (this.getRGB() >> 0) & 0xff
  }

  getAlpha(): number {
    return (this.getRGB() >> 24) & 0xff
  }

  /** Color を CSS オブジェクトに変換して返す */
  _toRGBString(): string {
    const color = `rgba(${this.getRed()}, ${this.getGreen()}, ${this.getBlue()}, ${this.getAlpha()})`
    return color
  }
}
