import React, { useEffect } from "react";
import * as S from "./projectInfoBoxStyled";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트
import DefaultGallery from "../../assets/images/default_gallery.svg";
import FeedbackIcon from "../../assets/images/feedback_icon.svg";
import { useProjectDetail } from "../../hooks/useProjectDetail"; // 커스텀 훅

const ProjectInfoBox = ({ project_id }) => {
    const navigate = useNavigate(); // useNavigate 초기화
    const { projectDetail, error } = useProjectDetail(project_id);

    useEffect(() => {
        console.log("ProjectInfoBox useEffect 실행됨");
        console.log("Project Detail Data:", projectDetail); 
        console.log("Error:", error); 
    }, [projectDetail, error]);

    const simpleDescription = projectDetail?.simple_description || "프로젝트 한 줄 소개 (최대 45자)";
    const detailDescription = projectDetail?.detail_description || "프로젝트 설명 (최대 2200자)";
    const images = projectDetail?.images || [{ image: DefaultGallery }];

    return (
        <S.Container>
            <S.OneLiner>{simpleDescription}</S.OneLiner>
            <S.Content>{detailDescription}</S.Content>
            <S.Gallery>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img.image}
                        alt={`Project Image ${index + 1}`}
                        onError={(e) => {
                            console.log(`이미지 로드 실패, 대체 이미지로 설정합니다. (Index: ${index})`);
                            e.target.onerror = null;
                            e.target.src = DefaultGallery; 
                        }}
                    />
                ))}
            </S.Gallery>

            <S.FeedbackBlock>
                <S.GoFeedBack onClick={() => navigate(`/FeedbackList/${project_id}`)}>
                    <img src={FeedbackIcon} alt="Feedback Icon" /> 피드백 확인하기
                </S.GoFeedBack>
                피드백을 확인해보고 직접 남겨보며, 포인트도 얻어가세요!
            </S.FeedbackBlock>
        </S.Container>
    );
};

export default ProjectInfoBox;
