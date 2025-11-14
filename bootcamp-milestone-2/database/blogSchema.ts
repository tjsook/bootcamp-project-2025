import mongoose, { Schema } from "mongoose";

export type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string; // for preview
  content: string; // text content for individual blog page
  image: string; // url for string in public
  imageAlt: string; // alt for image
};

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true, alias: "image_alt" }, 
  content: { type: String, required: true },
});

blogSchema.set("toJSON", { virtuals: true, aliases: true });
blogSchema.set("toObject", { virtuals: true, aliases: true });

const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
