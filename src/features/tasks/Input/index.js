import styled from "styled-components";

export const TasksFormSearch = styled.form`
  padding: 20px;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    flex-direction: column;
    flex-basis: 1;
  }
`;

export default styled.input`
  margin-right: 20px;
  padding: 8px 5px;
  border: 1px solid ${({ theme }) => theme.lightgray};
  flex-grow: 1;

  &:enabled {
    border-color: ${({ theme }) => theme.lightgrey};
  }

  &:read-only {
    color: ${({ theme }) => theme.red}; //nie dziala
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0;
  }
`;
