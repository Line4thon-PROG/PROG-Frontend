import { React, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import WriteBtn from "../../assets/images/WriteBtn.svg";
import ProjectThumbnail from "../../components/ProjectTumbnail/ProjectThumbnail";
import LogoutThumbnail from "../../components/ProjectTumbnail/LogoutThumbnail";
import ProjectThumbnailImage from "../../assets/images/ProjectThumbnailImage.svg";

const SearchContainer = styled.div`
  margin-top: 40px;
  width: 100%;
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
  width: 33.3%; /* 초록색 바의 고정된 너비 */
  background-color: rgba(0, 193, 58, 1);
  left: ${(props) =>
    `calc(${Math.min(props.position, 100 - 33.3)}%)`}; /* 시작과 끝 위치 보정 */
  transition: left 0.3s;
  border-radius: 10px;
`;
function Search() {
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

  // 스크롤 관련
  const scrollRef = useRef(null);
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const totalScrollableWidth = scrollWidth - clientWidth;

    if (totalScrollableWidth > 0) {
      // 현재 스크롤 위치를 백분율로 계산
      let currentPosition = (scrollLeft / totalScrollableWidth) * 100;

      // currentPosition이 최대 100% - 바의 너비만큼을 초과하지 않도록 보정
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
      </SearchContainer>
    </div>
  );
}

export default Search;
