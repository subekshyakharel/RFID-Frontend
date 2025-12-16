import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // admin: {},
  admin: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
  },
});

const { reducer, actions } = adminSlice;
export const { setAdmin } = actions;
export default reducer;
