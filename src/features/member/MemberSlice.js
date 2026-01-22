import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMembers: [],
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setAllMember: (state, action) => {
      state.allMembers = action.payload;
    },
  },
});

const { reducer, actions } = memberSlice;
export const { setAllMember } = actions;
export default reducer;
