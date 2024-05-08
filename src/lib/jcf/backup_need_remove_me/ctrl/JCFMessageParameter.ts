import { JCFEvent } from './JCFEvent'

export class JCFMessageParameter {
  private messageID: string
  private inStrs: string[]
  private inAddStrs: string[]
  private data: any
  private point: any // TODO
  private event: JCFEvent | null
  private specifiedEvent: boolean

  constructor(messageID: string, inStr: string, inAddStr: string, data: any)
  constructor(
    messageID: string,
    inStr: string,
    inAddStr: string,
    data: any,
    x: number,
    y: number,
  )
  constructor(
    messageID: string,
    inStrs: string[],
    inAddStrs: string[],
    data: any,
  )
  constructor(
    messageID: string,
    inStrs: string[],
    inAddStrs: string[],
    data: any,
    x: number,
    y: number,
  )
  constructor(
    messageID: string,
    event: JCFEvent,
    inStrs: string[],
    inAddStrs: string[],
    data: any,
  )
  constructor(
    messageID: string,
    event: JCFEvent,
    inStrs: string[],
    inAddStrs: string[],
    data: any,
    x: number,
    y: number,
  )
  constructor(...args: any[]) {
    const [messageID, param1, param2, param3, param4, param5] = args
    this.messageID = messageID
    this.inStrs = []
    this.inAddStrs = []
    this.data = null
    this.point = null
    this.event = null
    this.specifiedEvent = false

    if (param1 instanceof JCFEvent) {
      this.event = param1
      this.inStrs = param2 || []
      this.inAddStrs = param3 || []
      this.data = param4
      this.specifiedEvent = true
      if (typeof param5 === 'number') {
        this.point = { x: param5, y: args[6] }
      }
    } else {
      this.inStrs = Array.isArray(param1) ? param1 : param1 ? [param1] : []
      this.inAddStrs = Array.isArray(param2) ? param2 : param2 ? [param2] : []
      this.data = param3
      if (typeof param4 === 'number') {
        this.point = { x: param4, y: param5 }
      }
    }
  }

  getData(): any {
    return this.data
  }

  getEvent(): JCFEvent | null {
    return this.event ?? null
  }

  getInAddStrs(): string[] {
    return this.inAddStrs
  }

  getInStrs(): string[] {
    return this.inStrs
  }

  getMessageID(): string {
    return this.messageID
  }

  getPoint(): { x: number; y: number } | undefined {
    return this.point
  }

  isSpecifiedEvent(): boolean {
    return this.specifiedEvent
  }
}
