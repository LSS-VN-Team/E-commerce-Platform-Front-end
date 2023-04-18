import axios, { AxiosRequestConfig } from "axios";

import { TOKEN, ID } from "constants/storage";
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";
export const axiosRequest = async (
  config: AxiosRequestConfig,
  unauthorized?: boolean,
) => {
  const axiosConfig: AxiosRequestConfig = {
    ...config,
    baseURL: BACKEND_URL,
  };

  if (!unauthorized && localStorage.getItem(TOKEN) && localStorage.getItem(ID)) {
    axiosConfig.headers = {
      Authorization: `Bearer ${localStorage.getItem(TOKEN)} ${localStorage.getItem(ID)}`,
    };
  }

  const response = await axios(axiosConfig);
  return response.data.data;
};
