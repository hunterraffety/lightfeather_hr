import axios from 'axios'

import { configureBaseUrl } from '../utils'

const axiosConfig = {
  baseURL: configureBaseUrl('development', 3300),
}

export const request = () => {
  const instance = axios.create({
    ...axiosConfig,
  })
  instance.interceptors.response.use(
    response => response,
    error => {
      return Promise.reject(error)
    }
  )
  return instance
}
