import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailHeader from "../../components/ProjectDetail/detailHeader";
import Header from '../../components/Header/Header';
import PreviewBox from '../../components/ProjectDetail/previewBox';
import MainBox from '../../components/ProjectDetail/mainBox';
import CommunityBox from '../../components/ProjectDetail/communityBox';
import Footer from "../../components/Footer/Footer";
const Container = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
`;

function ProjectDetail() {
    const { project_id } = useParams(); // URL에서 project_id를 가져옵니다.

    return (
        <Container>
            <Header selectedNav="프로젝트" project_id={project_id}/>
            <DetailHeader />
            <PreviewBox project_id={project_id} /> 
            <MainBox project_id={project_id} />
            <CommunityBox project_id={project_id} />
            <Footer />
        </Container>
    );
}

export default ProjectDetail;
