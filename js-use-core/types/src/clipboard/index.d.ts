import { BaseManager } from '../core/BaseManager';
import { BaseOptions } from '../types/core';
export type ClipboardDataType = 'text' | 'html' | 'image' | 'rtf' | 'files';
export interface ClipboardData {
    type: ClipboardDataType;
    data: string | Blob | File[] | ArrayBuffer;
    size?: number;
    timestamp?: number;
    mimeType?: string;
    encoding?: string;
}
export interface CopyOptions {
    format?: ClipboardDataType;
    fallback?: boolean;
    timeout?: number;
    validateData?: boolean;
    mimeType?: string;
    encoding?: string;
    preserveFormatting?: boolean;
    sanitizeHtml?: boolean;
}
export interface PasteOptions {
    format?: ClipboardDataType;
    fallback?: boolean;
    timeout?: number;
    maxSize?: number;
    acceptedTypes?: string[];
    sanitizeHtml?: boolean;
    preserveFormatting?: boolean;
}
export interface ClipboardManagerOptions extends BaseOptions {
    defaultFormat?: ClipboardDataType;
    enablePermissionCheck?: boolean;
    maxDataSize?: number;
    enableDataValidation?: boolean;
    enableFallback?: boolean;
    permissionTimeout?: number;
    enableHtmlSanitization?: boolean;
    supportedMimeTypes?: string[];
    autoRequestPermissions?: boolean;
    fallbackStrategies?: ('modern' | 'execCommand' | 'selection' | 'input')[];
    enableDataConversion?: boolean;
    maxFileCount?: number;
    allowedFileTypes?: string[];
}
export declare enum ClipboardPermissionState {
    GRANTED = "granted",
    DENIED = "denied",
    PROMPT = "prompt",
    UNKNOWN = "unknown"
}
export declare enum FallbackStrategy {
    MODERN_API = "modern",
    EXEC_COMMAND = "execCommand",
    SELECTION_API = "selection",
    INPUT_ELEMENT = "input",
    TEXTAREA_ELEMENT = "textarea"
}
export interface DataConverter {
    readonly fromType: ClipboardDataType;
    readonly toType: ClipboardDataType;
    readonly name: string;
    readonly supportsBigData?: boolean;
    canConvert(from: ClipboardDataType, to: ClipboardDataType): boolean;
    convert(data: any, from: ClipboardDataType, to: ClipboardDataType): Promise<any>;
    validateInput?(data: any): boolean;
    getOptions?(): Record<string, any>;
}
export interface PermissionRequestResult {
    granted: boolean;
    state: ClipboardPermissionState;
    error?: Error;
    fallbackAvailable: boolean;
}
export interface DataValidationRule {
    name: string;
    validate: (data: any, type: ClipboardDataType) => boolean | string;
    required?: boolean;
    errorMessage?: string;
}
export interface DataValidationResult {
    valid: boolean;
    errors: string[];
    warnings: string[];
    processedData?: any;
}
export interface DataProcessingOptions {
    enableCompression?: boolean;
    compressionThreshold?: number;
    enableChunking?: boolean;
    chunkSize?: number;
    enableCaching?: boolean;
    cacheExpiry?: number;
    maxProcessingTime?: number;
}
export interface DataProcessingResult<T = any> {
    data: T;
    originalSize: number;
    processedSize: number;
    processingTime: number;
    fromCache: boolean;
    compressed: boolean;
    steps: string[];
}
export declare class ClipboardManager extends BaseManager<ClipboardManagerOptions> {
    private dataConverters;
    private permissionCache;
    private eventListeners;
    constructor(options?: ClipboardManagerOptions);
    protected getDefaultOptions(): Required<ClipboardManagerOptions>;
    initialize(): Promise<void>;
    destroy(): void;
    get isSupported(): boolean;
    get canRead(): boolean;
    get canWrite(): boolean;
    copyText(text: string, options?: CopyOptions): Promise<boolean>;
    copyHTML(html: string, options?: CopyOptions): Promise<boolean>;
    copyElement(element: Element | string, options?: CopyOptions): Promise<boolean>;
    readText(options?: PasteOptions): Promise<string>;
    readHTML(options?: PasteOptions): Promise<string>;
    copyFiles(files: File[], options?: CopyOptions): Promise<boolean>;
    readFiles(options?: PasteOptions): Promise<File[]>;
    read(options?: PasteOptions): Promise<ClipboardData>;
    private getFileExtension;
    private checkBrowserSupport;
    private checkPermissions;
    private checkWritePermission;
    private checkReadPermission;
    private requestPermissionSmart;
    private initializeDataConverters;
    private registerDataConverter;
    private initializeValidationRules;
    private convertData;
    private isLargeData;
    private validateClipboardData;
    private performBuiltInValidation;
    private triggerWritePermissionRequest;
    private triggerReadPermissionRequest;
    private getPermissionErrorMessage;
    private validateHtmlSafety;
    private sanitizeHtml;
    private isFileTypeAllowed;
    private hashString;
    private setupEventListeners;
    private removeEventListeners;
    private handleCopyEvent;
    private handlePasteEvent;
    private fallbackCopyText;
    private executeFallbackStrategy;
    private execCommandFallback;
    private selectionApiFallback;
    private inputElementFallback;
    private textareaElementFallback;
    private fallbackCopyHTML;
    private executeHtmlFallbackStrategy;
    private selectionHtmlFallback;
    private execCommandHtmlFallback;
    private fallbackCopyElement;
    private fallbackRead;
    onCopy(callback: (data: ClipboardData) => void): void;
    onRead(callback: (data: ClipboardData) => void): void;
    onSystemCopy(callback: (event: ClipboardEvent) => void): void;
    onSystemPaste(callback: (event: ClipboardEvent) => void): void;
    onPaste(callback: (data: ClipboardData) => void): void;
    getPermissionStatus(): Promise<{
        write: ClipboardPermissionState;
        read: ClipboardPermissionState;
    }>;
    requestPermissions(): Promise<boolean>;
    clear(): Promise<boolean>;
    addValidationRule(type: ClipboardDataType, rule: DataValidationRule): void;
    addDataConverter(converter: DataConverter): void;
    detectDataType(data: any): ClipboardDataType;
    validateData(data: any, type: ClipboardDataType, options?: {
        strict?: boolean;
    }): DataValidationResult;
    convertDataFormat(data: any, from: ClipboardDataType, to: ClipboardDataType, options?: DataProcessingOptions): Promise<any>;
    getProcessingStats(): {
        converters: number;
        validationRules: number;
        cacheSize: number;
    };
}
declare const clipboard: ClipboardManager;
export default clipboard;
