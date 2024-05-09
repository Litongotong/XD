import { MsisDebug } from '@/utils/debug/log'
import { InputStream } from '../native/io/InputStream'

type IClassLoader = () => IClassLoaderReturn
type IClassLoaderReturn = {
  getResourceAsStream: (path: string) => InputStream
}

interface IClass {
  getClassLoader: IClassLoader
  getName: () => string
}

// for `Class.class.getClassLoader().getResourceAsStream()`
// This class will get config from `./configs/*` folder
export class NativeClassAdapter {
  private ins: any
  class: IClass

  constructor(ins: any) {
    this.ins = ins
    this.class = {
      getClassLoader: this.getClassLoader,
      getName: this.getName,
    }
  }

  static from(ins: any) {
    return new NativeClassAdapter(ins)
  }

  getName() {
    const name = this.ins?._getFullName?.() || ''
    if (!name?.length) {
      MsisDebug.error(
        'NativeClassAdapter.getName() failed,',
        'name is empty.',
        'ins:',
        this.ins,
        'name:',
        name,
      )
    }
    return name
  }

  getClassLoader() {
    const getResourceAsStream = (url: string) => {
      const ins = InputStream._from(url)
      return ins
    }

    const ret: IClassLoaderReturn = {
      getResourceAsStream,
    }
    return ret
  }
}
