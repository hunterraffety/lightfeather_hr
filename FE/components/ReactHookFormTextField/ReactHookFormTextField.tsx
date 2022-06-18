import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { FormInputProps } from '../../lib/types/formInputProps'
import styles from './ReactHookFormTextField.module.scss'

const ReactHookFormTextField = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          label={label}
          variant="standard"
          className={styles.textInput}
        />
      )}
    />
  )
}

export default ReactHookFormTextField
