import React, { useState } from "react";
import * as S from "./mainBoxStyled";
import ProjectInfoBox from "./projectInfoBox";

const MainBox =() =>{

    return(
        <S.Container>
            <S.Selecter>
                <S.ProejctInfo>프로젝트 설명</S.ProejctInfo>
                <S.ProjectDiscuss>고민 부분</S.ProjectDiscuss>
            </S.Selecter>
            {/* 컴포넌트로 연결 */}
            <ProjectInfoBox />
        </S.Container>
    );
};

export default MainBox;
