import { MsisDebug } from '../debug/log'
import { uuid } from '../useful/uuid'
import { IndexDBUtil } from './indexdb'

const DB_NAME = '__msis_file_system__'
const DB_OBJECT_STORE_NAME = 'files'
const DB_VERSION = 1
enum EFileSystemDBKey {
  id = 'id',
  name = 'name',
  content = 'content',
}

type Task = () => Promise<void>

export interface IFileSystemWriteOpts {
  // add to end
  append?: boolean
}

export class FileSystem {
  static dbUtil: IndexDBUtil
  static queue: Task[] = []
  static isRunning = false
  static isInited = false

  static async init() {
    if (this.isInited) {
      return 
    }
    this.isInited = true
    const ins = new IndexDBUtil({
      databaseName: DB_NAME,
      version: DB_VERSION,
      objectStores: [
        {
          objectStoreName: DB_OBJECT_STORE_NAME,
          objectStoreOptions: {
            keyPath: EFileSystemDBKey.id,
          },
          objectStoreIndex: [
            {
              name: EFileSystemDBKey.name,
              keyPath: EFileSystemDBKey.name,
              options: { unique: false },
            },
            {
              name: EFileSystemDBKey.content,
              keyPath: EFileSystemDBKey.content,
              options: { unique: false },
            },
          ],
        },
      ],
    })
    await ins.initDB()
    MsisDebug.log(`[FileSystem] init db success`)
    this.dbUtil = ins
  }

  static getUtil() {
    if (!this.dbUtil) {
      throw new Error('dbUtil is not initialized')
    }
    return this.dbUtil
  }

  static generateID() {
    const timestamp = Date.now()
    const randomUUID = uuid()
    const id = `${timestamp}-${randomUUID}`
    return id
  }

  static write(filename: string, content: string, opts?: IFileSystemWriteOpts) {
    const { append } = opts || {}
    const task = async () => {
      const util = this.getUtil()
      const target = await util.getByIndex(
        DB_OBJECT_STORE_NAME,
        EFileSystemDBKey.name,
        filename,
      )
      if (!target) {
        // insert new
        const id = FileSystem.generateID()
        await util.add(DB_OBJECT_STORE_NAME, {
          id,
          name: filename,
          content,
        })
        MsisDebug.log(`[FileSystem] write file success: ${filename}`)
      } else {
        let newContent = content
        if (append) {
          newContent = target.content + content
        }
        // modify
        await util.put(DB_OBJECT_STORE_NAME, {
          ...target,
          content: newContent,
        })
        MsisDebug.log(`[FileSystem] update file success: ${filename}`)
      }
    }
    this.queue.push(task)
    this.executeQueue()
  }

  static async executeQueue() {
    if (!this.queue.length) {
      return
    }
    if (this.isRunning) {
      return
    }
    this.isRunning = true
    // start to execute
    let firstTask: Task | undefined = this.queue.shift()
    while (firstTask) {
      await firstTask()
      if (!this.queue.length) {
        firstTask = undefined
      } else {
        firstTask = this.queue.shift()
      }
    }
    // over
    this.isRunning = false
  }
}
