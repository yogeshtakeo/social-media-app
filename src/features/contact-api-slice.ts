import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface PostsApiResponse {
  _id: string;
  description: string;
  time: string;
  like: number;
  __v: number;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/posts" }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsApiResponse, unknown>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = api;
