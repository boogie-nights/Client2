import {Settings} from './interface-editor-types';

export class InterfaceSettings {
    settings: Settings;

    constructor() {
        this.settings = this.initSettings();
        this.initBackgroundDisplayListener();
    }

    private initSettings(): Settings {
        return (this.settings = {
            shouldDrawChatback: false,
            shouldDrawInvback: false
        } as Settings);
    }

    private initBackgroundDisplayListener(): void {
        const backgroundDropdown: HTMLElement | null = document.getElementById('interface-background');
        backgroundDropdown?.addEventListener('change', (e): void => {
            const targetElem: HTMLSelectElement = e.target as HTMLSelectElement;

            if (targetElem.value === 'invback') {
                this.settings.shouldDrawInvback = true;
                this.settings.shouldDrawChatback = false;
            } else if (targetElem.value === 'chatback') {
                this.settings.shouldDrawInvback = false;
                this.settings.shouldDrawChatback = true;
            } else {
                this.settings.shouldDrawInvback = false;
                this.settings.shouldDrawChatback = false;
            }
        });
    }
}
