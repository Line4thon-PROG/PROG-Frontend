import styled from 'styled-components';
import AIHeader from '../../components/FeedbackAI/AIHeader';
import AIReport from '../../components/FeedbackAI/AIReport';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
`;

function AIReportDetailPage() {
    const { project_id, ai_summary_id } = useParams(); 

    return (
        <Container>
            <Header />
            <AIHeader />
            <AIReport project_id={project_id} ai_summary_id={ai_summary_id} />
        </Container>
    );
}

export default AIReportDetailPage;
