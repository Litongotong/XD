export interface Window extends EventTarget, AnimationFrameProvider, GlobalEventHandlers, WindowEventHandlers, WindowLocalStorage, WindowOrWorkerGlobalScope, WindowSessionStorage {
    /**
     * @deprecated This is a legacy alias of `navigator`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigator)
     */
    readonly clientInformation: Navigator;
    /**
     * Returns true if the window has been closed, false otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/closed)
     */
    readonly closed: boolean;
    /**
     * Defines a new custom element, mapping the given name to the given constructor as an autonomous custom element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/customElements)
     */
    readonly customElements: CustomElementRegistry;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio) */
    readonly devicePixelRatio: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/document) */
    readonly document: Document;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/event)
     */
    readonly event: Event | undefined;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/external)
     */
    readonly external: External;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/frameElement) */
    readonly frameElement: Element | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/frames) */
    readonly frames: WindowProxy;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/history) */
    readonly history: History;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/innerHeight) */
    readonly innerHeight: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/innerWidth) */
    readonly innerWidth: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/length) */
    readonly length: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/location) */
    get location(): Location;
    set location(href: string | Location);
    /**
     * Returns true if the location bar is visible; otherwise, returns false.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/locationbar)
     */
    readonly locationbar: BarProp;
    /**
     * Returns true if the menu bar is visible; otherwise, returns false.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/menubar)
     */
    readonly menubar: BarProp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/name) */
    name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigator) */
    readonly navigator: Navigator;
    /**
     * Available only in secure contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/devicemotion_event)
     */
    ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => any) | null;
    /**
     * Available only in secure contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/deviceorientation_event)
     */
    ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => any) | null;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/orientationchange_event)
     */
    onorientationchange: ((this: Window, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/opener) */
    opener: any;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/orientation)
     */
    readonly orientation: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/outerHeight) */
    readonly outerHeight: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/outerWidth) */
    readonly outerWidth: number;
    /**
     * @deprecated This is a legacy alias of `scrollX`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollX)
     */
    readonly pageXOffset: number;
    /**
     * @deprecated This is a legacy alias of `scrollY`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollY)
     */
    readonly pageYOffset: number;
    /**
     * Refers to either the parent WindowProxy, or itself.
     *
     * It can rarely be null e.g. for contentWindow of an iframe that is already removed from the parent.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/parent)
     */
    readonly parent: WindowProxy;
    /**
     * Returns true if the personal bar is visible; otherwise, returns false.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/personalbar)
     */
    readonly personalbar: BarProp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screen) */
    readonly screen: Screen;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenLeft) */
    readonly screenLeft: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenTop) */
    readonly screenTop: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenX) */
    readonly screenX: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenY) */
    readonly screenY: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollX) */
    readonly scrollX: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollY) */
    readonly scrollY: number;
    /**
     * Returns true if the scrollbars are visible; otherwise, returns false.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollbars)
     */
    readonly scrollbars: BarProp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/self) */
    readonly self: Window & typeof globalThis;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/speechSynthesis) */
    readonly speechSynthesis: SpeechSynthesis;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/status)
     */
    status: string;
    /**
     * Returns true if the status bar is visible; otherwise, returns false.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/statusbar)
     */
    readonly statusbar: BarProp;
    /**
     * Returns true if the toolbar is visible; otherwise, returns false.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/toolbar)
     */
    readonly toolbar: BarProp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/top) */
    readonly top: WindowProxy | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/visualViewport) */
    readonly visualViewport: VisualViewport | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/window) */
    readonly window: Window & typeof globalThis;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/alert) */
    alert(message?: any): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/blur) */
    blur(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/cancelIdleCallback) */
    cancelIdleCallback(handle: number): void;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/captureEvents)
     */
    captureEvents(): void;
    /**
     * Closes the window.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/close)
     */
    close(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/confirm) */
    confirm(message?: string): boolean;
    /**
     * Moves the focus to the window's browsing context, if any.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/focus)
     */
    focus(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getComputedStyle) */
    getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getSelection) */
    getSelection(): Selection | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/matchMedia) */
    matchMedia(query: string): MediaQueryList;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/moveBy) */
    moveBy(x: number, y: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/moveTo) */
    moveTo(x: number, y: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/open) */
    open(url?: string | URL, target?: string, features?: string): WindowProxy | null;
    /**
     * Posts a message to the given window. Messages can be structured objects, e.g. nested objects and arrays, can contain JavaScript values (strings, numbers, Date objects, etc), and can contain certain data objects such as File Blob, FileList, and ArrayBuffer objects.
     *
     * Objects listed in the transfer member of options are transferred, not just cloned, meaning that they are no longer usable on the sending side.
     *
     * A target origin can be specified using the targetOrigin member of options. If not provided, it defaults to "/". This default restricts the message to same-origin targets only.
     *
     * If the origin of the target window doesn't match the given target origin, the message is discarded, to avoid information leakage. To send the message to the target regardless of origin, set the target origin to "*".
     *
     * Throws a "DataCloneError" DOMException if transfer array contains duplicate objects or if message could not be cloned.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/postMessage)
     */
    postMessage(message: any, targetOrigin: string, transfer?: Transferable[]): void;
    postMessage(message: any, options?: WindowPostMessageOptions): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/print) */
    print(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/prompt) */
    prompt(message?: string, _default?: string): string | null;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/releaseEvents)
     */
    releaseEvents(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/requestIdleCallback) */
    requestIdleCallback(callback: IdleRequestCallback, options?: IdleRequestOptions): number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/resizeBy) */
    resizeBy(x: number, y: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/resizeTo) */
    resizeTo(width: number, height: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scroll) */
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollBy) */
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollTo) */
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    /**
     * Cancels the document load.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/stop)
     */
    stop(): void;
    addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: Window;
}

declare var Window: {
    prototype: Window;
    new(): Window;
};