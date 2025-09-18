import { apiProcessor } from "../../services/authApi";

const apibaseUrl = "http://localhost:3000";
const authApi = apibaseUrl + "/api/auth";

export const loginAdminApi = async (payload) => {
  const obj = {
    method: "post",
    url: authApi + "/login",
    payload,
    showToast: true,
  };
  return apiProcessor(obj);
};
