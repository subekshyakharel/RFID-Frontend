import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  org: {},
};

const orgSlice = createSlice({
  name: "org",
  initialState,
  reducers: {
    setOrg: (state, action) => {
      state.org = action.payload;
    },
  },
});

const { reducer, actions } = orgSlice;
export const { setOrg } = actions;
export default reducer;
