import { React, useState, useEffect } from "react";
import styled from "styled-components";
import GenreIcon from "../../assets/images/Genreicon.svg";
import UnivIcon from "../../assets/images/UnivIcon.svg";
import SkillIcon from "../../assets/images/SkillIcon.svg";
import GreenGenreIcon from "../../assets/images/GreenGenreIcon.svg";
import GreenUnivIcon from "../../assets/images/GreenUnivIcon.svg";
import GreenSkillIcon from "../../assets/images/GreenSkillIcon.svg";
import CloseICon from "../../assets/images/CloseIcon.svg";
import Search from "../../assets/images/Search.svg";
import { baseURL } from "../../api/baseURL";
import axios from "axios";

const ModalContainer = styled.div`
  position: absolute;
  margin-top: 10px;
  width: 53.8vw;
  height: auto;
  min-height: 230px;
  background-color: rgba(17, 17, 17, 0.8);
  border: 1px solid rgba(153, 153, 153, 1);
  border-radius: 8px;
  backdrop-filter: blur(20px);
  z-index: 100;
  padding: 20px 30px 30px 30px;
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

const SearchContainer = styled.div`
  position: relative;
  width: 25vw;
  margin-top: 35px;
`;

const SearchBar = styled.input`
  background-color: ${(props) =>
    props.isFocused ? "rgba(0, 193, 58, 0.1)" : "rgba(38, 38, 38, 1)"};
  border: ${(props) =>
    props.isFocused
      ? "1px solid rgba(0, 193, 58, 0.5)"
      : "1px solid rgba(118, 118, 118, 1)"};
  border-radius: 8px;
  color: ${(props) => (props.isFocused ? "white" : "rgba(153, 153, 153, 1)")};
  font-size: 12px;
  font-weight: 600;
  padding: 12px 20px;
  width: 100%;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 10px;
  left: 23vw;
  width: 20px;
`;

function FilterModal({
  closeModal,
  selectedTags,
  setSelectedTags,
  selectedUniv,
  setSelectedUniv,
  handleApplyBtn,
}) {
  const [activeBtn, setActiveBtn] = useState("GenreBtn");
  // const [selectedTags, setSelectedTags] = useState([]);
  const [querySkill, setQuerySkill] = useState("");
  const [searchedSkill, setSearchedSkill] = useState([]);
  const [queryUniv, setQueryUniv] = useState("");
  const [searchedUniv, setSearchedUniv] = useState([]);
  const [focusSearchBar, setFocusSearchBar] = useState(false);

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

  const handleTagClick = (tag, type) => {
    if (type === "university") {
      if (selectedUniv === tag) {
        setSelectedUniv("");
      } else {
        setSelectedUniv(tag);
      }
    } else {
      setSelectedTags((prev) => {
        if (prev.includes(tag)) {
          return prev.filter((item) => item !== tag);
        } else {
          return [...prev, tag];
        }
      });
    }
  };

  // 기술스택버튼 관련

  const handleSearchSkill = (e) => {
    const skill = e.target.value;
    setQuerySkill(skill);
  };
  // 기술 스택 검색 연동 코드..
  useEffect(() => {
    if (querySkill) {
      const postSkill = async () => {
        try {
          const response = await axios.post(
            `${baseURL}/api/search/stack/input`,
            {
              stack_name: querySkill,
            }
          );
          const stack = response.data.stack || [];
          if (stack.length === 0) {
            setSearchedSkill(["목록에 존재하지 않는 기술 스택입니다  :("]);
          } else {
            setSearchedSkill(stack);
          }
        } catch (error) {
          console.log(error);
        }
      };
      postSkill();
    } else {
      setSearchedSkill([]);
    }
  }, [querySkill]);

  const handleSearchUniv = (e) => {
    const univ = e.target.value;
    setQueryUniv(univ);
  };

  useEffect(() => {
    if (queryUniv) {
      const postUniv = async () => {
        try {
          const response = await axios.post(
            `${baseURL}/api/search/university/input`,
            {
              university_name: queryUniv,
            }
          );
          const university = response.data.university || [];
          if (university.length === 0) {
            setSearchedUniv(["목록에 존재하지 않는 대학교 명입니다  :("]);
          } else {
            setSearchedUniv(university);
          }
        } catch (error) {
          console.log(error);
        }
      };
      postUniv();
    } else {
      setSearchedUniv([]);
    }
  }, [queryUniv]);

  // 검색바 focus 함수 관련
  const handleFocus = () => {
    setFocusSearchBar(true);
  };
  const handleBlur = () => {
    setFocusSearchBar(false);
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
          <ApplyBtn onClick={handleApplyBtn}>적용</ApplyBtn>
          <img src={CloseICon} alt="CloseICon" onClick={closeModal} />
        </ApplynCloseWrapper>
      </TypenApplyBtnDiv>
      {/* 장르 선택시 나오는 화면 */}
      {activeBtn === "GenreBtn" && (
        <DetailGenreBtnWrapper>
          {genreList.map((genre) => (
            <DetailGenreBtn
              key={genre}
              isSelected={selectedTags.includes(genre)}
              onClick={() => handleTagClick(genre, "genre")}
            >
              {genre}
            </DetailGenreBtn>
          ))}
        </DetailGenreBtnWrapper>
      )}
      {/* 기술 버튼 선택 시 나오는 화면 */}
      {activeBtn === "SkillBtn" && (
        <>
          <SearchContainer>
            <SearchBar
              type="text"
              name="skillnstack"
              value={querySkill}
              onChange={(e) => handleSearchSkill(e)}
              placeholder="기술 스택을 입력해 주세요"
              onFocus={handleFocus}
              onBlur={handleBlur}
              isFocused={focusSearchBar}
            />
            <SearchIcon src={Search} alt="Search" />
          </SearchContainer>
          <DetailGenreBtnWrapper>
            {searchedSkill &&
              searchedSkill.length > 0 &&
              searchedSkill.map((skillstack) =>
                skillstack === "목록에 존재하지 않는 기술 스택입니다  :(" ? (
                  <p key="null">{skillstack}</p>
                ) : (
                  <DetailGenreBtn
                    key={skillstack}
                    isSelected={selectedTags.includes(skillstack)}
                    onClick={() => handleTagClick(skillstack, "skill")}
                  >
                    {skillstack}
                  </DetailGenreBtn>
                )
              )}
          </DetailGenreBtnWrapper>
        </>
      )}
      {/* 대학 버튼 선택 시 나오는 화면 */}
      {activeBtn === "UnivBtn" && (
        <>
          <SearchContainer>
            <SearchBar
              type="text"
              name="university"
              value={queryUniv}
              onChange={(e) => handleSearchUniv(e)}
              placeholder="대학교 명을 입력해 주세요"
              onFocus={handleFocus}
              onBlur={handleBlur}
              isFocused={focusSearchBar}
            />
            <SearchIcon src={Search} alt="Search" />
          </SearchContainer>
          <DetailGenreBtnWrapper>
            {searchedUniv &&
              searchedUniv.length > 0 &&
              searchedUniv.map((university) =>
                university === "목록에 존재하지 않는 대학교 명입니다  :(" ? (
                  <p key={"null"}>{university}</p>
                ) : (
                  <DetailGenreBtn
                    key={university}
                    isSelected={selectedUniv === university}
                    onClick={() => handleTagClick(university, "university")}
                  >
                    {university}
                  </DetailGenreBtn>
                )
              )}
          </DetailGenreBtnWrapper>
        </>
      )}
    </ModalContainer>
  );
}

export default FilterModal;
