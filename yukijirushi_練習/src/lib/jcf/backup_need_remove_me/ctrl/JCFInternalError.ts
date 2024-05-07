import { JCFError } from './JCFError';

export class JCFInternalError extends JCFError {
    constructor(message?: string, cause?: Error) {
        super(message, cause);
    }
}