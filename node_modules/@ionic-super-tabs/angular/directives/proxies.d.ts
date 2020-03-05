import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Components } from '@ionic-super-tabs/core';
export declare interface SuperTab extends Components.SuperTab {
}
export declare class SuperTab {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface SuperTabButton extends Components.SuperTabButton {
}
export declare class SuperTabButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface SuperTabs extends Components.SuperTabs {
}
export declare class SuperTabs {
    protected z: NgZone;
    tabChange: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface SuperTabsContainer extends Components.SuperTabsContainer {
}
export declare class SuperTabsContainer {
    protected z: NgZone;
    activeTabIndexChange: EventEmitter<CustomEvent>;
    selectedTabIndexChange: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface SuperTabsToolbar extends Components.SuperTabsToolbar {
}
export declare class SuperTabsToolbar {
    protected z: NgZone;
    buttonClick: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
