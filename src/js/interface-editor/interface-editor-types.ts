import ComType from '../jagex2/config/ComType';

export interface ComData {
    displayText: string;
    comType: ComType;
    children: Map<number, ComData>;
}

export interface Settings {
    shouldDrawInvback: boolean;
    shouldDrawChatback: boolean;
}
