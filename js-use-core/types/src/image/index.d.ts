import { BaseManager } from '../core/BaseManager';
import { BaseOptions } from '../types/core';
import { ImageCompressOptions, ImageConvertOptions, ImageFormat, ImageDimensions, FileInfo } from '../types';
export interface ImageManagerOptions extends BaseOptions {
    maxImageSize?: number;
    defaultQuality?: number;
    defaultFormat?: ImageFormat;
    enableSizeValidation?: boolean;
    supportedFormats?: ImageFormat[];
    canvasContextOptions?: CanvasRenderingContext2DSettings;
}
export interface ImageProcessResult<T = any> {
    result: T;
    originalInfo?: ImageInfo;
    processedInfo?: ImageInfo;
    duration: number;
    fromCache: boolean;
    compressionRatio?: number;
}
export interface ImageInfo extends FileInfo {
    dimensions: ImageDimensions;
    isAnimated?: boolean;
    colorDepth?: number;
}
export declare class ImageManager extends BaseManager<ImageManagerOptions> {
    private canvas?;
    private context?;
    protected getDefaultOptions(): Required<ImageManagerOptions>;
    initialize(): Promise<void>;
    destroy(): void;
    blobToDataURL(blob: Blob): Promise<ImageProcessResult<string>>;
    imageToDataURL(image: HTMLImageElement, format?: ImageFormat, quality?: number): ImageProcessResult<string>;
    dataURLToImage(dataURL: string): Promise<ImageProcessResult<HTMLImageElement>>;
    dataURLtoBlob(dataURL: string): ImageProcessResult<Blob>;
    dataURLtoImgBlob(dataURL: string): ImageProcessResult<Blob>;
    dataURLtoFile(dataURL: string, filename?: string): ImageProcessResult<File>;
    imgConvert(imageFile: File, options: ImageConvertOptions): Promise<ImageProcessResult<File>>;
    imgCompress(imageFile: File, options?: ImageCompressOptions): Promise<ImageProcessResult<File>>;
    getImageDimensions(imageFile: File): Promise<ImageDimensions>;
    private checkBrowserSupport;
    private initializeCanvas;
    private createImageFromFile;
    private extractImageInfo;
    private hashString;
}
export declare function blobToDataURL(blob: Blob): Promise<string>;
export declare function imageToDataURL(image: HTMLImageElement, format?: ImageFormat, quality?: number): string;
export declare function dataURLToImage(dataURL: string): Promise<HTMLImageElement>;
export declare function dataURLtoBlob(dataURL: string): Blob;
export declare function dataURLtoImgBlob(dataURL: string): Blob;
export declare function dataURLtoFile(dataURL: string, filename?: string): File;
export declare function imgConvert(imageFile: File, options: ImageConvertOptions): Promise<File>;
export declare function imgCompress(imageFile: File, options?: ImageCompressOptions): Promise<File>;
