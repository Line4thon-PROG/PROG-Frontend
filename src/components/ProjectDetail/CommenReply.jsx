import React, { useState } from "react";
import styled from "styled-components";
import PostComment from "../../assets/images/postcomment_icon.svg";

const Wrapper = styled.div`
    width: 96%;
    height: 3.6vw;
    background-color: #262626;
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #999999;
    border-radius: 0.5vw;
    margin-left: auto;
`;

const InputField = styled.input`
    width: 100%;
    height: 100%;
    color: #999999;
    background-color: transparent;
    border: none;
    outline: none;
    padding-left: 1vw;
`;

const Icon = styled.img`
    position: absolute;
    right: 1vw;
`;

const CommentReplyInput = () => {
    return (
        <Wrapper>
            <Icon src={PostComment} />
            <InputField placeholder="대댓글을 입력하세요" />
        </Wrapper>
    );
};

export default CommentReplyInput;
