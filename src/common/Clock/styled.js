import styled from "styled-components";

export const StyledClock = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 5px;
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    justify-content: center;
  }
`;
