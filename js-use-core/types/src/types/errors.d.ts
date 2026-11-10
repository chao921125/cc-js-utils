export declare enum ErrorType {
    USER_ERROR = "USER_ERROR",
    SYSTEM_ERROR = "SYSTEM_ERROR",
    NETWORK_ERROR = "NETWORK_ERROR",
    PERMISSION_ERROR = "PERMISSION_ERROR",
    CONFIG_ERROR = "CONFIG_ERROR",
    VALIDATION_ERROR = "VALIDATION_ERROR",
    TIMEOUT_ERROR = "TIMEOUT_ERROR",
    UNSUPPORTED_ERROR = "UNSUPPORTED_ERROR",
    INTERNAL_ERROR = "INTERNAL_ERROR",
    EXTERNAL_ERROR = "EXTERNAL_ERROR",
    UNKNOWN_ERROR = "UNKNOWN_ERROR"
}
export declare enum ErrorSeverity {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical"
}
export interface ErrorContext {
    module: string;
    method: string;
    input?: any;
    userAgent?: string;
    timestamp: number;
    requestId?: string;
    userId?: string;
    sessionId?: string;
    url?: string;
    stackTrace?: string;
    extra?: Record<string, any>;
}
export interface ErrorSolution {
    description: string;
    steps: string[];
    links?: string[];
    automatic?: boolean;
    priority?: number;
}
export interface ProcessedError {
    type: ErrorType;
    severity: ErrorSeverity;
    message: string;
    userMessage: string;
    originalError: Error;
    context: ErrorContext;
    code: string;
    recoverable: boolean;
    solutions: ErrorSolution[];
    id: string;
    processedAt: number;
    relatedErrors?: string[];
}
export interface CustomErrorOptions {
    type: ErrorType;
    severity?: ErrorSeverity;
    code?: string;
    recoverable?: boolean;
    context?: Partial<ErrorContext>;
    cause?: Error;
    solutions?: ErrorSolution[];
}
export interface ICustomError extends Error {
    readonly type: ErrorType;
    readonly severity: ErrorSeverity;
    readonly code: string;
    readonly recoverable: boolean;
    readonly context?: ErrorContext;
    readonly cause?: Error;
    readonly solutions: ErrorSolution[];
    readonly id: string;
    readonly createdAt: number;
    toJSON(): object;
    getUserMessage(): string;
}
export interface ErrorHandlingStrategy {
    name: string;
    matches(error: Error, context: ErrorContext): boolean;
    handle(error: Error, context: ErrorContext): ProcessedError;
    priority: number;
}
export interface ErrorRecoveryStrategy {
    name: string;
    canRecover(error: ProcessedError): boolean;
    recover(error: ProcessedError): Promise<any>;
    priority: number;
}
export interface ErrorReportingConfig {
    enabled?: boolean;
    endpoint?: string;
    apiKey?: string;
    sampleRate?: number;
    maxReports?: number;
    reportInterval?: number;
    includeStackTrace?: boolean;
    includeUserInfo?: boolean;
    filter?: (error: ProcessedError) => boolean;
    transform?: (error: ProcessedError) => any;
}
export interface ErrorStats {
    totalErrors: number;
    errorsByType: Record<ErrorType, number>;
    errorsBySeverity: Record<ErrorSeverity, number>;
    errorsByModule: Record<string, number>;
    topErrors: Array<{
        message: string;
        count: number;
        type: ErrorType;
    }>;
    errorRate: number;
    timeRange: {
        start: number;
        end: number;
    };
}
export interface ErrorHandlerConfig {
    debug?: boolean;
    maxHistory?: number;
    enableAutoRecovery?: boolean;
    enableReporting?: boolean;
    reporting?: ErrorReportingConfig;
    strategies?: ErrorHandlingStrategy[];
    recoveryStrategies?: ErrorRecoveryStrategy[];
    defaultErrorType?: ErrorType;
    defaultSeverity?: ErrorSeverity;
}
export interface IErrorHandler {
    handleError(error: Error, context?: Partial<ErrorContext>): ProcessedError;
    createError(message: string, options?: CustomErrorOptions): ICustomError;
    isRecoverableError(error: Error): boolean;
    getErrorSolutions(error: Error): ErrorSolution[];
    recoverFromError(error: ProcessedError): Promise<any>;
    addStrategy(strategy: ErrorHandlingStrategy): void;
    addRecoveryStrategy(strategy: ErrorRecoveryStrategy): void;
    getErrorHistory(): ProcessedError[];
    getErrorStats(): ErrorStats;
    clearHistory(): void;
    reportError(error: ProcessedError): Promise<void>;
}
export interface ErrorBoundaryConfig {
    name: string;
    enabled?: boolean;
    fallback?: any;
    onError?: (error: Error, errorInfo: any) => void;
    resetOnPropsChange?: boolean;
    resetKeys?: string[];
}
export interface IErrorBoundary {
    componentDidCatch?(error: Error, errorInfo: any): void;
    getDerivedStateFromError?(error: Error): any;
    resetErrorBoundary?(): void;
}
export interface GlobalErrorHandlerConfig extends ErrorHandlerConfig {
    catchUnhandledRejections?: boolean;
    catchGlobalErrors?: boolean;
    logToConsole?: boolean;
    customLogger?: (error: ProcessedError) => void;
}
export interface RetryConfig {
    maxRetries: number;
    delay: number;
    backoffMultiplier?: number;
    maxDelay?: number;
    shouldRetry?: (error: Error, attempt: number) => boolean;
    onRetry?: (error: Error, attempt: number) => void;
}
export interface RetryResult<T> {
    success: boolean;
    result?: T;
    error?: Error;
    attempts: number;
    totalTime: number;
}
export interface IErrorRetrier {
    retry<T>(operation: () => Promise<T>, config?: Partial<RetryConfig>): Promise<RetryResult<T>>;
    setDefaultConfig(config: Partial<RetryConfig>): void;
    getRetryStats(): {
        totalRetries: number;
        successfulRetries: number;
        failedRetries: number;
        averageAttempts: number;
    };
}
