import { instance } from "./instance";

export const getFeedbackReportDetail = async (project_id, ai_summary_id) => {
    try {
        const response = await instance.get(
            `/api/project_detail/${project_id}/ai_summary/${ai_summary_id}`
        );
        console.log("AI 피드백 보고서 조회 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("AI 피드백 보고서 조회 실패:", error);
        throw error;
    }
};
