import React, { useState } from "react";
import styled from "styled-components";
import PostComment from "../../assets/images/postcomment_icon.svg";
import { useReplyComment } from "../../hooks/useReplyComment";

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
    margin-top: 1vw;
    #error_text {
        width: fit-content;
        padding-right: 3vw;
        font-size: 0.8vw;
        color: red;
    }
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
    width: 1.5vw;
    height: 1.5vw;
    position: absolute;
    right: 1vw;
    cursor: pointer;
`;

const CommentReplyInput = ({ project_id, comment_id, onReplySubmit }) => {
    const [replyText, setReplyText] = useState("");
    const [customError, setCustomError] = useState(null); // 사용자 정의 에러 메시지
    const { submitReply, loading } = useReplyComment();
    const error_text ="empty_error"
    const handlePostReply = async () => {
        if (!replyText.trim()) {
            setCustomError("내용을 입력하세요"); // 에러 메시지 설정
            return;
        }

        try {
            const newReply = await submitReply(project_id, comment_id, replyText); 
            setReplyText(""); // 입력 필드 초기화
            setCustomError(null); // 에러 메시지 초기화
            onReplySubmit(newReply); // 새 대댓글을 상위 컴포넌트로 전달
        } catch (error) {
            setCustomError("대댓글을 등록하는 중 오류가 발생했습니다."); // 에러 메시지 업데이트
            console.error("대댓글을 등록하는 중 오류가 발생했습니다:", error);
        }
    };

    return (
        <Wrapper>
            <Icon src={PostComment} onClick={handlePostReply} disabled={loading} />
            <InputField
                placeholder="대댓글을 입력하세요"
                value={replyText}
                onChange={(e) => {
                    setReplyText(e.target.value);
                    if (customError) setCustomError(null); // 입력 시 에러 메시지 제거
                }}
            />
            {customError && (
                <p id="error_text" >
                    {error_text}
                </p>
            )}
        </Wrapper>
    );
};

export default CommentReplyInput;
