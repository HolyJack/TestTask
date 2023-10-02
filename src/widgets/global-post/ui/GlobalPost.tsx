import { postApi } from "~entities/post";
import { Post } from "~entities/post/ui/post/Post";
import { Container } from "~shared/ui";

interface IGlobalPost {
  postId: number;
}

export function GlobalPost(props: IGlobalPost) {
  const { postId } = props;
  const {
    isLoading,
    isError,
    isSuccess,
    error,
    data: post,
  } = postApi.usePost(postId);
  return (
    <Container>
      <Post
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        error={error}
        post={post}
        postRender={(post) => (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </>
        )}
      />
    </Container>
  );
}
