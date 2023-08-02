import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.teal};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.lightseagreen};
    transition: 0.5s;
  }

  &:disabled {
    color: ${({ theme }) => theme.lightgray};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 5px;
  }
`;
