import React, { useEffect } from "react";
import * as S from "./FeedBackAIStyled";
import { useFeedbackAI } from "../../hooks/useFeedbackAI";
import { useNavigate } from "react-router-dom";
import PointIcon from "../../assets/images/point_icon.svg";
import GoFeedBackIcon from "../../assets/images/gofeedback_icon.svg";
import NoFrogIcon from "../../assets/images/no_ai_icon.svg";
import { useUserInfo } from "../../hooks/useUserInfo";

const FeedBackAI = ({ project_id }) => {
    const navigate = useNavigate();
    const { feedbackList, error, loading, generateFeedback } = useFeedbackAI(project_id);
    const { userInfo, loading: userLoading, error: userError } = useUserInfo();

    useEffect(() => {
        if (loading) {
            console.log("데이터를 불러오는 중입니다...");
        }

        if (error) {
            console.error("AI 피드백 데이터를 가져오는 중 오류 발생:", error);
        }

        if (feedbackList && feedbackList.length > 0) {
            console.log("AI 피드백 데이터 성공적으로 불러옴:", feedbackList);
        }

        if (userInfo) {
            console.log("사용자 정보:", userInfo);
        }

        if (userError) {
            console.error("사용자 정보를 가져오는 중 오류 발생:", userError);
        }
    }, [feedbackList, error, loading, userInfo, userError]);

    return (
        <S.Container>
            <S.Title>
                <S.Row>
                    <p id="title">AI 피드백 정리</p>
                    <S.MyPoint>
                        <img src={PointIcon} alt="Point Icon" />
                        내 포인트 : {userLoading ? "로딩 중..." : userInfo?.total_point ?? "N"} 개
                    </S.MyPoint>
                </S.Row>
                <p id="about">클릭 한 번으로 지금까지 받은 모든 피드백 내용들을 한 번에 정리할 수 있어요!</p>
            </S.Title>
            <S.FeedbackBlock>
                <img
                    src={GoFeedBackIcon}
                    alt="Go Feedback Icon"
                    onClick={async () => {
                        try {
                            await generateFeedback(); // 요청 보내기
                            console.log("AI 피드백 생성 요청 성공!"); // 성공 로그

                            // 10초 뒤에 alert와 새로고침 실행
                            setTimeout(() => {
                                alert("AI 보고서 생성에 성공했습니다!");
                                window.location.reload(); // 페이지 새로고침
                            }, 500); // 10초 대기
                        } catch (error) {
                            console.error("AI 피드백 생성 중 오류:", error); // 오류 로그
                            alert("AI 보고서 생성 중 문제가 발생했습니다. 다시 시도해주세요.");
                        }
                    }}
                />
                AI 피드백 보고서 생성 시마다 1 포인트가 필요합니다
            </S.FeedbackBlock>
            <S.FeedbackListContainer>
                <S.SelectedFeedbackContainer>
                    <p>AI 피드백 보고서</p>
                    {loading ? (
                        <p>로딩 중...</p>
                    ) : feedbackList && feedbackList.length > 0 ? (
                        <S.SelectedFeedbackWrapper>
                            {feedbackList.map((item) => (
                                <S.SelectedFeedback
                                    key={item.id}
                                    onClick={() =>
                                        navigate(`/AIDetail/${project_id}/${item.id}`, {
                                            state: { feedbackDetail: item },
                                        })
                                    }
                                >
                                    <S.InfonDetailBtnWrapper>
                                        <S.NickNamenDateWrapper>
                                            <h5>{item.title}</h5>
                                            <h6>{item.upload_date}</h6>
                                        </S.NickNamenDateWrapper>
                                        <button>상세보기 &gt;</button>
                                    </S.InfonDetailBtnWrapper>
                                    <p id="Text">{item.feedback_summary[0]?.summary || "요약 내용이 없습니다."}</p>
                                </S.SelectedFeedback>
                            ))}
                        </S.SelectedFeedbackWrapper>
                    ) : (
                        <S.NoSelectedFeedback>
                            <img src={NoFrogIcon} alt="No Feedback Icon" />
                            <p>피드백 데이터가 없습니다.</p>
                        </S.NoSelectedFeedback>
                    )}
                </S.SelectedFeedbackContainer>
            </S.FeedbackListContainer>
        </S.Container>
    );
};

export default FeedBackAI;
