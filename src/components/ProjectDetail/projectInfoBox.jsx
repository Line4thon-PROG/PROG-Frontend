import React, { useState } from "react";
import * as S from "./projectInfoBoxStyled";
import ExamplePPT from "../../assets/images/project_ppt_example.svg";
import FeedbackIcon from "../../assets/images/feedback_icon.svg";

const ProjectInfoBox =() =>{

    return(
        <S.Container>
            <S.OneLiner>
                프로젝트 한 줄 소개 (최대 45자)
            </S.OneLiner>
            <S.Content>
                프로젝트 설명 (최대 2200자)
            </S.Content>
            <S.Gallery>
                <img src={ExamplePPT}></img>
            </S.Gallery>
            <S.FeedbackBlock>
                <S.GoFeedBack><img src={FeedbackIcon}></img>피드백 확인하기</S.GoFeedBack>
                피드백을 확인해보고 직접 남겨보며, 포인트도 얻어가세요!
            </S.FeedbackBlock>
        </S.Container>
    );
};

export default ProjectInfoBox;
