import User from "../models/User";
import apiClient from "./apiClient";

const API_USERS_ME = "/v1/users/me";

const getUserProfile = async () => {
  try {
    const response = await apiClient.get(API_USERS_ME);
    const { data } = response;

    const user = new User({ ...data });

    return user;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const userApi = { getUserProfile };

export default userApi;
