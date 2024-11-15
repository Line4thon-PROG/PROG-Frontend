import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RecommendContainer = styled.div`
  width: 257px;
  cursor: pointer;
  img {
    width: 257px;
    height: 170px;
  }
`;
const Title = styled.p`
  margin-top: 3px;
  font-size: 13px;
`;
const GenrenSkill = styled.p`
  margin-top: 4px;
  color: rgba(153, 153, 153, 1);
  font-size: 10px;
  white-space: nowrap;
`;
const StringWrapper = styled.div`
  width: 257px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

function ProjectThumbnail({
  imagesrc,
  name,
  genrelist,
  skilllist,
  project_id,
}) {
  const navigate = useNavigate();
  return (
    <RecommendContainer onClick={() => navigate(`/DetailPage/${project_id}`)}>
      <img src={imagesrc} alt="ProjectThumbnailImage" />
      <StringWrapper>
        <Title>{name}</Title>
      </StringWrapper>
      <StringWrapper>
        <GenrenSkill>
          {genrelist && genrelist.length && genrelist.join(" | ")} |{" "}
          {skilllist && skilllist.length && skilllist.join(" | ")}
        </GenrenSkill>
      </StringWrapper>
    </RecommendContainer>
  );
}

export default ProjectThumbnail;
