import { BaseManager } from '../core/BaseManager';
import { BaseOptions } from '../core/types';
export interface FullscreenOptions extends BaseOptions {
    navigationUI?: 'auto' | 'hide' | 'show';
    enablePerformanceMonitoring?: boolean;
    requestTimeout?: number;
    allowKeyboardInput?: boolean;
}
export type FullscreenEventType = 'change' | 'error' | 'request' | 'exit';
export interface FullscreenState {
    isFullscreen: boolean;
    element: Element | null;
    startTime?: number;
    duration?: number;
}
export interface FullscreenPerformanceMetrics {
    enterTime: number;
    exitTime: number;
    duration: number;
    errorCount: number;
    successCount: number;
}
export declare class FullscreenManager extends BaseManager<FullscreenOptions> {
    private browserAdapter;
    private removeChangeListener?;
    private removeErrorListener?;
    private currentState;
    private performanceMetrics;
    private requestStartTime;
    constructor(options?: FullscreenOptions);
    protected getDefaultOptions(): Required<FullscreenOptions>;
    initialize(): Promise<void>;
    destroy(): void;
    get isSupported(): boolean;
    get isEnabled(): boolean;
    get isFullscreen(): boolean;
    get element(): Element | null;
    get state(): FullscreenState;
    get performanceData(): FullscreenPerformanceMetrics;
    request(element?: Element, requestOptions?: {
        navigationUI?: 'auto' | 'hide' | 'show';
    }): Promise<void>;
    exit(): Promise<void>;
    toggle(element?: Element, options?: {
        navigationUI?: 'auto' | 'hide' | 'show';
    }): Promise<void>;
    private initEventListeners;
    private removeEventListeners;
    private handleFullscreenChange;
    private handleFullscreenError;
    private updateCurrentState;
    private detectChangeEventName;
    private detectErrorEventName;
    private getRequestMethodName;
    private getExitMethodName;
}
export declare function getFullscreenManager(options?: FullscreenOptions): FullscreenManager;
export declare function resetFullscreenManager(): void;
declare const fullscreen: FullscreenManager;
export default fullscreen;
export declare function requestFullscreen(element?: Element, options?: {
    navigationUI?: 'auto' | 'hide' | 'show';
}): Promise<void>;
export declare function exitFullscreen(): Promise<void>;
export declare function toggleFullscreen(element?: Element, options?: {
    navigationUI?: 'auto' | 'hide' | 'show';
}): Promise<void>;
export declare function isFullscreenSupported(): boolean;
export declare function isFullscreenEnabled(): boolean;
export declare function isFullscreen(): boolean;
export declare function getFullscreenElement(): Element | null;
export declare function getFullscreenState(): FullscreenState;
export declare function onFullscreenChange(listener: (data: any) => void): () => void;
export declare function onFullscreenError(listener: (data: any) => void): () => void;
