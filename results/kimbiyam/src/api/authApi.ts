import apiClient from "./apiClient";

const API_LOGIN = "/auth/login";

const login = async () => {
  try {
    const response = await apiClient.post(API_LOGIN);
    const { data } = response;

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const authApi = { login };

export default authApi;
