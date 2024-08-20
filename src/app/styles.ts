import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
    padding: 0 80px;
    gap: 80px;

    @media (max-width: 900px) {
        padding: 0 20px;
        gap: 40px;
    }
`;
