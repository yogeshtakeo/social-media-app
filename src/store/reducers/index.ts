import PostSlice from "../slices/PostSlice";
import UserSlice from "../slices/UserSlice";

const reducer = {
  users: UserSlice.reducer,
  posts: PostSlice.reducer,
};

export default reducer;
