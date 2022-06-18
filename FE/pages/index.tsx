import ReactHookFormTextField from '../components/ReactHookFormTextField/ReactHookFormTextField'
import ReactHookFormCheckbox from '../components/ReactHookFormCheckbox/ReactHookFormCheckbox'
import Navbar from '../components/Navbar/Navbar'
import styles from './index.module.scss'
import { COPY } from '../lib/constants'
import { FormControlLabel } from '@mui/material'
import ReactHookFormSelect from '../components/ReactHookFormSelect/ReactHookFormSelect'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.contentContainer}>
        <ReactHookFormTextField
          label={COPY.FIRST_NAME}
          name={COPY.FIRST_NAME}
        />
        <ReactHookFormTextField label={COPY.LAST_NAME} name={COPY.LAST_NAME} />
        <FormControlLabel
          label={COPY.EMAIL}
          name={COPY.EMAIL}
          control={
            <ReactHookFormCheckbox label={COPY.EMAIL} name={COPY.EMAIL} />
          }
        />
        <ReactHookFormTextField
          label={COPY.PHONE_NUMBER}
          name={COPY.PHONE_NUMBER}
        />
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
          label={COPY.PHONE_NUMBER}
          name={COPY.PHONE_NUMBER}
        />
        <ReactHookFormSelect
          label={COPY.SUPERVISOR}
          name={COPY.SUPERVISOR}
          placeholder={COPY.SUPERVISOR}
        />
      </div>
    </>
  )
}

export default Home
