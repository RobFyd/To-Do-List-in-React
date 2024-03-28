import styled from "styled-components";

export const TasksForm = styled.form`
  padding: 20px;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    flex-direction: column;
    flex-basis: 1;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.teal};
  color: ${({ theme }) => theme.white};
  border: none;
  width: auto;
  padding: 8px 20px;
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.darkcyan};
    transition: 0.2s;
    transform: scale(105%);
  }

  &:active {
    background-color: ${({ theme }) => theme.lightseagreen};
    transform: translateY(1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 15px;
  }
`;
