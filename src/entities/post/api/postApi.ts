import { useQuery } from "@tanstack/react-query";

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchPost(id: number) {
  return await fetch(`${POST_URL}/${id}`).then((data) => data.json());
}

async function fetchPostList() {
  return await fetch(`${POST_URL}`).then((data) => data.json());
}

export function usePost(id: number) {
  return useQuery<TPost, Error, TPost, [string, number]>({
    queryKey: ["post", id],
    queryFn: async () => fetchPost(id),
  });
}

export function usePostList() {
  return useQuery<TPost[], Error, TPost[], [string]>({
    queryKey: ["post-list"],
    queryFn: fetchPostList,
  });
}
