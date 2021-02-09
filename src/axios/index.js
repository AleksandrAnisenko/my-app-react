import axios from "axios";

export function axiosGet(url, method) {
  return axios({
    url,
    method,
  });
}
