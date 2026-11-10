export type ImageFormat = 'jpeg' | 'jpg' | 'png' | 'webp' | 'gif';
export interface ImageCompressOptions {
    quality?: number;
    maxWidth?: number;
    maxHeight?: number;
    format?: ImageFormat;
}
export interface ImageConvertOptions {
    format: ImageFormat;
    quality?: number;
}
export interface FileTypeResult {
    isImage: boolean;
    isAudio: boolean;
    isVideo: boolean;
    mimeType: string;
    extension: string;
}
