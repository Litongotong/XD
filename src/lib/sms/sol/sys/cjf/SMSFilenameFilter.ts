import { NativeFile } from '@/lib/native/io/File'
import type { FilenameFilter } from '@/lib/native/io/FilenameFilter'
import { createStringArray } from '@/utils/array/1D'

/**
 * ファイルfilterクラスです。
 */
export class SMSFilenameFilter implements FilenameFilter {
  static FILETYPE_CSV = 'csv'

  private fileTypes: string[] = null!

  constructor(...args: any[]) {
    if (args.length === 0) {
      // pass
    } else if (args.length === 1) {
      const isString = typeof args[0] === 'string'
      if (isString) {
        const fileType = args[0]
        this.fileTypes = createStringArray(1)
        this.fileTypes[0] = fileType
      } else if (Array.isArray(args[0])) {
        let fileTypes = args[0]
        fileTypes = createStringArray(fileTypes.length)
        this.fileTypes = fileTypes
      } else {
        throw new Error('Invalid argument')
      }
    } else {
      throw new Error('Invalid argument')
    }
  }

  /**
   * 指定したファイルをファイルリストに含めているかを判断します。
   * @param dir  ファイルが発見されたディレクトリ名
   * @param name ファイル名
   * @return ファイルリストに含めていればtrue、含めていないとfalseを返す。
   */
  accept(dir: NativeFile, name: string): boolean {
    for (let i = 0; i < this.fileTypes.length; i++) {
      return name.toLowerCase().endsWith(this.fileTypes[i])
    }
    return false
  }

  _getName(): string {
    return 'SMSFilenameFilter'
  }

  static _getName(): string {
    return 'SMSFilenameFilter'
  }

  _getType() {
    return SMSFilenameFilter as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSFilenameFilter'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSFilenameFilter'
  }
}
