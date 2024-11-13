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

function Home() {
    return (
        <Container>
            <Header/>
            <DetailHeader/>
            <PreviewBox />
            <MainBox />
            <CommunityBox />
        </Container>
    );
}

export default Home;
