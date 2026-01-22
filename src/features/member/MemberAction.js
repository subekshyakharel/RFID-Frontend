import { getAllMemberApi } from "./MemberApi";
import { setAllMember } from "./MemberSlice";

export const getAllMemberAction = (id) => async (dispatch) => {
  const { status, members } = await getAllMemberApi(id);

  if (status === true) {
    dispatch(setAllMember(members));
  }
};
