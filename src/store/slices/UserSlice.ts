import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosBase from "../../axiosBase";

export interface Data {
  token: string;
}

export interface ResponseData {
  error: boolean;
  status: number;
  message: string;
  data: Data;
}

interface UserLoginType {
  username: string;
  password: string;
}

export const postLogin = createAsyncThunk(
  "user/logingin",
  async ({ username, password }: UserLoginType) => {
    try {
      const response = await axiosBase().post("users/login", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const postRegister = createAsyncThunk(
  "user/registering",
  async ({ username, password }: UserLoginType) => {
    try {
      const response = await axiosBase().post("users/register", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
const UserSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    isLoggedin: false,
    loading: false,
  },
  reducers: {
    logout(state) {
      state.token = "";
      state.isLoggedin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postLogin.fulfilled, (state, action) => {
        state.loading = false;
        const { error, data, message } = action.payload;
        if (!error) {
          state.token = data.token;
          state.isLoggedin = true;
        } else {
          console.log(action.payload);
          state.token = "";
          state.isLoggedin = false;
          state.loading = false;
        }
      })
      .addCase(postLogin.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(postRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(postRegister.fulfilled, (state, action) => {
        state.loading = false;
        const { error, message } = action.payload;
        if (!error) {
          state.token = "";
          state.isLoggedin = false;
          state.loading = false;
        } else {
          console.log(action.payload);
          state.token = "";
          state.isLoggedin = false;
          state.loading = false;
        }
      })
      .addCase(postRegister.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { logout } = UserSlice.actions;
export default UserSlice;