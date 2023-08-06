import styled from "styled-components";

const MainHeader = styled.h1`
  font-size: 28px;
`;

const Header = ({ title }) => <MainHeader>{title}</MainHeader>;

export default Header;
