import { getSystemLocale } from '@/utils/intl'

class ELocale {
  static JAPAN = ['ja', 'JP']
}

export class Locale {
  static JAPAN = Locale.createConstant(ELocale.JAPAN[0], ELocale.JAPAN[1])

  private language: string
  private country: string

  constructor(language: string, country?: string) {
    this.language = language
    this.country = country!
  }

  static createConstant(language: string, country: string) {
    const ins = new Locale(language, country)
    return ins
  }

  static getDefault() {
    const systemLocale = getSystemLocale()
    const ins = new Locale(systemLocale.language, systemLocale.country)
    return ins
  }
}
