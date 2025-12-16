import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.withCredentials = true; // ✅ Always send cookies with every request

export const apiProcessor = async ({
  method,
  url,
  payload,
  showToast,
  isPrivateCall,
}) => {
  try {
    const config = {};

    if (isPrivateCall) {
      config.withCredentials = true;
    }

    const responsePending = axios({
      method,
      url,
      data: payload,
      withCredentials: true,
    });

    if (showToast) {
      toast.promise(responsePending, {
        pending: "Please wait...",
      });
    }

    const { data } = await responsePending;
    showToast && toast.success(data.message);
    return data;
  } catch (error) {
    const msg = error?.response?.data?.message || error.message;
    showToast && toast.error(msg);
    console.log("API Error:", msg);
    return {
      status: "error",
      message: msg,
    };
  }
};
