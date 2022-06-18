import toast from 'react-hot-toast'
import { createUser } from '../lib/api/createUser'
import { user } from '../lib/types/userType'

// @ts-ignore
export const handleSubmit = async (values: user, { setSubmitting, reset }) => {
  try {
    const { token, userId, isDefaultPassword, isAdmin } = await createUser(
      values
    )
    reset()
  } catch (error) {
    // @ts-ignore
    const status = error.response && error.response.status
    switch (status) {
      case 500:
        toast('Error with server')
        break
      default:
        toast(`Looks like our server just broke. Please try again later.`)
    }
  }

  setSubmitting(false)
}
