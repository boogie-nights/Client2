export interface StandardProperties {
    componentNameEl: HTMLElement;
    componentTypeEl: HTMLElement;
    componentClientCodeEl: HTMLElement;
    componentXEl: HTMLElement;
    componentYEl: HTMLElement;
    componentWidthEl: HTMLElement;
    componentHeightEl: HTMLElement;
    componentShouldHideEl: HTMLElement;

    componentName: string;
    componentType: string;
    componentClientCode: number;
    componentX: number;
    componentY: number;
    componentWidth: number;
    componentHeight: number;
    componentShouldHide: boolean;
}

export interface LayerProperties {}

export interface InvProperties {}

export interface RectProperties {
    componentFill: boolean;
    componentColor: number;
    componentActiveColor: number;
    componentOverColor: number;
}

export interface TextProperties {
    componentCenter: boolean;
    componentFont: number;
    componentShadowed: boolean;
    componentText: string;
    componentActiveText: string;
    componentActiveColor: number;
    componentOverColor: number;
}

export interface GraphicProperties {}

export interface ModelProperties {}

export interface InvTextProperties {}
