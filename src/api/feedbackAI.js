import { instance } from "./instance";

export const getAIFeedbackSummary = async (project_id) => {
    try {
        const response = await instance.get(`/api/project_detail/${project_id}/ai_summary`);
        console.log("AI 피드백 목록 가져오기 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("AI 피드백 목록 가져오기 에러:", error);
        throw error;
    }
};
