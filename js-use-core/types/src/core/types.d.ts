export interface BaseOptions {
    debug?: boolean;
    timeout?: number;
    retries?: number;
    cache?: boolean;
}
export declare enum ErrorType {
    USER_ERROR = "USER_ERROR",
    SYSTEM_ERROR = "SYSTEM_ERROR",
    NETWORK_ERROR = "NETWORK_ERROR",
    PERMISSION_ERROR = "PERMISSION_ERROR",
    CONFIG_ERROR = "CONFIG_ERROR",
    TIMEOUT_ERROR = "TIMEOUT_ERROR",
    VALIDATION_ERROR = "VALIDATION_ERROR",
    INTERNAL_ERROR = "INTERNAL_ERROR",
    UNKNOWN_ERROR = "UNKNOWN_ERROR"
}
export interface ErrorContext {
    module: string;
    method: string;
    input?: any;
    userAgent?: string;
    timestamp: number;
    extra?: Record<string, any>;
}
export interface ProcessedError {
    type: ErrorType;
    message: string;
    originalError: Error;
    context: ErrorContext;
    solution?: string;
    recoverable: boolean;
    code?: string;
}
export declare enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3
}
export interface LogEntry {
    level: LogLevel;
    message: string;
    timestamp: number;
    module?: string;
    data?: any;
}
export interface CacheEntry<T = any> {
    value: T;
    expireAt: number;
    createdAt: number;
    accessCount: number;
    lastAccessed: number;
}
export interface CacheConfig {
    maxSize?: number;
    defaultTTL?: number;
    enableLRU?: boolean;
    cleanupInterval?: number;
}
export type EventListener = (...args: any[]) => void;
export interface EventListenerConfig {
    listener: EventListener;
    once?: boolean;
    priority?: number;
}
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: ProcessedError;
    metadata?: {
        timestamp: number;
        version: string;
        cached: boolean;
    };
}
