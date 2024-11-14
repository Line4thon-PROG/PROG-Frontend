import axios from "axios";
import { baseURL } from "./baseURL";

// Axios 인스턴스 생성
export const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        // `Authorization` 헤더는 필요에 따라 추가될 수 있습니다
    },
    timeout: 10000, // 10초 타임아웃 설정
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
    (config) => {
        const token = process.env.REACT_APP_ACCESS_TOKEN; // 환경변수에 저장된 액세스 토큰을 불러옵니다
        if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 응답 인터셉터 설정
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === "ECONNABORTED") {
        console.error("Request timeout");
        }
        return Promise.reject(error);
    }
);
