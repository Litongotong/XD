import { OutputStream } from './OutputStream'

export class FilterOutputStream extends OutputStream {
  constructor() {
    super()
  }

  _getType() {
    return FilterOutputStream
  }
}
