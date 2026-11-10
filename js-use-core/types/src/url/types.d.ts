import { BaseOptions } from '../core/types';
export interface UrlParseResult {
    [key: string]: string;
}
export interface UrlInfo {
    url: string;
    protocol: string;
    hostname: string;
    port: string;
    origin: string;
    pathname: string;
    search: string;
    hash: string;
    host: string;
}
export interface QueryParams {
    [key: string]: string | string[] | undefined;
}
export interface UrlBuildOptions {
    base?: string;
    pathname?: string;
    query?: QueryParams;
    hash?: string;
}
export interface UrlValidateOptions {
    protocols?: string[];
    requireProtocol?: boolean;
    allowLocalhost?: boolean;
    allowIp?: boolean;
}
export interface UrlManagerOptions extends BaseOptions {
    url?: string;
    validateUrls?: boolean;
    allowedProtocols?: string[];
    maxUrlLength?: number;
}
