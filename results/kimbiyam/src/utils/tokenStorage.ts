const ACCESS_TOKEN = "ACCESS_TOKEN";

const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

const setToken = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
};

const clearToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

const tokenStorage = {
  getToken,
  setToken,
  clearToken,
};

export default tokenStorage;
