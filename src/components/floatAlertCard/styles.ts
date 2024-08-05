import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background: ${({ theme }) => theme.colors.white};
    gap: 10px;
    padding: 10px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const IconContainer = styled.div`
    display: flex;
    background: ${({ theme }) => theme.colors.red10};
    padding: 10px;
    border-radius: 4px;
`;
