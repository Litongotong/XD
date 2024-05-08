import type { NativeFile } from './File'

export interface FilenameFilter {
  accept(dir: NativeFile, name: string): boolean
}
