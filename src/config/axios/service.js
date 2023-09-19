import axios from "axios";
import { getAccessToken, getTenantId, getRefreshToken, setToken } from "@/utils/auth";
import { getTenantEnable } from "@/utils/lychee";
import {refreshToken} from "@/api/login";
import errorCode from "@/utils/errorCode";
import SnackbarUtils from "../snackbar/SnackbarUtils";
import i18next from "i18next";
import { confirmDialog } from "@/ui/components/LyConfirmDialog";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { sleep } from "@/utils/dateUtils";

const t = i18next.t;

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
// 是否显示重新登录
export let isRelogin = { show: false };
// 请求队列
let requestList = []
// 是否正在刷新中
let isRefreshToken = false

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
    NProgress.start();
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    if (getAccessToken() && !isToken) {
      config.headers["Authorization"] = "Bearer " + getAccessToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    // 设置租户
    if (getTenantEnable()) {
      const tenantId = getTenantId();
      if (tenantId) {
        config.headers["tenant-id"] = tenantId;
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
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  async (res) => {
    NProgress.done();
    sleep(2000)
    // 未设置状态码则默认成功状态
    const code = res.data.code || res.data.status || 200;
    // 获取错误信息
    const msg =
      errorCode[code] ||
      res.data.msg ||
      res.data.message ||
      errorCode["default"];

    if (code === 401) {
       // 如果未认证，并且未进行刷新令牌，说明可能是访问令牌过期了
    if (!isRefreshToken) {
      isRefreshToken = true;
      // 1. 如果获取不到刷新令牌，则只能执行登出操作
      if (!getRefreshToken()) {
        return handleAuthorized();
      }
      // 2. 进行刷新访问令牌
      try {
        const refreshTokenRes = await refreshToken()
        // 2.1 刷新成功，则回放队列的请求 + 当前请求
        setToken(refreshTokenRes.data)
        requestList.forEach(cb => cb())
        return service(res.config)
      } catch (e) {// 为什么需要 catch 异常呢？刷新失败时，请求因为 Promise.reject 触发异常。
        // 2.2 刷新失败，只回放队列的请求
        requestList.forEach(cb => cb())
        // 提示是否要登出。即不回放当前请求！不然会形成递归
        return handleAuthorized();
      } finally {
        requestList = []
        isRefreshToken = false
      }
    } else {
      // 添加到队列，等待刷新获取到新的令牌
      return new Promise(resolve => {
        requestList.push(() => {
          res.config.headers['Authorization'] = 'Bearer ' + getAccessToken() // 让每个请求携带自定义token 请根据实际情况自行修改
          resolve(service(res.config))
        })
      })
    }
    } else if (code === 500) {
      SnackbarUtils.error(t(msg));
      return Promise.reject(new Error(msg));
    } else if (code !== 200) {
      SnackbarUtils.error(t(msg));
      return Promise.reject(new Error(msg));
    } else {
      return res.data;
    }
  },
  (error) => {
    NProgress.done();
    let { message } = error;
    if (message === "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      // message = "系统接口" + message.substr(message.length - 3) + "异常";
      message = "服务器异常，获取数据失败";
    }
    SnackbarUtils.error(t(message));
    return Promise.reject(new Error(message));
  }
);

function handleAuthorized() {
  if (!isRelogin.show) {
    isRelogin.show = true;
    confirmDialog.open('系统提示', '登录状态已过期，您可以继续留在该页面，或者重新登录', ()=>{window.location.href="/index"})
  }
  return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
}


export default service;
