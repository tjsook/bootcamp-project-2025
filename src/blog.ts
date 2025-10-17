type Blog = {
  title: string;
  date: string;
  description: string;
  content: string;
  image: string;
  imageAlt: string;
  slug: string;
};

(function () {
  const blogs: Blog[] = [
    {
      title: "Blog 1",
      date: "Oct 16, 2025",
      description: "This is my first blog using the H4I Milestone 1",
      content: "Testing content!.",
      image: "../assets/img1.jpg",
      imageAlt: "This is a test image of me and my friends",
      slug: "blog-number-one",
    },
    {
      title: "Blog 2",
      date: "Also, Oct 16, 2025",
      description: "This is my second blog using the H4I Milestone 1",
      content: "Testing content!.",
      image: "../assets/img2.jpg",
      imageAlt: "This is a test image of me and my friends",
      slug: "blog-number-two",
    },
  ];

  const blogContainer = document.getElementById("blog-container");

  blogs.forEach((blog) => {
    const blogLink = document.createElement("a");
    blogLink.href = `blogs/${blog.slug}.html`;
    blogLink.className = "blog-link";
    blogLink.style.textDecoration = "none";
    blogLink.style.color = "inherit";

    const blogPostDiv = document.createElement("div");
    blogPostDiv.className = "blog-post";

    const title = document.createElement("h1");
    title.textContent = blog.title;
    title.className = "blog-title";

    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.className = "blog-image";

    const description = document.createElement("p");
    description.textContent = blog.description;
    description.className = "blog-description";

    const date = document.createElement("p");
    date.textContent = blog.date;
    date.className = "blog-date";

    const readMoreBtn = document.createElement("button");
    readMoreBtn.textContent = "Read";
    readMoreBtn.className = "read-more-btn";

    blogPostDiv.appendChild(title);
    blogPostDiv.appendChild(date);
    blogPostDiv.appendChild(image);
    blogPostDiv.appendChild(description);
    blogPostDiv.appendChild(readMoreBtn);
    blogLink.appendChild(blogPostDiv);

    if (blogContainer) {
      blogContainer.appendChild(blogLink);
    }
  });
})();
