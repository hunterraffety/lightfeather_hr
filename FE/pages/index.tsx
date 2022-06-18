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
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useYupResolver, validationSchema } from '../lib/hooks/useYupResolver'
import { createUser } from '../lib/api/createUser'
import toast, { Toaster } from 'react-hot-toast'

interface SupervisorProps {
  supervisors: supervisor[]
}

const Home = (props: SupervisorProps) => {
  const { supervisors } = props
  const resolver = useYupResolver(validationSchema)
  const hello = useGreeting()
  const [supervisorList] = useState<supervisor[]>(supervisors)
  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    supervisor: '',
  }

  const methods = useForm<supervisor>({
    defaultValues,
    resolver: resolver,
    reValidateMode: 'onChange',
  })

  const [success, setSuccess] = useState<boolean>(false)

  useEffect(() => {
    if (success === true) {
      reset()
    }
  }, [success])

  const { handleSubmit, reset, control } = methods

  const onError = () => {
    setSuccess(false)
    toast.error(COPY.ALL_FIELDS_REQUIRED)
  }

  const onSubmit = (data: supervisor) => {
    setSuccess(true)
    toast.success(COPY.USER_CREATED)
    createUser(data as any)
    console.log(data, 'data for successful post')
  }

  return (
    <>
      <div>
        <Toaster />
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
            <Button
              variant="contained"
              color="primary"
              className={styles.btn}
              onClick={() => reset({})}
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

export async function getStaticProps() {
  const supervisors = await getUsers()
  return {
    props: {
      supervisors,
    },
  }
}
