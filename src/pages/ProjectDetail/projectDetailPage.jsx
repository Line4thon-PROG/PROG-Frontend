import styled from 'styled-components';
import DetailHeader from "../../components/ProjectDetail/detailHeader";
import Header from '../../components/Header/Header';

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
        </Container>
    );
}

export default Home;
