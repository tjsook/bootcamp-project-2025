import mongoose, { Schema } from "mongoose";

// TypeScript type for Project
export type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  link?: string; // Optional: link to live project
  github?: string; // Optional: link to GitHub repo
  technologies?: string[]; // Optional: array of technologies used
};

// Mongoose schema for Project
const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true, alias: "image_alt" },
  link: { type: String, required: false },
  github: { type: String, required: false },
  technologies: { type: [String], required: false },
});

// Enable virtuals and aliases when converting to JSON
projectSchema.set("toJSON", { virtuals: true, aliases: true });
projectSchema.set("toObject", { virtuals: true, aliases: true });

// Define the collection and model
const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
