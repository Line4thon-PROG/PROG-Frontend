import { React, useState } from "react";
import styled from "styled-components";
import GenreIcon from "../../assets/images/GenreIcon.svg";
import UnivIcon from "../../assets/images/UnivIcon.svg";
import SkillIcon from "../../assets/images/SkillIcon.svg";
import GreenGenreIcon from "../../assets/images/GreenGenreIcon.svg";
import GreenUnivIcon from "../../assets/images/GreenUnivIcon.svg";
import GreenSkillIcon from "../../assets/images/GreenSkillIcon.svg";
import CloseICon from "../../assets/images/CloseIcon.svg";

const ModalContainer = styled.div`
  position: absolute;
  margin-top: 10px;
  width: 53.8vw;
  height: auto;
  background-color: rgba(17, 17, 17, 0.8);
  border: 1px solid rgba(153, 153, 153, 1);
  border-radius: 8px;
  backdrop-filter: blur(20px);
  z-index: 100;
  padding: 20px 30px 25px 30px;
`;

const TypeBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
`;

const TypeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  cursor: pointer;

  p {
    color: ${(props) =>
      props.isActive ? "rgba(0, 193, 58, 1)" : "rgba(153, 153, 153, 1)"};
    font-size: 14px;
    font-weight: bolder;
  }

  img {
    width: 20px;
  }
`;

const TypenApplyBtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ApplynCloseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;

  img {
    width: 20px;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }
`;

const ApplyBtn = styled.button`
  background-color: rgba(0, 193, 58, 1);
  border: none;
  border-radius: 4px;
  padding: 3px 13px;
  font-weight: 800;
  font-size: 12px;
`;

const DetailGenreBtnWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const DetailGenreBtn = styled.button`
  background-color: rgba(17, 17, 17, 1);
  border: ${(props) =>
    props.isSelected
      ? "1px solid rgba(0, 193, 58, 1)"
      : "1px solid rgba(80, 80, 80, 1)"};
  border-radius: 100px;
  padding: 8px 14px;
  color: ${(props) =>
    props.isSelected ? "rgba(0, 193, 58, 1)" : "rgba(80, 80, 80, 1)"};
  font-weight: bolder;
  font-size: 12px;
`;

function FilterModal({ closeModal }) {
  const [activeBtn, setActiveBtn] = useState("GenreBtn");
  const [selectedGenres, setSelectedGenres] = useState([]);

  // 어떤 필터를 적용할지 고르는 버튼 동작
  const handleBtnClick = (buttonName) => {
    setActiveBtn(buttonName);
  };

  // 장르 버튼 관련
  const genreList = [
    "스포츠",
    "엔터테인먼트",
    "음식",
    "음악",
    "친구",
    "가족",
    "여행",
    "교육",
    "건강",
    "패션",
    "쇼핑",
    "환경",
    "부동산",
    "비즈니스",
    "자기계발",
    "동물/펫",
    "요리/베이킹",
    "여가/취미",
    "사회봉사",
    "금융/투자",
    "기타",
  ];

  const handleGenreClick = (genre) => {
    setSelectedGenres((prev) => {
      if (prev.includes(genre)) {
        return prev.filter((item) => item !== genre);
      } else {
        return [...prev, genre];
      }
    });
  };

  return (
    <ModalContainer>
      <TypenApplyBtnDiv>
        <TypeBtnWrapper>
          <TypeBtn
            onClick={() => handleBtnClick("GenreBtn")}
            isActive={activeBtn === "GenreBtn"}
          >
            {activeBtn === "GenreBtn" ? (
              <img src={GreenGenreIcon} alt="GreenGenreIcon" />
            ) : (
              <img src={GenreIcon} alt="GenreIcon" />
            )}
            <p>장르</p>
          </TypeBtn>
          <TypeBtn
            onClick={() => handleBtnClick("SkillBtn")}
            isActive={activeBtn === "SkillBtn"}
          >
            {activeBtn === "SkillBtn" ? (
              <img src={GreenSkillIcon} alt="GreenSkillIcon" />
            ) : (
              <img src={SkillIcon} alt="SkillIcon" />
            )}
            <p>기술 스택</p>
          </TypeBtn>
          <TypeBtn
            onClick={() => handleBtnClick("UnivBtn")}
            isActive={activeBtn === "UnivBtn"}
          >
            {activeBtn === "UnivBtn" ? (
              <img src={GreenUnivIcon} alt="GreenUnivIcon" />
            ) : (
              <img src={UnivIcon} alt="UnivIcon" />
            )}
            <p>대학교</p>
          </TypeBtn>
        </TypeBtnWrapper>
        <ApplynCloseWrapper>
          <ApplyBtn>적용</ApplyBtn>
          <img src={CloseICon} alt="CloseICon" onClick={closeModal} />
        </ApplynCloseWrapper>
      </TypenApplyBtnDiv>
      {/* 장르 선택시 나오는 화면 */}
      {activeBtn === "GenreBtn" && (
        <DetailGenreBtnWrapper>
          {genreList.map((genre) => (
            <DetailGenreBtn
              key={genre}
              isSelected={selectedGenres.includes(genre)}
              onClick={() => handleGenreClick(genre)}
            >
              {genre}
            </DetailGenreBtn>
          ))}
        </DetailGenreBtnWrapper>
      )}
    </ModalContainer>
  );
}

export default FilterModal;
