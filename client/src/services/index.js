import { request } from "../utils";

export function getUserInfo(id) {
  return request(`/api/user/${id}`);
}
