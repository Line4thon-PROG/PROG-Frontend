import { instance } from "./instance";

export const getProjectComments = async (project_id) => {
    try {
        const response = await instance.get(`/api/project_detail/${project_id}/comment`);
        return response.data;
    } catch (error) {
        console.error("댓글 데이터 가져오기 에러:", error);
        throw error;
    }
};

export const postComment = async (project_id, comment) => {
    try {
        const response = await instance.post(`/api/project_detail/${project_id}/comment`, {
            comment: comment,
        });
        console.log("댓글 등록 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("댓글 등록 에러:", error);
        throw error;
    }
};
