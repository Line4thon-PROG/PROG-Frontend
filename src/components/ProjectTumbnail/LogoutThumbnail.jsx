import React from "react";
import styled from "styled-components";
import LogoutThumbnailFrog from "../../assets/images/LogoutThumbnailFrog.svg";

const RecommendContainer = styled.div``;
const RecommendImage = styled.div`
  width: 252px;
  height: 170px;
  background-color: rgba(38, 38, 38, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-radius: 8px;
`;
const Title = styled.p`
  margin-top: 12px;
  font-size: 13px;
`;
const GenrenSkill = styled.p`
  margin-top: 4px;
  color: rgba(153, 153, 153, 1);
  font-size: 10px;
`;

function LogoutThumbnail() {
  return (
    <RecommendContainer>
      <RecommendImage>
        <img src={LogoutThumbnailFrog} alt="LogoutThumbnailFrog" />
        <p>로그인이 필요한 서비스입니다</p>
      </RecommendImage>
      <Title>프로젝트 이름</Title>
      <GenrenSkill>장르 | 기술</GenrenSkill>
    </RecommendContainer>
  );
}

export default LogoutThumbnail;
