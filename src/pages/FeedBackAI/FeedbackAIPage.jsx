import styled from 'styled-components';
import AIHeader from '../../components/FeedbackAI/AIHeader';
import FeedBackAI from '../../components/FeedbackAI/FeedBackAI';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom'; // URL 파라미터 추출을 위한 useParams import

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
`;

function FeedbackAIPage() {
    const { project_id } = useParams(); // URL에서 project_id 추출

    return (
        <Container>
            <Header />
            <AIHeader />
            <FeedBackAI project_id={project_id}></FeedBackAI> {/* 추출된 project_id를 전달 */}
        </Container>
    );
}

export default FeedbackAIPage;
