import React, { useEffect } from "react";
import * as S from "./AIReportStyled";
import { useNavigate, useParams } from "react-router-dom";
import DownloadIcon from "../../assets/images/download_icon.svg";
import { useFeedbackReportDetail } from "../../hooks/useFeedbackReportDetail";

const AIReport = () => {
    const { project_id, ai_summary_id } = useParams(); // URL에서 project_id와 ai_summary_id 추출
    const { feedbackReportDetail, loading, error } = useFeedbackReportDetail(
        project_id,
        ai_summary_id
    );

    useEffect(() => {
        if (loading) {
            console.log("AI 보고서 데이터를 로드 중입니다...");
        }
        if (error) {
            console.error("AI 보고서 데이터 로드 중 오류 발생:", error);
        }
        if (feedbackReportDetail) {
            console.log("AI 보고서 데이터 로드 성공:", feedbackReportDetail);
        }
    }, [loading, error, feedbackReportDetail]);

    if (loading) {
        return <p>로딩 중...</p>;
    }

    if (error) {
        return <p>데이터 로드 중 에러 발생: {error.message}</p>;
    }

    if (!feedbackReportDetail) {
        return (
            <S.Container>
                <p id="error">AI 보고서 데이터가 없습니다.</p>
            </S.Container>
        );
    }

    return (
        <S.Container>
            <S.Row>
                <S.Report_Title>{feedbackReportDetail.title}</S.Report_Title>
                <S.Report_When>{feedbackReportDetail.upload_date}</S.Report_When>
            </S.Row>
            {feedbackReportDetail.feedback_summary.map((summary, index) => (
                <div key={index}>
                    <S.Summary_Title>{index + 1}. {summary.title}</S.Summary_Title>
                    <S.Summary_Summary>{summary.summary}</S.Summary_Summary>
                    <S.Summary_Solution>{summary.solution}</S.Summary_Solution>
                </div>
            ))}
            <S.ReportDownload>
                <img src={DownloadIcon} alt="Download Icon" />
            </S.ReportDownload>
        </S.Container>
    );
};

export default AIReport;
