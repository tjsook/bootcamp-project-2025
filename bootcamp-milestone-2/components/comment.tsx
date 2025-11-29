import React from "react";
import type { IComment } from "@/database/blogSchema";

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return new Date(time).toLocaleString("en-US", options);
}

function Comment({ comment }: CommentProps) {
  return (
    <div className="comment">
      <h4 className="comment-user">{comment.user}</h4>
      <p className="comment-text">{comment.comment}</p>
      <span className="comment-time">{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;
