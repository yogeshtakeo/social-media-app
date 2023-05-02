import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosBase from "../../axiosBase";

export const getPosts = createAsyncThunk("posts/fetch", () => {
  return axiosBase().get("posts");
});

const PostSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.data = [];
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data.data;
      state.error = null;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

export default PostSlice;
