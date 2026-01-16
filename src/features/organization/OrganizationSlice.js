import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  org: [],
  singleOrg: {},
};

const orgSlice = createSlice({
  name: "org",
  initialState,
  reducers: {
    setOrg: (state, action) => {
      state.org = action.payload;
    },
    setSingleOrg: (state, action) => {
      state.singleOrg = action.payload;
    },
  },
});

const { reducer, actions } = orgSlice;
export const { setOrg, setSingleOrg } = actions;
export default reducer;
