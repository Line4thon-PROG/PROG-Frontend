import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import axios from "axios";
import { baseURL } from "../../api/baseURL";
import BackIcon from "../../assets/images/Back.svg";

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

const ProgressContainer = styled.div`
  height: 4px;
  background-color: rgba(153, 153, 153, 0.5);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 5px;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: rgba(0, 193, 58, 1);
  border-radius: 2px;
  transition: width 0.3s ease-in-out;
  width: ${({ $position }) => `${$position}%`};
`;

function FeedbackDetail() {
  const navigate = useNavigate();
  const { project_id, feedback_id } = useParams();
  const LoginToken = localStorage.getItem("access") || null;

  const [feedbackInfo, setFeedbackInfo] = useState({});
  const [loadingImages, setLoadingImages] = useState({});
  const [positions, setPositions] = useState([]);

  const scrollRefs = useRef([]);

  const validateImageURL = (url) => {
    return url && typeof url === "string" ? url : "default_image.jpg";
  };

  const handleImageLoad = (index, imageIndex) => {
    setLoadingImages((prev) => ({
      ...prev,
      [`${index}-${imageIndex}`]: true,
    }));
  };

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

  const GetFeedbackInfo = async () => {
    if (!LoginToken) {
      console.log("로그인 토큰이 없습니다.");
      return;
    }
    try {
      const response = await axios.get(
        `${baseURL}/api/project_detail/${project_id}/feedback/${feedback_id}`,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        }
      );
      setFeedbackInfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("피드백 정보 로드 중 오류:", error);
    }
  };

  useEffect(() => {
    GetFeedbackInfo();
  }, []);

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

  return (
    <Container>
      <Header />
      <BackImg src={BackIcon} alt="Back" onClick={() => navigate(-1)} />
      <ProjectDetailContainer>
        <NickName>{feedbackInfo && feedbackInfo.feedback_writer}</NickName>
        <StringDate>{feedbackInfo && feedbackInfo.upload_date}</StringDate>
        <Problem>{`프로젝트 이슈(오류) 부분`}</Problem>

        {feedbackInfo &&
          feedbackInfo.discussion &&
          feedbackInfo.discussion.length > 0 &&
          feedbackInfo.discussion.map((item, index) => (
            <IssueBox key={index}>
              <Title>" {item.title} "</Title>
              <Content>{item.description}</Content>
              <FeedbackImgWrapper
                ref={(el) => (scrollRefs.current[index] = el)}
              >
                {item.images &&
                  item.images.length > 0 &&
                  item.images.map((imageitem, imageindex) => {
                    const imageUrl = imageitem.image && imageitem.image.trim() !== ""
                      ? imageitem.image
                      : "https://via.placeholder.com/150"; // 디폴트 이미지 URL

                    // 디버깅: 이미지 URL을 콘솔에 출력
                    console.log(`Rendering image ${imageindex}:`, imageUrl);

                    return (
                      <img
                        key={imageindex}
                        src={imageUrl}
                        alt={`image-${imageindex}`}
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/150"; // 로딩 실패 시 디폴트 이미지 표시
                          console.error(`Image failed to load: ${imageUrl}`);
                        }}
                        style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "cover" }}
                      />
                    );
                  })}
              </FeedbackImgWrapper>
              {item.images && item.images.length >= 5 && (
                <ProgressContainer>
                  <ProgressBar $position={positions[index]}></ProgressBar>
                </ProgressContainer>
              )}
            </IssueBox>


          ))}
      </ProjectDetailContainer>
    </Container>
  );
}

export default FeedbackDetail;
