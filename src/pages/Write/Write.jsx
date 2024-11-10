import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import back from '../../assets/images/Back.svg';
import styled from 'styled-components';
import progress from '../../assets/images/Register1.svg';
import searchIcon from '../../assets/images/Search.svg';
import checkbox from '../../assets/images/Checkbox2.svg';
import web from '../../assets/images/Web.svg';
import android from '../../assets/images/Android.svg';
import ios from '../../assets/images/IOS.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Back = styled.img`
  width: 1.8vw;
  height: 1.8vw;
  margin-top: 3vw;
  margin-bottom: 1vw;
`;

const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Register = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1.4vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.9vw;
  letter-spacing: -0.7px;
`;

const Share = styled.p`
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
`;

const Progress = styled.img`
  width: 10vw;
  height: 2vw;
`;

const Title = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
  letter-spacing: -0.5px;
  margin-top: 2.8vw;
`;

const TitleInputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 4vw;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 0.8vw;
  padding-right: 3vw;
  border-radius: 0.4vw;
  border: 1px solid #767676;
  background: #262626;
  margin-top: 0.4vw;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.8vw;

  ::placeholder {
    color: var(--Font-05_Gray_Disabled, #999);
  }
`;

const CharCount = styled.span`
  position: absolute;
  right: 1vw;
  top: 58%;
  transform: translateY(-50%);
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.8vw;
`;

const Person = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
  letter-spacing: -0.5px;
`;

const PersonInput = styled.input`
  width: 24.4vw;
  height: 2.8vw;
  flex-shrink: 0;
  border-radius: 0.4vw;
  border: 1px solid #767676;
  background: #262626;
  padding: 0.8vw;
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
`;

const PersonInputContainer = styled.div`
  position: relative;
  width: 24.4vw;
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 1vw;
  top: 55%;
  transform: translateY(-50%);
  width: 1.2vw;
  height: 1.2vw;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1vw;
  align-items: flex-start;
  margin-top: 0.35vw;
`;

const ListContainer = styled.div`
  display: inline-flex;
  padding: 1vw 1.6vw 1vw 1vw;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.6vw;
  border-radius: 0.6vw;
  border: 1px solid var(--Font-05_Gray_Disabled, #999);
  background: #262626;
  width: 24.4vw;
  height: 18vw;
`;

const Participant = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1vw;
  letter-spacing: -0.35px;
`;

const Period = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
  letter-spacing: -0.5px;
  margin-top: 4vw;
  margin-bottom: 0.4vw;
`;

const CheckBox = styled.img`
  width: 1.6vw;
  height: 1.6vw;
`;

const Web = styled.img`
  width: 3.7vw;
  height: 1.4vw;
`;

const RowContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const deploymentTypes = [
  { src: web, width: '3.7vw', height: '1.4vw', label: '웹' },
  { src: ios, width: '3.25vw', height: '1.4vw', label: 'iOS' },
  { src: android, width: '5.3vw', height: '1.4vw', label: 'Android' },
];

function Write() {
  const [title, setTitle] = useState('');

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <Container>
        <Header />
        <Back src={back} />
        <FirstContainer>
          <Register>프로젝트 등록</Register>
          <Progress src={progress} />
        </FirstContainer>
        <Share>
          나의 프로젝트를 더 다양한 시각에서 바라볼 수 있도록 등록하여 널리
          공유해보세요!
        </Share>
        <Title>프로젝트 제목</Title>
        <TitleInputContainer>
          <TitleInput
            placeholder="프로젝트 제목을 입력해 주세요"
            value={title}
            onChange={handleInputChange}
          />
          <CharCount>{title.length}/50</CharCount>
        </TitleInputContainer>
        <Person>프로젝트 참여자</Person>
        <RowContainer>
          <PersonInputContainer>
            <PersonInput placeholder="참여자 아이디를 입력해주세요" />
            <SearchIcon src={searchIcon} alt="돋보기 아이콘" />
          </PersonInputContainer>
          <ListContainer>
            <Participant>참여자 목록</Participant>
          </ListContainer>
        </RowContainer>

        <RowContainer>
          <Container>
            <Period>프로젝트 기간</Period>
            <PersonInput placeholder="EX) 0000-00-00 ~ 0000-00-00" />
          </Container>

          <Container>
            <Period>배포 프로젝트 유형</Period>
            <RowContainer2 style={{ marginTop: '0.7vw', gap: '2.4vw' }}>
              {deploymentTypes.map((type, index) => (
                <RowContainer2
                  key={index}
                  style={{ alignItems: 'center', gap: '0.6vw' }}
                >
                  <CheckBox src={checkbox} alt={`${type.label} 체크박스`} />
                  <Web
                    src={type.src}
                    style={{ width: type.width, height: type.height }}
                  />
                </RowContainer2>
              ))}
            </RowContainer2>
          </Container>
        </RowContainer>

        <Period>프로젝트 태그</Period>
      </Container>
    </>
  );
}

export default Write;
