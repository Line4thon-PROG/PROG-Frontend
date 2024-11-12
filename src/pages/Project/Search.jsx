import { React, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import WriteBtn from "../../assets/images/WriteBtn.svg";
import ProjectThumbnail from "../../components/ProjectTumbnail/ProjectThumbnail";
import LogoutThumbnail from "../../components/ProjectTumbnail/LogoutThumbnail";
import ProjectThumbnailImage from "../../assets/images/ProjectThumbnailImage.svg";
import FilterIcon from "../../assets/images/FilterIcon.svg";
import FilterModal from "../../components/Modal/FilterModal";

const SearchContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  padding-bottom: 30px;
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

const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 53.8vw;
  flex-wrap: wrap;
  position: relative;
`;

function Search() {
  const navigation = useNavigate();
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
  const [selectedTags, setSelectedTags] = useState([]); // 선택된 태그
  const [filterBtn, setFilterBtn] = useState(false); // 필터 버튼
  const [filterModal, setFilterModal] = useState(false); // 필터 모달창
  const [isApply, setIsApply] = useState(false);

  // 필터 모달 오픈/클로즈 함수
  const openFilterModal = () => {
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

  // 스크롤 관련
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
          <button>
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
          <p>필터를 선택해 보세요</p>
        </FilterBox>
        {filterModal && (
          <FilterModal
            closeModal={closeFilterModal}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            setIsApply={setIsApply}
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
      </SearchContainer>
    </div>
  );
}

export default Search;
