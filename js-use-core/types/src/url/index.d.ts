export * from './types';
export * from './parser';
export * from './utils';
export * from './url';
export { UrlManager as default } from './url';
import { UrlManager } from './url';
import type { UrlManagerOptions } from './types';
export declare function createUrlManager(options?: UrlManagerOptions): UrlManager;
