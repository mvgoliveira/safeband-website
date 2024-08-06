import styled, { css } from "styled-components";

export const BottomBoxShadow = styled.div<{ height?: string }>`
    ${({ theme, height }) => css`
        width: 100%;
        height: ${height ?? "100%"};
        position: absolute;
        bottom: 0;
        z-index: 1;
        background: linear-gradient(0deg, ${theme.colors.black}, rgba(0, 0, 0, 0%));
    `}
`;
