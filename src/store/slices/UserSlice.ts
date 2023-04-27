import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    isLoggedin: false,
  },
  reducers: {
    addToken(state, action) {
      state.token = action.payload.token;
    },
    loginSucces(state) {
      state.isLoggedin = true;
    },
  },
});

export default UserSlice;

export const { addToken, loginSucces } = UserSlice.actions;
