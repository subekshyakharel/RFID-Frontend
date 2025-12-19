import { getAllOrgApi } from "./OrganizationApi";

export const getAllOrgAction = () => async (dispatch) => {
  const result = await getAllOrgApi();
  console.log(result);
};
