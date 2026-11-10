import type { ParsedUA, ModernBrowserOptions } from './types';
declare enum ComparisonResult {
    LESS_THAN = -1,
    EQUAL = 0,
    GREATER_THAN = 1
}
interface ParsedVersion {
    major: number;
    minor: number;
    patch: number;
    build?: number;
    prerelease?: string;
    raw: string;
}
declare function parseVersionString(version: string): ParsedVersion;
declare function compareVersions(version1: string, version2: string): ComparisonResult;
export declare function satisfies(ua: ParsedUA | string, range: string | string[]): boolean;
declare function supportsFeature(ua: ParsedUA, feature: string): boolean;
export declare function isModern(ua: ParsedUA, options?: ModernBrowserOptions): boolean;
export declare function satisfiesAll(ua: ParsedUA | string, ranges: string[]): boolean;
export declare function satisfiesAny(ua: ParsedUA | string, ranges: string[]): boolean;
export declare function compareUA(ua1: ParsedUA | string, ua2: ParsedUA | string): ComparisonResult;
export declare function getSupportedFeatures(ua: ParsedUA): string[];
export declare function isOutdated(ua: ParsedUA, monthsThreshold?: number): boolean;
export declare function getSecurityLevel(ua: ParsedUA): 'high' | 'medium' | 'low' | 'critical';
export { compareVersions, parseVersionString, supportsFeature, ComparisonResult };
