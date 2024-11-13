import { React, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import ProjectThumbnail from "../../components/ProjectTumbnail/ProjectThumbnail";
import MainPhrase from "../../assets/images/MainPhrase.svg";
import WriteBtn from "../../assets/images/WriteBtn.svg";
import FolderICon from "../../assets/images/FolderIcon.svg";
import HomeFrogImg from "../../assets/images/HomeFrogImg.svg";
import ProjectThumbnailImage from "../../assets/images/ProjectThumbnailImage.svg";
import { ProgressBar } from "../Project/Search";
import { ProgressContainer } from "../Project/Search";

const HomeContainer = styled.div`
  margin-top: 65px;
  width: 100%;
  padding-bottom: 50px;
`;

const PhraseContainer = styled.div`
  text-align: center;

  img {
    width: 300px;
  }

  p {
    margin-top: 20px;
    color: rgba(153, 153, 153, 1);
    font-size: 14px;
  }
`;

const BtnWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 190px;
    height: 50px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bolder;
  }
`;

const WriteProjectBtn = styled.button`
  background-color: rgba(0, 193, 58, 1);
  border: none;
`;
const SearchProjectBtn = styled.button`
  background: none;
  border: 1px solid rgba(0, 193, 58, 1);
  color: rgba(0, 193, 58, 1);

  img {
    width: 20px;
  }
`;

const FrogImageContainer = styled.div`
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  img {
    width: 260px;
  }
`;

const NewProjectContainer = styled.div`
  margin-top: 70px;
  h2 {
    font-size: 20px;
  }
`;

const NewProjectWrapper = styled.div`
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

function Home() {
  const navigate = useNavigate();

  // 실제로 사용되지 않는 임의 변수입니다.
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

  // 이번 주 새 프로젝트 가로 스크롤 관련
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
      <HomeContainer>
        <PhraseContainer>
          <img src={MainPhrase} alt="MainPhrase" />
          <p>
            프로젝트를 공유하고 다양한 시각의 피드백을 받아 성장의 기회를
            넓히세요
            <br />
            혼자만의 한계를 넘어, 더 큰 세상과 연결됩니다
          </p>
        </PhraseContainer>
        <BtnWrapper>
          <WriteProjectBtn onClick={() => navigate(`/Write`)}>
            <img src={WriteBtn} alt="WriteBtn" />내 프로젝트 등록하기
          </WriteProjectBtn>
          <SearchProjectBtn onClick={() => navigate(`/Search`)}>
            <img src={FolderICon} alt="FolderICon" />
            다른 프로젝트 둘러보기
          </SearchProjectBtn>
        </BtnWrapper>
        <FrogImageContainer>
          <img src={HomeFrogImg} alt="HomeFrogImg" />
        </FrogImageContainer>
        <NewProjectContainer>
          <h2>이번 주에 새로 올라온 프로젝트</h2>
        </NewProjectContainer>
        <NewProjectWrapper ref={scrollRef}>
          {project.map((item, index) => (
            <ProjectThumbnail
              key={index}
              imagesrc={item.src}
              name={item.name}
              genrelist={item.genre}
              skilllist={item.skill}
            />
          ))}
        </NewProjectWrapper>
        <ProgressContainer>
          <ProgressBar position={position}></ProgressBar>
        </ProgressContainer>
      </HomeContainer>
    </div>
  );
}

export default Home;
