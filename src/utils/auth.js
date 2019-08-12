import Cookies from 'js-cookie'

const TokenKey = 'admin_token'
const UsernameKey = 'admin_username'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}


export function getUsername() {
  return Cookies.get(UsernameKey)
}

export function setUsername(username) {
  return Cookies.set(UsernameKey, username)
}
