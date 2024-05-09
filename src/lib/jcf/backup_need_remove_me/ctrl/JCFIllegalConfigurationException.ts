import { JCFException } from './JCFException'

export class JCFIllegalConfigurationException extends JCFException {
  constructor(message?: string, cause?: Error) {
    super(message, cause)
  }
}
