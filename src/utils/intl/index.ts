import { timezone as timezoneData } from './timezone'

export interface ILocaleInfo {
  language: string
  country: string
}

const DEFAULT_LANGUAGE = 'jp'
const DEFAULT_COUNTRY = 'JP'
const DEFAULT_LOCALE: ILocaleInfo = {
  language: DEFAULT_LANGUAGE,
  country: DEFAULT_COUNTRY,
}

export const getSystemLocale = (): ILocaleInfo => {
  const systemLanguage = navigator.language
  if (!systemLanguage?.length || !systemLanguage.includes('-')) {
    return DEFAULT_LOCALE
  }
  const [language, country] = systemLanguage.split('-')
  return { language, country }
}

const canUseIntl = () => {
  const canUse =
    typeof window.Intl === 'object' && typeof Intl.DateTimeFormat === 'function'
  return canUse
}

const DEFAULT_TIMEZONE_ABBR = 'JST'

// get timezone id, like `UTC` / `JST`, not `Asia/Tokyo`
export const getSystemTimezoneAbbr = (): string => {
  const canUse = canUseIntl()
  if (!canUse) {
    return DEFAULT_TIMEZONE_ABBR
  }
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  // find
  const lowerCase = timezone.toLowerCase()
  const target = timezoneData.find(i => {
    const has = (i?.names || []).some(name => {
      return name.toLowerCase() === lowerCase
    })
    if (has) {
      return true
    }
    const isMatch = i.abbr.toLowerCase() === lowerCase
    if (isMatch) {
      return true
    }
    return false
  })
  if (target) {
    return target.abbr
  }
  return DEFAULT_TIMEZONE_ABBR
}
