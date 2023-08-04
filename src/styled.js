import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const MainNavigation = styled.ul`
  list-style-type: none;
  padding: 20px;
  background-color: ${({ theme }) => theme.teal};
  display: flex;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: activeClassName,
}))`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  font-size: large;
  padding: 25px;

  &.${activeClassName} {
    font-weight: bold;
  }
`;
