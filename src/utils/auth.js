import cookies from 'react-cookies'

const TokenKey = 'Admin-Token'

export function getToken() {
  return cookies.load(TokenKey)
}

export function setToken(token) {
  return cookies.set(TokenKey, token)
}

export function removeToken() {
  return cookies.remove(TokenKey)
}
