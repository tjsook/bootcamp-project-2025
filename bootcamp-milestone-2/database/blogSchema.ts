import mongoose, { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

export type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  imageAlt: string;
  comments: IComment[];
};

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true, alias: "image_alt" },
  content: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: true, default: new Date() },
    },
  ],
});

blogSchema.set("toJSON", { virtuals: true, aliases: true });
blogSchema.set("toObject", { virtuals: true, aliases: true });

const Blog =
  mongoose.models["Blogs"] || mongoose.model("Blogs", blogSchema, "Blogs");

export default Blog;
