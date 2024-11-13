import { React, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import WriteBtn from "../../assets/images/WriteBtn.svg";
import ProjectThumbnail from "../../components/ProjectTumbnail/ProjectThumbnail";
import LogoutThumbnail from "../../components/ProjectTumbnail/LogoutThumbnail";
import ProjectThumbnailImage from "../../assets/images/ProjectThumbnailImage.svg";
import FilterIcon from "../../assets/images/FilterIcon.svg";
import UpScroll from "../../assets/images/UpScroll.svg";
import FilterModal from "../../components/Modal/FilterModal";

const SearchContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  padding-bottom: 30px;
  position: relative;
`;

const NameandWriteBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 20px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2px;
    background-color: rgba(0, 193, 58, 1);
    font-size: 11px;
    font-weight: bolder;
    padding: 5px 10px;
    border-radius: 100px;
  }
`;

const RecommendThumbnail = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  width: 53.8vw;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ProgressContainer = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  background-color: rgba(118, 118, 118, 1);
  margin-top: 20px;
  border-radius: 10px;
`;

const ProgressBar = styled.div`
  position: absolute;
  height: 100%;
  width: 33.3%;
  background-color: rgba(0, 193, 58, 1);
  left: ${(props) => `calc(${Math.min(props.position, 100 - 33.3)}%)`};
  transition: left 0.3s;
  border-radius: 10px;
`;

const BannerBox = styled.div`
  margin-top: 20px;
  background-color: rgba(209, 209, 209, 1);
  width: 100%;
  height: 100px;
`;

const FilterBox = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: rgba(153, 153, 153, 1);
  font-size: 13px;
  gap: 8px;
  cursor: pointer;
`;

const SelectedTag = styled.span`
  background-color: rgba(17, 17, 17, 1);
  border: 1px solid rgba(0, 193, 58, 1);
  border-radius: 100px;
  padding: 8px 14px;
  color: rgba(0, 193, 58, 1);
  font-weight: 500;
  font-size: 13px;
`;

const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 53.8vw;
  flex-wrap: wrap;
  position: relative;
`;

const UpScrollImg = styled.img`
  position: fixed;
  width: 40px;
  top: 50vh;
  left: 73vw;
  cursor: pointer;
`;

function Search() {
  const navigate = useNavigate();
  // 아래 변수들은 UI 구현을 위한 임의 변수입니다. 실제 사용 X
  const user = { name: "프로그" };
  const isLogin = true;
  const project = [
    {
      src: ProjectThumbnailImage,
      name: "프로젝트 이름",
      genre: "장르",
      skill: "기술",
    },
    {
      src: ProjectThumbnailImage,
      name: "프로젝트 이름",
      genre: "장르",
      skill: "기술",
    },
    {
      src: ProjectThumbnailImage,
      name: "프로젝트 이름",
      genre: "장르",
      skill: "기술",
    },
    {
      src: ProjectThumbnailImage,
      name: "프로젝트 이름",
      genre: "장르",
      skill: "기술",
    },
    {
      src: ProjectThumbnailImage,
      name: "프로젝트 이름",
      genre: "장르",
      skill: "기술",
    },
    {
      src: ProjectThumbnailImage,
      name: "프로젝트 이름",
      genre: "장르",
      skill: "기술",
    },
    {
      src: ProjectThumbnailImage,
      name: "프로젝트 이름",
      genre: "장르",
      skill: "기술",
    },
    {
      src: ProjectThumbnailImage,
      name: "프로젝트 이름",
      genre: "장르",
      skill: "기술",
    },
    {
      src: ProjectThumbnailImage,
      name: "프로젝트 이름",
      genre: "장르",
      skill: "기술",
    },
  ];
  // useState 변수 선언
  const [selectedTags, setSelectedTags] = useState([]); // 선택된 태그 (장르, 기술)
  const [selectedUniv, setSelectedUniv] = useState(null); // 선택된 대학 (1개만 선택 가능하기에 상태 따로 관리)
  const [tempSelectedTags, setTempSelectedTags] = useState([]);
  const [tempSelectedUniv, setTempSelectedUniv] = useState(null);
  const [filterBtn, setFilterBtn] = useState(false); // 필터 버튼
  const [filterModal, setFilterModal] = useState(false); // 필터 모달창
  const [isApply, setIsApply] = useState(false);

  // 필터 모달 오픈/클로즈 함수
  const openFilterModal = () => {
    setTempSelectedTags([...selectedTags]);
    setTempSelectedUniv(selectedUniv);
    setFilterModal(true);
  };

  const closeFilterModal = () => {
    setFilterModal(false);
  };

  // 필터 선택 버튼
  const ClickedFilterBtn = () => {
    setFilterBtn(!filterBtn);
    openFilterModal();
  };

  // 필터 적용 버튼 관련
  const handleApplyBtn = () => {
    setSelectedTags([...tempSelectedTags]);
    setSelectedUniv(tempSelectedUniv);
    setIsApply(true);
  };

  // 추천 프로젝트 가로 스크롤 관련
  const scrollRef = useRef(null);
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const totalScrollableWidth = scrollWidth - clientWidth;

    if (totalScrollableWidth > 0) {
      let currentPosition = (scrollLeft / totalScrollableWidth) * 100;

      currentPosition = Math.min(currentPosition, 100 - 33.3);

      setPosition(currentPosition);
    }
  };

  // 위로 올라가는 스크롤
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    scrollElement.addEventListener("scroll", handleScroll);
    return () => scrollElement.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <SearchContainer>
        <NameandWriteBtnWrapper>
          {isLogin ? (
            <p>{user.name}님이 좋아할 만한 프로젝트</p>
          ) : (
            <p>OOO님이 좋아할 만한 프로젝트</p>
          )}
          <button onClick={() => navigate(`/Write`)}>
            <img src={WriteBtn} alt="WriteBtn" />
            프로젝트 등록
          </button>
        </NameandWriteBtnWrapper>
        <RecommendThumbnail ref={scrollRef}>
          {!isLogin ? (
            <>
              <LogoutThumbnail />
              <LogoutThumbnail />
              <LogoutThumbnail />
            </>
          ) : (
            <>
              {project.map((item, index) => (
                <ProjectThumbnail
                  key={index}
                  imagesrc={item.src}
                  name={item.name}
                  genrelist={item.genre}
                  skilllist={item.skill}
                />
              ))}
            </>
          )}
        </RecommendThumbnail>
        <ProgressContainer>
          <ProgressBar position={position}></ProgressBar>
        </ProgressContainer>
        <BannerBox />
        <FilterBox onClick={ClickedFilterBtn}>
          <img src={FilterIcon} alt="FilterIcon" />
          {isApply ? (
            <>
              {selectedTags.length > 0 &&
                selectedTags.map((item, index) => (
                  <SelectedTag key={index}>{item}</SelectedTag>
                ))}
              {selectedUniv && <SelectedTag>{selectedUniv}</SelectedTag>}
            </>
          ) : (
            <p>필터를 선택해 보세요</p>
          )}
        </FilterBox>
        {filterModal && (
          <FilterModal
            closeModal={closeFilterModal}
            selectedTags={tempSelectedTags}
            setSelectedTags={setTempSelectedTags}
            selectedUniv={tempSelectedUniv}
            setSelectedUniv={setTempSelectedUniv}
            handleApplyBtn={handleApplyBtn}
          />
        )}
        <ProjectWrapper>
          {project.map((item, index) => (
            <ProjectThumbnail
              key={index}
              imagesrc={item.src}
              name={item.name}
              genrelist={item.genre}
              skilllist={item.skill}
            />
          ))}
        </ProjectWrapper>
        <UpScrollImg src={UpScroll} alt="UpScroll" onClick={MoveToTop} />
      </SearchContainer>
    </div>
  );
}

export default Search;
