import React, { useEffect } from "react";
import * as S from "./projectInfoBoxStyled";
import ExamplePPT from "../../assets/images/project_ppt_example.svg";
import DefaultGallery from "../../assets/images/default_gallery.svg";
import FeedbackIcon from "../../assets/images/feedback_icon.svg";
import { useProjectDetail } from "../../hooks/useProjectDetail"; // Import the custom hook

const ProjectInfoBox = ({ project_id }) => {
    const { projectDetail, error } = useProjectDetail(project_id);

    useEffect(() => {
        console.log("ProjectInfoBox useEffect 실행됨");
        console.log("Project Detail Data:", projectDetail); // Log data to verify
        console.log("Error:", error); // Log error if present
    }, [projectDetail, error]);

    // Use placeholders or fallback values in case the data is not yet loaded
    const simpleDescription = projectDetail?.simple_description || "프로젝트 한 줄 소개 (최대 45자)";
    const detailDescription = projectDetail?.detail_description || "프로젝트 설명 (최대 2200자)";
    const images = projectDetail?.images || [{ image: DefaultGallery }]; // Use ExamplePPT as a default image

    return (
        <S.Container>
            <S.OneLiner>{projectDetail?.simple_description || "프로젝트 한 줄 소개 기본 설정"}</S.OneLiner> {/* Using simple_description */}
            <S.Content>{projectDetail?.detail_description|| "프로젝트 이름"}</S.Content> {/* Using detail_description */}
            <S.Gallery>
                {images.length > 0 ? (
                    images.map((img, index) => (
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
                    ))
                ) : (
                    //대체 이미지로 설정
                    <img
                        src={DefaultGallery}
                        alt="Default Project Image"
                        onError={(e) => {
                            console.log("대체 이미지 로드 실패");
                            e.target.onerror = null; 
                        }}
                    />
                )}
            </S.Gallery>

            <S.FeedbackBlock>
                <S.GoFeedBack>
                    <img src={FeedbackIcon} alt="Feedback Icon" />피드백 확인하기
                </S.GoFeedBack>
                피드백을 확인해보고 직접 남겨보며, 포인트도 얻어가세요!
            </S.FeedbackBlock>
        </S.Container>
    );
};

export default ProjectInfoBox;
