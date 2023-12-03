import { Comment } from "@prisma/client";
import prisma from "@/db";

export type CommentWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};

export function fetchCommentsByPostId(
  postid: string
): Promise<CommentWithAuthor[]> {
  return prisma.comment.findMany({
    where: { postId: postid },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
}
