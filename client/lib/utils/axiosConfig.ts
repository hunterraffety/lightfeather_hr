import axios from 'axios'
// ^ should i have used isomporphic-fetch?!

// need endpoint infozzzz
import { configureBaseUrl } from '../utils'

const port = Number(process.env.PORT) || 80

// generates axios config for the given request in addition to the base config and handling errors with interceptors
const axiosConfig = {
  baseURL: configureBaseUrl('development', port),
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
