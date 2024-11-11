import SignupHeader from '../../components/Signup/SignupHeader';
import styled from 'styled-components';
import search from '../../assets/images/Search.svg';
import { useState } from 'react';

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  align-items: center;
`;

const InputBox = styled.input`
  width: 21.8vw;
  height: 2.8vw;
  border-radius: 0.4vw;
  border: 1px solid ${({ hasText }) => (hasText ? '#00c13a' : '#767676')};
  background: ${({ hasText, isFocused }) =>
    isFocused ? 'rgba(0, 193, 58, 0.10)' : hasText ? '#111' : '#262626'};
  padding: 0.8vw;
  color: #fff;

  &:focus {
    background: rgba(0, 193, 58, 0.1);
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

const InputBox2 = styled.textarea`
  width: 21.8vw;
  height: 14.8vw;
  border-radius: 0.4vw;
  border: 1px solid ${({ hasText }) => (hasText ? '#00c13a' : '#767676')};
  background: ${({ hasText, isFocused }) =>
    isFocused ? 'rgba(0, 193, 58, 0.10)' : hasText ? '#111' : '#262626'};
  padding: 0.8vw;
  resize: none;
  color: #fff;

  &:focus {
    background: rgba(0, 193, 58, 0.1);
  }

  ::placeholder {
    color: #999999;
    font-family: Pretendard;
    font-size: 0.8vw;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2vw;
    letter-spacing: -0.4px;
    white-space: pre-line;
  }
`;

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7vw;
  margin-bottom: 1.2vw;
  position: relative;
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

const DuplicateButton = styled.button`
  position: absolute;
  right: 0.8vw;
  top: 55%;
  display: flex;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 0.2vw;
  background: #00c13a;
  color: var(--Font-02_black, #111);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.6vw;
  font-style: normal;
  font-weight: 600;
  line-height: 0.9vw;
  letter-spacing: -0.3px;
`;

const SearchIcon = styled.img`
  width: 1.2vw;
  height: 1.2vw;
  position: absolute;
  right: 0.8vw;
  top: 55%;
`;

const NextButton = styled.button`
  width: 21.8vw;
  height: 2.8vw;
  padding: 0.8vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 0.3vw;
  background: ${({ allFieldsFilled }) =>
    allFieldsFilled ? '#00c13a' : '#999'};
  margin-top: 2.8vw;
  margin-bottom: 4vw;
  color: #fff;
`;

function InputField({ label, placeholder, hasText, setHasText }) {
  const handleChange = (e) => {
    setHasText(e.target.value.length > 0);
  };

  return (
    <InputBoxContainer>
      <TextP>{label}</TextP>
      <InputBox
        placeholder={placeholder}
        hasText={hasText}
        onChange={handleChange}
      />
    </InputBoxContainer>
  );
}

function Signup() {
  const [idHasText, setIdHasText] = useState(false);
  const [passwordHasText, setPasswordHasText] = useState(false);
  const [nameHasText, setNameHasText] = useState(false);
  const [nicknameHasText, setNicknameHasText] = useState(false);
  const [universityHasText, setUniversityHasText] = useState(false);
  const [introHasText, setIntroHasText] = useState(false);

  const allFieldsFilled =
    idHasText &&
    passwordHasText &&
    nameHasText &&
    nicknameHasText &&
    universityHasText &&
    introHasText;

  return (
    <WholeContainer>
      <SignupHeader />
      <InputBoxContainer>
        <TextP>아이디</TextP>
        <InputBox
          placeholder="영문/숫자, 4-14자"
          hasText={idHasText}
          onChange={(e) => setIdHasText(e.target.value.length > 0)}
        />
        <DuplicateButton>중복확인</DuplicateButton>
      </InputBoxContainer>

      <InputField
        label="비밀번호"
        placeholder="영문/숫자, 8-16자"
        hasText={passwordHasText}
        setHasText={setPasswordHasText}
      />
      <InputField
        label="이름"
        placeholder="이름을 입력해 주세요"
        hasText={nameHasText}
        setHasText={setNameHasText}
      />
      <InputField
        label="닉네임"
        placeholder="닉네임을 입력해 주세요"
        hasText={nicknameHasText}
        setHasText={setNicknameHasText}
      />

      <InputBoxContainer>
        <TextP>대학교</TextP>
        <InputBox
          placeholder="대학교를 입력해 주세요"
          hasText={universityHasText}
          onChange={(e) => setUniversityHasText(e.target.value.length > 0)}
        />
        <SearchIcon src={search} />
      </InputBoxContainer>

      <InputBoxContainer>
        <TextP>자기소개</TextP>
        <InputBox2
          placeholder={`간략하게 자기소개를 해보세요\n(Ex. 간단 인사, SNS 주소 등)`}
          hasText={introHasText}
          onChange={(e) => setIntroHasText(e.target.value.length > 0)}
        />
      </InputBoxContainer>

      <NextButton allFieldsFilled={allFieldsFilled}>다음으로</NextButton>
    </WholeContainer>
  );
}

export default Signup;
