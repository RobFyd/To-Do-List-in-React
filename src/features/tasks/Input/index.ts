import styled, { css } from "styled-components";

interface InputProps {
  margin?: string;
}

export const TasksFormSearch = styled.form`
  padding: 20px;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    flex-direction: column;
    flex-basis: 1;
  }
`;

export default styled.input<InputProps>`
  margin-right: 20px;
  padding: 8px 5px;
  border: 1px solid ${({ theme }) => theme.lightgray};
  flex-grow: 1;

  ${({ margin }) =>
    margin &&
    css`
      margin-right: 0px;
    `}

  &:enabled {
    border-color: ${({ theme }) => theme.lightgray};
  }

  &:read-only {
    color: ${({ theme }) => theme.red};  // to check
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0;
  }
`;
