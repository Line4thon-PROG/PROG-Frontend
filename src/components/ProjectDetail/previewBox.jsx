import React, { useState } from "react";
import * as S from "./previewBoxStyled";
import ExamplePicture from "../../assets/images/exampleThumbnail.svg";
import WebIcon from "../../assets/images/web_icon.svg";
import AppleIcon from "../../assets/images/apple_icon.svg";
import AndroidIcon from "../../assets/images/Android.svg";
// import LikeButton from "../../assets/images/like_button.svg";

const PreviewBox =() =>{

    return(
        <S.Container>
            <S.LeftBox>
                <S.Img src={ExamplePicture}></S.Img>
                <S.ChoiceBox>
                    <S.ChoiceLine>
                        <S.GerneContainer>과학</S.GerneContainer>
                        <S.GerneContainer>코딩</S.GerneContainer>
                        <S.StackContainer>React</S.StackContainer>
                        <S.StackContainer>겁나 긴 기! 술! 스! 택!</S.StackContainer>
                    </S.ChoiceLine>
                </S.ChoiceBox>
            </S.LeftBox>
            <S.RightBox>
                <S.Title>프로젝트 타이틀 이름 한줄인줄 알았지?바보들아! 아니거든! 겁나 길거든~~ +_+ 나는 바보다!!</S.Title>
                <S.SortText>프로젝트 참여자</S.SortText>
                <S.ContributeList>
                    <S.CWrapper>
                        <S.Contributer>피망맛없어(PM)</S.Contributer>
                        <S.Divide>|</S.Divide>
                        <S.Contributer>디자인하는감자(Designer)</S.Contributer>
                    </S.CWrapper>
                    <S.CWrapper>
                        <S.Contributer>피망맛없어(PM)</S.Contributer>
                        <S.Divide>|</S.Divide>
                        <S.Contributer>디자인하는감자(Designer)</S.Contributer>
                    </S.CWrapper><S.CWrapper>
                        <S.Contributer>피망맛없어(PM)</S.Contributer>
                        <S.Divide>|</S.Divide>
                        <S.Contributer>디자인하는감자(Designer)</S.Contributer>
                    </S.CWrapper>
                    <S.Contributer>외 N명</S.Contributer>
                    <S.ContributerDetail>상세 보기 &gt;</S.ContributerDetail>
                </S.ContributeList>
                <S.SortText>프로젝트 기간</S.SortText>
                <S.ProjectLength>0000.00.00 - 0000.00.00</S.ProjectLength>
                <S.SortText>프로젝트 확인</S.SortText>
                <S.LinkBox>
                    <S.WebButton><img src={WebIcon}></img>Web</S.WebButton>
                    <S.IOSButton><img src={AppleIcon}></img>iOS</S.IOSButton>
                    <S.AndroidButton><img src={AndroidIcon}></img>Android</S.AndroidButton>
                </S.LinkBox>
                {/* <S.LikeButton><img src={LikeButton}></img> 000</S.LikeButton> */}
            </S.RightBox>
        </S.Container>
    );
};

export default PreviewBox;
