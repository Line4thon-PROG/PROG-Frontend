import { useState, useEffect } from "react";
import { getAIFeedbackSummary, createAIFeedbackSummary } from "../api/feedbackAI";

export const useFeedbackAI = (project_id) => {
    const [feedbackList, setFeedbackList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // AI 피드백 생성 함수
    const generateFeedback = async () => {
        try {
            const newFeedback = await createAIFeedbackSummary(project_id);
            if (newFeedback?.id) {
                setFeedbackList((prevList) => [newFeedback, ...prevList]); // 새 피드백을 목록에 추가
                console.log("새로운 AI 피드백 생성 완료:", newFeedback);
            } else if (newFeedback?.message) {
                alert(newFeedback.message);
            } else {
                alert("피드백 생성에 실패했습니다.");
            }
        } catch (err) {
            setError("AI 피드백 생성에 실패했습니다.");
            console.error("AI 피드백 생성 에러:", err);
        }
    };

    useEffect(() => {
        const fetchFeedback = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getAIFeedbackSummary(project_id);
                setFeedbackList(data);
                console.log("AI 피드백 데이터 로드 완료:", data);
            } catch (err) {
                setError("AI 피드백 데이터를 가져오는 데 실패했습니다.");
                console.error("AI 피드백 데이터 로드 에러:", err);
            } finally {
                setLoading(false);
            }
        };

        if (project_id) {
            fetchFeedback();
        }
    }, [project_id]);

    return { feedbackList, loading, error, generateFeedback };
};
