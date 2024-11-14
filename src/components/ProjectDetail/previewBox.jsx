import React, { useEffect } from "react";
import * as S from "./previewBoxStyled";
import ExamplePicture from "../../assets/images/exampleThumbnail.svg";
import WebIcon from "../../assets/images/web_icon.svg";
import AppleIcon from "../../assets/images/apple_icon.svg";
import AndroidIcon from "../../assets/images/Android.svg";
import { useProjectDetail } from "../../hooks/useProjectDetail"; // useProjectDetail 훅을 import 합니다

const PreviewBox = ({ project_id }) => {
    const { projectDetail, error } = useProjectDetail(project_id);

    useEffect(() => {
        console.log("PreviewBox useEffect 실행됨"); // 실행 확인용 로그
        console.log("Project Detail Data:", projectDetail); // 데이터 확인용 로그
        console.log("Error:", error); // 에러 확인용 로그
    }, [projectDetail, error]);

    const thumbnailUrl = projectDetail?.project_thumbnail || ExamplePicture;

    return (
        <S.Container>
            <S.LeftBox>
                <S.Img
                    src={thumbnailUrl}
                    alt="Project Thumbnail"
                    onError={(e) => {
                        console.log("이미지 로드 실패, 대체 이미지로 설정합니다.");
                        e.target.onerror = null;
                        e.target.src = ExamplePicture;
                    }}
                />


                <S.ChoiceBox>
                    <S.ChoiceLine>
                        {projectDetail?.project_genre.map((genre, index) => (
                            <S.GerneContainer key={index}>{genre}</S.GerneContainer>
                        ))}
                        {projectDetail?.project_stack.map((stack, index) => (
                            <S.StackContainer key={index}>{stack}</S.StackContainer>
                        ))}
                    </S.ChoiceLine>
                </S.ChoiceBox>
            </S.LeftBox>
            <S.RightBox>
                <S.Title>{projectDetail?.project_name || "프로젝트 이름"}</S.Title>
                <S.SortText>프로젝트 참여자</S.SortText>
                <S.ContributeList>
                    {projectDetail?.collaborator.map((collab, index) => (
                        <S.CWrapper key={index}>
                            <S.Contributer>{collab.nickname} ({collab.role})</S.Contributer>
                            {index < projectDetail.collaborator.length - 1 && <S.Divide>|</S.Divide>}
                        </S.CWrapper>
                    ))}
                    <S.ContributerDetail>상세 보기 &gt;</S.ContributerDetail>
                </S.ContributeList>
                <S.SortText>프로젝트 기간</S.SortText>
                <S.ProjectLength>{projectDetail?.period}</S.ProjectLength>
                <S.SortText>프로젝트 확인</S.SortText>
                <S.LinkBox>
                    <S.WebButton>
                        <img src={WebIcon} alt="Web Icon" />
                        Web
                    </S.WebButton>
                    <S.IOSButton>
                        <img src={AppleIcon} alt="iOS Icon" />
                        iOS
                    </S.IOSButton>
                    <S.AndroidButton>
                        <img src={AndroidIcon} alt="Android Icon" />
                        Android
                    </S.AndroidButton>
                </S.LinkBox>
                {/* <S.LikeButton><img src={LikeButton}></img> 000</S.LikeButton> */}
            </S.RightBox>
        </S.Container>
    );
};

export default PreviewBox;
