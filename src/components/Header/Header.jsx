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
  cursor: pointer;
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
    justify-content: center;
    align-items: center;
    gap: 0.5vw
    padding: 0.5vw 0.8vw;
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
  cursor: pointer;
`;

function Header({ selectedNav }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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
        <Logo src={logo} alt="logo" onClick={() => navigate('/')} />
        <NavContainer>
          <Nav isSelected={selectedNav === '홈'} onClick={() => navigate('/')}>
            홈
          </Nav>
          <Nav
            isSelected={selectedNav === '프로젝트'}
            onClick={() => navigate('/project')}
          >
            프로젝트
          </Nav>
          <Nav
            isSelected={selectedNav === '프로모션'}
            onClick={() => navigate('/promotion')}
          >
            프로모션
          </Nav>
          <Nav
            isSelected={selectedNav === '마이페이지'}
            onClick={() => navigate('/Mypage')}
          >
            마이페이지
          </Nav>
        </NavContainer>
        <ToolContainer>
          <Tool src={search} alt="search" />
          <Tool
            src={localStorage.getItem('access') ? logout : login}
            alt={localStorage.getItem('access') ? 'logout' : 'login'}
            onClick={
              localStorage.getItem('access') ? handleLogout : handleLogin
            }
          />
        </ToolContainer>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
