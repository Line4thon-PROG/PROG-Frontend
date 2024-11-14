import { useState, useEffect } from "react";
import { getProjectDiscussion } from "../api/projectDiscussion";

export const useProjectDiscussion = (project_id) => {
    const [discussions, setDiscussions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDiscussions = async () => {
            try {
                const data = await getProjectDiscussion(project_id);
                setDiscussions(data);
            } catch (err) {
                setError(err);
                console.error("프로젝트 고민 데이터 가져오기 에러:", err); // 에러 확인용
            }
        };

        if (project_id) {
            fetchDiscussions();
        }
    }, [project_id]);

    return { discussions, error };
};
