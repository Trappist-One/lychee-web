import axios from "axios";
import { getAccessToken, getTenantId } from "@/utils/auth";
import {getPath, getTenantEnable} from "@/utils/lychee";


import errorCode from "@/utils/errorCode";
import SnackbarUtils from "../snackbar/SnackbarUtils";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
// 是否显示重新登录
export let isRelogin = { show: false };

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_APP_BASE_URL, // 此处的 /admin-api/ 地址，原因是后端的基础路径为 /admin-api/
  // 超时
  timeout: 30000,
  // 禁用 Cookie 等信息
  withCredentials: false,
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    if (getAccessToken() && !isToken) {
      config.headers["Authorization"] = "Bearer " + getAccessToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
      // 设置租户
  if (getTenantEnable()) {
    const tenantId = getTenantId();
    if (tenantId) {
      config.headers['tenant-id'] = tenantId;
    }
  }
    // get请求映射params参数
    if (config.method === "get" && config.params) {
      let url = config.url + "?";
      for (const propName of Object.keys(config.params)) {
        const value = config.params[propName];
        const part = encodeURIComponent(propName) + "=";
        if (value !== null && typeof value !== "undefined") {
          if (typeof value === "object") {
            for (const key of Object.keys(value)) {
              const params = propName + "[" + key + "]";
              const subPart = encodeURIComponent(params) + "=";
              url += subPart + encodeURIComponent(value[key]) + "&";
            }
          } else {
            url += part + encodeURIComponent(value) + "&";
          }
        }
      }
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    }
    return config;
  },
  (error) => {
    // console.log(error)
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || res.data.status || 200;
    // 获取错误信息
    const msg =
      errorCode[code] ||
      res.data.msg ||
      res.data.message ||
      errorCode["default"];
    if (code === 401) {
      SnackbarUtils.error(msg);
    } else if (code === 500) {
      SnackbarUtils.error(msg);
      return Promise.reject(new Error(msg));
    } else if (code !== 200) {
      SnackbarUtils.error(msg);
      return Promise.reject(new Error(msg));
    } else {
      return res.data;
    }
  },
  (error) => {
    // console.log('err', error)
    let { message } = error;
    if (message === "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      // message = "系统接口" + message.substr(message.length - 3) + "异常";
      message = "服务器异常，获取数据失败";
    }
    SnackbarUtils.error(message);
    return Promise.reject(error);
  }
);

export default service;
