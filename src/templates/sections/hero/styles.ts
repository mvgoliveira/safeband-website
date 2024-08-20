import { Theme } from "@/themes";
import styled from "styled-components";

export const Hero = styled.section`
    display: flex;
    width: 100%;
    min-height: 100vh;

    @media (max-width: 900px) {
        min-height: fit-content;
        flex-direction: column-reverse;
        justify-content: flex-end;
        padding-top: 20px;
        gap: 60px;
    }
`;

export const Content = styled.article`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    justify-content: center;
    max-width: 500px;
`;

export const HeroImageContent = styled.article`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    width: 600px;
    height: 100%;
    overflow: hidden;

    @media (max-width: 900px) {
        position: relative;
        width: 100%;
        height: 180px;
        top: 0;
        overflow: visible;
    }
`;

export const HeroImageContainer = styled.div`
    position: relative;
    width: 500px;
    height: 100%;

    @media (max-width: 1120px) {
        right: -100px;
    }

    @media (max-width: 1015px) {
        right: -200px;
    }

    @media (max-width: 900px) {
        right: 0;
        width: 100%;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 25px;
    }
`;

interface IFloatRectangleProps {
    top?: number;
    bottom?: number;
    left: number;
    borderRadius?: string;
    color: keyof typeof Theme.colors;
}

export const FloatRectangle = styled.div<IFloatRectangleProps>`
    position: absolute;
    top: ${({ top }) => `${top}px`};
    bottom: ${({ bottom }) => `${bottom}px`};
    left: ${({ left }) => `${left}px`};
    border-radius: ${({ borderRadius }) => borderRadius};
    background: ${({ theme, color }) => theme.colors[color]};
    width: 100px;
    height: 100px;

    @media (max-width: 1120px) {
        left: ${({ left }) => `${left + 100}px`};
    }

    @media (max-width: 1015px) {
        left: ${({ left }) => `${left + 200}px`};
    }

    @media (max-width: 900px) {
        width: 50px;
        height: 50px;
        left: ${({ left }) => `${left}px`};
    }
`;

export const DotGridContainer = styled.div`
    position: absolute;
    top: 50px;
    left: 10px;

    @media (max-width: 1120px) {
        left: 110px;
    }

    @media (max-width: 1015px) {
        left: 210px;
    }

    @media (max-width: 900px) {
        left: calc(100% - 95px);
    }
`;

export const FloatAlertContainer = styled.div`
    position: absolute;
    bottom: 200px;
    right: 30px;

    @media (max-width: 1015px) {
        right: 10px;
    }

    @media (max-width: 900px) {
        bottom: 0;
        transform: scale(0.8);
        left: -20px;
        width: fit-content;
    }
`;
