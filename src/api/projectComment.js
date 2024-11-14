import { instance } from "./instance";

export const getProjectComments = async (project_id) => {
    try {
        const response = await instance.get(`/api/project_detail/${project_id}/comment`);
        console.log("댓글 데이터 가져오기 성공:", response.data); // 성공용 메세지~!~!
        return response.data;
    } catch (error) {
        console.error("댓글 데이터 가져오기 에러:", error); // 에러 로그~!~!
        throw error;
    }
};
