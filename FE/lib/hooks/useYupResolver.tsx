import { useCallback } from 'react'
import { supervisor } from '../types/userType'
import * as yup from 'yup'

export const useYupResolver = (validationSchema: any) =>
  useCallback(
    async (data: supervisor) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        })

        return {
          values,
          errors: {},
        }
      } catch (errors) {
        return {
          values: {},
          // @ts-ignore
          errors: errors.inner.reduce(
            // @ts-ignore
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        }
      }
    },
    [validationSchema]
  )

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  // email: yup.string().email().required('Required'),
  // phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  supervisor: yup.string().required('Required'),
})
