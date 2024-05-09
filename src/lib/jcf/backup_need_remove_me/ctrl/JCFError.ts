export class JCFError extends Error {
    private cause: Error | null = null;

    constructor(message?: string, cause?: Error) {
        super(message);
        this.name = "JCFError";
        if (cause) this.cause = cause;
    }

    getCause(): Error | null {
        return this.cause;
    }

    printStackTraceWithCause(): void {
        console.error(this.stack);
        if (this.cause) console.error(this.cause.stack);
    }

    getStackTraceString(): string {
        return this.stack || "";
    }

    getStackTraceStringOfCause(): string {
        return this.cause?.stack || "";
    }
}
