import { useParams } from "react-router";
import { GlobalPost } from "~widgets/global-post";

export function PostPage() {
  const params = useParams();
  const postId = Number(params.postId);

  return <GlobalPost postId={postId} />;
}
