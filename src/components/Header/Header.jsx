import styled from 'styled-components';
import logo from '../../assets/images/Logo.svg';
import search from '../../assets/images/Search.svg';
import login from '../../assets/images/Login.svg';

const HeaderContainer = styled.div`
  padding-left: 4.2vw;
  padding-right: 4.2vw;
  padding-top: 1.2vw;
  padding-bottom: 1.2vw;
  width: 100%;
  height: 4.6vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5vw;
`;

const Logo = styled.img`
  width: 10vw;
  height: 2.2vw;
`;

const NavContainer = styled.div`
  gap: 1vw;
  display: flex;
  flex-direction: row;
`;

const Nav = styled.div`
  padding: 0.5vw 0.8vw;
  color: #ffffff;
  white-space: nowrap;
`;

const ToolContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2vw;
`;

const Tool = styled.img`
  width: 1.2vw;
  height: 1.2vw;
`;

function Header() {
  return (
    <>
      <HeaderContainer>
        <Container>
          <Logo src={logo} alt="logo" />
          <NavContainer>
            <Nav>홈</Nav>
            <Nav>프로젝트</Nav>
            <Nav>프로모션</Nav>
            <Nav>마이페이지</Nav>
          </NavContainer>
          <ToolContainer>
            <Tool src={search} />
            <Tool src={login} />
          </ToolContainer>
        </Container>
      </HeaderContainer>
    </>
  );
}

export default Header;
