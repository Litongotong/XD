export interface IIndexDBIndex {
  name: string
  keyPath: string | Iterable<string>
  options?: IDBIndexParameters
}

export interface IIndexDBStoreItem {
  objectStoreName: string
  objectStoreOptions?: IDBObjectStoreParameters
  objectStoreIndex?: IIndexDBIndex[]
}

export interface IIndexDBOptions {
  databaseName: string
  version?: number
  objectStores: IIndexDBStoreItem[]
}

const INDEX_DB_PROPERTY: any = '__msis_index_db__'
const saveDBToGlobal = (db: IDBDatabase) => {
  window[INDEX_DB_PROPERTY] = db as any
}
const getDBFromGlobal = () => {
  return window[INDEX_DB_PROPERTY] as any as IDBDatabase | undefined
}

export class IndexDBUtil {
  public opts: IIndexDBOptions

  constructor(opts: IIndexDBOptions) {
    this.opts = opts
  }

  private setDB(db: IDBDatabase) {
    const globalDB = getDBFromGlobal()
    if (globalDB) {
      return
    }
    saveDBToGlobal(db)
  }

  private connect() {
    let indexedDB: IDBFactory = window?.indexedDB
    if (!indexedDB) {
      throw Error(
        `Current browser doesn't support IndexedDB, please upgrade your browser.`,
      )
    }
    return indexedDB.open(this.opts.databaseName, this.opts.version)
  }

  async initDB() {
    const openRequest = this.connect()
    const that = this
    return new Promise<void>((resolve, reject) => {
      let db: IDBDatabase
      openRequest.onupgradeneeded = (ev: any) => {
        db = ev.target!.result
        if (db.version) {
          this.opts.objectStores.forEach((v) => {
            const objectStore: IDBObjectStore = db.createObjectStore(
              v.objectStoreName,
              v.objectStoreOptions,
            )
            v.objectStoreIndex?.forEach((v) => {
              objectStore.createIndex(v.name, v.keyPath, v.options)
            })
          })
        }
        that.setDB(db)
      }
      openRequest.onsuccess = (ev: any) => {
        if (ev.target!.result) {
          db = ev.target!.result
        }
        that.setDB(db)
        resolve()
      }
      openRequest.onerror = (ev) => {
        reject('Open indexedDB failed')
      }
    })
  }

  getDB(): IDBDatabase {
    const globalDB = getDBFromGlobal()
    if (globalDB) {
      return globalDB
    } else {
      throw new Error('IndexDB is not initialized, please initialize first.')
    }
  }

  getObjectStores(StoreNames: string | string[]): IDBObjectStore {
    const db = this.getDB()
    let objectStores: any = {}
    let objectStoreNameList = this.opts.objectStores.map((v) => {
      return v.objectStoreName
    })
    const transaction: IDBTransaction = db.transaction(
      objectStoreNameList,
      'readwrite',
    )

    if (typeof StoreNames == 'string') {
      objectStores = transaction.objectStore(StoreNames)
    } else {
      StoreNames.forEach((v: string) => {
        objectStores[v] = transaction.objectStore(v)
      })
    }
    return objectStores
  }

  async add(storeName: string, data: any): Promise<boolean> {
    const objectStores: IDBObjectStore = this.getObjectStores(storeName)
    return new Promise((resolve, reject) => {
      const request = objectStores.add(data)
      request.onerror = () => reject(false)
      request.onsuccess = () => resolve(true)
    })
  }

  async addMany(storeName: string, data: any[]): Promise<boolean> {
    const objectStores: IDBObjectStore = this.getObjectStores(storeName)
    return new Promise((resolve, reject) => {
      data.forEach((v) => {
        const request = objectStores.add(v)
        request.onerror = () => reject(false)
        request.onsuccess = () => resolve(true)
      })
    })
  }

  async get(
    storeName: string,
    key: any,
  ): Promise<boolean | Record<string, any>> {
    const objectStores: IDBObjectStore = this.getObjectStores(storeName)
    return new Promise((resolve, reject) => {
      const request = objectStores.get(key)
      request.onerror = () => reject(false)
      request.onsuccess = (ev: any) => resolve(ev.target?.result)
    })
  }

  async findAll(storeName: string): Promise<boolean | Record<string, any>[]> {
    const objectStores: IDBObjectStore = this.getObjectStores(storeName)
    return new Promise((resolve, reject) => {
      const request = objectStores.openCursor()
      let list: any[] = []
      request.onerror = () => reject(false)
      request.onsuccess = (ev: any) => {
        let cursor = ev.target?.result
        if (cursor) {
          list.push(cursor.value)
          cursor.continue()
        } else {
          resolve(list)
        }
      }
    })
  }

  async getByIndex(
    storeName: string,
    indexName: string,
    indexValue: any,
  ): Promise<false | Record<string, any>> {
    const objectStores: IDBObjectStore = this.getObjectStores(storeName)
    return new Promise((resolve, reject) => {
      const request = objectStores.index(indexName).get(indexValue)
      request.onerror = () => reject(false)
      request.onsuccess = (ev: any) => resolve(ev.target?.result)
    })
  }

  async findByIndex(
    storeName: string,
    indexName: string,
    indexValue: any,
    count?: number,
  ): Promise<boolean | object> {
    const objectStores: IDBObjectStore = this.getObjectStores(storeName)
    return new Promise((resolve, reject) => {
      const request = objectStores.index(indexName).getAll(indexValue, count)
      request.onerror = () => reject(false)
      request.onsuccess = (ev: any) => resolve(ev.target?.result)
    })
  }

  async getByIndexCursor(
    storeName: string,
    indexName: string,
    indexValue: any,
  ): Promise<boolean | Record<string, any>[]> {
    const objectStore: IDBObjectStore = this.getObjectStores(storeName)
    return new Promise((resolve, reject) => {
      const request = objectStore
        .index(indexName)
        .openCursor(IDBKeyRange.only(indexValue))
      const list: any[] = []
      request.onerror = () => reject(false)
      request.onsuccess = (ev: any) => {
        let cursor = ev.target?.result
        if (cursor) {
          list.push(cursor.value)
          cursor.continue()
        } else {
          resolve(list)
        }
      }
    })
  }

  async PageByIndexCursor(
    storeName: string,
    indexName: string,
    indexValue: any,
    page: number = 0,
    pageSize: number = 0,
  ): Promise<boolean | Record<string, any>[]> {
    const objectStore: IDBObjectStore = this.getObjectStores(storeName)
    return new Promise((resolve, reject) => {
      const request = objectStore
        .index(indexName)
        .openCursor(IDBKeyRange.only(indexValue))
      const list: any[] = []
      let counter = 0
      let advanced = true
      request.onerror = () => reject(false)
      request.onsuccess = (ev: any) => {
        let cursor = ev.target?.result
        if (page > 1 && advanced) {
          advanced = false
          cursor!.advance((page - 1) * pageSize)
          return
        }
        if (cursor) {
          list.push(cursor.value)
          counter++

          if (counter < pageSize) {
            cursor.continue()
          } else {
            cursor = null
            resolve(list)
          }
        } else {
          resolve(list)
        }
      }
    })
  }

  async page(
    storeName: string,
    page: number = 0,
    pageSize: number = 0,
  ): Promise<boolean | Record<string, any>[]> {
    const objectStore = this.getObjectStores(storeName)
    return new Promise((resolve, reject) => {
      const request = objectStore.openCursor()
      const list: any[] = []
      let counter: number = 0
      let advanced = true
      request.onerror = () => reject(false)
      request.onsuccess = (ev: any) => {
        let cursor = ev.target.result
        if (page > 1 && advanced) {
          advanced = false
          cursor?.advance((page - 1) * pageSize)
          return
        }
        if (cursor) {
          list.push(cursor.value)
          counter++
          if (counter < pageSize) {
            cursor.continue()
          } else {
            cursor = null
            resolve(list)
          }
        } else {
          resolve(list)
        }
      }
    })
  }

  async put(storeName: string, data: any): Promise<boolean> {
    const objectStore = this.getObjectStores(storeName)
    return new Promise((resolve, reject) => {
      const request = objectStore.put(data)
      request.onerror = () => reject(false)
      request.onsuccess = () => resolve(true)
    })
  }

  async putByIndexCursor(
    storeName: string,
    indexName: string,
    indexValue: any,
    data: any,
    updateAll: boolean = false,
  ): Promise<boolean> {
    const objectStore = this.getObjectStores(storeName)
    return new Promise((resolve, reject) => {
      const request = objectStore
        .index(indexName)
        .openCursor(IDBKeyRange.only(indexValue))
      request.onerror = () => reject(false)
      request.onsuccess = (ev: any) => {
        const cursor = ev.target.result
        if (cursor) {
          let Value = cursor.value
          let keys = Object.getOwnPropertyNames(data)
          for (let key in Value) {
            if (keys.includes(key)) {
              Value[key] = data[key]
            }
          }
          const updateRequest = cursor.update(Value)
          updateRequest.onerror = () => {
            console.log('IndexDB Update failed')
          }
          if (updateAll) {
            cursor.continue()
          }
        } else {
          resolve(true)
        }
      }
    })
  }

  async delete(storeName: string, key: any): Promise<boolean> {
    const objectStore: IDBObjectStore = this.getObjectStores(storeName)
    return new Promise((resolve, reject) => {
      const request = objectStore.delete(key)
      request.onerror = () => reject(false)
      request.onsuccess = () => resolve(true)
    })
  }

  async deleteByIndex(
    storeName: string,
    indexName: string,
    indexValue: any,
    deleteAll: boolean = false,
  ): Promise<boolean> {
    const objectStore: IDBObjectStore = this.getObjectStores(storeName)
    return new Promise((resolve, reject) => {
      const request = objectStore
        .index(indexName)
        .openCursor(IDBKeyRange.only(indexValue))
      request.onerror = () => reject(false)
      request.onsuccess = (ev: any) => {
        let cursor: IDBCursor | null = ev.target?.result
        if (cursor) {
          const deleteRequest = cursor.delete()
          if (deleteAll) {
            cursor.continue()
          }
          deleteRequest.onerror = () => {
            console.log('Delete failed')
          }
        } else {
          resolve(true)
        }
      }
    })
  }

  async close() {
    const db = this.getDB()
    db.close()
    console.log('IndexDB closed')
  }

  async deleteDb(): Promise<boolean> {
    const deleteRequest = window.indexedDB.deleteDatabase(
      this.opts.databaseName,
    )
    return new Promise((resolve, reject) => {
      deleteRequest.onerror = () => reject(false)
      deleteRequest.onsuccess = () => {
        console.log(
          `IndexDB ${this.opts.databaseName} has been deleted successfully.`,
        )
        resolve(true)
      }
    })
  }
}
