import styled from 'styled-components';
import AIHeader from '../../components/FeedbackAI/AIHeader';
import FeedBackAI from '../../components/FeedbackAI/FeedBackAI';
import Header from '../../components/Header/Header';

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
`;

function FeedbackAIPage() {
    const exampleProjectId = 3; // 예시 project_id 우선 3번으로 진행합니다아

    return (
        <Container>
            <Header />
            <AIHeader />
            <FeedBackAI project_id={exampleProjectId}></FeedBackAI>
        </Container>
    );
}

export default FeedbackAIPage;
