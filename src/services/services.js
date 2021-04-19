import API from "./api";
import { endpoints } from "./endpoints";

export const services = {
  loginRequestService: (data) => API.post(endpoints.users, data),
  getUserRequestService: () => API.get(endpoints.userinfo),
  getPostRequestService: () => API.get(endpoints.posts),
};
