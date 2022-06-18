import { request } from '../../lib/utils/axiosConfig'
import { user } from '../types/userType'

// go make me a user dude
export const createUser = async (userInfo: user) => {
  const { data } = await request().post('users', userInfo)
  return data
}
