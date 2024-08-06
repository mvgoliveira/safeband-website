import { Theme } from "@/themes/index";

type BaseConfig = {
    backgroundColor: keyof typeof Theme.colors;
    headingColor: keyof typeof Theme.colors;
    paragraphColor: keyof typeof Theme.colors;
};

type ConfigByVariants<T extends string> = {
    [K in T]: BaseConfig;
};

export type Variants = "light";

export const themeConfig: ConfigByVariants<Variants> = {
    light: {
        backgroundColor: "white",
        headingColor: "black",
        paragraphColor: "gray70",
    },
};
