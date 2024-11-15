import React, { useState, useEffect } from "react";
import * as S from "./detailHeaderStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useProjectDetail } from "../../hooks/useProjectDetail";
import { scrapProject } from "../../api/projectScrap"; 
import backIcon from "../../assets/images/move_back_arrow.svg";
import deleteIcon from "../../assets/images/delete_trashcan.svg";
import BookMarkIcon from "../../assets/images/bookmark_icon.svg";
import IsScrappedIcon from "../../assets/images/isscrapped_icon.svg";
import DeletePopup from "./DeletePopup";

const DetailHeader = () => {
    const navigate = useNavigate();
    const { project_id } = useParams();
    const { projectDetail, error } = useProjectDetail(project_id);

    const [isPopupVisible, setIsPopupVisible] = useState(false); // 팝업 표시 상태
    const [isBookmarked, setIsBookmarked] = useState(false); // 북마크 상태

    useEffect(() => {
        if (projectDetail?.is_liked) {
            setIsBookmarked(true); // 초기 스크랩 상태 설정
        }
    }, [projectDetail]);

    const handleScrap = async () => {
        try {
            const response = await scrapProject(project_id); // 북마크 API 호출
            alert(response.message); // API 응답 메시지 출력
            setIsBookmarked(!isBookmarked); // 북마크 상태 토글
        } catch (error) {
            console.error("스크랩 요청 중 에러 발생:", error);
        }
    };

    if (error) {
        console.error("프로젝트 정보 로드 중 에러:", error);
    }

    return (
        <>
            {isPopupVisible && (
                <S.PopupWrapper>
                    <S.PopupOverlay onClick={() => setIsPopupVisible(false)} />
                    <DeletePopup
                        project_id={project_id} // project_id 전달
                        onClose={() => setIsPopupVisible(false)} // 팝업 닫기 핸들러
                    />
                </S.PopupWrapper>
            )}
            <S.Container>
                <S.Icon
                    src={backIcon}
                    alt="뒤로 가기"
                    onClick={() => navigate(-1)}
                />
                <S.IconBox>
                    {/* 삭제/북마크 조건에 따른 동작 */}
                    {projectDetail?.can_update_and_delete ? (
                        <S.Icon
                            src={deleteIcon}
                            alt="삭제"
                            onClick={() => setIsPopupVisible(true)} // 팝업 표시
                        />
                    ) : (
                        <S.Icon
                            src={isBookmarked ? IsScrappedIcon : BookMarkIcon} // 북마크 상태에 따른 아이콘 변경
                            alt={isBookmarked ? "스크랩됨" : "북마크"}
                            onClick={handleScrap} // 북마크 동작 추가
                        />
                    )}
                </S.IconBox>
            </S.Container>
        </>
    );
};

export default DetailHeader;
