import FontManager from './FontManager';
import type { FontOptions as FontManagerOptions, FontCheckResult as FontManagerCheckResult, FontLoadResult as FontManagerLoadResult } from './FontManager';
export type FontOptions = FontManagerOptions;
export type FontCheckResult = FontManagerCheckResult;
export type FontLoadResult = FontManagerLoadResult;
export declare function createFont(options?: FontOptions): Promise<FontManager>;
export declare function checkFont(fontName: string, options?: FontOptions): Promise<FontCheckResult>;
export declare function checkFonts(fontNames: string[], options?: FontOptions): Promise<FontLoadResult>;
export declare function addFont(fontName: string, url: string, options?: FontFaceDescriptors, checkerOptions?: FontOptions): Promise<boolean>;
export declare function addFontFace(font: FontFace, options?: FontOptions): Promise<boolean>;
export declare function deleteFont(font: FontFace | string, options?: FontOptions): Promise<boolean>;
export declare function clearFonts(options?: FontOptions): Promise<boolean>;
export declare function isFontLoaded(fontName: string): boolean;
export declare function waitForFonts(fontNames: string[], timeout?: number): Promise<FontLoadResult>;
export declare function loadFont(fontName: string, url: string, options?: FontFaceDescriptors, onSuccess?: () => void, onError?: (error: any, isCORSError: boolean) => void): Promise<boolean>;
export declare function isCrossDomainUrl(url: string): boolean;
export declare function isFontCORSError(error: any): boolean;
export declare function addFonts(fonts: Array<{
    name: string;
    url: string;
    options?: FontFaceDescriptors;
}>, managerOptions?: FontOptions): Promise<Array<{
    name: string;
    success: boolean;
    error?: string;
}>>;
export declare function preloadFonts(fontNames: string[], options?: FontOptions): Promise<{
    available: string[];
    unavailable: string[];
    cached: string[];
}>;
export declare function getFontPerformanceStats(options?: FontOptions): Promise<{
    totalFontsChecked: number;
    cacheHitRate: number;
    averageCheckTime: number;
    loadingFonts: number;
    loadedFonts: number;
    failedFonts: number;
}>;
export declare function cleanupFontManager(options?: FontOptions): Promise<void>;
