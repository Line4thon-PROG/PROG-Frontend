import React from "react";
import * as S from "./communityBoxStyled";
import PostComment from "../../assets/images/postcomment_icon.svg";
import CommentReplyInput from "./CommenReply";

const CommunityBox = () => {
    return (
        <S.Container>
            <S.InputComment>
                <S.CommentIcon src={PostComment} />
                <S.CommentInput placeholder="댓글을 입력해 보세요!" />
            </S.InputComment>
            <S.CommentBox>
                <S.CommentOrigin>
                    <S.Comment_who>닉네임</S.Comment_who>
                    <S.Comment_what>댓글 내용</S.Comment_what>
                    <S.Comment_what>댓글 내용</S.Comment_what>
                    <S.Comment_what>댓글 내용</S.Comment_what>
                    <S.Comment_when>0000.00.00.<S.GoReply>답글 쓰기</S.GoReply></S.Comment_when>
                    <S.CommentReply>
                        <S.Comment_who>닉네임</S.Comment_who>
                        <S.Comment_what>대댓글 내용</S.Comment_what>
                        <S.Comment_when>0000.00.00.<S.GoReply>답글 쓰기</S.GoReply></S.Comment_when>
                    </S.CommentReply>
                    <CommentReplyInput />
                </S.CommentOrigin>
                <S.CommentOrigin>
                    <S.Comment_who>닉네임</S.Comment_who>
                    <S.Comment_what>댓글 내용</S.Comment_what>
                    <S.Comment_when>0000.00.00.<S.GoReply>답글 쓰기</S.GoReply></S.Comment_when>
                </S.CommentOrigin>
            </S.CommentBox>
        </S.Container>
    );
};

export default CommunityBox;
