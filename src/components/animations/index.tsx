import styled from "styled-components";

import { Blink } from "./keyframes";

export const BlinkAnimation = styled.div`
    animation: ${Blink} 1s ease-in-out infinite;
    display: flex;
    align-items: center;

    &:hover {
        animation: none;
    }
`;
