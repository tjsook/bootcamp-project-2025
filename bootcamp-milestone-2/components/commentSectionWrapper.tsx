"use client";

import { useRouter } from "next/navigation";
import CommentForm from "./commentForm";

type CommentSectionWrapperProps = {
  slug: string;
};

/**
 * Wrapper component to handle comment form submission and page refresh
 * This is needed because the parent blog page is a server component
 */
export default function CommentSectionWrapper({
  slug,
}: CommentSectionWrapperProps) {
  const router = useRouter();

  const handleCommentAdded = () => {
    // Refresh the page to show the new comment
    router.refresh();
  };

  return <CommentForm slug={slug} onCommentAdded={handleCommentAdded} />;
}
