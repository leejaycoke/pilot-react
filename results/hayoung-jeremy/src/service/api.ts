import axios from "axios";

// const apiClient = axios.create({
//   baseURL: "http://localhost:5000",
// });
//
// export const token = localStorage.getItem("userToken");
//
// apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
//
// export default apiClient;

class ApiClient {
  private accessToken?: string | null;
  private service: any;

  constructor(accessToken?: string | null) {
    this.accessToken = accessToken;
    let service = axios.create({
      timeout: 1000,
      baseURL: "http://localhost:5000",
    });
    service.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
    service.defaults.headers.post["Content-Type"] = "application/json";
    this.service = service;
  }
  public get = (url: string, accessToken: string | unknown) => {
    return this.service.get(url, accessToken);
  };
  public post = (url: string, payload: any) => {
    return this.service.post(url, payload);
  };
}

// export default ApiClient;

const userToken = localStorage.getItem("userToken");

const apiClient = new ApiClient(userToken);

export default apiClient;
