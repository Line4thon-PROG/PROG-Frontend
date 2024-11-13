import Header from '../../components/Header/Header';
import styled from 'styled-components';
import pencil from '../../assets/images/Pencil.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Pencil = styled.img`
  width: 1vw;
  height: 1vw;
  margin-right: 0.2vw;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileP = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.7vw;
  letter-spacing: -0.6px;
`;

const EditButton = styled.button`
  display: inline-flex;
  padding: 0.6vw 0.8vw;
  justify-content: center;
  align-items: center;
  border-radius: 0.4vw;
  background: #00c13a;
  box-shadow: 0px 0px 12px 0px rgba(255, 255, 255, 0.1);
  color: var(--Font-02_black, #111);
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1vw;
  letter-spacing: -0.35px;
  align-items: center;
`;

const Intro = styled.p`
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1vw;
  letter-spacing: -0.35px;
  margin-top: 1.2vw;
`;

const IntroContent = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1vw;
  letter-spacing: -0.35px;
  margin-top: 0.4vw;
  margin-bottom: 1.6vw;
`;

const Genrep = styled.p`
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1vw;
  letter-spacing: -0.35px;
`;

const Circle = styled.div`
  display: flex;
  padding: 0.5vw 0.8vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  color: #00c13a;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  border-radius: 5vw;
  width: 3.5vw;
  height: 2.2vw;
  border: 1px solid #00c13a;
  background: #111;
  margin-top: 0.4vw;
`;

function Mypage() {
  return (
    <>
      <Container>
        <Header />
        <RowContainer
          style={{ marginTop: '3vw', justifyContent: 'space-between' }}
        >
          <ProfileP>닉네임 | OOO대학교 | 이용자 아이디</ProfileP>
          <EditButton>
            <Pencil src={pencil} />내 정보 수정하기
          </EditButton>
        </RowContainer>

        <Intro>자기소개</Intro>
        <IntroContent>자기소개 내용</IntroContent>
        <Genrep>선호하는 장르</Genrep>
        <Circle>장르1</Circle>
      </Container>
    </>
  );
}

export default Mypage;
