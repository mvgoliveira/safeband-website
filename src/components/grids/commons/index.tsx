import { IGridContainerProps } from "@/interfaces/core";
import styled, { css } from "styled-components";

export const ExternalContainer = styled.section<IGridContainerProps>`
    width: 100%;
    min-height: ${({ height }) => height};
    position: relative;
    display: flex;
    justify-content: center;
    background-color: ${({ theme, backgroundBaseColor }) =>
        theme.colors[backgroundBaseColor as keyof typeof theme.colors]};
    overflow: ${({ overflow }) => (overflow ? "hidden !important" : "inherit")};
    margin: ${({ margin }) => margin};

    ${({ backgroundSource, backgroundContent, theme }) => css`
        ${backgroundSource === "image" &&
        `
            background-image: url(${backgroundContent});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        `}

        ${backgroundSource === "default" &&
        `
            background-color: ${theme.colors[backgroundContent as keyof typeof theme.colors]}
        `}
    `}
`;

export const InternalContainer = styled.div<{
    padding: string;
    maxWidth?: string;
}>`
    width: 100%;
    max-width: ${({ maxWidth }) => maxWidth || "1200px"};
    padding: ${({ padding }) => padding};
`;
