import React from "react";
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

function ProjectThumbnail({ imagesrc, name, genrelist, skilllist }) {
  return (
    <RecommendContainer>
      <img src={imagesrc} alt="ProjectThumbnailImage" />
      <Title>{name}</Title>
      <GenrenSkill>
        {genrelist} | {skilllist}
      </GenrenSkill>
    </RecommendContainer>
  );
}

export default ProjectThumbnail;
