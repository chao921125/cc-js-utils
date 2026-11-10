import { BaseManager } from '../core/BaseManager';
import { BaseOptions } from '../types/core';
import { FileInfo, FileReadOptions, FileReadResult, FileTypeResult } from '../types';
export interface FileManagerOptions extends BaseOptions {
    maxFileSize?: number;
    allowedTypes?: string[];
    enableTypeValidation?: boolean;
    enableSizeValidation?: boolean;
    defaultReadAs?: 'text' | 'dataURL' | 'arrayBuffer' | 'binaryString';
}
export interface FileConversionResult<T = any> {
    result: T;
    originalInfo?: FileInfo;
    convertedInfo?: FileInfo;
    duration: number;
    fromCache: boolean;
}
export declare class FileManager extends BaseManager<FileManagerOptions> {
    private readonly CHUNK_SIZE;
    protected getDefaultOptions(): Required<FileManagerOptions>;
    initialize(): Promise<void>;
    destroy(): void;
    urlToBase64(url: string): Promise<FileConversionResult<string>>;
    blobToBase64(blob: Blob): Promise<FileConversionResult<string>>;
    fileToBase64(file: File): Promise<FileConversionResult<string>>;
    base64ToBlob(base64: string): FileConversionResult<Blob>;
    base64ToFile(base64: string, filename?: string): FileConversionResult<File>;
    fileToBlob(file: File): FileConversionResult<Blob>;
    blobToFile(blob: Blob, filename?: string): FileConversionResult<File>;
    readFile(file: File, options?: FileReadOptions): Promise<FileReadResult>;
    checkFileType(file: File | string): FileTypeResult;
    validateFile(file: File): {
        valid: boolean;
        errors: string[];
    };
    private checkBrowserSupport;
    private isAllowedFileType;
    private extractFileInfo;
}
export declare function urlToBase64(url: string): Promise<string>;
export declare function blobToBase64(blob: Blob): Promise<string>;
export declare function fileToBase64(file: File): Promise<string>;
export declare function base64ToBlob(base64: string): Blob;
export declare function base64ToFile(base64: string, filename?: string): File;
export declare function fileToBlob(file: File): Blob;
export declare function blobToFile(blob: Blob, filename?: string): File;
export * from './utils';
export * from './types';
