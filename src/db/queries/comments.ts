import { Comment } from "@prisma/client";
import prisma from "@/db";
import { cache } from "react";

export type CommentWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};

export const fetchCommentsByPostId = cache(
  (postid: string): Promise<CommentWithAuthor[]> => {
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
);
