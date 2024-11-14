import axios from "axios";
import { baseURL } from "./baseURL";

// Axios 인스턴스 생성
export const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000, // 10초 타임아웃 설정
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
    (config) => {
        const token = process.env.REACT_APP_ACCESS_TOKEN; // 환경변수에 저장된 액세스 토큰을 불러옵니다
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Bearer 뒤에 띄어쓰기 포함
        } else {
            console.error("인증 토큰이 설정되지 않았습니다.");
        }
        console.log("설정된 Authorization 헤더:", config.headers.Authorization); // 설정된 헤더 확인용 콘솔
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
