import { EventEmitter } from '../core/EventEmitter';
import { FontLoadingState } from './FontLoadingStateManager';
export interface FontProgressEvent {
    fontName: string;
    progress: number;
    status: FontLoadingState['status'];
    loadTime?: number;
    error?: Error;
}
export interface FontCompletionEvent {
    fontName: string;
    status: 'loaded' | 'error' | 'timeout';
    loadTime: number;
    retryCount: number;
    error?: Error;
}
export interface FontErrorEvent {
    fontName: string;
    error: Error;
    retryCount: number;
    willRetry: boolean;
    nextRetryIn?: number;
}
export interface FontTimeoutEvent {
    fontName: string;
    timeout: number;
    retryCount: number;
    willRetry: boolean;
}
export interface BatchCompletionEvent {
    totalFonts: number;
    loadedFonts: number;
    failedFonts: number;
    totalTime: number;
    results: FontCompletionEvent[];
}
export interface BatchTimeoutEvent {
    totalFonts: number;
    completedFonts: number;
    timedOutFonts: string[];
    timeout: number;
}
export declare class FontEventSystem extends EventEmitter {
    private batchOperations;
    constructor();
    emitProgress(event: FontProgressEvent): void;
    emitCompletion(event: FontCompletionEvent): void;
    emitError(event: FontErrorEvent): void;
    emitTimeout(event: FontTimeoutEvent): void;
    emitBatchCompletion(event: BatchCompletionEvent): void;
    emitBatchTimeout(event: BatchTimeoutEvent): void;
    startBatchOperation(batchId: string, fontNames: string[]): void;
    endBatchOperation(batchId: string): void;
    handleBatchTimeout(batchId: string, timeout: number): void;
    private checkBatchCompletion;
    createProgressTracker(fontName: string): {
        updateProgress: (progress: number, status: FontLoadingState['status']) => void;
        complete: (status: 'loaded' | 'error' | 'timeout', loadTime: number, error?: Error) => void;
        error: (error: Error, retryCount: number, willRetry: boolean, nextRetryIn?: number) => void;
        timeout: (timeout: number, retryCount: number, willRetry: boolean) => void;
    };
    onProgress(fontName: string, listener: (event: FontProgressEvent) => void): this;
    onCompletion(fontName: string, listener: (event: FontCompletionEvent) => void): this;
    onError(fontName: string, listener: (event: FontErrorEvent) => void): this;
    onTimeout(fontName: string, listener: (event: FontTimeoutEvent) => void): this;
    onBatchCompletion(listener: (event: BatchCompletionEvent) => void): this;
    onBatchTimeout(listener: (event: BatchTimeoutEvent) => void): this;
    getActiveBatches(): string[];
    getBatchStatus(batchId: string): {
        totalFonts: number;
        completedFonts: number;
        pendingFonts: number;
        progress: number;
    } | null;
}
