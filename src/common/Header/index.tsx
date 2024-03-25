import { ReactNode } from "react";
import styled from "styled-components";

interface HeaderProps {
  title: ReactNode; // ReactNode is a type that can be a string, a number, a React element, or an array of these types
}


const MainHeader = styled.h1`
  font-size: 28px;
`;

const Header = ({ title }: HeaderProps) => <MainHeader>{title}</MainHeader>;

export default Header;
