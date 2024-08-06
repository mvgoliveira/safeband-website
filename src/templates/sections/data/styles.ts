import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    width: 100%;
    background: ${({ theme }) => theme.colors.blue70};
    padding: 40px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
`;
