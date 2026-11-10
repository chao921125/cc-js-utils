import { ErrorType, ErrorContext, ProcessedError } from '../types/errors';
import { Logger } from './Logger';
export declare class CustomError extends Error {
    readonly type: ErrorType;
    readonly code?: string;
    readonly context?: ErrorContext;
    readonly recoverable: boolean;
    constructor(type: ErrorType, message: string, options?: {
        code?: string;
        context?: ErrorContext;
        recoverable?: boolean;
        cause?: Error;
    });
}
export declare class ErrorHandler {
    private logger;
    private errorSolutions;
    constructor(logger?: Logger);
    handleError(error: Error, context?: Partial<ErrorContext>): ProcessedError;
    createError(type: ErrorType, message: string, details?: {
        code?: string;
        context?: Partial<ErrorContext>;
        recoverable?: boolean;
        cause?: Error;
    }): CustomError;
    isRecoverableError(error: Error): boolean;
    getErrorSolution(error: Error): string | null;
    getErrorSolutions(error: Error): Array<{
        description: string;
        steps: string[];
        links?: string[];
        automatic?: boolean;
        priority?: number;
    }>;
    private getErrorSeverity;
    private generateErrorCode;
    private generateErrorId;
    addErrorSolution(errorCode: string, solution: string): void;
    addErrorSolutions(solutions: Record<string, string>): void;
    private classifyError;
    private getUserFriendlyMessage;
    private getErrorCode;
    private getDefaultSolution;
    private initializeErrorSolutions;
}
