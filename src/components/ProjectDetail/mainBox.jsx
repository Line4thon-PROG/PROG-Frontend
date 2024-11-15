import React, { useState } from "react";
import * as S from "./mainBoxStyled";
import ProjectInfoBox from "./projectInfoBox";
import DiscussBox from '../../components/ProjectDetail/discussBox';

const MainBox = ({ project_id }) => { // project_id를 props로 받음
    const [selectedTab, setSelectedTab] = useState("info"); // Track the selected tab

    return (
        <S.Container>
            <S.Selecter>
                {/* Toggle between tabs */}
                <S.ProejctInfo
                    selected={selectedTab === "info"}
                    onClick={() => setSelectedTab("info")}
                >
                    프로젝트 설명
                </S.ProejctInfo>
                <S.ProjectDiscuss
                    selected={selectedTab === "discuss"}
                    onClick={() => setSelectedTab("discuss")}
                >
                    고민 부분
                </S.ProjectDiscuss>
            </S.Selecter>
            {/* Conditionally render components based on selected tab */}
            {selectedTab === "info" ? (
                <ProjectInfoBox project_id={project_id} />
            ) : (
                <DiscussBox project_id={project_id} />
            )}
        </S.Container>
    );
};

export default MainBox;
