import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    width: 100%;
    align-items: flex-end;
    position: relative;
    margin-left: -80px;
    margin-top: -80px;
`;

export const Content = styled.article`
    display: flex;
    padding: 20px 10px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray20};
    width: 85%;
    min-width: 880px;

    margin-top: -40px;
`;

export const Item = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-right: 1px solid ${({ theme }) => theme.colors.gray30};

    &:last-child {
        border-right: none;
    }
`;

export const ItemContent = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    gap: 10px;
`;

export const IconContainer = styled.div`
    display: flex;
    width: 37px;
    height: 37px;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.blue40};
`;

export const ScrollDownButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    background: ${({ theme }) => theme.colors.blue40};
    border: none;
    cursor: pointer;
`;
