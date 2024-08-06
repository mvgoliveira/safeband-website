import { Theme } from "@/themes";
import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 40px;
`;

export const TopContainer = styled.article`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const IconContainer = styled.div`
    display: flex;
    padding: 5px;
    background: ${({ theme }) => theme.colors.red10};
`;

export const BottomContainer = styled.article`
    display: flex;
    align-items: center;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    overflow: hidden;
`;

export const PrimaryCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 285px;
    background: ${({ theme }) => theme.colors.blue90};
    padding: 20px;
    justify-content: space-between;
`;

export const SecondaryCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 285px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray30};
    border-radius: 4px 0px 0px 4px;
    padding: 20px;
    justify-content: space-between;
`;

export const LabelCard = styled.div`
    display: flex;
    width: 100%;
    background: ${({ theme }) => theme.colors.blue60};
    padding: 10px;
    align-items: center;
    justify-content: center;
`;

export const Divider = styled.div<{ color: keyof typeof Theme.colors }>`
    width: 100%;
    height: 1px;
    background: ${({ theme, color }) => theme.colors[color]};
`;
