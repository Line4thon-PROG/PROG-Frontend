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
    const exampleProjectId = 1; // 예시 project_id를 설정

    return (
        <Container>
            <Header />
            <DetailHeader />
            <PreviewBox project_id={exampleProjectId} /> {/* project_id를 PreviewBox에 전달 */}
            <MainBox />
            <CommunityBox />
        </Container>
    );
}

export default ProjectDetail;
