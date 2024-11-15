import styled from 'styled-components';
import Header from '../../components/Header/Header';
import back from '../../assets/images/Back.svg';
import Plus from '../../assets/images/Picture.svg';
import RoundPlus from '../../assets/images/RoundPlus.svg';
import Export from '../../assets/images/Export.svg';
import { useState } from 'react';

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
  margin-bottom: 2.8vw;
`;

const Worry = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
  letter-spacing: -0.5px;
  margin-bottom: 0.4vw;
`;

const WideContainer = styled.div`
  width: 100%;
  height: 28.1vw;
  display: flex;
  padding: 1vw;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2vw;
  align-self: stretch;
  border-radius: 0.6vw;
  background: #262626;
  margin-bottom: 4vw;
`;

const SmallContainer = styled.div`
  width: 100%;
  height: 12.45vw;
  border-radius: 0.6vw;
  background: #333;
  padding: 1vw;
`;

const BoxContainer = styled.div`
  width: 10.45vw;
  height: 10.45vw;
  background-color: #d9d9d9;
  border-radius: 5px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Nickname = styled.p`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1vw;
  letter-spacing: -0.35px;
`;

const Title = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  margin-top: '0.4vw';
`;

const InputArea = styled.textarea`
  width: 33.75vw;
  height: 7.65vw;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1vw;
  letter-spacing: -0.375px;
  background: #333;
  resize: none;
  outline: none;
  border: none;
  margin-top: 0.2vw;
`;

const InputContainer = styled.textarea`
  width: 100%;
  height: 14.1vw;
  padding: 0.8vw;
  border-radius: 0.4vw;
  border: 1px solid var(--Font-05_Gray_Disabled, #999);
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5vw;
  color: var(--Font-05_Gray_Disabled, #999);
  background-color: #262626;
  font-family: Pretendard;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1vw;
  letter-spacing: -0.375px;
  resize: none;
  outline: none;
`;

const ImageBox = styled.div`
  width: 10.45vw;
  height: 10.45vw;
  justify-content: center;
  align-items: center;
  border-radius: 0.4vw;
  background: #7a7a7a;
  display: flex;
`;

const PlusImage = styled.img`
  width: 1.8vw;
  height: 1.8vw;
`;

const NewContainer = styled.div`
  display: flex;
  height: 184px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  height: 9.2vw;
  border-radius: 0.6vw;
  background: #333;
  margin-bottom: 4vw;
`;

const Add = styled.p`
  color: var(--Font-01_White, #fff);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  text-align: center;
`;
const Pluss = styled.img`
  width: 1.2vw;
  height: 1.2vw;
`;

const CommentContainer = styled.textarea`
  width: 100%;
  height: 35vw;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 0.4vw;
  border: 1px solid #767676;
  background: #262626;
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1vw;
  letter-spacing: -0.375px;
  padding: 1vw;
  resize: none;
  outline: none;
`;

const SendBtn = styled.button`
  width: 30.5vw;
  padding: 0.8vw 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4vw;
  background: #00c13a;
  box-shadow: 0px 0px 12px 0px rgba(255, 255, 255, 0.1);
  color: var(--Font-01_White, #fff);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6vw;
  margin-bottom: 2vw;
`;

const ExportImage = styled.img`
  width: 1.2vw;
  height: 1.2vw;
  margin-right: 0.4vw;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 1vw;
  flex-wrap: wrap;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FileInput = styled.input`
  display: none;
`;

function FeedbackWrite() {
  const [errorSections, setErrorSections] = useState([{ id: 0, images: [] }]);

  const addNewErrorSection = () => {
    setErrorSections((prev) => [...prev, { id: prev.length, images: [] }]);
  };

  const [images, setImages] = useState([]);

  const handleAddImage = (sectionId, e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setErrorSections((prev) =>
        prev.map((section) =>
          section.id === sectionId
            ? { ...section, images: [...section.images, newImage] }
            : section
        )
      );
    }
  };

  const feedbackItems = [
    { nickname: '참여자 닉네임 | 역할', title: '고민 제목 (최대 50자)' },
    { nickname: '참여자 닉네임 | 역할', title: '고민 제목 (최대 50자)' },
  ];

  return (
    <>
      <Container>
        <Header />
        <Back src={back} />
        <Register>프로젝트 피드백 보내기</Register>
        <Share>
          더 나은 프로젝트가 되기 위해 피드백을 보내고 채택되어 포인트도
          받아보세요!
        </Share>

        <Worry>프로젝트 고민 부분</Worry>
        <WideContainer>
          {feedbackItems.map((item, index) => (
            <SmallContainer key={index}>
              <RowContainer style={{ gap: '1.6vw' }}>
                <BoxContainer />
                <ColumnContainer>
                  <Nickname>{item.nickname}</Nickname>
                  <Title>{item.title}</Title>
                  <InputArea placeholder="고민 내용" />
                </ColumnContainer>
              </RowContainer>
            </SmallContainer>
          ))}
        </WideContainer>

        <Worry>프로젝트 이슈(오류) 부분</Worry>
        {errorSections.map((section) => (
          <WideContainer key={section.id} style={{ marginBottom: '2vw' }}>
            <InputContainer placeholder="이슈 부분 설명" />
            <ImageContainer>
              {section.images.map((image, index) => (
                <ImageBox key={index}>
                  <ImagePreview src={image} alt={`Selected ${index + 1}`} />
                </ImageBox>
              ))}
              <ImageBox>
                <FileInput
                  id={`fileInput-${section.id}`}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleAddImage(section.id, e)}
                />
                <PlusImage
                  src={Plus}
                  alt="Add Image"
                  onClick={() =>
                    document.getElementById(`fileInput-${section.id}`).click()
                  }
                />
              </ImageBox>
            </ImageContainer>
          </WideContainer>
        ))}

        <NewContainer onClick={addNewErrorSection}>
          <RowContainer style={{ justifyContent: 'center', gap: '0.4vw' }}>
            <Pluss src={RoundPlus} />
            <Add>새 오류 부분 추가</Add>
          </RowContainer>
        </NewContainer>

        <Worry>나만의 의견 제시</Worry>
        <CommentContainer placeholder="프로젝트에 대한 나만의 의견을 작성해 주세요." />

        <ButtonContainer>
          <SendBtn>
            <ExportImage src={Export} />
            피드백 보내기
          </SendBtn>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default FeedbackWrite;
