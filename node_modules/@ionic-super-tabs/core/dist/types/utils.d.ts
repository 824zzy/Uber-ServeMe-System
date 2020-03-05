import { SuperTabsConfig } from './interface';
export declare const DEFAULT_CONFIG: SuperTabsConfig;
export declare type STCoord = {
    x: number;
    y: number;
};
export declare function pointerCoord(ev: any): STCoord;
export declare const getTs: () => number;
export declare const easeInOutCubic: (t: number) => number;
export declare const scrollEl: (el: Element, x: number, y: number, duration?: number) => void;
export declare function checkGesture(newCoords: STCoord, initialCoords: STCoord, config: SuperTabsConfig): boolean;
export declare function getScrollX(el: HTMLElement, delta?: number): number;
export declare function getScrollY(el: HTMLElement, delta?: number): number;
export declare function getNormalizedScrollX(el: HTMLElement, delta?: number): number;
export declare function debugLog(config: SuperTabsConfig, tag: string, vals: any[]): void;
