import type { UrlParseResult, QueryParams } from './types';
export declare function urlToObj(url: string): UrlParseResult;
export declare function objToUrl(obj: Record<string, any>, prefix?: string): string;
export declare function parseQuery(search: string): QueryParams;
export declare function stringifyQuery(params: QueryParams, prefix?: boolean): string;
export declare class QueryParser {
    private cache;
    private maxCacheSize;
    parse(search: string): QueryParams;
    clearCache(): void;
    getCacheSize(): number;
}
