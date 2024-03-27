import styled, { css } from "styled-components";

interface ButtonProps {
  margin?: string;
}

export const Button = styled.button<ButtonProps>`
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
      margin: ${margin};

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-bottom: 5px;
      }
    `}
`;
