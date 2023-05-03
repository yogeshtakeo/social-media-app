import { createSlice } from '@reduxjs/toolkit';

const ToastSlice = createSlice({
  name: 'toast',
  initialState: {
    message: ' ',
    error: false,
  },
  reducers: {
    successToast(state) {
      state.message = 'successful';
      state.error = false;
    },
    errorToast(state, action) {
      state.message = action.payload.message;
      state.error = true;
    },
    defaultState(state) {
        state.message = '';
        state.error = false;
    }
  },
});

export const { successToast, errorToast } = ToastSlice.actions;

export default ToastSlice;
