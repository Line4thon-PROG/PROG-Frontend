import { useState, useEffect } from "react";
import { getAIFeedbackSummary } from "../api/feedbackAI";

export const useFeedbackAI = (project_id) => {
    const [feedbackList, setFeedbackList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchFeedback = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getAIFeedbackSummary(project_id);
                setFeedbackList(data);
                console.log("AI 피드백 데이터 로드 완료:", data);
            } catch (err) {
                setError("AI 피드백 데이터를 가져오는 데 실패했습니다. 우하하 정말 싫다.");
                console.error("AI 피드백 데이터 로드 에러:", err);
            } finally {
                setLoading(false);
            }
        };

        if (project_id) {
            fetchFeedback();
        }
    }, [project_id]);

    return { feedbackList, loading, error };
};
