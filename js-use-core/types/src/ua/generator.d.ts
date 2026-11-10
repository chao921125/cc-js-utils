import type { UAGenerateSpec } from './types';
export declare function generateUA(spec: UAGenerateSpec): string;
export declare function detectFakeUA(ua: string): {
    isFake: boolean;
    confidence: number;
    reasons: string[];
};
export declare function generateRandomUA(options?: {
    browsers?: string[];
    os?: string[];
    devices?: string[];
}): string;
export declare const UATemplates: {
    chromeWindows: (version?: string) => string;
    chromeMac: (version?: string) => string;
    chromeMacARM: (version?: string) => string;
    safariIOS: (version?: string) => string;
    safariIPad: (version?: string) => string;
    chromeAndroid: (version?: string) => string;
    samsungInternet: (version?: string) => string;
    edgeWindows: (version?: string) => string;
    edgeMac: (version?: string) => string;
    firefoxWindows: (version?: string) => string;
    firefoxMac: (version?: string) => string;
    firefoxLinux: (version?: string) => string;
    safariMac: (version?: string) => string;
    operaWindows: (version?: string) => string;
    getTemplateNames: () => string[];
    getRandom: () => string;
};
