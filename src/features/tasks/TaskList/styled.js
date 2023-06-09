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

export const Button = styled.button`
  background-color: ${({ theme }) => theme.forestgreen};
  border: none;
  color: white;
  cursor: pointer;
  width: 30px;
  height: 30px;
  padding: 0;
  transition: 0.5s;

  &:hover {
    filter: brightness(120%);
    transition: 0.5s;
  }

  &:active {
    filter: brightness(140%);
  }
`;

export const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.amaranth};

  &:active {
    filter: brightness(160%);
  }
`;
