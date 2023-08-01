import styled from "styled-components";

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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-bottom: 5px;
      }
`;