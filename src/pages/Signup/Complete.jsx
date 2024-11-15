import styled from 'styled-components';
import SignupHeader from '../../components/Signup/SignupHeader';
import Third from '../../assets/images/Third.svg';
import check from '../../assets/images/Check.svg';
import frog from '../../assets/images/Frog.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;

const Check = styled.img`
  margin-top: 3.7vw;
  width: 2.4vw;
  height: 2.4vw;
`;

const Success = styled.p`
  color: var(--Font-01_White, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.4vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.9vw;
  letter-spacing: -0.7px;
  margin-top: 1vw;
`;

const Frog = styled.img`
  width: 15.2vw;
  height: 4vw;
  margin-top: 6vw;
`;

const Button = styled.button`
  margin-top: 11.7vw;
  display: flex;
  width: 21.8vw;
  padding: 0.8vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 0.3vw;
  background: #00c13a;
  color: var(--Font-01_White, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  margin-bottom: 4vw;
`;

function Complete() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
    }
  }, []);

  const GoLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <Container>
        <SignupHeader step={Third} />
        <Check src={check} />
        <Success>
          반갑습니다! {nickname}님,
          <br />
          회원가입을 완료하셨습니다.{' '}
        </Success>
        <Frog src={frog} />
        <Button onClick={GoLogin}>로그인 하러가기</Button>
      </Container>
    </>
  );
}

export default Complete;
