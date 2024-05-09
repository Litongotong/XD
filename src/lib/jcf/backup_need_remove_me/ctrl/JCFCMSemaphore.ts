export class JCFCMSemaphore {
  private semaphore: number
  private decrementSemaphore_n: number

  constructor(sem?: number) {
    this.semaphore = 0
    this.decrementSemaphore_n = 0
    this.semaphore = sem ?? 0
  }

  initializeSemaphore(): void {
    this.semaphore = 0
  }

  decrementSemaphore(wait: boolean): boolean
  decrementSemaphore(): void
  decrementSemaphore(sem: number): void
  decrementSemaphore(sem: number, wait: boolean): boolean

  decrementSemaphore(semOrWait?: number | boolean, wait?: boolean): boolean {
    if (typeof semOrWait === 'boolean') {
      return this.decrement(1, semOrWait)
    } else if (semOrWait === undefined && wait === undefined) {
      return this.decrement(1, true)
    } else if (typeof semOrWait === 'number' && wait === undefined) {
      return this.decrement(semOrWait, true)
    } else {
      return this.decrement(semOrWait as number, wait as boolean)
    }
  }

  private decrement(sem: number, wait: boolean): boolean {
    while (this.semaphore < sem) {
      if (!wait) {
        return false
      }
      try {
        // TODO
        // wait();
      } catch (error) {}
    }
    this.semaphore -= sem
    return true
  }

  incrementSemaphore(): void
  incrementSemaphore(sem: number): void

  incrementSemaphore(sem?: number): void {
    if (sem === undefined) {
      return this.increment(1)
    } else {
      return this.increment(sem)
    }
  }

  private increment(sem: number): void {
    this.semaphore += sem
    // TODO
    // notify();
  }

  setDecrementSemaphore(sem: number): void {
    this.decrementSemaphore_n = sem
  }

  decrementSettingSemaphore(): void {
    while (this.semaphore < this.decrementSemaphore_n) {
      try {
        // TODO
        // wait();
      } catch (error) {}
    }
    this.semaphore -= this.decrementSemaphore_n
  }
}
