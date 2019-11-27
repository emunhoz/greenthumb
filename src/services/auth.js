import HTTP_CLIENT from './api'

export const TOKEN_KEY = '@company-token'
export const isAuthenticated = () =>
  window.localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => window.localStorage.getItem(TOKEN_KEY)
export const setToken = token => window.localStorage.setItem(TOKEN_KEY, token)
export const removeToken = () => window.localStorage.removeItem(TOKEN_KEY)

export const authLogin = async data => HTTP_CLIENT.post('/auth/login', data)
