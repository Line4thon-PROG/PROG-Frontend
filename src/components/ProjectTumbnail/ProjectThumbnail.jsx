import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RecommendContainer = styled.div`
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
      <Title>{name}</Title>
      <GenrenSkill>
        {genrelist && genrelist.length && genrelist.join(" | ")} |{" "}
        {skilllist && skilllist.length && skilllist.join(" | ")}
      </GenrenSkill>
    </RecommendContainer>
  );
}

export default ProjectThumbnail;
