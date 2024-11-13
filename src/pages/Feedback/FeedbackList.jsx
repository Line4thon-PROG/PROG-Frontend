import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import Back from "../../assets/images/Back.svg";
import WriteFeedbackIcon from "../../assets/images/WriteFeedbackIcon.svg";
import AIFeedbackIcon from "../../assets/images/AIFeedbackIcon.svg";
import NoFeedbackFrog from "../../assets/images/NoFeedbackFrog.svg";

const FeedbackListContainer = styled.div`
  margin-top: 30px;
`;

const BackImg = styled.img`
  width: 1.8vw;
  height: 1.8vw;
  margin-top: 3vw;
  cursor: pointer;
`;

const TitlenBtnWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  p {
    font-size: 24px;
  }
`;

const WriteFeedBackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bolder;
  gap: 4px;
  background-color: rgba(0, 193, 58, 1);
  border: none;
  border-radius: 8px;
  width: 140px;
  height: 38px;

  img {
    width: 20px;
  }
`;
const AIFeedBackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bolder;
  gap: 4px;
  background-color: rgba(255, 165, 0, 1);
  border: none;
  border-radius: 8px;
  width: 140px;
  height: 38px;

  img {
    width: 20px;
  }
`;

const DetailComment = styled.p`
  margin-top: 14px;
  color: rgba(153, 153, 153, 1);
  font-weight: 300;
  font-size: 15px;
  line-height: 21px;
`;

const SelectedFeedbackContainer = styled.div`
  margin-top: 50px;
  padding: 20px 30px;
  width: 100%;
  min-height: 280px;
  background-color: rgba(38, 38, 38, 1);
  border: 1px solid rgba(153, 153, 153, 1);
  border-radius: 12px;
  p {
    font-size: 12px;
  }
`;

const NoSelectedFeedback = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  p {
    color: rgba(153, 153, 153, 1);
    font-size: 13px;
  }
`;

function FeedbackList() {
  const navigate = useNavigate();

  // 임의의 변수들
  const username = "user1";
  const projectuser = "user12";
  const feedbackList = [];

  return (
    <div>
      <Header />
      <BackImg src={Back} alt="Back" onClick={() => navigate(-1)} />
      <FeedbackListContainer>
        <TitlenBtnWrapper>
          <p>피드백 목록</p>
          {username === projectuser ? (
            <AIFeedBackBtn>
              <img src={AIFeedbackIcon} alt="AIFeedbackICon" />
              Ai 피드백 정리
            </AIFeedBackBtn>
          ) : (
            <WriteFeedBackBtn>
              <img src={WriteFeedbackIcon} alt="WriteFeedbackIcon" />
              피드백 작성하기
            </WriteFeedBackBtn>
          )}
        </TitlenBtnWrapper>
        <DetailComment>
          채택된 피드백을 확인해 보고, 직접 피드백을 작성해 보세요
          <br />
          양질의 피드백일수록 채택될 가능성이 높아집니다!
        </DetailComment>
        <SelectedFeedbackContainer>
          <p>채택된 피드백 목록</p>
          {feedbackList.length > 0 ? (
            <></>
          ) : (
            <NoSelectedFeedback>
              <img src={NoFeedbackFrog} alt="frog" />
              <p>아직 채택된 피드백이 없습니다</p>
            </NoSelectedFeedback>
          )}
        </SelectedFeedbackContainer>
      </FeedbackListContainer>
    </div>
  );
}

export default FeedbackList;
