import ComType from '../jagex2/config/ComType';

export class InterfaceEditorPropertyService {
    packfiles: Map<number, string>[] = [];

    constructor(packfiles: Map<number, string>[]) {
        this.packfiles = packfiles;
    }

    updateStandardPropertiesDisplay(activeComponent: ComType | null): void {
        if (!activeComponent) {
            return;
        }

        const componentNameEl: HTMLElement | null = document.getElementById('component-name');
        if (componentNameEl) {
            const componentName: string | undefined = this.packfiles[1].get(activeComponent.id);
            if (componentName) {
                const colonIndex: number = componentName?.indexOf(':');
                componentNameEl.setAttribute('value', componentName.substring(colonIndex + 1, componentName.length));
            }
        }

        const componentTypeEl: HTMLElement | null = document.getElementById('component-type');
        if (componentTypeEl) {
            componentTypeEl.setAttribute('value', this.interfaceTypeToString(activeComponent.type));
        }

        const componentCodeEl: HTMLElement | null = document.getElementById('clientcode');
        if (componentCodeEl) {
            componentCodeEl.setAttribute('value', activeComponent.clientCode.toString());
        }

        const componentXEl: HTMLElement | null = document.getElementById('component-x');
        if (componentXEl) {
            componentXEl.setAttribute('value', activeComponent.getAbsoluteX().toString());
        }

        const componentYEl: HTMLElement | null = document.getElementById('component-y');
        if (componentYEl) {
            componentYEl.setAttribute('value', activeComponent.getAbsoluteY().toString());
        }

        const componentWidthEl: HTMLElement | null = document.getElementById('component-width');
        if (componentWidthEl) {
            componentWidthEl.setAttribute('value', activeComponent.width.toString());
        }

        const componentHeightEl: HTMLElement | null = document.getElementById('component-height');
        if (componentHeightEl) {
            componentHeightEl.setAttribute('value', activeComponent.height.toString());
        }

        const componentHideEl: HTMLElement | null = document.getElementById('component-should-hide');
        if (componentHideEl) {
            componentHideEl.setAttribute('value', activeComponent.hide.toString());
        }

        const componentLayerEl: HTMLElement | null = document.getElementById('component-layer');
        if (componentLayerEl) {
            componentLayerEl.setAttribute('value', activeComponent.layer.toString());
        }
    }

    interfaceTypeToString(type: number): string {
        let childType: string = '';
        switch (type) {
            case 0:
                childType = 'Layer';
                break;
            case 2:
                childType = 'Inv';
                break;
            case 3:
                childType = 'Rectangle';
                break;
            case 4:
            case 7:
                childType = 'Text';
                break;
            case 5:
                childType = 'Graphic';
                break;
            case 6:
                childType = 'Model';
                break;
        }
        return childType;
    }
}
