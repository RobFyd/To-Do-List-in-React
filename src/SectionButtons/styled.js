import styled, { css } from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.teal};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.lightseagreen};
    transition: 0.5s;
  }

  &:disabled {
    color: ${({ theme }) => theme.lightgray};
    cursor: auto;
  }

  ${({ margin }) =>
    margin &&
    css`
      margin: 0px 15px 0px 0px;

      @media (max-width: 500px) {
        margin-bottom: 5px;
      }
    `}
`;
