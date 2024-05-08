import { JCFCMConfigInfoBase } from '../ctrl/JCFCMConfigInfoBase'

export class JCFAdapterInfo extends JCFCMConfigInfoBase {
  public logicalName: string = ''
  public className: string = ''
  public testClassName: string = ''

  getLogicalName(): string {
    return this.logicalName
  }

  getClassName(): string {
    return this.className
  }

  getTestClassName(): string {
    return this.testClassName
  }
}
