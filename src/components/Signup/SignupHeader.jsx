import styled from 'styled-components';
import logo from '../../assets/images/Logo.svg';
import step from '../../assets/images/Step.svg';

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8vw;
  margin: 4vw auto 2.4vw auto;
`;

const Logo = styled.img`
  width: 10vw;
  height: 2.2vw;
`;

const LogoP = styled.p`
  color: var(--Font-01_White, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.65vw;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9vw;
  letter-spacing: -0.325px;
`;

const SignupP = styled.p`
  color: var(--Font-01_White, #fff);
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1.2vw;
  align-items: center;
  margin-bottom: 2vw;
`;

const Step = styled.img`
  width: 18vw;
  height: 2vw;
`;

function SignupHeader() {
  return (
    <>
      <WholeContainer>
        <LogoContainer>
          <Logo src={logo} />
          <LogoP>더 넓은 우물 밖 세상으로</LogoP>
        </LogoContainer>

        <StepContainer>
          <SignupP>회원가입</SignupP>
          <Step src={step} />
        </StepContainer>
      </WholeContainer>
    </>
  );
}

export default SignupHeader;
