import ComType from '../jagex2/config/ComType';

export interface ComData {
    displayText: string;
    comType: ComType;
    grandChildren: Map<number, ComData>;
}

export interface Settings {
    shouldDrawInvback: boolean;
    shouldDrawChatback: boolean;
}
