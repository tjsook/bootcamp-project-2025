import Link from "next/link";
import Image from "next/image";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";
import { notFound } from "next/navigation";
import Comment from "@/components/comment";
import CommentSectionWrapper from "@/components/commentSectionWrapper";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;

  await connectDB();
  const blog = await BlogModel.findOne({ slug: resolvedParams.slug });

  // If blog not found, show 404
  if (!blog) {
    notFound();
  }

  return (
    <main className="main-blog-single">
      <div className="back-button">
        <Link href="/blog" style={{ textDecoration: "none" }}>
          ← back to blog
        </Link>
        <Link href="/" style={{ textDecoration: "none", marginLeft: "20px" }}>
          home
        </Link>
      </div>

      <article className="blog-article">
        <header className="blog-header">
          <h1 className="blog-title-single">{blog.title}</h1>
          <p className="blog-date-single">{blog.date.toLocaleDateString()}</p>
        </header>

        <div className="blog-image-container">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            width={600}
            height={400}
            className="blog-image-single"
          />
        </div>

        <div className="blog-content">
          {blog.content
            .split("\n\n")
            .map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>

        {/* Comments Section */}
        <section className="comments-section">
          <h2 className="comments-title">
            Comments ({blog.comments?.length || 0})
          </h2>
          <div className="comments-list">
            {blog.comments && blog.comments.length > 0 ? (
              blog.comments.map((comment: any, index: number) => (
                <Comment key={index} comment={comment} />
              ))
            ) : (
              <p className="no-comments">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>

          {/* Comment Form */}
          <CommentSectionWrapper slug={resolvedParams.slug} />
        </section>
      </article>
    </main>
  );
}
