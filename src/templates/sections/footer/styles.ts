import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    background: ${({ theme }) => theme.colors.blue70};
    padding: 20px 40px;
    margin-left: -80px;
    justify-content: space-between;
`;
