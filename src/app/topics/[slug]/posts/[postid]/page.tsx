import Link from "next/link";
import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/paths";
import { Suspense } from "react";
import PostShowLoading from "@/components/posts/post-show-loading";
interface PostShowPageProps {
  params: {
    slug: string;
    postid: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postid } = params;
  console.log("slug = ", slug, "postId", postid);

  return (
    <div className="space-y-3">
      <Link
        className="underline decoration-solid"
        href={paths.topicShowPath(slug)}
      >
        {"< "}Back to {slug}
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postid={postid} />
      </Suspense>
      <CommentCreateForm postId={postid} startOpen />
      <CommentList postid={postid} />
    </div>
  );
}
