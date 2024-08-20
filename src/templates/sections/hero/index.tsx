"use client";

import { IconDotGrid } from "@/assets/svg/dotGrid";
import { Button } from "@/components/button";
import { FloatAlertCard } from "@/components/floatAlertCard";
import { Typography } from "@/components/typography";
import { UsersImageAndText } from "@/components/usersImageAndText";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Theme } from "@/themes";
import Image from "next/image";
import { ReactElement } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";

import {
    ButtonsContainer,
    Content,
    Hero,
    HeroImageContent,
    HeroImageContainer,
    FloatRectangle,
    DotGridContainer,
    FloatAlertContainer,
} from "./styles";

export default function HeroSection(): ReactElement {
    const window = useWindowSize();

    return (
        <Hero>
            <Content>
                <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 546 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <Typography
                            tag="span"
                            color="blue40"
                            fontFamily="roboto"
                            fontSize={{ xs: "fs200" }}
                            fontWeight="regular"
                        >
                            SafeBand
                        </Typography>

                        <Typography
                            tag="h1"
                            color="black"
                            fontFamily="inter"
                            fontSize={{ xs: "fs500" }}
                            fontWeight="medium"
                        >
                            A pulseira mais tecnológica para a saúde e segurança.
                        </Typography>
                    </div>

                    <div style={{ maxWidth: 350 }}>
                        <Typography
                            tag="p"
                            color="gray70"
                            fontFamily="roboto"
                            fontSize={{ xs: "fs100" }}
                            fontWeight="regular"
                        >
                            Monitore agora mesmo a saúde e segurança da sua família, amigos ou
                            pacientes!
                        </Typography>
                    </div>
                </div>

                <ButtonsContainer>
                    <Button variant="primary">
                        Saiba Mais <MdArrowRightAlt size={18} color={Theme.colors.white} />
                    </Button>

                    <UsersImageAndText
                        users={[
                            {
                                name: "Carlos Alberto de Sá",
                                imageUrl:
                                    "https://xsgames.co/randomusers/assets/avatars/male/62.jpg",
                            },
                            {
                                name: "João de Almeida Silva",
                                imageUrl:
                                    "https://xsgames.co/randomusers/assets/avatars/male/35.jpg",
                            },
                            {
                                name: "Violeta Silva de Sá",
                                imageUrl:
                                    "https://xsgames.co/randomusers/assets/avatars/female/42.jpg",
                            },
                        ]}
                        text="+3.000 Monitorados"
                    />
                </ButtonsContainer>
            </Content>

            <HeroImageContent>
                <DotGridContainer>
                    <IconDotGrid color="gray30" />
                </DotGridContainer>

                <HeroImageContainer>
                    <Image
                        src={"https://i.ibb.co/FWZXmPD/Image-Container.webp"}
                        fill={true}
                        objectFit="cover"
                        alt={"Hero Image"}
                    />
                </HeroImageContainer>

                <FloatRectangle
                    bottom={window.width > 900 ? 40 : -25}
                    left={window.width > 900 ? 0 : window.width - 105}
                    color="blue50"
                />

                <FloatRectangle
                    bottom={window.width > 900 ? 140 : -25}
                    left={window.width > 900 ? 0 : window.width - 155}
                    borderRadius="50px 0 100px 0px"
                    color="blue70"
                />

                <FloatRectangle
                    left={window.width > 900 ? 50 : -10}
                    top={window.width > 900 ? 100 : -10}
                    color="blue40"
                />

                <FloatAlertContainer>
                    <FloatAlertCard
                        icon={<TbActivityHeartbeat size={15} color={Theme.colors.white} />}
                        title="Frequência cardíaca elevada (110 BPM)"
                        description="16/07/2024 - 19:24"
                    />
                </FloatAlertContainer>
            </HeroImageContent>
        </Hero>
    );
}
