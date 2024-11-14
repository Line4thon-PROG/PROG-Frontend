import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"; // Import axios for the POST request
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
    cursor: pointer;
`;

const CommentReplyInput = ({ parentCommentId }) => {
    const [replyText, setReplyText] = useState("");

    // Function to handle posting the reply
    const postReply = async () => {
        if (!replyText.trim()) {
            console.log("대댓글 내용이 없습니다.");
            return;
        }

        try {
            const response = await axios.post(`/api/project_detail/${parentCommentId}/in_comment`, {
                in_comment: replyText,
            });

            console.log("Reply posted successfully:", response.data);
            setReplyText(""); // Clear the input field after posting
            // Optionally, you can update the parent component to show the new reply immediately
        } catch (error) {
            console.error("대댓글을 등록하는 중 오류가 발생했습니다:", error);
        }
    };

    return (
        <Wrapper>
            <Icon src={PostComment} onClick={postReply} />
            <InputField
                placeholder="대댓글을 입력하세요"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
            />
        </Wrapper>
    );
};

export default CommentReplyInput;
