export interface MobileDetectOptions {
    ua?: string | {
        headers: {
            'user-agent': string;
        };
    };
    tablet?: boolean;
    featureDetect?: boolean;
}
export interface DeviceDetectorOptions extends MobileDetectOptions {
    debug?: boolean;
    timeout?: number;
    retries?: number;
    cache?: boolean;
    cacheTTL?: number;
    enablePerformanceMonitoring?: boolean;
}
export declare enum DeviceType {
    MOBILE = "mobile",
    TABLET = "tablet",
    DESKTOP = "desktop"
}
export declare enum OSType {
    WINDOWS = "windows",
    MACOS = "macos",
    LINUX = "linux",
    ANDROID = "android",
    IOS = "ios",
    UNKNOWN = "unknown"
}
export declare enum BrowserType {
    CHROME = "chrome",
    FIREFOX = "firefox",
    SAFARI = "safari",
    EDGE = "edge",
    IE = "ie",
    OPERA = "opera",
    UNKNOWN = "unknown"
}
export interface DeviceInfo {
    type: DeviceType;
    os: OSType;
    browser: BrowserType;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isTouchDevice: boolean;
    userAgent: string;
    screen: {
        width: number;
        height: number;
        pixelRatio: number;
    };
}
export declare enum ScreenOrientation {
    PORTRAIT = "portrait",
    LANDSCAPE = "landscape"
}
export declare enum NetworkType {
    WIFI = "wifi",
    CELLULAR = "cellular",
    ETHERNET = "ethernet",
    UNKNOWN = "unknown"
}
export interface DevicePerformanceInfo {
    level: 'low' | 'medium' | 'high' | 'unknown';
    score: number;
    memory: number;
    cores: number;
    gpu: {
        vendor: string;
        renderer: string;
    } | null;
}
export interface DeviceCapabilities {
    touch: boolean;
    webgl: boolean;
    webgl2: boolean;
    webassembly: boolean;
    serviceWorker: boolean;
    webWorkers: boolean;
    geolocation: boolean;
    camera: boolean;
    microphone: boolean;
    notifications: boolean;
    vibration: boolean;
    battery: boolean;
    deviceMotion: boolean;
    deviceOrientation: boolean;
}
