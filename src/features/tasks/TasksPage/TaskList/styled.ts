import { Link } from "react-router-dom";
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

export const Content = styled.span<{ done?: boolean }>`
  ${({ done }) =>
    done &&
    css`
      span {
        text-decoration: line-through;
      }
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.teal};
`;

export const ClickMe = styled.div`
  margin-top: 2px;
  font-size: 8px;
  font-weight: bold;
  color: ${({ theme }) => theme.black};
  text-decoration: none !important;
`;
