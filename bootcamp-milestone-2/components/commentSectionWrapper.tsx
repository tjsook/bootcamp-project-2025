"use client";

import { useRouter } from "next/navigation";
import CommentForm from "./commentForm";

type CommentSectionWrapperProps = {
  slug: string;
};

export default function CommentSectionWrapper({
  slug,
}: CommentSectionWrapperProps) {
  const router = useRouter();

  const handleCommentAdded = () => {
    router.refresh();
  };

  return <CommentForm slug={slug} onCommentAdded={handleCommentAdded} />;
}
