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

// 대댓글 작성 함수 추가
export const postReply = async (project_id, comment_id, replyText) => {
    try {
        // 대댓글 작성 API 호출
        const response = await instance.post(
            `/api/project_detail/${project_id}/comment/${comment_id}/in_comment`, 
            {
                in_comment: replyText,
            }
        );
        console.log("대댓글 등록 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("대댓글 등록 에러:", error);
        throw error;
    }
};
