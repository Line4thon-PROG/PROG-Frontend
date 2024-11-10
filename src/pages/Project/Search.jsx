import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import WriteBtn from "../../assets/images/WriteBtn.svg";
import ProjectThumbnail from "../../components/ProjectTumbnail/ProjectThumbnail";
import LogoutThumbnail from "../../components/ProjectTumbnail/LogoutThumbnail";

const SearchContainer = styled.div`
  margin-top: 40px;
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

const RecommendWrapper = styled.div``;

const RecommendThumbnail = styled.div`
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
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
  left: ${(props) => props.position}%;
  transition: left 0.3s;
  border-radius: 10px;
`;

function Search() {
  const user = { name: "프로그" };
  const isLogin = false;
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
        <RecommendWrapper>
          {!isLogin ? (
            <>
              <RecommendThumbnail>
                <LogoutThumbnail />
                <LogoutThumbnail />
                <LogoutThumbnail />
              </RecommendThumbnail>
            </>
          ) : (
            <></>
          )}
        </RecommendWrapper>
        <ProgressContainer>
          <ProgressBar></ProgressBar>
        </ProgressContainer>
      </SearchContainer>
    </div>
  );
}

export default Search;
