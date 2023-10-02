import { ReactNode } from "react";
import styled from "styled-components";
import { TPost } from "~entities/post/api/postApi";

interface IPostList {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: Error | null;
  posts?: TPost[];
  page: number;
  pageSize: number;
  renderPosts: (posts: TPost[], page: number, pageSize: number) => ReactNode;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPageAction: ReactNode;
  prevPageAction: ReactNode;
}

const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export function PostList(props: IPostList) {
  const {
    isLoading,
    isError,
    isSuccess,
    error,
    posts,
    page,
    pageSize,
    renderPosts,
    hasNextPage,
    hasPrevPage,
    nextPageAction,
    prevPageAction,
  } = props;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error?.message}</div>}
      {isSuccess &&
        (posts && posts.length > 0 ? (
          renderPosts(posts, page, pageSize)
        ) : (
          <div>No posts...</div>
        ))}
      {isSuccess && (
        <ButtonBox>
          {hasPrevPage && prevPageAction}
          {hasNextPage && nextPageAction}
        </ButtonBox>
      )}
    </>
  );
}
