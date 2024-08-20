import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    background: ${({ theme }) => theme.colors.blue70};
    padding: 20px 40px;
    justify-content: space-between;
    margin-top: 80px;

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 20px;
    }
`;
