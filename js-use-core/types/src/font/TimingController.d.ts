export interface TimingOptions {
    timeout?: number;
    retryDelay?: number;
    maxRetries?: number;
}
export declare class TimingController {
    private defaultTimeout;
    private defaultRetryDelay;
    private defaultMaxRetries;
    constructor(options?: TimingOptions);
    waitForDocumentFontsReady(timeout?: number): Promise<void>;
    createFontLoadTimeout(fontName: string, timeout: number): Promise<never>;
    scheduleRetry(fontName: string, attempt: number): Promise<void>;
    delay(ms: number): Promise<void>;
    raceWithTimeout<T>(promises: Promise<T>[], timeout: number, timeoutMessage?: string): Promise<T>;
    withRetry<T>(operation: () => Promise<T>, maxRetries?: number, retryDelay?: number): Promise<T>;
    private createTimeout;
    private calculateRetryDelay;
    isTimeoutError(error: Error): boolean;
    debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
    throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;
}
