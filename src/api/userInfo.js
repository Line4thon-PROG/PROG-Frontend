import { instance } from "./instance";

// 사용자 정보 조회 API
export const getUserInfo = async () => {
    try {
        const response = await instance.get("/api/mypage/accountinfo/me");
        console.log("사용자 정보 조회 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("사용자 정보 조회 실패:", error);
        throw error;
    }
};
