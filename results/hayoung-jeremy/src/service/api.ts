import axios, { AxiosRequestConfig } from "axios";
//
// const apiClient = axios.create({
//   timeout: 1000,
//   baseURL: "http://localhost:5000",
// });
//
// export const accessToken = localStorage.getItem("userToken");
// console.log("--------------- TOKEN ---------------");
// console.log(accessToken);
//
// apiClient.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
// apiClient.defaults.headers.post["Content-Type"] = "application/json";
//
// export default apiClient;

class ApiClient {
  // private accessToken?: string | null;
  private service: any;

  // constructor(accessToken?: string | null) {
  constructor() {
    // this.accessToken = accessToken;
    // service.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
    // service.defaults.headers.post["Content-Type"] = "application/json";
    this.service = axios.create({
      timeout: 1000,
      baseURL: "http://localhost:5000",
      headers: {
        // Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
  }
  public get = (url: string, config: AxiosRequestConfig) => {
    return this.service.get(url, config);
  };
  public post = (url: string, payload: any) => {
    return this.service.post(url, payload);
  };
}

// const userToken = localStorage.getItem("userToken");

// const apiClient = new ApiClient(userToken);
const apiClient = new ApiClient();

export default apiClient;
