import type { DeviceInfo, MobileDetectOptions, DeviceDetectorOptions } from './types';
import { BaseManager } from '../core/BaseManager';
export declare class DeviceDetector extends BaseManager<DeviceDetectorOptions> {
    private _deviceInfo;
    private _detectionOptions;
    constructor(options?: DeviceDetectorOptions);
    protected getDefaultOptions(): Required<DeviceDetectorOptions>;
    initialize(): Promise<void>;
    destroy(): void;
    getDeviceInfo(): Promise<DeviceInfo>;
    refresh(): Promise<DeviceInfo>;
    private _detectDevice;
    private _getUserAgent;
    setDetectionOptions(options: Partial<MobileDetectOptions>): this;
    getDetectionOptions(): MobileDetectOptions;
    checkDeviceType(type: 'mobile' | 'tablet' | 'desktop'): Promise<boolean>;
    checkOS(os: string): Promise<boolean>;
    checkBrowser(browser: string): Promise<boolean>;
    getDeviceCapabilities(): Promise<{
        touchSupport: boolean;
        screenSize: {
            width: number;
            height: number;
            pixelRatio: number;
        };
        userAgent: string;
        online: boolean;
    }>;
}
export declare function getDeviceInfo(options?: DeviceDetectorOptions): Promise<DeviceInfo>;
export declare function getDeviceInfoSync(options?: MobileDetectOptions): DeviceInfo;
export declare function createDeviceDetector(options?: DeviceDetectorOptions): DeviceDetector;
export declare function isDeviceType(type: 'mobile' | 'tablet' | 'desktop', options?: MobileDetectOptions): boolean;
declare const _default: {
    DeviceDetector: typeof DeviceDetector;
    getDeviceInfo: typeof getDeviceInfo;
    getDeviceInfoSync: typeof getDeviceInfoSync;
    createDeviceDetector: typeof createDeviceDetector;
    isDeviceType: typeof isDeviceType;
};
export default _default;
