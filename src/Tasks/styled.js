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
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const DoneButton = styled.button`
  background-color: ${({ theme }) => theme.forestgreen};
  border: none;
  color: white;
  cursor: pointer;
  width: 30px;
  height: 30px;
  padding: 0;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.forestgreenHover};
    transition: 0.5s;
  }

  &:active {
    background-color: ${({ theme }) => theme.forestgreenActive};
  }
`;

export const RemoveButton = styled.button`
  background-color: ${({ theme }) => theme.amaranth};
  border: none;
  color: white;
  cursor: pointer;
  width: 30px;
  height: 30px;
  padding: 0;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.amaranthHover};
    border: none;
    transition: 0.5s;
  }

  &:active {
    background-color: ${({ theme }) => theme.amaranthActive};
    border: none;
  }
`;
