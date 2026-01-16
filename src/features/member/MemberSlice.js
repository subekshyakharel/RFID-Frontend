import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  member: [],
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action) => {
      state.member = action.payload;
    },
  },
});

const { reducer, actions } = memberSlice;
const { setMember } = actions;
export default reducer;
