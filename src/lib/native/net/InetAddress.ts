
// TODO: use real IP address
export class InetAddress {
  private hostName: string

  static getLocalHost() {
    const ins = new InetAddress()
    ins.hostName = 'DESKTOP-'
    return ins
  }

  getHostName() {
    return this.hostName
  }

  getHostAddress() {
    return '172.29.128.1'
  }
}
