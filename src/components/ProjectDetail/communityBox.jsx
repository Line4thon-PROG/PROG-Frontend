import React, { useState } from "react";
import * as S from "./communityBoxStyled";
import PostComment from "../../assets/images/postcomment_icon.svg";
import CommentReply from "./CommentReply";
import { useProjectComment } from "../../hooks/useProjectComment";
import { instance } from "../../api/instance"; // axios 인스턴스 import

const CommunityBox = ({ project_id }) => {
    const { comments, error } = useProjectComment(project_id);
    const [newComment, setNewComment] = useState(""); // 댓글 입력 값 상태
    const [activeCommentId, setActiveCommentId] = useState(null);

    if (error) {
        console.log("댓글을 불러오는 중 에러가 발생했습니다");
    }

    // 댓글 등록 함수
    const postComment = async () => {
        if (!newComment.trim()) {
            console.log("댓글 내용이 비어있습니다."); // 댓글 내용이 없는 경우
            return;
        }

        try {
            const response = await instance.post(`/api/project_detail/${project_id}/comment`, {
                comment: newComment,
            });

            console.log("댓글 등록 성공:", response.data); // 성공 시 응답 데이터 출력
            setNewComment(""); // 댓글 입력 필드 초기화
        } catch (error) {
            console.error("댓글을 등록하는 중 오류가 발생했습니다:", error);
            console.log("요청 URL:", `/api/project_detail/${project_id}/comment`);
            console.log("요청 데이터:", { comment: newComment });
            console.log("에러 응답 데이터:", error.response?.data);
        }
    };

    const handleReplyClick = (commentId) => {
        setActiveCommentId(activeCommentId === commentId ? null : commentId);
    };

    return (
        <S.Container>
            {/* 댓글 입력 및 아이콘 클릭 시 postComment 호출 */}
            <S.InputComment>
                <S.CommentIcon src={PostComment} onClick={postComment} />
                <S.CommentInput
                    placeholder="댓글을 입력해 보세요!"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
            </S.InputComment>

            <S.CommentBox>
                {comments.map((comment) => (
                    <S.CommentOrigin key={comment.id}>
                        <S.Comment_who>{comment.comment_writer}</S.Comment_who>
                        <S.Comment_what>{comment.comment}</S.Comment_what>
                        <S.Comment_when>
                            {comment.upload_date}
                            <S.GoReply onClick={() => handleReplyClick(comment.id)}>답글 쓰기</S.GoReply>
                        </S.Comment_when>

                        {comment.in_comment.map((reply) => (
                            <S.CommentReply key={reply.id}>
                                <S.Comment_who>{reply.in_comment_writer}</S.Comment_who>
                                <S.Comment_what>{reply.in_comment}</S.Comment_what>
                                <S.Comment_when>{reply.upload_date}</S.Comment_when>
                            </S.CommentReply>
                        ))}

                        {activeCommentId === comment.id && <CommentReply parentCommentId={comment.id} />}
                    </S.CommentOrigin>
                ))}
            </S.CommentBox>
        </S.Container>
    );
};

export default CommunityBox;
