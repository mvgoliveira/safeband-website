import { Theme } from "@/themes";

declare global {
    export type ColorIcons = {
        width?: number;
        height?: number;
        color?: keyof typeof Theme.colors;
    };
}
