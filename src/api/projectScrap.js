import { instance } from "./instance";

export const scrapProject = async (project_id) => {
    try {
        const response = await instance.get(`/api/project_detail/${project_id}/scrap`);
        console.log("스크랩 결과:", response.data.message); // 성공 메시지 출력
        return response.data;
    } catch (error) {
        console.error("스크랩 요청 중 에러 발생:", error);
        throw error;
    }
};
