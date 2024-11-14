import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import Back from "../../assets/images/Back.svg";
import FeedbackDetailImg from "../../assets/images/FeedbackDetailImg.svg";
import { ProgressBar } from "../Project/Search";
import { ProgressContainer } from "../Project/Search";
import UpScroll from "../../assets/images/UpScroll.svg";
import { UpScrollImg } from "../Project/Search";
import FeedbackCheckIcon from "../../assets/images/FeedbackCheckIcon.svg";
import FeedbackCheckModal from "../../components/Modal/FeedbackCheckModal";
import CompleteCheckIcon from "../../assets/images/CompleteCheckIcon.svg";

const BackImg = styled.img`
  width: 1.8vw;
  height: 1.8vw;
  margin-top: 3vw;
  cursor: pointer;
`;

const Container = styled.div`
  padding-bottom: 50px;
`;

const ProjectDetailContainer = styled.div`
  margin-top: 30px;
  background-color: rgba(38, 38, 38, 1);
  border: none;
  border-radius: 12px;
  padding: 20px 30px;
  position: relative;
`;

const NickName = styled.p`
  color: white;
  font-size: 14px;
`;
const StringDate = styled.p`
  margin-top: 5px;
  color: rgba(153, 153, 153, 1);
  font-size: 14px;
`;
const Problem = styled.p`
  margin-top: 25px;
  font-size: 15px;
  margin-bottom: 12px;
`;

const IssueBox = styled.div`
  background-color: rgba(51, 51, 51, 1);
  border: none;
  border-radius: 8px;
  padding: 20px 30px;
  margin-bottom: 10px;
`;

const Title = styled.p`
  font-size: 14px;
`;
const Content = styled.p`
  margin-top: 20px;
  font-size: 12px;
  margin-left: 5px;
`;

const FeedbackImgWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 44vw;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 160px;
  }
`;

const NewCommentContainer = styled.div`
  margin-top: 50px;
`;
const CommentBox = styled.div`
  background-color: rgba(51, 51, 51, 1);
  border: none;
  border-radius: 8px;
  padding: 20px 30px;

  p {
    font-size: 12px;
  }
`;

const FeedbackCheckBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 193, 58, 1);
  font-weight: bolder;
  gap: 5px;
  position: absolute;
  padding: 5px 8px;
  font-size: 11px;
  border-radius: 8px;
  top: 20px;
  right: 30px;
`;
const CompleteCheckBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  gap: 5px;
  position: absolute;
  padding: 5px 8px;
  font-size: 11px;
  border-radius: 8px;
  top: 20px;
  right: 30px;
  background-color: rgba(202, 202, 202, 1);
  border: none;
  color: rgba(118, 118, 118, 1);
`;

function FeedbackDetail() {
  const navigate = useNavigate();

  // 상태관리변수
  const [clickFeedbackCheckBtn, setClickFeedbackCheckBtn] = useState(false);
  const [feedbackCheckModal, setFeedbackCheckModal] = useState(false);
  const [checkComplete, setCheckComplete] = useState(false);

  // 임의 디테일 info
  const isUser = true;
  const detailinfo = {
    id: 7,
    feedback_writer: "민기1",
    upload_date: "2024-11-12",
    images: [
      {
        image: FeedbackDetailImg,
      },
    ],
    discussion: [
      {
        id: 1,
        discussion_writer: {
          nickname: "민기1",
          role: "BE",
          university: "성신여자대학교",
        },
        title: "참 고민이 되는군요",
        description: "정말 고민이 되네요..",
        images: [
          {
            image: FeedbackDetailImg,
          },
          {
            image: FeedbackDetailImg,
          },
          {
            image: FeedbackDetailImg,
          },
          {
            image: FeedbackDetailImg,
          },
          {
            image: FeedbackDetailImg,
          },
          {
            image: FeedbackDetailImg,
          },
          {
            image: FeedbackDetailImg,
          },
        ],
      },
      {
        id: 1,
        discussion_writer: {
          nickname: "민기1",
          role: "BE",
          university: "성신여자대학교",
        },
        title: "참 고민이 되는군요",
        description: "정말 고민이 되네요..",
        images: [
          {
            image: FeedbackDetailImg,
          },
        ],
      },
    ],

    is_adopted: false,
    can_update_and_delete: true,
    is_collaborator: true,
    feedback_description: "이건 정말 잘못된 것 같군요. 프로젝트를 접으십시오",
  };

  // 보상 모달 관련
  const handleFeedbackCheckBtn = () => {
    setClickFeedbackCheckBtn(true);
    FeedbackCheckModalOpen();
  };

  const FeedbackCheckModalOpen = () => {
    setFeedbackCheckModal(true);
  };
  const FeedbackCheckModalClose = () => {
    setFeedbackCheckModal(false);
  };

  // 가로 스크롤 관련
  const [positions, setPositions] = useState(
    detailinfo.discussion.map(() => 0)
  );
  const scrollRefs = useRef([]);

  const handleScroll = (index) => {
    const scrollElement = scrollRefs.current[index];
    if (scrollElement) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollElement;
      const totalScrollableWidth = scrollWidth - clientWidth;
      let currentPosition = (scrollLeft / totalScrollableWidth) * 100;
      currentPosition = Math.min(currentPosition, 100 - 33.3);

      setPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        newPositions[index] = currentPosition;
        return newPositions;
      });
    }
  };

  useEffect(() => {
    scrollRefs.current.forEach((scrollElement, index) => {
      if (scrollElement) {
        const handleScrollWithIndex = () => handleScroll(index);
        scrollElement.addEventListener("scroll", handleScrollWithIndex);

        return () => {
          scrollElement.removeEventListener("scroll", handleScrollWithIndex);
        };
      }
    });
  }, []);

  // 위로 올라가는 스크롤
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <Header />
      <BackImg src={Back} alt="Back" onClick={() => navigate(-1)} />
      <ProjectDetailContainer>
        <NickName>{detailinfo.feedback_writer}</NickName>
        <StringDate>{detailinfo.upload_date}</StringDate>
        {isUser &&
          (checkComplete ? (
            <>
              <CompleteCheckBtn onClick={handleFeedbackCheckBtn}>
                <img src={CompleteCheckIcon} alt="CompleteCheckIcon" />
                피드백 채택완료
              </CompleteCheckBtn>
            </>
          ) : (
            <>
              <FeedbackCheckBtn onClick={handleFeedbackCheckBtn}>
                <img src={FeedbackCheckIcon} alt="FeedbackCheckIcon" />
                피드백 채택하기
              </FeedbackCheckBtn>

              {feedbackCheckModal && (
                <FeedbackCheckModal
                  CloseModal={FeedbackCheckModalClose}
                  setCheckComplete={setCheckComplete}
                />
              )}
            </>
          ))}
        <Problem>{`프로젝트 이슈(오류) 부분`}</Problem>
        {detailinfo.discussion.map((item, index) => (
          <IssueBox key={index}>
            <Title>" {item.title} "</Title>
            <Content>{item.description}</Content>
            <FeedbackImgWrapper ref={(el) => (scrollRefs.current[index] = el)}>
              {item.images &&
                item.images.length > 0 &&
                item.images.map((imageitem, imageindex) => (
                  <img key={imageindex} src={imageitem.image} alt="image" />
                ))}
            </FeedbackImgWrapper>
            <ProgressContainer>
              <ProgressBar $position={positions[index]}></ProgressBar>
            </ProgressContainer>
          </IssueBox>
        ))}
        <NewCommentContainer>
          <Problem>새로운 의견 제시</Problem>
          <CommentBox>
            <p>{detailinfo.feedback_description}</p>
          </CommentBox>
        </NewCommentContainer>
        <UpScrollImg
          src={UpScroll}
          alt="UpScroll"
          onClick={() => MoveToTop()}
        />
      </ProjectDetailContainer>
    </Container>
  );
}

export default FeedbackDetail;
