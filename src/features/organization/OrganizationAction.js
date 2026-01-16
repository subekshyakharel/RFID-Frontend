import { getAllOrgApi, getSingleOrgApi } from "./OrganizationApi";
import { setOrg, setSingleOrg } from "./OrganizationSlice";

export const getAllOrgAction = () => async (dispatch) => {
  const { count, message, organizations, status } = await getAllOrgApi();
  console.log(count, message, organizations, status);

  if (status === true) {
    dispatch(setOrg(organizations));
  }
};

export const getSingleOrgAction = (id) => async (dispatch) => {
  const { message, organization, status } = await getSingleOrgApi(id);
  console.log(message, organization, status);

  if (status === true) {
    dispatch(setSingleOrg(organization));
  }
};
