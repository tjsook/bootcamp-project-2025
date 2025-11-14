import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export default async function BlogPage() {
  await connectDB();
  const blogs = await Blog.find().sort({ date: -1 }).orFail();

  return (
    <main className="main-bio">
      <div id="blog-container">
        {blogs.map((blog) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            slug={blog.slug}
            date={blog.date}
            description={blog.description}
            content={blog.content}
            image={blog.image}
            imageAlt={blog.imageAlt}
          />
        ))}
      </div>
    </main>
  );
}
