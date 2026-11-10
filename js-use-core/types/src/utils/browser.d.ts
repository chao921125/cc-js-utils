export interface FeatureDetectionResult {
    supported: boolean;
    prefixedName?: string;
    prefix?: string;
    method: 'property' | 'method' | 'css' | 'api' | 'custom';
    timestamp: number;
}
export interface BrowserAdapterConfig {
    enableCache?: boolean;
    cacheTimeout?: number;
    debug?: boolean;
    customPrefixes?: string[];
}
export interface PrefixedMethodMap {
    original: string;
    prefixed: string;
    prefix: string;
}
export interface BrowserInfo {
    name: string;
    version: string;
    engine: string;
    mobile: boolean;
    os: string;
}
export declare class BrowserAdapter {
    private cache;
    private logger;
    private errorHandler;
    private config;
    private readonly VENDOR_PREFIXES;
    private readonly CSS_PREFIXES;
    private browserInfo;
    constructor(config?: BrowserAdapterConfig);
    isSupported(feature: string): boolean;
    getPrefixedProperty(property: string): string | null;
    getPrefixedMethod(methodName: string, target?: any): Function | null;
    getPrefixedCSSProperty(property: string): string | null;
    detectFeature(feature: string, method?: FeatureDetectionResult['method'], target?: any): FeatureDetectionResult;
    private detectProperty;
    private detectMethod;
    private detectCSSProperty;
    private detectAPI;
    private detectCustomFeature;
    private getPrefixedName;
    private getNestedProperty;
    getBrowserInfo(): BrowserInfo;
    addEventListenerCompat(element: Element | Document | Window, event: string, handler: EventListener, options?: AddEventListenerOptions): () => void;
    clearCache(): void;
    getCacheStats(): {
        size: number;
        hitRate: number;
        maxSize: number;
    };
    destroy(): void;
}
export declare function getBrowserAdapter(config?: BrowserAdapterConfig): BrowserAdapter;
export declare function isFeatureSupported(feature: string): boolean;
export declare function getPrefixedProperty(property: string): string | null;
export declare function getPrefixedMethod(methodName: string, target?: any): Function | null;
export declare function getPrefixedCSSProperty(property: string): string | null;
export declare function getBrowserInfo(): BrowserInfo;
export declare function addEventListenerCompat(element: Element | Document | Window, event: string, handler: EventListener, options?: AddEventListenerOptions): () => void;
export declare const FeatureDetection: {
    readonly flexbox: boolean;
    readonly grid: boolean;
    readonly transforms: boolean;
    readonly transitions: boolean;
    readonly animations: boolean;
    readonly fetch: boolean;
    readonly promises: boolean;
    readonly asyncAwait: boolean;
    readonly webGL: boolean;
    readonly webWorkers: boolean;
    readonly serviceWorkers: boolean;
    readonly canvas: boolean;
    readonly video: boolean;
    readonly audio: boolean;
    readonly localStorage: boolean;
    readonly sessionStorage: boolean;
    readonly geolocation: boolean;
    readonly deviceMotion: boolean;
    readonly deviceOrientation: boolean;
    readonly vibration: boolean;
    readonly mediaDevices: boolean;
    readonly getUserMedia: boolean;
    readonly webRTC: boolean;
};
