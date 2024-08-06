import styled from "styled-components";

interface IContainer {
    contentDirection: string;
    contentAlignMainAxis: string;
    contentAlignSecondaryAxis: string;
    margin: string;
    padding: string;
    gap: string;
}

export const Container = styled.div<IContainer>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: ${({ gap }) => gap};
    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding};
    flex-direction: ${({ contentDirection }) => contentDirection};
    justify-content: ${({ contentAlignMainAxis }) => contentAlignMainAxis};
    align-items: ${({ contentAlignSecondaryAxis }) => contentAlignSecondaryAxis};
`;
