import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/Logo.svg';
import search from '../../assets/images/Search.svg';
import login from '../../assets/images/Login.svg';
import { Navigate, useNavigate } from 'react-router-dom';

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
  display: flex;
  flex-direction: row;
  gap: 1vw;
`;

const Nav = styled.div`
  padding: 0.5vw 0.8vw;
  color: #ffffff;
  white-space: nowrap;
  cursor: pointer;
  ${({ isSelected }) =>
    isSelected &&
    `
    display: flex;
    padding: 0.5vw 0.8vw;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 0.4vw;
    background: #262626;
    color: #00C13A;
    font-family: Pretendard;
    font-size: 0.7vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1vw;
    letter-spacing: -0.35px;
  `}
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
  const [selectedNav, setSelectedNav] = useState('홈');

  const navigate = useNavigate();

  const handleNavClick = (navItem) => {
    setSelectedNav(navItem);
    if (navItem === '마이페이지') {
      navigate('/Mypage');
    }
  };

  return (
    <>
      <HeaderContainer>
        <Container>
          <Logo src={logo} alt="logo" />
          <NavContainer>
            {['홈', '프로젝트', '프로모션', '마이페이지'].map((navItem) => (
              <Nav
                key={navItem}
                isSelected={selectedNav === navItem}
                onClick={() => handleNavClick(navItem)}
              >
                {navItem}
              </Nav>
            ))}
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
