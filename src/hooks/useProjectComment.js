import { useState, useEffect } from "react";
import { getProjectComments } from "../api/projectComment";

export const useProjectComment = (project_id) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const data = await getProjectComments(project_id);
                setComments(data);
            } catch (err) {
                setError(err);
                console.error("댓글 데이터 가져오기 에러:", err); // 에러 확인용
            }
        };

        if (project_id) {
            fetchComments();
        }
    }, [project_id]);

    return { comments, error };
};
