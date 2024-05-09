import timezoneData from './data.json'

export interface TimeZone {
  abbr: string
  description: string
  offset: string
  names?: string[]
}

export const timezone = timezoneData as TimeZone[]
