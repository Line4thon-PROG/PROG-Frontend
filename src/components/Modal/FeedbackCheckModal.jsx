import { React, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import OnePoint from "../../assets/images/OnePoint.svg";
import TwoPoint from "../../assets/images/TwoPoint.svg";
import ThreePoint from "../../assets/images/ThreePoint.svg";
import CloseIcon from "../../assets/images/CloseIcon.svg";
import axios from "axios";
import { baseURL } from "../../api/baseURL";

const FeedbackCheckContainer = styled.div`
  background-color: rgba(17, 17, 17, 0.8);
  border: 1px solid rgba(153, 153, 153, 1);
  border-radius: 8px;
  width: 244px;
  height: 215px;
  position: absolute;
  top: 65px;
  right: 30px;
  backdrop-filter: blur(20px);
  padding: 20px 25px;
`;

const CommentnCloseBtnWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  p {
    font-size: 13px;
    line-height: 18px;
  }

  img {
    width: 16px;
  }
`;

const PointWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const PointBox = styled.div`
  background-color: ${(props) =>
    props.isSelected ? "rgba(0, 193, 58, 0.1)" : "rgba(38, 38, 38, 1)"};
  border: ${(props) =>
    props.isSelected
      ? "1px solid rgba(0, 193, 58, 0.5)"
      : "1px solid rgba(118, 118, 118, 1)"};
  color: ${(props) => (props.isSelected ? "rgba(0, 193, 58, 1)" : "white")};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
  cursor: pointer;

  img {
    margin-bottom: 5px;
  }
`;

const GivePointBtn = styled.button`
  margin-top: 12px;
  width: 100%;
  background-color: ${(props) =>
    props.isSelected ? "rgba(0, 193, 58, 1)" : "rgba(153, 153, 153, 1)"};
  border: none;
  color: white;
  text-align: center;
  border-radius: 4px;
  padding: 7px 0;
  font-weight: bolder;
`;

function FeedbackCheckModal({ CloseModal, project_id, feedback_id }) {
  const LoginToken = localStorage.getItem("access") || null;
  const [point, setPoint] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // 포인트 선택
  const SelectPoint = (int) => {
    setPoint(int);
  };

  // 포인트 주기 함수 (추후 post 연동 필요)
  const PostPoint = async (mypoint) => {
    const stringpoint = mypoint.toString();
    try {
      const response = await axios.post(
        `${baseURL}/api/project_detail/${project_id}/feedback/${feedback_id}/adopt`,
        {
          point: stringpoint,
        },
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GivePoint = () => {
    if (point) {
      PostPoint(point);
      alert("피드백 채택이 완료되었습니다!");
      window.location.reload();
    }
  };

  return (
    <FeedbackCheckContainer>
      <CommentnCloseBtnWrapper>
        <p>
          도움을 준 피드백에 보상할
          <br />
          포인트 개수를 선택하세요
        </p>
        <button>
          <img src={CloseIcon} alt="CloseIcon" onClick={CloseModal} />
        </button>
      </CommentnCloseBtnWrapper>
      <PointWrapper>
        <PointBox onClick={() => SelectPoint(1)} isSelected={point === 1}>
          <img src={OnePoint} alt="OnePoint" />
          <p>1개</p>
        </PointBox>
        <PointBox onClick={() => SelectPoint(2)} isSelected={point === 2}>
          <img src={TwoPoint} alt="TwoPoint" />
          <p>2개</p>
        </PointBox>
        <PointBox onClick={() => SelectPoint(3)} isSelected={point === 3}>
          <img src={ThreePoint} alt="ThreePoint" />
          <p>3개</p>
        </PointBox>
      </PointWrapper>
      <GivePointBtn isSelected={!(point === null)} onClick={() => GivePoint()}>
        포인트 주기
      </GivePointBtn>
    </FeedbackCheckContainer>
  );
}

export default FeedbackCheckModal;
