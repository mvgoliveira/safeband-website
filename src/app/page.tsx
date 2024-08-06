"use client";

import { DataList } from "@/templates/sections/dataList";
import HeroSection from "@/templates/sections/hero";
import ImageAndContent from "@/templates/sections/imageAndContent";
import InformationSection from "@/templates/sections/information";
import { Theme } from "@/themes";
import { ReactElement } from "react";
import { MdCall, MdSchedule, MdWatch } from "react-icons/md";

import { Container } from "./styles";

export default function Home(): ReactElement {
    return (
        <Container>
            <HeroSection />

            <InformationSection
                data={[
                    {
                        icon: <MdCall size={17} color={Theme.colors.white} />,
                        title: "Canais de atendimento",
                        descriptions: ["+55 (21) 98617-0147", "contato.safe@safeband.com"],
                    },
                    {
                        icon: <MdSchedule size={17} color={Theme.colors.white} />,
                        title: "Horários de atendimento",
                        descriptions: ["Seg - Sex: 08:00 até 21:00", "Sab - Dom: 09:00 até 17:00"],
                    },
                    {
                        icon: <MdWatch size={17} color={Theme.colors.white} />,
                        title: "Tecnologia",
                        descriptions: ["Tecnologia própria que atende", "todas suas necessidades"],
                    },
                ]}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                <ImageAndContent
                    desktopPadding="0 0 0 0"
                    $mobileButtonSize="full"
                    leftContent={{
                        contentWidthDesktop: "440px",
                        imageUri: "/plataforma_unificada_safeband.webp",
                        imageAlt: "imagem da plataforma SafeBand",
                        imageHeight: 330,
                        imageWidth: 500,
                    }}
                    rightContent={{
                        title: "A plataforma inteligente de monitoramento de saúde e segurança",
                        description:
                            "Facilite o monitoramento: Dashboard completa para tornar o monitoramento de quem você ama, mais simples. produza relatórios e acompanhe as medições em tempo real.",
                        buttonText: "Saiba mais",
                    }}
                />

                <ImageAndContent
                    desktopPadding="0"
                    $mobileButtonSize="full"
                    leftContent={{
                        title: "Alerte a todos sobre possível risco a sua saúde e/ou segurança.",
                        description:
                            "Segurança sempre: com um único botão, de fácil acesso, alerte sobre sua saúde para todos seus contatos de emergência, serviços de saúde e de segurança da sua região. Sua vida em primeiro lugar.",
                        buttonText: "Saiba mais",
                    }}
                    rightContent={{
                        contentWidthDesktop: "440px",
                        imageUri: "/pessoas_usando_safeband.webp",
                        imageAlt: "imagem de pessoas com uma SafeBand no pulso",
                        imageHeight: 360,
                        imageWidth: 463,
                    }}
                />
            </div>

            <DataList
                data={[
                    { title: "+3.000", description: "Monitorados ativos" },
                    { title: "+8.500", description: "Alertas emitidos" },
                    { title: "95%", description: "Satisfação de clientes" },
                ]}
            />
        </Container>
    );
}
