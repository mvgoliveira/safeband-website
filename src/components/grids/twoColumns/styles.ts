import { Row, Col } from "antd";
import styled from "styled-components";

export const Columns = styled(Row)<{
    $mobileContentDirection: "normal" | "inverse";
    $mobileButtonSize: "normal" | "full";
}>`
    height: max-content;

    @media (max-width: 991px) {
        flex-direction: ${({ $mobileContentDirection }) =>
            $mobileContentDirection === "normal" ? "column" : "column-reverse"};
    }

    @media (max-width: 600px) {
        button {
            width: ${({ $mobileButtonSize }) =>
                $mobileButtonSize === "normal" ? "contain" : "100%"};
        }
    }
`;

export const Column = styled(Col)`
    width: 100%;
`;
