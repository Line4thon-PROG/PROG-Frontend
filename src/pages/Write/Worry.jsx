import React, { useState } from 'react';
import styled from 'styled-components';
import progress from '../../assets/images/Progress2.svg';
import Header from '../../components/Header/Header';
import back from '../../assets/images/Back.svg';
import arrowDown from '../../assets/images/Dropdown.svg';
import pictureIcon from '../../assets/images/Picture.svg';
import { useNavigate } from 'react-router-dom';

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

const Worryp = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
  letter-spacing: -0.5px;
  margin-top: 2.8vw;
  margin-bottom: 1vw;
`;

const WholeContainer = styled.div`
  width: 100%;
  height: 31.7vw;
  border-radius: 0.6vw;
  background: #262626;
  padding: 1vw;
`;

const Writer = styled.div`
  width: 24.4vw;
  height: 2.8vw;
  border-radius: 0.4vw;
  border: 1px solid ${({ isSelected }) => (isSelected ? '#00C13A' : '#767676')};
  background: ${({ isSelected }) => (isSelected ? '#111' : '#262626')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1vw;
  color: ${({ isSelected }) =>
    isSelected ? '#fff' : 'var(--Font-05_Gray_Disabled, #999)'};
  cursor: pointer;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
`;

const Arrow = styled.img`
  width: 0.8vw;
  height: 0.8vw;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s;
`;

const DropdownMenu = styled.div`
  width: 24.4vw;
  border: 1px solid #767676;
  background: #333;
  border-radius: 0.4vw;
  position: absolute;
  top: 22.8vw;
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

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1vw;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 0.8vw;
  border-radius: 0.4vw;
  border: 1px solid
    ${({ isFocused, value }) =>
      isFocused ? 'rgba(0, 193, 58, 0.5)' : value ? '#00C13A' : '#767676'};
  background: ${({ isFocused, value }) =>
    isFocused ? 'rgba(0, 193, 58, 0.1)' : value ? '#111' : '#262626'};
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.75vw;
  outline: none;
`;

const CharCount = styled.span`
  position: absolute;
  right: 1vw;
  top: 50%;
  transform: translateY(-50%);
  color: var(--Font-05_Gray_Disabled, #999);
  font-size: 0.7vw;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1vw;
`;

const ContentTextarea = styled.textarea`
  width: 100%;
  padding: 0.8vw;
  border-radius: 0.4vw;
  border: 1px solid
    ${({ isFocused, value }) =>
      isFocused ? 'rgba(0, 193, 58, 0.5)' : value ? '#00C13A' : '#767676'};
  background: ${({ isFocused, value }) =>
    isFocused ? 'rgba(0, 193, 58, 0.1)' : value ? '#111' : '#262626'};
  color: #fff;
  font-family: Pretendard;
  font-size: 0.75vw;
  resize: none;
  height: 9.65vw;
  outline: none;
`;

const ContentCharCount = styled.span`
  position: absolute;
  right: 1vw;
  bottom: 1vw;
  color: var(--Font-05_Gray_Disabled, #999);
  font-size: 0.7vw;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Picture = styled.div`
  position: relative;
  display: flex;
  width: 10.9vw;
  height: 10.9vw;
  justify-content: center;
  align-items: center;
  border-radius: 0.4vw;
  background: #7a7a7a;
  overflow: hidden;
  cursor: pointer;
`;

const Picimg = styled.img`
  width: ${({ isIcon }) => (isIcon ? '1.8vw' : '100%')};
  height: ${({ isIcon }) => (isIcon ? '1.8vw' : '100%')};
  object-fit: ${({ isIcon }) => (isIcon ? 'contain' : 'cover')};
  position: absolute;
`;

const Button = styled.button`
  display: flex;
  width: 30.5vw;
  padding: 0.8vw 0px;
  justify-content: center;
  align-items: center;
  border-radius: 0.4vw;
  background: #00c13a;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2vw;
  margin-bottom: 2vw;
`;

const FileInput = styled.input`
  display: none;
`;

const PictureGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4vw;
  margin-top: 1vw;
`;

const Worry = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('작성자 선택');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isContentFocused, setIsContentFocused] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [imageSrcs, setImageSrcs] = useState([null]);

  const options = ['작성자1', '작성자2', '작성자3', '작성자4'];

  const navigate = useNavigate();

  const goNext = () => {
    navigate('/Success');
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setIsSelected(true);
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImageSrcs = [...imageSrcs];
      newImageSrcs[index] = URL.createObjectURL(file);
      setImageSrcs(newImageSrcs);

      if (newImageSrcs.length < 4 && !newImageSrcs.includes(null)) {
        setImageSrcs([...newImageSrcs, null]);
      }
    }
  };

  return (
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

      <Worryp>프로젝트 고민 부분 (선택)</Worryp>
      <WholeContainer>
        <Writer onClick={toggleDropdown} isSelected={isSelected}>
          {selectedOption}
          <Arrow src={arrowDown} isOpen={isOpen} />
        </Writer>
        {isOpen && (
          <DropdownMenu>
            {options.map((option, index) => (
              <DropdownItem key={index} onClick={() => selectOption(option)}>
                {option}
              </DropdownItem>
            ))}
          </DropdownMenu>
        )}

        <InputContainer>
          <TitleInput
            placeholder="고민 부분 제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => setIsTitleFocused(true)}
            onBlur={() => setIsTitleFocused(false)}
            isFocused={isTitleFocused}
          />
          <CharCount>{title.length}/50</CharCount>
        </InputContainer>

        <ContentContainer>
          <ContentTextarea
            placeholder="고민 부분 내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={() => setIsContentFocused(true)}
            onBlur={() => setIsContentFocused(false)}
            isFocused={isContentFocused}
          />
          <ContentCharCount>{content.length}/200</ContentCharCount>
        </ContentContainer>

        <PictureGrid>
          {imageSrcs.map((src, index) => (
            <Picture
              key={index}
              onClick={() =>
                !src && document.getElementById(`fileInput-${index}`).click()
              }
            >
              {src ? (
                <Picimg src={src} isIcon={false} />
              ) : (
                <Picimg src={pictureIcon} alt="placeholder" isIcon={true} />
              )}
              <FileInput
                type="file"
                id={`fileInput-${index}`}
                accept="image/*"
                onChange={(e) => handleImageChange(e, index)}
              />
            </Picture>
          ))}
        </PictureGrid>
      </WholeContainer>

      <ButtonContainer>
        <Button onClick={goNext}>프로젝트 등록</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Worry;
