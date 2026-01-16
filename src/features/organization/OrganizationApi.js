import { apiProcessor } from "../../services/authApi";

const apibaseUrl = "http://localhost:3000";
// const orgApi = apibaseUrl + "/api/organizations";
const orgApi = (import.meta.env.VITE_API_URL || "/api") + "/organizations";

export const createOrgApi = async (payload) => {
  const obj = {
    method: "post",
    url: orgApi,
    payload,
    showToast: true,
    isPrivateCall: true,
  };
  return apiProcessor(obj);
};

export const getAllOrgApi = async () => {
  const obj = {
    method: "get",
    url: orgApi,
    isPrivateCall: true,
  };
  return apiProcessor(obj);
};

export const getSingleOrgApi = async (id) => {
  const obj = {
    method: "get",
    url: orgApi + "/" + id,
    isPrivateCall: true,
  };
  return apiProcessor(obj);
};
