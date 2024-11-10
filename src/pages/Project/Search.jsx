import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import WriteBtn from "../../assets/images/WriteBtn.svg";

const SearchContainer = styled.div`
  margin-top: 40px;
`;

const NameandWriteBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 20px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2px;
    background-color: rgba(0, 193, 58, 1);
    font-size: 11px;
    font-weight: bolder;
    padding: 5px 10px;
    border-radius: 100px;
  }
`;

function Search() {
  const user = {};
  return (
    <div>
      <Header />
      <SearchContainer>
        <NameandWriteBtnWrapper>
          {/* 로그인 여부를 포함하는 변수가 나와야함. */}
          {user.length > 0 ? (
            <p>{user.name}님이 좋아할 만한 프로젝트</p>
          ) : (
            <p>OOO님이 좋아할 만한 프로젝트</p>
          )}
          <button>
            <img src={WriteBtn} alt="WriteBtn" />
            프로젝트 등록
          </button>
        </NameandWriteBtnWrapper>
      </SearchContainer>
    </div>
  );
}

export default Search;
