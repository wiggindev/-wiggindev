import type { LiteralUnion } from '@wiggindev/utils';

export type EventMap = WindowEventMap | DocumentEventMap | HTMLElementEventMap;

export type EventName<M extends EventMap> = LiteralUnion<keyof M, string>;
export type EventListener<M extends EventMap, N extends EventName<M>> = (
    event: N extends keyof M ? M[N] : Event
) => void;
export type DomEventListener = (event: Event) => void;
