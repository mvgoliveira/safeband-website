import { IReactChildren } from "@/interfaces/core";
import { ReactElement } from "react";

import { VARIANT_APPEARANCE } from "./constants";
import { StyledButton } from "./styles";

interface IButtonProps extends IReactChildren {
    variant?: keyof typeof VARIANT_APPEARANCE;
    padding?: string;
}

export const Button = ({
    variant = "primary",
    padding = "10px 20px",
    children,
}: IButtonProps): ReactElement => {
    return (
        <StyledButton padding={padding} variant={VARIANT_APPEARANCE[variant]}>
            {children}
        </StyledButton>
    );
};
