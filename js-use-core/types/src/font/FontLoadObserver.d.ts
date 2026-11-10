import { EventEmitter } from '../core/EventEmitter';
import { FontLoadingState } from './FontLoadingStateManager';
import { TimingController } from './TimingController';
import { FontEventSystem } from './FontEventSystem';
export interface ObserverOptions {
    timeout?: number;
    retries?: number;
    method?: 'auto' | 'fontface' | 'document' | 'detection';
    pollInterval?: number;
}
export declare class FontLoadObserver extends EventEmitter {
    private timingController;
    private observedFonts;
    private defaultOptions;
    private eventSystem;
    constructor(timingController?: TimingController, eventSystem?: FontEventSystem);
    observeFont(fontName: string, options?: ObserverOptions): Promise<FontLoadingState>;
    observeMultipleFonts(fontNames: string[], options?: ObserverOptions): Promise<FontLoadingState[]>;
    stopObserving(fontName: string): void;
    stopAll(): void;
    private performFontObservation;
    private selectBestMethod;
    private observeWithMethod;
    private observeWithFontFace;
    private observeWithDocumentFonts;
    private observeWithDetection;
    private performFontDetectionTest;
    getObservedFonts(): string[];
    isObserving(fontName: string): boolean;
    getEventSystem(): FontEventSystem;
}
