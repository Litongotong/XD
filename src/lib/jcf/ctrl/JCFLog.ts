import { NativeString } from '@/lib/native/lang/String'
import { StringBuilder } from '@/lib/native/lang/StringBuilder'
import { System } from '@/lib/native/lang/System'
import { SimpleDateFormat } from '@/lib/native/text/SimpleDateFormat'
import { NativeDate } from '@/lib/native/util/Date'
import { Log } from '@/utils/log'

export class JCFLog {
  private static logOutLevel = 0
  private static isTimestamp = true
  private static timestamp = new SimpleDateFormat('yyyy/MM/dd HH:mm:ss SSS')

  static write(str: string, level: number): void {
    Log._pushToAllQueue(str, level)
    if (level <= this.logOutLevel) {
      str = this.addTimestamp(str)
      Log.push(str)
    }
  }

  static addTimestamp(logStr: string): string {
    if (this.isTimestamp) {
      logStr = new StringBuilder(NativeString.valueOf(this.getCurrentTime()))
        .append(' ')
        .append(logStr)
        .toString()
    }
    return logStr
  }

  static getCurrentTime(): string {
    let date: NativeDate = new NativeDate(System.currentTimeMillis())
    let dateStr: string = this.timestamp.format(date)
    return dateStr
  }

  _getName(): string {
    return 'JCFLog'
  }

  static _getName(): string {
    return 'JCFLog'
  }

  _getType() {
    return JCFLog as any
  }

  _getFullName(): string {
    return 'jcf.ctrl.JCFLog'
  }

  static _getFullName(): string {
    return 'jcf.ctrl.JCFLog'
  }
}
