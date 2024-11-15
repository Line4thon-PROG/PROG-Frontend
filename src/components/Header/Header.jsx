import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/images/Logo.svg';
import search from '../../assets/images/Search.svg';
import login from '../../assets/images/Login.svg';
import logout from '../../assets/images/logout.svg';
import { baseURL } from '../../api/baseURL';

const HeaderContainer = styled.div`
  padding-left: 4.2vw;
  padding-right: 4.2vw;
  padding-top: 1.2vw;
  padding-bottom: 1.2vw;
  width: 100%;
  height: 4.6vw;
  position: relative;
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
  font-size: 0.7vw;
  ${({ isSelected }) =>
    isSelected &&
    `
    display: flex;
    padding: 0.5vw 0.8vw;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedNav, setSelectedNav] = useState('홈');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleNavClick = (navItem, path) => {
    setSelectedNav(navItem);
    setTimeout(() => navigate(path), 0);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = async () => {
    try {
      await axios.get(`${baseURL}/api/accounts/logout/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      });
      localStorage.removeItem('access');
      setIsLoggedIn(false);
      alert('로그아웃 되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('로그아웃 실패:', error);
      alert('로그아웃에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <HeaderContainer>
      <Container>
        <Logo src={logo} alt="logo" onClick={() => handleNavClick('홈', '/')} />
        <NavContainer>
          {[
            { name: '홈', path: '/' },
            { name: '프로젝트', path: '/project' },
            { name: '프로모션', path: '/promotion' },
            { name: '마이페이지', path: '/Mypage' },
          ].map(({ name, path }) => (
            <Nav
              key={name}
              isSelected={selectedNav === name}
              onClick={() => handleNavClick(name, path)}
            >
              {name}
            </Nav>
          ))}
        </NavContainer>
        <ToolContainer>
          <Tool src={search} alt="search" />
          {isLoggedIn ? (
            <Tool src={logout} alt="logout" onClick={handleLogout} />
          ) : (
            <Tool src={login} alt="login" onClick={handleLogin} />
          )}
        </ToolContainer>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
