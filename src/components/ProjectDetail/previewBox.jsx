import React, { useEffect, useState } from "react";
import * as S from "./previewBoxStyled";
import { useParams } from "react-router-dom";
import ContributerList from "./ContributerList"; 
import WebIcon from "../../assets/images/web_icon.svg";
import AppleIcon from "../../assets/images/apple_icon.svg";
import AndroidIcon from "../../assets/images/Android.svg";
import DefualThumbnail from "../../assets/images/default_thumbnail.svg";
import ColoredWebIcon from "../../assets/images/colored_web_icon.svg";
import ColoredAppleIcon from "../../assets/images/colored_apple_icon.svg";
import ColoredAndroidIcon from "../../assets/images/colored_android_icon.svg";
import { useProjectDetail } from "../../hooks/useProjectDetail";

const PreviewBox = () => {
    const { project_id } = useParams(); 
    const { projectDetail, error } = useProjectDetail(project_id);
    const [isPopupOpen, setIsPopupOpen] = useState(false); 

    const [webIcon, setWebIcon] = useState(WebIcon);
    const [iosIcon, setIosIcon] = useState(AppleIcon);
    const [androidIcon, setAndroidIcon] = useState(AndroidIcon);

    useEffect(() => {
        console.log("Project Detail Data:", projectDetail); 
        console.log("Error:", error); 
    }, [projectDetail, error]);

    const thumbnailUrl = projectDetail?.project_thumbnail || DefualThumbnail;
    const webLink = projectDetail?.web_link;
    const iosLink = projectDetail?.ios_link;
    const androidLink = projectDetail?.android_link;

    const availableLinks = [webLink, iosLink, androidLink].filter(link => link && link !== "");

    // 수정된 openLink 함수
    const openLink = (link) => {
        if (link && link !== "") {
            const formattedLink = link.startsWith("http://") || link.startsWith("https://") 
                ? link 
                : `https://${link}`;
            window.open(formattedLink, "_blank");
        }
    };

    const chunkArray = (array, size) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    };

    const collaboratorChunks = projectDetail?.collaborator ? chunkArray(projectDetail.collaborator, 2) : [];

    return (
        <>
            <S.Container>
                <S.LeftBox>
                    <S.Img
                        src={thumbnailUrl}
                        alt="Project Thumbnail"
                        onError={(e) => {
                            console.log("이미지 로드 실패, 대체 이미지로 설정합니다.");
                            e.target.onerror = null;
                            e.target.src = DefualThumbnail;
                        }}
                    />
                    <S.ChoiceBox>
                        {([...projectDetail?.project_genre || [], ...projectDetail?.project_stack || []])
                            .map((item, index) => (
                                index % 3 === 0 ? (
                                    <S.ChoiceLine key={`line-${index / 3}`}>
                                        {([...projectDetail?.project_genre || [], ...projectDetail?.project_stack || []]
                                            .slice(index, index + 3)
                                            .map((subItem, subIndex) => (
                                                <S.StackContainer key={`item-${index}-${subIndex}`}>{subItem}</S.StackContainer>
                                            )))}
                                    </S.ChoiceLine>
                                ) : null
                            ))}
                    </S.ChoiceBox>
                </S.LeftBox>
                <S.RightBox>
                    <S.Title>{projectDetail?.project_name || "프로젝트 이름"}</S.Title>
                    <S.SortText>프로젝트 참여자</S.SortText>
                    <S.ContributeList>
                        {collaboratorChunks.map((chunk, rowIndex) => (
                            <S.CWrapper key={rowIndex}>
                                {chunk.map((collab, index) => (
                                    <React.Fragment key={collab.account_id}>
                                        <S.Contributer>
                                            {collab.nickname} ({collab.role})
                                        </S.Contributer>
                                        {index < chunk.length - 1 && <S.Divide>|</S.Divide>}
                                    </React.Fragment>
                                ))}
                                {/* ContributerDetail을 chunk.map 다음에 위치 */}
                                <S.ContributerDetail onClick={() => setIsPopupOpen(true)}>
                                    상세 보기 &gt;
                                </S.ContributerDetail>
                            </S.CWrapper>
                        ))}
                        {/* Popup 컨텐츠는 map 바깥에서 처리 */}
                        {isPopupOpen && (
                            <ContributerList
                                project_id={project_id}
                                onClose={() => setIsPopupOpen(false)} 
                            />
                        )}
                    </S.ContributeList>
                    <S.SortText>프로젝트 기간</S.SortText>
                    <S.ProjectLength>{projectDetail?.period}</S.ProjectLength>
                    <S.SortText>프로젝트 확인</S.SortText>
                    <S.LinkBox>
                        {webLink && (
                            <S.WebButton
                                onClick={() => openLink(webLink)}
                                onMouseEnter={() => setWebIcon(ColoredWebIcon)}
                                onMouseLeave={() => setWebIcon(WebIcon)}
                                style={{ width: availableLinks.length === 1 ? "100%" : availableLinks.length === 2 ? "45%" : "30%" }}
                            >
                                <img src={webIcon} alt="Web Icon" className="icon" />
                                Web
                            </S.WebButton>
                        )}
                        {iosLink && (
                            <S.IOSButton
                                onClick={() => openLink(iosLink)}
                                onMouseEnter={() => setIosIcon(ColoredAppleIcon)}
                                onMouseLeave={() => setIosIcon(AppleIcon)}
                                style={{ width: availableLinks.length === 1 ? "100%" : availableLinks.length === 2 ? "45%" : "30%" }}
                            >
                                <img src={iosIcon} alt="iOS Icon" className="icon"/>
                                iOS
                            </S.IOSButton>
                        )}
                        {androidLink && (
                            <S.AndroidButton
                                onClick={() => openLink(androidLink)}
                                onMouseEnter={() => setAndroidIcon(ColoredAndroidIcon)}
                                onMouseLeave={() => setAndroidIcon(AndroidIcon)}
                                style={{ width: availableLinks.length === 1 ? "100%" : availableLinks.length === 2 ? "45%" : "30%" }}
                            >
                                <img src={androidIcon} alt="Android Icon" className="icon" />
                                Android
                            </S.AndroidButton>
                        )}
                    </S.LinkBox>
                </S.RightBox>
            </S.Container>
        </>
    );
};

export default PreviewBox;
