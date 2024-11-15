// 파일: src/api/projectDetail.js

import { instance } from "./instance";

export const getProjectDetail = async (project_id) => {
    console.log("API 요청 실행됨 - project_id:", project_id); // API 요청 시작 확인용 로그
    try {
        const response = await instance.get(`/api/project_detail/${project_id}`);
        console.log("API 요청 성공", response.data); // 성공 시 데이터 출력용
        return response;
    } catch (error) {
        console.error("API 요청 에러:", error); // 오류 발생 시 출력용
        throw error;
    }
};

export const deleteProject = async (project_id) => {
    try {
        const response = await instance.delete(`/api/project_detail/${project_id}`);
        console.log("프로젝트 삭제 성공:", response.data.message); // 성공 메시지 출력
        return response.data;
    } catch (error) {
        console.error("프로젝트 삭제 중 에러 발생:", error);
        throw error;
    }
};