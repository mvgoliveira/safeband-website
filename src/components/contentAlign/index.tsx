import { IContentAlign } from "@interfaces/components";
import { ReactElement } from "react";

import { Container } from "./styles";

export default function ContentAlign({
    children,
    gap = "0px",
    margin = "0",
    padding = "0",
    contentDirection,
    contentAlignMainAxis,
    contentAlignSecondaryAxis,
}: IContentAlign): ReactElement {
    return (
        <Container
            gap={gap}
            margin={margin}
            padding={padding}
            contentDirection={contentDirection}
            contentAlignMainAxis={contentAlignMainAxis}
            contentAlignSecondaryAxis={contentAlignSecondaryAxis}
        >
            {children}
        </Container>
    );
}
