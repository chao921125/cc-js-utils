import { LogLevel, LogEntry } from './types';
export declare class Logger {
    private level;
    private module;
    private logs;
    private maxLogs;
    private enableConsole;
    constructor(module?: string, options?: {
        level?: LogLevel;
        maxLogs?: number;
        enableConsole?: boolean;
    });
    setLevel(level: LogLevel): void;
    getLevel(): LogLevel;
    debug(message: string, data?: any): void;
    info(message: string, data?: any): void;
    warn(message: string, data?: any): void;
    error(message: string, data?: any): void;
    private log;
    private outputToConsole;
    getLogs(): LogEntry[];
    getLogsByLevel(level: LogLevel): LogEntry[];
    getLogsByTimeRange(startTime: number, endTime: number): LogEntry[];
    clear(): void;
    setMaxLogs(maxLogs: number): void;
    setConsoleOutput(enable: boolean): void;
    exportLogs(): string;
    importLogs(jsonString: string): void;
    createChild(subModule: string): Logger;
}
