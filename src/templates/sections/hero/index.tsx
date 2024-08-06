"use client";

import { IconDotGrid } from "@/assets/svg/dotGrid";
import { Button } from "@/components/button";
import { FloatAlertCard } from "@/components/floatAlertCard";
import { Typography } from "@/components/typography";
import { UsersImageAndText } from "@/components/usersImageAndText";
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
} from "./styles";

export default function HeroSection(): ReactElement {
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
                <div style={{ position: "absolute", top: 50, left: 10 }}>
                    <IconDotGrid color="gray30" />
                </div>

                <HeroImageContainer>
                    <Image
                        src={"https://i.ibb.co/FWZXmPD/Image-Container.webp"}
                        fill={true}
                        objectFit="cover"
                        alt={"Hero Image"}
                    />
                </HeroImageContainer>

                <FloatRectangle bottom="40px" left={0} color="blue50" />

                <FloatRectangle
                    bottom="140px"
                    left={0}
                    borderRadius="50px 0 100px 0px"
                    color="blue70"
                />

                <FloatRectangle top="100px" left="50px" color="blue40" />

                <div style={{ position: "absolute", bottom: 200, right: 30 }}>
                    <FloatAlertCard
                        icon={<TbActivityHeartbeat size={15} color={Theme.colors.white} />}
                        title="Frequência cardíaca elevada (110 BPM)"
                        description="16/07/2024 - 19:24"
                    />
                </div>
            </HeroImageContent>
        </Hero>
    );
}
