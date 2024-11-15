import styled from 'styled-components';
import SignupHeader from '../../components/Signup/SignupHeader';
import Third from '../../assets/images/Third.svg';
import check from '../../assets/images/Check.svg';
import frog from '../../assets/images/Frog.svg';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

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
`;

const Frog = styled.img`
  width: 15.2vw;
  height: 4vw;
  margin-top: 6vw;
`;

const Button = styled.button`
  margin-top: 4vw;
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

function Success() {
  const navigate = useNavigate();

  const GoSearch = () => {
    navigate('/Search');
  };

  return (
    <>
      <Container>
        <Header />
        <Check src={check} />
        <Successs>프로젝트 등록이 완료되었습니다!</Successs>
        <Frog src={frog} />
        <Button onClick={GoSearch}>등록된 프로젝트 보러가기</Button>
      </Container>
    </>
  );
}

export default Success;
