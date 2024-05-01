/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export namespace lib.com.fujitsu.jcf.ctrl {
  export class JCFEvent {
    subsystemID: string

    public getSubsystemID(): string {
      return this.subsystemID
    }

    setSubsystemID(subsystemID: string) {
      this.subsystemID = subsystemID
    }

    public getEventAdditionalInfo(): lib.com.fujitsu.jcf.ctrl.JCFEventAdditionalInfo {
      return null
    }

    public getScreenID(): string {
      return null
    }

    public getPanelInstance(): lib.com.fujitsu.jcf.gui.JCFPanelInterface {
      return null
    }

    public getType(): number {
      return 0
    }

    public getActionCode(): string {
      return null
    }

    constructor() {
      this.subsystemID = ''
    }
  }
  JCFEvent['__class'] = 'lib.com.fujitsu.jcf.ctrl.JCFEvent'
}
