import type { MobileDetectOptions } from './types';
import { DeviceType, OSType, BrowserType } from './types';
export declare function isMobile(opts?: MobileDetectOptions): boolean;
export declare function isTablet(opts?: Omit<MobileDetectOptions, 'tablet'>): boolean;
export declare function isDesktop(opts?: MobileDetectOptions): boolean;
export declare function getDeviceType(opts?: MobileDetectOptions): DeviceType;
export declare function detectOS(ua?: string): OSType;
export declare function detectBrowser(ua?: string): BrowserType;
export declare function isTouchDevice(): boolean;
export declare function isRetinaDisplay(): boolean;
export declare function isDarkMode(): boolean;
export declare function supportsWebP(): Promise<boolean>;
export declare function supportsAVIF(): Promise<boolean>;
export declare function clearDetectionCache(): void;
export declare function getCacheStats(): {
    size: number;
    keys: string[];
};
export declare function enhancedMobileDetection(opts?: MobileDetectOptions): {
    isMobile: boolean;
    isTablet: boolean;
    confidence: number;
    method: 'userAgent' | 'featureDetection' | 'hybrid';
};
