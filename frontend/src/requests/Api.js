import axios from "axios";
import store from "../store/index";

export default () => {
  return axios.create({
    baseURL: process.env.VUE_APP_API_ENDPOINT,

    headers: {
      Authorization: `Bearer ${store.state.token}`,
    },
  });
};
