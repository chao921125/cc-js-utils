import { EventEmitter } from '../core/EventEmitter';
import { FontEventSystem } from './FontEventSystem';
export interface FontLoadingState {
    family: string;
    status: 'pending' | 'loading' | 'loaded' | 'error' | 'timeout';
    startTime: number;
    endTime?: number;
    loadTime?: number;
    error?: Error;
    retryCount: number;
    source?: 'system' | 'web' | 'dynamic';
    loadMethod?: 'css' | 'fontface' | 'preload' | 'document' | 'detection';
}
export interface FontLoadProgress {
    total: number;
    loaded: number;
    failed: number;
    pending: number;
    progress: number;
    fonts: Map<string, FontLoadingState>;
}
export declare class FontLoadingStateManager extends EventEmitter {
    private fontStates;
    private trackedFonts;
    private eventSystem;
    constructor(eventSystem?: FontEventSystem);
    trackFont(fontName: string, source?: 'system' | 'web' | 'dynamic'): void;
    getLoadingState(fontName: string): FontLoadingState | undefined;
    updateFontState(fontName: string, updates: Partial<FontLoadingState>): void;
    waitForFont(fontName: string, timeout?: number): Promise<FontLoadingState>;
    waitForAllFonts(timeout?: number): Promise<Map<string, FontLoadingState>>;
    getProgress(): FontLoadProgress;
    clear(): void;
    untrackFont(fontName: string): boolean;
    getTrackedFonts(): string[];
    isTracked(fontName: string): boolean;
    getEventSystem(): FontEventSystem;
    private emitProgressEvents;
    private calculateProgress;
    startBatchOperation(batchId: string, fontNames: string[]): void;
    endBatchOperation(batchId: string): void;
    handleBatchTimeout(batchId: string, timeout: number): void;
}
