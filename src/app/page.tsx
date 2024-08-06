"use client";

import HeroSection from "@/templates/sections/hero";
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
        </Container>
    );
}
