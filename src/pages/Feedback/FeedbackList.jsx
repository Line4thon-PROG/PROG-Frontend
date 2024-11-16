import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import Back from "../../assets/images/Back.svg";
import WriteFeedbackIcon from "../../assets/images/WriteFeedbackIcon.svg";
import AIFeedbackIcon from "../../assets/images/AIFeedbackIcon.svg";
import NoFeedbackFrog from "../../assets/images/NoFeedbackFrog.svg";
import SeeDetailIcon from "../../assets/images/SeeDetailIcon.svg";
import { baseURL } from "../../api/baseURL";
import axios from "axios";

const FeedbackListContainer = styled.div`
  margin-top: 30px;
  padding-bottom: 50px;
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

const SelectedFeedbackWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
  overflow-y: auto;
`;

const SelectedFeedback = styled.div`
  padding: 20px 30px;
  background-color: rgba(51, 51, 51, 1);
  border-radius: 8px;
  width: 50vw;
  height: auto;
  cursor: pointer;

  p {
    font-size: 12px;
    font-weight: 200;
  }
  #Text{
    padding-bottom: 1vw;
  }
`;

const InfonDetailBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: white;
    font-size: 11px;
  }
`;

const NickNamenDateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  margin-bottom: 12px;

  h5 {
    font-size: 12px;
  }
  h6 {
    color: rgba(153, 153, 153, 1);
    font-size: 12px;
  }
`;

function FeedbackList() {
  const LoginToken = localStorage.getItem("access") || null;
  const navigate = useNavigate();
  const { project_id } = useParams();

  // 상태 변수들
  const [isUser, setIsUser] = useState(null);
  const [selectedFeedback, setSelectedFeedback] = useState([]);

  // 프로젝트 게시자인지
  const GetProjectUsername = async () => {
    if (!LoginToken) {
      console.log("로그인 토큰이 없습니다.");
      return;
    }
    try {
      const response = await axios.get(
        `${baseURL}/api/project_detail/${project_id}`,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        }
      );
      setIsUser(response.data.can_update_and_delete);
      console.log(response.data.can_update_and_delete);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProjectUsername();
  }, []);

  // 채택된 피드백 불러오기
  const GetSelectedFeedback = async () => {
    if (!LoginToken) {
      console.log("로그인 토큰이 없습니다.");
      return;
    }
    try {
      const apiUrl = isUser
        ? `${baseURL}/api/project_detail/${project_id}/feedback`
        : `${baseURL}/api/project_detail/${project_id}/adopt_feedback`;
      //const apiUrl = `${baseURL}/api/project_detail/${project_id}/feedback?is_adopted=true`;
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${LoginToken}`,
        },
      });
      setSelectedFeedback(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetSelectedFeedback();
  }, [isUser]);

  return (
    <div>
      <Header />
      <BackImg src={Back} alt="Back" onClick={() => navigate(-1)} />
      <FeedbackListContainer>
        <TitlenBtnWrapper>
          <p>피드백 목록</p>
          {isUser ? (
            <AIFeedBackBtn onClick={() => navigate(`/FBAI/${project_id}`)}>
              <img src={AIFeedbackIcon} alt="AIFeedbackICon" />
              Ai 피드백 정리
            </AIFeedBackBtn>
          ) : (
            <WriteFeedBackBtn
              onClick={() => navigate(`/FeedbackWrite/${project_id}`)}
            >
              <img src={WriteFeedbackIcon} alt="WriteFeedbackIcon" />
              피드백 작성하기
            </WriteFeedBackBtn>
          )}
        </TitlenBtnWrapper>
        <DetailComment>
          {isUser ? (
            <>
              들어온 피드백을 확인해 보고, 직접 피드백을 채택해 보세요
              <br />
              양질의 피드백에는 포인트를 지급할 수 있습니다!
            </>
          ) : (
            <>
              채택된 피드백을 확인해 보고, 직접 피드백을 작성해 보세요
              <br />
              양질의 피드백일수록 채택될 가능성이 높아집니다!
            </>
          )}
        </DetailComment>
        <SelectedFeedbackContainer>
          {isUser ? <p>피드백 목록</p> : <p>채택된 피드백 목록</p>}
          {selectedFeedback && selectedFeedback.length > 0 ? (
            <SelectedFeedbackWrapper>
              {selectedFeedback.map((item) => (
                <SelectedFeedback
                  key={item.id}
                  onClick={() =>
                    navigate(`/FeedbackDetail/${project_id}/${item.id}`)
                  }
                >
                  <InfonDetailBtnWrapper>
                    <NickNamenDateWrapper>
                      <h5>{item.feedback_writer}</h5>
                      <h6>{item.upload_date}</h6>
                    </NickNamenDateWrapper>
                    <button>
                      상세보기
                      <img src={SeeDetailIcon} alt="SeeDetailIcon" />
                    </button>
                  </InfonDetailBtnWrapper>
                  <p id="Text">{item.feedback_description}</p>
                </SelectedFeedback>
              ))}
            </SelectedFeedbackWrapper>
          ) : (
            <NoSelectedFeedback>
              <img src={NoFeedbackFrog} alt="frog" />
              {isUser ? (
                <p>아직 피드백이 없습니다</p>
              ) : (
                <p>아직 채택된 피드백이 없습니다</p>
              )}
            </NoSelectedFeedback>
          )}
        </SelectedFeedbackContainer>
      </FeedbackListContainer>
    </div>
  );
}

export default FeedbackList;
