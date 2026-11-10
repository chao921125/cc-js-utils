export type ElementSelector = string | Element | null;
export interface EventListenerOptions extends AddEventListenerOptions {
    once?: boolean;
    capture?: boolean;
    passive?: boolean;
}
export interface BrowserCompatibility {
    supported: boolean;
    prefixedName?: string;
    prefix?: string;
}
export interface DOMPerformanceConfig {
    enableBatch?: boolean;
    batchDelay?: number;
    useFragment?: boolean;
}
export declare function isElement(element: any): element is Element;
export declare function isHTMLElement(element: any): element is HTMLElement;
export declare function isDocument(element: any): element is Document;
export declare function getElement(selector: ElementSelector): Element | null;
export declare function getElements(selector: string): Element[];
export declare function checkBrowserSupport(feature: string): BrowserCompatibility;
export declare function getPrefixedCSSProperty(property: string): string | null;
export declare function supportsCSSFeature(property: string, value?: string): boolean;
export declare function supportsHTML5Feature(feature: string): boolean;
export declare function isSupported(feature: string): boolean;
export declare function getPrefixedProperty(property: string): string | null;
export declare function addEventListener(target: ElementSelector | Document | Window, event: string, handler: EventListener, options?: EventListenerOptions): () => void;
export declare function removeEventListener(target: ElementSelector | Document | Window, event: string, handler: EventListener, options?: EventListenerOptions): void;
export declare function removeAllEventListeners(target: ElementSelector | Document | Window): void;
export declare function createCustomEvent(type: string, detail?: any, options?: CustomEventInit): CustomEvent;
export declare function dispatchCustomEvent(target: ElementSelector, type: string, detail?: any, options?: CustomEventInit): boolean;
export declare function delegate(container: ElementSelector, selector: string, event: string, handler: (event: Event, target: Element) => void, options?: EventListenerOptions): () => void;
export declare function batchDOMOperations(operations: (() => void)[]): void;
export declare function createDocumentFragment(): DocumentFragment;
export declare function appendElements(container: ElementSelector, elements: (Element | string)[], config?: DOMPerformanceConfig): void;
export declare function setStyles(target: ElementSelector, styles: Partial<CSSStyleDeclaration>): void;
export declare function setAttributes(target: ElementSelector, attributes: Record<string, string>): void;
export declare function measureElement(target: ElementSelector): DOMRect | null;
export declare function isElementInViewport(target: ElementSelector, threshold?: number): boolean;
export declare function ready(callback: () => void): void;
export declare function waitForElement(selector: string, timeout?: number): Promise<Element>;
export declare function flushBatchedOperations(): void;
