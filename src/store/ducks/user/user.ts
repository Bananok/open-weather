import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
  },
  reducers: {
    addUser(state, action: PayloadAction<{ userName: string }>) {
      state.user = action.payload.userName;
    },
  },
});

export const { actions, reducer } = userSlice;
