import { useState } from "react";
import { postReply } from "../api/projectComment";

export const useReplyComment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitReply = async (project_id, comment_id, replyText) => {
    setLoading(true);
    setError(null);
    try {
      const newReply = await postReply(project_id, comment_id, replyText);
      console.log("새 대댓글 추가:", newReply);
      return newReply; // 성공 시 새 대댓글 데이터 반환
    } catch (err) {
      setError("대댓글 작성에 실패했습니다.");
      console.error("대댓글 작성 에러:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submitReply, loading, error };
};
