import { ScreenOrientation, NetworkType, DevicePerformanceInfo, DeviceCapabilities } from './types';
export declare function getScreenSize(forceRefresh?: boolean): {
    width: number;
    height: number;
    pixelRatio: number;
};
export declare function getDetailedScreenInfo(): {
    width: number;
    height: number;
    availWidth: number;
    availHeight: number;
    pixelRatio: number;
    colorDepth: number;
    pixelDepth: number;
    orientation: any;
};
export declare function getViewportSize(includeScrollbar?: boolean): {
    width: number;
    height: number;
};
export declare function getActualViewportSize(): {
    width: number;
    height: number;
};
export declare function getScreenSizeCategory(): 'small' | 'medium' | 'large' | 'xlarge';
export declare function getScreenOrientation(): ScreenOrientation;
export declare function onOrientationChange(callback: (orientation: ScreenOrientation) => void): () => void;
export declare function getNetworkType(): NetworkType;
export declare function getNetworkSpeed(): {
    downlink: any;
    rtt: any;
    effectiveType: any;
};
export declare function isOnline(): boolean;
export declare function onNetworkChange(callback: (isOnline: boolean) => void): () => void;
export declare function getBatteryInfo(): Promise<any>;
export declare function getMemoryInfo(): {
    usedJSHeapSize: any;
    totalJSHeapSize: any;
    jsHeapSizeLimit: any;
};
export declare function supportsServiceWorker(): boolean;
export declare function supportsWebWorkers(): boolean;
export declare function supportsWebAssembly(): boolean;
export declare function supportsWebGL(): boolean;
export declare function supportsWebGL2(): boolean;
export declare function getGPUInfo(): {
    vendor: any;
    renderer: any;
};
export declare function getDevicePerformanceInfo(): DevicePerformanceInfo;
export declare function getDeviceCapabilities(): DeviceCapabilities;
export declare function isEnhancedTouchDevice(): boolean;
export declare function runPerformanceBenchmark(): Promise<{
    jsPerformance: number;
    renderPerformance: number;
    memoryPerformance: number;
}>;
export declare function monitorDevicePerformance(callback: (performance: DevicePerformanceInfo) => void, interval?: number): () => void;
export declare function isLowPerformanceMode(): boolean;
export declare function getDeviceThermalState(): 'normal' | 'fair' | 'serious' | 'critical' | 'unknown';
export declare function getPerformanceOptimizationSuggestions(): {
    level: 'low' | 'medium' | 'high';
    suggestions: string[];
    settings: {
        enableAnimations: boolean;
        enableShadows: boolean;
        enableBlur: boolean;
        maxImageQuality: number;
        enableLazyLoading: boolean;
    };
};
export declare function supportsFeature(feature: keyof DeviceCapabilities): boolean;
export declare function getCompatibilityReport(): {
    score: number;
    issues: string[];
    recommendations: string[];
};
