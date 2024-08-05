import { ReactNode } from "react";

import { Theme } from "../themes/Theme";

export interface IReactChildren {
    children: ReactNode | ReactNode[];
}

export interface ISVGsDynamicColor {
    fillColor?: keyof typeof Theme.colors;
}

export interface ISVGsDynamicSize {
    width?: number;
    height?: number;
}

export interface ISVGsDynamicColorAndSize extends ISVGsDynamicColor, ISVGsDynamicSize {}
