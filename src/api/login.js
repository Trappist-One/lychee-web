import service from "../config/axios/service"
// 登录方法
export function login(username, password, captchaVerification, socialType, socialCode, socialState) {
    const data = {
      username,
      password,
      captchaVerification,
      // 社交相关
      socialType,
      socialCode,
      socialState
    }
    return service({
      url: '/system/auth/login',
      method: 'post',
      data: data
    })
  }

  // 获取验证码
export function getCodeImg() {
    return service({
      url: '/captchaImage',
      method: 'get'
    })
  }