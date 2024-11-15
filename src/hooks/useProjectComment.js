import { useState, useEffect } from "react";
import { getProjectComments, postComment } from "../api/projectComment";

export const useProjectComment = (project_id) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // 댓글 목록 가져오기
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const data = await getProjectComments(project_id);
                setComments(data);
            } catch (err) {
                setError(err);
                console.error("댓글 데이터 가져오기 에러:", err);
            }
        };

        if (project_id) {
            fetchComments();
        }
    }, [project_id]);

    // 댓글 작성 함수
    const submitComment = async (commentText) => {
        setLoading(true);
        setError(null);
        try {
            const newComment = await postComment(project_id, commentText);
            setComments((prevComments) => [newComment, ...prevComments]); // 새 댓글을 리스트의 맨 앞에 추가
            console.log("새 댓글 추가:", newComment);
        } catch (err) {
            setError("댓글 작성에 실패했습니다.");
            console.error("댓글 작성 에러:", err);
        } finally {
            setLoading(false);
        }
    };

    return { comments, submitComment, loading, error };
};
