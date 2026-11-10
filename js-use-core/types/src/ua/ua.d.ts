import type { ParsedUA, UAParserPlugin, ModernBrowserOptions, UAGenerateSpec, UAManagerOptions } from './types';
import { BaseManager } from '../core/BaseManager';
export declare class UAManager extends BaseManager<UAManagerOptions> {
    private plugins;
    private parseStats;
    constructor(options?: UAManagerOptions);
    protected getDefaultOptions(): Required<UAManagerOptions>;
    initialize(): Promise<void>;
    destroy(): void;
    parse(ua?: string): Promise<Readonly<ParsedUA>>;
    parseSync(ua?: string): Readonly<ParsedUA>;
    stringify(spec: UAGenerateSpec): string;
    satisfies(ua: ParsedUA | string, range: string): boolean;
    isModern(ua: ParsedUA, opts?: ModernBrowserOptions): boolean;
    getCurrent(): Promise<ParsedUA>;
    use(plugin: UAParserPlugin): void;
    removePlugin(plugin: UAParserPlugin): boolean;
    getStats(): {
        totalParses: number;
        cacheHits: number;
        pluginHits: number;
        errors: number;
        cacheHitRate: number;
        pluginCount: number;
        cacheSize?: number;
    };
    resetStats(): void;
    getCurrentUA(): string;
    private performParse;
    private performParseSync;
    private freezeParseResult;
    clearCache(): void;
    getCacheSize(): number;
}
export declare class UA {
    private static getManager;
    static parse(ua?: string): Readonly<ParsedUA>;
    static parseAsync(ua?: string): Promise<Readonly<ParsedUA>>;
    static stringify(spec: UAGenerateSpec): string;
    static satisfies(ua: ParsedUA | string, range: string): boolean;
    static isModern(ua: ParsedUA, opts?: ModernBrowserOptions): boolean;
    static get current(): ParsedUA;
    static use(plugin: UAParserPlugin): void;
    static clearCache(): void;
    static getCacheSize(): number;
    static getStats(): {
        totalParses: number;
        cacheHits: number;
        pluginHits: number;
        errors: number;
        cacheHitRate: number;
        pluginCount: number;
        cacheSize?: number;
    };
    static getCurrentUA(): string;
    static resetManager(): void;
}
export declare function getCurrentUA(): Readonly<ParsedUA>;
export declare function parseUserAgent(ua: string): Readonly<ParsedUA>;
export declare function isCompatible(range: string, ua?: string): boolean;
declare const _default: {
    UA: typeof UA;
    getCurrentUA: typeof getCurrentUA;
    parseUserAgent: typeof parseUserAgent;
    isCompatible: typeof isCompatible;
};
export default _default;
