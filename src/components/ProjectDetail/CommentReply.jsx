import React, { useState } from "react";
import styled from "styled-components";
import PostComment from "../../assets/images/postcomment_icon.svg";
import { useReplyComment } from "../../hooks/useReplyComment"; // 대댓글 작성 훅 import

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
    cursor: pointer;
`;

const CommentReplyInput = ({ project_id, comment_id }) => {
    const [replyText, setReplyText] = useState("");
    const { submitReply, loading, error } = useReplyComment();

    // 대댓글 등록 함수 호출
    const handlePostReply = async () => {
        if (!replyText.trim()) {
            console.log("대댓글 내용이 없습니다. 대댓글을 입력하세요");
            return;
        }

        try {
            await submitReply(project_id, comment_id, replyText);
            setReplyText(""); // 입력 필드 초기화
        } catch (error) {
            console.error("대댓글을 등록하는 중 오류가 발생했습니다:", error);
        }
    };

    return (
        <Wrapper>
            <Icon src={PostComment} onClick={handlePostReply} disabled={loading} />
            <InputField
                placeholder="대댓글을 입력하세요"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
        </Wrapper>
    );
};

export default CommentReplyInput;
