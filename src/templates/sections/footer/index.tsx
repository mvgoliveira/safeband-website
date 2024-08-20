import { IconSafeBandLogo } from "@/assets/svg/safeband_logo";
import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Theme } from "@/themes";
import { ReactElement } from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

import { Container } from "./styles";

export const Footer = (): ReactElement => {
    const window = useWindowSize();

    return (
        <Container>
            <div style={{ display: "flex", gap: 20 }}>
                <IconSafeBandLogo />

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                        tag="span"
                        color="white"
                        fontFamily="roboto"
                        fontSize={{ xs: "fs75" }}
                        fontWeight="medium"
                    >
                        SafeBand
                    </Typography>

                    <Typography
                        tag="span"
                        color="white"
                        fontFamily="roboto"
                        fontSize={{ xs: "fs50" }}
                        fontWeight="regular"
                    >
                        Monitorando pessoas, salvando vidas.
                    </Typography>
                </div>
            </div>

            {window.width > 900 && (
                <div style={{ display: "flex", gap: 10 }}>
                    <Button padding="5px">
                        <FaLinkedin size={20} color={Theme.colors.white} />
                    </Button>
                    <Button padding="5px">
                        <FaInstagram size={20} color={Theme.colors.white} />
                    </Button>
                    <Button padding="5px">
                        <FaYoutube size={20} color={Theme.colors.white} />
                    </Button>
                </div>
            )}
        </Container>
    );
};
