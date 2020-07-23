// axois Api here
import axois from "axios";
import config from "../config/config";

export default () => {
  return axois.create({
    baseURL: config.baseURL,
  });
};
