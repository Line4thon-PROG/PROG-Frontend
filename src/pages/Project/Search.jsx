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
import Banner1 from "../../assets/images/Banner1.svg";
import Banner2 from "../../assets/images/Banner2.svg";
import Banner3 from "../../assets/images/Banner3.svg";
import Banner4 from "../../assets/images/Banner4.svg";
import axios from "axios";
import { baseURL } from "../../api/baseURL";

const SearchContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  padding-bottom: 70px;
  position: relative;
  min-height: 100vh;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
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
  justify-content: flex-start;
  gap: 20px;
  width: 53.8vw;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ProgressContainer = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  background-color: rgba(118, 118, 118, 1);
  margin-top: 20px;
  border-radius: 10px;
`;

export const ProgressBar = styled.div`
  position: absolute;
  height: 100%;
  width: 33.3%;
  background-color: rgba(0, 193, 58, 1);
  left: ${(props) => `calc(${Math.min(props.$position, 100 - 33.3)}%)`};
  transition: left 0.3s;
  border-radius: 10px;
`;

const BannerBox = styled.div`
  margin-top: 20px;
  background: none;
  width: 53.8vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 53.8vw;
  }
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
  justify-content: center;
  width: 53.8vw;
  flex-wrap: wrap;
  position: relative;
  margin-top: 15px;
  gap: 20px;

  p {
    font-size: 12px;
  }
`;

export const UpScrollImg = styled.img`
  position: fixed;
  width: 40px;
  top: 50vh;
  left: 73vw;
  cursor: pointer;
  z-index: 100;
`;

function Search() {
  const LoginToken = localStorage.getItem("access") || null;
  const navigate = useNavigate();

  // 상태 변수
  const [user, setUser] = useState(null); // 닉네임
  const [recommendProject, setRecommendProject] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]); // 선택된 태그 (장르)
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedUniv, setSelectedUniv] = useState(null); // 선택된 대학 (1개만 선택 가능하기에 상태 따로 관리)
  const [tempSelectedTags, setTempSelectedTags] = useState([]);
  const [tempSelectedUniv, setTempSelectedUniv] = useState(null);
  const [tempSelectedSkills, setTempSelectedSkills] = useState([]);
  const [filterBtn, setFilterBtn] = useState(false); // 필터 버튼
  const [filterModal, setFilterModal] = useState(false); // 필터 모달창
  const [isApply, setIsApply] = useState(false);
  const [allProject, setAllProject] = useState([]);
  const [filteredGenrePj, setFilteredGenrePj] = useState([]);
  const [filteredSkillPj, setFilteredSkillPj] = useState([]);
  const [filteredUnivPj, setFilteredUnivPj] = useState([]);
  const [allFilteredPj, setAllFilteredPj] = useState([]);

  // 닉네임 불러오기
  const GetNickname = async () => {
    if (!LoginToken) {
      console.log("로그인 토큰이 없습니다.");
      return;
    }
    try {
      const response = await axios.get(`${baseURL}/api/mypage/accountinfo/me`, {
        headers: {
          Authorization: `Bearer ${LoginToken}`,
        },
      });
      setUser(response.data.nickname);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetNickname();
  }, []);

  // 추천 프로젝트 불러오기
  const GetRecommendProject = async () => {
    if (!LoginToken) {
      console.log("로그인 토큰이 없습니다.");
      return;
    }
    try {
      const response = await axios.get(`${baseURL}/api/project/recommend`, {
        headers: {
          Authorization: `Bearer ${LoginToken}`,
        },
      });
      setRecommendProject(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetRecommendProject();
  }, []);

  // 전체 프로젝트 불러오기
  const GetAllProject = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/project/`);
      setAllProject(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllProject();
  }, []);

  //장르 필터링
  const GetGenreProject = async () => {
    if (selectedTags && selectedTags.length > 0) {
      try {
        const response = await axios.post(
          `${baseURL}/api/project/filter_by_genre`,
          {
            genre: selectedTags,
          }
        );
        setFilteredGenrePj(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    GetGenreProject();
  }, [selectedTags]);

  // 스택 필터링
  const GetSkillProject = async () => {
    if (selectedSkills && selectedSkills.length > 0) {
      try {
        const response = await axios.post(
          `${baseURL}/api/project/filter_by_stack`,
          {
            stack: selectedSkills,
          }
        );
        setFilteredSkillPj(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    GetSkillProject();
  }, [selectedSkills]);

  // 대학교 필터링
  const GetUnivProject = async () => {
    if (selectedUniv) {
      try {
        const response = await axios.post(
          `${baseURL}/api/project/filter_by_university`,
          {
            university: [selectedUniv],
          }
        );
        setFilteredUnivPj(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    GetUnivProject();
  }, selectedUniv);

  // 필터링 된 결과 합치기
  useEffect(() => {
    const combined = [
      ...(filteredGenrePj && filteredGenrePj.length > 0 ? filteredGenrePj : []),
      ...(filteredSkillPj && filteredSkillPj.length > 0 ? filteredSkillPj : []),
      ...(filteredUnivPj && filteredUnivPj.length > 0 ? filteredUnivPj : []),
    ];

    const uniqueCombined = combined.filter(
      (project, index, self) =>
        index === self.findIndex((p) => p.id === project.id)
    );

    setAllFilteredPj(uniqueCombined);
    console.log(allFilteredPj);
  }, [filteredGenrePj, filteredSkillPj, filteredUnivPj]);

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
    setSelectedSkills([...tempSelectedSkills]);
    setSelectedUniv(tempSelectedUniv);
    setIsApply(true);
    closeFilterModal();
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

  // 마우스 스크롤
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 드래그 속도 조절
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    scrollElement.addEventListener("scroll", handleScroll);
    return () => scrollElement.removeEventListener("scroll", handleScroll);
  }, []);

  // 위로 올라가는 스크롤
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Header selectedNav="프로젝트" />
      <SearchContainer>
        <NameandWriteBtnWrapper>
          {LoginToken ? (
            <p>{user}님이 좋아할 만한 프로젝트</p>
          ) : (
            <p>OOO님이 좋아할 만한 프로젝트</p>
          )}
          <button onClick={() => navigate(`/Write`)}>
            <img src={WriteBtn} alt="WriteBtn" />
            프로젝트 등록
          </button>
        </NameandWriteBtnWrapper>
        <RecommendThumbnail
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {!LoginToken ? (
            <>
              <LogoutThumbnail />
              <LogoutThumbnail />
              <LogoutThumbnail />
            </>
          ) : (
            <>
              {recommendProject &&
                recommendProject.length > 0 &&
                recommendProject.map((item) => (
                  <ProjectThumbnail
                    key={item.id}
                    imagesrc={item.project_thumbnail}
                    name={item.project_name}
                    genrelist={item.project_genre}
                    skilllist={item.project_stack}
                    project_id={item.id}
                  />
                ))}
            </>
          )}
        </RecommendThumbnail>
        {recommendProject && recommendProject.length > 3 && (
          <ProgressContainer>
            <ProgressBar $position={position}></ProgressBar>
          </ProgressContainer>
        )}
        <BannerBox>
          <img src={Banner1} alt="Banner1" />
          <img src={Banner2} alt="Banner2" />
          <img src={Banner3} alt="Banner3" />
          <img src={Banner4} alt="Banner4" />
        </BannerBox>
        <FilterBox onClick={ClickedFilterBtn}>
          <img src={FilterIcon} alt="FilterIcon" />
          {selectedTags.length > 0 ||
          selectedSkills.length > 0 ||
          selectedUniv ? (
            <>
              {selectedTags.length > 0 &&
                selectedTags.map((item, index) => (
                  <SelectedTag key={index}>{item}</SelectedTag>
                ))}
              {selectedSkills.length > 0 &&
                selectedSkills.map((item, index) => (
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
            selectedSkills={tempSelectedSkills}
            setSelectedSkills={setTempSelectedSkills}
            selectedUniv={tempSelectedUniv}
            setSelectedUniv={setTempSelectedUniv}
            handleApplyBtn={handleApplyBtn}
          />
        )}
        <ProjectWrapper>
          {/* 필터 선택 시 */}
          {selectedTags.length > 0 ||
          selectedSkills.length > 0 ||
          selectedUniv ? (
            allFilteredPj && allFilteredPj.length > 0 ? (
              allFilteredPj.map((item, index) => (
                <ProjectThumbnail
                  key={index}
                  imagesrc={item.project_thumbnail}
                  name={item.project_name}
                  genrelist={item.project_genre}
                  skilllist={item.project_stack}
                  project_id={item.id}
                />
              ))
            ) : (
              <p>선택된 필터에 해당하는 프로젝트가 없습니다.</p>
            )
          ) : /* 필터가 없을 시 */
          allProject && allProject.length > 0 ? (
            allProject.map((item, index) => (
              <ProjectThumbnail
                key={index}
                imagesrc={item.project_thumbnail}
                name={item.project_name}
                genrelist={item.project_genre}
                skilllist={item.project_stack}
                project_id={item.id}
              />
            ))
          ) : (
            <p>프로젝트가 없습니다.</p>
          )}
        </ProjectWrapper>

        <UpScrollImg
          src={UpScroll}
          alt="UpScroll"
          onClick={() => MoveToTop()}
        />
      </SearchContainer>
    </div>
  );
}

export default Search;
