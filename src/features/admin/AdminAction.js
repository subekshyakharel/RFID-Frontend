import { fetchAdminApi } from "./AdminApi";
import { setAdmin } from "./AdminSlice.js";

export const fetchAdminAction = () => async (dispatch) => {
  const { admin, status } = await fetchAdminApi();
  status === true && admin?.id && dispatch(setAdmin(admin));
};
