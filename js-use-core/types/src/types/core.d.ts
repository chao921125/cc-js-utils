export interface BaseOptions {
    debug?: boolean;
    timeout?: number;
    retries?: number;
    cache?: boolean;
    cacheTTL?: number;
}
export declare enum ModuleState {
    UNINITIALIZED = "uninitialized",
    INITIALIZING = "initializing",
    INITIALIZED = "initialized",
    RUNNING = "running",
    PAUSED = "paused",
    ERROR = "error",
    DESTROYED = "destroyed"
}
export type LifecycleHook = () => void | Promise<void>;
export interface LifecycleHooks {
    beforeInit?: LifecycleHook;
    afterInit?: LifecycleHook;
    beforeDestroy?: LifecycleHook;
    afterDestroy?: LifecycleHook;
    onError?: (error: Error) => void | Promise<void>;
}
export interface IBaseManager<T = any> {
    readonly options: T;
    readonly state: ModuleState;
    readonly isInitialized: boolean;
    readonly isRunning: boolean;
    initialize(): Promise<void>;
    start?(): Promise<void>;
    stop?(): Promise<void>;
    pause?(): Promise<void>;
    resume?(): Promise<void>;
    destroy(): Promise<void>;
    on(event: string, listener: EventListener): void;
    off(event: string, listener: EventListener): void;
    emit(event: string, ...args: any[]): void;
}
export type EventListener = (...args: any[]) => void | Promise<void>;
export interface EventListenerConfig {
    listener: EventListener;
    once: boolean;
    priority?: number;
}
export interface IEventEmitter {
    on(event: string, listener: EventListener): void;
    once(event: string, listener: EventListener): void;
    off(event: string, listener?: EventListener): void;
    emit(event: string, ...args: any[]): boolean;
    listeners(event: string): EventListener[];
    listenerCount(event: string): number;
    removeAllListeners(event?: string): void;
}
export declare enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    SILENT = 4
}
export interface LogEntry {
    level: LogLevel;
    message: string;
    timestamp: number;
    module?: string;
    data?: any;
    error?: Error;
}
export interface LoggerConfig {
    level?: LogLevel;
    prefix?: string;
    timestamp?: boolean;
    colors?: boolean;
    output?: (entry: LogEntry) => void;
    maxEntries?: number;
}
export interface ILogger {
    debug(message: string, ...args: any[]): void;
    info(message: string, ...args: any[]): void;
    warn(message: string, ...args: any[]): void;
    error(message: string, error?: Error, ...args: any[]): void;
    setLevel(level: LogLevel): void;
    getHistory(): LogEntry[];
    clearHistory(): void;
}
export interface CacheEntry<T = any> {
    value: T;
    createdAt: number;
    expireAt: number;
    accessCount: number;
    lastAccessed: number;
}
export interface CacheItem<T = any> extends CacheEntry<T> {
    key: string;
    expiresAt: number;
}
export interface CacheConfig {
    maxSize?: number;
    defaultTTL?: number;
    enableLRU?: boolean;
    cleanupInterval?: number;
    enableStats?: boolean;
}
export interface CacheStats {
    size: number;
    maxSize: number;
    hits: number;
    misses: number;
    hitRate: number;
    evictions: number;
    createdAt: number;
}
export interface ICache<T = any> {
    get(key: string): T | undefined;
    set(key: string, value: T, ttl?: number): void;
    has(key: string): boolean;
    delete(key: string): boolean;
    clear(): void;
    size(): number;
    keys(): string[];
    getStats(): CacheStats;
}
export interface IPlugin {
    readonly name: string;
    readonly version: string;
    readonly description?: string;
    readonly author?: string;
    readonly dependencies?: string[];
    install(manager: IBaseManager): void | Promise<void>;
    uninstall(manager: IBaseManager): void | Promise<void>;
    isInstalled(): boolean;
}
export interface IPluginManager {
    register(plugin: IPlugin): void;
    unregister(name: string): void;
    get(name: string): IPlugin | undefined;
    getAll(): IPlugin[];
    has(name: string): boolean;
    enable(name: string): Promise<void>;
    disable(name: string): Promise<void>;
}
export interface PerformanceMetrics {
    initTime: number;
    apiCallTime: number;
    memoryUsage: number;
    cacheHitRate: number;
    errorRate: number;
    throughput: number;
}
export interface IPerformanceMonitor {
    startTiming(operation: string): void;
    endTiming(operation: string): number;
    recordMemoryUsage(): void;
    recordError(error: Error): void;
    getMetrics(): PerformanceMetrics;
    resetMetrics(): void;
}
export interface ValidationRule {
    field: string;
    required?: boolean;
    type?: 'string' | 'number' | 'boolean' | 'object' | 'array' | 'function';
    min?: number;
    max?: number;
    pattern?: RegExp;
    validator?: (value: any) => boolean | string;
    default?: any;
}
export interface ValidationResult {
    valid: boolean;
    errors: string[];
    config: any;
}
export interface IConfigValidator {
    addRule(rule: ValidationRule): void;
    validate(config: any): ValidationResult;
    getDefaults(): any;
}
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    code?: string | number;
    message?: string;
    metadata?: {
        timestamp: number;
        version: string;
        cached: boolean;
        requestId?: string;
    };
}
export declare enum AsyncOperationStatus {
    PENDING = "pending",
    RUNNING = "running",
    COMPLETED = "completed",
    FAILED = "failed",
    CANCELLED = "cancelled"
}
export interface AsyncOperationResult<T = any> {
    id: string;
    status: AsyncOperationStatus;
    result?: T;
    error?: Error;
    startTime: number;
    endTime?: number;
    progress?: number;
}
export interface IAsyncOperationManager {
    execute<T>(operation: () => Promise<T>, id?: string): Promise<AsyncOperationResult<T>>;
    cancel(id: string): boolean;
    getStatus(id: string): AsyncOperationStatus | undefined;
    getResult<T>(id: string): AsyncOperationResult<T> | undefined;
    cleanup(): void;
}
