import { useState } from "react";
import styled from "styled-components";
import { postApi } from "~entities/post";
import { TPost } from "~entities/post/api/postApi";
import { PostList } from "~entities/post/ui/post-list/PostList";
import { SearchBar } from "~features/search-bar";
import { Card, CardsContainer, Button, Container } from "~shared/ui";

const H1 = styled.h1`
  margin-left: auto;
  margin-right: auto;
`;

const PAGE_SIZE = 10;

export function GlobalPostList() {
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState("");
  const { isLoading, isError, isSuccess, error, data } = postApi.usePostList();

  const posts = isSuccess
    ? data.filter(
        (post: TPost) =>
          post.title.includes(filter) || post.body.includes(filter),
      )
    : data;

  const hasPrevPage = isSuccess && posts && page - 1 >= 0 ? true : false;
  const hasNextPage =
    isSuccess && posts && (page + 1) * PAGE_SIZE < posts.length ? true : false;

  return (
    <Container>
      <H1>Posts</H1>
      <SearchBar filterSetter={setFilter} placeholder="Search post" />
      <PostList
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        error={error}
        posts={posts}
        page={page}
        pageSize={PAGE_SIZE}
        renderPosts={(posts, page, PAGE_SIZE) => (
          <CardsContainer>
            {posts
              .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
              .map((post) => (
                <Card link={`post/${post.id}`} key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </Card>
              ))}
          </CardsContainer>
        )}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        nextPageAction={
          <Button onClick={() => setPage((prev) => prev + 1)}>Next page</Button>
        }
        prevPageAction={
          <Button onClick={() => setPage((prev) => prev - 1)}>
            Previous Page
          </Button>
        }
      />
    </Container>
  );
}
