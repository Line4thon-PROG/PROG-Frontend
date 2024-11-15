import styled from 'styled-components';
import SignupHeader from '../../components/Signup/SignupHeader';
import Third from '../../assets/images/Third.svg';
import check from '../../assets/images/Check.svg';
import frog from '../../assets/images/Frog.svg';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Chat from '../../assets/images/Chat.svg';
import Folder from '../../assets/images/Folder.svg';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;

const Check = styled.img`
  margin-top: 6vw;
  width: 2.4vw;
  height: 2.4vw;
`;

const Successs = styled.p`
  color: var(--Font-01_White, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.4vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.9vw;
  letter-spacing: -0.7px;
  margin-top: 1vw;
  margin-bottom: 0.4vw;
`;

const Frog = styled.img`
  width: 15.2vw;
  height: 4vw;
  margin-top: 6vw;
`;

const AnotherButton = styled.button`
  display: inline-flex;
  padding: 0.8vw 3.6vw 0.8vw 3.65vw;
  justify-content: center;
  align-items: center;
  border-radius: 0.4vw;
  background: #ffa500;
  color: var(--Font-02_black, #111);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  width: 15.95vw;
  height: 2.8vw;
`;

const Button = styled.button`
  width: 15.95vw;
  height: 2.8vw;
  margin-top: 4vw;
  display: flex;
  padding: 0.8vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 0.3vw;
  background: #00c13a;
  color: var(--Font-02_black, #111);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  margin-bottom: 4vw;
`;

const FeedbackDetail = styled.p`
  color: var(--Font-05_Gray_Disabled, #999);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
`;

const Icon = styled.img`
  width: 1.2vw;
  height: 1.2vw;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1vw;
`;

const RowCon2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.4vw;
`;

function FeedbackComplete() {
  const navigate = useNavigate();

  const GoLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <Container>
        <Header />
        <Check src={check} />
        <Successs>피드백을 정상적으로 보냈습니다!</Successs>
        <FeedbackDetail>소중한 피드백을 작성해주셔서 감사합니다</FeedbackDetail>
        <Frog src={frog} />
        <RowContainer>
          <AnotherButton>
            <RowCon2>
              <Icon src={Chat} />
              채택된 피드백 구경하기
            </RowCon2>
          </AnotherButton>
          <Button onClick={GoLogin}>
            <RowCon2>
              <Icon src={Folder} style={{ marginBottom: '0.2vw' }} />
              등록된 프로젝트 보러가기
            </RowCon2>
          </Button>
        </RowContainer>
      </Container>
    </>
  );
}

export default FeedbackComplete;
