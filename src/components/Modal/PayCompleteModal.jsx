import React from "react";
import styled from "styled-components";
import PayCompleteIcon from "../../assets/images/PayCompleteIcon.svg";
import CloseICon from "../../assets/images/CloseIcon.svg";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PayCompleteContainer = styled.div`
  background-color: rgba(38, 38, 38, 1);
  border: 1px solid rgba(153, 153, 153, 1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 260px;
  position: relative;
  margin-left: -60px;

  img {
    margin-bottom: 30px;
  }

  h4 {
    color: rgba(0, 193, 58, 1);
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    color: rgba(153, 153, 153, 1);
    font-size: 16px;
    font-weight: bolder;
  }
`;

const CloseImg = styled.img`
  position: absolute;
  width: 20px;
  top: 15px;
  right: 23px;
  cursor: pointer;
`;

function PayCompleteModal({ closeModal }) {
  return (
    <div>
      <ModalOverlay>
        <PayCompleteContainer>
          <img src={PayCompleteIcon} alt="PayCompleteIcon" />
          <h4>결제 완료</h4>
          <p>결제가 정상적으로 완료되었습니다!</p>
          <CloseImg
            src={CloseICon}
            alt="CloseICon"
            onClick={() => closeModal()}
          />
        </PayCompleteContainer>
      </ModalOverlay>
    </div>
  );
}

export default PayCompleteModal;
