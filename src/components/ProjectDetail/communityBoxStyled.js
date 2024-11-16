import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1vw;
    margin-top: 3vw;
`;

export const InputComment = styled.div`
    width: 100%;
    height: 3.6vw;
    background-color: #262626;
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #999999;
    border-radius: 0.5vw;
`;

export const CommentIcon = styled.img`
    position: absolute;
    right: 1vw;
    width: 1.5vw;
    height: 1.5vw;
    cursor: pointer;
`;

export const CommentInput = styled.input`
    width: 100%;
    height: 100%;
    color: #999999;
    background-color: transparent;
    border: none;
    outline: none;
    padding-left: 1vw;  
`;

export const CommentBox = styled.div`
    width: 100%;
    gap: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 1.5vw;
    padding-left:1vw;
`;

export const CommentOrigin = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5vw;
`;

export const Comment_who = styled.div`
    color: white;
    font-weight: bold;
`;

export const Comment_what = styled.div`
    color: white;
`;

export const Comment_when = styled.div`
    color: #999999;
    margin-top: 0.1vw;
`;

export const GoReply = styled.button`
    color: #999999;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 1vw;
    font-weight: bold;
`;

export const CommentReply = styled.div`
    margin: 1vw;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5vw;
`;
