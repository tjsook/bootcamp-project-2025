import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/database/blogSchema";
import style from "./blogPreview.module.css";

export default function BlogPreview(props: Blog) {
  return (
    <Link href={`/blog/${props.slug}`} className="blog-link">
      <div className={style.div}>
        <h1 className="blog-title">{props.title}</h1>
        <p className="blog-date">{new Date(props.date).toLocaleDateString()}</p>
        <div>
          <Image
            src={props.image}
            alt={props.imageAlt}
            width={500}
            height={500}
            className="blog-image"
          />
        </div>
        <p className="blog-description">{props.description}</p>
        <button className="read-more-btn">Read</button>
      </div>
    </Link>
  );
}
