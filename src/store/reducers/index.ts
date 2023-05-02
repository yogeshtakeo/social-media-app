import { combineReducers } from "@reduxjs/toolkit";
import PostSlice from "../slices/PostSlice";
import UserSlice from "../slices/UserSlice";

const reducer = combineReducers({
  users: UserSlice.reducer,
  posts: PostSlice.reducer,
});

export default reducer;
