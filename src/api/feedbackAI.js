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

export const createAIFeedbackSummary = async (project_id) => {
    try {
        const response = await instance.post(`/api/project_detail/${project_id}/ai_summary`);
        if (response.status === 201) {
            return response.data; // 성공적으로 생성된 피드백 데이터 반환
        } else {
            return { message: response.data.message || "알 수 없는 오류가 발생했습니다." };
        }
    } catch (error) {
        console.error("AI 피드백 생성 요청 에러:", error);
        throw error;
    }
};
