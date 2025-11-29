import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params;

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json({ error: "Blog not found." }, { status: 404 });
  }
}

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params;

  try {
    const body = await req.json();
    const { user, comment } = body;

    if (!user || !comment) {
      return NextResponse.json(
        { error: "User and comment are required." },
        { status: 400 }
      );
    }

    const blog = await blogSchema
      .findOneAndUpdate(
        { slug },
        {
          $push: {
            comments: {
              user,
              comment,
              time: new Date(),
            },
          },
        },
        { new: true }
      )
      .orFail();

    return NextResponse.json(blog, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to add comment or blog not found." },
      { status: 404 }
    );
  }
}
