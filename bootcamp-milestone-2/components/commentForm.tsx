"use client";

import React, { useState } from "react";

type CommentFormProps = {
  slug: string;
  onCommentAdded: () => void;
};

export default function CommentForm({
  slug,
  onCommentAdded,
}: CommentFormProps) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    if (!user.trim() || !comment.trim()) {
      setError("Please fill in both fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`/api/blog/${slug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user.trim(),
          comment: comment.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit comment");
      }

      setUser("");
      setComment("");
      setSuccess(true);
      onCommentAdded();
    } catch (err) {
      setError("Failed to submit comment. Please try again.");
      console.error("Error submitting comment:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="comment-form-container">
      <h3 className="comment-form-title">Leave a Comment</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="form-group">
          <label htmlFor="user" className="form-label">
            Name *
          </label>
          <input
            type="text"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter your name"
            className="form-input"
            disabled={isSubmitting}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="comment" className="form-label">
            Comment *
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts..."
            className="form-textarea"
            rows={4}
            disabled={isSubmitting}
            required
          />
        </div>

        {error && <div className="form-error">{error}</div>}
        {success && (
          <div className="form-success">
            Comment submitted successfully! Refreshing...
          </div>
        )}

        <button
          type="submit"
          className="form-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Post Comment"}
        </button>
      </form>
    </div>
  );
}
