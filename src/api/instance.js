import axios from "axios";
import { baseURL } from "./baseURL";

// Axios 인스턴스 생성
export const instance = axios.create({
    baseURL: baseURL, // 기본 API URL
    withCredentials: true, // 인증 쿠키를 포함
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 30000, // 요청 제한 시간 (10초)
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            console.log("설정된 Authorization 헤더:", config.headers.Authorization);
        } else {
            console.warn("인증 토큰이 설정되지 않았습니다.");
        }
        return config;
    },
    (error) => {
        console.error("요청 인터셉터 에러:", error);
        return Promise.reject(error);
    }
);

// 응답 인터셉터 설정
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error("API 응답 에러:", error.response.status, error.response.data);
        } else if (error.request) {
            console.error("서버 응답 없음:", error.request);
        } else {
            console.error("요청 설정 중 에러 발생:", error.message);
        }

        if (error.code === "ECONNABORTED") {
            console.error("요청 시간이 초과되었습니다.");
        }

        return Promise.reject(error);
    }
);
