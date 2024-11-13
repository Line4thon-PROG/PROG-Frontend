import { React, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import { HomeContainer as PromotionContainer } from "../Home/Home";
import { PhraseContainer } from "../Home/Home";
import PromotionPhrase from "../../assets/images/PromotionPhrase.svg";
import BannerAdvertisement from "../../assets/images/BannerAdvertisement.svg";
import ModalAdvertisement from "../../assets/images/ModalAdvertisement.svg";
import PayCompleteModal from "../../components/Modal/PayCompleteModal";

const AdvertisementWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const AdvertisementBtn = styled.button`
  background-color: ${(props) =>
    props.isSelected ? "rgba(0, 193, 58, 0.1)" : "rgba(63, 65, 66, 1)"};
  border: ${(props) =>
    props.isSelected
      ? "1px solid rgba(0, 193, 58, 1)"
      : "1px solid rgba(118, 118, 118, 1)"};
  border-radius: 8px;
  width: 190px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;

  img {
    margin-bottom: 20px;
  }

  h4 {
    margin-bottom: 5px;
  }

  &:hover {
    background-color: rgba(0, 193, 58, 0.1);
    border: 1px solid rgba(0, 193, 58, 1);
  }
`;

function Promotion() {
  const [selectBanner, setSelectBanner] = useState(false);
  const [selectModal, setSelectModal] = useState(false);
  const [payCompleteModal, setPayCompleteModal] = useState(false);

  // 버튼 클릭 관련
  const handleSelectBannerBtn = () => {
    if (!selectBanner) {
      setSelectBanner(true);
      OpenModal();
    }
  };

  const handleSelectModalBtn = () => {
    if (!selectModal) {
      setSelectModal(true);
      OpenModal();
    }
  };

  // 결제 완료 모달 창 관련
  const OpenModal = () => {
    setPayCompleteModal(true);
  };

  const CloseModal = () => {
    setPayCompleteModal(false);
  };

  return (
    <div>
      <Header />
      <PromotionContainer>
        <PhraseContainer>
          <img src={PromotionPhrase} alt="PromotionPhrase" />
          <p>
            유료 프로모션 서비스를 통해 더 많은 사람들에게 프로젝트를 노출하고,
            빠르고 다양한 조언을 받아보세요
            <br />
            성장 속도를 높여줄 프로모션으로 성공에 한 걸음 더 가까워집니다
          </p>
        </PhraseContainer>
        <AdvertisementWrapper>
          <AdvertisementBtn
            onClick={handleSelectBannerBtn}
            isSelected={selectBanner}
          >
            <img src={BannerAdvertisement} alt="BannerAdvertisement" />
            <h4>배너 광고</h4>
            <p>월 2만원</p>
          </AdvertisementBtn>
          <AdvertisementBtn
            onClick={handleSelectModalBtn}
            isSelected={selectModal}
          >
            <img src={ModalAdvertisement} alt="ModalAdvertisement" />
            <h4>모달창 광고</h4>
            <p>월 3만원</p>
          </AdvertisementBtn>
        </AdvertisementWrapper>
        {payCompleteModal && <PayCompleteModal closeModal={CloseModal} />}
      </PromotionContainer>
    </div>
  );
}

export default Promotion;
