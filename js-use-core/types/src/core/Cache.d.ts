import { CacheEntry, CacheConfig } from './types';
export declare class Cache<T = any> {
    private cache;
    private config;
    private cleanupTimer?;
    constructor(config?: CacheConfig);
    set(key: string, value: T, ttl?: number): void;
    get(key: string): T | undefined;
    has(key: string): boolean;
    delete(key: string): boolean;
    clear(): void;
    size(): number;
    keys(): string[];
    getInfo(key: string): CacheEntry<T> | undefined;
    touch(key: string, ttl?: number): boolean;
    getOrSet(key: string, factory: () => T | Promise<T>, ttl?: number): Promise<T>;
    mset(entries: Array<[string, T]>, ttl?: number): void;
    mget(keys: string[]): Array<T | undefined>;
    mdel(keys: string[]): number;
    getStats(): {
        size: number;
        maxSize: number;
        hitRate: number;
        totalAccess: number;
        expiredCount: number;
    };
    cleanup(): number;
    private evictLRU;
    private startCleanup;
    stopCleanup(): void;
    updateConfig(config: Partial<CacheConfig>): void;
    destroy(): void;
}
