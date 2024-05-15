import { ref } from "vue"

class LogController {
  _allQueue = ref<string[]>([])

  private queue: string[] = []
  private THRESHOLD = 10

  // 0: API, 1: Console.log
  private OUTPUT = 0

  constructor() {}

  async send(currentQueue: string[]) {
    if (this.OUTPUT === 1) {
      currentQueue.forEach((item) => {
        console.log(item)
      })

      return
    }

    return await callAPI(currentQueue)
      .then(() => {
        // skip
      })
      .catch(() => {
        // If send failed, use local console to print log
        this.OUTPUT = 1
        this.send(currentQueue)
      })
  }

  push(str: string) {
    this.queue.push(str)
    if (this.queue.length >= this.THRESHOLD) {
      this.send(this.queue)
      this.queue = []
    }
  }

  _pushToAllQueue(str: string, level: number) {
    if (import.meta.env.DEV) {
      this._allQueue.value.push(`${str} (level: ${level})`)
    }
  }
}

export const Log = new LogController()
