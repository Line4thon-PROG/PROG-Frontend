import axios from "axios";
import { baseURL } from "./baseURL";

// Axios 인스턴스 생성
export const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
    (config) => {
        // localStorage에서 access 토큰을 가져와 Authorization 헤더에 추가
        const token = localStorage.getItem('access');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            console.log("설정된 Authorization 헤더:", config.headers.Authorization);
        } else {
            console.error("인증 토큰이 설정되지 않았습니다.");
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
