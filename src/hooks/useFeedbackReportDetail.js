import { useState, useEffect } from "react";
import { getFeedbackReportDetail } from "../api/feedbackReportDetail";

export const useFeedbackReportDetail = (project_id, ai_summary_id) => {
    const [feedbackReportDetail, setFeedbackReportDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!project_id || !ai_summary_id) {
            console.warn("project_id 또는 ai_summary_id가 없습니다. 요청 중단");
            return;
        }

        const fetchFeedbackReportDetail = async () => {
            setLoading(true);
            console.log("AI 피드백 보고서 데이터 요청 시작...");
            try {
                const data = await getFeedbackReportDetail(project_id, ai_summary_id);
                setFeedbackReportDetail(data);
                console.log("AI 피드백 보고서 데이터 요청 성공:", data);
            } catch (err) {
                setError(err);
                console.error("AI 피드백 보고서 데이터 요청 실패:", err);
            } finally {
                setLoading(false);
                console.log("AI 피드백 보고서 데이터 요청 완료");
            }
        };

        fetchFeedbackReportDetail();
    }, [project_id, ai_summary_id]);

    return { feedbackReportDetail, loading, error };
};
