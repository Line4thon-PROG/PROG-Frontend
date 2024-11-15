import SignupHeader from '../../components/Signup/SignupHeader';
import styled from 'styled-components';
import search from '../../assets/images/Search.svg';
import { useState } from 'react';
import { baseURL } from '../../api/baseURL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

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
  font-size: 0.8vw;

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
  font-size: 0.8vw;
  outline: none;

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
  font-size: 0.8vw;
`;

const DropdownMenu = styled.div`
  width: 21.8vw;
  border: 1px solid #767676;
  background: #333;
  border-radius: 0.4vw;
  position: absolute;
  top: 5vw;
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 0.8vw 1vw;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #444;
  }
`;

function InputField({ label, placeholder, hasText, setHasText, onChange }) {
  const handleChange = (e) => {
    setHasText(e.target.value.length > 0);
    if (onChange) onChange(e);
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

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [university, setUniversity] = useState('');
  const [description, setDescription] = useState('');
  const [universityList, setUniversityList] = useState([]);
  const [showUniversityList, setShowUniversityList] = useState(false);

  //대학교 목록 불러오기
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/search/university`);
        console.log('데이터:', response.data);

        setUniversityList(response.data.university);
      } catch (error) {
        console.error('대학교 목록을 불러오는데 실패했습니다:', error);
      }
    };
    fetchUniversities();
  }, []);

  const handleUniversityClick = (uni) => {
    setUniversity(uni);
    setUniversityHasText(true);
    setShowUniversityList(false);
  };

  const navigate = useNavigate();

  const allFieldsFilled =
    idHasText &&
    passwordHasText &&
    nameHasText &&
    nicknameHasText &&
    universityHasText &&
    introHasText;

  const handleNext = () => {
    if (allFieldsFilled) {
      const userData = {
        username,
        password,
        name,
        nickname,
        user_university: university,
        description,
      };
      localStorage.setItem('nickname', nickname);
      navigate('/Genre', { state: userData });
    } else {
      alert('모든 필드를 입력해주세요.');
    }
  };

  const checkDuplicateId = async () => {
    try {
      const response = await axios.post(
        `${baseURL}/api/accounts/check-duplicate-id/`,
        {
          username,
        }
      );
      if (response.data.isDuplicate) {
        alert('이미 사용 중인 아이디입니다.');
      } else {
        alert('사용 가능한 아이디입니다.');
      }
    } catch (error) {
      alert('이미 사용 중인 아이디입니다.');
    }
  };

  const checkDuplicateNickname = async () => {
    try {
      const response = await axios.post(
        `${baseURL}/api/accounts/check-duplicate-nickname/`,
        {
          nickname,
        }
      );
      if (response.data.isDuplicate) {
        alert('이미 사용 중인 닉네임입니다.');
      } else {
        alert('사용 가능한 닉네임입니다.');
      }
    } catch (error) {
      alert('이미 사용 중인 닉네임입니다.');
    }
  };

  return (
    <WholeContainer>
      <SignupHeader />
      <InputBoxContainer>
        <TextP>아이디</TextP>
        <InputBox
          placeholder="영문/숫자, 4-14자"
          hasText={idHasText}
          onChange={(e) => {
            setIdHasText(e.target.value.length > 0);
            setUsername(e.target.value);
          }}
        />
        <DuplicateButton onClick={checkDuplicateId}>중복확인</DuplicateButton>
      </InputBoxContainer>

      <InputField
        label="비밀번호"
        placeholder="영문/숫자, 8-16자"
        hasText={passwordHasText}
        setHasText={setPasswordHasText}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        label="이름"
        placeholder="이름을 입력해 주세요"
        hasText={nameHasText}
        setHasText={setNameHasText}
        onChange={(e) => setName(e.target.value)}
      />

      <InputBoxContainer>
        <TextP>닉네임</TextP>
        <InputBox
          placeholder="닉네임을 입력해 주세요"
          hasText={nicknameHasText}
          onChange={(e) => {
            setNickname(e.target.value);
            setNicknameHasText(e.target.value.length > 0);
          }}
        />
        <DuplicateButton onClick={checkDuplicateNickname}>
          중복확인
        </DuplicateButton>
      </InputBoxContainer>

      <InputBoxContainer>
        <TextP>대학교</TextP>
        <InputBox
          placeholder="대학교를 입력해 주세요"
          hasText={universityHasText}
          value={university}
          onChange={(e) => {
            setUniversity(e.target.value);
            setUniversityHasText(e.target.value.length > 0);
          }}
        />
        <SearchIcon
          src={search}
          onClick={() => setShowUniversityList(!showUniversityList)}
        />
        {showUniversityList && (
          <DropdownMenu>
            {universityList.map((uni, index) => (
              <DropdownItem
                key={index}
                onClick={() => handleUniversityClick(uni)}
              >
                {uni}
              </DropdownItem>
            ))}
          </DropdownMenu>
        )}
      </InputBoxContainer>

      <InputBoxContainer>
        <TextP>자기소개</TextP>
        <InputBox2
          placeholder={`간략하게 자기소개를 해보세요\n(Ex. 간단 인사, SNS 주소 등)`}
          hasText={introHasText}
          onChange={(e) => {
            setIntroHasText(e.target.value.length > 0);
            setDescription(e.target.value);
          }}
        />
      </InputBoxContainer>

      <NextButton allFieldsFilled={allFieldsFilled} onClick={handleNext}>
        다음으로
      </NextButton>
    </WholeContainer>
  );
}

export default Signup;
