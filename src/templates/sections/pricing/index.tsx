import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import { Theme } from "@/themes";
import { ReactElement } from "react";
import { MdSell } from "react-icons/md";

import {
    BottomContainer,
    CardContainer,
    Container,
    IconContainer,
    LabelCard,
    PrimaryCard,
    Divider,
    SecondaryCard,
    TopContainer,
} from "./styles";

export const PricingSection = (): ReactElement => (
    <Container>
        <TopContainer>
            <div
                style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "center" }}
            >
                <IconContainer>
                    <MdSell size={12} color={Theme.colors.white} />
                </IconContainer>

                <Typography
                    tag="span"
                    color="red20"
                    fontFamily="roboto"
                    fontSize={{ xs: "fs100" }}
                    fontWeight="medium"
                >
                    Preços
                </Typography>
            </div>

            <Typography
                tag="h2"
                color="black"
                fontFamily="roboto"
                fontSize={{ xs: "fs400" }}
                fontWeight="semibold"
                $textAlign="center"
            >
                Saúde e segurança no seu pulso
            </Typography>
        </TopContainer>

        <BottomContainer>
            <SecondaryCard>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <Typography
                        tag="span"
                        color="gray70"
                        fontFamily="roboto"
                        fontSize={{ xs: "fs75" }}
                        fontWeight="semibold"
                    >
                        Relatórios
                    </Typography>

                    <div style={{ display: "flex", gap: 5 }}>
                        <div
                            style={{
                                display: "flex",
                                height: "100%",
                                alignItems: "flex-start",
                                marginTop: 10,
                            }}
                        >
                            <Typography
                                tag="span"
                                color="black"
                                fontFamily="roboto"
                                fontSize={{ xs: "fs75" }}
                                fontWeight="semibold"
                            >
                                R$
                            </Typography>
                        </div>

                        <Typography
                            tag="span"
                            color="black"
                            fontFamily="roboto"
                            fontSize={{ xs: "fs700" }}
                            fontWeight="semibold"
                        >
                            30
                        </Typography>

                        <div
                            style={{
                                display: "flex",
                                height: "100%",
                                alignItems: "flex-end",
                                paddingBottom: 10,
                            }}
                        >
                            <Typography
                                tag="span"
                                color="gray70"
                                fontFamily="roboto"
                                fontSize={{ xs: "fs75" }}
                                fontWeight="semibold"
                            >
                                / mês
                            </Typography>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            width: "100%",
                        }}
                    >
                        <Divider color="gray30" />

                        <Typography
                            tag="p"
                            color="gray70"
                            fontFamily="roboto"
                            fontSize={{ xs: "fs75" }}
                            fontWeight="regular"
                        >
                            Relatórios de saúde e segurança personalizados para você.
                        </Typography>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                        <Button>Escolher</Button>

                        <Typography
                            tag="p"
                            color="gray60"
                            fontFamily="roboto"
                            fontSize={{ xs: "fs50" }}
                            fontWeight="regular"
                        >
                            Relógio necessário
                        </Typography>
                    </div>
                </div>
            </SecondaryCard>

            <CardContainer>
                <LabelCard>
                    <Typography
                        tag="span"
                        color="white"
                        fontFamily="roboto"
                        fontSize={{ xs: "fs75" }}
                        fontWeight="semibold"
                        $textAlign="center"
                    >
                        Tecnologia física
                    </Typography>
                </LabelCard>

                <PrimaryCard>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <Typography
                            tag="span"
                            color="gray40"
                            fontFamily="roboto"
                            fontSize={{ xs: "fs75" }}
                            fontWeight="semibold"
                        >
                            SmartBand
                        </Typography>

                        <div style={{ display: "flex", gap: 5 }}>
                            <div
                                style={{
                                    display: "flex",
                                    height: "100%",
                                    alignItems: "flex-start",
                                    marginTop: 10,
                                }}
                            >
                                <Typography
                                    tag="span"
                                    color="white"
                                    fontFamily="roboto"
                                    fontSize={{ xs: "fs75" }}
                                    fontWeight="semibold"
                                >
                                    R$
                                </Typography>
                            </div>

                            <Typography
                                tag="span"
                                color="white"
                                fontFamily="roboto"
                                fontSize={{ xs: "fs700" }}
                                fontWeight="semibold"
                            >
                                899
                            </Typography>

                            <div
                                style={{
                                    display: "flex",
                                    height: "100%",
                                    alignItems: "flex-end",
                                    paddingBottom: 10,
                                }}
                            >
                                <Typography
                                    tag="span"
                                    color="gray40"
                                    fontFamily="roboto"
                                    fontSize={{ xs: "fs75" }}
                                    fontWeight="semibold"
                                >
                                    em até 10x
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 10,
                                width: "100%",
                            }}
                        >
                            <Divider color="blue80" />

                            <Typography
                                tag="p"
                                color="gray40"
                                fontFamily="roboto"
                                fontSize={{ xs: "fs75" }}
                                fontWeight="regular"
                            >
                                Acesso a dados de pressão arterial, localização, temperatura e
                                câmera.
                            </Typography>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                            <Button>Comprar já</Button>

                            <Typography
                                tag="p"
                                color="gray40"
                                fontFamily="roboto"
                                fontSize={{ xs: "fs50" }}
                                fontWeight="regular"
                            >
                                Termos e condições aplicadas
                            </Typography>
                        </div>
                    </div>
                </PrimaryCard>
            </CardContainer>

            <SecondaryCard>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <Typography
                        tag="span"
                        color="gray70"
                        fontFamily="roboto"
                        fontSize={{ xs: "fs75" }}
                        fontWeight="semibold"
                    >
                        Plano família
                    </Typography>

                    <div style={{ display: "flex", gap: 5 }}>
                        <Typography
                            tag="span"
                            color="black"
                            fontFamily="roboto"
                            fontSize={{ xs: "fs300" }}
                            fontWeight="semibold"
                        >
                            Solicite um orçamento
                        </Typography>
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            width: "100%",
                        }}
                    >
                        <Divider color="gray30" />

                        <Typography
                            tag="p"
                            color="gray70"
                            fontFamily="roboto"
                            fontSize={{ xs: "fs75" }}
                            fontWeight="regular"
                        >
                            Saúde e segurança para toda a sua família, amigos e clientes.
                        </Typography>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                        <Button>Escolher</Button>

                        <Typography
                            tag="p"
                            color="gray60"
                            fontFamily="roboto"
                            fontSize={{ xs: "fs50" }}
                            fontWeight="regular"
                        >
                            Termos e condições aplicadas
                        </Typography>
                    </div>
                </div>
            </SecondaryCard>
        </BottomContainer>
    </Container>
);
