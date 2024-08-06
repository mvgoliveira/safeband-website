import { Theme } from "@/themes";
import styled from "styled-components";

export const Hero = styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
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
`;

export const HeroImageContainer = styled.div`
    position: relative;
    width: 500px;
    height: 100%;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 10px;
`;

interface IFloatRectangleProps {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
    borderRadius?: string;
    color: keyof typeof Theme.colors;
}

export const FloatRectangle = styled.div<IFloatRectangleProps>`
    position: absolute;
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    right: ${({ right }) => right};
    left: ${({ left }) => left};
    border-radius: ${({ borderRadius }) => borderRadius};
    background: ${({ theme, color }) => theme.colors[color]};
    width: 100px;
    height: 100px;
`;
