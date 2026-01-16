import { apiProcessor } from "../../services/authApi";

const apibaseurl = "http://localhost:3000";
const memberApi = apibaseurl + "/api/tenant/members";

export const createNewMemberApi = async (payload, orgId) => {
  const obj = {
    method: "post",
    url: `${memberApi}?orgId=${orgId}`,
    payload,
    showToast: true,
    isPrivateCall: true,
  };

  return apiProcessor(obj);
};
