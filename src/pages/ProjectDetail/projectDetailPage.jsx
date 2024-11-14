import styled from 'styled-components';
import DetailHeader from "../../components/ProjectDetail/detailHeader";
import Header from '../../components/Header/Header';
import PreviewBox from '../../components/ProjectDetail/previewBox';
import MainBox from '../../components/ProjectDetail/mainBox';
import CommunityBox from '../../components/ProjectDetail/communityBox';

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
`;

function ProjectDetail() {
    const exampleProjectId = 3; // 예시 project_id 우선 3번으로 진행합니다아

    return (
        <Container>
            <Header />
            <DetailHeader />
            <PreviewBox project_id={exampleProjectId} /> 
            <MainBox project_id={exampleProjectId} />
            <CommunityBox project_id={exampleProjectId} />
        </Container>
    );
}

export default ProjectDetail;
