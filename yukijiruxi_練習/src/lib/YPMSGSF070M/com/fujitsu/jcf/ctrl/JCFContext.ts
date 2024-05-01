/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export namespace lib.com.fujitsu.jcf.ctrl {
  export class JCFContext {
    /*private*/ reference: lib.com.fujitsu.jcf.ctrl.JCFCMReference

    /*private*/ dataManager: lib.com.fujitsu.jcf.ctrl.JCFDTManager

    constructor(
      dataManager: lib.com.fujitsu.jcf.ctrl.JCFDTManager,
      deviceManager: lib.com.fujitsu.jcf.ctrl.JCFDVManager,
      eventController: lib.com.fujitsu.jcf.ctrl.JCFEVController,
      reference: lib.com.fujitsu.jcf.ctrl.JCFCMReference,
      container: com.java.Container,
      enabled: boolean,
      jcfmain: lib.com.fujitsu.jcf.ctrl.JCFMainInterface,
      eventType: number,
    ) {
      if (this.reference === undefined) {
        this.reference = null
      }
      if (this.dataManager === undefined) {
        this.dataManager = null
      }
      this.reference = reference
    }

    public getLogicalDevice(
      adapterName: string,
    ): lib.com.fujitsu.jcf.ctrl.JCFLogicalDevice {
      return null
    }

    public getApplicationData(
      paramKeyCommon: any,
    ): lib.com.fujitsu.sms.sol.sys.SMSLoginInfo {
      return null
    }

    public static getBaseContainer(): com.java.Container {
      return null
    }

    public removeUserData(key: string) {}

    public userDataKeySet(): Array<any> {
      return null
    }

    public putUserData(string: string, value: any) {}

    public getUserData(string: string): any {
      return null
    }

    public showDocument$com_java_URL$java_lang_String(
      url: com.java.URL,
      string: string,
    ) {}

    public showDocument(url?: any, string?: any) {
      if (
        ((url != null && url instanceof <any>com.java.URL) || url === null) &&
        (typeof string === 'string' || string === null)
      ) {
        return <any>this.showDocument$com_java_URL$java_lang_String(url, string)
      } else if (
        ((url != null && url instanceof URL) || url === null) &&
        (typeof string === 'string' || string === null)
      ) {
        return <any>this.showDocument$java_net_URL$java_lang_String(url, string)
      } else throw new Error('invalid overload')
    }

    public getMessageUtil(): lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow {
      const ret: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow =
        lib.com.fujitsu.jcf.ctrl.JCFMessage.getMessageForWindowID$java_lang_String(
          this.reference.getWindowID(),
        )
      const param: Array<any> = <any>[]
      /* add */ param.push(ret) > 0
      return ret
    }

    public getCurrentScreenData(): lib.com.fujitsu.jcf.ctrl.JCFScreenData {
      const ret: lib.com.fujitsu.jcf.ctrl.JCFScreenData =
        this.dataManager.getCurrentArea()
      const param: Array<any> = <any>[]
      /* add */ param.push(ret) > 0
      return ret
    }

    public removeApplicationData(fgInfra: string) {}

    public exit() {}

    public putApplicationData(paramKeyCommon: any, loginInfo: any) {}

    public showDocument$java_net_URL$java_lang_String(
      url: URL,
      string: string,
    ) {}

    public putSucceedData$java_lang_String$java_util_HashMap(
      key: string,
      map: any,
    ) {}

    public putSucceedData(key?: any, map?: any) {
      if (
        (typeof key === 'string' || key === null) &&
        ((map != null && map instanceof Object) || map === null)
      ) {
        return <any>(
          this.putSucceedData$java_lang_String$java_util_HashMap(key, map)
        )
      } else if (
        (typeof key === 'string' || key === null) &&
        (typeof map === 'string' || map === null)
      ) {
        return <any>(
          this.putSucceedData$java_lang_String$java_lang_String(key, map)
        )
      } else throw new Error('invalid overload')
    }

    public putSucceedData$java_lang_String$java_lang_String(
      searchStMode: string,
      stMode02: string,
    ) {}

    public getSucceedData(string: string): any {
      return null
    }
  }
  JCFContext['__class'] = 'lib.com.fujitsu.jcf.ctrl.JCFContext'
}
