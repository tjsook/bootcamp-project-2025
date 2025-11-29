import React from "react";
import type { IComment } from "@/database/blogSchema";

type CommentProps = {
  comment: IComment;
};

/**
 * Formats a Date object into a readable string format
 * @param time - Date object to format
 * @returns Formatted date string (e.g., "September 16 2024 8:30AM")
 */
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

/**
 * Comment component displays a single comment with user, timestamp, and content
 */
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
