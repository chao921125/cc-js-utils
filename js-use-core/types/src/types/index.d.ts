export * from './core';
export * from './errors';
export type Callback<T = any> = (error?: Error, result?: T) => void;
export type AsyncCallback<T = any> = (error?: Error, result?: T) => Promise<void>;
export type EventHandler<T = Event> = (event: T) => void | Promise<void>;
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type Required<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
export type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
export type KeyValuePair<K = string, V = any> = {
    key: K;
    value: V;
};
export type Dictionary<T = any> = Record<string, T>;
export type SerializableValue = string | number | boolean | null | undefined | SerializableObject | SerializableArray;
export type SerializableObject = {
    [key: string]: SerializableValue;
};
export type SerializableArray = SerializableValue[];
export type ImageFormat = 'jpeg' | 'png' | 'gif' | 'webp' | 'bmp' | 'svg' | 'ico';
export type AudioFormat = 'mp3' | 'wav' | 'ogg' | 'aac' | 'flac' | 'm4a';
export type VideoFormat = 'mp4' | 'webm' | 'ogg' | 'avi' | 'mov' | 'wmv' | 'flv';
export type DocumentFormat = 'pdf' | 'doc' | 'docx' | 'xls' | 'xlsx' | 'ppt' | 'pptx' | 'txt' | 'rtf';
export type SupportedFormat = ImageFormat | AudioFormat | VideoFormat | DocumentFormat;
export declare enum FileType {
    IMAGE = "image",
    AUDIO = "audio",
    VIDEO = "video",
    DOCUMENT = "document",
    ARCHIVE = "archive",
    CODE = "code",
    OTHER = "other"
}
export interface ImageCompressOptions {
    quality?: number;
    maxWidth?: number;
    maxHeight?: number;
    format?: ImageFormat;
    maintainAspectRatio?: boolean;
    backgroundColor?: string;
}
export interface ImageConvertOptions {
    format: ImageFormat;
    quality?: number;
    preserveMetadata?: boolean;
}
export interface ImageDimensions {
    width: number;
    height: number;
    aspectRatio: number;
}
export interface FileInfo {
    name: string;
    size: number;
    type: FileType;
    mimeType: string;
    extension: string;
    lastModified: number;
    path?: string;
}
export interface FileTypeResult {
    isImage: boolean;
    isAudio: boolean;
    isVideo: boolean;
    isDocument?: boolean;
    type: FileType;
    mimeType: string;
    extension: string;
    isSupported?: boolean;
}
export interface FileReadOptions {
    readAs?: 'text' | 'dataURL' | 'arrayBuffer' | 'binaryString';
    encoding?: string;
    enableProgress?: boolean;
    onProgress?: (progress: number) => void;
}
export interface FileReadResult<T = any> {
    result: T;
    fileInfo: FileInfo;
    duration: number;
    success: boolean;
    error?: string;
}
export declare enum DeviceType {
    DESKTOP = "desktop",
    MOBILE = "mobile",
    TABLET = "tablet",
    TV = "tv",
    WEARABLE = "wearable",
    UNKNOWN = "unknown"
}
export declare enum OSType {
    WINDOWS = "windows",
    MACOS = "macos",
    LINUX = "linux",
    ANDROID = "android",
    IOS = "ios",
    UNKNOWN = "unknown"
}
export declare enum BrowserType {
    CHROME = "chrome",
    FIREFOX = "firefox",
    SAFARI = "safari",
    EDGE = "edge",
    IE = "ie",
    OPERA = "opera",
    UNKNOWN = "unknown"
}
export interface DeviceInfo {
    type: DeviceType;
    os: OSType;
    osVersion: string;
    browser: BrowserType;
    browserVersion: string;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isTouchDevice: boolean;
    screen: ScreenInfo;
    userAgent: string;
}
export interface ScreenInfo {
    width: number;
    height: number;
    availWidth: number;
    availHeight: number;
    pixelRatio: number;
    colorDepth: number;
    orientation: 'portrait' | 'landscape';
}
export interface BrowserCapabilities {
    webgl: boolean;
    webgl2: boolean;
    canvas: boolean;
    svg: boolean;
    localStorage: boolean;
    sessionStorage: boolean;
    indexedDB: boolean;
    webWorker: boolean;
    serviceWorker: boolean;
    webSocket: boolean;
    fetch: boolean;
    geolocation: boolean;
    camera: boolean;
    microphone: boolean;
    notifications: boolean;
    fullscreen: boolean;
    clipboard: boolean;
}
export interface URLComponents {
    protocol: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
    username?: string;
    password?: string;
}
export type QueryParams = Record<string, string | string[] | undefined>;
export interface URLBuildOptions {
    base?: string;
    params?: QueryParams;
    hash?: string;
    encodeParams?: boolean;
    keepEmptyParams?: boolean;
}
export interface URLValidationResult {
    valid: boolean;
    errors: string[];
    normalizedURL?: string;
    components?: URLComponents;
}
export type FontFormat = 'woff' | 'woff2' | 'ttf' | 'otf' | 'eot' | 'svg';
export declare enum FontStyle {
    NORMAL = "normal",
    ITALIC = "italic",
    OBLIQUE = "oblique"
}
export declare enum FontWeight {
    THIN = 100,
    EXTRA_LIGHT = 200,
    LIGHT = 300,
    NORMAL = 400,
    MEDIUM = 500,
    SEMI_BOLD = 600,
    BOLD = 700,
    EXTRA_BOLD = 800,
    BLACK = 900
}
export interface FontInfo {
    family: string;
    style: FontStyle;
    weight: FontWeight;
    format?: FontFormat;
    url?: string;
    isSystemFont: boolean;
    isLoaded: boolean;
}
export interface FontLoadOptions {
    timeout?: number;
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
    preload?: boolean;
    onLoad?: (font: FontInfo) => void;
    onError?: (error: Error) => void;
}
export interface FontDetectionResult {
    available: boolean;
    method: 'canvas' | 'dom' | 'fontface';
    duration: number;
    fontInfo: FontInfo;
}
export interface FullscreenOptions {
    navigationUI?: 'auto' | 'show' | 'hide';
    allowKeyboardInput?: boolean;
}
export interface FullscreenState {
    isFullscreen: boolean;
    element: Element | null;
    isSupported: boolean;
    prefix?: string;
}
export declare enum ClipboardDataType {
    TEXT = "text/plain",
    HTML = "text/html",
    RTF = "text/rtf",
    IMAGE = "image/png",
    JSON = "application/json"
}
export interface ClipboardItem {
    type: ClipboardDataType;
    data: string | Blob;
    size: number;
}
export interface ClipboardOptions {
    type?: ClipboardDataType;
    useLegacyAPI?: boolean;
    timeout?: number;
}
export interface ClipboardResult<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    apiType: 'modern' | 'legacy' | 'fallback';
}
export interface CustomEventData<T = any> {
    type: string;
    detail: T;
    timestamp: number;
    source?: string;
}
export interface EventListenerOptions extends AddEventListenerOptions {
    once?: boolean;
    capture?: boolean;
    passive?: boolean;
    signal?: AbortSignal;
}
export type Constructor<T = {}> = new (...args: any[]) => T;
export type AbstractConstructor<T = {}> = abstract new (...args: any[]) => T;
export type Mixin<T extends Constructor> = T & Constructor;
export type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
export type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
export type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
export type NonNullable<T> = T extends null | undefined ? never : T;
export type ArrayElement<T> = T extends (infer U)[] ? U : never;
export type ValueOf<T> = T[keyof T];
export type If<C extends boolean, T, F> = C extends true ? T : F;
