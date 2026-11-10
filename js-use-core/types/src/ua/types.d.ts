import { BaseOptions } from '../types/core';
export interface BrowserInfo {
    readonly name: 'Chrome' | 'Edge' | 'Firefox' | 'Safari' | 'Opera' | 'IE' | 'Samsung' | string;
    readonly version: string;
    readonly major: number;
    readonly minor: number;
    readonly patch: number;
    readonly channel?: 'stable' | 'beta' | 'dev' | 'canary' | 'nightly';
}
export interface EngineInfo {
    readonly name: 'Blink' | 'WebKit' | 'Gecko' | 'Trident' | 'Presto' | string;
    readonly version: string;
}
export interface OSInfo {
    readonly name: 'Windows' | 'macOS' | 'iOS' | 'Android' | 'Linux' | 'HarmonyOS' | string;
    readonly version: string;
}
export interface UADeviceInfo {
    readonly type: 'desktop' | 'mobile' | 'tablet' | 'tv' | 'wearable';
    readonly vendor?: string;
    readonly model?: string;
}
export interface CPUInfo {
    readonly architecture: 'amd64' | 'arm64' | 'arm' | 'ia32' | 'loongarch64' | 'riscv64' | string;
}
export interface ParsedUA {
    readonly browser: BrowserInfo;
    readonly engine: EngineInfo;
    readonly os: OSInfo;
    readonly device: UADeviceInfo;
    readonly cpu: CPUInfo;
    readonly isBot: boolean;
    readonly isWebView: boolean;
    readonly isHeadless: boolean;
    readonly source: string;
}
export interface UAParserPlugin {
    test: (ua: string) => boolean;
    parse: (ua: string) => Partial<ParsedUA>;
}
export interface ModernBrowserOptions {
    es2020?: boolean;
    webgl2?: boolean;
    webassembly?: boolean;
    serviceWorker?: boolean;
}
export interface UAGenerateSpec {
    browser?: Partial<BrowserInfo>;
    engine?: Partial<EngineInfo>;
    os?: Partial<OSInfo>;
    device?: Partial<UADeviceInfo>;
    cpu?: Partial<CPUInfo>;
}
export type VersionOperator = '>=' | '>' | '<=' | '<' | '===' | '!==';
export interface VersionRange {
    browser: string;
    operator: VersionOperator;
    version: string;
}
export interface UAManagerOptions extends BaseOptions {
    enablePlugins?: boolean;
    maxCacheSize?: number;
    parseTimeout?: number;
}
