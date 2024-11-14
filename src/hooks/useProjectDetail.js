// 파일: src/hooks/useProjectDetail.js

import { useState, useEffect } from "react";
import { getProjectDetail } from "../api/projectDetail";

export const useProjectDetail = (project_id) => {
    const [projectDetail, setProjectDetail] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("useEffect 실행됨 - project_id:", project_id); // useEffect 실행 확인용
        const fetchProjectDetail = async () => {
            console.log("fetchProjectDetail 함수 실행됨"); // 함수 실행 확인용
            try {
                const response = await getProjectDetail(project_id);
                console.log("데이터 가져오기 성공:", response.data); // 데이터 가져오기 성공 확인용
                setProjectDetail(response.data);
            } catch (err) {
                console.error("데이터 가져오기 에러:", err); // 에러 확인용
                setError(err);
            }
        };

        if (project_id) {
            fetchProjectDetail();
        }
    }, [project_id]);

    return { projectDetail, error };
};
