import { EventListener } from './types';
export declare class EventEmitter {
    private events;
    private maxListeners;
    on(event: string, listener: EventListener, options?: {
        once?: boolean;
        priority?: number;
    }): this;
    once(event: string, listener: EventListener, priority?: number): this;
    off(event: string, listener?: EventListener): this;
    emit(event: string, ...args: any[]): boolean;
    listenerCount(event: string): number;
    listeners(event: string): EventListener[];
    eventNames(): string[];
    removeAllListeners(event?: string): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    prependListener(event: string, listener: EventListener): this;
    prependOnceListener(event: string, listener: EventListener): this;
}
