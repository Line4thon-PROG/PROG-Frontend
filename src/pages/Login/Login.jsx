import styled from 'styled-components';
import logo from '../../assets/images/Logocol.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../api/baseURL';
import Logout from '../../assets/images/logout.svg';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

const WholeContainer = styled.div`
  width: 25vw;
  height: 32.45vw;
  flex-shrink: 0;
  border-radius: 1vw;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  margin-top: 8.8vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 7.15vw;
  height: 6vw;
  margin-top: 1.6vw;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.8vw;
`;

const TitleP = styled.p`
  color: var(--Font-01_White, #fff);
  font-family: Pretendard;
  font-size: 0.65vw;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9vw;
  letter-spacing: -0.325px;
  margin-top: 0.2vw;
`;

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7vw;
  margin-bottom: 1.2vw;
`;

const InputBox = styled.input`
  width: 21.8vw;
  height: 2.8vw;
  border-radius: 0.4vw;
  border: 1px solid
    ${({ hasText, isFocused }) =>
      hasText || isFocused ? '#00c13a' : '#767676'};
  background: ${({ hasText, isFocused }) =>
    isFocused ? 'rgba(0, 193, 58, 0.10)' : hasText ? '#111' : '#262626'};
  padding: 0.8vw;
  color: #fff;

  &:focus {
    background: rgba(0, 193, 58, 0.1);
    outline: none;
  }

  ::placeholder {
    color: #999999;
    font-family: Pretendard;
    font-size: 0.8vw;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2vw;
    letter-spacing: -0.4px;
  }
`;

const TextP = styled.p`
  color: var(--Font-01_White, #fff);
  font-family: Pretendard;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  text-align: left;
`;

const Button = styled.button`
  display: flex;
  width: 21.8vw;
  padding: 0.8vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 0.3vw;
  background: #00c13a;
  margin-top: 2.8vw;
  color: #fff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-self: flex-start;
  margin-left: 1.6vw;
  margin-top: 1.8vw;
`;

const Text = styled.p`
  color: var(--Font-01_White, #fff);
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1vw;
  letter-spacing: -0.35px;
  margin-right: 0.4vw;
`;

const Text2 = styled.p`
  color: var(--Font-01_White, #fff);
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1vw;
  letter-spacing: -0.35px;
  cursor: pointer;
`;

function LoginInputField({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputBoxContainer>
      <TextP>{label}</TextP>
      <InputBox
        type={type}
        placeholder={placeholder}
        value={value}
        isFocused={isFocused}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputBoxContainer>
  );
}

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseURL}/api/accounts/login/`, {
        username,
        password,
      });

      const access = response.data.access;
      localStorage.setItem('access', access);

      console.log('로그인 성공:', response.data);
      navigate('/');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
    }
  };

  const goSignup = () => {
    navigate('/Signup');
  };

  return (
    <Container>
      <WholeContainer>
        <LogoContainer>
          <Logo src={logo} />
          <TitleP>더 넓은 우물 밖 세상으로</TitleP>
        </LogoContainer>

        <LoginInputField
          label="아이디"
          placeholder="아이디를 입력해 주세요"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LoginInputField
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <Button onClick={handleLogin}>로그인</Button>

        <TextContainer>
          <Text>아직 회원이 아니신가요? </Text>
          <Text2 onClick={goSignup}>회원가입하기 -{'>'}</Text2>
        </TextContainer>
      </WholeContainer>
    </Container>
  );
}

export default Login;
