/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export namespace lib.com.fujitsu.sms.sol.sys {
  export abstract class SMSLoginInfo {
    public constructor() {
      if (this.kaishaCode === undefined) {
        this.kaishaCode = null
      }
      if (this.kaishaName === undefined) {
        this.kaishaName = null
      }
      if (this.bushoCode === undefined) {
        this.bushoCode = null
      }
      if (this.bushoName === undefined) {
        this.bushoName = null
      }
      if (this.userId === undefined) {
        this.userId = null
      }
      if (this.userName === undefined) {
        this.userName = null
      }
      this.kaishaCode = ''
      this.kaishaName = ''
      this.bushoCode = ''
      this.bushoName = ''
      this.userId = ''
      this.userName = ''
    }

    public getKaishaCode(): string {
      return this.kaishaCode
    }

    public getKaishaName(): string {
      return this.kaishaName
    }

    public getBushoCode(): string {
      return this.bushoCode
    }

    public getBushoName(): string {
      return this.bushoName
    }

    public getUserId(): string {
      return this.userId
    }

    public getUserName(): string {
      return this.userName
    }

    public setKaishaCode(kaishaCode: string) {
      this.kaishaCode = kaishaCode
    }

    public setKaishaName(kaishaName: string) {
      this.kaishaName = kaishaName
    }

    public setBushoCode(bushoCode: string) {
      this.bushoCode = bushoCode
    }

    public setBushoName(bushoName: string) {
      this.bushoName = bushoName
    }

    public setUserId(userId: string) {
      this.userId = userId
    }

    public setUserName(userName: string) {
      this.userName = userName
    }

    /*private*/ kaishaCode: string

    /*private*/ kaishaName: string

    /*private*/ bushoCode: string

    /*private*/ bushoName: string

    /*private*/ userId: string

    /*private*/ userName: string
  }
  SMSLoginInfo['__class'] = 'lib.com.fujitsu.sms.sol.sys.SMSLoginInfo'
}
