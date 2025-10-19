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

export const logoutAdminApi = async () => {
  const obj = {
    method: "post",
    url: authApi + "/logout",
    showToast: true,
  };
  return apiProcessor(obj);
};

export const fetchAdminApi = async () => {
  try {
    const obj = {
      method: "get",
      url: authApi + "/me",
      showToast: true,
      isPrivateCall: true,
    };
    return apiProcessor(obj);
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      message: error.message,
    };
  }
};
