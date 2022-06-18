import ReactHookFormTextField from '../components/ReactHookFormTextField/ReactHookFormTextField'
import ReactHookFormCheckbox from '../components/ReactHookFormCheckbox/ReactHookFormCheckbox'
import Navbar from '../components/Navbar/Navbar'
import styles from './index.module.scss'
import { COPY } from '../lib/constants'
import { Button, FormControlLabel } from '@mui/material'
import ReactHookFormSelect from '../components/ReactHookFormSelect/ReactHookFormSelect'
import { useGreeting } from '../lib/hooks'
import { getUsers } from '../lib/api/getUsers'
import { supervisor, user } from '../lib/types/userType'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useYupResolver, validationSchema } from '../lib/hooks/useYupResolver'
import { createUser } from '../lib/api/createUser'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'

interface SupervisorProps {
  supervisors: supervisor[]
}

const Home = (props: SupervisorProps) => {
  // supervisors from getstaticprops
  const { supervisors } = props
  // resolver hook for yup
  const resolver = useYupResolver(validationSchema)
  // useGreeting hook
  const hello = useGreeting()
  // stick those dudes in state
  const [supervisorList] = useState<supervisor[]>(supervisors)

  // set defaults for form
  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    supervisor: '',
  }

  // router access
  const router = useRouter()

  // pull methods to pass as controls to form
  const methods = useForm<user>({
    defaultValues,
    resolver: resolver,
    reValidateMode: 'onChange',
  })

  // destructure what i neeeeeed
  const { handleSubmit, control } = methods

  // sir, certainly you can see you've made an error
  const onError = useCallback(() => {
    toast.error(COPY.ALL_FIELDS_REQUIRED)
  }, [])

  // if successful, redirect to show users, passing validations and on the backend as well
  const onSubmit = useCallback((data: user) => {
    createUser(data as any)
    toast.success(COPY.USER_CREATED)
    router.push('/showUsers')
    console.log(data, 'data for successful post')
  }, [])

  // buncha sick code:
  return (
    <>
      <div>
        <Toaster position="bottom-right" />
      </div>
      <Navbar greeting={hello} />
      <div className={styles.contentContainer}>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className={styles.formContainer}
        >
          <div className={styles.centerContent}>
            <div className={styles.email}>
              <ReactHookFormTextField
                name={'firstName'}
                label={COPY.FIRST_NAME}
                control={control}
              />
            </div>
            <div className={styles.phone}>
              <ReactHookFormTextField
                name={'lastName'}
                control={control}
                label={COPY.LAST_NAME}
              />
            </div>
          </div>
          <div className={styles.centerContent}>
            <div className={styles.email}>
              <FormControlLabel
                label={COPY.EMAIL}
                name={COPY.EMAIL}
                control={
                  <ReactHookFormCheckbox label={COPY.EMAIL} name={COPY.EMAIL} />
                }
              />
              <ReactHookFormTextField
                name={'email'}
                label={COPY.EMAIL}
                control={control}
              />
            </div>
            <div className={styles.phone}>
              <FormControlLabel
                label={COPY.PHONE_NUMBER}
                name={COPY.PHONE_NUMBER}
                control={
                  <ReactHookFormCheckbox
                    label={COPY.PHONE_NUMBER}
                    name={COPY.PHONE_NUMBER}
                  />
                }
              />
              <ReactHookFormTextField
                name={'phoneNumber'}
                control={control}
                label={COPY.PHONE_NUMBER}
              />
            </div>
          </div>
          <div className={styles.bottomContent}>
            <ReactHookFormSelect
              name={'supervisor'}
              control={control}
              label={COPY.SUPERVISOR}
              supervisors={supervisorList ? supervisorList : []}
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={styles.btn}
            >
              {COPY.SUBMIT}
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Home

/* 
the return values are just a bunch of components that are wrapped to enable validations through rhf on top of material ui jazzzzzz
*/

export async function getStaticProps() {
  const supervisors = await getUsers()
  return {
    props: {
      supervisors,
    },
  }
}
