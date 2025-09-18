import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.withCredentials = true; // ✅ Always send cookies with every request

export const apiProcessor = async ({ method, url, payload, showToast }) => {
  try {
    const responsePending = axios({
      method,
      url,
      data: payload,
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

    // No JWT refresh needed here — cookie will expire automatically
    return {
      status: "error",
      message: msg,
    };
  }
};
