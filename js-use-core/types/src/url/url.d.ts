import type { UrlInfo, QueryParams, UrlBuildOptions, UrlManagerOptions } from './types';
import { BaseManager } from '../core/BaseManager';
export declare class UrlManager extends BaseManager<UrlManagerOptions> {
    private _url;
    private _urlObj;
    constructor(options?: UrlManagerOptions | string);
    protected getDefaultOptions(): Required<UrlManagerOptions>;
    initialize(): Promise<void>;
    destroy(): void;
    getUrlInfo(): UrlInfo;
    getQuery(): QueryParams;
    setQuery(params: QueryParams): this;
    addQuery(params: QueryParams): this;
    removeQuery(keys: string | string[]): this;
    setHash(hash: string): this;
    setPathname(pathname: string): this;
    toString(): string;
    reset(url: string): this;
    isValidUrl(url: string): boolean;
    private _updateUrl;
    private _validateUrl;
}
export declare function getUrl(url?: string): UrlInfo;
export declare function buildUrl(options: UrlBuildOptions): string;
export declare function getQuery(): QueryParams;
export declare function getHash(): string;
declare const _default: {
    UrlManager: typeof UrlManager;
    getUrl: typeof getUrl;
    buildUrl: typeof buildUrl;
    getQuery: typeof getQuery;
    getHash: typeof getHash;
};
export default _default;
