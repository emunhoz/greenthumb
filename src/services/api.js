import axios from 'axios'
import { getToken } from './auth'

const HTTP_CLIENT = axios.create({
  baseURL: 'https://node-api-jwt-test.herokuapp.com/api'
})

HTTP_CLIENT.interceptors.request.use(async config => {
  const token = getToken()
  if (token) {
    config.headers['x-access-token'] = `Bearer ${token}`
  }
  return config
})

export default HTTP_CLIENT
