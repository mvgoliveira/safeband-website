import { Typography } from "@/components/typography";
import { ReactElement } from "react";

import { BlinkAnimation } from "../animations";
import { Container, IconContainer } from "./styles";

interface IFloatAlertCardProps {
    icon: ReactElement;
    title: string;
    description: string;
}

export const FloatAlertCard = ({
    icon,
    title,
    description,
}: IFloatAlertCardProps): ReactElement => (
    <Container>
        <BlinkAnimation>
            <IconContainer>{icon}</IconContainer>
        </BlinkAnimation>

        <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography
                tag="span"
                color="black"
                fontFamily="roboto"
                fontSize={{ xs: "fs50" }}
                fontWeight="semibold"
            >
                {title}
            </Typography>

            <Typography
                tag="p"
                color="gray70"
                fontFamily="roboto"
                fontSize={{ xs: "fs50" }}
                fontWeight="medium"
            >
                {description}
            </Typography>
        </div>
    </Container>
);
