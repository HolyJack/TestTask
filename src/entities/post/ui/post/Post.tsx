import { ReactNode } from "react";
import { TPost } from "~entities/post/api/postApi";

interface IPost {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: Error | null;
  post?: TPost;
  postRender: (post: TPost) => ReactNode;
}

export function Post(props: IPost) {
  const { isLoading, isError, isSuccess, error, post, postRender } = props;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error?.message}</div>}
      {isSuccess && (post ? postRender(post) : <p>Post not found</p>)}
    </>
  );
}
