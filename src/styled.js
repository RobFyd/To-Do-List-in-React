import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  &.${activeClassName} {
    color: black;
    text-decoration: none;
    font-size: large;
  }
`;
