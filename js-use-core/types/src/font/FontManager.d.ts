import { BaseManager } from '../core/BaseManager';
import { BaseOptions } from '../types/core';
export interface FontCheckResult {
    name: string;
    loaded: boolean;
    status: string;
    loadTime?: number;
    error?: string;
}
export interface FontLoadResult {
    success: boolean;
    allFonts: FontCheckResult[];
    failedFonts?: FontCheckResult[];
    totalLoadTime?: number;
}
export interface FontDetectionOptions {
    waitForLoad?: boolean;
    timeout?: number;
    retries?: number;
    immediate?: boolean;
    strategy?: 'comprehensive' | 'fast' | 'system-only';
}
export interface FontOptions extends BaseOptions {
    timeout?: number;
    retries?: number;
    cache?: boolean;
    concurrency?: number;
    detectionThreshold?: number;
    detection?: FontDetectionOptions;
}
export interface FontLoadState {
    family: string;
    status: 'loading' | 'loaded' | 'error' | 'timeout';
    startTime: number;
    endTime?: number;
    error?: Error;
    retryCount: number;
}
declare class FontManager extends BaseManager<FontOptions> {
    private addedFonts;
    private loadingStates;
    private systemFonts;
    private timingController;
    private stateManager;
    private detectionOptions;
    constructor(options?: FontOptions);
    getDetectionOptions(): FontDetectionOptions;
    updateDetectionOptions(options: Partial<FontDetectionOptions>): void;
    protected getDefaultOptions(): Required<FontOptions>;
    initialize(): Promise<void>;
    destroy(): void;
    addFont(fontName: string, url: string, options?: FontFaceDescriptors): Promise<boolean>;
    private loadFontWithRetry;
    check(fontNames?: string | string[]): Promise<FontLoadResult>;
    private checkMultipleFonts;
    private sortFontsByPriority;
    private checkSingleFont;
    private performFontCheck;
    private checkWithFontFaceAPI;
    private performFontDetectionTest;
    private checkAllFonts;
    addFontFace(font: FontFace): boolean;
    deleteFont(font: FontFace | string): boolean;
    clearFonts(): boolean;
    getFontLoadState(fontName: string): FontLoadState | undefined;
    getAllFontLoadStates(): Map<string, FontLoadState>;
    addFonts(fonts: Array<{
        name: string;
        url: string;
        options?: FontFaceDescriptors;
    }>): Promise<Array<{
        name: string;
        success: boolean;
        error?: string;
    }>>;
    preloadFonts(fontNames: string[]): Promise<{
        available: string[];
        unavailable: string[];
        cached: string[];
    }>;
    cleanup(): void;
    getPerformanceStats(): {
        totalFontsChecked: number;
        cacheHitRate: number;
        averageCheckTime: number;
        loadingFonts: number;
        loadedFonts: number;
        failedFonts: number;
    };
    private isCrossDomainUrl;
    private isCORSError;
}
export default FontManager;
