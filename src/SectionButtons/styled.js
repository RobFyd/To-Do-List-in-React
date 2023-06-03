import styled, { css } from "styled-components";

export const Button = styled.button`
    color: teal;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        color: lightseagreen;
        transition: 0.5s;
    }

    &:disabled {
        color: lightgray;
        cursor: auto;
    }

    ${({ margin }) => margin && css`
        margin: 0px 15px 0px 0px;
    `}
`;