interface PostShowProps {
  postid: string;
}

import prisma from "@/db";
import { notFound } from "next/navigation";

export default async function PostShow({ postid }: PostShowProps) {
  const post = await prisma.post.findFirst({
    where: {
      id: postid,
    },
  });
  console.log(post, "post");

  if (!post) notFound();

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold my-2">{post.title}</h1>
      <p className="p-4 border rounded">{post.content}</p>
    </div>
  );
}
