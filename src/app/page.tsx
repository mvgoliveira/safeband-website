"use client";

import HeroSection from "@/templates/sections/hero";
import { ReactElement } from "react";

import { Container } from "./styles";

export default function Home(): ReactElement {
    return (
        <Container>
            <HeroSection />
        </Container>
    );
}
