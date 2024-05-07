import { getSystemTimezoneAbbr } from "@/utils/intl"

export class TimeZone {
  private zoneId: string // abbr

  constructor() {}

  _setZoneId(zoneId: string) {
    this.zoneId = zoneId
  }

  static getTimeZone(id: string) {
    const ins = new TimeZone()
    ins._setZoneId(id)
    return ins
  }

  static getDefault() {
    const ins = new TimeZone()
    const systemTimezoneAbbr = getSystemTimezoneAbbr()
    ins._setZoneId(systemTimezoneAbbr)
    return ins
  }
}
