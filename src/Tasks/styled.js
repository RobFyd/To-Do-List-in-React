import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 20px;
    margin: 0;
`;

export const Item = styled.li`
    padding: 10px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    border-bottom: 1px solid lightgray;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}

    @media (max-width: 500px) {
        word-wrap: break-word;
    }
`;

export const DoneButton = styled.button`
    background-color: hsl(120, 61%, 34%);
    border: none;
    color: white;
    cursor: pointer;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 0.5s;

    &:hover {
        background-color: hsl(120, 61%, 39%);
        transition: 0.5s;
    }

    &:active {
        background-color: hsl(120, 61%, 44%);
    }
`;

export const RemoveButton = styled.button`
    background-color: hsl(348, 83%, 47%);
    border: none;
    color: white;
    cursor: pointer;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 0.5s;

    &:hover {
        background-color: hsl(348, 83%, 55%);
        transition: 0.5s;
    }

    &:active {
        background-color: hsl(348, 83%, 63%);
    }
`;

