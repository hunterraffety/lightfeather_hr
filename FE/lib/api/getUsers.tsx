import { request } from '../../lib/utils/axiosConfig'
import { URLS } from '../constants'
import { user } from '../types/userType'

export const getUsers = async () => {
  const { data } = await request().get(URLS.LIGHTFEATHER_API)
  return data
}
