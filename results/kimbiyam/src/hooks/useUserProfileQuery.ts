import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import userApi from "../api/userApi";
import User from "../models/User";

const useUserProfileQuery = (
  options: UseQueryOptions<User, AxiosError> = {}
) => {
  return useQuery("myProfile", userApi.getUserProfile, { ...options });
};

export default useUserProfileQuery;
